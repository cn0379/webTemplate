import axios from '../index'
	
/**
 * @tags:  统计分析-异常信息  
 * @name: 统计分析-异常信息导出 
 * @param { alertVO } alertVO required   
	{ string }	endTime 结束时间 yy-MM-dd HH:mm  false    
	{ integer }	isHandled 是否处理 1:已处理; 0:未处理; null:全部  false    
	{ string }	startTime 开始时间 yy-MM-dd HH:mm  false    
	{ integer }	limit 每页显示多少条  true    
	{ integer }	page 第几页  true        
*/
export const AlertExport = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/alert/export', 
		data: data 
	})
}
    
	
/**
 * @tags:  统计分析-异常信息  
 * @name: 统计分析-异常信息处理 
 * @param { modifyVO } modifyVO required   
	{ integer }	alertId 异常主键id    
	{ string }	info 处理说明        
*/
export const AlertModifyAlert = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/alert/modifyAlert', 
		data: data 
	})
}
    
	
/**
 * @tags:  统计分析-异常信息  
 * @name: 统计分析-异常信息 
 * @param { alertVO } alertVO required   
	{ string }	endTime 结束时间 yy-MM-dd HH:mm  false    
	{ integer }	isHandled 是否处理 1:已处理; 0:未处理; null:全部  false    
	{ string }	startTime 开始时间 yy-MM-dd HH:mm  false    
	{ integer }	limit 每页显示多少条  true    
	{ integer }	page 第几页  true        
*/
export const AlertQueryAlert = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/alert/queryAlert', 
		data: data 
	})
}
    
