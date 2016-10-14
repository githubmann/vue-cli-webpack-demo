<template>
  <div>
    <div class="Uwrapper container">
      <div class="row my-container">
        <div class="left-content col-md-3">
          <img src="/resources/common/img/user.jpg" alt="无法显示图片" class="img-responsive img-circle my">

        </div>
        <div class="col-md-7 col-md-offset-1 right-content">
          <form class="form-horizontal" onsubmit="return false;">

            <div class="form-group">
              <label class="col-sm-2 control-label">用户名</label>
              <div class="col-sm-offset-1 col-sm-6">
                <input type="text" class="form-control" :readonly="isReadOnly" v-model="user.uname">
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">年龄</label>
              <div class="col-sm-offset-1 col-sm-6">
                <input type="text" class="form-control" :readonly="isReadOnly" v-model="user.uage">
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">积分</label>
              <div class="col-sm-offset-1 col-sm-6">
                <input type="text" class="form-control" :readonly="isReadOnly" v-model="user.uintegrad">
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">电话</label>
              <div class="col-sm-offset-1 col-sm-6">
                <input type="text" class="form-control" :readonly="isReadOnly" v-model="user.phone">
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">地址</label>
              <div class="col-sm-offset-1 col-sm-6">
                <input type="text" class="form-control" :readonly="isReadOnly" v-model="user.address">
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-offset-5">
                <button class="button button-caution  button-pill  col-md-offset center-block"
                        @click="clickMe">{{buttonText}}
                </button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
    <button @click="showMyCartClick" class="btn center-block btn-bea">切换我的购物车</button>
    <div v-if='showMyCart' class="animated" transition='bounce'>
      <shopping-cart></shopping-cart>
    </div>

  </div>
</template>
<style>
  @import "//cdn.bootcss.com/Buttons/2.0.0/css/buttons.css";

  .btn-bea {
    height: 50px;
    border-radius: 40px;
    margin-top: 40px;
    background-color: #c9302c;
    color: #f3faff;
  }

  .btn-bea:hover {
    background-color: #843534;
    color: #2E2D2D;
  }

  .Uwrapper {

  }

  .Uheader {
    height: 350px;
    background-color: #4C4A4A;
  }

  .Uheader .img img {
    border-radius: 100%;
    width: 100%;
    background-color: #8a6d3b;
  }

  .Uheader .right {
    width: inherit;
    background-color: #843534;
  }

  .right-content {
    background-color: #449eff;
    height: 500px;
    padding-top: 100px;
    border-radius: 20%;
    box-shadow: 2px 2px 2px;
    opacity: 9;
  }

  .left-content {
    background-color: #bfd81e;
    height: 200px;
    border-radius: 20%;
    box-shadow: 4px 4px 4px;
  }

  .container .row .my {
    margin: 0 auto;

    /*overflow: hidden;*/

  }

  .center-my {
    font-size: 1.5em;
  }

  .my-container {
    background-color: #9f9a9f;
    border-radius: 2em;
    margin-top: 2em;
    padding-top: 2em;

  }

  .my-container input {
    text-align: center;
    font-size: 1.3em;
  }


</style>
<script>
//  import {setMyInfo} from '../../api'
  import {setUserInfo} from '../../vuex/actions'
  import shoppingC from '../shoppingCart/ShoppingC.vue'
  export default{
    vuex: {
      actions: {
        setUserInfo
      },
      getters: {
        user: (state) => state.user
      }
    },
    data: function () {
      return {
        showMyCart: false,
        buttonText: '编辑',
        isReadOnly: true
      }
    },
    methods: {
      showMyCartClick: function () {
        this.showMyCart = !this.showMyCart
      },
      clickMe: function () {
        if (this.buttonText === '编辑') {
          this.buttonText = '保存'
        } else {
          this.buttonText = '编辑'
//                    在这里调用setMyInfo
//                    setMyInfo(this.user)
//                    这里调用setUserInfo(actions)
          this.setUserInfo(this.user)
        }
        this.isReadOnly = !this.isReadOnly
      }
    },
    components: {
      'shopping-cart': shoppingC

    }
  }
</script>
