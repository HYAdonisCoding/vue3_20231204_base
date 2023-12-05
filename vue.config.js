const {
  defineConfig
} = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // 关闭语法检查

  chainWebpack: config => {
    config
    .plugin('html')
    .tap((args) => {
      args[0].title = 'Vue3_Base';// 更改根目录页签标题
      return args
    })
  },
})