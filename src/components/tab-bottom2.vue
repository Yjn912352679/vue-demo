<template>
  <div class="tab-bottom2">
      <nav class="mui-bar mui-bar-tab">
			<router-link id="defaultTab" class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/meiTuan">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cate"></span>
				<span class="mui-tab-label">美团商家</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">{{$store.getters.getSum.num}}</span></span>
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
  components:{},
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){
		 mui(".tab-bottom2").on("tap","a",function(){document.location.href=this.href;});
	}
}
</script>
<style lang="scss" scoped>
</style>