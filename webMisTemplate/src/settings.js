/*
 * @name: 文件
 * @Author: Gin
 * @Date: 2020-12-24 13:20:04
 * @LastEditors: Gin
 * @LastEditTime: 2021-04-15 15:02:16
 */
module.exports = {
  title: 'Vue Element Admin',

  // swagger 接口地址
  swaggerUrl: 'http://10.10.2.224:9066/damispro/v2/api-docs?group=Api%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3',

  /**
   * @type {boolean} true | false
   * @description Whether show the settings right-panel
   */
  showSettings: true,

  /**
   * @type {boolean} true | false
   * @description Whether need tagsView
   */
  tagsView: true,

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   */
  fixedHeader: false,

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  sidebarLogo: false,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: 'production'
}
