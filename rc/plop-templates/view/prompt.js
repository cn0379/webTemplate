/*
 * @name: 文件
 * @Author: Gin
 * @Date: 2021-05-19 15:23:17
 * @LastEditors: Gin
 * @LastEditTime: 2021-05-19 20:09:54
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
      templateFile: 'plop-templates/view/index.hbs',
      data: {
        name: name
      }
    },
    {
      type: 'add',
      path: `src/views/${name}/components/AddModule.vue`,
      templateFile: 'plop-templates/view/AddModule.hbs',
      data: {
        name: name
      }
    }
    ]

    return actions
  }
}
