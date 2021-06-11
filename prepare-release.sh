#!/bin/bash

set -o errexit
set -o pipefail
set -o nounset

docker build -t anime-suupu/prepare-release-prod -f prepare-release.dockerfile .

docker run --rm \
  -e GIT_USER_EMAIL=$GIT_USER_EMAIL \
  -e GIT_USER_NAME=$GIT_USER_NAME \
  anime-suupu/prepare-release-prod
