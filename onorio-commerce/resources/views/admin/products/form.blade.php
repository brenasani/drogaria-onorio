@extends('layouts.store')

@section('title', ($product->exists ? 'Editar produto' : 'Novo produto').' | Painel Drogaria Onório')

@section('content')
    <section class="page-shell">
        <div class="section-heading">
            <div>
                <span class="category-name">Painel administrativo</span>
                <h1>{{ $product->exists ? 'Editar produto' : 'Novo produto' }}</h1>
                <p>Controle nome, preço, estoque, categoria e exigência de receita.</p>
            </div>
        </div>

        @include('admin._tabs')

        <form class="checkout-form admin-form" method="POST" enctype="multipart/form-data" action="{{ $product->exists ? route('admin.products.update', $product) : route('admin.products.store') }}">
            @csrf
            @if ($product->exists)
                @method('PUT')
            @endif

            <label>
                <span>Categoria</span>
                <select name="category_id" required>
                    <option value="">Selecione</option>
                    @foreach ($categories as $category)
                        <option value="{{ $category->id }}" @selected((int) old('category_id', $product->category_id) === $category->id)>{{ $category->name }}</option>
                    @endforeach
                </select>
            </label>

            <label>
                <span>Nome do produto</span>
                <input name="name" value="{{ old('name', $product->name) }}" maxlength="160" required>
            </label>

            <label>
                <span>Slug/URL opcional</span>
                <input name="slug" value="{{ old('slug', $product->slug) }}" maxlength="180" placeholder="gerado automaticamente se deixar vazio">
            </label>

            <label class="full-field">
                <span>Descrição</span>
                <textarea name="description" rows="5" maxlength="1000" required>{{ old('description', $product->description) }}</textarea>
            </label>

            <label>
                <span>Preço</span>
                <input name="price" value="{{ old('price', $product->exists ? number_format($product->price_cents / 100, 2, ',', '.') : '') }}" placeholder="Ex: 18,90" required>
            </label>

            @if (($stores ?? collect())->isNotEmpty())
                <input type="hidden" name="stock_quantity" value="{{ old('stock_quantity', $product->stock_quantity) }}">
                <div class="full-field store-stock-grid">
                    <span>Estoque por unidade</span>
                    @foreach ($stores as $store)
                        @php($storeStock = $product->storeStocks?->firstWhere('store_id', $store->id)?->quantity ?? 0)
                        <label>
                            <span>{{ $store->name }}</span>
                            <input type="number" name="store_stocks[{{ $store->id }}]" min="0" value="{{ old('store_stocks.'.$store->id, $storeStock) }}" required>
                            <small>{{ $store->address }}</small>
                        </label>
                    @endforeach
                </div>
            @else
                <label>
                    <span>Estoque</span>
                    <input type="number" name="stock_quantity" min="0" value="{{ old('stock_quantity', $product->stock_quantity) }}" required>
                </label>
            @endif

            <label>
                <span>Estoque mínimo</span>
                <input type="number" name="minimum_stock" min="0" value="{{ old('minimum_stock', $product->minimum_stock ?? 3) }}" required>
            </label>

            <label>
                <span>Cor do card</span>
                <input type="color" name="image_color" value="{{ old('image_color', $product->image_color ?: '#39896A') }}">
            </label>

            <label>
                <span>Texto/abreviação da imagem</span>
                <input name="image_text" value="{{ old('image_text', $product->image_text) }}" maxlength="12" placeholder="Ex: RX, FPS, KIT">
            </label>
            <label class="full-field">
                <span>Foto do produto</span>
                <input type="file" name="image_file" accept="image/*">
                @if ($product->imageUrl())
                    <small>Imagem atual cadastrada. Envie outra imagem para substituir.</small>
                @else
                    <small>Opcional: JPG, PNG ou WebP até 4 MB.</small>
                @endif
            </label>
            <label class="check-field">
                <input type="checkbox" name="requires_prescription" value="1" @checked(old('requires_prescription', $product->requires_prescription))>
                <span>Exige receita na retirada</span>
            </label>

            <label class="check-field">
                <input type="checkbox" name="is_active" value="1" @checked(old('is_active', $product->exists ? $product->is_active : true))>
                <span>Produto ativo na loja</span>
            </label>

            <div class="form-actions full-field">
                <a class="button secondary" href="{{ route('admin.products.index') }}">Cancelar</a>
                <button class="button primary" type="submit">Salvar produto</button>
            </div>
        </form>
    </section>
@endsection

