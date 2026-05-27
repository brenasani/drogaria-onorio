@extends('layouts.store')

@section('title', 'Carrinho | Drogaria Onorio')

@section('content')
    <section class="page-shell">
        <div class="section-heading">
            <h1>Carrinho</h1>
            <p>Revise os produtos antes de pagar online e retirar na loja.</p>
        </div>

        @if ($lines->isEmpty())
            <div class="empty-state">
                <h2>Seu carrinho está vazio</h2>
                <p>Escolha produtos na vitrine para montar o pedido.</p>
                <a class="button primary" href="{{ route('storefront') }}">Ver produtos</a>
            </div>
        @else
            <div class="cart-layout">
                <div class="cart-lines">
                    @foreach ($lines as $line)
                        @php($product = $line['product'])
                        <article class="cart-line">
                            <div class="mini-art" style="--product-color: {{ $product->image_color }}">{{ $product->image_text }}</div>
                            <div>
                                <strong>{{ $product->name }}</strong>
                                <span>{{ $product->category->name }} · {{ $product->price() }}</span>
                            </div>
                            <form method="POST" action="{{ route('cart.update', $product) }}">
                                @csrf
                                @method('PATCH')
                                <label>
                                    Qtd.
                                    <input type="number" name="quantity" min="0" max="{{ min(20, $line['store_stock']) }}" value="{{ $line['quantity'] }}">
                                </label>
                                <button class="button secondary" type="submit">Atualizar</button>
                            </form>
                            <strong>{{ \App\Support\Cart::money($line['subtotal_cents']) }}</strong>
                            <form method="POST" action="{{ route('cart.remove', $product) }}">
                                @csrf
                                @method('DELETE')
                                <button class="text-button" type="submit">Remover</button>
                            </form>
                        </article>
                    @endforeach
                </div>

                <aside class="summary">
                    <h2>Resumo</h2>
                    <div class="summary-row">
                        <span>Produtos</span>
                        <strong>{{ $total }}</strong>
                    </div>
                    <div class="summary-row">
                        <span>Retirada</span>
                        <strong>Grátis</strong>
                    </div>
                    <a class="button primary full" href="{{ route('checkout.show') }}">Continuar para pagamento</a>
                </aside>
            </div>
        @endif
    </section>
@endsection
