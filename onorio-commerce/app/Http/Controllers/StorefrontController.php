<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use App\Support\Cart;
use App\Support\StoreContext;
use Illuminate\Http\Request;
use Illuminate\View\View;

class StorefrontController extends Controller
{
    public function home(): View
    {
        $store = StoreContext::current();
        $storeId = $store?->id;

        $categories = Category::query()
            ->withCount(['products' => fn ($query) => $query->availableAtStore($storeId)])
            ->orderBy('sort_order')
            ->get();

        $featuredProducts = Product::query()
            ->with('category')
            ->availableAtStore($storeId)
            ->orderBy('requires_prescription')
            ->orderBy('name')
            ->limit(4)
            ->get();

        return view('storefront.home', [
            'categories' => $categories,
            'featuredProducts' => $featuredProducts,
            'cartCount' => Cart::count(),
            'cartTotal' => Cart::money(Cart::totalCents()),
            'stores' => StoreContext::stores(),
            'selectedStore' => $store,
        ]);
    }

    public function index(Request $request): View
    {
        $store = StoreContext::current();
        $storeId = $store?->id;

        $categories = Category::query()
            ->withCount(['products' => fn ($query) => $query->availableAtStore($storeId)])
            ->orderBy('sort_order')
            ->get();

        $selectedCategory = $request->string('categoria')->toString();
        $search = $request->string('busca')->toString();

        $products = Product::query()
            ->with('category', 'storeStocks')
            ->availableAtStore($storeId)
            ->when($selectedCategory, function ($query) use ($selectedCategory): void {
                $query->whereHas('category', fn ($categoryQuery) => $categoryQuery->where('slug', $selectedCategory));
            })
            ->when($search, function ($query) use ($search): void {
                $query->where(function ($inner) use ($search): void {
                    $inner->where('name', 'like', "%{$search}%")
                        ->orWhere('description', 'like', "%{$search}%");
                });
            })
            ->orderBy('requires_prescription')
            ->orderBy('name')
            ->get();

        return view('storefront.index', [
            'categories' => $categories,
            'products' => $products,
            'selectedCategory' => $selectedCategory,
            'search' => $search,
            'cartCount' => Cart::count(),
            'cartTotal' => Cart::money(Cart::totalCents()),
            'stores' => StoreContext::stores(),
            'selectedStore' => $store,
        ]);
    }

    public function show(Product $product): View
    {
        $store = StoreContext::current();
        abort_unless($product->is_active && $product->stockForStore($store?->id) > 0, 404);

        return view('storefront.show', [
            'product' => $product->load('category', 'storeStocks'),
            'storeStock' => $product->stockForStore($store?->id),
            'selectedStore' => $store,
            'cartCount' => Cart::count(),
        ]);
    }
}
