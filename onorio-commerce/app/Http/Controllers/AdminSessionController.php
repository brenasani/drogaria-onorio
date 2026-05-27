<?php

namespace App\Http\Controllers;

use App\Models\AdminAuditLog;
use App\Support\Cart;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

class AdminSessionController extends Controller
{
    public function create(): View
    {
        return view('admin.auth.login', [
            'cartCount' => Cart::count(),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'password' => ['required', 'string'],
        ]);

        $password = (string) config('services.admin.password');

        if ($password === '' || ! hash_equals($password, (string) $data['password'])) {
            return back()
                ->withErrors(['password' => 'Senha administrativa inválida.'])
;
        }

        $request->session()->regenerate();
        $request->session()->put('admin_authenticated', true);

        AdminAuditLog::record('admin.login', metadata: ['email' => 'password_login'], request: $request);

        return redirect()->route('admin.orders.index');
    }

    public function destroy(Request $request): RedirectResponse
    {
        AdminAuditLog::record('admin.logout', request: $request);

        $request->session()->forget('admin_authenticated');
        $request->session()->regenerateToken();

        return redirect()->route('admin.login')->with('status', 'Você saiu do painel administrativo.');
    }
}
