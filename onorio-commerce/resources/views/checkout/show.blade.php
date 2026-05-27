@extends('layouts.store')

@section('title', 'Checkout | Drogaria Onorio')

@section('content')
    <section class="page-shell checkout-shell">
        <div class="section-heading">
            <h1>Compre e retire</h1>
            <p>Pagamento online com retirada presencial na Drogaria Onório.</p>
        </div>

        <form class="checkout-layout" method="POST" action="{{ route('checkout.store') }}" enctype="multipart/form-data">
            @csrf
            <div class="checkout-form">
                <fieldset>
                    <legend>Dados do cliente</legend>
                    <label>Nome completo <input name="customer_name" value="{{ old('customer_name') }}" required></label>
                    <label>E-mail <input type="email" name="customer_email" value="{{ old('customer_email') }}" required></label>
                    <label>Telefone <input name="customer_phone" value="{{ old('customer_phone') }}" required></label>
                    <label>CPF ou documento <input name="customer_document" value="{{ old('customer_document') }}"></label>
                </fieldset>

                @php($requiresPrescription = $lines->contains(fn ($line) => $line['product']->requires_prescription))
                @if ($requiresPrescription)
                    <fieldset>
                        <legend>Receita m?dica</legend>
                        <p class="small-copy">Seu carrinho tem produto que exige receita. Envie foto ou PDF para confer?ncia da farm?cia antes da retirada.</p>
                        <label>Arquivo da receita <input type="file" name="prescription_file" accept=".jpg,.jpeg,.png,.pdf" required></label>
                    </fieldset>
                @endif

                <fieldset>
                    <legend>Unidade de retirada</legend>
                    <label>Escolha a loja
                        <select name="pickup_store_id" required>
                            @foreach ($stores as $store)
                                <option value="{{ $store->id }}" @selected((int) old('pickup_store_id', $selectedStore?->id) === $store->id)>
                                    {{ $store->name }} ? {{ $store->address }}
                                </option>
                            @endforeach
                        </select>
                    </label>
                    @if ($selectedStore)
                        <p class="small-copy"><strong>Hor?rio:</strong> {{ $selectedStore->hours }} ? <strong>Telefone:</strong> {{ $selectedStore->phone }}</p>
                    @endif
                </fieldset>

                <fieldset>
                    <legend>Retirada na loja</legend>
                    <label>Nome de quem retira <input name="pickup_person_name" value="{{ old('pickup_person_name') }}" required></label>
                    <label>Telefone de quem retira <input name="pickup_person_phone" value="{{ old('pickup_person_phone') }}" required></label>
                    <label>Observações <textarea name="notes" rows="4">{{ old('notes') }}</textarea></label>
                </fieldset>
            </div>

            <aside class="summary">
                <h2>Pedido</h2>
                @foreach ($lines as $line)
                    <div class="summary-item">
                        <span>{{ $line['quantity'] }}x {{ $line['product']->name }}</span>
                        <strong>{{ \App\Support\Cart::money($line['subtotal_cents']) }}</strong>
                    </div>
                @endforeach
                <div class="summary-total">
                    <span>Total</span>
                    <strong>{{ $total }}</strong>
                </div>
                <p class="small-copy">Ao pagar, você receberá o código de retirada. Medicamentos com receita serão conferidos no balcão.</p>
                <button class="button primary full" type="submit">Pagar online</button>
            </aside>
        </form>
    </section>
@endsection
