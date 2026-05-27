@extends('layouts.store')

@section('title', $product->name.' | Drogaria Onorio')

@section('content')
    <section class="detail">
        <div class="detail-art" style="--product-color: {{ $product->image_color }}">
            @if ($product->imageUrl())
                <img src="{{ $product->imageUrl() }}" alt="{{ $product->name }}">
            @else
                <span>{{ $product->image_text }}</span>
            @endif
        </div>

        <div class="detail-copy">
            <a class="back-link" href="{{ route('storefront') }}">Voltar para produtos</a>
            <span class="category-name">{{ $product->category->name }}</span>
            <h1>{{ $product->name }}</h1>
            <p>{{ $product->description }}</p>
            @if ($selectedStore)
                <p class="small-copy"><strong>Retirada:</strong> {{ $selectedStore->name }} ? estoque dispon?vel: {{ $storeStock }}</p>
            @endif
            @if ($product->requires_prescription)
                <div class="prescription-box">Este produto exige apresentação de receita no momento da retirada.</div>
            @endif
            <div class="detail-buy">
                <strong>{{ $product->price() }}</strong>
                <form method="POST" action="{{ route('cart.add', $product) }}">
                    @csrf
                    <label>
                        Quantidade
                        <input type="number" name="quantity" min="1" max="{{ min(20, $storeStock) }}" value="1">
                    </label>
                    <button class="button primary" type="submit">Adicionar ao carrinho</button>
                </form>
            </div>
        </div>
    </section>
@endsection
