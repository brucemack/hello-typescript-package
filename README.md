Overview
========
An example of a React/TypeScript package that creates a few components
and then exports them for use in other projects.

One Time Setup
==============

    git clone https://github.com/brucemack/hello-typescript-package.git
    cd hello-typescript-package
    npm install

Building
========

To perform a one-time build:

    npm run build

Or when in development mode you can request a continuous compilation:

    npm run build-continuous

Using (From Local)
==================

Type this from the consuming application, assuming the GIT repos are checked
out in adjacent directories.

    npm install --save ../hello-typescript-package
