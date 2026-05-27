<?php

namespace App\Support;

use App\Models\Product;
use Illuminate\Support\Collection;

class Cart
{
    public static function add(Product $product, int $quantity = 1): void
    {
        if (! $product->is_active || $product->stock_quantity < 1) {
            return;
        }

        $cart = session('cart', []);
        $currentQuantity = (int) ($cart[$product->id] ?? 0);
        $cart[$product->id] = min($product->stock_quantity, $currentQuantity + max(1, $quantity));

        session(['cart' => $cart]);
    }

    public static function update(Product $product, int $quantity): void
    {
        if ($quantity < 1) {
            self::remove($product);

            return;
        }

        $cart = session('cart', []);
        $cart[$product->id] = min($product->stock_quantity, $quantity);
        session(['cart' => $cart]);
    }

    public static function remove(Product|int $product): void
    {
        $id = $product instanceof Product ? $product->id : $product;
        $cart = session('cart', []);
        unset($cart[$id]);
        session(['cart' => $cart]);
    }

    public static function clear(): void
    {
        session()->forget('cart');
    }

    public static function lines(): Collection
    {
        $cart = session('cart', []);

        if ($cart === []) {
            return collect();
        }

        $products = Product::query()
            ->with('category')
            ->whereIn('id', array_keys($cart))
            ->get()
            ->keyBy('id');

        return collect($cart)
            ->map(function (int $quantity, string|int $productId) use ($products): ?array {
                $product = $products->get((int) $productId);

                if (! $product || ! $product->is_active) {
                    return null;
                }

                $quantity = min($quantity, $product->stock_quantity);

                if ($quantity < 1) {
                    return null;
                }

                return [
                    'product' => $product,
                    'quantity' => $quantity,
                    'subtotal_cents' => $product->price_cents * $quantity,
                ];
            })
            ->filter()
            ->values();
    }

    public static function count(): int
    {
        return self::lines()->sum('quantity');
    }

    public static function totalCents(): int
    {
        return self::lines()->sum('subtotal_cents');
    }

    public static function money(int $cents): string
    {
        return 'R$ '.number_format($cents / 100, 2, ',', '.');
    }
}
