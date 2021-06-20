FROM cypress/base:14.7.0

WORKDIR /test

COPY package*.json ./

RUN npm install

COPY . .

CMD npm run lint && npm run test:ci
