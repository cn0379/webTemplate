import axios from '../index'
	
/**
 * @tags:  全宗维护  
 * @name: 全宗维护-导入 
 * @param { file } file required   
*/
export const CompleteDataImport = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/Complete/completeDataImport', 
		data: data 
	})
}
    
