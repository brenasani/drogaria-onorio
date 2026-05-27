<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Support\Cart;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Illuminate\View\View;

class AdminCategoryController extends Controller
{
    public function index(): View
    {
        return view('admin.categories.index', [
            'categories' => Category::query()
                ->withCount('products')
                ->orderBy('sort_order')
                ->orderBy('name')
                ->paginate(20),
            'cartCount' => Cart::count(),
        ]);
    }

    public function create(): View
    {
        return view('admin.categories.form', [
            'category' => new Category(['sort_order' => 1]),
            'cartCount' => Cart::count(),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $this->validatedData($request);
        Category::query()->create($data);

        return redirect()->route('admin.categories.index')
            ->with('status', 'Categoria criada com sucesso.');
    }

    public function edit(Category $category): View
    {
        return view('admin.categories.form', [
            'category' => $category,
            'cartCount' => Cart::count(),
        ]);
    }

    public function update(Request $request, Category $category): RedirectResponse
    {
        $category->update($this->validatedData($request, $category));

        return redirect()->route('admin.categories.index')
            ->with('status', 'Categoria atualizada com sucesso.');
    }

    public function destroy(Category $category): RedirectResponse
    {
        if ($category->products()->exists()) {
            return back()->withErrors([
                'category' => 'Não é possível excluir categoria com produtos vinculados.',
            ]);
        }

        $category->delete();

        return redirect()->route('admin.categories.index')
            ->with('status', 'Categoria excluída com sucesso.');
    }

    private function validatedData(Request $request, ?Category $category = null): array
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:120'],
            'slug' => [
                'nullable',
                'string',
                'max:140',
                Rule::unique('categories', 'slug')->ignore($category?->id),
            ],
            'sort_order' => ['nullable', 'integer', 'min:0', 'max:999'],
        ]);

        $slug = Str::slug(($data['slug'] ?? '') ?: $data['name']);

        return [
            'name' => $data['name'],
            'slug' => $slug,
            'sort_order' => (int) ($data['sort_order'] ?? 0),
        ];
    }
}
