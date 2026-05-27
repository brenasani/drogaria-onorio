<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#[Fillable([
    'order_id',
    'product_id',
    'product_name',
    'unit_price_cents',
    'quantity',
    'line_total_cents',
])]
class OrderItem extends Model
{
    public function order(): BelongsTo
    {
        return $this->belongsTo(Order::class);
    }

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function unitPrice(): string
    {
        return 'R$ '.number_format($this->unit_price_cents / 100, 2, ',', '.');
    }

    public function lineTotal(): string
    {
        return 'R$ '.number_format($this->line_total_cents / 100, 2, ',', '.');
    }
}
