<?php

namespace App\Http\Controllers;

use App\Models\AdminAuditLog;
use App\Models\Category;
use App\Models\Product;
use App\Models\ProductStoreStock;
use App\Models\StockMovement;
use App\Support\AdminStoreScope;
use App\Support\Cart;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Illuminate\View\View;

class AdminProductController extends Controller
{
    public function index(Request $request): View
    {
        $search = $request->string('busca')->toString();
        $categoryId = $request->integer('categoria') ?: null;

        $products = Product::query()
            ->with('category', 'storeStocks.store')
            ->when($search, function ($query) use ($search): void {
                $query->where(function ($inner) use ($search): void {
                    $inner->where('name', 'like', "%{$search}%")
                        ->orWhere('description', 'like', "%{$search}%");
                });
            })
            ->when($categoryId, fn ($query) => $query->where('category_id', $categoryId))
            ->orderByDesc('is_active')
            ->orderBy('name')
            ->paginate(20)
            ->withQueryString();

        return view('admin.products.index', [
            'products' => $products,
            'categories' => $this->categories(),
            'search' => $search,
            'selectedCategoryId' => $categoryId,
            'stores' => $this->stores(),
            'cartCount' => Cart::count(),
        ]);
    }

    public function create(): View
    {
        return view('admin.products.form', [
            'product' => new Product([
                'stock_quantity' => 0,
                'minimum_stock' => 3,
                'is_active' => true,
                'requires_prescription' => false,
                'image_color' => '#39896A',
            ]),
            'categories' => $this->categories(),
            'stores' => $this->stores(),
            'cartCount' => Cart::count(),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $payload = $this->validatedData($request);
        $product = Product::query()->create($payload['product']);
        $this->syncStoreStocks($product, $payload['store_stocks'], 'product_created', 0);
        $product->refresh();
        AdminAuditLog::record('product.created', $product, ['data' => $payload['product'], 'store_stocks' => $payload['store_stocks']], $request);

        return redirect()->route('admin.products.index')
            ->with('status', 'Produto criado com sucesso.');
    }

    public function edit(Product $product): View
    {
        return view('admin.products.form', [
            'product' => $product->load('storeStocks'),
            'categories' => $this->categories(),
            'stores' => $this->stores(),
            'cartCount' => Cart::count(),
        ]);
    }

    public function update(Request $request, Product $product): RedirectResponse
    {
        $before = $product->only(['name', 'price_cents', 'stock_quantity', 'is_active', 'requires_prescription']);
        $previousStock = $product->stock_quantity;
        $payload = $this->validatedData($request, $product);
        $product->update($payload['product']);
        $this->syncStoreStocks($product, $payload['store_stocks'], 'admin_adjustment', $previousStock);
        $product->refresh();

        AdminAuditLog::record('product.updated', $product, ['before' => $before, 'after' => $payload['product'], 'store_stocks' => $payload['store_stocks']], $request);

        return redirect()->route('admin.products.index')
            ->with('status', 'Produto atualizado com sucesso.');
    }

    public function destroy(Product $product): RedirectResponse
    {
        if ($product->orderItems()->exists()) {
            $product->update(['is_active' => false]);
            AdminAuditLog::record('product.disabled', $product);

            return redirect()->route('admin.products.index')
                ->with('status', 'Produto tem histórico de pedidos e foi desativado.');
        }

        AdminAuditLog::record('product.deleted', $product, ['name' => $product->name]);
        $product->delete();

        return redirect()->route('admin.products.index')
            ->with('status', 'Produto excluído com sucesso.');
    }

    private function validatedData(Request $request, ?Product $product = null): array
    {
        $data = $request->validate([
            'category_id' => ['required', 'integer', 'exists:categories,id'],
            'name' => ['required', 'string', 'max:160'],
            'slug' => [
                'nullable',
                'string',
                'max:180',
                Rule::unique('products', 'slug')->ignore($product?->id),
            ],
            'description' => ['required', 'string', 'max:1000'],
            'price' => ['required', 'string', 'max:20'],
            'stock_quantity' => ['required', 'integer', 'min:0', 'max:999999'],
            'store_stocks' => ['nullable', 'array'],
            'store_stocks.*' => ['nullable', 'integer', 'min:0', 'max:999999'],
            'minimum_stock' => ['required', 'integer', 'min:0', 'max:999999'],
            'requires_prescription' => ['nullable', 'boolean'],
            'is_active' => ['nullable', 'boolean'],
            'image_color' => ['nullable', 'string', 'max:20'],
            'image_text' => ['nullable', 'string', 'max:12'],
            'image_file' => ['nullable', 'image', 'max:4096'],
        ]);

        $imagePath = $product?->image_path;

        if ($request->hasFile('image_file')) {
            if ($imagePath) {
                Storage::disk('public')->delete($imagePath);
            }
            $imagePath = $request->file('image_file')->store('products', 'public');
        }

        $storeStocks = collect($data['store_stocks'] ?? [])
            ->mapWithKeys(fn ($quantity, $storeId): array => [(int) $storeId => (int) $quantity])
            ->all();
        $totalStock = $storeStocks === [] ? (int) $data['stock_quantity'] : array_sum($storeStocks);

        return [
            'product' => [
                'category_id' => (int) $data['category_id'],
                'name' => $data['name'],
                'slug' => Str::slug(($data['slug'] ?? '') ?: $data['name']),
                'description' => $data['description'],
                'price_cents' => $this->moneyToCents($data['price']),
                'stock_quantity' => $totalStock,
                'minimum_stock' => (int) $data['minimum_stock'],
                'requires_prescription' => $request->boolean('requires_prescription'),
                'is_active' => $request->boolean('is_active'),
                'image_color' => $data['image_color'] ?: '#39896A',
                'image_text' => $data['image_text'] ? Str::upper($data['image_text']) : null,
                'image_path' => $imagePath,
            ],
            'store_stocks' => $storeStocks,
        ];
    }



    private function syncStoreStocks(Product $product, array $storeStocks, string $reason, int $previousTotalStock): void
    {
        if ($storeStocks === []) {
            $this->recordStockAdjustment($product, $product->stock_quantity - $previousTotalStock, $reason);

            return;
        }

        foreach ($this->stores() as $store) {
            if (! array_key_exists($store->id, $storeStocks)) {
                continue;
            }

            $stock = ProductStoreStock::query()->firstOrCreate(
                ['product_id' => $product->id, 'store_id' => $store->id],
                ['quantity' => 0],
            );
            $previous = $stock->quantity;
            $stock->forceFill(['quantity' => $storeStocks[$store->id]])->save();
            $delta = $stock->quantity - $previous;

            if ($delta !== 0) {
                $this->recordStockAdjustment($product, $delta, $reason, $store->id, $stock->quantity);
            }
        }

        $product->forceFill([
            'stock_quantity' => ProductStoreStock::query()
                ->where('product_id', $product->id)
                ->sum('quantity') ?: $product->stock_quantity,
        ])->save();
    }

    private function recordStockAdjustment(Product $product, int $delta, string $reason, ?int $storeId = null, ?int $stockAfter = null): void
    {
        if ($delta === 0) {
            return;
        }

        StockMovement::query()->create([
            'product_id' => $product->id,
            'store_id' => $storeId,
            'quantity_delta' => $delta,
            'stock_after' => $stockAfter ?? $product->stock_quantity,
            'reason' => $reason,
            'actor' => 'admin',
        ]);
    }

    private function moneyToCents(string $value): int
    {
        $normalized = str_replace(['R$', ' ', '.'], '', $value);
        $normalized = str_replace(',', '.', $normalized);
        $number = (float) $normalized;

        return max(0, (int) round($number * 100));
    }

    private function categories()
    {
        return Category::query()->orderBy('sort_order')->orderBy('name')->get();
    }

    private function stores()
    {
        return AdminStoreScope::stores();
    }
}
