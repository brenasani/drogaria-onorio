<?php

namespace App\Http\Controllers;

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

        return redirect()->route('admin.orders.index');
    }

    public function destroy(Request $request): RedirectResponse
    {
        $request->session()->forget('admin_authenticated');
        $request->session()->regenerateToken();

        return redirect()->route('admin.login')->with('status', 'Você saiu do painel administrativo.');
    }
}
