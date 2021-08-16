/*
 * @name: 文件
 * @Author: Gin
 * @Date: 2021-07-05 14:44:12
 * @LastEditors: Gin
 * @LastEditTime: 2021-07-05 15:28:39
 */
function hidePlaceholder(el) {
  const inputList = el.getElementsByClassName('el-input__inner')
  const areaTextList = el.getElementsByClassName('el-el-textarea__inner')
  inputList.forEach(dom => {
    if (dom.disabled === true) {
      dom.placeholder = ''
    }
  })
  areaTextList.forEach(dom => {
    if (dom.disabled === true) {
      dom.placeholder = ''
    }
  })
}

export default {
  componentUpdated(el) {
    hidePlaceholder(el)
  }
}

