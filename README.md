# JK & Frios — Website

Resumo: este repositório contém o site institucional que desenvolvi para a Fábrica JK & Frios. O projeto apresenta a identidade visual da empresa, páginas institucionais (Home, Produtos, Clientes, Contato, Trabalhe Conosco), formulário de envio de currículo e elementos interativos para melhorar a experiência do usuário.

---

## Visão técnica

Este é o site institucional que desenvolvi para a Fábrica JK & Frios. Ele apresenta as informações da empresa, os produtos, onde encontrar a fábrica e um formulário para que candidatos possam enviar seus currículos. O layout é limpo, responsivo (funciona bem em celulares e computadores) e pensado para transmitir confiança e profissionalismo.

O site inclui:
- Página inicial com destaque para a marca e produtos;
- Página de produtos e processo de produção;
- Seção com clientes e depoimentos;
- Contato com mapa, telefone e formulário;
- Área para envio de currículo com validação básica.

Tecnologias principais
- React (JSX) — arquitetura de componentes e SPA via React Router.
- Vite — ferramenta de build e dev server para desenvolvimento rápido.
- Imagens otimizadas e carregamento assíncrono para slides (preload simples).
- Deploy: preparado para containerização (Dockerfile, docker-compose.yml) e configuração de servidor (nginx.conf).

Estrutura de pastas relevante
- `src/` — código-fonte do front-end.
  - `pages/` — páginas principais (HomePage, ProdutosPage, ClientesPage, ContatoPage, TrabalheConoscoPage).
  - `components/` — componentes reutilizáveis (Header, Footer, Layout, etc.).
  - `assets/` — imagens e ícones usados no site.
- `Dockerfile`, `docker-compose.yml`, `nginx.conf` — sinais de preparo para containerização e deploy.

Funcionalidades implementadas
- Navegação SPA com React Router e comportamento de scroll para o topo ao trocar de rota.
- Formulário de envio de currículo com validação básica de front-end e feedback visual para o usuário.
- Seções estáticas informativas: processos de produção, linha de produtos, depoimentos e clientes.
- Estilização moderna com variáveis CSS, sombras e responsividade.

Instruções de execução (desenvolvimento)
1. Instalar dependências:

   npm install

2. Rodar servidor de desenvolvimento:

   npm run dev

3. Build para produção:

   npm run build

4. Opcional: rodar com Docker (requer Docker instalado):

   docker compose up -d --build

Observações
- O formulário de currículos atualmente faz uma simulação de envio no front-end; pode ser integrado com um backend ou serviço de e-mail (EmailJS, servidor próprio) conforme necessidade.


## Contato 
Renylson Marques
- GitHub: https://github.com/renylson
- LinkedIn: https://www.linkedin.com/in/renylsonmarques/
- E-mail: renylsonm@gmail.com


---

