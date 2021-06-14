FROM cypress/base:14.7.0

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run lint && npm run test:ci
