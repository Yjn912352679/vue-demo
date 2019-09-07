<template>
  <div class="meituan-main">
    <img src="http://img.redocn.com/sheying/20140731/qinghaihuyuanjing_2820969.jpg" />
    <!-- 综合排序 筛选 -->
    <div class="order-outter">
      <div class="order-out">
        <div class="orderandicon integrated-sort" @click="changecolor(0)">
          <span ref="sortKinds" class="order kindsTitle" :class="{'order-active':clickOrder[0] }">综合排序</span>
          <span
            class="order mui-icon"
            :class="{'mui-icon-arrowdown':!issumorder , 'mui-icon-arrowup':issumorder,'order-active':clickOrder[0] }"
            @click.stop="sumorder"
          ></span>
        </div>

        <span @click="changecolor(1)" class="order orderandicon" :class="{'order-active':clickOrder[1]}">距离</span>
        <span @click="changecolor(2)" class="order orderandicon" :class="{'order-active':clickOrder[2]}">销量</span>
      </div>
      <div>
        <span class="order">筛选</span>
        <span class="order mui-icon-extra mui-icon-extra-filter"></span>
      </div>

       <!-- 点击综合排序 弹出的选择框 -->
    <div v-show="issumorder" class="sortKinds">
      <ul>
        <li v-for="item in orderKindsList" :key="item.id" @click="chosseKind(item.id)">
          <p>{{item.title}}</p>
          <span class="mui-icon" :class="{'mui-icon-checkmarkempty':chooseOrderKind[item.id]}"
          ></span>
        </li>
       
      </ul>

    </div>
    </div>

   

    <!-- 品质联盟 -->
    <div class="quan-unity">
      <span>品质联盟</span>
      <span>会员领红包</span>
      <span>满减优惠</span>
      <span>配送费优惠</span>
    </div>
    <div class="underline"></div>

    <!-- 商家列表 -->
    <div class="shops">
      <div @click="toShops(item.shopsId)" class="shops-item" v-for="item in shopsList" :key="item.shopsId">
        <!-- <div class="shopsImg-out"> -->
        <img
          class="shopsImg"
          src="http://img.redocn.com/sheying/20140731/qinghaihuyuanjing_2820969.jpg"
        />
        <!-- </div> -->
        <div class="shops-info">
          <!-- 第一行 -->
          <div class="shops-firstrow">
            <!-- 商家名称 -->
            <p class="shopName">{{item.shopsName}}</p>
            <!-- 省略号图标 -->
            <span class="collaicon mui-icon mui-icon-more"></span>
          </div>

          <div class="shops-secrow">
            <span>预定中&nbsp;&nbsp; 10:55配送</span>
          </div>

          <!-- 第二行 -->
          <div class="shops-thirdrow">
            <div class="shops-thirdrow-left">
              <!-- 星级  销量-->
              <div class="startandNum">
                <i class="start mui-icon mui-icon-star-filled"></i>
                <p class="start">3.9</p>
              </div>
              <p>月售100</p>
            </div>

            <div class="shops-thirdrow-right">
              <span class="arrive-intime">准时达</span><span class="faster-submit">蜂鸟专送</span>
            </div>
          </div>

          <!-- 配送规则 -->
          <div class="shops-fourthrow">
            <div class="shops-fourthrow-left">
              <p>起送￥20</p>&nbsp;&nbsp;
              <p>配送￥1</p>
              <del class="delete">￥3.6</del>
            </div>
            <div class="shops-fourthrow-right">
              <p>{{item.arriveTime | spendTimeFormat}}</p>&nbsp;
              <p>{{item.distance | distanceFormat}}</p>
            </div>
          </div>

          <div class="shops-fifthrow">
            <span class="admire">“消费者评价提取”</span>
          </div>

          <div class="shops-sixthrow">
            <!-- 左边优惠形式  设置长度  超过则换行-->
            <div class="shops-sixthrow-left">
              <span class="icell firstly">25减12</span>
              <span class="icell firstly">35减16</span>
              <span class="icell firstly">50减24</span>
              <span class="icell vip">6元会员红包</span>
              <span class="icell firstly">品质联盟</span>

              <span class="icell firstly">门店新客减1</span>
              <span class="icell firstly">9.9元特价</span>
              <span class="icell firstly">返红包</span>

              <span class="icell secondly">支持自取</span>
              <span class="icell secondly">食安保</span>
              <span class="icell secondly">拒单赔</span>
              <span class="icell secondly">极速退</span>
            </div>

            <!-- 右边箭头点击 点击课使得上面的div 高度变高-->
            <div class="shops-sixthrow-right">
              <span
                class="collaicon mui-icon"
                :class="{'mui-icon-arrowdown':!isshowall[item.shopsId] , 'mui-icon-arrowup':isshowall[item.shopsId] }"
                @click.stop="showall(item.shopsId)"
              ></span>
            </div>
          </div>

          <!-- 每一项 下分割线 -->
          <div class="underline"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      isshowall: [],
      issumorder: false,
      clickOrder:[true,false,false],
      clickOrderPre:0,
      prechooseid:0,
      chooseOrderKind:[
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false
        ],
      orderKindsList:[
        {
          id:0,
          title:"综合排序"
        },
        {
          id:1,
          title:"好评优先"
        },
        {
          id:2,
          title:"起送价最低"
        },
        {
          id:3,
          title:"配送最快"
        },
        {
          id:4,
          title:"配送费最低"
        },

        {
          id:5,
          title:"人均从低到高"
        },
        {
          id:6,
          title:"人均从高到低"
        },
        {
          id:7,
          title:"通用排序"
        }
      ],
      shopsList:[
        {
        shopsId:0,
        shopsName:"呜哩麻辣烫",
        lowestCost:20,
        deliveryFee:1,
        arriveTime:130,
        distance:23333
        },
        {
        shopsId:1,
        shopsName:"如意混沌",
        lowestCost:20,
        deliveryFee:1,
        arriveTime:130,
        distance:250000
        },
        {
        shopsId:2,
        shopsName:"广东烧鹅饭",
        lowestCost:20,
        deliveryFee:1,
        arriveTime:130,
        distance:2350
        },
        {
        shopsId:3,
        shopsName:"老妈烫饭(软件园店)",
        lowestCost:20,
        deliveryFee:1,
        arriveTime:130,
        distance:999
        },
        {
        shopsId:4,
        shopsName:"台客便当",
        lowestCost:20,
        deliveryFee:1,
        arriveTime:130,
        distance:300
        },
        {
        shopsId:5,
        shopsName:"我家小厨(关山店)",
        lowestCost:20,
        deliveryFee:1,
        arriveTime:130,
        distance:23000
        },
        ]
    };
  },
  watch: {},
  computed: {},
  methods: {
    showall(shopsId) {
      this.$set(this.isshowall , shopsId , !this.isshowall[shopsId])
      if (this.isshowall[shopsId]) {
        document.querySelectorAll(".shops-sixthrow-left")[shopsId].style.maxHeight =
          "unset";
      } else {
        document.querySelectorAll(".shops-sixthrow-left")[shopsId].style.maxHeight =
          "1.5rem";
      }
    },
    sumorder() {
      this.issumorder = !this.issumorder;
    },
    chosseKind(id){
      this.$set(this.chooseOrderKind , this.prechooseid, false)
      this.prechooseid = id;
      this.$set(this.chooseOrderKind , id, true)
      setTimeout(() => {
        this.issumorder = false;
        console.log( this.$refs.sortKinds)
        console.log(this.orderKindsList[id].title)
        this.$refs.sortKinds.innerHTML = this.orderKindsList[id].title
      }, 300);

    },
    changecolor(index){
      // 控制点击切换时 是否显示细致的排序
      if (index==0){
        this.issumorder = !this.issumorder;
      }else{
        this.issumorder = false
      }

      // 控制点击高亮显示的类
      this.$set(this.clickOrder,this.clickOrderPre,false)
      this.$set(this.clickOrder,index,true)
      this.clickOrderPre = index
    },
    toShops(shopsId){
      this.$router.push("/shops/"+shopsId)

    }
  },
  created() {},
  mounted() {
    // 从 shopsList中拿到本页的商铺数据  长度赋给下方箭头点击数组
    this.isshowall.length = this.shopsList.length;
  }
};
</script>
<style lang="scss" scoped>
.meituan-main {
  padding: 0 10px 0 10px;
}

.meituan-main > img {
  width: 100%;
  height: 10rem;
  margin-bottom: 1rem;
}

p {
  font-size: 0.8125rem;
  line-height: 1;
  margin: 0;
}
.shops {
  width: 100%;
}
.shops-item {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.shopsImg {
  width: 28%;
  height: 30%;
  border-radius: 0.3125rem;
}
.shops-info {
  width: 70%;
}

.shops-info > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.shopName {
  width:80%;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  font-size: 1.125rem;
  font-weight: bolder;
}

.order {
  font-size: 1rem;
  color: #999;
  // margin-right: 8px;
}

.order-outter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2.5rem;
  position: relative;
}
.order-out {
  display: flex;
}
.orderandicon {
  margin-right: 8px;
}

.collaicon {
  font-size: 1rem;
  color: #999;
}

.shops-secrow {
  color: #fff;
}
.shops-secrow > span {
  background-color: rgb(42, 201, 63);
  padding: 3px 5px;
  font-size: 0.875rem;
  font-weight: bold;
  line-height: 1.3;
}

.shops-thirdrow-left {
  display: flex;
  align-items: center;
}

.shops-thirdrow-left > div {
  display: flex;
  align-items: center;
  text-align: center;
}

.shops-fourthrow > div {
  display: flex;
  align-items: center;
}
.shops-fourthrow-left {
  width: 60%;
}

.start {
  font-size: 16px;
  line-height: 1;
  height: 1rem;
  color: rgb(239, 162, 28);
}
.shops-thirdrow-right > span {
  border: 1px solid rgb(26, 148, 224);
  font-size: 0.6875rem;
}
.arrive-intime {
  background-color: #fff;
  color: rgb(26, 148, 224);
}

.faster-submit {
  color: #fff;
  background-color: rgb(26, 148, 224);
}

.delete {
  font-size: 0.7125rem;
  margin: 0;
  color: #8f8f94;
}
.admire {
  border: 1px solid rgba(0, 0, 0, 0);
  background-color: rgba(224, 171, 38, 0.3);
  color: rgb(237, 138, 40);
  font-size: 0.82rem;
  padding: 2px 4px;
  border-radius: 5px;
}
.shops-sixthrow {
  align-items: flex-start !important;
}

.shops-sixthrow-left {
  max-width: 90%;
  max-height: 1.5rem;
  // height: 1.5rem;
  overflow-x: hidden;
  overflow-y: hidden;
  white-space: normal;
}

.icell {
  display: inline-block;
  font-size: 0.75rem;
  padding: 0 2px;
  margin-right: 5px;
  margin-bottom:4px;
  line-height: 1.2;
  border-radius: 3px;
}
.firstly {
  border: 1px solid rgb(237, 138, 40);
  color: rgb(237, 138, 40);
}

.vip {
  border: 1px solid rgb(226, 199, 40);
  color: rgb(226, 199, 40);
}

.secondly {
  border: 1px solid #999;
  color: #999;
}

.underline {
  border-top: 1px solid rgba(153, 153, 153, 0.3);
  margin-bottom: 8px;
}

.order-active {
  color: #1a94e0;
}

.kinds-active {
  color: #007aff;
  background-color: #1a94e0;
}

.quan-unity {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.quan-unity > span {
  border: 1px solid rgba(0, 0, 0, 0);
  background-color: rgb(181, 161, 161);
  font-size: 0.9375rem;
  border-radius: 3px;
  padding: 3px 5px;
}

.sortKinds{
  background-color: #fff;
  width:100%;
  height:13rem;
  overflow-y:scroll;
  padding: 0 10px 0 10px;
  position:absolute;
  top:2.5rem;
  left:0;

}

.sortKinds>ul{
  list-style: none;
}
.sortKinds>ul>li{
  height:2.75rem;
  font-size: 1rem;
  display:flex;
  align-items:center;
  justify-content:space-between;
}
.mui-icon-checkmarkempty{
  color:#007aff;
}

.kindsTitle{
  display:inline-block;
  max-width:4rem;
  overflow:hidden;
  text-overflow: ellipsis;
  white-space:nowrap;
}

.integrated-sort{
  display:flex;
  align-items:center;
}

</style>