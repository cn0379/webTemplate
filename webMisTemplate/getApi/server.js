/*
 * @name: 文件
 * @Author: Haojin Sun
 * @Date: 2020-08-05 08:55:33
 * @LastEditors: Gin
 * @LastEditTime: 2021-04-15 15:04:45
 */
const fs = require('fs')
const path = require('path')
const axios = require('axios')
const template = require('art-template')
const { swaggerUrl } = require('../src/settings')

// 根据第几个参数来命名文件 0 开始
const urlNameNumber = 2
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
  let filesObj = {} // 存放根据url路劲分类的模块
  for (let key in paths) {
    let url = key.slice(1).split('/')
    // 如果路劲很短则没有分类直接加到api下
    if (url.length < urlNameNumber + 1) {
      if (!filesObj['api']) {
        filesObj['api'] = {}
      }
      filesObj['api'][key] = paths[key]
    } else {
      // 够长则根据配置位数的参数名 为下标添加接口
      let name = url[urlNameNumber]
      if (!filesObj[name]) {
        filesObj[name] = {}
      }
      filesObj[name][key] = paths[key]
    }
  }
  // let fileData = JSON.stringify({ paths, basePath, host }, null, 2)
  fs.readFile(path.join(__dirname, '/template.art'), (error, data) => {
    
    if (error) {
      console.log('文件读取错误')
    } else {
      const myData = data.toString()
      for (let key in filesObj) {
        let paths = filesObj[key]
        const result = template.render(myData, {
          paths,
          basePath,
          definitions,
          host
        })
        // ./src/api/api.js
        fs.writeFile(path.join(__dirname, `../src/api/moudel/${key}.js`), result, (err) => {
          if (err) {
            console.log(`创建接口文件失败——${key}.js`)
            console.log(err)
            return
          }
          console.log(`创建接口文件成功——${key}.js`)
        })
      }

    }
  })
})
