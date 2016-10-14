<template>
  <router-view></router-view>
</template>
<style>
  .center-block {
    margin: 0 auto;
    z-index: 1000
  }
</style>
<script>
  import store from './vuex/store'
  import Vue from 'vue'
  import VueRouter from 'vue-router'
  import routerConfig from './router/route.config'
  // 加载路由插件
  Vue.use(VueRouter)
  // 将routerConfig装载进入路由
  const router = new VueRouter(routerConfig)
  export default{
    router,
    store,
    data () {
      return {
        showIn: 1,
        user: {},
        showRouterView: false,
        cb: true
      }
    },
    ready: function () {
      console.log('App.vue', this)
      this.$router.go('/signIn')
    }
  }
</script>
