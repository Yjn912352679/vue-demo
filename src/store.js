// store 需要挂载到 vue 实例上
import Vue from "vue"
import Vuex from "vuex"

import {Toast} from "mint-ui"
Vue.use(Vuex)
var store = new Vuex.Store({
    state: {
        myShopCar: [],
        isOver:false,
    },
    mutations: {
        // 商品界面   点击加入购物车   改变购物车数组
        addToShopCar(state, Goods) {
            var flag = false;
            state.isOver = false
            if (state.myShopCar.length > 0) {
                flag = state.myShopCar.some((item) => {
                    if (item.shopsId == Goods.i.shopsId) {
                        item.shoppingNum += Goods.i.shoppingNum;

                        // 从购物界面添加的商品数量  大于库存时，将不能再添加更多的该商品数量到购物车了
                        if (item.shoppingNum > Goods.max) {
                            item.shoppingNum = Goods.max
                            Toast({message: '可购买数量已达最大值',duration:500});
                            state.isOver = true
                        }
                        return true;
                    }
                })
            }

            (!flag) ? state.myShopCar.push(Goods.i) : null
        },

        // 购物车界面 点击商品的增加减少按钮
        updataShopCar(state, Goods) {
            if (state.myShopCar.length > 0) {
                state.myShopCar.forEach(item => {
                    if (item.shopsId == Goods.shopsId) {
                        console.log("找到了")
                        item.shoppingNum = Goods.shoppingNum
                    }
                })
            }

        },

        // 购物车点击删除单个商品
        deleteGoods(state, goods) {
            let flag = state.myShopCar.some((item, i) => {
                if (item === goods) {
                    state.myShopCar.splice(i, 1)
                    return true
                }
            })

            flag ? Toast({ message: '删除成功',duration:500, iconClass: 'mui-icon mui-icon-checkmarkempty' }) : null

        }
    },


    // 对 store 中的数据进行包装处理
    getters: {
        // 购物车界面的  物品总量和总价  计算完以后再同步到 shopCarGoodsCount
        getSum(state) {
            var count = {
                num: 0,
                price: 0
            };

            state.myShopCar.forEach(item => {
                if (item.isChoosed) {
                    count.price = count.price.add(item.sellPrice.mul(item.shoppingNum))
                    count.num = count.num.add(item.shoppingNum)
                }
            })

            return count
        }

    }
})


export default store;