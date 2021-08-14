import axios from '../index'
	
/**
 * @tags:  公告管理  
 * @name: 新增公告 
 * @param { addVO } addVO required   
	{ string }	announceContent 内容  true    
	{ string }	announceName 标题  false    
	{ array }	attlist 上传附件列表  false    
	{ string }	deadLine 截止时间 yyyy-MM-dd  false    
	{ array }	receiverIds 接收人id  false        
*/
export const MessageAddMessage = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/message/addMessage', 
		data: data 
	})
}
    
	
/**
 * @tags:  档案成盒  
 * @name: 删除档案成盒 
 * @param { deleteVO } deleteVO required   
	{ array }	boxManageIds 成盒主键ID  true        
*/
export const MessageDeleteBox = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/message/deleteBox', 
		data: data 
	})
}
    
	
/**
 * @tags:  公告管理  
 * @name: 删除公告 
 * @param { integer } messageId required   
*/
export const MessageDeleteMessage = (id = null) => {
	return axios.request({
		method: 'post',		
		url: `/damispro/secured/message/deleteMessage/${id}`,	  
	})
}
    
	
/**
 * @tags:  公告管理  
 * @name: 修改公告 
 * @param { modifyVO } modifyVO required   
	{ string }	announceContent 内容  true    
	{ string }	announceName 标题  false    
	{ array }	attlist 上传附件列表  false    
	{ string }	deadLine 截止时间 yyyy-MM-dd HH  false    
	{ integer }	messageId 公告ID  true    
	{ array }	receiverIds 接收人id  false        
*/
export const MessageModifyMessage = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/message/modifyMessage', 
		data: data 
	})
}
    
	
/**
 * @tags:  公告管理  
 * @name: 公告查询(分页) 
 * @param { paginationVo } paginationVo required   
	{ string }	announceName 公告名称  false    
	{ string }	readStatus 阅读状态  false    
	{ integer }	limit 每页显示多少条  true    
	{ integer }	page 第几页  true        
*/
export const MessageQueryMessagePaged = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/message/queryMessagePaged', 
		data: data 
	})
}
    
