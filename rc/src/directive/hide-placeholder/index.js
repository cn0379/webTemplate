/*
 * @name: 文件
 * @Author: Gin
 * @Date: 2021-07-05 14:43:54
 * @LastEditors: Gin
 * @LastEditTime: 2021-07-05 15:36:56
 */
import hidePlaceholder from './hide-placeholder'

const install = function(Vue) {
  Vue.directive('hide-placeholder', hidePlaceholder)
}

if (window.Vue) {
  window['hide-placeholder'] = hidePlaceholder
  Vue.use(install) // eslint-disable-line
}

hidePlaceholder.install = install
export default hidePlaceholder
