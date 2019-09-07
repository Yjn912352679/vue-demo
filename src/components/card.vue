<template>
  <div class="goodsInfo">
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <img src alt />
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">
        商品名称
        <span class="red">{{goodsInfo.simpleProduce}}</span>
      </div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价:
            <del>3000</del>&nbsp;&nbsp; 现价:
            <span class="red">{{goodsInfo.sellPrice | priceFormat}}</span>
          </p>
          <p class="buycount">
            购买数量:
            <numbox :max="numBoxMaxValue" @getcurrentnum="getnum"></numbox>
          </p>
          <!-- <p class="buycount"> 购买数量:<numbox2 :max="numBoxMaxValue" @getcurrentnum="getnum"></numbox2></p> -->

          <p>
            <mt-button class="mt-button" type="primary" size="normal">立即购买</mt-button>
            <mt-button class="mt-button" type="danger" size="normal" @click="fastclick && addToShopCar()">加入购物车</mt-button>

            <transition 
            @before-enter="beforeEnter" 
            @enter="enter" 
            @after-enter="afterEnter"
            @after-leave="afterLeave">
              <span v-show="showBall" class="ball">{{shoppingnum}}</span>
            </transition>
          </p>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）</div>
      </div>
      <div class="mui-card-footer">
        <mt-button class="mt-button" type="primary" size="large" plain>图文介绍</mt-button>
        <mt-button class="mt-button" type="danger" size="large" plain>商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import numbox from "./numbox.vue";
import numbox2 from "./numbox2.vue";
export default {
  components: {
    numbox,
    numbox2
  },
  props: { goodsInfo: Object },
  data() {
    return {
      shoppingnum: 1,
      numBoxMaxValue: 1,
      showBall: false,
      fastclick: true
    };
  },
  watch: {},
  computed: {},
  methods: {
    // 从 Numbox 组件中获取输入框的数量值
    getnum(a) {
      this.shoppingnum = a;
    },

    // 点击加入购物车  获取数量 更改vuex中的对应属性值 并显示到底部栏的徽标数量
    addToShopCar() {
      var goods = {
        sellPrice: this.goodsInfo.sellPrice,
        shopsId: this.goodsInfo.shopsId,
        shoppingNum: this.shoppingnum,
        isChoosed: true,
        canBuyMaxNum: this.numBoxMaxValue
      };
      this.$store.commit("addToShopCar", {
        i: goods,
        max: this.numBoxMaxValue
      });

      (!this.$store.state.isOver)? this.showBall = !this.showBall : null
  
    },

    // 获取当前页面的数据
    getcuurentData() {
      this.$http.get().then(
        res => {
          // 将获取的数据中的  剩余库存量属性 赋值给 this.numBoxMaxValue  这里假设为6
          this.numBoxMaxValue = 6;
        },
        error => {}
      );
    },

    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
      this.fastclick = false
    },
    enter(el, done) {
      el.offsetWidth;
      let right =
        document.querySelector(".mui-icon-extra-cart").getBoundingClientRect()
          .left - document.querySelector(".ball").getBoundingClientRect().left;


      let down =
        document.querySelector(".mui-icon-extra-cart").getBoundingClientRect()
          .top - document.querySelector(".ball").getBoundingClientRect().top;

          console.log(right , down)

      el.style.transform = "translate(" + right + "px," + down + "px)";
      el.style.transition = "all 0.45s cubic-bezier(.25,1.38,1,.93)";

      done();
    },
    afterEnter(el) {
      this.showBall = !this.showBall;
    },
    afterLeave(){
      this.fastclick = true
    }
  },
  created() {},
  mounted() {
    this.getcuurentData();
  }
};
</script>
<style lang="css" scoped>
.mui-card{
  overflow:inherit
}
.mui-card-footer {
  display: block;
}
.mt-button {
  margin-bottom: 1rem;
}
.mui-card-content-inner {
  box-sizing: border-box;
  height: 12rem;
}
.mui-card-content-inner > img {
  width: 100%;
  height: 100%;
}

.buycount {
  display: flex;
  align-items: center;
}
.red {
  color: red;
  font-size: 18px;
  font-weight: bold;
}

.ball {
  display: inline-block;
  /* align-items:center;
  justify-content:center; */
  text-align:center;
  font-size:.625rem;
  line-height:1.4;
  color:#ffffff;
  width: 0.9375rem;
  height: 0.9375rem;
  border-radius: 50%;
  background-color: red;
  position: relative;
  z-index: 100;
  left:-1.875rem;
  top:1.25rem;
}


</style>



