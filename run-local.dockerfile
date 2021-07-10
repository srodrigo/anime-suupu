FROM node:14.7-alpine3.12

WORKDIR /app

COPY package*.json ./

RUN CYPRESS_INSTALL_BINARY=0 npm install

COPY . .

EXPOSE 8010

CMD npm start
