var webpack = require('webpack')
var path = require('path')
var loaders = require('../loaders')
// paths
var rootDir = path.join(__dirname, '../../')
var nodeModulesPath = path.join(rootDir, 'node_modules')
var buildPath = path.join(rootDir, 'dist')
var sourcePath = path.join(rootDir, 'src')

var rules = [
  {
    test: /\.(js|jsx)$/,
    include: sourcePath,
    exclude: /node_modules/,
    use: [
      'babel-loader',
      'eslint-loader',
    ],
  },
  {
    test: /\.(png|jpg)$/,
    loader: 'file-loader'
  }
]

module.exports = {
  devtool: false,
  context: sourcePath,
  entry: {
    app: ['babel-polyfill', path.join(sourcePath, 'index.js')]
  },
  output: {
    path: buildPath,
    publicPath: '/',
    filename: 'app.js',
  },
  module: {
    rules
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'src': sourcePath
    },
    modules: [
      nodeModulesPath,
      rootDir
    ],
  },
  optimization: {
    noEmitOnErrors: true
  }
}
