<template>
  <div class="tab-bottom">
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/" exact>
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/GoodsInfo">
        <span class="mui-icon mui-icon-email">
          <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">购物</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/myself">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">我的</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
import mui from "../lib/mui/js/mui.js";

export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {
    $route(){

    }
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {
    mui(".tab-bottom").on("tap","a",function(){document.location.href=this.href;});
  }
};
</script>
<style lang="scss" scoped>
</style>