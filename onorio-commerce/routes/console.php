<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');


Artisan::command('erp:sync-catalog', function (\App\Services\ErpCatalogSyncService $syncService): int {
    $result = $syncService->syncCatalog();
    $this->info('Sincronizacao concluida. Produtos processados: '.($result['synced'] ?? 0));

    return self::SUCCESS;
})->purpose('Sincroniza catalogo, precos e estoque do ERP/sistema da loja');
