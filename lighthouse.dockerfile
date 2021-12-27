FROM node:14.17-alpine3.12

RUN apk update && apk add --no-cache nmap && \
    echo @edge http://nl.alpinelinux.org/alpine/edge/community >> /etc/apk/repositories && \
    echo @edge http://nl.alpinelinux.org/alpine/edge/main >> /etc/apk/repositories && \
    apk update && \
    apk add --no-cache \
      chromium \
      harfbuzz \
      freetype \
      ttf-freefont \
      nss && \
    npm install -g npm@7

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true

WORKDIR /app

COPY package*.json ./

RUN CYPRESS_INSTALL_BINARY=0 npm install

COPY . .

RUN npm run build

CMD npx lhci autorun --chrome-flags="--headless --no-sandbox"
