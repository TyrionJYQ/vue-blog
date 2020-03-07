import { Store } from 'vuex'
import actions from './actions'
import { LOGGIN, AFTER_LOGIN } from './mutation-types'
import registerPlugins from '@helper/registerPlugins'
import Vue from 'vue'
registerPlugins(Vue)

export default new Store({
  state: {
    login: {
      isLogin: false,
      showLoading: false
    }
  },
  actions,
  mutations: {
    [LOGGIN] (state) {
      state.login = {
        isLogin: false,
        showLoading: true
      }
    },
    [AFTER_LOGIN] (state) {
      state.login = {
        isLogin: true,
        showLoading: false
      }
    }
  }
})
