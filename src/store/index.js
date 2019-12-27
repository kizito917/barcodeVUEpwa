import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    indexPageGreeting: 'Hi Buddy, Howdy? Try out our barcode Generator',
    fullName: ''
  },
  mutations: {
    getLocalData: (state, payload) => {
      state.fullName = payload.fullName
      console.log(payload)
    }
  },
  actions: {
    getLocalData:(context) => {
      const me = JSON.parse(localStorage.getItem('userData'))
      context.commit('data', me)
    }
  },
  modules: {
  }
})
