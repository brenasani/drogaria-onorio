<?php

namespace App\Http\Controllers;

use App\Models\AdminAuditLog;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use RuntimeException;

class MercadoPagoWebhookController extends Controller
{
    public function __invoke(Request $request): Response
    {
        if (! $this->hasValidSignature($request)) {
            Log::warning('Mercado Pago webhook rejected by invalid signature', [
                'query' => $request->query(),
                'ip' => $request->ip(),
            ]);

            return response('invalid signature', 401);
        }

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
                    try {
                        $order->markAsPaid((string) $paymentId);
                        AdminAuditLog::record('payment.approved', $order, ['provider' => 'mercado_pago', 'payment_id' => $paymentId], $request);
                    } catch (RuntimeException $exception) {
                        Log::error('Payment approved but stock reduction failed', [
                            'order_id' => $order->id,
                            'payment_id' => $paymentId,
                            'error' => $exception->getMessage(),
                        ]);

                        return response('stock error', 409);
                    }
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

    private function hasValidSignature(Request $request): bool
    {
        $secret = config('services.mercado_pago.webhook_secret');

        if (! $secret) {
            return true;
        }

        $signature = (string) $request->header('x-signature', '');
        $requestId = (string) $request->header('x-request-id', '');
        $dataId = (string) ($request->query('data_id') ?? data_get($request->all(), 'data.id') ?? '');

        preg_match('/ts=([^,]+)/', $signature, $tsMatch);
        preg_match('/v1=([^,]+)/', $signature, $hashMatch);

        if (! $requestId || ! $dataId || ! ($tsMatch[1] ?? null) || ! ($hashMatch[1] ?? null)) {
            return false;
        }

        $manifest = "id:{$dataId};request-id:{$requestId};ts:{$tsMatch[1]};";
        $expected = hash_hmac('sha256', $manifest, $secret);

        return hash_equals($expected, $hashMatch[1]);
    }
}
