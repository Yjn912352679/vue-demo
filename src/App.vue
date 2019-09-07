<template>
  <div class="myDiv">

    <!-- 顶部滚动栏 -->
      <!-- <tabTop></tabTop> -->

    
    
    <!-- 无实际作用  只是占高度  使得补齐 绝对定位的元素的高度 -->
      <!-- <div class="empty"></div> -->


      <router-view></router-view>
      <div class="empty1"></div>

      <router-view name="Main"></router-view>
      <router-view name="Bottom"></router-view>
      
    <!-- 无实际作用  只是占高度  使得补齐 绝对定位的元素的高度 -->
      <div class="empty"></div>



      <!-- 底部栏 -->
      <!-- <tabBottom2></tabBottom2> -->

  </div>
</template>

<script>
import router from "./router.js";
import tabTop from "./components/tab-top.vue";
import tabBottom from "./components/tab-bottom.vue"
import tabBottom2 from "./components/tab-bottom2.vue"

export default {
  components: {
    tabTop,
    tabBottom,
    tabBottom2
  },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store") ) {
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
    } 

    //在页面真正刷新之前将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload",()=>{
        sessionStorage.setItem("store",JSON.stringify(this.$store.state))
    })

  },
  mounted() {
        this.$store.getters.getSum
  }
  
  }
</script>
<style lang="scss" scoped>
 * { touch-action: pan-y; }

.main{
    width:50%;
    margin:0 auto;
    padding:30px;
    box-sizing:border-box;
    border:1px solid #F6F7F9;
    box-shadow: 10px 10px 10px 0 rgba(0, 33, 79, 0.11);
    border-radius:10px;
}

.choose{
  width:10%;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  line-height: 1;
}
a:-webkit-any-link{
  color:#000;
  text-decoration: none;
  font-size: 20px;
  font-weight: 800;
  position:relative;
}

a:-webkit-any-link:active{
  top:2px;
  left:2px;
  
}

.icon{
  box-sizing: border-box;
  padding:10px 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
}
.icon>img{
  margin-right: 20px;
  width:100px;
  height: 80px;
}

.icon>span{
  font-size: 24px;
  line-height: 1;
}


.empty{
  height: 3.125rem;
}

.empty1{
  height: 2.5rem
}

</style>