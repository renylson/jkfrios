# JK & Frios - Website Institucional

Site institucional da empresa JK & Frios, especializada em linguiças artesanais, frios selecionados e embutidos de alta qualidade.

## 🐳 Deploy com Docker

### Pré-requisitos
- Docker instalado
- Docker Compose instalado

### Método 1: Usando Docker Compose (Recomendado)

```bash
# Clone o repositório (se aplicável)
git clone [seu-repositorio]
cd www

# Execute o deploy automático
# No Windows (PowerShell):
.\deploy.ps1

# No Linux/Mac:
chmod +x deploy.sh
./deploy.sh
```

### Método 2: Comandos manuais

```bash
# 1. Construir a imagem
docker-compose build

# 2. Iniciar o container
docker-compose up -d

# 3. Verificar se está rodando
docker-compose ps
```

### Acessar o site
Após o deploy, o site estará disponível em:
- **URL:** http://localhost:3000
- **Porta:** 3000

### Comandos úteis

```bash
# Ver logs do container
docker-compose logs -f

# Parar o container
docker-compose down

# Reiniciar o container
docker-compose restart

# Ver status dos containers
docker-compose ps

# Entrar no container (debug)
docker-compose exec jk-frios-website sh
```

### Configurações

#### Portas
- **Porta padrão:** 3000
- **Porta interna:** 80 (nginx)

Para alterar a porta, edite o arquivo `docker-compose.yml`:
```yaml
ports:
  - "SUA_PORTA:80"  # Substitua SUA_PORTA pela porta desejada
```

#### Variáveis de ambiente
O container usa as seguintes variáveis:
- `NODE_ENV=production`

### Estrutura Docker

#### Dockerfile
- **Base:** node:18-alpine (build) + nginx:alpine (produção)
- **Multi-stage build:** Otimizado para produção
- **Nginx:** Servidor web para servir arquivos estáticos

#### nginx.conf
- Configurado para SPA (Single Page Application)
- Cache otimizado para arquivos estáticos
- Compressão gzip habilitada
- Headers de segurança configurados

### Troubleshooting

#### Container não inicia
```bash
# Verificar logs
docker-compose logs

# Verificar se a porta está livre
netstat -an | findstr :3000  # Windows
netstat -an | grep :3000     # Linux/Mac
```

#### Erro de build
```bash
# Limpar cache do Docker
docker system prune -a

# Build sem cache
docker-compose build --no-cache
```

#### Atualizar o site
```bash
# Após fazer alterações no código
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

## 🛠️ Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 📂 Estrutura do Projeto

```
www/
├── src/
│   ├── components/     # Componentes React
│   ├── pages/         # Páginas da aplicação
│   ├── assets/        # Imagens e recursos
│   └── index.css      # Estilos globais
├── Dockerfile         # Configuração Docker
├── docker-compose.yml # Orquestração Docker
├── nginx.conf         # Configuração Nginx
├── deploy.ps1         # Script deploy Windows
└── deploy.sh          # Script deploy Linux/Mac
```

## 🌟 Funcionalidades

- ✅ Design responsivo
- ✅ Animações profissionais
- ✅ Carrossel de clientes
- ✅ Slideshow de background
- ✅ Formulário de contato
- ✅ WhatsApp integrado
- ✅ SEO otimizado
- ✅ Performance otimizada