#!/bin/bash

set -e

DRONSRC=/tmp/dronin-src
PAGES=/tmp/dronin-doxy-pages

rm -rf "${DRONSRC}"
mkdir "${DRONSRC}"
git clone --single-branch --depth=1 -b next "https://github.com/d-ronin/dRonin.git" "${DRONSRC}"

rm -rf "${PAGES}"
mkdir "${PAGES}"
git clone --single-branch --depth=1 -b gh-pages "https://github.com/d-ronin/doxygen.git" "${PAGES}"

cd "${DRONSRC}"
export PROJECT_REV=$(git rev-parse --short HEAD)

function build_dox {
    DOX=$1
    echo "Building ${DOX} docs at ${PROJECT_REV}..."
    
    mkdir -p "${DRONSRC}/build/docs/${DOX}"
    doxygen "${DRONSRC}/Doxygen/${DOX}_doxygen.cfg"

    # clear out old docs
    rm -rf "${PAGES}/${DOX}"
    mv "${DRONSRC}/build/docs/${DOX}" "${PAGES}/${DOX}"
}

build_dox ground
build_dox flight

cd "${PAGES}"

if [ -n "${GH_REPO_TOKEN}" ] && \
   [ -d "./ground/html" ] && [ -d "./flight/html" ] && \
   [ -f "./ground/html/index.html" ] && [ -f "./flight/html/index.html" ]; then

    echo 'Uploading documentation to the gh-pages branch...'

    echo "" > ".nojekyll"
    cp -f "${TRAVIS_BUILD_DIR}/index.html" "${PAGES}"

    git config --global push.default simple
    git config user.name "Travis CI"
    git config user.email "travis@travis-ci.org"

    git add --all
    git commit --quiet -m "Auto-generated docs from travis-ci build: ${TRAVIS_BUILD_NUMBER}" -m "Commit: ${PROJECT_REV}"
    
    git remote add origin-pages https://${GH_REPO_TOKEN}@${GH_REPO_REF} > /dev/null 2>&1
    git push --set-upstream origin-pages gh-pages > /dev/null 2>&1

else
    echo '' >&2
    echo 'Warning: No documentation (html) files have been found, or github credentials missing!' >&2
    echo 'Warning: Not going to push the documentation to GitHub!' >&2
    exit 1
fi
