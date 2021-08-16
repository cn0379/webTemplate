/*
 * @name: 文件
 * @Author: Gin
 * @Date: 2021-07-27 14:55:55
 * @LastEditors: Gin
 * @LastEditTime: 2021-07-27 15:21:04
 */
import axios from './index'

export function login(data) {
  return axios.request({
    url: 'auth/login',
    method: 'post',
    data
  })
}

export function getInfo() {
  return axios.request({
    url: 'auth/info',
    method: 'get'
  })
}

export function getCodeImg() {
  return axios.request({
    url: 'auth/code',
    method: 'get'
  })
}

export function logout() {
  return axios.request({
    url: 'auth/logout',
    method: 'delete'
  })
}
