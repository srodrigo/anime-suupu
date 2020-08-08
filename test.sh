#!/bin/bash

set -o errexit
set -o pipefail
set -o nounset

docker build -t anime-suupu/test-ci -f test.dockerfile .

docker run --rm anime-suupu/test-ci
