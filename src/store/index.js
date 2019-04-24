import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)

import userInfo from './modules/userInfo.js' // userInfo
console.log(userInfo)
export default new vuex.Store({
  modules: {
    userInfo
  }
})
