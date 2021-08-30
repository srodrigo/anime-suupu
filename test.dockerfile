FROM cypress/base:14.17.0

RUN npm install -g npm@7

WORKDIR /test

COPY package*.json ./

RUN npm install

COPY . .

CMD npm run lint && npm run test:ci
