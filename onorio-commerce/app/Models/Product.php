<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

#[Fillable([
    'category_id',
    'name',
    'slug',
    'description',
    'price_cents',
    'stock_quantity',
    'minimum_stock',
    'requires_prescription',
    'is_active',
    'image_color',
    'image_text',
    'image_path',
])]
class Product extends Model
{
    protected function casts(): array
    {
        return [
            'requires_prescription' => 'boolean',
            'is_active' => 'boolean',
        ];
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function orderItems(): HasMany
    {
        return $this->hasMany(OrderItem::class);
    }

    public function storeStocks(): HasMany
    {
        return $this->hasMany(ProductStoreStock::class);
    }

    public function stockForStore(?int $storeId): int
    {
        if (! $storeId) {
            return (int) $this->stock_quantity;
        }

        $loadedStock = $this->relationLoaded('storeStocks')
            ? $this->storeStocks->firstWhere('store_id', $storeId)
            : null;

        if ($loadedStock) {
            return (int) $loadedStock->quantity;
        }

        return (int) ProductStoreStock::query()
            ->where('product_id', $this->id)
            ->where('store_id', $storeId)
            ->value('quantity');
    }

    public function scopeActive(Builder $query): Builder
    {
        return $query->where('is_active', true)->where('stock_quantity', '>', 0);
    }

    public function scopeAvailableAtStore(Builder $query, ?int $storeId): Builder
    {
        if (! $storeId) {
            return $query->active();
        }

        return $query->where('is_active', true)
            ->whereHas('storeStocks', fn (Builder $stockQuery): Builder => $stockQuery
                ->where('store_id', $storeId)
                ->where('quantity', '>', 0));
    }

    public function isLowStock(?int $storeId = null): bool
    {
        return $this->stockForStore($storeId) <= $this->minimum_stock;
    }

    public function imageUrl(): ?string
    {
        return $this->image_path ? asset('storage/'.$this->image_path) : null;
    }

    public function price(): string
    {
        return 'R$ '.number_format($this->price_cents / 100, 2, ',', '.');
    }
}
