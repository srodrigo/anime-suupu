FROM node:14.7-alpine3.12

RUN apk add git

WORKDIR /usr/src/app

COPY . ./

CMD npm install && \
  git config --global user.email "$GIT_USER_EMAIL" && \
  git config --global user.name "$GIT_USER_NAME" && \
  npm run release && \
  git add package*.json CHANGELOG.md && \
  git push origin master && \
  git push origin --tags