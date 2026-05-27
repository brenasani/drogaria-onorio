<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Support\Cart;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

class CartController extends Controller
{
    public function show(): View
    {
        return view('cart.show', [
            'lines' => Cart::lines(),
            'total' => Cart::money(Cart::totalCents()),
            'cartCount' => Cart::count(),
        ]);
    }

    public function add(Request $request, Product $product): RedirectResponse
    {
        $data = $request->validate([
            'quantity' => ['nullable', 'integer', 'min:1', 'max:20'],
        ]);

        Cart::add($product, (int) ($data['quantity'] ?? 1));

        return back()->with('status', "{$product->name} entrou no carrinho.");
    }

    public function update(Request $request, Product $product): RedirectResponse
    {
        $data = $request->validate([
            'quantity' => ['required', 'integer', 'min:0', 'max:20'],
        ]);

        Cart::update($product, (int) $data['quantity']);

        return back()->with('status', 'Carrinho atualizado.');
    }

    public function remove(Product $product): RedirectResponse
    {
        Cart::remove($product);

        return back()->with('status', 'Produto removido do carrinho.');
    }
}
