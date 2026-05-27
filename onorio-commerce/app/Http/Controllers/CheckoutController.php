<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\ProductStoreStock;
use App\Models\Store;
use App\Services\MercadoPagoCheckout;
use App\Support\Cart;
use App\Support\StoreContext;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;
use Illuminate\Support\Str;
use Illuminate\View\View;

class CheckoutController extends Controller
{
    public function show(): RedirectResponse|View
    {
        $lines = Cart::lines();

        if ($lines->isEmpty()) {
            return redirect()->route('storefront')->with('status', 'Escolha seus produtos para iniciar a compra.');
        }

        return view('checkout.show', [
            'lines' => $lines,
            'total' => Cart::money(Cart::totalCents()),
            'cartCount' => Cart::count(),
            'stores' => StoreContext::stores(),
            'selectedStore' => StoreContext::current(),
        ]);
    }

    public function store(Request $request, MercadoPagoCheckout $checkout): RedirectResponse
    {
        $lines = Cart::lines();

        if ($lines->isEmpty()) {
            return redirect()->route('storefront')->with('status', 'Seu carrinho ficou vazio.');
        }

        $stockProblem = $lines->first(fn (array $line): bool => $line['quantity'] > $line['store_stock']);

        if ($stockProblem) {
            return redirect()->route('cart.show')->with('status', 'Um item do carrinho mudou de estoque. Revise antes de pagar.');
        }

        $data = $request->validate([
            'customer_name' => ['required', 'string', 'max:120'],
            'customer_email' => ['required', 'email', 'max:150'],
            'customer_phone' => ['required', 'string', 'max:30'],
            'customer_document' => ['nullable', 'string', 'max:30'],
            'pickup_person_name' => ['required', 'string', 'max:120'],
            'pickup_person_phone' => ['required', 'string', 'max:30'],
            'notes' => ['nullable', 'string', 'max:500'],
            'pickup_store_id' => ['nullable', 'integer', 'exists:stores,id'],
            'prescription_file' => ['nullable', 'file', 'mimes:jpg,jpeg,png,pdf', 'max:5120'],
        ]);

        $store = Store::query()
            ->where('is_active', true)
            ->where('has_pickup', true)
            ->findOrFail($data['pickup_store_id'] ?? StoreContext::id());

        session(['store_id' => $store->id]);

        $requiresPrescription = $lines->contains(fn (array $line): bool => (bool) $line['product']->requires_prescription);

        if ($requiresPrescription && ! $request->hasFile('prescription_file')) {
            return back()
                ->withErrors(['prescription_file' => 'Envie a receita m?dica para produto controlado.'])
                ->withInput();
        }

        $prescription = $request->file('prescription_file');
        $prescriptionPath = $prescription?->store('prescriptions');

        $order = DB::transaction(function () use ($data, $lines, $requiresPrescription, $prescription, $prescriptionPath, $store): Order {
            unset($data['pickup_store_id']);

            $order = Order::query()->create([
                ...$data,
                'store_id' => $store->id,
                'status' => Order::STATUS_PENDING_PAYMENT,
                'payment_status' => Order::PAYMENT_PENDING,
                'payment_provider' => 'mercado_pago',
                'prescription_file_path' => $prescriptionPath,
                'prescription_original_name' => $prescription?->getClientOriginalName(),
                'prescription_mime_type' => $prescription?->getMimeType(),
                'prescription_status' => $requiresPrescription ? Order::PRESCRIPTION_PENDING : Order::PRESCRIPTION_NOT_REQUIRED,
                'total_cents' => Cart::totalCents(),
                'pickup_code' => $this->pickupCode(),
            ]);

            foreach ($lines as $line) {
                $product = $line['product'];

                $freshProduct = \App\Models\Product::query()
                    ->whereKey($product->id)
                    ->lockForUpdate()
                    ->first();
                $storeStock = ProductStoreStock::query()
                    ->where('product_id', $product->id)
                    ->where('store_id', $store->id)
                    ->lockForUpdate()
                    ->first();

                if (! $freshProduct || ! $freshProduct->is_active || ! $storeStock || $storeStock->quantity < $line['quantity']) {
                    throw new \RuntimeException('Produto sem estoque suficiente: '.$product->name);
                }

                $order->items()->create([
                    'product_id' => $product->id,
                    'product_name' => $product->name,
                    'unit_price_cents' => $product->price_cents,
                    'quantity' => $line['quantity'],
                    'line_total_cents' => $line['subtotal_cents'],
                ]);
            }

            return $order;
        });

        $redirect = $checkout->createPreference($order);
        Cart::clear();

        return redirect($redirect['url'])
            ->with('status', $redirect['mode'] === 'local_test'
                ? 'Pedido criado em modo teste. Configure o Mercado Pago para pagamento real.'
                : 'Pedido criado. Finalize o pagamento no Mercado Pago.');
    }

    public function status(Order $order): View
    {
        return view('orders.status', [
            'order' => $order->load('items', 'payment', 'store'),
            'cartCount' => Cart::count(),
            'stores' => StoreContext::stores(),
            'selectedStore' => StoreContext::current(),
        ]);
    }

    private function pickupCode(): string
    {
        do {
            $code = 'ON'.Str::upper(Str::random(6));
        } while (Order::query()->where('pickup_code', $code)->exists());

        return $code;
    }
}
