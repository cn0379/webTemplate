import axios from '../index'
	
/**
 * @tags:  组织部门  
 * @name: 组织(删除) 
 * @param { integer } departmentId required   
*/
export const DeptDeleteDept = (id = null) => {
	return axios.request({
		method: 'post',		
		url: `/damispro/secured/dept/deleteDept/${id}`,	  
	})
}
    
	
/**
 * @tags:  组织部门  
 * @name: 组织(冻结) 
 * @param { integer } departmentId required   
*/
export const DeptFreezeDept = (id = null) => {
	return axios.request({
		method: 'post',		
		url: `/damispro/secured/dept/freezeDept/${id}`,	  
	})
}
    
	
/**
 * @tags:  系统菜单  
 * @name: 菜单(冻结) 
 * @param { integer } id required   
*/
export const DeptFreezeSysResource = (id = null) => {
	return axios.request({
		method: 'post',		
		url: `/damispro/secured/dept/freezeSysResource/${id}`,	  
	})
}
    
	
/**
 * @tags:  组织部门  
 * @name: 获取所属组织下拉框列表  
*/
export const DeptGetDepartmentDropDownList = (data = null) => {
	return axios.request({
		method: 'get',	
		url: '/damispro/secured/dept/getDepartmentDropDownList', 
		params: data 
	})
}
    
	
/**
 * @tags:  系统菜单  
 * @name: 根据部门，获取权限树到按钮 
 * @param { integer } deptId    
*/
export const DeptGetDeptMenuTreeToButton = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/dept/getDeptMenuTreeToButton', 
		data: data 
	})
}
    
	
/**
 * @tags:  系统菜单  
 * @name: 根据部门，获取权限树到页面 
 * @param { integer } deptId    
*/
export const DeptGetDeptMenuTreeToPage = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/dept/getDeptMenuTreeToPage', 
		data: data 
	})
}
    
	
/**
 * @tags:  组织部门  
 * @name: 组织树  
*/
export const DeptGetDeptTree = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/dept/getDeptTree', 
		data: data 
	})
}
    
	
/**
 * @tags:  系统菜单  
 * @name: 菜单树  
*/
export const DeptGetMenuTree = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/dept/getMenuTree', 
		data: data 
	})
}
    
	
/**
 * @tags:  组织部门  
 * @name: 组织(新增) 
 * @param { sysDepartmentAddVO } sysDepartmentAddVO required   
	{ string }	departmentCode 部门编码  true    
	{ string }	departmentName 组织名称  true    
	{ integer }	listOrder 排序  true    
	{ array }	menuIdList 资源菜单id集合  true    
	{ integer }	parentDepartmentId 上级组织id，取当前选中节点的departmentId  true    
	{ integer }	parentDepartmentLevel 上级组织层级，将当前选中组织的departmentLevel传入  true        
*/
export const DeptInsertDept = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/dept/insertDept', 
		data: data 
	})
}
    
	
/**
 * @tags:  系统菜单  
 * @name: 菜单新增 
 * @param { addVO } addVO required   
	{ integer }	parentResourceId 父级节点id  true    
	{ string }	resourceDescription 描述  true    
	{ string }	resourceName 资源名称  true    
	{ string }	resourceUrl 资源URI  false        
*/
export const DeptInsertSysResource = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/dept/insertSysResource', 
		data: data 
	})
}
    
	
/**
 * @tags:  组织部门  
 * @name: 组织查询(分页) 
 * @param { paginationVO } paginationVO required   
	{ integer }	deptId 部门(组织)id, 不传则为全部  false    
	{ integer }	limit 每页显示多少条  true    
	{ integer }	page 第几页  true        
*/
export const DeptPageQueryDept = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/dept/pageQueryDept', 
		data: data 
	})
}
    
	
/**
 * @tags:  系统菜单  
 * @name: 菜单查询(分页) 
 * @param { paginationVo } paginationVo required   
	{ integer }	resourceId 上级资源id  false    
	{ string }	resourceName 资源名称  false    
	{ integer }	limit 每页显示多少条  true    
	{ integer }	page 第几页  true        
*/
export const DeptQueryMenuPaged = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/dept/queryMenuPaged', 
		data: data 
	})
}
    
	
/**
 * @tags:  组织部门  
 * @name: 组织修改 
 * @param { editVO } editVO required   
	{ string }	departmentCode 部门编码  true    
	{ string }	departmentName 组织名称  true    
	{ integer }	id 组织id  false    
	{ integer }	listOrder 排序  true    
	{ array }	menuIdList 资源菜单id集合  true        
*/
export const DeptUpdateDept = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/dept/updateDept', 
		data: data 
	})
}
    
	
/**
 * @tags:  系统菜单  
 * @name: 菜单修改 
 * @param { editVo } editVo required   
	{ integer }	id 资源id  false    
	{ string }	resourceDescription 描述  true    
	{ string }	resourceName 资源名称  true    
	{ string }	resourceUrl 资源URI  false        
*/
export const DeptUpdateSysResource = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/dept/updateSysResource', 
		data: data 
	})
}
    
