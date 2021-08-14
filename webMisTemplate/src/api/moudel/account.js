import axios from '../index'
	
/**
 * @tags:  账户管理  
 * @name: 修改密码 
 * @param { sysPassWordChangeVO } sysPassWordChangeVO required   
	{ string }	loginName 登录名  true    
	{ string }	loginPassword 原密码  true    
	{ string }	newLoginPassword 新密码  true        
*/
export const AccountChangePassword = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/account/changePassword', 
		data: data 
	})
}
    
	
/**
 * @tags:  账户管理  
 * @name: 账户管理(新增) 
 * @param { sysAccountVO } sysAccountVO required   
	{ string }	contactPhone 联系电话  true    
	{ integer }	deptId 部门id  true    
	{ string }	loginName 登录账号  true    
	{ string }	loginPassword 登录密码  true    
	{ array }	roleIdList 角色id集合  true    
	{ string }	userName 姓名  true        
*/
export const AccountCreateSysAccount = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/account/createSysAccount', 
		data: data 
	})
}
    
	
/**
 * @tags:  账户管理  
 * @name: 账户管理(删除) 
 * @param { integer } accountId required   
*/
export const AccountDeleteAccount = (id = null) => {
	return axios.request({
		method: 'post',		
		url: `/damispro/secured/account/deleteAccount/${id}`,	  
	})
}
    
	
/**
 * @tags:  账户管理  
 * @name: 账户管理(冻结) 
 * @param { integer } accountId required   
*/
export const AccountFreezeysAccount = (id = null) => {
	return axios.request({
		method: 'post',		
		url: `/damispro/secured/account/freezeysAccount/${id}`,	  
	})
}
    
	
/**
 * @tags:  账户管理  
 * @name: 用户树  
*/
export const AccountGetAccountTree = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/account/getAccountTree', 
		data: data 
	})
}
    
	
/**
 * @tags:  账户管理  
 * @name: 账户查询(分页) 
 * @param { paginationVo } paginationVo required   
	{ integer }	deptId 部门(组织)id  false    
	{ integer }	freeze 状态 0：正常，1：冻结  false    
	{ string }	keyWord 关键词：根据姓名，角色名，部门名查询  false    
	{ integer }	limit 每页显示多少条  true    
	{ integer }	page 第几页  true        
*/
export const AccountPageQueryAccount = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/account/pageQueryAccount', 
		data: data 
	})
}
    
	
/**
 * @tags:  日志管理  
 * @name: 日志查询(分页) 
 * @param { paginationVo } paginationVo required   
	{ string }	endDate 结束时间  false    
	{ string }	operator 操作账号  false    
	{ string }	realName 操作人  false    
	{ string }	startDate 开始时间 yyyy-MM-dd  false    
	{ integer }	limit 每页显示多少条  true    
	{ integer }	page 第几页  true        
*/
export const AccountPageQueryLog = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/account/pageQueryLog', 
		data: data 
	})
}
    
	
/**
 * @tags:  账户管理  
 * @name: 账户管理(修改) 
 * @param { sysAccountVo } sysAccountVo required   
	{ integer }	accountId 账户id  true    
	{ string }	contactPhone 联系电话  true    
	{ string }	email 联系邮箱  true    
	{ array }	roleIdList 角色id集合  true    
	{ string }	userName 姓名  true        
*/
export const AccountUpdateSysAccount = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/account/updateSysAccount', 
		data: data 
	})
}
    
