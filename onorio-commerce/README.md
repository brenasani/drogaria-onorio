# Drogaria Onório Commerce

Primeira versão Laravel para venda online com retirada na loja.

## Rodar localmente

No Windows desta máquina, use o PHP instalado pelo projeto com o `php.ini` local:

```powershell
cd "C:\Users\Brena\Documents\New project 2\onorio-commerce"
..\tools\run-onorio-server.cmd
```

Abra:

```text
http://127.0.0.1:8010
```

## Banco local

O projeto usa SQLite para facilitar a demonstração.

```powershell
$php="C:\Users\Brena\AppData\Local\Microsoft\WinGet\Packages\PHP.PHP.8.4_Microsoft.Winget.Source_8wekyb3d8bbwe\php.exe"
$ini="C:\Users\Brena\Documents\New project 2\tools\php.ini"
& $php -c $ini artisan migrate:fresh --seed
```

## Testes

```powershell
$php="C:\Users\Brena\AppData\Local\Microsoft\WinGet\Packages\PHP.PHP.8.4_Microsoft.Winget.Source_8wekyb3d8bbwe\php.exe"
$ini="C:\Users\Brena\Documents\New project 2\tools\php.ini"
& $php -c $ini vendor\phpunit\phpunit\phpunit --colors=never
```

## Mercado Pago

Enquanto `MERCADO_PAGO_ACCESS_TOKEN` estiver vazio no `.env`, o checkout cai no pagamento teste local.

Para ativar o checkout real:

```env
MERCADO_PAGO_ACCESS_TOKEN=APP_USR...
MERCADO_PAGO_SANDBOX=true
APP_URL=https://seu-dominio.com.br
```

Depois limpe a configuração:

```powershell
& $php -c $ini artisan config:clear
```

## Abrir como aplicativo no celular

O projeto já tem `site.webmanifest`, `sw.js` e ícone para funcionar como PWA.

Para instalar como app de verdade, publique em um endereço com HTTPS. Depois:

- Android/Chrome: abra o site, toque no menu de três pontos, toque em Adicionar à tela inicial ou Instalar app e confirme.
- iPhone/Safari: abra o site, toque em Compartilhar, toque em Adicionar à Tela de Início, ative Abrir como Web App se aparecer, e toque em Adicionar.

Em `http://127.0.0.1:8010` isso só abre no computador. Para testar no celular antes da hospedagem, use um túnel HTTPS ou rode em rede local sabendo que a instalação como PWA pode não aparecer sem HTTPS.
