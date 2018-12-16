var webpackConfig = require('./webpack.test')

module.exports = function(config) {
  config.set({
    files: [
      { pattern: 'node_modules/babel-polyfill/browser.js', watched: false },
      'node_modules/phantomjs-polyfill/bind-polyfill.js',
      // path pattern for specifications
      'src/**/*.spec.js'
    ],
    // frameworks to use in test files
    frameworks: ['mocha', 'sinon-chai'],
    basePath: '../../',
    preprocessors: {
      // application files     
      'src/**/*.js': ['webpack', 'sourcemap'],
      'src/**/*.ts': ['webpack', 'sourcemap'],
    },
    logLevel : config.LOG_ERROR,
    reporters: ['spec'],
    webpack: webpackConfig,
    webpackMiddleware: {
      logLevel: 'error',
      stats: 'errors-only'
    },
    browsers: ['PhantomJS']
  })
}
