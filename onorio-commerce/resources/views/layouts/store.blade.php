<!doctype html>
<html lang="pt-BR">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#39896A">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-title" content="Onório">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <title>@yield('title', 'Drogaria Onorio')</title>
    <link rel="stylesheet" href="{{ asset('css/onorio-commerce.css') }}">
    <link rel="manifest" href="{{ asset('site.webmanifest') }}">
    <link rel="apple-touch-icon" href="{{ asset('assets/onorio-avatar.png') }}">
</head>
<body>
    @php($headerCartTotal = $cartTotal ?? \App\Support\Cart::money(\App\Support\Cart::totalCents()))

    <header class="commerce-header">
        <div class="commerce-header-main">
            <a class="commerce-brand" href="{{ route('home') }}" aria-label="Drogaria Onorio">
                <img src="{{ asset('assets/onorio-avatar.png') }}" alt="" class="commerce-brand-avatar">
                <span>
                    <strong>Onório</strong>
                    <small>Drogaria</small>
                </span>
            </a>

            <form class="commerce-search" method="GET" action="{{ route('storefront') }}">
                <input type="search" name="busca" value="{{ request('busca') }}" placeholder="O que deseja encontrar?">
                <button type="submit">
                    <span class="desktop-search-label">Buscar</span>
                    <span class="mobile-search-label">Ir</span>
                </button>
            </form>

            <nav class="commerce-actions" aria-label="Atalhos do cliente">
                <a class="commerce-action" href="#">
                    <span>
                        Olá, faça seu login
                        <small>Minha conta</small>
                    </span>
                </a>
                <a class="commerce-action" href="{{ route('admin.orders.index') }}">
                    <span>
                        Meus
                        <small>pedidos</small>
                    </span>
                </a>
                <a class="commerce-basket" href="{{ route('cart.show') }}">
                    <span>{{ $cartCount ?? 0 }} Cesta</span>
                    <strong>{{ $headerCartTotal }}</strong>
                </a>
            </nav>
        </div>

        <div class="commerce-menu">
            <a class="commerce-cep" href="#">Insira o CEP</a>
            <nav class="commerce-categories" aria-label="Categorias">
                <a href="{{ route('storefront', ['categoria' => 'medicamentos']) }}">Medicamentos</a>
                <a href="{{ route('storefront', ['categoria' => 'conveniencia']) }}">Conveniência</a>
                <a href="{{ route('storefront', ['categoria' => 'suplementos']) }}">Suplementos</a>
                <a href="{{ route('storefront', ['categoria' => 'cosmeticos']) }}">Cosméticos</a>
                <a href="{{ route('storefront', ['categoria' => 'perfumaria']) }}">Perfumaria</a>
            </nav>
            <a class="commerce-benefits" href="{{ route('storefront') }}">Ativar benefícios</a>
        </div>
    </header>

    @if (session('status'))
        <div class="toast">{{ session('status') }}</div>
    @endif

    @if ($errors->any())
        <div class="toast toast-error">
            <strong>Revise os dados:</strong>
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <main>
        @yield('content')
    </main>

    <footer class="commerce-footer">
        <a href="{{ route('legal.privacy') }}">Privacidade</a>
        <a href="{{ route('legal.terms') }}">Termos de uso</a>
    </footer>

    <script>
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js').catch(() => {});
            });
        }
    </script>
</body>
</html>
