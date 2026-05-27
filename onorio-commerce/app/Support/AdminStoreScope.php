<?php

namespace App\Support;

use App\Models\Store;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;

class AdminStoreScope
{
    public static function allowedStoreId(): ?int
    {
        $user = Auth::user();

        return $user?->is_admin ? $user->allowedStoreId() : null;
    }

    public static function canAccessAllStores(): bool
    {
        $user = Auth::user();

        return (bool) $user?->canAccessAllStores();
    }

    public static function stores(): Collection
    {
        $query = Store::query()->where('is_active', true)->orderBy('sort_order')->orderBy('name');

        if ($storeId = self::allowedStoreId()) {
            $query->whereKey($storeId);
        }

        return $query->get();
    }

    public static function applyToOrders(Builder $query): Builder
    {
        if ($storeId = self::allowedStoreId()) {
            $query->where('store_id', $storeId);
        }

        return $query;
    }

    public static function normalizeStoreFilter(?int $storeId): ?int
    {
        return self::allowedStoreId() ?: $storeId;
    }
}
