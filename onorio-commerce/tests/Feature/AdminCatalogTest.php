<?php

namespace Tests\Feature;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AdminCatalogTest extends TestCase
{
    use RefreshDatabase;

    public function test_admin_can_create_category(): void
    {
        $this->loginAsAdmin();

        $this->post(route('admin.categories.store'), [
            'name' => 'Higiene pessoal',
            'sort_order' => 8,
        ])->assertRedirect(route('admin.categories.index'));

        $this->assertDatabaseHas('categories', [
            'name' => 'Higiene pessoal',
            'slug' => 'higiene-pessoal',
            'sort_order' => 8,
        ]);
    }

    public function test_admin_can_create_and_update_product(): void
    {
        $this->loginAsAdmin();
        $category = Category::query()->create([
            'name' => 'Medicamentos',
            'slug' => 'medicamentos',
            'sort_order' => 1,
        ]);

        $this->post(route('admin.products.store'), [
            'category_id' => $category->id,
            'name' => 'Teste Produto 500mg',
            'description' => 'Produto criado pelo painel.',
            'price' => '19,90',
            'stock_quantity' => 15,
            'requires_prescription' => '1',
            'is_active' => '1',
            'image_color' => '#39896A',
            'image_text' => 'TP',
        ])->assertRedirect(route('admin.products.index'));

        $product = Product::query()->firstOrFail();

        $this->assertSame(1990, $product->price_cents);
        $this->assertTrue($product->requires_prescription);

        $this->put(route('admin.products.update', $product), [
            'category_id' => $category->id,
            'name' => 'Teste Produto 750mg',
            'description' => 'Produto editado pelo painel.',
            'price' => '24,50',
            'stock_quantity' => 9,
            'is_active' => '1',
            'image_color' => '#111111',
            'image_text' => 'T2',
        ])->assertRedirect(route('admin.products.index'));

        $this->assertDatabaseHas('products', [
            'id' => $product->id,
            'name' => 'Teste Produto 750mg',
            'price_cents' => 2450,
            'stock_quantity' => 9,
            'requires_prescription' => false,
        ]);
    }

    public function test_admin_catalog_requires_login(): void
    {
        $this->get(route('admin.products.index'))->assertRedirect(route('admin.login'));
        $this->get(route('admin.categories.index'))->assertRedirect(route('admin.login'));
    }

    private function loginAsAdmin(): void
    {
        $this->post(route('admin.login.store'), [
            'password' => 'onorio-admin',
        ]);
    }
}
