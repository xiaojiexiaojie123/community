import axios from './http.js'

// 注册
export const loginUp = (params) => axios.post('http://192.168.0.102:8080/user/logup', params)

// 登陆
export const login = (params) => axios.post('http://192.168.0.102:8080/user/login', params)

// 获取列表配置
export const getConfig = (params) => axios.get('http://192.168.0.102:8080/allConfig/getList', params)

// 旅游
export const getTourAll = (params) => axios.get('http://192.168.0.102:8080/tour/getall', params)

// 新闻
export const getNewsAll = (params) => axios.get('http://192.168.0.102:8080/news/getList', params)

// 视频
export const getMovieAll = (params) => axios.get('http://192.168.0.102:8080/video/getall', params)

// 爱心社区
export const getCommunityAll = (params) => axios.get('http://192.168.0.102:8080/love/getall', params)

// 活动发布
export const getActivityAll = (params) => axios.get('http://192.168.0.102:8080/activity/getall', params)

// 活动发布
export const AddActivity = (params) => axios.get('http://192.168.0.102:8080/activity/getall', params)

// 获取验证码
export const getCode = (params) => axios.get('http://192.168.0.102:8080/user/getVerificationCode', params)

// 忘记密码
export const lostPsw = (params) => axios.post('http://192.168.0.102:8080/user/forget', params)