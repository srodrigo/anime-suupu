FROM cypress/base

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run lint && npm run test:ci
