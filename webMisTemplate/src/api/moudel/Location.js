import axios from '../index'
	
/**
 * @tags:  存放位置管理  
 * @name: 新增存放位置 
 * @param { addVO } addVO required   
	{ string }	bentSurface 排架面  true    
	{ array }	boxIds 成盒编号  true    
	{ string }	locationColumn 列  true    
	{ string }	locationRow 行  true    
	{ string }	storageBent 存放排架  true    
	{ string }	storageWarehouse 存放仓库  true        
*/
export const LocationAddLocation = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/Location/addLocation', 
		data: data 
	})
}
    
	
/**
 * @tags:  存放位置管理  
 * @name: 删除存放位置 
 * @param { deleteVO } deleteVO required   
	{ array }	ids 成盒主键ID  true        
*/
export const LocationDeleteLocation = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/Location/deleteLocation', 
		data: data 
	})
}
    
	
/**
 * @tags:  存放位置管理  
 * @name: 修改存放位置 
 * @param { modifyVO } modifyVO required   
	{ string }	bentSurface 排架面  true    
	{ array }	ids 成盒主键编码  true    
	{ string }	locationColumn 列  true    
	{ string }	locationRow 行  true    
	{ string }	storageBent 存放排架  true    
	{ string }	storageWarehouse 存放仓库  true        
*/
export const LocationModifyLocation = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/Location/modifyLocation', 
		data: data 
	})
}
    
	
/**
 * @tags:  存放位置管理  
 * @name: 存放位置查询(分页) 
 * @param { paginationVo } paginationVo required   
	{ string }	bentSurface 排架面  false    
	{ string }	boxId 成盒编码  false    
	{ string }	storageBent 存放排架  false    
	{ string }	storageWarehouse 存放仓库  false    
	{ integer }	limit 每页显示多少条  true    
	{ integer }	page 第几页  true        
*/
export const LocationQueryLocationPaged = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/Location/queryLocationPaged', 
		data: data 
	})
}
    
	
/**
 * @tags:  存放位置管理  
 * @name: 成盒编号查询 
 * @param { fileNumVo } fileNumVo required   
	{ string }	boxId 成盒编码  false    
	{ integer }	limit 每页显示多少条  true    
	{ integer }	page 第几页  true        
*/
export const LocationQueryLocationPagedFile = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/Location/queryLocationPagedFile', 
		data: data 
	})
}
    
