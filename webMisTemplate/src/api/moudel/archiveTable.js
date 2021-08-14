import axios from '../index'
	
/**
 * @tags:  数据表管理  
 * @name: 模板字段(删除) 
 * @param { integer } id required   
*/
export const ArchiveTableDeleteArchiveField = (id = null) => {
	return axios.request({
		method: 'post',		
		url: `/damispro/secured/archiveTable/deleteArchiveField/${id}`,	  
	})
}
    
	
/**
 * @tags:  数据表管理  
 * @name: 档案模板(删除) 
 * @param { integer } id required   
*/
export const ArchiveTableDeleteArchiveTable = (id = null) => {
	return axios.request({
		method: 'post',		
		url: `/damispro/secured/archiveTable/deleteArchiveTable/${id}`,	  
	})
}
    
	
/**
 * @tags:  数据表管理  
 * @name: 模板字段(新增) 
 * @param { archiveFieldVO } archiveFieldVO required   
	{ string }	fieldContent 字段详情  true    
	{ integer }	id 模板字段主键, 新增时不传，修改时必传  false        
*/
export const ArchiveTableInsertArchiveField = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/archiveTable/insertArchiveField', 
		data: data 
	})
}
    
	
/**
 * @tags:  数据表管理  
 * @name: 档案模板(新增) 
 * @param { archiveTableVO } archiveTableVO required   
	{ integer }	archiveType 档案类别，下拉框接口：getArchiveTypeList  true    
	{ integer }	id 档案模板主键, 新增时不传，修改时必传  false    
	{ string }	tableName 表名称  true    
	{ string }	templateName 模板名称  true        
*/
export const ArchiveTableInsertArchiveTable = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/archiveTable/insertArchiveTable', 
		data: data 
	})
}
    
	
/**
 * @tags:  数据表管理  
 * @name: 模板字段修改 
 * @param { archiveFieldVO } archiveFieldVO required   
	{ string }	fieldContent 字段详情  true    
	{ integer }	id 模板字段主键, 新增时不传，修改时必传  false        
*/
export const ArchiveTableModifyArchiveField = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/archiveTable/modifyArchiveField', 
		data: data 
	})
}
    
	
/**
 * @tags:  数据表管理  
 * @name: 档案模板修改 
 * @param { archiveTableVO } archiveTableVO required   
	{ integer }	archiveType 档案类别，下拉框接口：getArchiveTypeList  true    
	{ integer }	id 档案模板主键, 新增时不传，修改时必传  false    
	{ string }	tableName 表名称  true    
	{ string }	templateName 模板名称  true        
*/
export const ArchiveTableModifyArchiveTable = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/archiveTable/modifyArchiveTable', 
		data: data 
	})
}
    
	
/**
 * @tags:  数据表管理  
 * @name: 编辑档案模板 
 * @param { templateVO } templateVO required   
	{ integer }	id 模板ID  false    
	{ string }	templateContent 模板内容  true        
*/
export const ArchiveTableModifyArchiveTableTemplate = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/archiveTable/modifyArchiveTableTemplate', 
		data: data 
	})
}
    
	
/**
 * @tags:  数据表管理  
 * @name: 模板字段查询  
*/
export const ArchiveTableQueryArchiveFieldPaged = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/archiveTable/queryArchiveFieldPaged', 
		data: data 
	})
}
    
	
/**
 * @tags:  数据表管理  
 * @name: 档案模板查询(分页) 
 * @param { paginationVO } paginationVO required   
	{ integer }	archiveType 档案类别，下拉框  false    
	{ string }	tableName 表名称  false    
	{ string }	templateName 模板名称  false    
	{ integer }	limit 每页显示多少条  true    
	{ integer }	page 第几页  true        
*/
export const ArchiveTableQueryArchiveTablePaged = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/archiveTable/queryArchiveTablePaged', 
		data: data 
	})
}
    
	
/**
 * @tags:  数据表管理  
 * @name: 根据模板id查询模板内容 
 * @param { tableVO } tableVO required   
	{ integer }	archiveType 档案类别，下拉框接口：getArchiveTypeList  true    
	{ integer }	id 档案模板主键, 新增时不传，修改时必传  false    
	{ string }	tableName 表名称  true    
	{ string }	templateName 模板名称  true        
*/
export const ArchiveTableQueryContentById = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/archiveTable/queryContentById', 
		data: data 
	})
}
    
