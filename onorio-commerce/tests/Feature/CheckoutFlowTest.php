<?php

namespace Tests\Feature;

use App\Models\Order;
use App\Models\Product;
use App\Models\StockMovement;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
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

        $this->assertDatabaseHas('stock_movements', [
            'order_id' => $order->id,
            'quantity_delta' => -1,
            'reason' => 'order_paid',
        ]);
    }

    public function test_prescription_product_requires_file_and_stores_private_upload(): void
    {
        Storage::fake('local');
        $this->seed();
        $product = Product::query()->where('requires_prescription', true)->firstOrFail();

        $this->post(route('cart.add', $product), ['quantity' => 1]);

        $this->post(route('checkout.store'), [
            'customer_name' => 'Cliente Receita',
            'customer_email' => 'receita@example.com',
            'customer_phone' => '(11) 99999-0000',
            'pickup_person_name' => 'Cliente Receita',
            'pickup_person_phone' => '(11) 99999-0000',
        ])->assertSessionHasErrors('prescription_file');

        $response = $this->post(route('checkout.store'), [
            'customer_name' => 'Cliente Receita',
            'customer_email' => 'receita@example.com',
            'customer_phone' => '(11) 99999-0000',
            'pickup_person_name' => 'Cliente Receita',
            'pickup_person_phone' => '(11) 99999-0000',
            'prescription_file' => UploadedFile::fake()->create('receita.pdf', 100, 'application/pdf'),
        ]);

        $order = Order::query()->firstOrFail();

        $response->assertRedirect(route('payments.test.show', $order));
        $this->assertSame(Order::PRESCRIPTION_PENDING, $order->prescription_status);
        Storage::assertExists($order->prescription_file_path);
    }
}

