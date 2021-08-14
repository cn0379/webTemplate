import axios from '../index'
	
/**
 * @tags:  档案成盒  
 * @name: 新增档案成盒 
 * @param { addVO } addVO required   
	{ array }	archiveIds 档案ID    
	{ string }	fondId 全宗号    
	{ integer }	keepTimes 保存年限    
	{ string }	years 年度        
*/
export const BoxAddBox = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/box/addBox', 
		data: data 
	})
}
    
	
/**
 * @tags:  档案成盒  
 * @name: 修改档案成盒 
 * @param { modifyVO } modifyVO required   
	{ array }	archiveIds 档案ID  false    
	{ integer }	boxManageId 成盒主键ID  true        
*/
export const BoxModify = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/box/modify', 
		data: data 
	})
}
    
	
/**
 * @tags:  档案成盒  
 * @name: 档案成盒查询(分页) 
 * @param { paginationVo } paginationVo required   
	{ string }	boxId 成盒编码  false    
	{ string }	endDate 结束时间 yyyy-MM-dd  false    
	{ string }	startDate 开始时间 yyyy-MM-dd  false    
	{ integer }	limit 每页显示多少条  true    
	{ integer }	page 第几页  true        
*/
export const BoxQueryBoxPaged = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/box/queryBoxPaged', 
		data: data 
	})
}
    
	
/**
 * @tags:  档案成盒  
 * @name: 档案成盒查看 
 * @param { viewStoreBoxVo } viewStoreBoxVo required   
	{ string }	boxId 成盒编码  false    
	{ string }	endDate 结束时间 yyyy-MM-dd  false    
	{ string }	startDate 开始时间 yyyy-MM-dd  false    
	{ integer }	limit 每页显示多少条  true    
	{ integer }	page 第几页  true        
*/
export const BoxViewBoxPaged = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/box/viewBoxPaged', 
		data: data 
	})
}
    
