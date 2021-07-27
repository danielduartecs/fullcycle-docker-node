FROM node:15

# Criando diretorio da aplicacao
WORKDIR /usr/src/app

# Copiando pacotes de dependencias
COPY package.json ./

# Instalando dependencias
RUN npm install

# Copiando arquivos gerados
COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]
