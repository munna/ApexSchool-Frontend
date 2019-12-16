import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    user: { name: '', email: '', accessToken: '' }
  },
  mutations: {
    doLogin (state, user) {
      localStorage.setItem('app-token', user.accessToken)
      state.user = Object.assign({}, user)
    },
    doLogout (state, user) {
      state.user = { name: '', email: '', accessToken: '' }
    }
  },
  actions: {
    performLogin (context, user) {
      context.commit('doLogin', user)
    },
    performLogout (context, user) {
      context.commit('doLogout', user)
    }
  }
})
export default store
