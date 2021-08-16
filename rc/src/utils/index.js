/*
 * @name: 文件
 * @Author: Gin
 * @Date: 2021-05-08 15:10:31
 * @LastEditors: Gin
 * @LastEditTime: 2021-07-01 11:12:50
 */

/**
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @return {*}
 */
export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result

  const later = function() {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function(...argList) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, argList)
      context = argList = null
    }

    return result
  }
}

/**
 * This is just a simple version of deep copy
 * Has a lot of edge cases bug
 * If you want to use a perfect deep copy, use lodash's _.cloneDeep
 * @param {Object} source
 * @returns {Object}
 */
export function deepClone(source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'deepClone')
  }
  const targetObj = source.constructor === Array ? [] : {}
  Object.keys(source).forEach(keys => {
    if (source[keys] && typeof source[keys] === 'object') {
      targetObj[keys] = deepClone(source[keys])
    } else {
      targetObj[keys] = source[keys]
    }
  })
  return targetObj
}
/**
 * @name: 随机生成指定范围内的数字
 * @param {*} number 最大值
 * @return {Number} 随机数
 */
export function rand(number) {
  const today = new Date()
  const seed = today.getTime()
  return Math.ceil(rnd(seed) * number)
}

/**
 * @name: 用于生成随机数方法 rand
 * @param {Number} seed 时间戳
 * @return {Number} 随机数
 */
function rnd(seed) {
  seed = (seed * 9301 + 49297) % 233280
  return seed / 233280.0
}

