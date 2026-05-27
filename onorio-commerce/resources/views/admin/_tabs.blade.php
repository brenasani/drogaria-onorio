<nav class="admin-tabs" aria-label="Administração">
    <a href="{{ route('admin.orders.index') }}" @class(['active' => request()->routeIs('admin.orders.*')])>Pedidos</a>
    <a href="{{ route('admin.products.index') }}" @class(['active' => request()->routeIs('admin.products.*')])>Produtos</a>
    <a href="{{ route('admin.categories.index') }}" @class(['active' => request()->routeIs('admin.categories.*')])>Categorias</a>
    <a href="{{ route('admin.audit.index') }}" @class(['active' => request()->routeIs('admin.audit.*')])>Auditoria</a>
</nav>
