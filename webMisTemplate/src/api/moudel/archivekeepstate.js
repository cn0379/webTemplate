import axios from '../index'
	
/**
 * @tags:  档案保管状态  
 * @name: 新增档案保管状态 
 * @param { addVO } addVO required   
	{ array }	archiveIds 档号    
	{ number }	checkRatio 抽查比例    
	{ string }	checkTime 检查时间 yyyy-MM-dd    
	{ integer }	checkWay 检查方式(0：抽查, 1：全查)    
	{ string }	inspector 检查人    
	{ string }	memo 备注    
	{ string }	problems 发现问题    
	{ string }	processingResult 处理结果    
	{ string }	takeSteps 采取措施        
*/
export const ArchivekeepstateAddArchiveKeepState = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/archivekeepstate/addArchiveKeepState', 
		data: data 
	})
}
    
	
/**
 * @tags:  档案保管状态  
 * @name: 删除档案保管状态 
 * @param { deleteVO } deleteVO required   
	{ array }	keepStateIds 档案保管状态ID  true        
*/
export const ArchivekeepstateDeleteArchiveKeepState = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/archivekeepstate/deleteArchiveKeepState', 
		data: data 
	})
}
    
	
/**
 * @tags:  档案保管状态  
 * @name: 修改档案保管状态 
 * @param { modifyVO } modifyVO required   
	{ array }	archiveIds 档号    
	{ number }	checkRatio 抽查比例    
	{ string }	checkTime 检查时间 yyyy-MM-dd    
	{ integer }	checkWay 检查方式(0：抽查, 1：全查)    
	{ string }	inspector 检查人    
	{ integer }	keepStateId 保存主键id    
	{ string }	memo 备注    
	{ string }	problems 发现问题    
	{ string }	processingResult 处理结果    
	{ string }	takeSteps 采取措施        
*/
export const ArchivekeepstateModifyArchiveKeepState = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/archivekeepstate/modifyArchiveKeepState', 
		data: data 
	})
}
    
	
/**
 * @tags:  档案保管状态  
 * @name: 档案保管状态查询(分页) 
 * @param { archiveKeepStatePaginationVO } archiveKeepStatePaginationVO required   
	{ string }	checkTime 检查时间 yyyy-MM-dd  false    
	{ integer }	limit 每页显示多少条  true    
	{ integer }	page 第几页  true        
*/
export const ArchivekeepstateQueryArchiveKeepStatePaged = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/archivekeepstate/queryArchiveKeepStatePaged', 
		data: data 
	})
}
    
