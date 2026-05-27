@extends('layouts.store')

@section('title', 'Drogaria Onorio | Início')

@section('content')
    <section class="market-home">
        <div class="market-home-inner">
            <h1>Compre online na Drogaria Onório</h1>
            <p>Busque medicamentos, produtos de cuidado e conveniência. Pague online e retire na loja com segurança.</p>
            <div class="hero-actions">
                <a class="button primary" href="{{ route('storefront') }}">Comprar agora</a>
                <a class="button ghost" href="{{ route('cart.show') }}">Ver cesta</a>
            </div>
        </div>
    </section>

    <section class="home-band">
        <div class="home-section-title">
            <h2>Como funciona</h2>
            <a href="{{ route('storefront') }}">Começar compra</a>
        </div>
        <div class="workflow-grid">
            <article>
                <span>1</span>
                <h3>Escolha os produtos</h3>
                <p>A vitrine fica em uma tela separada, organizada por categoria e busca.</p>
            </article>
            <article>
                <span>2</span>
                <h3>Pague online</h3>
                <p>O checkout já está preparado para Mercado Pago, com modo teste local.</p>
            </article>
            <article>
                <span>3</span>
                <h3>Retire na loja</h3>
                <p>O cliente acompanha o pedido e apresenta o código de retirada no balcão.</p>
            </article>
        </div>
    </section>

    <section class="home-band soft-band">
        <div class="home-section-title">
            <h2>Categorias</h2>
            <a href="{{ route('storefront') }}">Ver tudo</a>
        </div>
        <div class="category-strip">
            @foreach ($categories as $category)
                <a href="{{ route('storefront', ['categoria' => $category->slug]) }}">
                    <strong>{{ $category->name }}</strong>
                    <span>{{ $category->products_count }} produto(s)</span>
                </a>
            @endforeach
        </div>
    </section>

    <section class="home-band">
        <div class="home-section-title">
            <h2>Produtos em destaque</h2>
            <a href="{{ route('storefront') }}">Comprar agora</a>
        </div>
        <div class="featured-row">
            @foreach ($featuredProducts as $product)
                <a class="featured-product" href="{{ route('products.show', $product) }}">
                    <span class="mini-art" style="--product-color: {{ $product->image_color }}">{{ $product->image_text }}</span>
                    <strong>{{ $product->name }}</strong>
                    <em>{{ $product->price() }}</em>
                </a>
            @endforeach
        </div>
    </section>
@endsection
