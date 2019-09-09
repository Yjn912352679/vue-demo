import VueRouter from 'vue-router'
const originalPush = VueRouter.prototype.push

// 为防止某些特殊情况下  $router.push() 报错   但实际不影响的情况下的 解决代码
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


import { MessageBox } from "mint-ui"

// 导入自建组件
import register from "./components/register.vue"
import login from "./components/login.vue"
import GoodsInfo from "./components/GoodsInfo.vue"
import shopcar from "./components/shopcar.vue"
import home from "./components/home.vue"

import tabTop from "./components/tab-top.vue"

import meituanTop from "./components/meituan-top.vue"
import meituanMain from "./components/meituan-main.vue"
import meituanBottom from "./components/meituan-bottom.vue"
import showMoreRight from './components/meituan-showMoreRight.vue'
import tabBottom2 from "./components/tab-bottom2.vue"

import shops from "./components/shops.vue"
import orderFood from "./components/shops-orderFood.vue"
import appraise from "./components/shops-appraise.vue"
import store from "./components/shops-store.vue"

var router = new VueRouter({
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", components: {default: tabTop, Main: home,Bottom: tabBottom2,}},
    { path: "/login", component: login },
    { path: "/register", component: register },
    { path: "/meiTuan", components: {default: meituanTop,Main: meituanMain,Bottom: tabBottom2},
      children: [{ path: "top/:kindsId",components: {default: meituanTop,showMoreRight: showMoreRight}}]},

    
    { path: "/shops/:shopsid", components: {default:shops},
      children: [{ path :"orderFood",components: {default:shops , shopsContainer:orderFood}},{path :"appraise",components:{default:shops , shopsContainer:appraise}},{path :"store",components:{default:shops , shopsContainer : store}}]},
    { path: "/home/:Goods", components: {default:GoodsInfo,Bottom: tabBottom2}, name: "GoodsInfo" },
    { path: "/shopcar", components: {default: tabTop,Main: shopcar,Bottom: tabBottom2}},
  ],
  linkExactActiveClass: "mui-active",
  linkActiveClass: "mui-active"
})

// 路由切换时  将遮罩层关闭
router.afterEach(route => {
  MessageBox.close()
})


export default router



