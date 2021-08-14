import axios from '../index'
	
/**
 * @tags:  监视日志  
 * @name: 监视日志查询(分页) 
 * @param { paginationVO } paginationVO required   
	{ string }	archiveNo 档案号  false    
	{ integer }	inOutStatus 出入库状态 44:非法出库 45:非法入库 46:非法出馆 47:正常入库 48:正常出库 49:正常出馆  false    
	{ string }	recordTimeEnd 记录结束时间 yyyy-MM-dd HH:mm  false    
	{ string }	recordTimeStart 记录开始时间 yyyy-MM-dd HH:mm  false    
	{ integer }	limit 每页显示多少条  true    
	{ integer }	page 第几页  true        
*/
export const MonitorQueryMonitorPaged = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/monitor/queryMonitorPaged', 
		data: data 
	})
}
    
