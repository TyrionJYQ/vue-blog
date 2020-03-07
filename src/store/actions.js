import { LOGGIN, AFTER_LOGIN } from './mutation-types'

export default {
  Login ({ commit }) {
    commit(LOGGIN)
  },
  AfterLogin ({ commit }) {
    commit(AFTER_LOGIN)
  }
}
