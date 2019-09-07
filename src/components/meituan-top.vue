<template>
    <div class="meituan-top">
      <div v-show="!isClick" class="top-select-out">
        <div class="top-select">
          <p v-for="item in foodsList" :key="item.path">{{item.name}}</p>
        </div>
        <span class="mui-icon" @click="showMoreKinds" :class="{'mui-icon-arrowdown':!isClick}"></span>
      </div>

      <transition name="top">
        <div v-show="isClick" class="showMoreKinds">
          <div class="showMoreKinds-top">
            <p>请选择分类</p>
            <span class="mui-icon" @click="showMoreKinds" :class="{'mui-icon-arrowup':isClick}"></span>
          </div>

          <div class="showMoreKinds-main">
            <div class="showMoreKinds-left">
              <div
                @click="clickTheitem(item.id)"
                class="showMoreKinds-left-item"
                :class="{'active':clickItem[item.id]}"
                v-for="item in MoreKinds"
                :key="item.id"
              >
                <p>{{item.title}}</p>
                <p class="cellNum">{{item.cellNum}}</p>
              </div>
            </div>

            <div class="showMoreKinds-right">
              <router-view name="showMoreRight"></router-view>
            </div>
          </div>
        </div>
      </transition>

     
    </div>
</template>

<script>

export default {
  components: {},
  props: {},
  data() {
    return {
      isClick: false,
      preitem: 0,
      clickItem: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ],
      foodsList: [
        {
          name: "全部",
          path: "/meiTuan/all"
        },
        {
          name: "面食粥点",
          path: "/meiTuan/mianshizhoudian"
        },
        {
          name: "简餐便当",
          path: "/meiTuan/biancanbiandang"
        },
        {
          name: "汉堡披萨",
          path: "/meiTuan/hanbaopisa"
        },
        {
          name: "香锅冒菜",
          path: "/meiTuan/xiangguomaocai"
        },
        {
          name: "小吃炸串",
          path: "/meiTuan/xiaochizhachuan"
        },
        {
          name: "地方菜系",
          path: "/meiTuan/difangcaixi"
        },
        {
          name: "日韩料理",
          path: "/meiTuan/rihanliaoli"
        },
        {
          name: "轻食简餐",
          path: "/meiTuan/qingshijiancan"
        }
      ],
      MoreKinds: [
        {
          id: 0,
          title: "全部",
          cellNum: 2000
        },
        {
          id: 1,
          title: "美食",
          cellNum: 2000
        },
        {
          id: 2,
          title: "快餐便当",
          cellNum: 100
        },
        {
          id: 3,
          title: "特色菜系",
          cellNum: 1800
        },
        {
          id: 4,
          title: "异国料理",
          cellNum: 60
        },
        {
          id: 5,
          title: "小吃夜宵",
          cellNum: 30
        },
        {
          id: 6,
          title: "甜品饮品",
          cellNum: 66
        },
        {
          id: 7,
          title: "果蔬生鲜",
          cellNum: 65
        },
        {
          id: 8,
          title: "商品超市",
          cellNum: 98
        },
        {
          id: 9,
          title: "鲜花绿植",
          cellNum: 100
        },
        {
          id: 10,
          title: "医药健康",
          cellNum: 69
        },
        {
          id: 11,
          title: "早餐",
          cellNum: 24
        },
        {
          id: 12,
          title: "午餐",
          cellNum: 13
        }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {
    showMoreKinds() {
      this.isClick = !this.isClick;
      if (this.isClick) {
        this.clickTheitem(0);
        this.$router.push("/meiTuan/top/" + 0);
      } else {
        this.$router.push("/meiTuan");
      }
    },
    clickTheitem(id) {
      console.log(id);
      if (this.isClick) {
        this.$router.push("/meiTuan/top/" + id);
      }

      this.clickItem[this.preitem] = false;
      this.clickItem[id] = true;
      this.preitem = id;
    }
  },
  created() {},
  mounted() {
    document
      .querySelector(".showMoreKinds")
      .addEventListener("transitionend", function() {
        document.querySelector(".meituan-top").style.height = getComputedStyle(
          document.querySelector(".showMoreKinds")
        ).height;
        console.log(document.querySelector(".meituan-top").style.height);
      });
  }
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.meituan {
  margin-top: 0.625rem;
}

.meituan-top {
  //  position:relative;
  width: 100%;
  position: fixed;
  // top: 3.75rem;
  top:0;
  left: 0;
}



// ___以下为动画区域_____________________________________________

.top-enter,
.top-leave-to {
  opacity: 0;
  height: 0px;
}

.top-enter-active,
.top-leave-active {
  transition: all 0.4s ease;
}

// 新加的  因为在开始动画的时候 给了一个高度0，，，如果不给结束的时候的高度
//        动画会立刻结束，，没有动画的效果
.top-enter-to,
.top-leave {
  height: 15.875rem;
}
// _____________________________________________________
// _____________________________________________________

.top-select-out {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.showMoreKinds {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  // 使原高度  比动画中的某一时刻的高度 高出的部分隐藏 ，从而实现高度逐渐展开的视觉效果
  overflow: hidden;
}

.top-select-out > span {
  box-shadow: 1px 0 1px aqua;
}

.top-select-out {
  background-color: aqua;
}

// ________以下为横向滚动条_____________________________________________
// _____________________________________________________
.top-select {
  display: flex;
  align-items: center;
  height: 1.875rem;
  width: 90%;
  //  1.横向方向 设置滚动  需要配合下面这个class来隐藏滚动条
  overflow-x: scroll;

  //  2.内容不换行  这个也很重要，使得字数过多时 不会改变整个盒子的高度
  white-space: nowrap;
}

// 3.滚动显示  并且隐藏滚动条   移动端比较适用 但同样只适用于webkit的浏览器 如 谷歌Chrome, 苹果Safari
.top-select::-webkit-scrollbar {
  display: none;
}

// 不用 flex 来实现  用宽度实现  但不需要定义width 让元素自己去撑开宽度就好  直接设置 margin 间距就好
.showMoreKinds-top > p,
.top-select > p {
  margin: 0;
  padding: 0;
  // 4.1  第一种 用 元素自己去撑开宽度  能适应不同字数
  margin: 0 0.625rem;

  // 4.2  第二种 用flex 固定宽度   遇到多的字数会出现显示的问题
  // flex:0 0 6.25rem;
  font-size: 0.9375rem;
  line-height: 1.5;
}
// _____________________________________________________
// _____________________________________________________

.showMoreKinds-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 1.875rem;
  background-color: aqua;
}

.mui-icon {
  font-size: 1.75rem;
}

.showMoreKinds-main {
  display: flex;
  background-color: aqua;
}

.showMoreKinds-left {
  width: 40%;
  // background-color: #fff;
  // border-right:1px solid #333;
  display: flex;
  flex-direction: column;
  height: 14rem;
  overflow-y: scroll;
}
.showMoreKinds-left::-webkit-scrollbar {
  display: none;
}

.showMoreKinds-left-item {
  flex: 0 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.625rem;
  border-right: 1px solid rgba(0, 0, 0, 0);
  box-sizing: border-box;
}

.cellNum {
  margin-right: 0.625rem;
  font-size: 0.75rem;
  line-height: 1;
  border-radius: 5px;
  border: 1px solid goldenrod;
  padding: 0 5px;
  box-sizing: border-box;
}

.showMoreKinds-right {
  width: 70%;
  background-color: #999;
}

// scss 中 如果添加父类class 到元素中去  其子代同样会被添加到元素中
.active {
  background-color: #999;
  p {
    color: aqua;
  }
}
</style>