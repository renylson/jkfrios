#!/bin/bash
# Script para build e deploy do container Docker (Linux/Mac)

echo "🐳 Iniciando build do Docker para JK & Frios..."

# Para o container se estiver rodando
echo "📦 Parando containers existentes..."
docker-compose down

# Remove imagem antiga se existir
echo "🗑️ Removendo imagens antigas..."
docker image rm jk-frios-website_jk-frios-website 2>/dev/null || true

# Faz o build da nova imagem
echo "🔨 Construindo nova imagem..."
docker-compose build --no-cache

# Inicia o container
echo "🚀 Iniciando container..."
docker-compose up -d

# Mostra o status
echo "✅ Deploy concluído!"
echo "🌐 Site disponível em: http://localhost:3000"

# Mostra logs
echo "📋 Últimos logs:"
docker-compose logs --tail=20