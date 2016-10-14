<template>
  <div class="Tbody">
    <div class="wrapper">
      <div class="Tcontainer">
        <h1 style="margin-top: 15%;">公共系统</h1>
        <form class="Tform" style="top: 10%;">
          <input v-model="user['uname']" type="text" placeholder="请输入用户名">
          <input v-model="user['upwd']" type="password" placeholder="输入密码">
          <p class="control-label">{{tips}}</p>
          <button type="submit" @click="signInClick">登录</button>
        </form>
      </div>

      <ul class="bg-bubbles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>


</template>
<style>
  @import '/static/resources/common/css/loginstyle.css';

</style>
<script>
  import {signIn, deleteCart} from '../../vuex/actions'

  export default{
    vuex: {
      actions: {
        signIn, deleteCart
      }
    },
    data: function () {
      return {
        user: {
          uname: '',
          upwd: ''
        },
        tips: '',
        userS: {},
        routerView: ''
      }
    },
    methods: {
      'signInClick': function () {
        if (this.user.uname !== undefined && this.user.upwd !== undefined) {
          var response = this.signIn(this.user)
          if (response) {
            this.tips = '账号密码错误'
          } else {
            this.$router.go('/container/mail')
          }
        } else {
          this.tips = '请输入用户名密码'
        }
      }
    }
  }
</script>
