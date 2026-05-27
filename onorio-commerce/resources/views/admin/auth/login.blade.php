@extends('layouts.store')

@section('title', 'Entrar no painel | Drogaria Onório')

@section('content')
    <section class="page-shell auth-panel-shell">
        <div class="section-heading">
            <span class="category-name">Área administrativa</span>
            <h1>Entrar no painel</h1>
            <p>Use a senha administrativa para acompanhar pedidos, pagamentos e retirada na loja.</p>
        </div>

        <form class="checkout-card admin-login-card" method="POST" action="{{ route('admin.login.store') }}">
            @csrf
            <label>
                <span>Senha administrativa</span>
                <input name="password" type="password" autocomplete="current-password" required autofocus>
            </label>

            <button class="button primary" type="submit">Entrar no painel</button>
        </form>
    </section>
@endsection
