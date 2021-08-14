import axios from '../index'
	
/**
 * @tags:  统计分析-馆藏数量  
 * @name: 馆藏数量查询 
 * @param { queryVO } queryVO required   
	{ string }	endTime 结束时间 YYYY 例：2021    
	{ integer }	queryMode 请求方式，0：精准查询，1：一键搜    
	{ string }	startTime 开始时间 YYYY 例：2021        
*/
export const ArchiveCountQueryArchiveCount = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/archiveCount/queryArchiveCount', 
		data: data 
	})
}
    
	
/**
 * @tags:  统计分析-馆藏数量  
 * @name: 馆藏数量导出 
 * @param { queryVO } queryVO required   
	{ string }	endTime 结束时间 YYYY 例：2021    
	{ integer }	queryMode 请求方式，0：精准查询，1：一键搜    
	{ string }	startTime 开始时间 YYYY 例：2021        
*/
export const ArchiveCountQueryArchiveExport = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/archiveCount/queryArchiveExport', 
		data: data 
	})
}
    
