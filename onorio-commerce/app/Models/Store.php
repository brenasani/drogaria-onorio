<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

#[Fillable([
    'external_store_id',
    'name',
    'slug',
    'address',
    'phone',
    'hours',
    'has_pickup',
    'is_active',
    'sort_order',
])]
class Store extends Model
{
    protected function casts(): array
    {
        return [
            'has_pickup' => 'boolean',
            'is_active' => 'boolean',
        ];
    }

    public function productStocks(): HasMany
    {
        return $this->hasMany(ProductStoreStock::class);
    }

    public function orders(): HasMany
    {
        return $this->hasMany(Order::class);
    }
}
