# Webpack boilerplate with no dependencies

Except `babel-polyfill`, sorry.

## Usage

### Write some code

Clone the repository and then delete `.git` directory. Change `package.json` data, if you need.

Install dev dependencies:

```
npm install
```

Use in `src/index.js` as an entrypoint of your app.
Use `*.spec.js` filenames to write tests. Use `static/` directory for static files.

### Scripts

To run development server:

```
npm run dev
```

To build the bundle into `/dist` directory:

```
npm run build
```

Running tests:

```
npm run test
```

or (this command starts test server with hot reload)

```
npm run watch
```

## Features

* ES6 modules support
* Tests: Karma test runner, Mocha, Chai and Sinon
* CSS: PostCSS (autoprefixer, cssnano), Stylus, Sass, Less
* [Globbing preloader for Webpack](https://github.com/Aintaer/import-glob-loader#readme)
* ESLint standart
* Babel plugins:
    - plugin-proposal-class-properties
    - plugin-proposal-export-namespace-from
    - plugin-proposal-optional-chaining
    - plugin-syntax-dynamic-import
    - plugin-transform-regenerator
* Has only one dependency to add polyfills
* Some CLI eye candies
* Hot reload, sure

## Configuration

**Change only if you know what you are doing!**

- **.babelrc** - Babel
- **.eslintignore**, **eslintrc.js** - ESLint rules
- **build/config/*.config.js** - Configs for Karma, CSS loaders, building the bundle and running the dev server
- **build/config/webpack.*.js** - Webpack configs
