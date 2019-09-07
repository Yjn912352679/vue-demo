<template>
  <div class="linkage-menu" ref="linkageMenu">
    <div class="left" ref="left">
      <!-- 左侧导航栏 -->
      <ul class="leftMenu" ref="leftMenu">
        <li
          v-for="(item,index) in menulist"
          :key="item.listId"
          :class='{"clickMenu": clickMenulist[index]}'
          @click="chosseMenu(index)"
        >
          <!-- 可以带图标 -->
          <span :class="item.listIcon"></span>
          <p>{{item.listTitle}}</p>
        </li>
      </ul>
    </div>

    <!-- 右边商品展示栏 -->
    <div class="right" ref="right">
      <ul class="rightContent" ref="rightContent">
        <li class="rightItem">
          <ul class="ItemIndex">
            <li>1</li>
            <li>1.1</li>
            <li>1.2</li>
            <li>1.3</li>
            <li>1</li>
            <li>1.1</li>
            <li>1.2</li>
            <li>1.3</li>
            <li>1</li>
            <li>1.1</li>
            <li>1.2</li>
            <li>1.3</li>
            <li>1</li>
            <li>1.1</li>
            <li>1.2</li>
            <li>1.3</li>
            <li>1</li>
            <li>1.1</li>
            <li>1.2</li>
            <li>1.3</li>


          </ul>
        </li>
        <li class="rightItem">
          <ul>
            <li>2</li>
            <li>2.1</li>
            <li>2.2</li>
            <li>2.3</li>
            <li>2</li>
            <li>2.1</li>
            <li>2.2</li>
            <li>2.3</li>
            <li>2</li>
            <li>2.1</li>
            <li>2.2</li>
            <li>2.3</li>
            <li>2</li>
            <li>2.1</li>
            <li>2.2</li>
            <li>2.3</li>
            <li>2</li>
            <li>2.1</li>
            <li>2.2</li>
            <li>2.3</li>

          </ul>
        </li>
        <li class="rightItem">
          <ul>
            <li>3</li>
            <li>3.1</li>
            <li>3.2</li>
            <li>3.3</li>
            <li>3</li>
            <li>3.1</li>
            <li>3.2</li>
            <li>3.3</li>
            <li>3</li>
            <li>3.1</li>
            <li>3.2</li>
            <li>3.3</li>
          </ul>
        </li>
        <li class="rightItem">
          <ul>
            <li>4</li>
            <li>4.1</li>
            <li>4.2</li>
            <li>4.3</li>
            <li>4</li>
            <li>4.1</li>
            <li>4.2</li>
            <li>4.3</li>
            <li>4</li>
            <li>4.1</li>
            <li>4.2</li>
            <li>4.3</li>
          </ul>
        </li>
        <li class="rightItem">
          <ul>
            <li>5</li>
            <li>5.1</li>
            <li>5.2</li>
            <li>5.3</li>
            <li>5</li>
            <li>5.1</li>
            <li>5.2</li>
            <li>5.3</li>
            <li>5</li>
            <li>5.1</li>
            <li>5.2</li>
            <li>5.3</li>
            <li>5</li>
            <li>5.1</li>
            <li>5.2</li>
            <li>5.3</li>
          </ul>
        </li>
        <li class="rightItem">
          <ul>
            <li>6</li>
            <li>6.1</li>
            <li>6.2</li>
            <li>6.3</li>
            <li>6</li>
            <li>6.1</li>
            <li>6.2</li>
            <li>6.3</li>
            <li>6</li>
            <li>6.1</li>
            <li>6.2</li>
            <li>6.3</li>
            <li>6</li>
            <li>6.1</li>
            <li>6.2</li>
            <li>6.3</li>
            <li>6</li>
            <li>6.1</li>
            <li>6.2</li>
            <li>6.3</li>
            <li>6</li>
            <li>6.1</li>
            <li>6.2</li>
            <li>6.3</li>
          </ul>
        </li>

        <!-- 用来占位  使得最下方一个分类可以滑动到顶 -->
        <div class="rightEmpty" ref="rightEmpty"></div>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  components: {},
  props: {
    left:Boolean,
    right:Boolean,
    menulist: {
      type: Array,
      default: () => {
        return "";
      }
    },
    allGoodsList: {
      type: Array,
      default: () => {
        return "";
      }
    }
  },
  data() {
    return {
      rightItemHeight: [],
      clickMenulist: [],
      leftMenuPre: 0,
      rightLastScroll:0,
      leftLastScroll:0,
    };
  },
  watch: {
    left(newval,oldval){
      if (newval===true){
        this.leftScroll.enable()
        
      }else{
         this.leftScroll.disable()
        
      }
      
      // this.leftScroll.refresh()
    },
    right(newval,oldval){
      if (newval===true){
        this.rightContentScroll.enable()
      }else{
         this.rightContentScroll.disable()
          // this.rightContentScroll.refresh()
      }
     
    },

  },
  computed: {},
  methods: {
    initScroll() {
      this.$nextTick(() => {
        if (!this.$refs.right) {
          return;
        }

        //  右侧滚动栏对象
        this.rightContentScroll = new BScroll(this.$refs.right, {
          scrollX:false,
          scrollY: true,
          click: true,
          stopPropagation: true,
          bounce: false,
          useTransition: false, // 防止iphone微信滑动卡顿
          listenScroll: true,

          probeType: 3
        });

          let righttops = this.$refs.rightContent.offsetTop;
          let leftActiveIndex = 0;
          let maxScrollY =
            parseInt(document.querySelector(".rightContent").offsetHeight) -
            parseInt(document.querySelector(".right").offsetHeight);

        this.rightContentScroll.on("scroll", pos => {
          let rightposY = Math.round(pos.y);
          if (this.rightLastScroll - (-rightposY) >= 1 && (-rightposY)<5 ){
          this.$emit("postChildRightStatus",false)
               // 记录前一次的滚动
          this.rightLastScroll = 0
          }else if (-rightposY >0){
             this.$emit("postChildRightStatus",true)
             // 记录前一次的滚动
          this.rightLastScroll = -rightposY
            
          }
            
            
            // 往上拉的时候  把内层滚动废止
            // if (rightposY >0){
            //     this.$emit("postChildRightStatus",false)
            // }else if (-rightposY >0){
            //    this.$emit("postChildRightStatus",true)
            // }


          this.rightItemHeight.some((item, i) => {
              if (rightposY > 0) {
                return true;
              } else {
                if (-rightposY < item) {
                  leftActiveIndex = i;

                  this.$set(this.clickMenulist, this.leftMenuPre, false);
                  this.$set(this.clickMenulist, leftActiveIndex, true);
                  this.leftMenuPre = leftActiveIndex;

                  return true;
                }
              }
          });

        
        });

        // 左侧滚动栏
        this.leftScroll = new BScroll(this.$refs.left, {
          scrollX:false,
          scrollY: true,
          click: true,
          stopPropagation: true,
          bounce: false,

          probeType: 3
        });

        

        this.leftScroll.on("scroll", pos => {
          let lefttops = this.$refs.leftMenu.offsetTop;
          let leftposY = Math.round(pos.y);

          if (this.leftLastScroll - (-leftposY) >= 1 && (-leftposY)<5 ){
          this.$emit("postChildLeftStatus",false)
               // 记录前一次的滚动
          this.leftLastScroll = 0
          }else if (-leftposY >0){
             this.$emit("postChildLeftStatus",true)
             // 记录前一次的滚动
          this.leftLastScroll = -leftposY
            
          }
        });

        this.calculateHeight();
        this.getScreenHeight();
        this.$refs.rightEmpty.style.height = this.$refs.right.offsetHeight - (this.rightItemHeight[this.rightItemHeight.length-1] - this.rightItemHeight[this.rightItemHeight.length-2]) + "px"
      });
    },

    // 获取第一次的数据   如果后续有拉到底能继续加载的数据  则再次调用该方法
    calculateHeight() {
      this.rightItemHeight.length = document.querySelectorAll(
        ".rightItem"
      ).length;
      let preHeight = 0;
      for (let i = 0; i < this.rightItemHeight.length; i++) {
        this.$set(
          this.rightItemHeight,
          i,
          preHeight +
            parseInt(document.querySelectorAll(".rightItem")[i].offsetHeight)
        );
        preHeight = this.rightItemHeight[i];
      }

      console.log(this.rightItemHeight);
    },

    chosseMenu(index) {
      this.$set(this.clickMenulist, this.leftMenuPre, false);
      this.$set(this.clickMenulist, index, true);
      this.leftMenuPre = index;
      if (index == 0) {
        this.rightContentScroll.scrollTo(0, 0, 500);
      } else {
        this.rightContentScroll.scrollTo(
          0,
          -this.rightItemHeight[index - 1],
          500
        );
      }
    },

    getScreenHeight() {
      this.$refs.linkageMenu.style.height = screen.availHeight - 20 + "px";
    },

  },
  created() {
    this.clickMenulist.length = this.menulist.length;
    for (let i = 0; i < this.clickMenulist.length; i++) {
      if (i == 0) {
        this.clickMenulist[i] = true;
      } else {
        this.clickMenulist[i] = false;
      }
    }
  },
  mounted() {
    //在mounted中初始化 better-scroll
    //备注: 这里使用定时器因数据多,根据个人使用
    setTimeout(() => {
      this.initScroll();
    }, 500);
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.linkage-menu {
  display: flex;
  // height:40rem;
}

.left {
  width: 30%;
  height: 40%;
  overflow-y:hidden;
}

.leftMenu,
.rightContent {
  display: flex;
  flex-direction: column;
}

.leftMenu > li {
  width: 100%;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

}

.rightContent > li {
  width: 100%;
  // height: 5rem;
  box-sizing: border-box;
  border: 1px solid red;
}

.right {
  width: 68%;
  height:100%;
  overflow-y:hidden
}

.rightItem {
  padding: 3px;
}

.clickMenu {
  background-color: aqua !important;
}

// 该项高度由 .right 决定
// .rightEmpty {
//   width: 68%;
//   height: 15rem;
// }
</style>