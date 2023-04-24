# React Starter

Starter image for when I want to mess around with React

## Features

- Parcel for transpiling & bundling
- Dev server with hot module reloading
- ES modules
- Typescript
- Jest for tests
- Simpler & smaller footprint than CRA

## Usage

Start dev server with `npm start`

Run tests with `npm test`

Releasable build with `npm run build` (outputs to /dist)

## Irritations

Parcel doesn't type check TypeScript by default, though has experimental support - the opinion they have is that type checking is a job for an IDE, or a build server. I disagree, so we currently do an explicit type check with TSC up front before running tests with Jest, starting Parcel in dev server mode, or doing a production build. To this end we have a minimal tsconfig. This means that we have two separate opinions on how to handle TypeScript - Parcel and TSC.

Parcel aims to be zero config for common use cases, and thus doesn't use a Babel config. However Jest *does* use a Babel config, so we have to add that and bring in a few Babel dependencies. Because Parcel will read the Babel config and be unhappy, we also have to add a Parcel config that tells it not to do that. This means we have two separate opinions about Babel - Parcel and Jest.

See https://parceljs.org/languages/javascript/#usage-with-other-tools

Overall these are irritating mis-matches, which add complication, duplication, and reduce the value of using a zero config tool in the first place.
