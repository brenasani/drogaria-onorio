<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $categories = collect([
            ['name' => 'Medicamentos', 'slug' => 'medicamentos'],
            ['name' => 'Conveniência', 'slug' => 'conveniencia'],
            ['name' => 'Suplementos', 'slug' => 'suplementos'],
            ['name' => 'Cosméticos', 'slug' => 'cosmeticos'],
            ['name' => 'Perfumaria', 'slug' => 'perfumaria'],
        ])->mapWithKeys(function (array $category, int $index): array {
            $model = Category::query()->updateOrCreate(
                ['slug' => $category['slug']],
                ['name' => $category['name'], 'sort_order' => $index + 1],
            );

            return [$category['slug'] => $model];
        });

        $products = [
            [
                'category' => 'medicamentos',
                'name' => 'Analgésico Doronex 500mg',
                'description' => 'Caixa com 20 comprimidos para alívio de dores leves e febre. Venda conforme orientação farmacêutica.',
                'price_cents' => 1890,
                'stock_quantity' => 32,
                'requires_prescription' => false,
                'image_color' => '#39896A',
                'image_text' => 'DX',
            ],
            [
                'category' => 'medicamentos',
                'name' => 'Antiácido GastroBem',
                'description' => 'Suspensão oral sabor menta para azia e má digestão, pronta para retirar no balcão.',
                'price_cents' => 2490,
                'stock_quantity' => 18,
                'requires_prescription' => false,
                'image_color' => '#FF8F1C',
                'image_text' => 'GB',
            ],
            [
                'category' => 'cosmeticos',
                'name' => 'Protetor Solar Dermacare FPS 60',
                'description' => 'Toque seco, alta proteção e acabamento invisível para uso diário.',
                'price_cents' => 5990,
                'stock_quantity' => 24,
                'requires_prescription' => false,
                'image_color' => '#F7C8A0',
                'image_text' => 'FPS',
            ],
            [
                'category' => 'suplementos',
                'name' => 'Vitamina C Imuno+ 1g',
                'description' => 'Suplemento efervescente com 10 unidades para rotina de cuidado e imunidade.',
                'price_cents' => 3290,
                'stock_quantity' => 27,
                'requires_prescription' => false,
                'image_color' => '#F5B84B',
                'image_text' => 'C+',
            ],
            [
                'category' => 'conveniencia',
                'name' => 'Kit Higiene Viagem',
                'description' => 'Escova, creme dental, fio dental e necessaire compacta para o dia a dia.',
                'price_cents' => 2790,
                'stock_quantity' => 16,
                'requires_prescription' => false,
                'image_color' => '#A8D5C2',
                'image_text' => 'KIT',
            ],
            [
                'category' => 'perfumaria',
                'name' => 'Colônia Fresh Onório 100ml',
                'description' => 'Fragrância leve com saída cítrica, ideal para presentear ou usar todos os dias.',
                'price_cents' => 7490,
                'stock_quantity' => 12,
                'requires_prescription' => false,
                'image_color' => '#89B9D9',
                'image_text' => 'ON',
            ],
            [
                'category' => 'medicamentos',
                'name' => 'Antibiótico MedControl 875mg',
                'description' => 'Produto controlado: compra sujeita à apresentação e retenção de receita na retirada.',
                'price_cents' => 8990,
                'stock_quantity' => 8,
                'requires_prescription' => true,
                'image_color' => '#2D2926',
                'image_text' => 'RX',
            ],
            [
                'category' => 'cosmeticos',
                'name' => 'Sabonete Facial Equilíbrio',
                'description' => 'Limpeza suave para pele mista e oleosa, com sensação refrescante.',
                'price_cents' => 3990,
                'stock_quantity' => 21,
                'requires_prescription' => false,
                'image_color' => '#DCE8C8',
                'image_text' => 'EQ',
            ],
        ];

        foreach ($products as $product) {
            Product::query()->updateOrCreate(
                ['slug' => Str::slug($product['name'])],
                [
                    'category_id' => $categories[$product['category']]->id,
                    'name' => $product['name'],
                    'description' => $product['description'],
                    'price_cents' => $product['price_cents'],
                    'stock_quantity' => $product['stock_quantity'],
                    'requires_prescription' => $product['requires_prescription'],
                    'is_active' => true,
                    'image_color' => $product['image_color'],
                    'image_text' => $product['image_text'],
                ],
            );
        }

        User::factory()->create([
            'name' => 'Equipe Onorio',
            'email' => 'atendimento@drogariaonorio.test',
        ]);
    }
}
