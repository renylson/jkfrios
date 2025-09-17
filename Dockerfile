# Use a imagem oficial do Node.js como base
FROM node:18-alpine as build

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm ci --only=production

# Copia todo o código fonte
COPY . .

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

# Expõe a porta 80
EXPOSE 80

# Comando para iniciar o nginx
CMD ["nginx", "-g", "daemon off;"]