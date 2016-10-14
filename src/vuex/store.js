/**
 * Created by rhb on 2016/10/11.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  user: {},
  shoppingCart: []

}
const mutations = {
  // 购物车
  ADD_CART: function (state, newItem) {
    state.shoppingCart.push(newItem)
  },
  DELETE_CART: function (state, item) {
    state.shoppingCart.$remove(item)
  },
  ADD_LIST_TO_CART: function (state, list) {
    state.shoppingCart = list
  },
  // user
  ADD_USER: function (state, user) {
    state.user = user
  },
  DELETE_USER: function (state, user) {
    state.user = {}
  }

}
export default new Vuex.Store({
  state,
  mutations
})
