import axios from '../index'
	
/**
 * @tags:  库房管理  
 * @name: 库房(删除) 
 * @param { deleteVO } deleteVO required   
	{ array }	storeHouseIds 库房ID  true        
*/
export const StoreHouseDeleteStoreHouse = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/storeHouse/deleteStoreHouse', 
		data: data 
	})
}
    
	
/**
 * @tags:  排架管理  
 * @name: 排架(删除) 
 * @param { deleteVO } deleteVO required   
	{ array }	shelfIds 排架ID  true        
*/
export const StoreHouseDeleteStoreShelf = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/storeHouse/deleteStoreShelf', 
		data: data 
	})
}
    
	
/**
 * @tags:  排架管理  
 * @name: 库房排架初始化 
 * @param { storeShelfVO } storeShelfVO required   
	{ integer }	id 排架id    
	{ integer }	shelfColumn 列    
	{ string }	shelfFace 排架面，新增/修改是为排架数量，库房初始化时为排架面数量    
	{ string }	shelfNo 排架编号，新增/修改时必传，库房初始化不传    
	{ integer }	shelfNum 排架数量，新增/修改时不传，库房初始化必传    
	{ integer }	shelfRow 行    
	{ integer }	storeHouseId 库房ID        
*/
export const StoreHouseInitializeHouseShelf = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/storeHouse/initializeHouseShelf', 
		data: data 
	})
}
    
	
/**
 * @tags:  库房管理  
 * @name: 库房(新增) 
 * @param { storeHouseVO } storeHouseVO required   
	{ string }	area 库房面积    
	{ integer }	id 库房ID，新增时不传，修改时必传    
	{ string }	manager 管理人    
	{ number }	maxHumidity 最高警戒湿度    
	{ number }	maxTemperature 最高警戒温度    
	{ number }	minHumidity 最底警戒湿度    
	{ number }	minTemperature 最低警戒温度    
	{ string }	remark 备注    
	{ integer }	storeHouseId 库房ID    
	{ string }	storeHouseName 库房名称        
*/
export const StoreHouseInsertStoreHouse = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/storeHouse/insertStoreHouse', 
		data: data 
	})
}
    
	
/**
 * @tags:  排架管理  
 * @name: 排架(新增) 
 * @param { storeShelfVO } storeShelfVO required   
	{ integer }	id 排架id    
	{ integer }	shelfColumn 列    
	{ string }	shelfFace 排架面，新增/修改是为排架数量，库房初始化时为排架面数量    
	{ string }	shelfNo 排架编号，新增/修改时必传，库房初始化不传    
	{ integer }	shelfNum 排架数量，新增/修改时不传，库房初始化必传    
	{ integer }	shelfRow 行    
	{ integer }	storeHouseId 库房ID        
*/
export const StoreHouseInsertStoreShelf = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/storeHouse/insertStoreShelf', 
		data: data 
	})
}
    
	
/**
 * @tags:  库房管理  
 * @name: 库房修改 
 * @param { storeHouseVO } storeHouseVO required   
	{ string }	area 库房面积    
	{ integer }	id 库房ID，新增时不传，修改时必传    
	{ string }	manager 管理人    
	{ number }	maxHumidity 最高警戒湿度    
	{ number }	maxTemperature 最高警戒温度    
	{ number }	minHumidity 最底警戒湿度    
	{ number }	minTemperature 最低警戒温度    
	{ string }	remark 备注    
	{ integer }	storeHouseId 库房ID    
	{ string }	storeHouseName 库房名称        
*/
export const StoreHouseModifyStoreHouse = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/storeHouse/modifyStoreHouse', 
		data: data 
	})
}
    
	
/**
 * @tags:  排架管理  
 * @name: 排架修改 
 * @param { storeShelfVO } storeShelfVO required   
	{ integer }	id 排架id    
	{ integer }	shelfColumn 列    
	{ string }	shelfFace 排架面，新增/修改是为排架数量，库房初始化时为排架面数量    
	{ string }	shelfNo 排架编号，新增/修改时必传，库房初始化不传    
	{ integer }	shelfNum 排架数量，新增/修改时不传，库房初始化必传    
	{ integer }	shelfRow 行    
	{ integer }	storeHouseId 库房ID        
*/
export const StoreHouseModifyStoreShelf = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/storeHouse/modifyStoreShelf', 
		data: data 
	})
}
    
	
/**
 * @tags:  库房管理  
 * @name: 库房查询(分页) 
 * @param { paginationVO } paginationVO required   
	{ string }	storeHouseName 库房名称  false    
	{ integer }	limit 每页显示多少条  true    
	{ integer }	page 第几页  true        
*/
export const StoreHouseQueryStoreHousePaged = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/storeHouse/queryStoreHousePaged', 
		data: data 
	})
}
    
	
/**
 * @tags:  排架管理  
 * @name: 排架查询(分页) 
 * @param { paginationVO } paginationVO required   
	{ string }	shelfNo 排架编号  false    
	{ string }	storeHouseId 仓库id  false    
	{ integer }	limit 每页显示多少条  true    
	{ integer }	page 第几页  true        
*/
export const StoreHouseQueryStoreShelfPaged = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/storeHouse/queryStoreShelfPaged', 
		data: data 
	})
}
    
