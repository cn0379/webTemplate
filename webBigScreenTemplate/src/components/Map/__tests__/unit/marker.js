/*
 * @name: 文件  由于高德目前并非是npm引入的  当前也没有找到官方插件  一些特有类不太好模拟   如果谁有办法的 请帮忙指导下
 * @Author: Gin
 * @Date: 2020-12-17 10:22:32
 * @LastEditors: Gin
 * @LastEditTime: 2020-12-17 15:05:37
 */

// import Marker from '@/components/Map/marker'
// import store from '@/store'

// // jest.mock('@/store');

// beforeEach(() => {
//     AMap = {
//         'Pixel': class Text {
//             constructor() { }
//         },
//         'Marker': class Text2 {
//             constructor() {
//             }
//             on() {

//             }
//             setMap(){}
//         }
//     }
// })
// it('实例具有 aMapMarkerList 、markerClickFunc 、markerProperties 、 name 属性', () => {
//     var marker = new Marker('测试', {
//         zIndex: 1,
//         offset: [0, 0],
//         content: null,
//         icon: null
//     }, a => a)

//     expect(marker.hasOwnProperty('aMapMarkerList')).toBe(true)
//     expect(marker.hasOwnProperty('markerClickFunc')).toBe(true)
//     expect(marker.hasOwnProperty('markerProperties')).toBe(true)
//     expect(marker.hasOwnProperty('name')).toBe(true)
// })

// it('实例添加单个和多个marker', () => {
//     var marker = new Marker('测试', {
//         zIndex: 1,
//         offset: [0, 0],
//         content: null,
//         icon: null
//     }, a => a)
//     let mockMark = {}
//     let mockMarks = [{}, {}]
//     marker.addMarks(mockMark)
//     expect(marker.aMapMarkerList.length).toBe(1)
//     marker.addMarks(mockMarks)
//     expect(marker.aMapMarkerList.length).toBe(3)
// })

// it('实例删除单个marker', () => {
//     var marker = new Marker('测试', {
//         zIndex: 1,
//         offset: [0, 0],
//         content: null,
//         icon: null
//     }, a => a)
//     let mockMark = {}
//     let mockMarks = [{}, mockMark, {}]
//     marker.addMarks(mockMarks)
//     marker.removeMarks(mockMark)
//     // 校验数组长度
//     expect(marker.aMapMarkerList.length).toBe(mockMarks.length - 1)
//     // 不包含该元素
//     expect(marker.aMapMarkerList).not.toContain(mockMark)
// })

// it('实例删除多个marker', () => {
//     var marker = new Marker('测试', {
//         zIndex: 1,
//         offset: [0, 0],
//         content: null,
//         icon: null
//     }, a => a)
//     let mockMark = {}
//     let mockMarks = [{}, {}, {}]
//     expect(marker.removeMarks(mockMark)).toThrow()
//     marker.addMarks(mockMarks)
//     marker.addMarks(mockMark)
//     marker.removeMarks(mockMarks)
//     // 校验数组长度
//     expect(marker.aMapMarkerList.length).toBe(1)
//     // 不包含该元素
//     expect(marker.aMapMarkerList).not.toContain(mockMarks[0])
//     expect(marker.aMapMarkerList).not.toContain(mockMark[1])
//     expect(marker.aMapMarkerList).not.toContain(mockMark[2])
// })

// it('实例清空markers', () => {
//     var marker = new Marker('测试', {
//         zIndex: 1,
//         offset: [0, 0],
//         content: null,
//         icon: null
//     }, a => a)
//     let mockMarks = [{}, {}, {}]
//     expect(marker.emptyMarks(mockMarks)).toThrow()
//     marker.addMarks(mockMarks)
//     marker.emptyMarks()
//     // 校验数组长度
//     expect(marker.aMapMarkerList.length).toBe(0)
// })
