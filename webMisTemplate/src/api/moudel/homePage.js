import axios from '../index'
	
/**
 * @tags:  首页  
 * @name: 消息查询 
 * @param { paginationVo } paginationVo required   
	{ string }	announceName 公告名称  false    
	{ string }	readStatus 阅读状态  false    
	{ integer }	limit 每页显示多少条  true    
	{ integer }	page 第几页  true        
*/
export const HomePageGetInfo = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/homePage/getInfo', 
		data: data 
	})
}
    
	
/**
 * @tags:  首页  
 * @name: 公告查询 
 * @param { paginationVo } paginationVo required   
	{ string }	announceName 公告名称  false    
	{ string }	readStatus 阅读状态  false    
	{ integer }	limit 每页显示多少条  true    
	{ integer }	page 第几页  true        
*/
export const HomePageGetMessage = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/homePage/getMessage', 
		data: data 
	})
}
    
	
/**
 * @tags:  首页  
 * @name: 消息提醒阅读 
 * @param { integer } infoId required   
*/
export const HomePageReadInfo = (id = null) => {
	return axios.request({
		method: 'post',		
		url: `/damispro/secured/homePage/readInfo/${id}`,	  
	})
}
    
	
/**
 * @tags:  首页  
 * @name: 通知公告阅读 
 * @param { integer } messageId required   
*/
export const HomePageReadMessage = (id = null) => {
	return axios.request({
		method: 'post',		
		url: `/damispro/secured/homePage/readMessage/${id}`,	  
	})
}
    
