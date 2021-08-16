/*
 * @name: 文件
 * @Author: Gin
 * @Date: 2021-05-08 15:10:31
 * @LastEditors: Gin
 * @LastEditTime: 2021-07-01 13:06:50
 */
import store from '@/store'

/**
 * @param {Array} value
 * @returns {Boolean}
 * @example see @/views/permission/directive.vue
 */
export default function checkPermission(value) {
  if (value && value instanceof Array && value.length > 0) {
    const roles = store.getters && store.getters.roles
    const permissionRoles = value

    return roles.some(role => {
      return permissionRoles.includes(role)
    })
  } else {
    console.error(`need roles! Like v-permission="['admin','editor']"`)
    return false
  }
}
