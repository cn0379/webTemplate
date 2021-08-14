import axios from '../index'
	
/**
 * @tags:  标签管理  
 * @name: 档案节点查询  
*/
export const TagManageArchivesNodeQuery = (data = null) => {
	return axios.request({
		method: 'get',	
		url: '/damispro/secured/tagManage/archivesNodeQuery', 
		params: data 
	})
}
    
	
/**
 * @tags:  标签管理  
 * @name: 标签管理-新增发卡 
 * @param { integer } id required   
*/
export const TagManageInsertArchiveTagManageHairpin = (id = null) => {
	return axios.request({
		method: 'post',		
		url: `/damispro/secured/tagManage/insertArchiveTagManageHairpin/${id}`,	  
	})
}
    
	
/**
 * @tags:  标签管理  
 * @name: 标签管理-查询（分页） 
 * @param { archivesTagManagepaginationVO } archivesTagManagepaginationVO required   
	{ string }	archiveName 题名  false    
	{ string }	archiveNo 档案号  false    
	{ integer }	archiveState 档案状态  false    
	{ integer }	nodeInfoId 节点ID  false    
	{ integer }	limit 每页显示多少条  true    
	{ integer }	page 第几页  true        
*/
export const TagManageQueryArchiveTagManagePageList = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/tagManage/queryArchiveTagManagePageList', 
		data: data 
	})
}
    
	
/**
 * @tags:  标签管理  
 * @name: 标签管理-初始化 
 * @param { integer } id required   
*/
export const TagManageUpdateArchiveTagManageInitialization = (id = null) => {
	return axios.request({
		method: 'post',		
		url: `/damispro/secured/tagManage/updateArchiveTagManageInitialization/${id}`,	  
	})
}
    
	
/**
 * @tags:  标签管理  
 * @name: 标签管理-解绑 
 * @param { integer } id required   
*/
export const TagManageUpdateArchiveTagManageUnBundling = (id = null) => {
	return axios.request({
		method: 'post',		
		url: `/damispro/secured/tagManage/updateArchiveTagManageUnBundling/${id}`,	  
	})
}
    
