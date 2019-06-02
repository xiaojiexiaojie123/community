import axios from './http.js'

// 注册
export const loginUp = (params) => axios.post('user/logup', params)

// 登陆
export const login = (params) => axios.post('user/login', params)
