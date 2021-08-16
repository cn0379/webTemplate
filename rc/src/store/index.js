/*
 * @name: 文件
 * @Author: Gin
 * @Date: 2021-03-05 15:32:33
 * @LastEditors: Gin
 * @LastEditTime: 2021-07-01 11:08:25
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', true, /\.js$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((module, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  module[moduleName] = value.default
  return module
}, {})

const store = new Vuex.Store({
  modules,
  getters
})

export default store
