<?php

namespace Tests\Feature;

use App\Models\Order;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AdminAuthTest extends TestCase
{
    use RefreshDatabase;

    public function test_admin_orders_requires_login(): void
    {
        $this->get(route('admin.orders.index'))
            ->assertRedirect(route('admin.login'));
    }

    public function test_admin_can_login_and_see_orders(): void
    {
        $this->seed();

        $this->post(route('admin.login.store'), [
            'password' => 'onorio-admin',
        ])->assertRedirect(route('admin.orders.index'));

        $this->get(route('admin.orders.index'))
            ->assertOk()
            ->assertSee('Pedidos da loja');
    }

    public function test_admin_can_update_order_after_login(): void
    {
        $this->seed();

        $order = Order::query()->create([
            'customer_name' => 'Cliente Teste',
            'customer_email' => 'cliente@example.com',
            'customer_phone' => '(11) 99999-0000',
            'pickup_person_name' => 'Cliente Teste',
            'pickup_person_phone' => '(11) 99999-0000',
            'status' => Order::STATUS_PENDING_PAYMENT,
            'payment_status' => Order::PAYMENT_PENDING,
            'payment_provider' => 'mercado_pago',
            'total_cents' => 1000,
            'pickup_code' => 'ONTESTE1',
        ]);

        $this->post(route('admin.login.store'), [
            'password' => 'onorio-admin',
        ]);

        $this->patch(route('admin.orders.update', $order), [
            'status' => Order::STATUS_PREPARING,
        ])->assertRedirect();

        $this->assertDatabaseHas('orders', [
            'id' => $order->id,
            'status' => Order::STATUS_PREPARING,
        ]);
    }
}
