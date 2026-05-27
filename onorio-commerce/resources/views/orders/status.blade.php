@extends('layouts.store')

@section('title', 'Pedido '.$order->pickup_code.' | Drogaria Onorio')

@section('content')
    <section class="page-shell">
        <div class="order-hero">
            <div>
                <span class="category-name">Pedido {{ $order->pickup_code }}</span>
                <h1>{{ $order->statusLabel() }}</h1>
                <p>Total {{ $order->total() }} · Retirada na loja</p>
            </div>
            @if ($order->status === \App\Models\Order::STATUS_PENDING_PAYMENT && $order->payment?->checkout_url)
                <a class="button primary" href="{{ $order->payment->checkout_url }}">Concluir pagamento</a>
            @endif
        </div>

        <div class="status-rail">
            @foreach (\App\Models\Order::statusOptions() as $status => $label)
                <div class="status-step {{ $order->status === $status ? 'current' : '' }}">
                    <span></span>
                    <strong>{{ $label }}</strong>
                </div>
            @endforeach
        </div>

        <div class="cart-layout">
            <div class="cart-lines">
                @foreach ($order->items as $item)
                    <article class="cart-line">
                        <div>
                            <strong>{{ $item->product_name }}</strong>
                            <span>{{ $item->quantity }} unidade(s) · {{ $item->unitPrice() }}</span>
                        </div>
                        <strong>{{ $item->lineTotal() }}</strong>
                    </article>
                @endforeach
            </div>

            <aside class="summary">
                <h2>Retirada</h2>
                <p><strong>{{ $order->pickup_person_name }}</strong></p>
                <p>{{ $order->pickup_person_phone }}</p>
                @if ($order->store)
                    <p><strong>{{ $order->store->name }}</strong></p>
                    <p>{{ $order->store->address }}</p>
                    <p>{{ $order->store->phone }}</p>
                    <p class="small-copy">{{ $order->store->hours }}</p>
                @endif
                <p class="small-copy">Apresente o código {{ $order->pickup_code }} e documento na loja.</p>
                <a class="button secondary full" href="{{ route('storefront') }}">Comprar mais</a>
            </aside>
        </div>
    </section>
@endsection
