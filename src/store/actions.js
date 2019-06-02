import {
  USER_INFO
} from './mutation-types'

import {
  login
} from '@/api/api'

export default {
  async login ({commit}, data) {
    const res = await login(data)
    if (res.code === 0) {
      data.callback && data.callback()
    }
  }
}
