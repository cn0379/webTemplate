/*
 * @name: 文件
 * @Author: Action
 * @Date: 2021-01-18 15:41:30
 * @LastEditors: Gin
 * @LastEditTime: 2021-06-30 16:43:38
 */
import drag from './drag'

const install = function(Vue) {
  Vue.directive('el-drag-dialog', drag)
}

if (window.Vue) {
  window['el-drag-dialog'] = drag
  Vue.use(install); // eslint-disable-line
}

drag.install = install
export default drag
