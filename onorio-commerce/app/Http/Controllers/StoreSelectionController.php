<?php

namespace App\Http\Controllers;

use App\Models\Store;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class StoreSelectionController extends Controller
{
    public function update(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'store_id' => ['required', 'integer', 'exists:stores,id'],
        ]);

        $store = Store::query()
            ->where('is_active', true)
            ->where('has_pickup', true)
            ->findOrFail($data['store_id']);

        session(['store_id' => $store->id]);

        return back()->with('status', 'Unidade de retirada alterada para '.$store->name.'.');
    }
}
