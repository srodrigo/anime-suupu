#!/bin/bash

set -o errexit
set -o pipefail
set -o nounset

docker build -t anime-suupu/release-prod -f release.dockerfile .

docker run --rm \
  -e HEROKU_TOKEN=$HEROKU_TOKEN \
  -e APP_NAME=$APP_NAME \
  -e GIT_USER_EMAIL=$GIT_USER_EMAIL \
  -e GIT_USER_NAME=$GIT_USER_NAME \
  anime-suupu/release-prod
