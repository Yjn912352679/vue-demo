<template>
  <div class="numbox3">
    <!-- :data-numbox-max="max" -->
    <div :id='"mui-numbox"+item.shopsId' class="mui-numbox" data-numbox-min="1" style="height:1.5rem ; width:5rem">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input
        :id='"test"+item.shopsId'
        @change="changevalue"
        class="mui-input-numbox"
        type="number"
        :value="item.shoppingNum"
      />
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  </div>
</template>

<script>
import mui from "../lib/mui/js/mui.js";

export default {
  components: {},
  props: {
    max: Number,
    item: Object
  },
  data() {
    return {};
  },
  watch: {
    max(newval, oldval) {
      mui("#mui-numbox"+this.item.shopsId)
        .numbox()
        .setOption("max", newval);
    }
  },
  computed: {},
  methods: {
    changevalue() {
      if (parseInt(document.getElementById("test"+this.item.shopsId).value) >= this.max) {
        this.$emit("getcurrentnum", this.max);
        this.item.shoppingNum = this.max;
      } else if (parseInt(document.getElementById("test"+this.item.shopsId).value) <= 1){
        this.$emit("getcurrentnum", 1);
        this.item.shoppingNum = 1;
      }else{
          this.$emit("getcurrentnum",
          parseInt(document.getElementById("test"+this.item.shopsId).value)
        );
        this.item.shoppingNum = parseInt(document.getElementById("test"+this.item.shopsId).value);
      }

      this.$store.commit("updataShopCar", {i:this.item , max:this.max});
    }
  },
  created() {},
  mounted() {
    mui("#mui-numbox"+this.item.shopsId).numbox();
    mui("#mui-numbox"+this.item.shopsId)
      .numbox()
      .setOption("max", this.max);
  }
};
</script>
<style lang="scss" scoped>
// 设置外层盒子的 padding 为0   防止背景色出现
.mui-numbox {
  padding: 0;
}
.mui-numbox .mui-input-numbox{
  padding:0!important;
  border:none!important;
}

// 设置按钮的长度
.mui-numbox [class*="btn-numbox"] {
  width: 1.5rem;
}
</style>