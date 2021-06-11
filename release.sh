#!/bin/bash

set -o errexit
set -o pipefail
set -o nounset

export DOCKER_BUILDKIT=1

docker build -t anime-suupu/release-prod -f release.dockerfile .

VERSION=$(sed -nE 's/^\s*"version": "(.*?)",$/\1/p' package.json)

docker run --rm \
  -e HEROKU_TOKEN=$HEROKU_TOKEN \
  -e APP_NAME=$APP_NAME \
  -e GIT_USER_EMAIL=$GIT_USER_EMAIL \
  -e GIT_USER_NAME=$GIT_USER_NAME \
  -e VERSION=$VERSION \
  anime-suupu/release-prod
