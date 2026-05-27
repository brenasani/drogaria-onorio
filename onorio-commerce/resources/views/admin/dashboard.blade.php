@extends('layouts.store')

@section('title', 'Dashboard | Painel Drogaria Onório')

@section('content')
    <section class="page-shell">
        <div class="section-heading">
            <div>
                <span class="category-name">Painel administrativo</span>
                <h1>Dashboard</h1>
                <p>Visão rápida de pedidos, faturamento, receitas e estoque.</p>
            </div>
        </div>

        @include('admin._tabs')

        <div class="dashboard-cards">
            <article><span>Pedidos hoje</span><strong>{{ $todayOrders }}</strong></article>
            <article><span>Faturamento hoje</span><strong>{{ \App\Support\Cart::money($todayRevenue) }}</strong></article>
            <article><span>Aguardando pagamento</span><strong>{{ $pendingPayments }}</strong></article>
            <article><span>Receitas pendentes</span><strong>{{ $pendingPrescriptions }}</strong></article>
            <article><span>Prontos retirada</span><strong>{{ $readyOrders }}</strong></article>
        </div>

        <div class="dashboard-columns">
            <section>
                <h2>Estoque baixo</h2>
                <div class="admin-list">
                    @forelse ($lowStockProducts as $product)
                        <article class="admin-order">
                            <div>
                                <span class="category-name">mínimo {{ $product->minimum_stock }}</span>
                                <h2>{{ $product->name }}</h2>
                                <p>Estoque atual: {{ $product->stock_quantity }}</p>
                            </div>
                            <a class="button secondary" href="{{ route('admin.products.edit', $product) }}">Ajustar</a>
                        </article>
                    @empty
                        <p class="small-copy">Nenhum produto abaixo do mínimo.</p>
                    @endforelse
                </div>
            </section>

            <section>
                <h2>Pedidos recentes</h2>
                <div class="admin-list">
                    @foreach ($recentOrders as $order)
                        <article class="admin-order">
                            <div>
                                <span class="category-name">{{ $order->pickup_code }}</span>
                                <h2>{{ $order->customer_name }}</h2>
                                <p>{{ $order->statusLabel() }} · {{ $order->total() }}</p>
                            </div>
                            <a class="text-button" href="{{ route('orders.status', $order) }}">Abrir</a>
                        </article>
                    @endforeach
                </div>
            </section>
        </div>
    </section>
@endsection
