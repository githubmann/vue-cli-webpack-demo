/**
 * Created by rhb on 2016/9/22.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import VueResource from 'vue-resource'
import Vuex from 'vuex'

//  noinspection JSUnresolvedFunction
// Vue.transition('bounce', {
//   enterClass: 'bounceInLeft',
//   leaveClass: 'bounceOutRight'
// })

Vue.config.debug = true
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Vuex)

Vue.http.options.emulateJSON = true
// 将实例渲染到#app里面, 不太清楚这里的原理
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
// 2.0的语法
// const router = new VueRouter(routeConfig)
// const app = new App({
//   router
// }).$mount('#app')
// console.log(app)
// 1.X的语法
// router.map(routeConfig)
// router.start(App, '#app')
