<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

#[Fillable([
    'action',
    'subject_type',
    'subject_id',
    'admin_label',
    'ip_address',
    'user_agent',
    'metadata',
])]
class AdminAuditLog extends Model
{
    protected function casts(): array
    {
        return [
            'metadata' => 'array',
        ];
    }

    public static function record(string $action, ?Model $subject = null, array $metadata = [], ?Request $request = null): void
    {
        $request ??= request();

        static::query()->create([
            'action' => $action,
            'subject_type' => $subject ? $subject::class : null,
            'subject_id' => $subject?->getKey() ? (string) $subject->getKey() : null,
            'admin_label' => session('admin_authenticated') ? 'admin' : null,
            'ip_address' => $request?->ip(),
            'user_agent' => $request?->userAgent(),
            'metadata' => $metadata,
        ]);
    }
}
