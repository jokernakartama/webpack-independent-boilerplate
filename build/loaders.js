var path = require('path')
var loaderOptions = require('./config/loaders.config')
var MiniCssExtractPlugin = require('mini-css-extract-plugin')
var sourceMap = true

module.exports = function (list, isProduction = false) {
  var loaders = isProduction ? [] : ['style-loader'] 
  for (var i = 0; i < list.length; i++) {
    loaders.push({
      loader: list[i] + '-loader',
      options: Object.assign({}, loaderOptions[list[i]], { sourceMap: sourceMap })
    })
  }
  if (isProduction) {
    return [MiniCssExtractPlugin.loader].concat(loaders)
  } else {
    return loaders
  }
}
