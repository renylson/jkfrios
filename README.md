# JK & Frios - Website Institucional

![JK & Frios](src/assets/logo_medio.png)

Site institucional da empresa **JK & Frios**, especializada em linguiças artesanais, frios selecionados e embutidos de alta qualidade. Tradição familiar há mais de 30 anos.

## 🌟 Sobre o Projeto

Este é um site moderno e responsivo desenvolvido em React com Vite, apresentando:

- **Design profissional** com animações suaves
- **Carrossel animado** das logomarcas dos clientes
- **Slideshow de background** na seção principal
- **Formulário de contato** integrado
- **WhatsApp floating button** sempre visível
- **SEO otimizado** para melhor indexação
- **Totalmente responsivo** para todos os dispositivos

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool moderna e rápida
- **React Router DOM** - Navegação entre páginas
- **CSS3** - Animações e layouts responsivos
- **Docker** - Containerização para deploy
- **Nginx** - Servidor web para produção

## 📱 Funcionalidades

### Páginas
- **Home** - Apresentação da empresa com slideshow
- **Sobre** - História e valores da empresa
- **Produtos** - Catálogo de linguiças e frios
- **Clientes** - Carrossel de logomarcas dos parceiros
- **Contato** - Informações e formulário de contato
- **Trabalhe Conosco** - Formulário para envio de currículos

### Componentes Especiais
- **Header responsivo** com logo otimizada
- **Slideshow de fundo** com imagens da fábrica
- **Carrossel infinito** de clientes
- **Botão WhatsApp flutuante**
- **Animações CSS** profissionais

## 🛠️ Desenvolvimento

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone https://github.com/[seu-usuario]/jkfrios.git
cd jkfrios

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev
```

### Scripts Disponíveis
```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview do build local
npm run lint         # Verificar código
```

## 🐳 Deploy com Docker

### Deploy rápido
```bash
# Windows
.\deploy.ps1

# Linux/Mac
./deploy.sh
```

### Deploy manual
```bash
docker-compose build
docker-compose up -d
```

O site estará disponível em `http://localhost:3000`

Para mais detalhes, consulte [README-DOCKER.md](README-DOCKER.md)

## 📂 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.jsx      # Cabeçalho com navegação
│   ├── Hero.jsx        # Seção principal com slideshow
│   ├── BackgroundSlideshow.jsx  # Slideshow de fundo
│   ├── ClientesCarrossel.jsx    # Carrossel de clientes
│   ├── WhatsAppButton.jsx       # Botão flutuante WhatsApp
│   └── ...
├── pages/              # Páginas da aplicação
│   ├── HomePage.jsx    # Página inicial
│   ├── SobrePage.jsx   # Página sobre
│   ├── ProdutosPage.jsx # Página de produtos
│   └── ...
├── assets/             # Recursos estáticos
│   ├── clientes/       # Logomarcas dos clientes
│   ├── logo.png        # Logo da empresa
│   ├── linguica01.jpg  # Imagens para slideshow
│   └── ...
└── index.css           # Estilos globais e animações
```

## 🎨 Design

### Cores Principais
- **Primária:** `#8B4513` (Marrom)
- **Secundária:** `#A0522D` (Marrom claro)
- **Dourado:** `#DAA520` (Detalhes)
- **Texto:** `#2C3E50` (Azul escuro)

### Animações
- **fadeInUp** - Entrada suave de baixo para cima
- **scaleIn** - Entrada com escala
- **bounceIn** - Entrada com bounce
- **heartbeat** - Pulsação suave
- **logoGlow** - Brilho na logo

## 📞 Contato

- **WhatsApp:** [Configurar número]
- **Email:** contato@jkfrios.com.br
- **Site:** [URL do site após deploy]

## 📄 Licença

Este projeto é propriedade da **JK & Frios** e destina-se exclusivamente ao uso institucional da empresa.

---

**Desenvolvido com ❤️ para JK & Frios**
