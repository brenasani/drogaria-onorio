@extends('layouts.store')

@section('title', 'Auditoria | Painel Drogaria Onório')

@section('content')
    <section class="page-shell">
        <div class="section-heading">
            <div>
                <span class="category-name">Painel administrativo</span>
                <h1>Auditoria</h1>
                <p>Registro de ações administrativas para rastrear alterações importantes.</p>
            </div>
        </div>

        @include('admin._tabs')

        <div class="admin-list">
            @forelse ($logs as $log)
                <article class="admin-order">
                    <div>
                        <span class="category-name">{{ $log->created_at->format('d/m/Y H:i') }} · {{ $log->ip_address }}</span>
                        <h2>{{ $log->action }}</h2>
                        <p>{{ class_basename($log->subject_type) }} {{ $log->subject_id }} · {{ $log->admin_label ?? 'sistema' }}</p>
                        @if ($log->metadata)
                            <p class="small-copy">{{ json_encode($log->metadata, JSON_UNESCAPED_UNICODE) }}</p>
                        @endif
                    </div>
                </article>
            @empty
                <div class="empty-state">
                    <h2>Nenhum log ainda</h2>
                    <p>As ações administrativas aparecerão aqui.</p>
                </div>
            @endforelse
        </div>

        {{ $logs->links() }}
    </section>
@endsection
