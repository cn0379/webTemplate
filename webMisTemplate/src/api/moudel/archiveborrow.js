import axios from '../index'

/**
 * @tags:  档案借阅
 * @name: 新增档案借阅
 * @param { addVO } addVO required
	{ array }	archiveIds 档案信息
	{ array }	attlist 上传附件列表
	{ string }	borrowerName 借阅人姓名
	{ string }	certificateNumber 证件号码
	{ string }	copy 复制张数
	{ string }	department 工作单位
	{ string }	dept 登录用户
	{ string }	memo 用途简介
	{ string }	phone 电话号码
	{ string }	purpose 利用目的
*/
export const ArchiveborrowAddArchiveBorrow = (data = null) => {
  return axios.request({
    method: 'post',
    url: '/damispro/secured/archiveborrow/addArchiveBorrow',
    data: data
  })
}

/**
 * @tags:  开放中心
 * @name: 开放中心导出
 * @param { openCentrePaginationVO } openCentrePaginationVO required
	{ string }	archiveDate 成文日期  false
	{ string }	archiveName 题名-档案名称  false
	{ string }	fondNo 全宗号  false
	{ string }	isOpen 是否开放，参数表OPEN_STATUS  false
	{ string }	keepTimes 保管期限，参数表STORAGE_TIME  false
	{ string }	keySearch 一键搜: 根据关键字搜索  false
	{ integer }	queryMode 请求方式，0：精准查询，1：一键搜  false
	{ string }	years 年度  false
	{ integer }	limit 每页显示多少条  true
	{ integer }	page 第几页  true
*/
export const ArchiveborrowExpertExcel = (data = null) => {
  return axios.request({
    method: 'post',
    url: '/damispro/secured/archiveborrow/expertExcel',
    data: data
  })
}

/**
 * @tags:  统计分析-档案借阅
 * @name: 档案借阅统计导出
 * @param { countVo } countVo required
	{ string }	endTime 结束时间 年  false
	{ string }	startTime 开始时间 年  false
	{ integer }	limit 每页显示多少条  true
	{ integer }	page 第几页  true
*/
export const ArchiveborrowExport = (data = null) => {
  return axios.request({
    method: 'post',
    url: '/damispro/secured/archiveborrow/export',
    data: data
  })
}

/**
 * @tags:  档案借阅
 * @name: 修改档案借阅
 * @param { modifyVO } modifyVO required
	{ array }	archiveIds 档案信息  false
	{ array }	attlist 上传附件列表  false
	{ integer }	borrowMainId 档案借阅主键ID  true
	{ string }	borrowerName 借阅人姓名  false
	{ string }	certificateNumber 证件号码  false
	{ string }	copy 复制张数  false
	{ string }	department 工作单位  false
	{ string }	memo 用途简介  false
	{ string }	phone 电话号码  false
	{ string }	purpose 利用目的  false
*/
export const ArchiveborrowModifyArchiveBorrow = (data = null) => {
  return axios.request({
    method: 'post',
    url: '/damispro/secured/archiveborrow/modifyArchiveBorrow',
    data: data
  })
}

/**
 * @tags:  开放中心
 * @name: 开放中心查询(分页)
 * @param { openCentrePaginationVO } openCentrePaginationVO required
	{ string }	archiveDate 成文日期  false
	{ string }	archiveName 题名-档案名称  false
	{ string }	fondNo 全宗号  false
	{ string }	isOpen 是否开放，参数表OPEN_STATUS  false
	{ string }	keepTimes 保管期限，参数表STORAGE_TIME  false
	{ string }	keySearch 一键搜: 根据关键字搜索  false
	{ integer }	queryMode 请求方式，0：精准查询，1：一键搜  false
	{ string }	years 年度  false
	{ integer }	limit 每页显示多少条  true
	{ integer }	page 第几页  true
*/
export const ArchiveborrowOpenCentre = (data = null) => {
  return axios.request({
    method: 'post',
    url: '/damispro/secured/archiveborrow/openCentre',
    data: data
  })
}

/**
 * @tags:  档案借阅
 * @name: 档案借阅查询(分页)
 * @param { paginationVo } paginationVo required
	{ string }	borrowerName 借阅人姓名  false
	{ string }	certificateNumber 证件号码  false
	{ string }	purpose 利用目的  false
	{ integer }	limit 每页显示多少条  true
	{ integer }	page 第几页  true
*/
export const ArchiveborrowQueryArchiveBorrow = (data = null) => {
  return axios.request({
    method: 'post',
    url: '/damispro/secured/archiveborrow/queryArchiveBorrow',
    data: data
  })
}

/**
 * @tags:  统计分析-档案借阅
 * @name: 档案借阅统计
 * @param { countVo } countVo required
	{ string }	endTime 结束时间 年  false
	{ string }	startTime 开始时间 年  false
	{ integer }	limit 每页显示多少条  true
	{ integer }	page 第几页  true
*/
export const ArchiveborrowQueryBorrowCount = (data = null) => {
  return axios.request({
    method: 'post',
    url: '/damispro/secured/archiveborrow/queryBorrowCount',
    data: data
  })
}

