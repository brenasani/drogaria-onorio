<?php

namespace App\Services;

use App\Models\Category;
use App\Models\IntegrationLog;
use App\Models\Product;
use App\Models\ProductStoreStock;
use App\Models\StockMovement;
use App\Models\Store;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;
use RuntimeException;

class ErpCatalogSyncService
{
    public function syncCatalog(): array
    {
        $log = IntegrationLog::start('catalog.sync');

        try {
            $items = $this->fetchCatalogItems();
            $synced = 0;

            foreach ($items as $item) {
                $this->upsertProductFromPayload($item);
                $synced++;
            }

            $result = ['synced' => $synced];
            $log->succeed($result);

            return $result;
        } catch (\Throwable $exception) {
            $log->fail($exception->getMessage());
            throw $exception;
        }
    }

    public function upsertProductFromPayload(array $payload): Product
    {
        $externalId = (string) ($payload['external_id'] ?? $payload['id'] ?? '');
        $barcode = $payload['barcode'] ?? $payload['ean'] ?? null;

        if ($externalId === '' && ! $barcode) {
            throw new RuntimeException('Produto sem external_id ou barcode.');
        }

        $category = Category::query()->firstOrCreate(
            ['slug' => Str::slug($payload['category'] ?? 'Sem categoria')],
            ['name' => $payload['category'] ?? 'Sem categoria', 'sort_order' => 999],
        );

        $product = Product::query()
            ->when($externalId !== '', fn ($query) => $query->where('external_id', $externalId))
            ->when($externalId === '' && $barcode, fn ($query) => $query->where('barcode', $barcode))
            ->first();

        $productData = [
            'external_id' => $externalId ?: null,
            'barcode' => $barcode,
            'category_id' => $category->id,
            'name' => $payload['name'] ?? $payload['description'] ?? 'Produto sem nome',
            'slug' => $product?->slug ?: $this->uniqueSlug($payload['name'] ?? $payload['description'] ?? $externalId ?: $barcode),
            'description' => $payload['description'] ?? $payload['name'] ?? 'Produto sincronizado do sistema da loja.',
            'price_cents' => $this->priceToCents($payload['price'] ?? $payload['price_cents'] ?? 0),
            'minimum_stock' => (int) ($payload['minimum_stock'] ?? $product?->minimum_stock ?? 3),
            'requires_prescription' => (bool) ($payload['requires_prescription'] ?? $payload['prescription_required'] ?? false),
            'is_active' => (bool) ($payload['is_active'] ?? $payload['active'] ?? true),
            'image_color' => $payload['image_color'] ?? $product?->image_color ?? '#39896A',
            'image_text' => $payload['image_text'] ?? $product?->image_text ?? Str::upper(Str::substr($payload['name'] ?? 'ON', 0, 2)),
            'external_synced_at' => now(),
        ];

        if ($product) {
            $product->update($productData);
        } else {
            $product = Product::query()->create([
                ...$productData,
                'stock_quantity' => 0,
            ]);
        }

        $stocks = $payload['stocks'] ?? $payload['stock_by_store'] ?? [];
        if (is_array($stocks)) {
            foreach ($stocks as $storeReference => $quantity) {
                $store = $this->resolveStore($storeReference, is_array($quantity) ? $quantity : []);
                $stockQuantity = is_array($quantity) ? (int) ($quantity['quantity'] ?? $quantity['stock'] ?? 0) : (int) $quantity;
                $this->setStoreStock($product, $store, $stockQuantity, 'catalog_sync');
            }
        }

        $this->refreshTotalStock($product);

        return $product->refresh();
    }

    public function updateStockFromPayload(array $payload): ProductStoreStock
    {
        $log = IntegrationLog::start('stock.update', $payload, (string) ($payload['external_id'] ?? $payload['product_external_id'] ?? ''));

        try {
            $product = $this->resolveProduct($payload);
            $store = $this->resolveStore($payload['external_store_id'] ?? $payload['store_id'] ?? null, $payload);
            $quantity = (int) ($payload['quantity'] ?? $payload['stock'] ?? 0);
            $stock = $this->setStoreStock($product, $store, $quantity, 'external_stock_update');
            $this->refreshTotalStock($product);
            $log->succeed(['quantity' => $quantity], $product, $store);

            return $stock;
        } catch (\Throwable $exception) {
            $log->fail($exception->getMessage());
            throw $exception;
        }
    }

    private function fetchCatalogItems(): array
    {
        $baseUrl = config('services.erp.base_url');
        $token = config('services.erp.token');
        $catalogPath = config('services.erp.catalog_path', '/products');

        if (! $baseUrl || ! $token) {
            return [];
        }

        $response = Http::withToken($token)
            ->acceptJson()
            ->timeout(30)
            ->get(rtrim($baseUrl, '/').'/'.ltrim($catalogPath, '/'));

        if (! $response->successful()) {
            throw new RuntimeException('Falha ao consultar ERP: HTTP '.$response->status());
        }

        $json = $response->json();

        return $json['data'] ?? $json['products'] ?? $json ?? [];
    }

    private function resolveProduct(array $payload): Product
    {
        $externalId = $payload['external_id'] ?? $payload['product_external_id'] ?? null;
        $barcode = $payload['barcode'] ?? $payload['ean'] ?? null;

        $product = Product::query()
            ->when($externalId, fn ($query) => $query->where('external_id', $externalId))
            ->when(! $externalId && $barcode, fn ($query) => $query->where('barcode', $barcode))
            ->first();

        if (! $product) {
            throw new RuntimeException('Produto externo nao encontrado no site.');
        }

        return $product;
    }

    private function resolveStore(string|int|null $reference, array $payload = []): Store
    {
        $query = Store::query();

        if ($reference) {
            $query->where('external_store_id', $reference)
                ->orWhere('id', $reference)
                ->orWhere('slug', $reference);
        }

        $store = $query->first();

        if (! $store && isset($payload['store_slug'])) {
            $store = Store::query()->where('slug', $payload['store_slug'])->first();
        }

        if (! $store) {
            throw new RuntimeException('Loja externa nao encontrada no site.');
        }

        return $store;
    }

    private function setStoreStock(Product $product, Store $store, int $quantity, string $reason): ProductStoreStock
    {
        $stock = ProductStoreStock::query()->firstOrCreate(
            ['product_id' => $product->id, 'store_id' => $store->id],
            ['quantity' => 0],
        );
        $previous = $stock->quantity;
        $stock->forceFill([
            'quantity' => max(0, $quantity),
            'external_synced_at' => now(),
        ])->save();

        $delta = $stock->quantity - $previous;
        if ($delta !== 0) {
            StockMovement::query()->create([
                'product_id' => $product->id,
                'store_id' => $store->id,
                'quantity_delta' => $delta,
                'stock_after' => $stock->quantity,
                'reason' => $reason,
                'actor' => 'erp',
            ]);
        }

        return $stock;
    }

    private function refreshTotalStock(Product $product): void
    {
        $product->forceFill([
            'stock_quantity' => ProductStoreStock::query()->where('product_id', $product->id)->sum('quantity'),
        ])->save();
    }

    private function priceToCents(int|float|string $value): int
    {
        if (is_int($value)) {
            return $value;
        }

        $normalized = str_replace(['R$', ' ', '.'], '', (string) $value);
        $normalized = str_replace(',', '.', $normalized);

        return max(0, (int) round(((float) $normalized) * 100));
    }

    private function uniqueSlug(string $name): string
    {
        $base = Str::slug($name) ?: 'produto';
        $slug = $base;
        $counter = 2;

        while (Product::query()->where('slug', $slug)->exists()) {
            $slug = $base.'-'.$counter++;
        }

        return $slug;
    }
}
