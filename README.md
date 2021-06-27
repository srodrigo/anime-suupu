# Anime Suupu

![CI](https://github.com/srodrigo/anime-suupu/workflows/CI/badge.svg)
[![codecov](https://codecov.io/gh/srodrigo/anime-suupu/branch/master/graph/badge.svg?token=0XT8VT2C0C)](https://codecov.io/gh/srodrigo/anime-suupu)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

* [Description](#description)
* [Motivation](#motivation)
* [Setup](#setup)
* [Tech stack](#tech-stack)
* [Contributing](#contributing)
* [License](#license)

## Description

This project uses the [Kitsu API](https://kitsu.docs.apiary.io/) to build a mobile-first anime list website. The aim is to offer some basic list-detail features first, to explore the latest animes out there.

From a technical perspective, this is a front-end project that features modern [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), and [Continuous Deployment](https://en.wikipedia.org/wiki/Continuous_deployment). The focus will be on building a responsive website with performance and accesibility in mind, with the highest quality code possible with my current skills.

The production URL can be found [here](https://anime-suupu.herokuapp.com/).

## Motivation

This project started as a portfolio project to showcase to potential clients and/or employers. One of the problems in the software industry is that, quite often, projects are not open to the public, or need a subscription to be used; let alone making source code public, unless you are working on an open source project. Therefore, the need to have a project that people can look at from different perspectives, including the user facing website, coding skills, automation, and how you aproach software development in general.

The focus of this project won't be feature richness, but quality work. Having one feature that does what it is supposed to do and is built with high quality (both from users' and developers' perspective) is better, in my opinion, than having a few features that don't showcase your skills best. The project will be often used as a playground to try out the latest technology, so there could be some experimentation going on.

This project is not originally aimed for public use, as there is already a Kitsu front-end available that this project doesn't intend to compete with, but it would be great if it eventually gets some users.

## Setup

For a complete list of npm scripts available, please refer to [package.json](package.json).

### Running locally

Run `npm install`.

#### Running the site

Run `npm start`. The site will start on port 8010 on development mode, with hot reloading enabled.

Run `npm run start:ci` to run the site with `ci` configuration on port 8011. This is used for end-to-end testing.

#### Running the tests

Run `npm test` to run the unit tests. Watch mode is available with `npm run test:watch`.

Run `npm run test:integration` to run the user journey tests. There are a few more [options available](package.json) for `headless` and `ci` modes.

### Running in Docker

#### Running the site

Execute `./run-local.sh` to run the site inside Docker. It is available on port 8010 as when running it from the host.

#### Running the tests

Execute `./test.sh` to run unit and integration tests, as well as the linting checks. This script is run on CI and before preparing a release.

## Tech stack

### Front-end

This project is built with React and TypeScript, which are a modern and common technology stack choice for a front-end project. The amount of libraries used will vary, depending on whether some of them are worth trying in a production-like environment. But, in general, the preference will be to use the least amount of libraries possible. Every dependency is both a blessing (usually, quality work ready to use) and a potential problem (it can become unmaintained). For small utilities, the preference will usually be to build them from scratch.

### Automated testing

[Jest](https://jestjs.io/) and [Cypress](https://www.cypress.io/) are the automated testing tools of choice. Jest is used for unit and integration testing, together with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/). Cypress is used for end-to-end, user journey testing.

Jest is, currently, one of the best options available for JavaScript testing.

[Enzyme](https://enzymejs.github.io/enzyme/) was considered first, but it has faded out of popularity, and it's not as actively maintained as it used to be, causing issues when migrating to a new major version of React. React Testing Library has been used as a replacement, which is a good opportunity to learn a new approach, even if it's not an actual unit testing library.

Cypress is a wonderful tool that provides some great features for browser testing. While I would like to use something more flexible like [WebdriverIO](https://webdriver.io/), Cypress is currently too good to ignore. This might change in the future if WebdriverIO turns out to be a better fit.

### CI/CD

The Continuous Deployment flow has been built with GitHub Actions. While it's not as powerful as other CI/CD providers, it has become more popular and suitable in many scenarios.

Pull-Requests have certain checks in place to help keeping the codebase quality up.

[Dependabot](https://dependabot.com/) is set up to keep dependencies up to date.

Pushing to master runs the tests and creates a release version that gets deployed to the live environment.

## Contributing

Making a commit runs the `pre-commit` hooks to ensure that tests are passing and there are no linting errors. Commits follow [Conventional Commits](https://www.conventionalcommits.org/)

Creating a PR is the prefered way since there are useful PR checks that runs before merging.

## License

[MIT](LICENSE)
