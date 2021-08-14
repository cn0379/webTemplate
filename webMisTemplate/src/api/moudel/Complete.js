import axios from '../index'
	
/**
 * @tags:  全宗维护  
 * @name: 新增全宗 
 * @param { addVO } addVO required   
	{ array }	attlist 上传附件列表  false    
	{ string }	completeApplication 全宗卡片报送情况  false    
	{ string }	completeCompany 编制单位  true    
	{ string }	completeDescribe 描述  false    
	{ string }	completeNum 全宗号  true    
	{ string }	completeOriNum 原全宗号  false    
	{ string }	completeSubmission 全宗卡片报送情况  false    
	{ string }	firstLine 全宗初次入馆日期  false    
	{ string }	toolsType 检索工具编制种类  false        
*/
export const CompleteAddComplete = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/Complete/addComplete', 
		data: data 
	})
}
    
	
/**
 * @tags:  全宗维护  
 * @name: 删除全宗 
 * @param { integer } caseId required   
*/
export const CompleteDeleteComplete = (id = null) => {
	return axios.request({
		method: 'post',		
		url: `/damispro/secured/Complete/deleteComplete/${id}`,	  
	})
}
    
	
/**
 * @tags:  全宗维护  
 * @name: 修改全宗 
 * @param { modifyVO } modifyVO required   
	{ array }	attlist 上传附件列表  false    
	{ integer }	caseId 全宗主键ID  false    
	{ string }	completeApplication 全宗卡片报送情况  false    
	{ string }	completeCompany 编制单位  true    
	{ string }	completeDescribe 描述  false    
	{ string }	completeNum 全宗号  true    
	{ string }	completeOriNum 原全宗号  false    
	{ string }	completeSubmission 全宗卡片报送情况  false    
	{ string }	firstLine 全宗初次入馆日期  false    
	{ string }	toolsType 检索工具编制种类  false        
*/
export const CompleteModifyComplete = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/Complete/modifyComplete', 
		data: data 
	})
}
    
	
/**
 * @tags:  全宗维护  
 * @name: 全宗查询(分页) 
 * @param { paginationVo } paginationVo required   
	{ string }	completeCompany 编制单位  false    
	{ string }	completeNum 全宗号  false    
	{ integer }	limit 每页显示多少条  true    
	{ integer }	page 第几页  true        
*/
export const CompleteQueryCompletePaged = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/Complete/queryCompletePaged', 
		data: data 
	})
}
    
