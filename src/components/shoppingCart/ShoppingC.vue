<template>
  <div class="container">
    <div class="check-out">
      <h1>购物车</h1>
      <table>
        <thead>
        <tr>
          <th>商品</th>
          <th>数量</th>
          <th>单价</th>
          <th>经销商</th>
          <th>总价</th>
        </tr>
        </thead>
        <tbody>
        <!--这里来一个v-for循环-->
        <tr v-for="cart in shoppingCart" class="animated" transition="bounce">

          <td class="ring-in">
            <a class="at-in"><img src="/resources/common/img/1.jpg" class="img-responsive" alt=""></a>
            <div class="sed">
              <h5>Sed ut perspiciatis unde</h5>
              <p>(At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium) </p>

            </div>
            <div class="clearfix"></div>
          </td>
          <td class="check"><input type="text" v-model="cart.num" :readOnly="isReadOnly"></td>
          <!--金额-->
          <td>{{cart.products.price}}</td>
          <td></td>
          <td>{{productTotalCount = cart.products.price*cart.num}}</td>
          <td>
            <button @click="deleteProduct(cart.uid,cart.pid,cart)" class="btn btn-default deleteColor">删除
            </button>
          </td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>总价：</td>
          <!--这里填总价-->
          <td>{{totalCount}}元</td>
        </tr>
        </tfoot>
      </table>
      <div class="row">
        <div class="col-md-4 col-md-offset-2"><a href="javascript:return 0;" class=" center-block to-buy"
                                                 @click="clickButtonText">{{buttonText}}</a>
        </div>
        <div class="col-md-4 col-md-offset-2"><a contenteditable="false" href="javascript:return 0;"
                                                 class=" center-block to-buy "
                                                 :class="{'disableCss':isOk}">结算</a></div>
      </div>

      <div class="clearfix"></div>
    </div>
  </div>
</template>
<style>
  @import '/static/resources/common/css/style.css';

  .deleteColor {
    font-weight: 100;
    background-color: #cda218;
    color: #fefcff;
    border-radius: 100%;
  }

  .deleteColor:hover {
    background-color: #cd2628;
    color: #fcfcfc;
  }

  .disableCss {
    pointer-events: none;
  }
</style>
<script>
  import {deleteProductApi, setMyShoppingCartApi} from '../../api'
  import {deleteCart, addListToCart} from '../../vuex/actions'
  export default{
    // 订阅用户
    vuex: {
      getters: {
        user: (state) => state.user,
        shoppingCart: (state) => state.shoppingCart
      },
      actions: {
        deleteCart, addListToCart
      }
    },
    data: function () {
      return {
        nice: 'nice',
        // 商品总价格
        productTotalCount: 0,
        // 是否只读
        isReadOnly: true,
        // true: buttonText为编辑,false: ~~为保存
        isButtonText: true,
        buttonText: '编辑',
        // 结算按钮可不可点击
        isOk: false,
        isDelete: true
      }
    },
    methods: {
      // 切换保存和编辑状态
      clickButtonText: function () {
        this.isButtonText = !this.isButtonText
        this.buttonText = this.isButtonText ? '编辑' : '保存'
        this.isReadOnly = !this.isReadOnly
        this.isOk = !this.isOk
        // 取得用户的所有购物车页面的数据，保存到全局的store.shoppingCart里面 ·调用addListToart·
        // 取得store.shoppingCart的[{pid,uid,num}]，包装成数组返回给后台C
        if (this.buttonText === '保存') {
          // json:存储每一个购物车产品的pid,num
          var json = []
          // json:传入产品ID，数量
          this.shoppingCart.forEach(function (ele, index) {
            json.push({'pid': ele.pid, 'num': ele.num})
          })
          this.addListToCart(this.shoppingCart)
          // 调用api修改 后台 购物车表的数据，无返回值
          setMyShoppingCartApi(json).then(function (response) {
          })
        }
      },
      // 传入用户Id，产品ID，后台·删之·，
      // 调用actions的deleteCart
      deleteProduct: function (uid, pid, cart) {
        this.deleteCart(cart)
        deleteProductApi({'uid': uid, 'pid': pid}).then(function (response) {
        })
      }
    },
    computed: {

      totalCount: function () {
        return this.shoppingCart.reduce(function (pre, hou) {
          if (pre.products) {
            return pre.products.price * pre.num + hou.products.price * hou.num
          } else {
            return pre + hou.products.price * hou.num
          }
        })
      }
    }

  }
</script>
