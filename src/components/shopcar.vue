<template>
  <div class="shopcar">
    <div class="mui-card">
      <div v-for="item in $store.state.myShopCar" :key="item.shopsId" class="mui-card-content">
        <div class="mui-card-content-inner" style="display:flex; align-item:center">
          <mt-switch v-model="item.isChoosed"></mt-switch>
          <div class="right" style="width:96%">
            <div class="imgout">
              <img src="http://pic32.nipic.com/20130813/3347542_160503703000_2.jpg" alt />
            </div>
            <div class="right-right" style="width:90%">
              <p>商品简介 {{item.shopsId}}</p>
              <div class="right-bottom">
                <span>￥{{item.sellPrice | priceFormat}}</span>
                <div class="right-bottom-bottom">
                  <!-- max 为 商品的库存量 -->
                  <numbox3 :max="item.canBuyMaxNum" :item="item" @getcurrentnum="currentGoodsCount"></numbox3>

                  <span class="delete" @click="del(item)">删除</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 合计卡片 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div
          class="mui-card-content-inner"
          style="display:flex; align-item:center; justify-content:space-between"
        >
          <div class="sumout">
            <p>总计</p>
            <p>
              商品数量
              <span class="red">{{$store.getters.getSum.num}} &nbsp;&nbsp;</span>总价:
              <span class="red">￥{{$store.getters.getSum.price | priceFormat}}</span>
            </p>
          </div>

          <button>去结算</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import numbox3 from "./numbox3.vue";
export default {
  components: {
    numbox3
  },
  props: {},
  data() {
    return {
      numboxValue: []
    };
  },
  watch: {},
  computed: {},
  methods: {
    currentGoodsCount(value) {
      console.log("购物车中该商品的数量是:" + value + typeof value);
    },
    del(item) {
      // mintui
      this.$MessageBox
        .confirm("", {
          title: "提示",
          message: "确定删除该商品吗?",
          confirmButtonText: "删除",
          cancelButtonText: "不了"
        })
        .then(action => {
          if (action == "confirm") {
            this.$store.commit("deleteGoods", item);
          }
        })
        .catch(error => {
          if (error == "cancel") {
          }
        });
    },
    dianwo() {
      this.$MessageBox
        .confirm("", {
          title: "提示",
          message: "确定删除该商品吗?",
          confirmButtonText: "删除",
          cancelButtonText: "不了"
        })
        .then(action => {
          if (action == "confirm") {
            this.$store.commit("deleteGoods", item);
          }
        })
        .catch(error => {
          if (error == "cancel") {
          }
        });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.mui-card-content-inner {
  padding: 0.9375rem 0.3125rem;
}
.imgout {
  width: 4rem;
  height: 4rem;
  margin-left: 0.5rem;
  // box-sizing:unset
}
.imgout > img {
  width: 100%;
  height: 100%;
}

.right {
  display: flex;
}
.right-bottom {
  display: flex;
  justify-content: space-between;
}

.right-right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 0.5rem;
  box-sizing: border-box;
}

.right-bottom-bottom {
  // width:60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sumout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.red {
  color: red;
  font-size: 18px;
  font-weight: bold;
}

.delete {
  font-size: 0.9rem;
  color: red;
  font-weight: bolder;
  margin-left: 0.6rem;
}
</style>