/*
 * @name: 文件
 * @Author: Gin
 * @Date: 2020-12-23 09:44:24
 * @LastEditors: Gin
 * @LastEditTime: 2021-07-27 15:23:39
 */
import axios from 'axios'
import router from '../router'
import {
  baseURL
} from '../config'
import {
  Message,
  Loading
} from 'element-ui'
import {
  getToken
} from '@/utils/auth'
import store from '../store'
let load = ''
let loadNumber = 0
class HttpRequest {
  constructor() {
    this.baseURL = baseURL
    this.queue = {}
  }
  getInsideConfig() {
    return {
      baseURL: this.baseURL,
      withCredentials: true, // send cookies when cross-domain requests
      timeout: 100000, // request timeout
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json;charset=utf-8',
        'Token': getToken()
      }
    }
  }
  interceptors(instance) {
    instance.interceptors.request.use(config => {
      load = Loading.service({
        lock: true,
        customClass: 'create-isLoading',
        text: '拼命加载中',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      loadNumber++
      return config
    }, error => {
      return Promise.reject(error)
    })
    instance.interceptors.response.use(
      response => {
        loadNumber--
        if (loadNumber === 0) {
          load.close()
        }
        // 登录过期
        if (response.data.code === 10103) {
          Message({
            message: response.data.msg,
            type: 'error'
          })
          router.push('/login')
        } else if (response.data.code !== 200) {
          Message({
            message: response.data.msg,
            type: 'error'
          })
          return Promise.reject(response.data.msg)
        } else {
          return response.data.data
        }
      },
      error => {
        loadNumber--
        if (loadNumber === 0) {
          load.close()
        }
        console.log('err' + error) // for debug
        Message({
          message: error.response.data.msg,
          type: 'error'
        })
        return Promise.reject(error)
      }
    )
  }
  request(options) {
    if (options.data !== '' && options.data !== null && options.data !== undefined) {
      options.data.currentDistrictId = store.getters.currentDistrictId
    }

    // options
    const instance = axios.create()
    var potions = Object.assign(this.getInsideConfig(), options)

    this.interceptors(instance)
    return instance(potions)
  }
}
export default HttpRequest
