/*
 * @name: 文件
 * @Author: Action
 * @Date: 2021-01-18 15:41:30
 * @LastEditors: Gin
 * @LastEditTime: 2021-07-06 14:00:47
 */
import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/login',
    alias: '/',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/index',
    component: Layout,
    meta: { title: '工作台', icon: 'user', affix: true },
    redirect: '/index/house',
    children: [
      {
        path: 'house',
        component: () => import('@/views/house/index'),
        name: 'House',
        meta: { title: '例子', icon: 'el-icon-s-home' }
      },
      {
        path: 'parserTest',
        component: () => import('@/views/parserTest/index'),
        name: 'parserTest',
        meta: { title: '例子', icon: 'el-icon-s-home' }
      }
    ]
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  // 正式开发  异步路由动态加入
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
