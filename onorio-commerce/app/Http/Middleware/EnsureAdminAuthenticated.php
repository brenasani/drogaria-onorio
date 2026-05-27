<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class EnsureAdminAuthenticated
{
    public function handle(Request $request, Closure $next): Response
    {
        if ((Auth::check() && Auth::user()?->is_admin) || $request->session()->get('admin_authenticated') === true) {
            return $next($request);
        }

        return redirect()->guest(route('admin.login'));
    }
}
