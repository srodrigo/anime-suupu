FROM node:14.17-alpine3.12

RUN npm install -g npm@7

WORKDIR /app

COPY package*.json ./

RUN CYPRESS_INSTALL_BINARY=0 npm install

COPY . .

EXPOSE 8010

CMD npm start
