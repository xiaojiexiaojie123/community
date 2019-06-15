import {
  USER_INFO
} from './mutation-types'

import router from './../router'

import {
  login
} from '@/api/api'

export default {
  async login ({commit}, data) {
    const res = await login(data)
    if (res.code === 0) {
      commit('user_info', res.data)
      localStorage.setItem('userinfo', res.data)
      router.replace('/layout/index')
    }
  }
}
