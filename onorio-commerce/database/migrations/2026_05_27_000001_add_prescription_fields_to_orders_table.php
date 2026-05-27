<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('orders', function (Blueprint $table): void {
            $table->string('prescription_file_path')->nullable()->after('notes');
            $table->string('prescription_original_name')->nullable()->after('prescription_file_path');
            $table->string('prescription_mime_type', 120)->nullable()->after('prescription_original_name');
            $table->string('prescription_status')->default('not_required')->after('prescription_mime_type');
            $table->timestamp('prescription_reviewed_at')->nullable()->after('prescription_status');
        });
    }

    public function down(): void
    {
        Schema::table('orders', function (Blueprint $table): void {
            $table->dropColumn([
                'prescription_file_path',
                'prescription_original_name',
                'prescription_mime_type',
                'prescription_status',
                'prescription_reviewed_at',
            ]);
        });
    }
};
