<template>
  <div class="page" ref="page">
      <!-- 移动端和pc 端都可以滑动 -->
      <div class="swiper-container weilei">
        <div class="swiper-wrapper">
          <div
            @click="showinfo(item.id)"
            ref="tabitem"
            class="swiper-slide"
            v-for="item in kindlist"
            :key="item.title"
          >{{item.title}}</div>
        </div>
      </div>
  </div>

</template>

<script>

import Swiper from "swiper";
import BScroll from "better-scroll";
import "../lib/swiper/css/swiper.min.css";
import "../lib/swiper/js/swiper.min.js";


export default {
  components: {

  },
  props: {},
  data() {
    return {
      infolist: [],
      preTopId: 0,
      shoppingnum: 1,
      kindlist: [
        { id: 0, title: "全部" },
        { id: 1, title: "关注" },
        { id: 2, title: "推荐" },
        { id: 3, title: "深圳" },
        { id: 4, title: "视频" },
        { id: 5, title: "音乐" },
        { id: 6, title: "热点" },
        { id: 7, title: "时代" },
        { id: 8, title: "娱乐" },
        { id: 9, title: "头条" },
        { id: 10, title: "问答" },
        { id: 11, title: "图片" },
        { id: 12, title: "科技" },
        { id: 13, title: "体育" },
        { id: 14, title: "财经" },
        { id: 15, title: "军事" },
        { id: 16, title: "国际" }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {
    showinfo(id) {
      var that = this;

      this.$refs.tabitem[this.preTopId].classList.remove("span-active");

      this.$refs.tabitem[id].classList.add("span-active");
      this.preTopId = id;
      // this.$http.get(""+id).then(res=>{
      //   console.log(res.body)
      // },error=>{
      //   console.log("请求失败了");
      //   console.log(error)
      // });
    }
  },
  created() {},
  mounted() {
    // 横向滚动  使用swiper  初始化 swiper 实例
    var swiper = new Swiper(".swiper-container", {
      slidesPerView: 5,
      spaceBetween: 30
    });

    this.showinfo(0);
  }
};
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
}

.swiper-container {
  position: fixed;
  top: 0;
  left: 0;
  height: 3.125rem;
  overflow: hidden;
  width: 100%;
  padding: 0 2%;
}
.swiper-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  height: 3.125rem;
  padding: 0 2%;
}

.swiper-slide {
  text-align: center;
  font-size: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.span-active {
  font-size: 1.4rem !important;
  line-height: 1;
  color: rgba(255, 255, 255, 1) !important;
  font-weight: 800;
}

/* 滚动栏的背景板 */
.weilei::after {
  content: "";
  width: 102%;
  height: 3.125rem;
  position: absolute;
  top: 0;
  left: -2%;
  // right: -6.25rem;
  z-index: -10;
}

.containerout {
  // margin-top: 3.125rem;
  box-sizing: border-box;
}


</style>