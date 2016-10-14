<template>
  <div class="wrapper">
    <div class="container">
      <h1 style="margin-top: 15%;">公共系统</h1>
      <form class="form" style="top: 10%;">
        <input v-model='user.username' type="text" placeholder="请输入用户名">
        <label class="control-label">{{tips.nameText}}</label>
        <input v-model='user.password' type="password" placeholder="输入密码">
        <input v-model="user.rePassword" type="Password" placeholder="再次输入密码">
        <label class="control-label">{{tips.pwdText}}</label>
        <button @click='signUp' type="submit" id="login-button">注册</button>
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

</template>
<style>
  @import "/static/resources/common/css/loginstyle.css";
</style>
<script>
  export default{
    data () {
      return {
        user: {
          username: '',
          password: '',
          rePassword: ''
        },
        tips: {
          nameText: '',
          pwdText: ''
        },
        userS: {}
      }
    },
    methods: {
      signUp: function () {
        // noinspection JSUnresolvedVariable
        if (this.user.password !== this.user.rePassword) {
          this.tips.pwdText = '两次输入的密码不一致'
        }
        // noinspection JSUnresolvedVariable
        this.$http.post('localhost:8080/me/signup', this.user)
          .then(function (response) {
            if (response.data === 'login success') {
              this.userS = this.user
            }
          }).catch(function () {
          })
      }
    }
  }
</script>
