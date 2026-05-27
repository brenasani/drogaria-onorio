<?php

namespace App\Http\Controllers;

use App\Models\AdminAuditLog;
use App\Models\Order;
use App\Models\Store;
use App\Support\Cart;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;
use Illuminate\View\View;
use Symfony\Component\HttpFoundation\StreamedResponse;

class AdminOrderController extends Controller
{
    public function index(Request $request): View
    {
        $status = $request->string('status')->toString();
        $storeId = $request->integer('loja') ?: null;

        $orders = Order::query()
            ->with('items', 'payment', 'store')
            ->when($status, fn ($query) => $query->where('status', $status))
            ->when($storeId, fn ($query) => $query->where('store_id', $storeId))
            ->latest()
            ->paginate(20)
            ->withQueryString();

        return view('admin.orders.index', [
            'orders' => $orders,
            'statuses' => Order::statusOptions(),
            'selectedStatus' => $status,
            'stores' => Store::query()->where('is_active', true)->orderBy('sort_order')->get(),
            'selectedStoreId' => $storeId,
            'cartCount' => Cart::count(),
        ]);
    }

    public function update(Request $request, Order $order): RedirectResponse
    {
        $data = $request->validate([
            'status' => ['required', 'string', 'in:'.implode(',', array_keys(Order::statusOptions()))],
            'prescription_status' => ['nullable', 'string', Rule::in(array_keys(Order::prescriptionStatusOptions()))],
        ]);

        $before = $order->only(['status', 'payment_status', 'prescription_status']);

        if ($data['status'] === Order::STATUS_PAID && $order->payment_status !== Order::PAYMENT_APPROVED) {
            $order->markAsPaid('manual-'.$order->pickup_code);
        } else {
            $order->forceFill([
                'status' => $data['status'],
                'ready_at' => $data['status'] === Order::STATUS_READY ? ($order->ready_at ?? now()) : $order->ready_at,
            ])->save();
        }

        if (isset($data['prescription_status']) && $order->prescription_file_path) {
            $order->forceFill([
                'prescription_status' => $data['prescription_status'],
                'prescription_reviewed_at' => now(),
            ])->save();
        }

        AdminAuditLog::record('order.updated', $order, [
            'before' => $before,
            'after' => $order->fresh()->only(['status', 'payment_status', 'prescription_status']),
        ], $request);

        return back()->with('status', 'Status do pedido atualizado.');
    }

    public function prescription(Order $order): StreamedResponse
    {
        abort_unless($order->prescription_file_path && Storage::exists($order->prescription_file_path), 404);

        AdminAuditLog::record('order.prescription_downloaded', $order);

        return Storage::download(
            $order->prescription_file_path,
            $order->prescription_original_name ?: 'receita-'.$order->pickup_code
        );
    }
}
