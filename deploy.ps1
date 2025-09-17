# Script para build e deploy do container Docker
# Execute este script no PowerShell

Write-Host "🐳 Iniciando build do Docker para JK & Frios..." -ForegroundColor Cyan

# Para o container se estiver rodando
Write-Host "📦 Parando containers existentes..." -ForegroundColor Yellow
docker-compose down

# Remove imagem antiga se existir
Write-Host "🗑️ Removendo imagens antigas..." -ForegroundColor Yellow
docker image rm jk-frios-website_jk-frios-website 2>$null

# Faz o build da nova imagem
Write-Host "🔨 Construindo nova imagem..." -ForegroundColor Green
docker-compose build --no-cache

# Inicia o container
Write-Host "🚀 Iniciando container..." -ForegroundColor Green
docker-compose up -d

# Mostra o status
Write-Host "✅ Deploy concluído!" -ForegroundColor Green
Write-Host "🌐 Site disponível em: http://localhost:3000" -ForegroundColor Cyan

# Mostra logs
Write-Host "📋 Últimos logs:" -ForegroundColor Yellow
docker-compose logs --tail=20