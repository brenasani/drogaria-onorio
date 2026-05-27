# Deploy da Drogaria Onório

Este projeto precisa de uma hospedagem PHP com:

- PHP 8.3 ou superior
- Extensões: `pdo`, `pdo_pgsql`, `pgsql`, `mbstring`, `openssl`, `curl`, `fileinfo`, `xml`, `zip`
- HTTPS ativo
- Banco Postgres em produção
- Backup automático do banco
- Permissão de escrita em `storage` e `bootstrap/cache`
- Domínio ou subdomínio apontando para a pasta `public`

> SQLite fica apenas para desenvolvimento local/MVP. Em produção, use Postgres por segurança, estabilidade, backup e escalabilidade.

## Melhor configuração

No painel da hospedagem, configure o domínio para usar como raiz:

```text
/caminho/do/projeto/onorio-commerce/public
```

Nunca deixe o domínio apontar para a raiz do Laravel, porque arquivos como `.env` não devem ficar públicos.

## Arquivo `.env`

Copie `.env.production.example` para `.env` na hospedagem e troque:

```env
APP_URL=https://seu-link-real.com.br
APP_DEBUG=false
DB_CONNECTION=pgsql
DB_HOST=host-do-postgres
DB_PORT=5432
DB_DATABASE=drogaria_onorio
DB_USERNAME=usuario
DB_PASSWORD=senha-forte
DB_SSLMODE=require
MERCADO_PAGO_ACCESS_TOKEN=APP_USR...
MERCADO_PAGO_SANDBOX=false
ADMIN_EMAIL=admin@seudominio.com.br
ADMIN_PASSWORD=senha-forte-exclusiva-do-painel
```

Enquanto o token do Mercado Pago estiver vazio, o app usa pagamento teste local.

## Banco de dados em produção

Use Postgres gerenciado ou Postgres em VPS/cloud. Opções possíveis:

- Supabase Postgres
- Neon Postgres
- Render/Railway Postgres
- VPS própria com Postgres + backup
- Hospedagem PHP que ofereça Postgres

Antes de abrir a loja ao público, confirme:

- Backup automático diário ativo
- SSL/TLS no acesso ao banco, quando externo
- Usuário do banco com senha forte
- `APP_DEBUG=false`
- `.env` fora da pasta pública
- Rotina de restauração testada

## Comandos na hospedagem

Se a hospedagem tiver terminal/SSH:

```bash
composer install --no-dev --optimize-autoloader
php artisan migrate --force
php artisan storage:link
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

Se não tiver terminal, envie o pacote com a pasta `vendor` já inclusa e rode as migrações localmente antes do envio.

## Instalar no celular

Depois de publicado em HTTPS:

- Android/Chrome: menu de três pontos -> Instalar app ou Adicionar à tela inicial.
- iPhone/Safari: Compartilhar -> Adicionar à Tela de Início.


## Checklist final antes de producao

### Receita medica

- Produtos com `requires_prescription=true` exigem envio de arquivo no checkout.
- Arquivos aceitos: PDF, JPG, JPEG e PNG ate 5 MB.
- As receitas ficam no disco privado do Laravel (`storage/app/private/prescriptions`) e so o painel admin consegue baixar.
- No painel de pedidos, revise a receita como pendente, aprovada ou recusada.

### Estoque

- O estoque e conferido no checkout e novamente no momento em que o pagamento e aprovado.
- A baixa de estoque gera registro em `stock_movements`.
- Ajustes manuais feitos pelo painel de produtos tambem geram movimentacao.
- Produtos abaixo do minimo aparecem no dashboard do admin.

### Auditoria e seguranca do admin

- O painel admin aceita usuario real por `ADMIN_EMAIL` + `ADMIN_PASSWORD`.
- Login do admin tem rate limit de 5 tentativas por minuto por IP.
- Acoes administrativas gravam registros em `admin_audit_logs`.
- Confira os logs em `/admin/auditoria`.
- Use uma senha forte e exclusiva em producao.

### Mercado Pago real

Configure no `.env` de producao:

```env
MERCADO_PAGO_ACCESS_TOKEN=APP_USR...
MERCADO_PAGO_SANDBOX=false
MERCADO_PAGO_WEBHOOK_SECRET=segredo-configurado-no-webhook
```

No painel do Mercado Pago, configure o webhook para:

```text
https://seu-dominio.com.br/webhooks/mercado-pago
```

Se `MERCADO_PAGO_WEBHOOK_SECRET` estiver preenchido, o app valida a assinatura `x-signature` do webhook.

### Backup Postgres

Antes de abrir para clientes:

- Ative backup automatico diario.
- Teste restauracao de backup.
- Garanta SSL/TLS no acesso ao banco (`DB_SSLMODE=require`).
- Guarde as variaveis `.env` fora do GitHub.
- Rode `php artisan migrate --force` apos o deploy.

## Admin com usuarios reais

O seed cria um usuario administrador usando `ADMIN_EMAIL` e `ADMIN_PASSWORD`. Apos configurar o `.env`, rode `php artisan db:seed --force` uma vez ou crie usuarios diretamente no banco com `is_admin=true`.
