<template>
  <div class="container">

    <div class="row  search">
      <div class="col-lg-3">
        <div class="input-group">
                  <span class="input-group-addon">
                    价格最大值
                  </span>89
          <!--这里是传入后台的查询对象 最大值-->

          <input v-model="query.maxSalePrice" type="text" class="form-control" title="最大价格">

        </div><!-- /input-group -->
      </div><!-- /.col-lg-6 -->
      <div class="col-lg-3">
        <div class="input-group">
                <span class="input-group-addon">
                    价格最小值
                </span>
          <!--价格最小值-->
          <input v-model="query.minSalePrice" type="text" class="form-control" width="50px" height="33px" title="最小价格">
        </div><!-- /input-group -->
      </div>
      <!-- /.col-lg-6 -->
      <div class="col-lg-3">
        <div class="input-group">
                <span class="input-group-addon">
                    产品名
                </span>
          <!--产品名 模糊查询-->
          <input v-model="key" type="text" class="form-control" title="模糊查询关键字">
        </div><!-- /input-group -->
      </div><!-- /.col-lg-6 -->
      <div class="col-lg-3">
        <button class="btn btn-warning" @click="search" value="">查询</button>

      </div>
    </div><!-- /.row -->
    <div v-if="haveData" class="row">
      <h1>这里好像没有相关的数据</h1>
    </div>

    <div class="row">
      <div v-for="product in products">
        <div class="col-md-4 fixWidth">
          <div class="thumbnail">
            <img src="'/src/assets/resources/common/img'+product.picture" alt="无法显示图片"
                 class="img-responsive img-circle my">
            <div class="caption">
              <h3>{{product.name}}</h3>
              <p>库存:{{product.diStock.stockNum}}--价格:{{product.price}}</p>
              <p class="ellipsis">{{product.remark}}</p>
              <p><a @click="goToDetail(product.id)" class="btn btn-primary" role="button">进入</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  .fixWidth {
    height: 200px;
  }

  .search {
    margin-bottom: 20px;
  }

  .ellipsis {
    white-space: nowrap;
    text-overflow: "...";
  }
</style>
<script>
  import {listProduct, getMyShoppingCartApi} from '../../api'
  import {addListToCart} from '../../vuex/actions'
  export default{
    vuex: {
      getters: {
        user: (state) => state.user
      },
      actions: {
        addListToCart
      }
    },
    // 初始化页面，查询产品
    // 调用 getMyShoppingCart 传入·this.user.uid· 调用 addListToCart 获取到的数据装填入 ·store.shoppingCart·
    ready: function () {
      this.search()
      getMyShoppingCartApi(this.user.uid).then(function (response) {
        addListToCart(response.data)
      })
    },
    data: function () {
      return {
        // 装填产品列表数据
        products: [],
        haveData: false,
        query: {
          maxSalePrice: '',
          minSalePrice: '',
          key: ''
        }
      }
    },
    methods: {
      // 传入query,取得products
      search: function () {
        var self = this
        listProduct(this.query).then(function (response) {
          console.log('response.data,main', response.data)
          if (JSON.stringify(response.data) !== '{}') {
            self.products = response.data
          } else {
            self.haveData = true
          }
        })
      },
      // 渲染商品详情页
      goToDetail: function (id) {
        console.log('id:', id)
        // noinspection JSUnresolvedVariable
        this.$router.go('/container/product/detail/:' + id)
      }
    }
  }
</script>
