/*
 * @name: 文件
 * @Author: Haojin Sun
 * @Date: 2020-04-24 17:05:09
 * @LastEditors: huang junjie
 * @LastEditTime: 2020-08-21 16:13:48
 */
import { importAll } from '@/libs/tools'
export default importAll(require.context('./', false, /\.vue$/))
