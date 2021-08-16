/*
 * @name: 文件
 * @Author: Gin
 * @Date: 2021-05-19 18:27:43
 * @LastEditors: Gin
 * @LastEditTime: 2021-06-30 16:40:44
 */
export const getBuildingCondition = () => {
  return Promise.resolve({
    'code': 200,
    'data': {
      'total': 20,
      'rows': new Array(1).fill({
        'id': 387,
        'communityId': 1,
        'communityName': '恒通花园',
        'buildingNo': '1',
        'unitCount': 1,
        'roomCount': 1,
        'userCount': 1
      })
    },
    'msg': '',
    'identifier': ''
  })
}

export const addBuilding = () => {
  return Promise.resolve({
    'code': 200,
    'data': null,
    'msg': '新增成功',
    'identifier': ''
  })
}

export const removeBuilding = () => {
  return Promise.resolve({
    'code': 200,
    'data': null,
    'msg': '删除成功',
    'identifier': ''
  })
}

export const updateBuilding = () => {
  return Promise.resolve({
    'code': 200,
    'data': null,
    'msg': '修改成功',
    'identifier': ''
  })
}
export const getNoAndIdByBuilding = () => {
  return Promise.resolve({
    'code': 200,
    'data': {
      'records': [{
        'id': 388,
        'buildingNo': '1',
        'floor': 1
      }]
    },
    'msg': '',
    'identifier': ''
  })
}
