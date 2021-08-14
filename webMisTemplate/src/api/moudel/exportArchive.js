import axios from '../index'
	
/**
 * @tags:  档案管理  
 * @name: 导出 
 * @param { paginationVO } paginationVO required   
	{ string }	archiveDate 成文日期  false    
	{ array }	archiveIds 档案id集合  false    
	{ string }	archiveName 题名-档案名称  false    
	{ string }	archiveNo 档号  false    
	{ string }	fondNo 全宗号  false    
	{ string }	isOpen 是否开放，参数表OPEN_STATUS  false    
	{ string }	keepTimes 保管期限，参数表STORAGE_TIME  false    
	{ string }	keySearch 一键搜: 根据关键字搜索  false    
	{ integer }	queryMode 请求方式，0：精准查询，1：一键搜  false    
	{ string }	years 年度  false    
	{ integer }	limit 每页显示多少条  true    
	{ integer }	page 第几页  true        
*/
export const ExportArchive = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/archivemanage/exportArchive', 
		data: data 
	})
}
    
