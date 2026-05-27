<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Services\MercadoPagoCheckout;
use App\Support\Cart;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\View\View;

class CheckoutController extends Controller
{
    public function show(): RedirectResponse|View
    {
        $lines = Cart::lines();

        if ($lines->isEmpty()) {
            return redirect()->route('storefront')->with('status', 'Escolha seus produtos para iniciar a compra.');
        }

        return view('checkout.show', [
            'lines' => $lines,
            'total' => Cart::money(Cart::totalCents()),
            'cartCount' => Cart::count(),
        ]);
    }

    public function store(Request $request, MercadoPagoCheckout $checkout): RedirectResponse
    {
        $lines = Cart::lines();

        if ($lines->isEmpty()) {
            return redirect()->route('storefront')->with('status', 'Seu carrinho ficou vazio.');
        }

        $stockProblem = $lines->first(fn (array $line): bool => $line['quantity'] > $line['product']->stock_quantity);

        if ($stockProblem) {
            return redirect()->route('cart.show')->with('status', 'Um item do carrinho mudou de estoque. Revise antes de pagar.');
        }

        $data = $request->validate([
            'customer_name' => ['required', 'string', 'max:120'],
            'customer_email' => ['required', 'email', 'max:150'],
            'customer_phone' => ['required', 'string', 'max:30'],
            'customer_document' => ['nullable', 'string', 'max:30'],
            'pickup_person_name' => ['required', 'string', 'max:120'],
            'pickup_person_phone' => ['required', 'string', 'max:30'],
            'notes' => ['nullable', 'string', 'max:500'],
        ]);

        $order = DB::transaction(function () use ($data, $lines): Order {
            $order = Order::query()->create([
                ...$data,
                'status' => Order::STATUS_PENDING_PAYMENT,
                'payment_status' => Order::PAYMENT_PENDING,
                'payment_provider' => 'mercado_pago',
                'total_cents' => Cart::totalCents(),
                'pickup_code' => $this->pickupCode(),
            ]);

            foreach ($lines as $line) {
                $product = $line['product'];
                $order->items()->create([
                    'product_id' => $product->id,
                    'product_name' => $product->name,
                    'unit_price_cents' => $product->price_cents,
                    'quantity' => $line['quantity'],
                    'line_total_cents' => $line['subtotal_cents'],
                ]);
            }

            return $order;
        });

        $redirect = $checkout->createPreference($order);
        Cart::clear();

        return redirect($redirect['url'])
            ->with('status', $redirect['mode'] === 'local_test'
                ? 'Pedido criado em modo teste. Configure o Mercado Pago para pagamento real.'
                : 'Pedido criado. Finalize o pagamento no Mercado Pago.');
    }

    public function status(Order $order): View
    {
        return view('orders.status', [
            'order' => $order->load('items', 'payment'),
            'cartCount' => Cart::count(),
        ]);
    }

    private function pickupCode(): string
    {
        do {
            $code = 'ON'.Str::upper(Str::random(6));
        } while (Order::query()->where('pickup_code', $code)->exists());

        return $code;
    }
}
