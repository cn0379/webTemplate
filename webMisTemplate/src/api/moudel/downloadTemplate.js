import axios from '../index'
	
/**
 * @tags:  全宗维护  
 * @name: 全宗维护-导入模板下载  
*/
export const DownloadTemplate = (data = null) => {
	return axios.request({
		method: 'get',	
		url: '/damispro/Complete/downloadTemplate', 
		params: data 
	})
}
    
