module.exports = {
  css: {
    importLoaders: 1
  },
  postcss: {
    plugins: [
      require('postcss-import')(),
      require('autoprefixer')(),
      require('cssnano')()
    ]
  }
}
