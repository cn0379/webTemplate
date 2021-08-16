import { login, getByToken } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'

const myState = {
  token: getToken(),
  communityName: '',
  currentCommunityId: '',
  name: '',
  avatar: '',
  introduction: '',
  roles: [],
  permissionRoutes: [],
  roleTypeId: '',
  allInfo: {},
  currentDistrictId: '',
  neighborhoodName: '',
  userId: ''
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_COMMUNITY_NAME: (state, name) => {
    state.communityName = name
  },
  SET_CURRENT_COMMUNITY_ID: (state, currentCommunityId) => {
    state.currentCommunityId = currentCommunityId
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_PERMISSIONROUTES: (state, permissionRoutes) => {
    state.permissionRoutes = permissionRoutes
  },
  SET_ALL_INFO: (state, allInfo) => {
    console.log('allInfo: ', allInfo)
    state.allInfo = allInfo
  },
  SET_ROLE_TYPE_ID: (state, roleTypeId) => {
    state.roleTypeId = roleTypeId
  },
  SET_CURRENT_DISTRICT_ID: (state, currentDistrictId) => {
    state.currentDistrictId = currentDistrictId
  },
  SET_NEIGHBORHOODNAME: (state, neighborhoodName) => {
    state.neighborhoodName = neighborhoodName
  },
  SET_USER_ID: (state, userId) => {
    state.userId = userId
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password, code, uuid } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password.trim(), code: code.trim(), uuid }).then(response => {
        const { data } = response
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    console.log('state: ', state)
    return new Promise((resolve) => {
      getByToken().then(res => {
        commit('SET_ROLES', res.data.permissions)
        commit('SET_NAME', res.data.realName)
        commit('SET_COMMUNITY_NAME', res.data.communityName)
        commit('SET_CURRENT_COMMUNITY_ID', res.data.currentCommunityId)
        commit('SET_ALL_INFO', res.data)
        commit('SET_ROLE_TYPE_ID', res.data.roleTypeId)
        commit('SET_NEIGHBORHOODNAME', res.data.neighborhoodName)
        commit('SET_USER_ID', res.data.id)
        commit('SET_CURRENT_DISTRICT_ID', res.data.currentCommunityId)

        resolve({ roles: res.data.permissions })
      })
    })
  },

  // user logout
  logout({ commit, dispatch }) {
    commit('SET_TOKEN', '')
    commit('SET_ROLES', [])
    removeToken()
    resetRouter()

    // reset visited views and cached views
    // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
    dispatch('tagsView/delAllViews', null, { root: true })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  },

  // dynamically modify permissions
  async changeRoles({ commit, dispatch }, role) {
    const token = role + '-token'

    commit('SET_TOKEN', token)
    setToken(token)

    const { roles } = await dispatch('getInfo')

    resetRouter()

    // generate accessible routes map based on roles
    const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })
    // dynamically add accessible routes
    router.addRoutes(accessRoutes)

    // reset visited views and cached views
    dispatch('tagsView/delAllViews', null, { root: true })
  }
}

export default {
  namespaced: true,
  state: myState,
  mutations,
  actions
}
