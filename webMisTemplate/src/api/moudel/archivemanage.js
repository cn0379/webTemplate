import axios from '../index'
	
/**
 * @tags:  档案管理  
 * @name: 批量删除档案 
 * @param { deleteVO } deleteVO required   
	{ array }	ids 档案id集合        
*/
export const ArchivemanageBatchDeleteArchive = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/archivemanage/batchDeleteArchive', 
		data: data 
	})
}
    
	
/**
 * @tags:  档案管理  
 * @name: 根据id查询档案详情 
 * @param { archiveGetInfoVO } archiveGetInfoVO required   
	{ string }	id 档案id        
*/
export const ArchivemanageGetArchiveById = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/archivemanage/getArchiveById', 
		data: data 
	})
}
    
	
/**
 * @tags:  档案管理  
 * @name: 档案新增 
 * @param { addMap } addMap required   
*/
export const ArchivemanageInsertArchive = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/archivemanage/insertArchive', 
		data: data 
	})
}
    
	
/**
 * @tags:  档案管理  
 * @name: 档案查询(分页) 
 * @param { paginationVO } paginationVO required   
	{ string }	archiveDate 成文日期  false    
	{ array }	archiveIds 档案id集合  false    
	{ string }	archiveName 题名-档案名称  false    
	{ string }	archiveNo 档号  false    
	{ string }	fondNo 全宗号  false    
	{ string }	isOpen 是否开放，参数表OPEN_STATUS  false    
	{ string }	keepTimes 保管期限，参数表STORAGE_TIME  false    
	{ string }	keySearch 一键搜: 根据关键字搜索  false    
	{ integer }	queryMode 请求方式，0：精准查询，1：一键搜  false    
	{ string }	years 年度  false    
	{ integer }	limit 每页显示多少条  true    
	{ integer }	page 第几页  true        
*/
export const ArchivemanageQueryArchivePaged = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/archivemanage/queryArchivePaged', 
		data: data 
	})
}
    
	
/**
 * @tags:  档案管理  
 * @name: 档案修改 
 * @param { editMap } editMap required   
*/
export const ArchivemanageUpdateArchive = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/archivemanage/updateArchive', 
		data: data 
	})
}
    
