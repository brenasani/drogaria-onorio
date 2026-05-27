<?php

namespace App\Http\Controllers;

use App\Models\AdminAuditLog;
use App\Support\Cart;
use Illuminate\View\View;

class AdminAuditLogController extends Controller
{
    public function index(): View
    {
        return view('admin.audit.index', [
            'logs' => AdminAuditLog::query()->latest()->paginate(30),
            'cartCount' => Cart::count(),
        ]);
    }
}
