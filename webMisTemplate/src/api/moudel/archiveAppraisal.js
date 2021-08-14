import axios from '../index'
	
/**
 * @tags:  档案鉴定  
 * @name: 档案鉴定-审核 
 * @param { appraisalExamineVO } appraisalExamineVO required   
	{ integer }	auditStatusId 审核状态    
	{ integer }	id id    
	{ string }	opinion 审核意见        
*/
export const ArchiveAppraisalExamineArchiveAppraisal = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/archiveAppraisal/examineArchiveAppraisal', 
		data: data 
	})
}
    
	
/**
 * @tags:  档案鉴定  
 * @name: 档案鉴定-导出 
 * @param { archivesAppraisalPaginationVO } archivesAppraisalPaginationVO required   
	{ string }	appraiser 鉴定人  false    
	{ integer }	identificationReasons 鉴定原因  false    
	{ string }	teamLeader 小组负责人  false    
	{ integer }	limit 每页显示多少条  true    
	{ integer }	page 第几页  true        
*/
export const ArchiveAppraisalExportArchiveAppraisal = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/archiveAppraisal/exportArchiveAppraisal', 
		data: data 
	})
}
    
	
/**
 * @tags:  档案鉴定  
 * @name: 档案鉴定-新增 
 * @param { archiveAppraisalVO } archiveAppraisalVO required   
	{ string }	appraisalDate 鉴定日期    
	{ string }	appraisalOpinions 鉴定意见    
	{ string }	appraiser 鉴定人    
	{ string }	archiveId 档案ID——集合    
	{ integer }	auditStatusId 审核状态——ID    
	{ string }	auditStatusName 审核状态——Name    
	{ string }	borrowId 单据号(新增时不需要传)    
	{ array }	fileVOList 档案鉴定附件    
	{ string }	groupSignatureDate 小组签字时间    
	{ integer }	id     
	{ integer }	identificationReasons 鉴定原因    
	{ integer }	openFlag 是否开放0：未开放 1：已开放    
	{ string }	opinion 审核意见    
	{ integer }	panelComments 小组意见    
	{ string }	remarks 备注    
	{ string }	teamLeader 小组负责人        
*/
export const ArchiveAppraisalInsertArchiveAppraisal = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/archiveAppraisal/insertArchiveAppraisal', 
		data: data 
	})
}
    
	
/**
 * @tags:  档案鉴定  
 * @name: 档案鉴定-查询(分页) 
 * @param { archivesAppraisalPaginationVO } archivesAppraisalPaginationVO required   
	{ string }	appraiser 鉴定人  false    
	{ integer }	identificationReasons 鉴定原因  false    
	{ string }	teamLeader 小组负责人  false    
	{ integer }	limit 每页显示多少条  true    
	{ integer }	page 第几页  true        
*/
export const ArchiveAppraisalSelectArchiveAppraisalPageList = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/archiveAppraisal/selectArchiveAppraisalPageList', 
		data: data 
	})
}
    
	
/**
 * @tags:  档案鉴定  
 * @name: 档案鉴定-修改 
 * @param { archiveAppraisalVO } archiveAppraisalVO required   
	{ string }	appraisalDate 鉴定日期    
	{ string }	appraisalOpinions 鉴定意见    
	{ string }	appraiser 鉴定人    
	{ string }	archiveId 档案ID——集合    
	{ integer }	auditStatusId 审核状态——ID    
	{ string }	auditStatusName 审核状态——Name    
	{ string }	borrowId 单据号(新增时不需要传)    
	{ array }	fileVOList 档案鉴定附件    
	{ string }	groupSignatureDate 小组签字时间    
	{ integer }	id     
	{ integer }	identificationReasons 鉴定原因    
	{ integer }	openFlag 是否开放0：未开放 1：已开放    
	{ string }	opinion 审核意见    
	{ integer }	panelComments 小组意见    
	{ string }	remarks 备注    
	{ string }	teamLeader 小组负责人        
*/
export const ArchiveAppraisalUpdateArchiveAppraisal = (data = null) => {
	return axios.request({
		method: 'post',	
		url: '/damispro/secured/archiveAppraisal/updateArchiveAppraisal', 
		data: data 
	})
}
    
