<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Support\Cart;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

class AdminOrderController extends Controller
{
    public function index(Request $request): View
    {
        $status = $request->string('status')->toString();

        $orders = Order::query()
            ->with('items')
            ->when($status, fn ($query) => $query->where('status', $status))
            ->latest()
            ->paginate(20)
            ->withQueryString();

        return view('admin.orders.index', [
            'orders' => $orders,
            'statuses' => Order::statusOptions(),
            'selectedStatus' => $status,
            'cartCount' => Cart::count(),
        ]);
    }

    public function update(Request $request, Order $order): RedirectResponse
    {
        $data = $request->validate([
            'status' => ['required', 'string', 'in:'.implode(',', array_keys(Order::statusOptions()))],
        ]);

        if ($data['status'] === Order::STATUS_PAID && $order->payment_status !== Order::PAYMENT_APPROVED) {
            $order->markAsPaid('manual-'.$order->pickup_code);
        } else {
            $order->forceFill([
                'status' => $data['status'],
                'ready_at' => $data['status'] === Order::STATUS_READY ? ($order->ready_at ?? now()) : $order->ready_at,
            ])->save();
        }

        return back()->with('status', 'Status do pedido atualizado.');
    }
}
