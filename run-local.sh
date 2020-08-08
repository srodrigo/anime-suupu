#!/bin/bash

set -o errexit
set -o pipefail
set -o nounset

docker build -t anime-suupu/run-local -f run-local.dockerfile .

docker run --rm \
  -v ${PWD}:/app \
  -p 8010:8010 \
  anime-suupu/run-local
