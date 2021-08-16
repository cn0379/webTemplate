/*
 * @Author: your name
 * @Date: 2021-07-29 09:55:02
 * @LastEditTime: 2021-08-04 14:06:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \rc\src\permission.js
 */
// /*
//  * @name: 文件
//  * @Author: Action
//  * @Date: 2021-01-18 15:41:30
//  * @LastEditors: Please set LastEditors
//  * @LastEditTime: 2021-08-04 13:32:52
//  */
// import router from './router'
// import store from './store'
// // import { Message } from 'element-ui'
// import NProgress from 'nprogress' // progress bar
// import 'nprogress/nprogress.css' // progress bar style
// // import { getToken } from '@/utils/auth' // get token from cookie
// import getPageTitle from '@/utils/get-page-title'

// NProgress.configure({ showSpinner: false }) // NProgress Configuration

// // const whiteList = ['/login', '/register', '/auth-redirect'] // no redirect whitelist

// // 给路由挂载路由导航守卫：
// router.beforeEach(async(to, from, next) => {
//   // start progress bar
//   NProgress.start()

//   // set page title
//   document.title = getPageTitle(to.meta.title)

//   // determine whether the user has logged in
//   if (store.getters.token) {
//     if (to.path === '/login') {
//       next()
//       NProgress.done() // hack: https://github.com/PanJiaChen/vue-element-admin/pull/2939
//     } else {
//       // next()
//       const hasRoles = store.getters.roles && store.getters.roles.length > 0
//       console.log('store.getters.roles: ', store.getters.roles)
//       if (hasRoles) {
//         next()
//       } else {
//         next()
//         // 正式项目 显示出来 用于鉴权
//         // try {
//         //   const { roles } = await store.dispatch('user/getInfo')
//         //   const accessRoutes = await store.dispatch('permission/generateRoutes', roles) // 测试
//         //   router.addRoutes(accessRoutes)
//         //   console.log('accessRoutes: ', accessRoutes)
//         //   next({ ...to, replace: true })
//         // } catch (error) {
//         //   await store.dispatch('user/resetToken')
//         //   Message.error(error || 'Has Error')
//         //   next(`/login?redirect=${to.path}`)
//         //   NProgress.done()
//         // }
//       }
//     }
//   } else {
//     // 正式环境删除
//     next()
//     /* has no token*/

//     // if (whiteList.indexOf(to.path) !== -1) {
//     //   // in the free login whitelist, go directly
//     //   next()
//     // } else {
//     //   // other pages that do not have permission to access are redirected to the login page.
//     //   next(`/login?redirect=${to.path}`)
//     //   NProgress.done()
//     // }
//   }
// })

// router.afterEach(() => {
//   // finish progress bar
//   NProgress.done()
// })
