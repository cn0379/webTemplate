/*
 * @name: 文件
 * @Author: Gin
 * @Date: 2021-02-25 13:08:49
 * @LastEditors: Gin
 * @LastEditTime: 2021-02-25 13:42:50
 */
import XLSX from 'xlsx'
/**
   * @name: 设置导出表格的数据
   * @param {Array} headerData 表头数据
   * @param {Array} data 表格数据
   * @param {Name} excelName 导出表格明
   * @return {Void}
   */
const setOutTableData = function(headerData, data, excelName) {
  const list = []
  const header = []
  const headerProp = []
  headerData.forEach(item => {
    header.push(item.label)
    headerProp.push(item.prop)
  })
  list.push(header)
  data.forEach(item => {
    const dataList = []
    headerProp.forEach(prop => {
      dataList.push(item[prop])
    })
    list.push(dataList)
  })
  const worksheet = XLSX.utils.aoa_to_sheet(list)
  const workbook = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1')
  XLSX.writeFile(workbook, excelName || 'sheetjs.xlsx')
}

export default setOutTableData
