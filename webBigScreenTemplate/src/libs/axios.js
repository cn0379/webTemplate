/*
 * @name: 文件
 * @Author: Haojin Sun
 * @Date: 2020-01-30 13:54:34
 * @LastEditors: Gin
 * @LastEditTime: 2020-12-18 09:46:35
 */
import axios from 'axios'
import { baseURL } from '../config'
import { Message } from 'element-ui'

class HttpRequest {
  constructor() {
    this.baseURL = baseURL
    this.queue = {}
  }
  getInsideConfig() {
    const config = {
      baseURL: this.baseURL,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json;charset=utf-8'
      }
    }
    return config
  }
  interceptors(instance) {
    instance.interceptors.request.use(config => {
      return config
    }, error => {
      return Promise.reject(error)
    })
    instance.interceptors.response.use(
      response => {
        if (response.status === 200 && response.data) {
          return Promise.resolve(response.data)
        } else {
          const { message } = response.data
          Message.error(message)
          return Promise.reject(message)
        }
      },
      error => {
        let message = ''
        error.response ? message = error.response.data.message : message = '发生错误，请联系管理员'
        Message.error(message)
        return Promise.reject(error)
      })
  }
  request(options) {
    const instance = axios.create()
    var potions = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance)
    return instance(potions)
  }
}
export default HttpRequest
