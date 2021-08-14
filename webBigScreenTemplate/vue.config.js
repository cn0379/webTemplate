/*
 * @name: 文件
 * @Author: Gin
 * @Date: 2020-12-10 10:14:06
 * @LastEditors: Gin
 * @LastEditTime: 2020-12-24 13:56:04
 */
/*
 *                                                     __----~~~~~~~~~~~------___
 *                                    .  .   ~~//====......          __--~ ~~
 *                    -.            \_|//     |||\\  ~~~~~~::::... /~
 *                 ___-==_       _-~o~  \/    |||  \\            _/~~-
 *         __---~~~.==~||\=_    -_--~/_-~|-   |\\   \\        _/~
 *     _-~~     .=~    |  \\-_    '-~7  /-   /  ||    \      /
 *   .~       .~       |   \\ -_    /  /-   /   ||      \   /
 *  /  ____  /         |     \\ ~-_/  /|- _/   .||       \ /
 *  |~~    ~~|--~~~~--_ \     ~==-/   | \~--===~~        .\
 *           '         ~-|      /|    |-~\~~       __--~~
 *                       |-~~-_/ |    |   ~\_   _-~            /\
 *                            /  \     \__   \/~                \__
 *                        _--~ _/ | .-~~____--~-/                  ~~==.
 *                       ((->/~   '.|||' -_|    ~~-/ ,              . _||
 *                                  -_     ~\      ~~---l__i__i__i--~~_/
 *                                  _-~-__   ~)  \--______________--~~
 *                                //.-~~~-~_--~- |-------~~~~~~~~
 *                                       //.-~~~--\
 *                       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 *                               神兽保佑            永无BUG
 */
const path = require('path')

const resolve = dir => path.join(__dirname, dir)

// const BASE_URL = process.env.NODE_ENV === 'procution' ? '/iview-admin/' : '/'
module.exports = {
  publicPath: './',
  lintOnSave: false,
  pages: {
    // pages里配置的路径和文件名在你的文档目录必须存在，否则启动服务会报错
    index: {
      // 除了 entry 之外都是可选的
      entry: 'src/main.js', // page的主入口
      template: 'public/index.html', // 模板来源
      filename: 'index.html', // 在 dist/index.html 的输出
      title: '常熟司法云'
    }
  },
  outputDir: 'dist',
  // css 相关选项
  css: {
    /* 为预处理器 loader 传递自定义选项*/
    loaderOptions: {
      // sass 必须没有分号  scss必须有分号
      scss: {
        prependData: '@import "@/style/main.scss";'
      }
    },
    sourceMap: true
  },
  // baseUrl: BASE_URL, // 项目的基本路径
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  // 打包时不生成map文件
  productionSourceMap: false,
  devServer: {
    proxy: setProxy()
  },

  configureWebpack: config => {
    if (process.env.NODE_ENV !== 'development') {
      // 忽略console
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
      config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true
    }
  }
}

function setProxy() {
  let val = ''
  // 开发环境
  val = {
    // 配置跨域
    'dev-api': {
      target: 'http://10.10.2.37:7980',
      ws: false,
      // 允许跨域
      changOrigin: true,
      pathRewrite: {
        '^/dev-api': ''
      }
    },
    'rain-api': {
      target: 'http://10.10.3.107:8081',
      ws: false,
      // 允许跨域
      changOrigin: true,
      pathRewrite: {
        '^/rain-api': ''
      }
    },
    'test-api': {
      target: 'http://10.10.2.37:8086',
      ws: false,
      changOrigin: true,
      pathRewrite: {
        '^/test-api': ''
      }
    },
    'sherlock-api': {
      target: 'http://10.10.2.138:8088',
      ws: false,
      changOrigin: true,
      pathRewrite: {
        '^/sherlock-api': ''
      }
    },
    'denney-api': {
      target: 'http://10.10.3.107:8081',
      ws: false,
      changOrigin: true,
      pathRewrite: {
        '^/denney-api': ''
      }
    },
    'online-api': {
      target: 'http://58.211.70.74:10002/',
      ws: false,
      changOrigin: true,
      pathRewrite: {
        '^/online-api': ''
      }
    }
  }
  return val
}
