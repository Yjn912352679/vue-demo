<template>
  <div class="GoodsInfo">
      <div class="containerout" ref="containerout">
        <div class="container-in" ref="containerin">
          <!-- 卡片组件应用 -->
          <card :goodsInfo="currentGoods"></card>
          <!-- <card></card>
          <card></card> -->
          <!-- <span @click="dianwo">点我</span> -->

          <!-- 无实际作用  只是占高度  使得整个页面能完整显示 -->
          <div class="empty"></div>
        </div>
      </div>
  </div>
</template>

<script>
import card from "./card.vue";
export default {
  components:{
    card,
  },
  props:{},
  data(){
    return {
         clientHeight: 0,
         currentGoods:JSON.parse(this.$route.params.Goods),
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){
      window.onscroll = function(){
         let plain = 0;
            // 当前视窗  距离浏览器顶部的距离
         let scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
            // 使用abs绝对值（否则 pos.y拿到值是负数）
            if (scrollTop >= 0) {
              if (scrollTop >= 0 && scrollTop < 80) {
                plain = scrollTop / 80;
                document.styleSheets[0].addRule(
                  ".weilei::after",
                  "background-color: rgba(255,90,0," + plain + ")"
                );
              }
              if (scrollTop >= 80) {
                document.styleSheets[0].addRule(
                  ".weilei::after",
                  "background-color: rgba(255,90,0,1)"
                );
              }
            } else {
              document.styleSheets[0].addRule(
                ".weilei::after",
                "background-color: rgba(255,90,0,0)"
              );
            }
          };
  }
}
</script>


<style lang="scss" scoped>
.empty{
  height: 3.125rem;
}
</style>