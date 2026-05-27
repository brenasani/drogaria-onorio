<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use App\Models\ProductStoreStock;
use App\Models\Store;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    public function run(): void
    {
        $stores = collect([
            [
                'name' => 'Drogaria Onorio - Iguatemi',
                'slug' => 'iguatemi',
                'address' => 'Av. Arnaldo Victaliano, 1155 - Iguatemi - Ribeirao Preto/SP',
                'phone' => '(16) 3618-0883',
                'hours' => 'Segunda a sabado: 7h as 22h. Domingo: 7h as 13h. Feriados: 7h as 19h.',
                'sort_order' => 1,
            ],
            [
                'name' => 'Drogaria Onorio - Jardim Botanico',
                'slug' => 'jardim-botanico',
                'address' => 'Av. Portugal, 2777 - Jardim Botanico - Ribeirao Preto/SP',
                'phone' => '(16) 3442-2440',
                'hours' => 'Segunda a sabado: 7h as 22h. Domingo: 7h as 13h. Feriados: 7h as 19h.',
                'sort_order' => 2,
            ],
        ])->mapWithKeys(function (array $store): array {
            $model = Store::query()->updateOrCreate(
                ['slug' => $store['slug']],
                [
                    ...$store,
                    'has_pickup' => true,
                    'is_active' => true,
                ],
            );

            return [$store['slug'] => $model];
        });

        $categories = collect([
            ['name' => 'Medicamentos', 'slug' => 'medicamentos'],
            ['name' => 'Conveniencia', 'slug' => 'conveniencia'],
            ['name' => 'Suplementos', 'slug' => 'suplementos'],
            ['name' => 'Cosmeticos', 'slug' => 'cosmeticos'],
            ['name' => 'Perfumaria', 'slug' => 'perfumaria'],
        ])->mapWithKeys(function (array $category, int $index): array {
            $model = Category::query()->updateOrCreate(
                ['slug' => $category['slug']],
                ['name' => $category['name'], 'sort_order' => $index + 1],
            );

            return [$category['slug'] => $model];
        });

        $products = [
            ['category' => 'medicamentos', 'name' => 'Analgesico Doronex 500mg', 'description' => 'Caixa com 20 comprimidos para alivio de dores leves e febre.', 'price_cents' => 1890, 'stock_quantity' => 32, 'requires_prescription' => false, 'image_color' => '#39896A', 'image_text' => 'DX'],
            ['category' => 'medicamentos', 'name' => 'Antiacido GastroBem', 'description' => 'Suspensao oral sabor menta para azia e ma digestao.', 'price_cents' => 2490, 'stock_quantity' => 18, 'requires_prescription' => false, 'image_color' => '#FF8F1C', 'image_text' => 'GB'],
            ['category' => 'cosmeticos', 'name' => 'Protetor Solar Dermacare FPS 60', 'description' => 'Toque seco e alta protecao para uso diario.', 'price_cents' => 5990, 'stock_quantity' => 24, 'requires_prescription' => false, 'image_color' => '#F7C8A0', 'image_text' => 'FPS'],
            ['category' => 'suplementos', 'name' => 'Vitamina C Imuno+ 1g', 'description' => 'Suplemento efervescente com 10 unidades.', 'price_cents' => 3290, 'stock_quantity' => 27, 'requires_prescription' => false, 'image_color' => '#F5B84B', 'image_text' => 'C+'],
            ['category' => 'conveniencia', 'name' => 'Kit Higiene Viagem', 'description' => 'Escova, creme dental, fio dental e necessaire compacta.', 'price_cents' => 2790, 'stock_quantity' => 16, 'requires_prescription' => false, 'image_color' => '#A8D5C2', 'image_text' => 'KIT'],
            ['category' => 'perfumaria', 'name' => 'Colonia Fresh Onorio 100ml', 'description' => 'Fragrancia leve com saida citrica.', 'price_cents' => 7490, 'stock_quantity' => 12, 'requires_prescription' => false, 'image_color' => '#89B9D9', 'image_text' => 'ON'],
            ['category' => 'medicamentos', 'name' => 'Antibiotico MedControl 875mg', 'description' => 'Produto controlado: compra sujeita a apresentacao e retencao de receita na retirada.', 'price_cents' => 8990, 'stock_quantity' => 8, 'requires_prescription' => true, 'image_color' => '#2D2926', 'image_text' => 'RX'],
            ['category' => 'cosmeticos', 'name' => 'Sabonete Facial Equilibrio', 'description' => 'Limpeza suave para pele mista e oleosa.', 'price_cents' => 3990, 'stock_quantity' => 21, 'requires_prescription' => false, 'image_color' => '#DCE8C8', 'image_text' => 'EQ'],
        ];

        foreach ($products as $product) {
            $model = Product::query()->updateOrCreate(
                ['slug' => Str::slug($product['name'])],
                [
                    'category_id' => $categories[$product['category']]->id,
                    'name' => $product['name'],
                    'description' => $product['description'],
                    'price_cents' => $product['price_cents'],
                    'stock_quantity' => $product['stock_quantity'] * max(1, $stores->count()),
                    'requires_prescription' => $product['requires_prescription'],
                    'is_active' => true,
                    'image_color' => $product['image_color'],
                    'image_text' => $product['image_text'],
                ],
            );

            foreach ($stores as $store) {
                ProductStoreStock::query()->updateOrCreate(
                    ['product_id' => $model->id, 'store_id' => $store->id],
                    ['quantity' => $product['stock_quantity']],
                );
            }
        }

        User::query()->updateOrCreate(
            ['email' => env('ADMIN_EMAIL', 'admin@drogariaonorio.test')],
            [
                'name' => 'Administrador Onorio',
                'password' => Hash::make(env('ADMIN_PASSWORD', 'onorio-admin')),
                'is_admin' => true,
            ],
        );
    }
}
