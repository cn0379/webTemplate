import axios from '../index'
	
/**
 * @tags:  档案划控  
 * @name: 档案划控-删除 
 * @param { integer } id required   
*/
export const ArchivePlanningControlDelArchivePlanningControl = (id = null) => {
	return axios.request({
		method: 'post',		
		url: `/damispro/secured/archivePlanningControl/delArchivePlanningControl/${id}`,	  
	})
}
    
	
/**
 * @tags:  档案划控  
 * @name: 档案划控-分配 
 * @param { planningControlDistributionVO } planningControlDistributionVO required   
	{ string }	assignPeople 分配人员(关联user表) 传人员ID 逗号隔开    
	{ integer }	id     
	{ integer }	planningControlStatus 状态 0：待分配 1：已分配        
*/
export const ArchivePlanningControlDistributionArchivePlanningControl = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/archivePlanningControl/distributionArchivePlanningControl', 
		data: data 
	})
}
    
	
/**
 * @tags:  档案划控  
 * @name: 档案划控-新增 
 * @param { planningControlVO } planningControlVO required   
	{ string }	archiveId 档案号-集合    
	{ string }	assignPeople 分配人员(关联user表)    
	{ string }	assignPeopleName 分配人员姓名    
	{ array }	fileVOList 档案划控附件    
	{ integer }	id     
	{ string }	planningControlDate 划控时间    
	{ string }	planningControlDescribe 描述    
	{ string }	planningControlName 划控名称(新增时不需要传)    
	{ integer }	planningControlNumber 划控数量    
	{ string }	planningControlPeople 划控人    
	{ integer }	planningControlStatus 状态 0： 待分配 1：已分配        
*/
export const ArchivePlanningControlInsertArchivePlanningControl = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/archivePlanningControl/insertArchivePlanningControl', 
		data: data 
	})
}
    
	
/**
 * @tags:  档案划控  
 * @name: 档案划控-查询（分页） 
 * @param { paginationVO } paginationVO required   
	{ string }	beginTime 开始时间  false    
	{ string }	endTime 结束时间  false    
	{ string }	planningControlName 划控名称  false    
	{ string }	planningControlPeople 划控人  false    
	{ integer }	limit 每页显示多少条  true    
	{ integer }	page 第几页  true        
*/
export const ArchivePlanningControlSelectArchivePlanningControlPageList = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/archivePlanningControl/selectArchivePlanningControlPageList', 
		data: data 
	})
}
    
	
/**
 * @tags:  档案划控  
 * @name: 档案划控-修改 
 * @param { planningControlVO } planningControlVO required   
	{ string }	archiveId 档案号-集合    
	{ string }	assignPeople 分配人员(关联user表)    
	{ string }	assignPeopleName 分配人员姓名    
	{ array }	fileVOList 档案划控附件    
	{ integer }	id     
	{ string }	planningControlDate 划控时间    
	{ string }	planningControlDescribe 描述    
	{ string }	planningControlName 划控名称(新增时不需要传)    
	{ integer }	planningControlNumber 划控数量    
	{ string }	planningControlPeople 划控人    
	{ integer }	planningControlStatus 状态 0： 待分配 1：已分配        
*/
export const ArchivePlanningControlUpdateArchivePlanningControl = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/archivePlanningControl/updateArchivePlanningControl', 
		data: data 
	})
}
    
