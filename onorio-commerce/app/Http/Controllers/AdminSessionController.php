<?php

namespace App\Http\Controllers;

use App\Models\AdminAuditLog;
use App\Support\Cart;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
            'email' => ['nullable', 'email'],
            'password' => ['required', 'string'],
        ]);

        if (! empty($data['email'])) {
            if (! Auth::attempt(['email' => $data['email'], 'password' => $data['password'], 'is_admin' => true])) {
                AdminAuditLog::record('admin.login_failed', metadata: ['email' => $data['email']], request: $request);

                return back()->withErrors(['email' => 'E-mail ou senha inválidos para o painel.']);
            }

            $request->session()->regenerate();
            AdminAuditLog::record('admin.login', metadata: ['email' => $data['email']], request: $request);

            return redirect()->route('admin.dashboard');
        }

        $password = (string) config('services.admin.password');

        if ($password === '' || ! hash_equals($password, (string) $data['password'])) {
            AdminAuditLog::record('admin.login_failed', metadata: ['mode' => 'legacy_password'], request: $request);

            return back()->withErrors(['password' => 'Senha administrativa inválida.']);
        }

        $request->session()->regenerate();
        $request->session()->put('admin_authenticated', true);
        AdminAuditLog::record('admin.login', metadata: ['mode' => 'legacy_password'], request: $request);

        return redirect()->route('admin.dashboard');
    }

    public function destroy(Request $request): RedirectResponse
    {
        AdminAuditLog::record('admin.logout', request: $request);

        Auth::logout();
        $request->session()->forget('admin_authenticated');
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('admin.login')->with('status', 'Você saiu do painel administrativo.');
    }
}
