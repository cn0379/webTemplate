/*
 * @name: 文件
 * @Author: Action
 * @Date: 2021-01-18 15:41:30
 * @LastEditors: Action
 * @LastEditTime: 2021-01-21 10:29:35
 */
import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
