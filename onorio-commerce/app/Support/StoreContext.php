<?php

namespace App\Support;

use App\Models\Store;
use Illuminate\Support\Collection;

class StoreContext
{
    public static function stores(): Collection
    {
        return Store::query()
            ->where('is_active', true)
            ->where('has_pickup', true)
            ->orderBy('sort_order')
            ->orderBy('name')
            ->get();
    }

    public static function current(): ?Store
    {
        $storeId = session('store_id');

        if ($storeId) {
            $store = Store::query()
                ->where('is_active', true)
                ->where('has_pickup', true)
                ->find($storeId);

            if ($store) {
                return $store;
            }
        }

        $store = self::stores()->first();

        if ($store) {
            session(['store_id' => $store->id]);
        }

        return $store;
    }

    public static function id(): ?int
    {
        return self::current()?->id;
    }
}
