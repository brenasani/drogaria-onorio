<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('customer_name');
            $table->string('customer_email');
            $table->string('customer_phone');
            $table->string('customer_document')->nullable();
            $table->string('pickup_person_name');
            $table->string('pickup_person_phone');
            $table->text('notes')->nullable();
            $table->string('status')->default('aguardando_pagamento');
            $table->string('payment_status')->default('pending');
            $table->string('payment_provider')->default('mercado_pago');
            $table->string('payment_reference')->nullable();
            $table->unsignedInteger('total_cents');
            $table->string('pickup_code', 16)->unique();
            $table->timestamp('paid_at')->nullable();
            $table->timestamp('ready_at')->nullable();
            $table->timestamp('stock_reduced_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
