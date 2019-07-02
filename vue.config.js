
module.exports = {
  // 基本路径
  // baseUrl: './',//vue-cli3.3以下版本使用
  publicPath: './', // vue-cli3.3+新版本使用
  // 输出文件目录
  outputDir: 'vue-admin',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: 'assets',
  // 以多页模式构建应用程序。
  pages: undefined,
  // 是否使用包含运行时编译器的 Vue 构建版本
  runtimeCompiler: false,
  // 生产环境是否生成 sourceMap 文件，一般情况不建议打开
  productionSourceMap: false
  // webpack-dev-server 相关配置 https://webpack.js.org/configuration/dev-server/
//   devServer: {
//     // host: 'localhost',
//     host: '0.0.0.0',
//     port: 8080, // 端口号
//     https: false, // https:{type:Boolean}
//     open: true, // 配置自动启动浏览器  http://localhost:8080
//     hotOnly: true, // 热更新
//     proxy: { //
//       '*': {
//         target: 'http://rap2api.taobao.org/app/mock/162114',
//         changeOrigin: true,
//         // ws: true,//websocket支持
//         secure: false
//       }
//     }
//   }
}
