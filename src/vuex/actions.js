/**
 * Created by rhb on 2016/10/11.
 */
import { signInApi } from '../api'
// 添加一个产品到购物车
export const addCart = function ({dispatch}, newItem) {
  dispatch('ADD_CART', newItem)
}
// 添加一列产品到购物车
export const addListToCart = function ({ dispatch }, list) {
  dispatch('ADD_LIST_TO_CART', list)
}
export const deleteCart = function ({dispatch}, item) {
  dispatch('DELETE_CART', item)
}
export const signIn = function ({dispatch}, user) {
  signInApi(user).then(function (response) {
    var tips
    if (response.data) {
      dispatch('ADD_USER', response.data)
    } else {
      tips = '用户名或者密码错误'
      return tips
    }
  })
}
export const deleteUser = function ({dispatch}, user) {
  dispatch('DELETE_USER', user)
}
export const setUserInfo = function ({dispatch}, user) {
  dispatch('ADD_USER', user)
}
