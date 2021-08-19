import Vue from 'vue'
import Vuex from 'vuex'
import Search from '@vuex/modules/Wishlist'

Vue.use(Vuex)

export const createStore = () => new Vuex.Store({
  modules: {
    Search
  },
})