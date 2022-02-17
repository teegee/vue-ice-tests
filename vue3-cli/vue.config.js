module.exports = {
  lintOnSave: false,
  configureWebpack: {
    externals: {
      "ice": "window"
    }
  }
}
