<template>
  <div>
    <div id="detail">

      <div class="container" style="left: auto;">
        <div class="row clearfix">
          <div class="col-md-12 column">
            <div class="col-md-6 column">
              <div class="carousel slide" id="carousel-281451">
                <ol class="carousel-indicators">
                  <li class="active" data-slide-to="0" data-target="#carousel-281451">
                  </li>
                </ol>
                <div class="carousel-inner">
                  <div class="item active">

                    <img alt="" src="src/assets/resources/common/img/2.jpg" style="height: auto; text-align: center;"/>
                    <div class="carousel-caption">
                      <strong style="color: #000000; font-size: 20px;">1蚊鸡而已波~</strong>
                    </div>
                  </div>

                </div>
                <a class="left carousel-control" href="#carousel-281451" data-slide="prev"><span
                  class="glyphicon glyphicon-chevron-left"></span></a> <a class="right carousel-control"
                                                                          href="#carousel-281451"
                                                                          data-slide="next"><span
                class="glyphicon glyphicon-chevron-right"></span></a>
              </div>
            </div>

            <div class="col-md-6 column ">
              <div style="margin-top: 15px;">
                <strong style="color: #000000; ">商品名：</strong>
                <strong style="margin-left: 5px; font-size: 30px; color: #73B9B5;">{{product.name}}
                  <p style="font-size: 16px; margin-left: 100px;">{{product.remark}}</p>
                </strong>
              </div>
              <div style="margin-top: 15px;">
                <strong style="color: #000000; ">经销商（id）：</strong>
                <strong style="margin-left: 5px; font-size: 16px; color: #000033;">{{product.creator}}</strong>
                <strong style="font-size: 14px;">(5)</strong>
                <strong style="margin-left: 10px; display: block; margin-left: 100px;">
                  广东省肇庆市
                  <p style="display: inline;">15812514521</p>
                </strong>
              </div>
              <div style="margin-top: 10px; height: 80px;" class="form-inline">
                <hr style=" height:2px;border:none;border-top:2px dotted #66CCCC;"/>
                <strong style="margin-left: 10px; line-height: 12%;">价格：</strong>
                <b class="text-danger shake animated" style="margin-left: 15px; font-size: 50px; color: #73B9B5; ">￥
                  <p style="font-size: 40px; display: inline;">{{product.price}}</p>
                </b>
              </div>

              <div style="margin-top: 15px; height: 60px; z-index: 2;" class="form-inline">
                <hr style=" height:2px;border:none;border-top:2px dotted #66CCCC;"/>
                <strong style="margin-left: 10px;">数量：</strong>
                <button type="button" id="subtract" class="btn btn-default" @click='deleteOne' style="outline: 0;">
                  <span class="glyphicon glyphicon-minus"></span>
                </button>
                <!--这里为数量（number）,上面click为减少，下面click为增加 -->
                <input type="text" id="number" v-model='number' style="width: 35px; height: 33px;"/>
                <button type="button" id="add" class="btn btn-default" @click='addOne' style="outline: 0;">
                  <span class="glyphicon glyphicon-plus"></span>
                </button>
                件
                <em>(库存<span id="sNumber">{{product.disStock.stockNum}}</span>件)</em>
              </div>
              <!-- 加入购物车 应该有个监听事件-->
              <div style="margin-top: 25px; height: 40px;">
                <button id="sc" type="button" class="btn btn-danger"
                        style="margin-left: 60px; background-color: #73B9B5; border: #73B9B5; outline: 0;"
                        onclick="shoppingCart()">加入购物车
                </button>
              </div>
            </div>
          </div>

        </div>
        <hr style="border:1px dashed #008080;width:100%;height:1px"/>
        <div class="row clearfix">
          <div class="col-md-12 column">
            <div style="margin-top: 0px; width: 100%;">
              <b class="text-success" style="text-align: center; font-size: 30px;">商品评价
                <em style="font-size: 15px; color: #73B9B5;">(共<span>“评论数”</span>参与评论)</em>
              </b>

            </div>
          </div>
        </div>


      </div>
      <div onmouseover="" class="shopping-cart animated infinite swing" style="animation-duration: 100;">
        <a href="#">
				<span id="shopping-cart" class="glyphicon glyphicon-shopping-cart " style="font-size: 30px; color: #73B9B5; ">

				</span>
        </a>
      </div>

      <span id="shoppingNum" class="badge pull-right">
            {{number}}
		</span>

    </div>
  </div>
</template>
<style>
  @import "/static/resources/common/css/common.css";
  @import "/static/resources/common/css/animate.min.css";
</style>
<script>
  import {getProductDetail} from '../../api'
  export default{
    ready: function () {
      var self = this
      console.log(this.$route.params.id.slice(1))
      getProductDetail({id: this.$route.params.id.slice(1)}).then(function (response) {
        self.product = response.data
      })
    },
    data () {
      return {
        product: {},
        number: 1
      }
    },
    methods: {
      // 将商品添加到
      deleteOne: function () {
        if (parseInt(this.number) === 1) {
        } else {
          this.number = this.number - 1
        }
      },
      addOne: function () {
        this.number = parseInt(this.number) + 1
      }

    }

  }
</script>
