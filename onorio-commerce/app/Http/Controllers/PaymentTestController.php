<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Support\Cart;
use Illuminate\Http\RedirectResponse;
use Illuminate\View\View;

class PaymentTestController extends Controller
{
    public function show(Order $order): View
    {
        return view('payments.test', [
            'order' => $order->load('items', 'payment', 'store'),
            'cartCount' => Cart::count(),
        ]);
    }

    public function approve(Order $order): RedirectResponse
    {
        $order->markAsPaid('local-test-'.$order->pickup_code);

        return redirect()->route('orders.status', $order)
            ->with('status', 'Pagamento teste aprovado. Pedido liberado para separação.');
    }
}
