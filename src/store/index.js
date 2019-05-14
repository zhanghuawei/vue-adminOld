import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)

import userInfo from './modules/userInfo.js' // userInfo
import permission from './modules/permisson.js'
import getters from './getters.js'

const store = new vuex.Store({
  modules: {
    userInfo,
    permission
  },
  getters
})

export default store
