FROM node:15

# Criando diretorio da aplicacao
WORKDIR /usr/src/app

# Copiando arquivos
COPY . .

# Instalando dependencias
RUN npm install

# Baixando o dockerize
RUN wget https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-linux-amd64-v0.6.1.tar.gz \
  && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-v0.6.1.tar.gz \
  && rm dockerize-linux-amd64-v0.6.1.tar.gz
