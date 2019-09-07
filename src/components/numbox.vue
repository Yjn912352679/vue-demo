<template>
  <div class="numbox">
     <!-- :data-numbox-max="max" -->
    <div class="mui-numbox" data-numbox-min="1" >
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input id="test" @change="changevalue" class="mui-input-numbox" type="number" />
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  </div>
</template>

<script>
import mui from "../lib/mui/js/mui.js";

export default {
  components: {},
  props: {
    max: Number
  },
  data() {
    return {};
  },
  watch: {
    max(newval, oldval) {
      mui(".mui-numbox").numbox().setOption("max",newval)
    }
  },
  computed: {},
  methods: {
    changevalue() {
      if (parseInt(document.getElementById("test").value) >= this.max) {
        this.$emit("getcurrentnum", this.max);
      } else {
        this.$emit(
          "getcurrentnum",
          parseInt(document.getElementById("test").value)
        );
      }
    }
  },
  created() {},
  mounted() {
    mui(".mui-numbox").numbox();
    
  }
};
</script>
<style lang="scss" scoped>
</style>