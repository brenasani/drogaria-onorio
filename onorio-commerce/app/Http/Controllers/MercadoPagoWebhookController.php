<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class MercadoPagoWebhookController extends Controller
{
    public function __invoke(Request $request): Response
    {
        $payload = $request->all();
        $paymentId = data_get($payload, 'data.id')
            ?? $request->query('data_id')
            ?? data_get($payload, 'id');

        $token = config('services.mercado_pago.access_token');

        if ($token && $paymentId) {
            $response = Http::withToken($token)
                ->acceptJson()
                ->get("https://api.mercadopago.com/v1/payments/{$paymentId}");

            if ($response->successful()) {
                $payment = $response->json();
                $externalReference = data_get($payment, 'external_reference');
                $status = data_get($payment, 'status');

                $order = Order::query()
                    ->with('payment')
                    ->whereKey($externalReference)
                    ->orWhere('payment_reference', $paymentId)
                    ->first();

                if ($order && $status === 'approved') {
                    $order->markAsPaid((string) $paymentId);
                } elseif ($order && $order->payment) {
                    $order->payment->forceFill([
                        'provider_reference' => (string) $paymentId,
                        'status' => (string) $status,
                        'raw_payload' => $payment,
                    ])->save();
                }

                return response('ok');
            }
        }

        Log::info('Mercado Pago webhook received without processing', [
            'payload' => $payload,
            'query' => $request->query(),
        ]);

        return response('ok');
    }
}
