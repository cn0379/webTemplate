/*
 * @name: 文件
 * @Author: Gin
 * @Date: 2020-12-24 13:20:04
 * @LastEditors: Gin
 * @LastEditTime: 2021-07-06 13:56:01
 */
import moment from 'moment'// 导入文件

import Vue from 'vue'
import Cookies from 'js-cookie'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/element-variables.scss'
import '@/styles/index.scss' // global css
import App from './App'
import store from './store'
import router from './router'
import './icons' // icon
import './permission' // permission control
import permission from '@/directive/permission/index.js' // 权限判断指令
import hidePlaceholder from '@/directive/hide-placeholder/index.js' // 权限判断指令
import onlyNumber from '@/directive/only-number/index.js' // 限制输入数字指令
import * as filters from './filters' // global filters
import './styles/font.scss' // 特殊字体样式
import clearEmoji from '@/directive/clearEmoji'
// 在main.js中全局引入
import VueQuillEditor from 'vue-quill-editor'// 调用编辑器
// require styles 引入样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import ElTableTemp from 'el-table-temp'
import Parser from 'form-gen-parser'
// 引入echarts
import * as echarts from 'echarts'
import 'swiper/swiper-bundle.css'

Vue.component('Parser', Parser)

Vue.prototype.$echarts = echarts
Vue.use(VueQuillEditor)
Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

Vue.use(permission)
Vue.use(hidePlaceholder)
Vue.use(clearEmoji)
Vue.use(onlyNumber)

Vue.use(ElTableTemp, {
  pageOtherMoudleHeight: 190
})

Vue.prototype.$moment = moment// 赋值使用
// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false
// 转化时间格式
Vue.use(require('vue-moment'))
Vue.prototype.moment = moment

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
