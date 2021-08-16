/*
 * @name: 文件
 * @Author: Action
 * @Date: 2021-01-18 15:41:30
 * @LastEditors: Gin
 * @LastEditTime: 2021-06-24 13:58:19
 */
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component

// // register globally
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
