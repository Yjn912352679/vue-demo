<template>
  <div class="shops" ref="shops">
    <div>
      <!-- 背景纯色图片 -->
      <div class="backImg" ref="backImg">
        <img src="http://img.redocn.com/sheying/20140731/qinghaihuyuanjing_2820969.jpg" alt="">
      </div>

      <!-- 顶部搜索栏 -->
      <div class="search" ref="search">
        <!-- 搜索框  分享 拼货 -->
        <div v-show="!scrollFlage" >
          <span class="mui-icon mui-icon-search"></span><span class="mui-icon mui-icon-upload"></span>
        </div>
        <div v-show="scrollFlage" ref="searchInput" class="search-input">
          <input id="searchInputInner" data-a="inputsearch" ref="searchInputInner" @input="userInput" @focus="inputGetFocus" @blur="inputGetBlur" type="text">
          <label v-show="inputPlaceHolder" ref="inputPlaceHolder" class="inputPlaceHolder" for="searchInputInner">想吃什么搜一搜</label>
          <span ref="showSearch" v-show="showSearch" class="mui-icon mui-icon-search"></span>
        </div>

        <span class="mui-icon-extra mui-icon-extra-filter"></span>

      </div>

      <div class="shopsContainer" ref="shopsContainer">
        <div>
          <!-- 商家图标 -->
          <div class="shopsIcon" ref="shopsIcon">
            <div class="imgout" ref="imgout">
              <img
                ref="shopImg"
                src="http://img.redocn.com/sheying/20140731/qinghaihuyuanjing_2820969.jpg"
                alt
              />
            </div>

            <!-- 商铺简要信息 -->
            <div class="shopsProduce" ref="shopsProduce">
              <!-- 店铺名 -->
              <div>呜哩麻辣烫(曙光星城店)</div>

              <!-- 评价星级  配送花费时间 -->
              <div class="startAndTime">
                <p>评价4.1</p>
                <p class="shuxian"></p>
                <p>月售1497</p>
                <p class="shuxian"></p>
                <p>蜂鸟快送约55分钟</p>
              </div>

              <!-- 可领取的优惠券 -->
              <div></div>

              <!-- 预览公告信息 -->
              <div></div>

              <!-- 点击箭头显示更多的公告信息 -->
              <div></div>
            </div>
          </div>

              

          <!-- to="/shops/0/orderFood" -->
          <span @click="toorderfood">点餐</span>

          <!-- to="/shops/0/appraise" -->
              <span @click="toappraise">评价<span>2200</span></span>

              <!-- to="/shops/0/store" -->
              <span @click="tostore">商家<span>有故事</span></span>

              <router-view name="shopsContainer"></router-view>

          <div class="order-admire-shops-out" ref="orderAdmireShopsOut">
            <!-- 点餐  评价 商家 -->
            <div class="order-admire-shops">
              
              

              <!-- 点餐 -->
              <div class="orderFood">
                <div class="shopsRecommend" ref="shopsRecommend">
                  <div>商家推荐</div>
                  <div class="shopsRecommendScroll-out" ref="shopsRecommendScrollOut">
                    <ul class="shopsRecommendScroll" ref="shopsRecommendScroll">
                      <li class="recommendItem">
                        <div class="itemImg">
                          <img
                            src="http://img.redocn.com/sheying/20140731/qinghaihuyuanjing_2820969.jpg"
                            alt
                          />
                        </div>
                        <div class="goodsName">
                          <p>全打虾滑&nbsp;&nbsp;(3块)</p>
                        </div>
                        <div class="goodsSellCount">
                          <p>月售244</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <p>好评率:99%</p>
                        </div>
                        <div>
                          <span></span>

                          <div>
                            <span class></span>
                          </div>
                        </div>
                      </li>
                      <li class="recommendItem">
                        <div class="itemImg">
                          <img
                            src="http://img.redocn.com/sheying/20140731/qinghaihuyuanjing_2820969.jpg"
                            alt
                          />
                        </div>
                        <div class="goodsName">
                          <p>全打虾滑&nbsp;&nbsp;(3块)</p>
                        </div>
                        <div class="goodsSellCount">
                          <p>月售244</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <p>好评率:99%</p>
                        </div>
                        <div>
                          <span></span>

                          <div>
                            <span class></span>
                          </div>
                        </div>
                      </li>
                      <li class="recommendItem">
                        <div class="itemImg">
                          <img
                            src="http://img.redocn.com/sheying/20140731/qinghaihuyuanjing_2820969.jpg"
                            alt
                          />
                        </div>
                        <div class="goodsName">
                          <p>全打虾滑&nbsp;&nbsp;(3块)</p>
                        </div>
                        <div class="goodsSellCount">
                          <p>月售244</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <p>好评率:99%</p>
                        </div>
                        <div>
                          <span></span>

                          <div>
                            <span class></span>
                          </div>
                        </div>
                      </li>
                      <li class="recommendItem">
                        <div class="itemImg">
                          <img
                            src="http://img.redocn.com/sheying/20140731/qinghaihuyuanjing_2820969.jpg"
                            alt
                          />
                        </div>
                        <div class="goodsName">
                          <p>全打虾滑&nbsp;&nbsp;(3块)</p>
                        </div>
                        <div class="goodsSellCount">
                          <p>月售244</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <p>好评率:99%</p>
                        </div>
                        <div>
                          <span></span>

                          <div>
                            <span class></span>
                          </div>
                        </div>
                      </li>
                      <li class="recommendItem">
                        <div class="itemImg">
                          <img
                            src="http://img.redocn.com/sheying/20140731/qinghaihuyuanjing_2820969.jpg"
                            alt
                          />
                        </div>
                        <div class="goodsName">
                          <p>全打虾滑&nbsp;&nbsp;(3块)</p>
                        </div>
                        <div class="goodsSellCount">
                          <p>月售244</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <p>好评率:99%</p>
                        </div>
                        <div>
                          <span></span>

                          <div>
                            <span class></span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <linkageMenu
                  :menulist="menulist"
                  :allGoodsList="allGoodsList"
                  :right="linkageMenuRightScrollStatus"
                  :left="linkageMenuLeftScrollStatus"
                  @postChildLeftStatus="getChildLeftStatus"
                  @postChildRightStatus="getChildRightStatus"
                ></linkageMenu>
              </div>

              <!-- 评价 -->
              <div class="appraise">
                <!-- 总分 -->
                <div class="score">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>

                </div>

                <!--评价统计 -->
                <div class="summary">
                  <div>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div>
                    <span></span>
                  </div>

                  <!-- 虚线 -->
                  <p></p>

                  <div>
                    <span></span><span>只看有内容的评价</span>
                  </div>

                </div>

                <!-- 用户评价 -->
                <div class="userAppraise">
                  <ul>
                    <!-- 最新的订单评价 -->
                    <li>
                      <!-- 买家信息 -->
                      <div>
                        <div><img src="" alt=""></div>
                        <div>

                          <div>
                            <!-- 用户名 和 日期 -->
                            <span></span><span></span>
                          </div>
                          <div>
                            <!-- 星数 和 概述评价 -->
                            <span></span><span></span>
                          </div>

                        </div>
                       

                      </div>

                      <!-- 订单食物的缩略图 -->
                      <div>
                        <!-- 实物照片 -->
                        <div>
                          <img src="" alt=""><img src="" alt="">
                        </div>

                        <!-- 点赞图标  和  订单的套餐名称 -->
                        <div>
                          <!-- 点赞图标 -->
                          <span></span>

                          <!-- 套餐名称 -->
                          <div>
                            <span></span><span></span>
                          </div>
                        </div>
                        
                      </div>


                      <div>
                        <!-- 评论列表 -->
                        <ul>
                          <li>用户评价1</li>
                          <li>商家回复1</li>
                          <li>用户评价2</li>
                          <li>商家回复2</li>
                        </ul>
                      </div>

                    </li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>

              <!-- 商家 -->
              <div class="store"></div>
            </div>
          </div>
        </div>
      </div>
    </div>


    
  </div>
</template>

<script>
import BScroll from "better-scroll";
import linkageMenu from "./linkage-menu.vue";
import { setTimeout } from "timers";


export default {
  components: {
    linkageMenu

  },
  props: {},
  data() {
    return {
      menulist: [
        {
          listId: 0,
          listIcon: "",
          listTitle: "热销"
        },
        {
          listId: 1,
          listIcon: "",
          listTitle: "必选精品"
        },
        {
          listId: 2,
          listIcon: "",
          listTitle: "呜哩特色"
        },
        {
          listId: 3,
          listIcon: "",
          listTitle: "呜哩健康时蔬"
        },
        {
          listId: 4,
          listIcon: "",
          listTitle: "呜哩荤菜类"
        },
        {
          listId: 5,
          listIcon: "",
          listTitle: "呜哩豆制品"
        }
      ],
      allGoodsList: [],
      linkageMenuLeftScrollStatus: true,
      linkageMenuRightScrollStatus: true,
      scrollFlage:false,
      preScoll:0,
      showSearch:true,
      inputPlaceHolder:true
    };
  },
  watch: {},
  computed: {},
  methods: {
    initScroll() {
      this.$nextTick(() => {
        if (
          !this.$refs.shopsRecommendScrollOut ||
          !this.$refs.shops ||
          !this.$refs.shopsContainer
        ) {
          return;
        }

        // 进入界面先封锁子组件中的滚动效果
        this.linkageMenuLeftScrollStatus = false;
        this.linkageMenuRightScrollStatus = false;

        //  商品推荐栏 横向滚动
        this.shopsRecommendScroll = new BScroll(
          this.$refs.shopsRecommendScrollOut,
          {
            scrollX: true,
            scrollY: false,
            click: true,
            stopPropagation: true,
            bounce: true,
            useTransition: false, // 防止iphone微信滑动卡顿
            listenScroll: true,

            probeType: 3
          }
        );



        this.shopsContainerScroll = new BScroll(this.$refs.shopsContainer, {
          scrollY: true,
          scrollX: false,
          click: true,
          stopPropagation: true,
          bounce: true,
          useTransition: false, // 防止iphone微信滑动卡顿
          listenScroll: true,

          probeType: 3
        });

        var shopsIconHeight = this.$refs.shopsIcon.offsetHeight;
        var shopsRecommendHeight = this.$refs.shopsRecommend.offsetHeight;
        var outScrollMaxHeight = shopsIconHeight + shopsRecommendHeight;
        // console.log(outScrollMaxHeight)
        var oriHeight = this.$refs.shopImg.offsetHeight;
        var oriWidth = this.$refs.shopImg.offsetWidth;

        this.shopsContainerScroll.on("scroll", pos => {
          // 往下 为负值  往上为正值
          if (pos.y >= 0) {
            this.preScoll = pos.y;
            this.scrollFlage = false;
             this.$refs.search.style.backgroundColor = "rgba(255,255,255,0)"
            this.linkageMenuLeftScrollStatus = false;
            this.linkageMenuRightScrollStatus = false;
          } else if (-pos.y <= outScrollMaxHeight) {

            // 渐变商家店铺图片的透明度
            if (-pos.y <= 40) {
              let coefficient = -pos.y / 40;
              coefficient = 1 - parseFloat(coefficient.toString().slice(0, 5));

              this.$refs.imgout.style.transform =
                "scale(" + coefficient + "," + coefficient + ")"
              this.$refs.imgout.style.opacity = coefficient;
              

              if (-pos.y >= 30) {
                this.$refs.imgout.style.opacity = 0;
              }

            // 顶部搜索栏的显隐
              if (this.preScoll - (-pos.y) >= 1){
                if (-pos.y<40){
                  this.$refs.searchInput.style.opacity = 1-coefficient
                  this.$refs.search.style.backgroundColor = "rgba(255,255,255,"+ (1-coefficient) +")"
                }

              }else if (this.preScoll - (-pos.y) <= -1){
                 this.scrollFlage = true
                if (-pos.y>0 && -pos.y <= 40){
                   this.$refs.searchInput.style.opacity = 1-coefficient
                   this.$refs.search.style.backgroundColor = "rgba(255,255,255,"+ (1-coefficient) +")"
                }
              }
            }
            else {
                  this.$refs.search.style.backgroundColor = "rgba(255,255,255,1)"
                }
            this.linkageMenuLeftScrollStatus = false;
            this.linkageMenuRightScrollStatus = false;
          } else {
            this.linkageMenuLeftScrollStatus = true;
            this.linkageMenuRightScrollStatus = true;
          }

          this.preScoll = -pos.y
        });
      });
    },

    inputGetFocus(){
      this.showSearch = false

      this.$refs.inputPlaceHolder.style.transform = "translateX(-50px)"
      this.$refs.inputPlaceHolder.style.transition = "all .5s ease"
    },

    inputGetBlur(){
      this.showSearch = true
      this.inputPlaceHolder = true
      // this.$refs.inputPlaceHolder.style.transform = "translateX(-50px)"

      this.$refs.searchInputInner.value = null;
      // setTimeout(() => {
      this.$refs.inputPlaceHolder.style.transform = "translateX(0px)"
      this.$refs.inputPlaceHolder.style.transition = "all .5s ease"
      // }, 150);

     

      // 初始化  过渡的初始状态
      this.$refs.showSearch.style.transform = "scale(0)"

      // 延时执行  先让  inputPlaceHolder 的平移  再执行 showSearch的放缩
      setTimeout(() => {
        //  过渡的最终状态
      this.$refs.showSearch.style.transform = "scale(1)"
      this.$refs.showSearch.style.transition = "transform .2s ease"
      }, 150);

    },
    userInput(){
      let emptyReg = /^\s*$/g
            this.inputPlaceHolder = false
      console.log(this.$refs.searchInputInner.value)
      if (emptyReg.test(this.$refs.searchInputInner.value)){
        this.inputPlaceHolder = true
      }
    },

    getChildLeftStatus(s) {
      this.linkageMenuLeftScrollStatus = s;
    },

    getChildRightStatus(s) {
      this.linkageMenuRightScrollStatus = s;
    },

    toorderfood(){
      this.$router.push("/shops/0/orderfood")
    },

    toappraise(){
      this.$router.push("/shops/0/appraise")
    },
     tostore(){
      this.$router.push("/shops/0/store")
    },

    // betterscroll  计算内层元素宽度之和
    caculationWidth() {
      let width = 0;
      let lis = document.querySelectorAll(".recommendItem");
      let lisWidth = [];
      for (
        let i = 0;
        i < document.querySelectorAll(".recommendItem").length;
        i++
      ) {
        lisWidth[i] = parseInt(getComputedStyle(lis[i], null).width);
        width += lisWidth[i];
      }
      this.$refs.shopsRecommendScroll.style.width = width + "px";
    },

    // 计算当前屏幕视窗可视高度
    getScreenHeight() {
      this.$refs.shops.style.height = screen.availHeight + "px";
      this.caculationShopContainerHeight(this.$refs.shops.style.height);
    },

    caculationShopContainerHeight(totalHeight) {
      let ShopContainerHeight =
        parseInt(totalHeight) -
        (parseInt(getComputedStyle(this.$refs.backImg).height) -
          parseInt(getComputedStyle(this.$refs.shopsContainer).top) * -1);
      this.$refs.shopsContainer.style.height = ShopContainerHeight + "px";
    },


    createStyleSheet() {
      var style = document.createElement('style');
      style.appendChild(document.createTextNode(""));
      document.head.appendChild(style);
      return style.sheet;
    }


  },
  created() {},
  mounted() {
    setTimeout(() => {
      this.initScroll();
    }, 500);
    this.caculationWidth();
    this.getScreenHeight();
  }
};
</script>
<style lang="scss" scoped>
.shops {
  width: 100%;
}

* {
  margin: 0;
  padding: 0;
}

// input::-ms-input-placeholder{text-align: center;}
// input::-webkit-input-placeholder{text-align: center;}


// input[data-a="inputsearch"]::-webkit-input-placeholder{
//   text-align: left;
// }


// input[data-a="inputsearch"]:focus{
//   content:attr(data-a)
// }


.backImg {
  width: 100%;
  height: 7rem;
  // background: url("") 100%
  //   no-repeat;
}
.backImg>img{
  width:100%;
  height: 100%;
}

.shopsContainer {
  position: relative;
  top: -3.5rem;
}
.shopsIcon {
  height: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.shopsProduce {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // margin-top:1rem;
}
.startAndTime {
  // width:70%;
  font-size: 0.875rem;
  font-weight: lighter;
  display: flex;
  align-items: center;
  justify-content: center;
}

.shuxian {
  display: inline-block;
  width: 0.8px;
  height: 10px;
  border-left: 0.4px solid #333;
  margin: 0 5px;
}

.imgout {
  width: 20%;
  height: 55%;
}

.imgout > img {
  width: 100%;
  height: 100%;
  border-radius: 4px;
}

.order-admire-shops {
  width: 100%;
}

.orderFood {
  width: 100%;
}

.shopsRecommend {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.shopsRecommendScroll-out {
  width: 100%;
  margin: 0 auto;
  overflow-x:hidden;
}

.shopsRecommendScroll {
  // width:100%;
  display: flex;
  align-items: center;
  // overflow-x:hidden;
}

.recommendItem {
  flex: 0 0 9.375rem;
  height: 10rem;
  display: flex;
  flex-direction: column;
  padding-right: 10px;
  // margin-right:10px;
  border-radius: 5px;
}

.itemImg {
  width: 100%;
  height: 6rem;
  border-radius: 5px 5px 0 0;
}

.itemImg > img {
  width: 100%;
  height: 100%;
  border-radius: 5px 5px 0 0;
}
.goodsName {
  width: 100%;
  height: 30px;
  font-size: 15px;
  line-height: 2;
}

.goodsName > p {
  font-size: 1rem;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.goodsSellCount {
  height: 20px;
  display: flex;
  align-items: center;
}

.goodsSellCount > p {
  font-size: 0.8rem;
}

.shops>div{
  position:relative
}

.search{
  width:100%;
  height: 3.125rem;
  display:flex;
  align-items: center;
  position:absolute;
  top:0;
  left:0;
  z-index:2;
  background-color: rgba(255,255,255,0)
}

.inputinstead{
   width:83%;
   height:100%;
   display: flex;
   justify-content: flex-end;
   align-items: center
}

.mui-icon{
  font-size: 30px;
  margin-left:20px;
}

.mui-icon-extra{
   font-size: 30px;
  margin-left:20px;
}

.search>div{
  width:83%;
  height:100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.search-input{
  width:83%;
  height:100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position:relative;
}

.search-input>input{
  margin:0;
  width:80%;
  height:80%;
  border-radius: 20px;
  outline: none;
  background-color: rgb(222, 224, 222);
  padding-left:.9375rem;
}


.search-input>span{
  position: absolute;
  left:32%;
  margin:0;
}

.inputPlaceHolder{
  font-size: 1rem;
  font-weight: 100;
  color:rgb(173, 161, 161);
  position: absolute;
  left:42%;
}
</style>