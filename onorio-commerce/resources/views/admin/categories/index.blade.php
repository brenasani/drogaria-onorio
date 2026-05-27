@extends('layouts.store')

@section('title', 'Categorias | Painel Drogaria Onório')

@section('content')
    <section class="page-shell">
        <div class="section-heading">
            <div>
                <span class="category-name">Painel administrativo</span>
                <h1>Categorias</h1>
                <p>Organize a vitrine da loja por seções de produtos.</p>
            </div>
            <a class="button primary" href="{{ route('admin.categories.create') }}">Nova categoria</a>
        </div>

        @include('admin._tabs')

        <div class="admin-list">
            @forelse ($categories as $category)
                <article class="admin-order admin-product-row">
                    <div>
                        <span class="category-name">Ordem {{ $category->sort_order }}</span>
                        <h2>{{ $category->name }}</h2>
                        <p>{{ $category->slug }} · {{ $category->products_count }} produto(s)</p>
                    </div>
                    <div class="admin-row-actions">
                        <a class="button secondary" href="{{ route('admin.categories.edit', $category) }}">Editar</a>
                        <form method="POST" action="{{ route('admin.categories.destroy', $category) }}" onsubmit="return confirm('Deseja excluir esta categoria?')">
                            @csrf
                            @method('DELETE')
                            <button class="text-button danger-text" type="submit">Excluir</button>
                        </form>
                    </div>
                </article>
            @empty
                <div class="empty-state">
                    <h2>Nenhuma categoria cadastrada</h2>
                    <p>Crie categorias para organizar a loja.</p>
                </div>
            @endforelse
        </div>

        {{ $categories->links() }}
    </section>
@endsection
