<?php

namespace Tests\Feature;

use App\Models\Order;
use App\Models\Product;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CheckoutFlowTest extends TestCase
{
    use RefreshDatabase;

    public function test_customer_can_create_pickup_order_with_local_payment(): void
    {
        $this->seed();
        $product = Product::query()->firstOrFail();

        $this->post(route('cart.add', $product), ['quantity' => 2])
            ->assertRedirect();

        $response = $this->post(route('checkout.store'), [
            'customer_name' => 'Cliente Teste',
            'customer_email' => 'cliente@example.com',
            'customer_phone' => '(11) 99999-0000',
            'customer_document' => '12345678900',
            'pickup_person_name' => 'Cliente Teste',
            'pickup_person_phone' => '(11) 99999-0000',
            'notes' => 'Retirar no balcão.',
        ]);

        $order = Order::query()->with('items', 'payment')->firstOrFail();

        $response->assertRedirect(route('payments.test.show', $order));
        $this->assertSame(Order::STATUS_PENDING_PAYMENT, $order->status);
        $this->assertCount(1, $order->items);
        $this->assertSame(2, $order->items->first()->quantity);
        $this->assertSame('local_test', $order->payment->provider);
    }

    public function test_local_payment_approval_marks_order_as_paid(): void
    {
        $this->seed();
        $product = Product::query()->firstOrFail();

        $this->post(route('cart.add', $product), ['quantity' => 1]);
        $this->post(route('checkout.store'), [
            'customer_name' => 'Cliente Teste',
            'customer_email' => 'cliente@example.com',
            'customer_phone' => '(11) 99999-0000',
            'pickup_person_name' => 'Cliente Teste',
            'pickup_person_phone' => '(11) 99999-0000',
        ]);

        $order = Order::query()->firstOrFail();

        $this->post(route('payments.test.approve', $order))
            ->assertRedirect(route('orders.status', $order));

        $this->assertDatabaseHas('orders', [
            'id' => $order->id,
            'status' => Order::STATUS_PAID,
            'payment_status' => Order::PAYMENT_APPROVED,
        ]);
    }
}
