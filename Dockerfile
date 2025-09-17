# Use a imagem oficial do Node.js como base
FROM node:18-alpine as build

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala todas as dependências (produção e desenvolvimento)
RUN npm install

# Copia todo o código fonte
COPY . .


# Instala o Vite globalmente para garantir o build
RUN npm install -g vite

# Constrói a aplicação para produção
RUN npm run build

# Use nginx para servir a aplicação
FROM nginx:alpine

# Remove a configuração padrão do nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia a configuração customizada do nginx
COPY nginx.conf /etc/nginx/conf.d/

# Copia os arquivos buildados para o nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expõe a porta 3001
EXPOSE 3001

# Comando para iniciar o nginx
CMD ["nginx", "-g", "daemon off;"]