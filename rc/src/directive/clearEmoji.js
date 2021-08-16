/*
 * @Descripttion:
 * @version:
 * @Author: Wiley.Yang
 * @Date: 2021-05-27 14:01:34
 * @LastEditors: Gin
 * @LastEditTime: 2021-06-30 16:42:25
 */
import Vue from 'vue'
import emojiRegex from 'emoji-regex' // npm install emoji-regex
const clearEmoji = Vue.directive('clearEmoji', {
  bind(el) {
    const regex = emojiRegex()
    const obj = el.querySelectorAll('.el-input__inner,.el-textarea__inner')[0]
    const zclearNoNum = function(e) {
      if (e.target.composing) return
      setTimeout(() => {
        const match = regex.exec(obj.value) // 也可以直接用正则表达式判断
        if (match) {
          obj.value = obj.value.replace(/(\ud83c[\udc00-\udfff])|(\ud83d[\udc00-\udfff])|(\ud83e[\udc00-\udfff])|[\u2100-\u32ff]|[\u0030-\u007f][\u20d0-\u20ff]|[\u0080-\u00ff]/g, '')
        }
        // 触发v-model的更新
        obj.dispatchEvent(new Event('input'))
      }, 1)
    }
    const zblur = function(e) {
      zclearNoNum(e)
      setTimeout(() => {
        const match = regex.exec(obj.value)
        if (match) {
          obj.value = obj.value.replace(/(\ud83c[\udc00-\udfff])|(\ud83d[\udc00-\udfff])|(\ud83e[\udc00-\udfff])|[\u2100-\u32ff]|[\u0030-\u007f][\u20d0-\u20ff]|[\u0080-\u00ff]/g, '')
        }
        // 触发v-model的更新
        obj.dispatchEvent(new Event('change'))
      }, 50)
    }
    obj.oninput = zclearNoNum
    obj.onblur = zblur

    function onCompositionStart(e) {
      e.target.composing = true
    }
    function onCompositionEnd(e) {
      e.target.composing = false
      obj.dispatchEvent(new Event('input'))
    }
    obj.addEventListener('compositionstart', onCompositionStart)
    obj.addEventListener('compositionend', onCompositionEnd)
  }
})
export default clearEmoji
