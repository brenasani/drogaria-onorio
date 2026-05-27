@extends('layouts.store')

@section('title', 'Pagamento teste | Drogaria Onorio')

@section('content')
    <section class="page-shell narrow">
        <div class="payment-test">
            <span class="category-name">Ambiente local</span>
            <h1>Pagamento teste</h1>
            <p>O pedido {{ $order->pickup_code }} foi criado. Quando a credencial do Mercado Pago for colocada no arquivo .env, esta etapa redireciona para o checkout real.</p>
            <div class="summary-row">
                <span>Total</span>
                <strong>{{ $order->total() }}</strong>
            </div>
            <form method="POST" action="{{ route('payments.test.approve', $order) }}">
                @csrf
                <button class="button primary full" type="submit">Simular pagamento aprovado</button>
            </form>
            <a class="button ghost full" href="{{ route('orders.status', $order) }}">Ver status do pedido</a>
        </div>
    </section>
@endsection
