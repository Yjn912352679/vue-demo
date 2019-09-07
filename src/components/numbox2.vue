
  <!-- 使用mui  numbox  的css样式  不使用mui的js 文件  自己写js代码 -->

<template>
  <div class="numbox2">
    <!-- :data-numbox-max="max" -->
    <!-- <div class="a" data-numbox-min="1" >
      <button @click="sub" class="b c" type="button">-</button>
      <input id="test" @change="changevalue" class="e" type="number" :value="showval" />
      <button @click="add" class="b d" type="button">+</button>
    </div> -->
<!-- data-numbox-min='1' -->
     <div class="mui-numbox"   style="height:1.5rem">
      <button @tap="sub" class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input id="test" @change="changevalue" class="mui-input-numbox" type="number" v-model="showval" />
      <button @tap="add"  class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    max: Number
  },
  data() {
    return {
      showval: 1,
    };
  },
  watch: {},
  computed: {},
  methods: {
    add() {
      console.log(this.showval >= this.max)
      alert(1)
      console.log("原值:"+this.showval)
       alert(2)
      if (this.showval >= this.max) {
         alert(3)
        this.showval = 0;
        this.showval = this.max;
      } else {
        this.showval = parseInt(this.showval) + 1 ;
        alert(4)
        console.log("新值:"+this.showval)
      }
      this.$emit("getcurrentnum", this.showval);
    },
    sub() {
      this.showval = parseInt(document.getElementById("test").value)
      // alert("暂停一下")
      console.log("sub触发了---------输入框值为"+this.showval+"类型是:"+ typeof(this.showval)+"值为:"+ this.showval)
      if (this.showval <= 1) {
         this.showval = 0;
        this.showval = 1;
      } else {
        this.showval = this.showval - 1 ;
      }
      this.$emit("getcurrentnum", this.showval);
    },
    changevalue() {
      console.log("在changinput 中 值为:"+this.showval)
      alert(5)
      if (this.showval<= this.max &&this.showval >= 1) {
        console.log("11111通过input 修改的值 是"+typeof (this.showval)+"值为:"+this.showval)
        alert(6)
        this.$emit("getcurrentnum", this.showval);
      } else {
        alert(7)
        this.showval = 0;
        this.showval = this.max;
        alert(8)
        console.log("22222通过input 修改的值 是"+typeof (this.showval)+this.showval)
        this.$emit("getcurrentnum", this.max);
      }
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.a {
  display: flex;
  align-items: center;
}
</style>