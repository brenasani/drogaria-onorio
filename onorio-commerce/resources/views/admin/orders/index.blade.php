@extends('layouts.store')

@section('title', 'Pedidos da loja | Drogaria On?rio')

@section('content')
    <section class="page-shell">
        <div class="section-heading">
            <h1>Pedidos da loja</h1>
            <p>Acompanhe pagamentos, separa??o e retirada.</p>
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
            @if ($stores->count() > 1)
                <select name="loja">
                    <option value="">Todas as unidades</option>
                    @foreach ($stores as $store)
                        <option value="{{ $store->id }}" @selected($selectedStoreId === $store->id)>{{ $store->name }}</option>
                    @endforeach
                </select>
            @else
                <input type="hidden" name="loja" value="{{ $stores->first()?->id }}">
            @endif
            <button class="button secondary" type="submit">Filtrar</button>
        </form>

        <div class="admin-list">
            @forelse ($orders as $order)
                <article class="admin-order">
                    <div>
                        <span class="category-name">{{ $order->pickup_code }}</span>
                        <h2>{{ $order->customer_name }}</h2>
                        @if ($order->store)
                            <p class="small-copy"><strong>Unidade:</strong> {{ $order->store->name }} ? {{ $order->store->address }}</p>
                        @endif
                        <p>{{ $order->total() }} ? {{ $order->items->count() }} item(ns) ? {{ $order->created_at->format('d/m/Y H:i') }}</p>
                        @if ($order->prescription_file_path)
                            <p class="small-copy">Receita: {{ $order->prescriptionStatusLabel() }}</p>
                            <a class="text-button" href="{{ route('admin.orders.prescription', $order) }}">Baixar receita</a>
                        @endif
                    </div>
                    <form method="POST" action="{{ route('admin.orders.update', $order) }}">
                        @csrf
                        @method('PATCH')
                        <select name="status">
                            @foreach ($statuses as $value => $label)
                                <option value="{{ $value }}" @selected($order->status === $value)>{{ $label }}</option>
                            @endforeach
                        </select>
                        @if ($order->prescription_file_path)
                            <select name="prescription_status">
                                @foreach (\App\Models\Order::prescriptionStatusOptions() as $value => $label)
                                    <option value="{{ $value }}" @selected($order->prescription_status === $value)>{{ $label }}</option>
                                @endforeach
                            </select>
                        @endif
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
