/**
 *
 * Created by rhb on 2016/10/12.
 */
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

const baseUrl = 'http://localhost:8080'
const signInUrl = baseUrl + '/me/login'
const signUpUrl = baseUrl + '/me/signup'
const listProductUrl = baseUrl + '/product/listProduct'
const getProductDetailUrl = baseUrl + '/product/detail'
const getMyInfoUrl = baseUrl + '/me/center'
const setMyInfoUrl = baseUrl + '/me/center/update'
// 购物车操作URL
const getMyShoppingCartUrl = baseUrl + '/shopping/listShoppingCat'
const setMyShoppingCartUrl = baseUrl + '/shoppingCart/set'
const settlementUrl = baseUrl + '/shoppingCart/settlement'
const deleteProductUrl = baseUrl + '/shopping/deleteShoppingCart'

// 在购物车删除商品
export const signInApi = (options) => Vue.http.post(signInUrl, options)
export const signUp = (options) => Vue.http.post(signUpUrl, options)
export const listProduct = (options) => Vue.http.post(listProductUrl, options)
export const getProductDetail = (options) => Vue.http.post(getProductDetailUrl, options)
export const getMyInfo = (options) => Vue.http.post(getMyInfoUrl, options)
export const setMyInfo = (options) => Vue.http.post(setMyInfoUrl, options)
// 想后台传入数据
//  [
//  {
//  pid,
//  uid,
//  num
//  ]
// 购物车操作
export const goToSettlementApi = (options) => Vue.http.post(settlementUrl)
export const setMyShoppingCartApi = (options) => Vue.http.post(setMyShoppingCartUrl, options)
export const getMyShoppingCartApi = (options) => Vue.http.post(getMyShoppingCartUrl, options)
export const deleteProductApi = (options) => Vue.http.post(deleteProductUrl, options)
