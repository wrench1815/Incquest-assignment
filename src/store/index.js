import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || '',
  },
  getters: {
    isAuthenticated(state) {
      return state.token ? true : false
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      localStorage.setItem('token', token)
    },
  },
  actions: {},
  modules: {},
})
