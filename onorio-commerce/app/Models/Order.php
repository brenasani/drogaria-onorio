<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Support\Facades\DB;
use RuntimeException;

#[Fillable([
    'customer_name',
    'customer_email',
    'customer_phone',
    'customer_document',
    'pickup_person_name',
    'pickup_person_phone',
    'notes',
    'prescription_file_path',
    'prescription_original_name',
    'prescription_mime_type',
    'prescription_status',
    'prescription_reviewed_at',
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

    public const PRESCRIPTION_NOT_REQUIRED = 'not_required';
    public const PRESCRIPTION_PENDING = 'pending';
    public const PRESCRIPTION_APPROVED = 'approved';
    public const PRESCRIPTION_REJECTED = 'rejected';

    protected function casts(): array
    {
        return [
            'paid_at' => 'datetime',
            'ready_at' => 'datetime',
            'stock_reduced_at' => 'datetime',
            'prescription_reviewed_at' => 'datetime',
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

    public function stockMovements(): HasMany
    {
        return $this->hasMany(StockMovement::class);
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


    public function requiresPrescription(): bool
    {
        $this->loadMissing('items.product');

        return $this->items->contains(fn (OrderItem $item): bool => (bool) $item->product?->requires_prescription);
    }

    public function prescriptionStatusLabel(): string
    {
        return [
            self::PRESCRIPTION_NOT_REQUIRED => 'N?o exige receita',
            self::PRESCRIPTION_PENDING => 'Receita enviada para confer?ncia',
            self::PRESCRIPTION_APPROVED => 'Receita aprovada',
            self::PRESCRIPTION_REJECTED => 'Receita recusada',
        ][$this->prescription_status] ?? $this->prescription_status;
    }

    public static function prescriptionStatusOptions(): array
    {
        return [
            self::PRESCRIPTION_PENDING => 'Pendente',
            self::PRESCRIPTION_APPROVED => 'Aprovada',
            self::PRESCRIPTION_REJECTED => 'Recusada',
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
                    if (! $item->product_id) {
                        continue;
                    }

                    $product = Product::query()
                        ->whereKey($item->product_id)
                        ->lockForUpdate()
                        ->first();

                    if (! $product || $product->stock_quantity < $item->quantity) {
                        throw new RuntimeException('Estoque insuficiente para '.$item->product_name.'.');
                    }

                    $product->decrement('stock_quantity', $item->quantity);
                    $product->refresh();

                    StockMovement::query()->create([
                        'product_id' => $product->id,
                        'order_id' => $this->id,
                        'quantity_delta' => -1 * $item->quantity,
                        'stock_after' => $product->stock_quantity,
                        'reason' => 'order_paid',
                        'actor' => 'system',
                        'note' => 'Baixa autom?tica ap?s pagamento aprovado.',
                    ]);
                }

                $this->forceFill(['stock_reduced_at' => now()])->save();
            }
        });
    }
}
