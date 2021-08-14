/*
 * @name: 文件
 * @Author: Gin
 * @Date: 2020-12-10 10:11:17
 * @LastEditors: Gin
 * @LastEditTime: 2020-12-17 20:04:33
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
