<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#[Fillable([
    'integration',
    'direction',
    'action',
    'status',
    'external_id',
    'product_id',
    'store_id',
    'payload',
    'response',
    'message',
    'started_at',
    'finished_at',
])]
class IntegrationLog extends Model
{
    public const STATUS_PENDING = 'pending';
    public const STATUS_SUCCESS = 'success';
    public const STATUS_FAILED = 'failed';

    protected function casts(): array
    {
        return [
            'payload' => 'array',
            'response' => 'array',
            'started_at' => 'datetime',
            'finished_at' => 'datetime',
        ];
    }

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function store(): BelongsTo
    {
        return $this->belongsTo(Store::class);
    }

    public static function start(string $action, array $payload = [], ?string $externalId = null): self
    {
        return self::query()->create([
            'integration' => 'erp',
            'direction' => 'inbound',
            'action' => $action,
            'status' => self::STATUS_PENDING,
            'external_id' => $externalId,
            'payload' => $payload,
            'started_at' => now(),
        ]);
    }

    public function succeed(array $response = [], ?Product $product = null, ?Store $store = null): void
    {
        $this->forceFill([
            'status' => self::STATUS_SUCCESS,
            'response' => $response,
            'product_id' => $product?->id,
            'store_id' => $store?->id,
            'finished_at' => now(),
        ])->save();
    }

    public function fail(string $message, array $response = []): void
    {
        $this->forceFill([
            'status' => self::STATUS_FAILED,
            'message' => $message,
            'response' => $response,
            'finished_at' => now(),
        ])->save();
    }
}
