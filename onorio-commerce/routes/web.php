<?php

use App\Http\Controllers\AdminAuditLogController;
use App\Http\Controllers\AdminCategoryController;
use App\Http\Controllers\AdminOrderController;
use App\Http\Controllers\AdminProductController;
use App\Http\Controllers\AdminSessionController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\MercadoPagoWebhookController;
use App\Http\Controllers\PaymentTestController;
use App\Http\Controllers\StorefrontController;
use Illuminate\Support\Facades\Route;

Route::get('/', [StorefrontController::class, 'home'])->name('home');
Route::get('/comprar', [StorefrontController::class, 'index'])->name('storefront');
Route::get('/produto/{product:slug}', [StorefrontController::class, 'show'])->name('products.show');

Route::get('/carrinho', [CartController::class, 'show'])->name('cart.show');
Route::post('/carrinho/{product}', [CartController::class, 'add'])->name('cart.add');
Route::patch('/carrinho/{product}', [CartController::class, 'update'])->name('cart.update');
Route::delete('/carrinho/{product}', [CartController::class, 'remove'])->name('cart.remove');

Route::get('/checkout', [CheckoutController::class, 'show'])->name('checkout.show');
Route::post('/checkout', [CheckoutController::class, 'store'])->name('checkout.store');
Route::get('/pedido/{order}', [CheckoutController::class, 'status'])->name('orders.status');

Route::get('/pagamento-teste/{order}', [PaymentTestController::class, 'show'])->name('payments.test.show');
Route::post('/pagamento-teste/{order}/aprovar', [PaymentTestController::class, 'approve'])->name('payments.test.approve');

Route::post('/webhooks/mercado-pago', MercadoPagoWebhookController::class)->name('webhooks.mercado_pago');

Route::prefix('admin')->name('admin.')->group(function (): void {
    Route::get('/login', [AdminSessionController::class, 'create'])->name('login');
    Route::post('/login', [AdminSessionController::class, 'store'])->middleware('throttle:admin-login')->name('login.store');
    Route::post('/logout', [AdminSessionController::class, 'destroy'])->name('logout');

    Route::middleware('admin')->group(function (): void {
        Route::get('/auditoria', [AdminAuditLogController::class, 'index'])->name('audit.index');
        Route::get('/pedidos', [AdminOrderController::class, 'index'])->name('orders.index');
        Route::patch('/pedidos/{order}', [AdminOrderController::class, 'update'])->name('orders.update');
        Route::get('/pedidos/{order}/receita', [AdminOrderController::class, 'prescription'])->name('orders.prescription');
        Route::resource('categorias', AdminCategoryController::class)
            ->except(['show'])
            ->parameters(['categorias' => 'category'])
            ->names('categories');
        Route::resource('produtos', AdminProductController::class)
            ->except(['show'])
            ->parameters(['produtos' => 'product'])
            ->names('products');
    });
});
