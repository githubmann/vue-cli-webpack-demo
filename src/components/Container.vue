<template>
  <div>
    <nav class="navbar navbar-default" role="navigation">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" v-link="{path:'/container/mail'}">积分系统</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

          <ul class="nav navbar-nav navbar-right">
            <li><a href="javascript:;" v-link="{path:'/container/userCenter'}">你好，{{user.uname}}</a></li>
            <li class="dropdown">
              <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown">Dropdown <span
                class="caret"></span></a>
              <ul class="dropdown-menu" role="menu">
                <li><a href="javascript:;">Action</a></li>
                <li><a href="javascript:;">Another action</a></li>
                <li><a href="javascript:;">Something else here</a></li>
                <li class="divider"></li>
                <li><a href="javascript:;">Separated link</a></li>
              </ul>
            </li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
    <router-view></router-view>
  </div>
</template>
<style>

  /*body {*/
  /*background-color: #ff0000;*/
  /*}*/
  * {
    color: black;
  }
</style>
<script>
  export default{
    vuex: {
      getters: {
        user: (state) => state.user
      }
    }
  }
</script>
