import axios from '../index'
	
/**
 * @tags:  物联设备管理  
 * @name: 物联设备新增 
 * @param { deviceManageAddVO } deviceManageAddVO required   
	{ string }	channel 频道  false    
	{ string }	devNo 编号  false    
	{ integer }	deviceReaderId 天线ID  false    
	{ string }	inOutCode 入/出口  false    
	{ string }	ip ip  true    
	{ integer }	isEnabled 启用状态 0：未启用 1：启用  true    
	{ string }	locationDescrition 位置描述  true    
	{ string }	locationName 位置名称  true    
	{ number }	maxHumidity   false    
	{ number }	maxTemperature   false    
	{ number }	minHumidity   false    
	{ number }	minTemperature   false    
	{ string }	passWord 密码  false    
	{ string }	port 端口  true    
	{ string }	readerName 名称  true    
	{ integer }	storeHouseId 库房ID  true    
	{ integer }	typeId 设备类型Id  true    
	{ string }	typeName 设备类型名称  false    
	{ string }	userName 用户名  false        
*/
export const DeviceManageDeviceManageAdd = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/deviceManage/deviceManageAdd', 
		data: data 
	})
}
    
	
/**
 * @tags:  物联设备管理  
 * @name: 物联设备删除 
 * @param { deviceManageDeleteVO } deviceManageDeleteVO required   
	{ integer }	deviceManageId 设备表Id  true    
	{ integer }	locationId 位置表Id  true    
	{ integer }	typeId 设备类型Id  true        
*/
export const DeviceManageDeviceManageDelete = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/deviceManage/deviceManageDelete', 
		data: data 
	})
}
    
	
/**
 * @tags:  物联设备管理  
 * @name: 物联设备查看 
 * @param { deviceManageDetailQueryVO } deviceManageDetailQueryVO required   
	{ integer }	deviceManageId 设备管理ID  true    
	{ integer }	typeId 设备类型Id  true        
*/
export const DeviceManageDeviceManageDetail = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/deviceManage/deviceManageDetail', 
		data: data 
	})
}
    
	
/**
 * @tags:  物联设备管理  
 * @name: 物联设备修改 
 * @param { deviceManageUpdateVO } deviceManageUpdateVO required   
	{ string }	channel 频道  false    
	{ integer }	deviceManageId 设备表Id  true    
	{ integer }	deviceReaderId 关联天线ID  false    
	{ string }	inOutCode 入/出口  false    
	{ string }	ip ip  true    
	{ integer }	isEnabled 启用状态 0：未启用 1：启用  true    
	{ string }	locationDescrition 位置描述  true    
	{ integer }	locationId 位置表Id  true    
	{ string }	locationName 位置名称  true    
	{ string }	passWord 密码  false    
	{ string }	port 端口  true    
	{ string }	readerName 名称  true    
	{ integer }	storeHouseId 库房ID  false    
	{ integer }	temperatureReaderId 温湿度表Id  false    
	{ integer }	txReaderId 天线ID  false    
	{ integer }	typeId 设备类型Id  true    
	{ string }	typeName 设备类型名称  false    
	{ string }	userName 用户名  false    
	{ integer }	videoMonitorId 视频监控表Id  false        
*/
export const DeviceManageDeviceManageUpdate = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/deviceManage/deviceManageUpdate', 
		data: data 
	})
}
    
	
/**
 * @tags:  物联设备管理  
 * @name: 物联设备管理查询(分页) 
 * @param { paginationVO } paginationVO required   
	{ integer }	deviceTypeId 设备类型Id  false    
	{ string }	locationName 位置名称  false    
	{ integer }	limit 每页显示多少条  true    
	{ integer }	page 第几页  true        
*/
export const DeviceManageQueryDeviceManagePaged = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/deviceManage/queryDeviceManagePaged', 
		data: data 
	})
}
    
	
/**
 * @tags:  物联设备管理  
 * @name: 天线设备下拉框  
*/
export const DeviceManageTxListQuery = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/deviceManage/txListQuery', 
		data: data 
	})
}
    
