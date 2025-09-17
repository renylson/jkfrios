# Olá — sou Renylson, e este é o site JK & Frios

Oi, eu sou o Renylson Marques. Este repositório contém o site institucional que desenvolvi para a JK & Frios, um projeto que uso no meu portfólio para mostrar como eu trabalho com front-end, infraestrutura com Docker e deploy com Nginx.

Este README está escrito como eu escreveria quando explico o projeto para clientes ou recrutadores: simples, direto e com exemplos práticos de como rodar e entender o que foi feito.

---

## O que é esse projeto

É um site institucional (SPA) feito em React + Vite, pensado para ser rápido, responsivo e fácil de manter. Além da parte visual, o projeto vem preparado para produção: containerização com Docker, servidor Nginx e um docker-compose para orquestração local.

Principais objetivos:
- Entregar uma landing institucional clara e responsiva.
- Facilitar deploy com Docker (multi-stage build).
- Garantir boas práticas de performance e SEO.

---

## Onde eu quis dar atenção técnica

- Performance: uso Vite, code-splitting e lazy-loading para diminuir o tempo de carregamento.
- Infra: Docker multi-stage para reduzir tamanho da imagem; Nginx para servir os arquivos estáticos com gzip e cache.
- UX: design mobile-first, navegação simples e formulários com feedback visual.

---

## Tecnologias

- React 19 + Vite
- Docker (multi-stage build)
- Nginx (alpine)
- Docker Compose
- ESLint, NPM

---

## Como rodar (modo rápido)

Com Docker (recomendado):

```bash
git clone https://github.com/renylson/jkfrios.git
cd jkfrios
# sobe em background
docker-compose up -d
# abra no navegador
http://localhost:3001
```

Modo desenvolvimento (local):

```bash
git clone https://github.com/renylson/jkfrios.git
cd jkfrios
npm install
npm run dev
# por padrão o Vite abre em localhost:5173
```

---

## Notas sobre deploy em produção

- Use Nginx Proxy Manager ou um proxy reverso para expor a aplicação com HTTPS.
- O container serve na porta 3001 por padrão, então direcione o proxy para `:3001`.
- Recomendo adicionar monitoramento simples (Portainer ou logs do Docker) para acompanhar o comportamento em produção.

---

## Estrutura resumida do repositório

- `src/` – código-fonte React
- `public/` – assets públicos (imagens, favicon)
- `Dockerfile` – multi-stage para build + nginx
- `docker-compose.yml` – orquestração local
- `nginx.conf` – configuração do servidor (SPA fallback, gzip)

---

## Coisas que fiz e por quê (breve)

- Removi scripts de deploy duplicados e arquivos não necessários para manter o repositório limpo.
- Mantive o foco em uma experiência de deploy reproducível (Docker + Compose).
- Documentei o essencial para que qualquer dev consiga rodar o projeto localmente em minutos.

---

## Sobre mim / Contato

Renylson Marques — Desenvolvedor Full Stack
- GitHub: https://github.com/renylson
- LinkedIn: https://www.linkedin.com/in/renylsonmarques/
- E-mail: renylsonm@gmail.com

Se quiser discutir o projeto, melhorias ou emprego — manda mensagem :)