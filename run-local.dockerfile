FROM node:16.4.2-alpine3.14

WORKDIR /app

COPY package*.json ./

RUN CYPRESS_INSTALL_BINARY=0 npm install

COPY . .

EXPOSE 8010

CMD npm start
