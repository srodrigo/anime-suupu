#!/bin/bash

set -o errexit
set -o pipefail
set -o nounset

export DOCKER_BUILDKIT=1

docker build -t anime-suupu/lighthouse -f lighthouse.dockerfile .

docker run --rm \
  -v ${PWD}/.lighthouseci:/app/.lighthouseci \
  anime-suupu/lighthouse
