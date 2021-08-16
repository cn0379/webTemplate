/*
 * @name: 文件
 * @Author: Gin
 * @Date: 2021-05-08 15:10:28
 * @LastEditors: Gin
 * @LastEditTime: 2021-07-01 11:09:48
 */
const myState = {
  logs: []
}

const mutations = {
  ADD_ERROR_LOG: (state, log) => {
    state.logs.push(log)
  },
  CLEAR_ERROR_LOG: (state) => {
    state.logs.splice(0)
  }
}

const actions = {
  addErrorLog({ commit }, log) {
    commit('ADD_ERROR_LOG', log)
  },
  clearErrorLog({ commit }) {
    commit('CLEAR_ERROR_LOG')
  }
}

export default {
  namespaced: true,
  state: myState,
  mutations,
  actions
}
