FROM node:14.7-alpine3.12

RUN apk add git && \
  npm install -g heroku

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

WORKDIR /usr/src/release

# TODO: Add build version to "Releasing" message
# Use jq -r .version package.json
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
  git diff-index --quiet HEAD || git commit -m "Releasing" && \
  heroku buildpacks:clear && \
  heroku buildpacks:set https://github.com/heroku/heroku-buildpack-static.git && \
  heroku git:remote -a $APP_NAME && \
  echo "Pushing to Heroku" && \
  git push heroku master
