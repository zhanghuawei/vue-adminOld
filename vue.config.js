module.exports = {
  publicPath: './',
  productionSourceMap: false
//   devServer: {
//     proxy: {
//       '/api': {
//         target: 'http://rap2api.taobao.org/app/mock/162114',
//         changeOrigin: true,
//         ws: true
//         // pathRewrite: {
//         //   '^/api': ''
//         // }
//       }
//     }
//   }
//   optimization: {
//     concatenateModules: true
//   }
  // devtool: 'inline-source-map' // 开发环境用，生产去掉
}

