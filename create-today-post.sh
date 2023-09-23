#!/bin/bash

if [ $# -eq 0 ]; then
  echo "Please enter the slug of the post"
  exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
POSTS_DIR="${SCRIPT_DIR}/src/app/posts/(posts)"
DATE=$(date +'%Y/%m/%d')

POST_DIR="${POSTS_DIR}/${DATE}/$1"
POST_MD_PATH="${POST_DIR}/page.mdx"

mkdir -p "${POST_DIR}"
touch "${POST_MD_PATH}"
code "${POST_MD_PATH}"

echo "🌈 Generated ${POST_MD_PATH}"
