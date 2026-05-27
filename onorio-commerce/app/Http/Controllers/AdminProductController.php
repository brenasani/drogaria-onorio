<?php

namespace App\Http\Controllers;

use App\Models\AdminAuditLog;
use App\Models\Category;
use App\Models\Product;
use App\Models\StockMovement;
use App\Support\Cart;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
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
            ->with('category')
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
            'cartCount' => Cart::count(),
        ]);
    }

    public function create(): View
    {
        return view('admin.products.form', [
            'product' => new Product([
                'stock_quantity' => 0,
                'is_active' => true,
                'requires_prescription' => false,
                'image_color' => '#39896A',
            ]),
            'categories' => $this->categories(),
            'cartCount' => Cart::count(),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $this->validatedData($request);
        $product = Product::query()->create($data);
        $this->recordStockAdjustment($product, $data['stock_quantity'], 'product_created');
        AdminAuditLog::record('product.created', $product, ['data' => $data], $request);

        return redirect()->route('admin.products.index')
            ->with('status', 'Produto criado com sucesso.');
    }

    public function edit(Product $product): View
    {
        return view('admin.products.form', [
            'product' => $product,
            'categories' => $this->categories(),
            'cartCount' => Cart::count(),
        ]);
    }

    public function update(Request $request, Product $product): RedirectResponse
    {
        $before = $product->only(['name', 'price_cents', 'stock_quantity', 'is_active', 'requires_prescription']);
        $previousStock = $product->stock_quantity;
        $data = $this->validatedData($request, $product);
        $product->update($data);
        $product->refresh();

        if ($previousStock !== $product->stock_quantity) {
            $this->recordStockAdjustment($product, $product->stock_quantity - $previousStock, 'admin_adjustment');
        }

        AdminAuditLog::record('product.updated', $product, ['before' => $before, 'after' => $data], $request);

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
            'requires_prescription' => ['nullable', 'boolean'],
            'is_active' => ['nullable', 'boolean'],
            'image_color' => ['nullable', 'string', 'max:20'],
            'image_text' => ['nullable', 'string', 'max:12'],
        ]);

        return [
            'category_id' => (int) $data['category_id'],
            'name' => $data['name'],
            'slug' => Str::slug(($data['slug'] ?? '') ?: $data['name']),
            'description' => $data['description'],
            'price_cents' => $this->moneyToCents($data['price']),
            'stock_quantity' => (int) $data['stock_quantity'],
            'requires_prescription' => $request->boolean('requires_prescription'),
            'is_active' => $request->boolean('is_active'),
            'image_color' => $data['image_color'] ?: '#39896A',
            'image_text' => $data['image_text'] ? Str::upper($data['image_text']) : null,
        ];
    }


    private function recordStockAdjustment(Product $product, int $delta, string $reason): void
    {
        if ($delta === 0) {
            return;
        }

        StockMovement::query()->create([
            'product_id' => $product->id,
            'quantity_delta' => $delta,
            'stock_after' => $product->stock_quantity,
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
}
