/*
 * @name: 文件
 * @Author: Action
 * @Date: 2021-01-18 15:38:29
 * @LastEditors: Gin
 * @LastEditTime: 2021-07-06 16:59:33
 */
const viewGenerator = require('./plop-templates/view/prompt')
const componentGenerator = require('./plop-templates/component/prompt')
const storeGenerator = require('./plop-templates/store/prompt.js')
const parserViewGenerator = require('./plop-templates/parserView/prompt.js')

module.exports = function(plop) {
  plop.setGenerator('view', viewGenerator)
  plop.setGenerator('parserView', parserViewGenerator)
  plop.setGenerator('component', componentGenerator)
  plop.setGenerator('store', storeGenerator)
}
