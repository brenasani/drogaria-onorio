<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Product;
use App\Support\AdminStoreScope;
use App\Support\Cart;
use Illuminate\View\View;

class AdminDashboardController extends Controller
{
    public function __invoke(): View
    {
        $ordersQuery = AdminStoreScope::applyToOrders(Order::query());
        $todayOrders = (clone $ordersQuery)->whereDate('created_at', today())->count();
        $todayRevenue = (clone $ordersQuery)
            ->whereDate('paid_at', today())
            ->where('payment_status', Order::PAYMENT_APPROVED)
            ->sum('total_cents');

        return view('admin.dashboard', [
            'cartCount' => Cart::count(),
            'todayOrders' => $todayOrders,
            'todayRevenue' => $todayRevenue,
            'pendingPayments' => (clone $ordersQuery)->where('status', Order::STATUS_PENDING_PAYMENT)->count(),
            'pendingPrescriptions' => (clone $ordersQuery)->where('prescription_status', Order::PRESCRIPTION_PENDING)->count(),
            'readyOrders' => (clone $ordersQuery)->where('status', Order::STATUS_READY)->count(),
            'lowStockProducts' => Product::query()
                ->whereColumn('stock_quantity', '<=', 'minimum_stock')
                ->orderBy('stock_quantity')
                ->limit(8)
                ->get(),
            'recentOrders' => (clone $ordersQuery)->latest()->limit(8)->get(),
        ]);
    }
}
