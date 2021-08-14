import axios from '../index'
	
/**
 * @tags:  温湿度记录  
 * @name: 温湿度记录导出 
 * @param { paginationVO } paginationVO required   
	{ string }	recordTimeEnd 记录结束时间 yyyy-MM-dd HH:mm  false    
	{ string }	recordTimeStart 记录开始时间 yyyy-MM-dd HH:mm  false    
	{ integer }	storeHouseId 库房ID  false    
	{ integer }	limit 每页显示多少条  true    
	{ integer }	page 第几页  true        
*/
export const HumitureExport = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/humiture/export', 
		data: data 
	})
}
    
	
/**
 * @tags:  温湿度记录  
 * @name: 温湿度查询(分页) 
 * @param { paginationVO } paginationVO required   
	{ string }	recordTimeEnd 记录结束时间 yyyy-MM-dd HH:mm  false    
	{ string }	recordTimeStart 记录开始时间 yyyy-MM-dd HH:mm  false    
	{ integer }	storeHouseId 库房ID  false    
	{ integer }	limit 每页显示多少条  true    
	{ integer }	page 第几页  true        
*/
export const HumitureQueryHumiturePaged = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/humiture/queryHumiturePaged', 
		data: data 
	})
}
    
	
/**
 * @tags:  温湿度记录  
 * @name: 库房下拉列表  
*/
export const HumitureStoreHouseList = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/humiture/storeHouseList', 
		data: data 
	})
}
    
