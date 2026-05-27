<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Support\Facades\DB;

#[Fillable([
    'customer_name',
    'customer_email',
    'customer_phone',
    'customer_document',
    'pickup_person_name',
    'pickup_person_phone',
    'notes',
    'status',
    'payment_status',
    'payment_provider',
    'payment_reference',
    'total_cents',
    'pickup_code',
    'paid_at',
    'ready_at',
    'stock_reduced_at',
])]
class Order extends Model
{
    public const STATUS_PENDING_PAYMENT = 'aguardando_pagamento';
    public const STATUS_PAID = 'pago';
    public const STATUS_PREPARING = 'em_separacao';
    public const STATUS_READY = 'pronto_retirada';
    public const STATUS_PICKED_UP = 'retirado';
    public const STATUS_CANCELED = 'cancelado';

    public const PAYMENT_PENDING = 'pending';
    public const PAYMENT_APPROVED = 'approved';

    protected function casts(): array
    {
        return [
            'paid_at' => 'datetime',
            'ready_at' => 'datetime',
            'stock_reduced_at' => 'datetime',
        ];
    }

    public function getRouteKeyName(): string
    {
        return 'pickup_code';
    }

    public function items(): HasMany
    {
        return $this->hasMany(OrderItem::class);
    }

    public function payment(): HasOne
    {
        return $this->hasOne(Payment::class);
    }

    public function total(): string
    {
        return 'R$ '.number_format($this->total_cents / 100, 2, ',', '.');
    }

    public function statusLabel(): string
    {
        return self::statusOptions()[$this->status] ?? $this->status;
    }

    public static function statusOptions(): array
    {
        return [
            self::STATUS_PENDING_PAYMENT => 'Aguardando pagamento',
            self::STATUS_PAID => 'Pago',
            self::STATUS_PREPARING => 'Em separação',
            self::STATUS_READY => 'Pronto para retirada',
            self::STATUS_PICKED_UP => 'Retirado',
            self::STATUS_CANCELED => 'Cancelado',
        ];
    }

    public function markAsPaid(?string $paymentReference = null): void
    {
        DB::transaction(function () use ($paymentReference): void {
            $this->forceFill([
                'status' => self::STATUS_PAID,
                'payment_status' => self::PAYMENT_APPROVED,
                'payment_reference' => $paymentReference ?? $this->payment_reference,
                'paid_at' => $this->paid_at ?? now(),
            ])->save();

            if ($this->payment) {
                $this->payment->forceFill([
                    'provider_reference' => $paymentReference ?? $this->payment->provider_reference,
                    'status' => self::PAYMENT_APPROVED,
                ])->save();
            }

            if (! $this->stock_reduced_at) {
                $this->loadMissing('items.product');

                foreach ($this->items as $item) {
                    if ($item->product) {
                        Product::query()
                            ->whereKey($item->product_id)
                            ->where('stock_quantity', '>=', $item->quantity)
                            ->decrement('stock_quantity', $item->quantity);
                    }
                }

                $this->forceFill(['stock_reduced_at' => now()])->save();
            }
        });
    }
}
