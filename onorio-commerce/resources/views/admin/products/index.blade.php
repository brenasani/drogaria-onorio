@extends('layouts.store')

@section('title', 'Produtos | Painel Drogaria Onório')

@section('content')
    <section class="page-shell">
        <div class="section-heading">
            <div>
                <span class="category-name">Painel administrativo</span>
                <h1>Produtos</h1>
                <p>Cadastre, edite, desative e acompanhe o estoque dos produtos da loja.</p>
            </div>
            <a class="button primary" href="{{ route('admin.products.create') }}">Novo produto</a>
        </div>

        @include('admin._tabs')

        <form class="status-filter admin-filter" method="GET" action="{{ route('admin.products.index') }}">
            <input type="search" name="busca" value="{{ $search }}" placeholder="Buscar produto">
            <select name="categoria">
                <option value="">Todas as categorias</option>
                @foreach ($categories as $category)
                    <option value="{{ $category->id }}" @selected($selectedCategoryId === $category->id)>{{ $category->name }}</option>
                @endforeach
            </select>
            <button class="button secondary" type="submit">Filtrar</button>
        </form>

        <div class="admin-list">
            @forelse ($products as $product)
                <article class="admin-order admin-product-row">
                    <div>
                        <span class="category-name">{{ $product->category->name }}</span>
                        <h2>{{ $product->name }}</h2>
                        <p>{{ $product->price() }} · Estoque: {{ $product->stock_quantity }} · {{ $product->is_active ? 'Ativo' : 'Inativo' }}{{ $product->requires_prescription ? ' · Receita obrigatória' : '' }}</p>
                    </div>
                    <div class="admin-row-actions">
                        <a class="button secondary" href="{{ route('admin.products.edit', $product) }}">Editar</a>
                        <form method="POST" action="{{ route('admin.products.destroy', $product) }}" onsubmit="return confirm('Deseja excluir ou desativar este produto?')">
                            @csrf
                            @method('DELETE')
                            <button class="text-button danger-text" type="submit">Excluir</button>
                        </form>
                    </div>
                </article>
            @empty
                <div class="empty-state">
                    <h2>Nenhum produto cadastrado</h2>
                    <p>Crie o primeiro produto para começar a vender.</p>
                </div>
            @endforelse
        </div>

        {{ $products->links() }}
    </section>
@endsection
