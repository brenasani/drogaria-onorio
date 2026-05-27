@extends('layouts.store')

@section('title', ($category->exists ? 'Editar categoria' : 'Nova categoria').' | Painel Drogaria Onório')

@section('content')
    <section class="page-shell">
        <div class="section-heading">
            <div>
                <span class="category-name">Painel administrativo</span>
                <h1>{{ $category->exists ? 'Editar categoria' : 'Nova categoria' }}</h1>
                <p>Defina o nome e a ordem de exibição da categoria.</p>
            </div>
        </div>

        @include('admin._tabs')

        <form class="checkout-form admin-form" method="POST" action="{{ $category->exists ? route('admin.categories.update', $category) : route('admin.categories.store') }}">
            @csrf
            @if ($category->exists)
                @method('PUT')
            @endif

            <label>
                <span>Nome da categoria</span>
                <input name="name" value="{{ old('name', $category->name) }}" maxlength="120" required>
            </label>

            <label>
                <span>Slug/URL opcional</span>
                <input name="slug" value="{{ old('slug', $category->slug) }}" maxlength="140" placeholder="gerado automaticamente se deixar vazio">
            </label>

            <label>
                <span>Ordem</span>
                <input type="number" name="sort_order" min="0" max="999" value="{{ old('sort_order', $category->sort_order) }}">
            </label>

            <div class="form-actions full-field">
                <a class="button secondary" href="{{ route('admin.categories.index') }}">Cancelar</a>
                <button class="button primary" type="submit">Salvar categoria</button>
            </div>
        </form>
    </section>
@endsection
