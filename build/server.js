var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var devMiddleware = require('webpack-dev-middleware')
var hotMiddleware = require('webpack-hot-middleware')
var ora = require('ora')
var rootDir = path.join(__dirname, '../')
var config = require('./config/server.config')
var webpackConfig = require('./config/webpack.dev')

var spinner = ora({
  text: 'Starting dev server...'
})

var port = process.env.PORT || config.port
// https://github.com/chimurai/http-proxy-middleware
var proxy = config.proxy
var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  logLevel: 'silent'
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {},
  heartbeat: 2000
})

// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    if (cb) cb()
  })
})

// proxy api requests
Object.keys(proxy).forEach(function (context) {
  var options = proxy[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.assetsPublicPath, config.assetsSubDirectory)
app.use(staticPath, express.static(path.join(rootDir, 'static')))

var _resolve
var readyPromise = new Promise((resolve) => {
  _resolve = resolve
})

spinner.start()

devMiddleware.waitUntilValid(() => {
  spinner.stop()
  _resolve()
})

var server = app.listen(port, (error) => {
  if (error) {
    console.log('\n', error)
  }
})

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
