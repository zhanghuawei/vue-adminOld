import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)

import app from './modules/app.js' // userInfo
import userInfo from './modules/userInfo.js' // userInfo
import permission from './modules/permisson.js'
import tagsView from './modules/tagsView.js'
import getters from './getters.js'

const store = new vuex.Store({
  modules: {
    app,
    userInfo,
    permission,
    tagsView
  },
  getters
})

export default store
