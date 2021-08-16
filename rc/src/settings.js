/*
 * @name: 文件
 * @Author: Gin
 * @Date: 2021-05-08 15:10:27
 * @LastEditors: Gin
 * @LastEditTime: 2021-07-27 14:51:39
 */
module.exports = {
  title: '太仓市智慧小区后台管理系统',

  // swagger 接口地址
  swaggerUrl: 'http://10.10.3.80:8086/safetysupervision/v2/api-docs?group=Api%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3',

  /**
   * @type {boolean} true | false
   * @description Whether show the settings right-panel
   */
  showSettings: true,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  /**
   * @description 是否显示 tagsView
   */
  tagsView: true,
  /**
      * @description 固定头部
      */
  fixedHeader: true,
  /**
      * @description 记住密码状态下的token在Cookie中存储的天数，默认1天
      */
  tokenCookieExpires: 1,
  /**
      * @description 记住密码状态下的密码在Cookie中存储的天数，默认1天s
      */
  passCookieExpires: 1,
  /**
      * @description 是否只保持一个子菜单的展开
      */
  uniqueOpened: true,
  /**
      * @description token key
      */
  TokenKey: 'EL-ADMIN-TOEKN',
  /**
      * @description 请求超时时间，毫秒（默认2分钟）
      */
  timeout: 1200000,
  /**
      * @description 是否显示logo
      */
  sidebarLogo: true,

  /**
   * 是否显示设置的底部信息
   */
  showFooter: true,
  /**
      * 底部文字，支持html语法
      */
  footerTxt: '© 2019 Zheng Jie <a href="http://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache License 2.0</a>',
  /**
      * 备案号
      */
  caseNumber: '浙ICP备18005431号'
}
