/*
 * @name: 渲染单文件
 * @Author: Haojin Sun
 * @Date: 2020-08-05 08:55:33
 * @LastEditors: Gin
 * @LastEditTime: 2021-04-15 15:03:41
 */
const fs = require('fs')
const axios = require('axios')
const path = require('path')
const template = require('art-template')
const { swaggerUrl } = require('../src/settings')

axios({
  method: 'get',
  url: swaggerUrl, 
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json;charset=utf-8'
  }
}).then(res => {
  const json = res.data
  const { paths, basePath, host, definitions } = json
  // let fileData = JSON.stringify({ paths, basePath, host }, null, 2)
  fs.readFile(path.join(__dirname, '/template.art'), (error, data) => {
    if (error) {
      console.log('文件读取错误')
    } else {
      const myData = data.toString()
      const result = template.render(myData, {
        paths,
        basePath,
        definitions,
        host
      })
      // ./src/api/api.js
      fs.writeFile(path.join(__dirname, `../src/api/moudel/${key}.js`), result, (err) => {
        if (err) {
          console.log(err)
          return
        }
        console.log(`创建${key}文件成功`)
      })
    }
  })
})
