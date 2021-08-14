/*
 * @name: 弹出层变量
 * @Author: Gin
 * @Date: 2020-12-10 15:40:10
 * @LastEditors: Gin
 * @LastEditTime: 2020-12-17 20:24:34
 */
const state = {
  popState: false, // 是否弹出
  popNameList: [] // 弹出的组件名  {name: '组件名', x: Number 距离左屏幕距离，y: Number 距离上屏幕距离}
}

const mutations = {
  // 切换遮罩层显示隐藏
  TOGGLE_POP(state) {
    console.log(state.popState)
    state.popState = !state.popState
  },
  // 隐藏遮罩层
  HIDE_POP(state) {
    state.popState = false
  },
  // 显示遮罩层
  SHOW_POP(state) {
    state.popState = true
  },
  /**
   * @name: 设置遮罩层展示的模块
   * @param {Object} state vuex都西昂
   * @param {Object | Array} payload {name: '组件名', x: Number 距离左屏幕距离，y: Number 距离上屏幕距离}
   * @return {*}
   */
  SET_POP_NAME(state, payload) {
    if (Array.isArray(payload)) {
      state.popNameList = state.popNameList.concat(payload)
    } else {
      state.popNameList.push(payload)
    }
  },
  /**
   * @name:  关闭部分弹出层
   * @param {OBject} state vuex
   * @param {String | Array} names 组件名
   * @return {*}
   */
  CLEAR_POP(state, names) {
    if (Array.isArray(names)) {
      names.forEach(name => {
        const index = state.popNameList.findIndex(item => item.name === name)
        if (index === -1) {
          console.error(`${name}弹出层不存在`)
          return
        }
        state.popNameList.splice(index, 1)
      })
    } else {
      const index = state.popNameList.findIndex(item => item.name === names)
      if (index === -1) {
        console.error(`${names}弹出层不存在`)
        return
      }
      state.popNameList.splice(index, 1)
    }
  },
  // 注销遮罩层
  RESET_STATE(state) {
    console.log('state: ', state)
    state.popState = false
    state.popNameList = []
  }
}

export default {
  // 开启命名空间，在文件中调用该模块时需要声明模块名
  namespaced: true,
  state,
  mutations
}
