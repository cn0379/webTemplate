import axios from '../index'
	
/**
 * @tags:  系统菜单  
 * @name: 获取登录人信息  
*/
export const GetAccountInfo = (data = null) => {
	return axios.request({
		method: 'get',	
		url: '/damispro/secured/getAccountInfo', 
		params: data 
	})
}
    
