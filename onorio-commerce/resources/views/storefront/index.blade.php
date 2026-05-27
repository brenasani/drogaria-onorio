@extends('layouts.store')

@section('title', 'Drogaria Onorio | Compre e retire')

@section('content')
    <section class="shop-header">
        <div>
            <a class="back-link" href="{{ route('home') }}">Início</a>
            <h1>Comprar produtos</h1>
            <p>Vitrine separada para escolher produtos, montar o carrinho e seguir para pagamento online.</p>
        </div>
        <a class="shop-cart-summary" href="{{ route('cart.show') }}">
            <span>Carrinho</span>
            <strong>{{ $cartCount }} item(ns)</strong>
            <em>{{ $cartTotal }}</em>
        </a>
    </section>

    <section class="shop shop-only" id="produtos">
        <aside class="filters" aria-label="Categorias">
            <h2>Categorias</h2>
            <a class="{{ $selectedCategory === '' ? 'active' : '' }}" href="{{ route('storefront') }}">Todos</a>
            @foreach ($categories as $category)
                <a class="{{ $selectedCategory === $category->slug ? 'active' : '' }}" href="{{ route('storefront', ['categoria' => $category->slug]) }}">
                    {{ $category->name }}
                    <span>{{ $category->products_count }}</span>
                </a>
            @endforeach
        </aside>

        <div class="product-area">
            <form class="searchbar" method="GET" action="{{ route('storefront') }}">
                @if ($selectedCategory)
                    <input type="hidden" name="categoria" value="{{ $selectedCategory }}">
                @endif
                <input type="search" name="busca" value="{{ $search }}" placeholder="Buscar produto, cuidado ou categoria">
                <button class="button secondary" type="submit">Buscar</button>
            </form>

            <div class="section-heading">
                <h2>Produtos para retirada</h2>
                <p>{{ $products->count() }} produto(s) disponível(is)</p>
            </div>

            <div class="product-grid">
                @forelse ($products as $product)
                    <article class="product-card">
                        <a class="product-art" href="{{ route('products.show', $product) }}" style="--product-color: {{ $product->image_color }}">
                            <span>{{ $product->image_text }}</span>
                        </a>
                        <div class="product-body">
                            <span class="category-name">{{ $product->category->name }}</span>
                            <h3><a href="{{ route('products.show', $product) }}">{{ $product->name }}</a></h3>
                            <p>{{ $product->description }}</p>
                            @if ($product->requires_prescription)
                                <strong class="notice">Receita na retirada</strong>
                            @endif
                        </div>
                        <form class="buy-row" method="POST" action="{{ route('cart.add', $product) }}">
                            @csrf
                            <strong>{{ $product->price() }}</strong>
                            <input type="hidden" name="quantity" value="1">
                            <button class="button primary" type="submit">Adicionar</button>
                        </form>
                    </article>
                @empty
                    <div class="empty-state">
                        <h3>Nenhum produto encontrado</h3>
                        <p>Tente buscar por outro nome ou voltar para todas as categorias.</p>
                    </div>
                @endforelse
            </div>
        </div>
    </section>
@endsection
