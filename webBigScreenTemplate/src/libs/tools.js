/*
 * @name: 文件
 * @Author: Gin
 * @Date: 2020-12-10 13:58:58
 * @LastEditors: Gin
 * @LastEditTime: 2020-12-10 14:08:36
 */

// 存放与业务无关的工具方法

/**
 * @name: 导入目录下所有文件
 * @param {type}
 * @return:
 */
export const importAll = function(r) {
  const __modules = {}
  r.keys().forEach(key => {
    const m = r(key).default
    const n = key.split('/').reverse()[0].split('.')[0]
    __modules[n] = m
  })
  return __modules
}

/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
export const debounce = function(func, wait, immediate) {
  let timeout = null
  return function(...args) {
    const that = this
    if (timeout) clearTimeout(timeout)
    if (immediate) {
      const callNow = !timeout
      timeout = setTimeout(() => {
        timeout = null
      }, wait)
      if (callNow) func.apply(that, args)
    } else {
      timeout = setTimeout(() => {
        func.apply(that, args)
      }, wait)
    }
  }
}

/**
 * @desc 遍历数组内所有对象的所有属性，如果为空就设置为 '/'
 * *@param res 数组
 */
export const resetSpace = res => {
  var data = [...res]
  for (const item of data) {
    for (const index in item) {
      if (!item[index] && item[index] !== 0) {
        item[index] = '/'
      }
    }
  }
  return data
}
