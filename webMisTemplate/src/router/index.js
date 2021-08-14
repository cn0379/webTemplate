/*
 * @name: 文件
 * @Author: Gin
 * @Date: 2021-02-27 15:46:29
 * @LastEditors: Gin
 * @LastEditTime: 2021-04-15 10:21:32
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
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
  {
    path: '/content',
    component: Layout,
    alwaysShow: true, // will always show the root menu
    meta: {
      title: 'lowCode模块',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'content',
        component: () => import('@/views/content/index.vue'),
        name: 'Content',
        meta: {
          title: '分页表格模块',
          icon: 'lock'
        }
      },
      {
        path: 'customizeForm',
        component: () => import('@/views/customizeForm/index.vue'),
        name: 'CustomizeForm',
        meta: {
          title: '可视化配置表单模块',
          icon: 'lock'
        }
      }
    ]
  },
  {
    path: '/role',
    component: Layout,
    alwaysShow: true, // will always show the root menu
    name: 'role',
    meta: {
      title: '权限管理',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/role/index.vue'),
        name: 'roleIndex',
        meta: {
          title: '角色管理',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'user',
        component: () => import('@/views/user/index.vue'),
        name: 'user',
        meta: {
          title: '人员管理',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
