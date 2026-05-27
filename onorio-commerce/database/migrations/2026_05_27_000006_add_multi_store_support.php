<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('stores', function (Blueprint $table): void {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('address');
            $table->string('phone');
            $table->text('hours');
            $table->boolean('has_pickup')->default(true);
            $table->boolean('is_active')->default(true);
            $table->unsignedInteger('sort_order')->default(0);
            $table->timestamps();
        });

        Schema::create('product_store_stocks', function (Blueprint $table): void {
            $table->id();
            $table->foreignId('product_id')->constrained()->cascadeOnDelete();
            $table->foreignId('store_id')->constrained()->cascadeOnDelete();
            $table->unsignedInteger('quantity')->default(0);
            $table->timestamps();
            $table->unique(['product_id', 'store_id']);
        });

        Schema::table('orders', function (Blueprint $table): void {
            $table->foreignId('store_id')->nullable()->after('id')->constrained()->nullOnDelete();
        });

        Schema::table('stock_movements', function (Blueprint $table): void {
            $table->foreignId('store_id')->nullable()->after('order_id')->constrained()->nullOnDelete();
        });
    }

    public function down(): void
    {
        Schema::table('stock_movements', function (Blueprint $table): void {
            $table->dropConstrainedForeignId('store_id');
        });

        Schema::table('orders', function (Blueprint $table): void {
            $table->dropConstrainedForeignId('store_id');
        });

        Schema::dropIfExists('product_store_stocks');
        Schema::dropIfExists('stores');
    }
};
