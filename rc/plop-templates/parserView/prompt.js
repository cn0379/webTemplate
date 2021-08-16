/*
 * @name: 文件
 * @Author: Gin
 * @Date: 2021-05-19 15:23:17
 * @LastEditors: Gin
 * @LastEditTime: 2021-07-07 10:08:44
 */
const { notEmpty } = require('../utils.js')

module.exports = {
  description: 'generate a view',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'view name please',
    validate: notEmpty('name')
  }
  ],
  actions: () => {
    const name = '{{name}}'
    const actions = [{
      type: 'add',
      path: `src/views/${name}/index.vue`,
      templateFile: 'plop-templates/parserView/index.hbs',
      data: {
        name: name
      }
    },
    {
      type: 'add',
      path: `src/views/${name}/components/AddModule.vue`,
      templateFile: 'plop-templates/parserView/AddModule.hbs',
      data: {
        name: name
      }
    },
    {
      type: 'add',
      path: `src/views/${name}/components/formConf.json`,
      templateFile: 'plop-templates/parserView/formConf.json',
      data: {
        name: name
      }
    }
    ]

    return actions
  }
}
