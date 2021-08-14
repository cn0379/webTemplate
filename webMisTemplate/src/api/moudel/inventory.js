import axios from '../index'
	
/**
 * @tags:  盘库管理  
 * @name: 生成盘库单（排架号） 
 * @param { inventoryDetailListBentVOList } inventoryDetailListBentVOList required   
*/
export const InventoryBent = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/inventory/bent', 
		data: data 
	})
}
    
	
/**
 * @tags:  盘库管理  
 * @name: 取消盘库 
 * @param { integer } idList required   
*/
export const InventoryCancel = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/inventory/cancel', 
		data: data 
	})
}
    
	
/**
 * @tags:  盘库管理  
 * @name: 生成盘库单（全宗号） 
 * @param { inventoryDetailListTotalVOList } inventoryDetailListTotalVOList required   
*/
export const InventoryGenerate = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/inventory/generate', 
		data: data 
	})
}
    
	
/**
 * @tags:  盘库管理  
 * @name: 待盘档案数量查询 
 * @param { integer } id required  
 * @param { ref } way required   
*/
export const InventoryQueryAmount = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/inventory/queryAmount', 
		data: data 
	})
}
    
	
/**
 * @tags:  盘库管理  
 * @name: 盘库管理查询(分页) 
 * @param { inventoryPaginationVO } inventoryPaginationVO required   
	{ string }	inventoryBeginTime 盘库开始时间  false    
	{ string }	inventoryEndTime 盘库结束时间  false    
	{ string }	inventoryMode 盘库方式  false    
	{ string }	inventoryNo 盘库单号  false    
	{ integer }	limit 每页显示多少条  true    
	{ integer }	page 第几页  true        
*/
export const InventoryQueryInventoryPaged = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/inventory/queryInventoryPaged', 
		data: data 
	})
}
    
	
/**
 * @tags:  盘库管理  
 * @name: 历年盘库清单查询(分页) 
 * @param { inventoryDetailListPaginationVO } inventoryDetailListPaginationVO required   
	{ integer }	inventoryCategory 盘库方式  true    
	{ string }	inventoryMode 盘库方式(1:按照全宗号盘库 2:按排架号盘库)  true    
	{ integer }	limit 每页显示多少条  true    
	{ integer }	page 第几页  true        
*/
export const InventoryQueryInventoryPagedDeatilList = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/inventory/queryInventoryPaged/deatilList', 
		data: data 
	})
}
    
	
/**
 * @tags:  盘库管理  
 * @name: 查看档案清单 
 * @param { integer } detailId required   
*/
export const InventorySeeFileList = (id = null) => {
	return axios.request({
		method: 'post',		
		url: `/damispro/secured/inventory/seeFileList/${id}`,	  
	})
}
    
