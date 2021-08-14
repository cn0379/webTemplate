import axios from '../index'
	
/**
 * @tags:  角色管理  
 * @name: 角色(删除) 
 * @param { integer } roleId required   
*/
export const RoleDeleteRole = (id = null) => {
	return axios.request({
		method: 'post',		
		url: `/damispro/secured/role/deleteRole/${id}`,	  
	})
}
    
	
/**
 * @tags:  角色管理  
 * @name: 角色查询(下拉框) 
 * @param { integer } deptId    
*/
export const RoleDropDownRoleList = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/role/dropDownRoleList', 
		data: data 
	})
}
    
	
/**
 * @tags:  角色管理  
 * @name: 角色(冻结) 
 * @param { integer } roleId required   
*/
export const RoleFreezeRole = (id = null) => {
	return axios.request({
		method: 'post',		
		url: `/damispro/secured/role/freezeRole/${id}`,	  
	})
}
    
	
/**
 * @tags:  角色管理  
 * @name: 角色(新增) 
 * @param { sysRoleVO } sysRoleVO required   
	{ integer }	departmentId 部门id  true    
	{ array }	menuIdList 资源菜单id集合  true    
	{ string }	roleDescription 角色描述  false    
	{ string }	roleName 角色名称  true        
*/
export const RoleInsertRole = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/role/insertRole', 
		data: data 
	})
}
    
	
/**
 * @tags:  角色管理  
 * @name: 角色查询(分页) 
 * @param { paginationVO } paginationVO required   
	{ integer }	deptId 部门(组织)id  false    
	{ integer }	limit 每页显示多少条  true    
	{ integer }	page 第几页  true        
*/
export const RolePageQueryRole = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/role/pageQueryRole', 
		data: data 
	})
}
    
	
/**
 * @tags:  角色管理  
 * @name: 角色(修改) 
 * @param { sysRoleVO } sysRoleVO required   
	{ integer }	id 角色id  true    
	{ array }	menuIdList 资源菜单id集合  true    
	{ string }	roleDescription 角色描述  false    
	{ string }	roleName 角色名称  true        
*/
export const RoleUpdateRole = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/role/updateRole', 
		data: data 
	})
}
    
