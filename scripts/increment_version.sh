#!/bin/bash
set -e

git fetch --tags

LAST_TAG=$(git tag --sort=-v:refname | grep -E '^v[0-9]+\.[0-9]+\.[0-9]+$' | head -n 1)

if [ -z "$LAST_TAG" ]; then
  NEW_TAG="v1.0.0"
else
  VERSION=${LAST_TAG#v}
  IFS='.' read -r MAJOR MINOR PATCH <<< "$VERSION"
  PATCH=$((PATCH+1))
  if [ $PATCH -gt 10 ]; then
    PATCH=0
    MINOR=$((MINOR+1))
  fi
  if [ $MINOR -gt 10 ]; then
    MINOR=0
    MAJOR=$((MAJOR+1))
    PATCH=0
  fi
  NEW_TAG="v${MAJOR}.${MINOR}.${PATCH}"
fi

echo $NEW_TAG
git tag $NEW_TAG
git push origin $NEW_TAG
