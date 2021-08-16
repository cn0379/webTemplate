/*
 * @name: 文件
 * @Author: Gin
 * @Date: 2021-05-08 15:10:31
 * @LastEditors: Gin
 * @LastEditTime: 2021-07-01 11:16:22
 */
/**
 *Created by PanJiaChen on 16/11/29.
 * @param {Sting} url
 * @param {Sting} title
 * @param {Number} w
 * @param {Number} h
 */
export default function openWindow(url, title, w, h) {
  // Fixes dual-screen position                            Most browsers       Firefox
  const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left
  const dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top
  let width = 0
  let height = 0
  if (window.innerWidth) {
    width = window.innerWidth
  } else if (document.documentElement.clientWidth) {
    width = document.documentElement.clientWidth
  } else {
    width = screen.width
  }

  if (window.innerHeight) {
    height = window.innerHeight
  } else if (document.documentElement.clientHeight) {
    height = document.documentElement.clientHeight
  } else {
    height = screen.height
  }

  const left = width / 2 - w / 2 + dualScreenLeft
  const top = height / 2 - h / 2 + dualScreenTop
  const newWindow = window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left)

  // Puts focus on the newWindow
  if (window.focus) {
    newWindow.focus()
  }
}

