module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import '@/assets/scss/_mixin.scss';`
      }
    }
  }
}