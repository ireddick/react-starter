# React Starter

Starter image for when I want to mess around with React

## Features

- Parcel for transpiling & bundling
- Dev server and hot module reloading
- ES modules
- Typescript
- Jest for tests
- Simpler & smaller footprint than CRA

## Usage

start app with `npm start`

run tests with `npm test`

releasable build with `npm build`

## Irritations

Parcel aims to be zero config for common use cases, and thus doesn't use a Babel config. However Jest *does* use a Babel config, so we have to add that and bring in a few Babel dependencies.

Because Parcel will read the Babel config and be unhappy, we also have to add a Parcel config that tells it not to do that.

See https://parceljs.org/languages/javascript/#usage-with-other-tools

Overall this is an irritating mis-match, where we have two different opinions about the transpilation config.
