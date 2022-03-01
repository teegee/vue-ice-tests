module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      fallback: {
        fs: false,
        net: false
      }
    }
  }
}
