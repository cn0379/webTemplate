/*
 * @name: 文件
 * @Author: Gin
 * @Date: 2021-07-02 11:28:36
 * @LastEditors: Gin
 * @LastEditTime: 2021-07-02 11:31:31
 */
import onlyNumber from './only-number'

const install = function(Vue) {
  Vue.directive('onlyNumber', onlyNumber)
}

if (window.Vue) {
  window['onlyNumber'] = onlyNumber
  Vue.use(install); // eslint-disable-line
}

onlyNumber.install = install
export default onlyNumber
