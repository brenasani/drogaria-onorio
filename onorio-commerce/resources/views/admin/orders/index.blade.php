@extends('layouts.store')

@section('title', 'Pedidos da loja | Drogaria Onorio')

@section('content')
    <section class="page-shell">
        <div class="section-heading">
            <h1>Pedidos da loja</h1>
            <p>Acompanhe pagamentos, separação e retirada.</p>
        </div>

        <form method="POST" action="{{ route('admin.logout') }}">
            @csrf
            <button class="button secondary" type="submit">Sair do painel</button>
        </form>

        @include('admin._tabs')

        <form class="status-filter" method="GET" action="{{ route('admin.orders.index') }}">
            <select name="status">
                <option value="">Todos os status</option>
                @foreach ($statuses as $value => $label)
                    <option value="{{ $value }}" @selected($selectedStatus === $value)>{{ $label }}</option>
                @endforeach
            </select>
            <button class="button secondary" type="submit">Filtrar</button>
        </form>

        <div class="admin-list">
            @forelse ($orders as $order)
                <article class="admin-order">
                    <div>
                        <span class="category-name">{{ $order->pickup_code }}</span>
                        <h2>{{ $order->customer_name }}</h2>
                        <p>{{ $order->total() }} · {{ $order->items->count() }} item(ns) · {{ $order->created_at->format('d/m/Y H:i') }}</p>
                    </div>
                    <form method="POST" action="{{ route('admin.orders.update', $order) }}">
                        @csrf
                        @method('PATCH')
                        <select name="status">
                            @foreach ($statuses as $value => $label)
                                <option value="{{ $value }}" @selected($order->status === $value)>{{ $label }}</option>
                            @endforeach
                        </select>
                        <button class="button primary" type="submit">Salvar</button>
                    </form>
                    <a class="text-button" href="{{ route('orders.status', $order) }}">Abrir pedido</a>
                </article>
            @empty
                <div class="empty-state">
                    <h2>Nenhum pedido ainda</h2>
                    <p>Assim que uma compra for feita, ela aparece aqui.</p>
                </div>
            @endforelse
        </div>

        {{ $orders->links() }}
    </section>
@endsection
