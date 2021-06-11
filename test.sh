#!/bin/bash

set -o errexit
set -o pipefail
set -o nounset

export DOCKER_BUILDKIT=1

docker build -t anime-suupu/test-ci -f test.dockerfile .

docker run --rm anime-suupu/test-ci
