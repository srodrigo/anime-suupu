FROM node:14.7-alpine3.12

RUN apk add git && \
  npm install -g heroku && \
  npm install -g npm@7

WORKDIR /usr/src/app

COPY package*.json ./

RUN CYPRESS_INSTALL_BINARY=0 npm install

COPY . .

RUN npm run build

WORKDIR /usr/src/release

CMD git config --global user.email "$GIT_USER_EMAIL" && \
  git config --global user.name "$GIT_USER_NAME" && \
  echo "machine api.heroku.com" >> ~/.netrc && \
  echo "  login $GIT_USER_EMAIL" >> ~/.netrc && \
  echo "  password $HEROKU_TOKEN" >> ~/.netrc && \
  echo "machine git.heroku.com" >> ~/.netrc && \
  echo "  login $GIT_USER_EMAIL" >> ~/.netrc && \
  echo "  password $HEROKU_TOKEN" >> ~/.netrc && \
  git clone https://git.heroku.com/$APP_NAME.git && \
  cd anime-suupu && \
  mkdir -p dist && \
  cp /usr/src/app/dist/* ./dist && \
  cp /usr/src/app/static.json . && \
  git add static.json dist && \
  git diff-index --quiet HEAD || git commit -m "Releasing $VERSION" && \
  heroku buildpacks:clear && \
  heroku buildpacks:set https://github.com/heroku/heroku-buildpack-static.git && \
  heroku git:remote -a $APP_NAME && \
  echo "Pushing $VERSION to Heroku" && \
  git push heroku master
