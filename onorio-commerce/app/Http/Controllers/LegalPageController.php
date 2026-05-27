<?php

namespace App\Http\Controllers;

use App\Support\Cart;
use Illuminate\View\View;

class LegalPageController extends Controller
{
    public function privacy(): View
    {
        return view('legal.privacy', ['cartCount' => Cart::count()]);
    }

    public function terms(): View
    {
        return view('legal.terms', ['cartCount' => Cart::count()]);
    }
}
