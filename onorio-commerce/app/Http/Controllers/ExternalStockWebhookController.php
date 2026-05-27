<?php

namespace App\Http\Controllers;

use App\Services\ErpCatalogSyncService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ExternalStockWebhookController extends Controller
{
    public function __invoke(Request $request, ErpCatalogSyncService $syncService): JsonResponse
    {
        $expectedToken = config('services.erp.webhook_token');

        if ($expectedToken && ! hash_equals($expectedToken, (string) $request->bearerToken())) {
            return response()->json(['message' => 'Token invalido.'], 401);
        }

        $data = $request->validate([
            'external_id' => ['nullable', 'string', 'max:120'],
            'product_external_id' => ['nullable', 'string', 'max:120'],
            'barcode' => ['nullable', 'string', 'max:32'],
            'ean' => ['nullable', 'string', 'max:32'],
            'external_store_id' => ['nullable', 'string', 'max:120'],
            'store_id' => ['nullable'],
            'store_slug' => ['nullable', 'string', 'max:120'],
            'quantity' => ['nullable', 'integer', 'min:0', 'max:999999'],
            'stock' => ['nullable', 'integer', 'min:0', 'max:999999'],
        ]);

        if (empty($data['quantity']) && ! array_key_exists('quantity', $data) && ! array_key_exists('stock', $data)) {
            return response()->json(['message' => 'Informe quantity ou stock.'], 422);
        }

        $stock = $syncService->updateStockFromPayload($data);

        return response()->json([
            'message' => 'Estoque atualizado.',
            'product_id' => $stock->product_id,
            'store_id' => $stock->store_id,
            'quantity' => $stock->quantity,
        ]);
    }
}
