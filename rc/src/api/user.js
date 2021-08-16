/*
 * @name: 文件
 * @Author: Gin
 * @Date: 2021-05-08 15:10:27
 * @LastEditors: Gin
 * @LastEditTime: 2021-06-30 16:20:21
 */

// 用户相关的请求模块
import axios from './index'

// 登录
export const login = data => {
  return axios.request({
    method: 'POST',
    url: '/login',
    data
  })
}
// 获取账号信息
export const getByToken = () => {
  return axios.request({
    method: 'GET',
    url: '/secured/system/user/getByToken'

  })
}

// 修改密码接口
export function updatePwd(data) {
  return axios.request({
    url: '/secured/system/modifyPassword',
    method: 'post',
    data
  })
}
