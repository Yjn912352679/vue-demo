import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter);

import VueResource from 'vue-resource'
Vue.use(VueResource)


import Element from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
Vue.use(Element)

// 导入 Vuex 的store实例
import store from "./store.js"



import router from "./router.js";
import app from "./App.vue"
import "./lib/mui/css/mui.min.css";
import "./lib/mui/css/icons-extra.css"
import "./lib/tools/FloatCalculation.js"

import { Button, Cell, Switch, Toast, MessageBox } from "mint-ui"
import "./lib/mintui/css/style.css"
Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
Vue.component(Switch.name, Switch)

Vue.$MessageBox = Vue.prototype.$MessageBox = MessageBox


// vue 如果用索引值来改变数组中某项的值  不能实时监测到变化
// 需要使用 vue 的 set 方法
Vue.$set = Vue.prototype.set = Vue.set







// 对数字强制保留两位小数  不足补零 超过两位小数 采用四舍五入
Vue.filter("priceFormat", function (value) {
    var value = Math.round(parseFloat(value) * 100) / 100;
    var s = value.toString().split(".");
    if (s.length == 1) {
        value = value.toString() + ".00";
        return value;
    }
    if (s.length > 1) {
        if (s[1].length < 2) {
            value = value.toString() + "0";
        }
        return value;
    }
})

// 对日期进行  年月日的格式化   传过来的参数需要是一个字符串
Vue.filter("dateToYMD",function(now){
    var now = new Date(now)
    let year = now.getFullYear().toString();
    let month = (now.getMonth() + 1).toString().padStart(2, '0');
    let day = now.getDate().toString().padStart(2, '0');
  
    return (year + "-" + month + "-" + day);
  
  })

// 对日期进行  年月日时分秒的格式化   传过来的参数需要是一个字符串
Vue.filter("dateToYMDHMS",function(now){
  var now = new Date(now)
  let year = now.getFullYear().toString();
  let month = (now.getMonth() + 1).toString().padStart(2, '0');
  let day = now.getDate().toString().padStart(2, '0');
  let hour = now.getHours().toString().padStart(2, '0');
  let minute = now.getMinutes().toString().padStart(2, '0');
  let second = now.getSeconds().toString().padStart(2, '0');

  return (year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second);

})

// 对距离格式化  小于一千米显示 m 为单位   否则显示 Km 为单位
Vue.filter("distanceFormat",function(value){
    let decimalpointIndex = 0
    if (value<=1000){
        return value+"m"
    }else{
        value = value/1000+""
        decimalpointIndex = parseInt(value.charAt("."))
        value = value.slice(0,decimalpointIndex+2)
        return value+"Km"
    }
})

// 花费时间 小于60分钟 以分钟为单位  大于则以小时为单位
Vue.filter("spendTimeFormat" , function(value){
    let decimalpointIndex = 0
    if (value>60){
        value = value/60 +""
        decimalpointIndex = parseInt(value.charAt("."))
        value = value.slice(0,decimalpointIndex+1)
       
        return value + "小时"
    }else{
        return value + "分钟"
    }
})


// 将 vue 实例放到 index.html 的 id为app 的div 盒子
var vm = new Vue({
    el: "#app",
    data: {},
    render: c => c(app),
    router,
    store,
    created() { },
    mounted() { },
    watch: {},
    methods: {}

})


