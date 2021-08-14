import axios from '../index'
	
/**
 * @tags:  登录  
 * @name: 验证码  
*/
export const DamisproCaptcha = (data = null) => {
	return axios.request({
		method: 'get',	
		url: '/damispro/captcha', 
		params: data 
	})
}
    
	
/**
 * @tags:  file-upload-controller  
 * @name: fileUpload 
 * @param { file } file    
*/
export const DamisproFileUpload = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/fileUpload', 
		data: data 
	})
}
    
	
/**
 * @tags:  登录  
 * @name: 登录接口 
 * @param { loginVO } loginVO required   
	{ string }	captcha 验证码  true    
	{ string }	password 密码  true    
	{ string }	username 登录名  true        
*/
export const DamisproLogin = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/login', 
		data: data 
	})
}
    
