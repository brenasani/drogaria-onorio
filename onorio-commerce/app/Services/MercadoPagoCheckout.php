<?php

namespace App\Services;

use App\Models\Order;
use App\Models\Payment;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class MercadoPagoCheckout
{
    public function createPreference(Order $order): array
    {
        $order->loadMissing('items');
        $token = config('services.mercado_pago.access_token');

        if (! $token) {
            return $this->localFallback($order, 'missing_token');
        }

        $payload = [
            'items' => $order->items->map(fn ($item): array => [
                'title' => $item->product_name,
                'quantity' => $item->quantity,
                'currency_id' => 'BRL',
                'unit_price' => round($item->unit_price_cents / 100, 2),
            ])->values()->all(),
            'external_reference' => (string) $order->id,
            'notification_url' => route('webhooks.mercado_pago'),
            'back_urls' => [
                'success' => route('orders.status', $order),
                'failure' => route('orders.status', $order),
                'pending' => route('orders.status', $order),
            ],
            'auto_return' => 'approved',
            'statement_descriptor' => 'ONORIO',
            'metadata' => [
                'pickup_code' => $order->pickup_code,
            ],
        ];

        $response = Http::withToken($token)
            ->acceptJson()
            ->post('https://api.mercadopago.com/checkout/preferences', $payload);

        if ($response->failed()) {
            Log::warning('Mercado Pago preference failed', [
                'order_id' => $order->id,
                'status' => $response->status(),
                'body' => $response->json(),
            ]);

            return $this->localFallback($order, 'preference_error');
        }

        $data = $response->json();
        $checkoutUrl = config('services.mercado_pago.sandbox')
            ? ($data['sandbox_init_point'] ?? $data['init_point'] ?? null)
            : ($data['init_point'] ?? $data['sandbox_init_point'] ?? null);

        Payment::query()->updateOrCreate(
            ['order_id' => $order->id],
            [
                'provider' => 'mercado_pago',
                'provider_reference' => $data['id'] ?? null,
                'status' => 'pending',
                'checkout_url' => $checkoutUrl,
                'raw_payload' => $data,
            ],
        );

        $order->forceFill([
            'payment_reference' => $data['id'] ?? null,
            'payment_provider' => 'mercado_pago',
        ])->save();

        return [
            'mode' => 'mercado_pago',
            'url' => $checkoutUrl ?: route('payments.test.show', $order),
        ];
    }

    private function localFallback(Order $order, string $reason): array
    {
        Payment::query()->updateOrCreate(
            ['order_id' => $order->id],
            [
                'provider' => 'local_test',
                'provider_reference' => $reason,
                'status' => 'pending',
                'checkout_url' => route('payments.test.show', $order),
                'raw_payload' => ['reason' => $reason],
            ],
        );

        return [
            'mode' => 'local_test',
            'url' => route('payments.test.show', $order),
        ];
    }
}
