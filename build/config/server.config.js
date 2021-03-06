var path = require('path')

module.exports = {
  port: 8080,
  assetsSubDirectory: 'static',
  assetsPublicPath: '/',
  // Define HTTP proxies to your custom API backend
  // https://github.com/chimurai/http-proxy-middleware
  proxy: {
    '/': {
      // https://github.com/chimurai/http-proxy-middleware#http-proxy-options
      target: 'http://0.0.0.0:8000/',
      changeOrigin: true,
      logLevel: 'warn',
      // probably you use a backend server for ajax requests
      filter: function (pathname, req) {
        return req.headers['x-requested-with'] === 'XMLHttpRequest'
      }
    }
  }
}
