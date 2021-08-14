/*
 * @name: 文件
 * @Author: Haojin Sun
 * @Date: 2020-08-05 08:55:33
 * @LastEditors: Gin
 * @LastEditTime: 2020-12-18 10:13:18
 */
const fs = require('fs')
const axios = require('axios')
const template = require('art-template')
axios({
  method: 'get',
  url: 'http://10.10.2.138:8081/cszhzfmispro/v2/api-docs?group=2.X%E7%89%88%E6%9C%AC',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json;charset=utf-8'
  }
}).then(res => {
  console.log(res.data)

  // eslint-disable-next-line no-eval
  const json = res.data
  const { paths, basePath, host } = json
  // let fileData = JSON.stringify({ paths, basePath, host }, null, 2)
  fs.readFile('./template.art', (error, data) => {
    if (error) {
      console.log('文件读取错误')
    } else {
      const myData = data.toString()
      const result = template.render(myData, { paths,
        basePath,
        host })
      fs.writeFile('../src/api/api.js', result, (err) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('创建文件成功')
      })
    }
  })
})
