#!/usr/bin/env bash

SCRIPT_DIR="$(dirname "$(readlink -f "$BASH_SOURCE")")"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

set -e

cd "$PROJECT_DIR"

VERSION_TYPE="$1"

if [[ "$VERSION_TYPE" != "patch" && "$VERSION_TYPE" != "minor" && "$VERSION_TYPE" != "major" ]]; then
  echo "Error version type must be 'patch', 'minor' or 'major'."
  exit 1
fi

VERSION=$(npm --no-git-tag-version --allow-same-version version $VERSION_TYPE)

# # we remove the v before version X.Y.Z
VERSION=${VERSION:1}

pnpm run build:sprite
pnpm tsx src/cli.ts --spriteBase https://unpkg.com/ign-tms-styles@$VERSION/sprites
pnpm tsx src/generate-public-package.ts

git add .
git commit -m "change version $VERSION"
git tag -a "$VERSION" -m "$VERSION"
git push origin

cd dist && pnpm publish
