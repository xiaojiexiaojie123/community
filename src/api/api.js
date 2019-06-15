import axios from './http.js'

// 注册
export const loginUp = (params) => axios.post('/user/logup', params)

// 登陆
export const login = (params) => axios.post('/user/login', params)

// 获取列表配置
export const getConfig = (params) => axios.get('/allConfig/getList', params)

// 旅游
export const getTourAll = (params) => axios.get('/tour/getall', params)

// 新闻
export const getNewsAll = (params) => axios.get('/news/getList', params)

// 视频
export const getMovieAll = (params) => axios.get('/video/getall', params)

// 爱心社区
export const getCommunityAll = (params) => axios.get('/love/getall', params)

// 活动发布
export const getActivityAll = (params) => axios.get('/activity/getall', params)

// 活动发布
export const AddActivity = (params) => axios.get('/activity/getall', params)

// 获取验证码
export const getCode = (params) => axios.get('/user/getVerificationCode', params)

// 忘记密码
export const lostPsw = (params) => axios.post('/user/forget', params)
