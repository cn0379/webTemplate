import axios from '../index'
	
/**
 * @tags:  数据字典  
 * @name: 新增参数 
 * @param { addVO } addVO required   
	{ string }	memo 备注  true    
	{ string }	paramExplain 参数描述  false    
	{ string }	paramName 参数名称  true    
	{ string }	paramType 参数类型  true        
*/
export const ParamAddParameter = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/param/addParameter', 
		data: data 
	})
}
    
	
/**
 * @tags:  数据字典  
 * @name: 删除参数 
 * @param { integer } paramId required   
*/
export const ParamDeleteParameter = (id = null) => {
	return axios.request({
		method: 'post',		
		url: `/damispro/secured/param/deleteParameter/${id}`,	  
	})
}
    
	
/**
 * @tags:  数据字典  
 * @name: 参数下拉框  
*/
export const ParamDropDownParameter = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/param/dropDownParameter', 
		data: data 
	})
}
    
	
/**
 * @tags:  数据字典  
 * @name: 修改参数 
 * @param { modifyVO } modifyVO required   
	{ string }	memo 备注  true    
	{ string }	paramExplain 参数描述  false    
	{ integer }	paramId 参数ID  true    
	{ string }	paramName 参数名称  true    
	{ string }	paramType 参数类型  true        
*/
export const ParamModifyParameter = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/param/modifyParameter', 
		data: data 
	})
}
    
	
/**
 * @tags:  数据字典  
 * @name: 根据参数类型查询参数 
 * @param { sysParameterQueryVO } sysParameterQueryVO required   
	{ string }	paramType 参数类型  true        
*/
export const ParamQueryByType = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/param/queryByType', 
		data: data 
	})
}
    
	
/**
 * @tags:  数据字典  
 * @name: 参数查询(分页) 
 * @param { paginationVo } paginationVo required   
	{ string }	paramName 参数名称  false    
	{ string }	paramType 参数类型  false    
	{ integer }	limit 每页显示多少条  true    
	{ integer }	page 第几页  true        
*/
export const ParamQueryParameterPaged = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/param/queryParameterPaged', 
		data: data 
	})
}
    
