<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('products', function (Blueprint $table): void {
            $table->string('external_id')->nullable()->unique()->after('id');
            $table->string('barcode', 32)->nullable()->index()->after('external_id');
            $table->timestamp('external_synced_at')->nullable()->after('image_path');
        });

        Schema::table('stores', function (Blueprint $table): void {
            $table->string('external_store_id')->nullable()->unique()->after('id');
        });

        Schema::table('product_store_stocks', function (Blueprint $table): void {
            $table->timestamp('external_synced_at')->nullable()->after('quantity');
        });

        Schema::create('integration_logs', function (Blueprint $table): void {
            $table->id();
            $table->string('integration')->default('erp');
            $table->string('direction')->default('inbound');
            $table->string('action');
            $table->string('status')->default('pending');
            $table->string('external_id')->nullable()->index();
            $table->foreignId('product_id')->nullable()->constrained()->nullOnDelete();
            $table->foreignId('store_id')->nullable()->constrained()->nullOnDelete();
            $table->json('payload')->nullable();
            $table->json('response')->nullable();
            $table->text('message')->nullable();
            $table->timestamp('started_at')->nullable();
            $table->timestamp('finished_at')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('integration_logs');

        Schema::table('product_store_stocks', function (Blueprint $table): void {
            $table->dropColumn('external_synced_at');
        });

        Schema::table('stores', function (Blueprint $table): void {
            $table->dropColumn('external_store_id');
        });

        Schema::table('products', function (Blueprint $table): void {
            $table->dropColumn(['external_id', 'barcode', 'external_synced_at']);
        });
    }
};
