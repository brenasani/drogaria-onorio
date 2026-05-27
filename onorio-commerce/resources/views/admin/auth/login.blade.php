@extends('layouts.store')

@section('title', 'Entrar no painel | Drogaria Onório')

@section('content')
    <section class="page-shell auth-panel-shell">
        <div class="section-heading">
            <span class="category-name">Área administrativa</span>
            <h1>Entrar no painel</h1>
            <p>Use seu usuário administrativo para acompanhar pedidos, produtos, estoque e auditoria.</p>
        </div>

        <form class="checkout-card admin-login-card" method="POST" action="{{ route('admin.login.store') }}">
            @csrf
            <label>
                <span>E-mail administrativo</span>
                <input name="email" type="email" value="{{ old('email') }}" autocomplete="username" autofocus>
            </label>
            <label>
                <span>Senha</span>
                <input name="password" type="password" autocomplete="current-password" required>
            </label>

            <p class="small-copy">Em desenvolvimento, se deixar o e-mail vazio, a senha local <strong>onorio-admin</strong> continua funcionando.</p>
            <button class="button primary" type="submit">Entrar no painel</button>
        </form>
    </section>
@endsection
