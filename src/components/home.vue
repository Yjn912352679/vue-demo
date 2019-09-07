<template>
  <div class="home">
    <router-link v-for="item in GoodsList" :key="item.shopsId" :to='"/home/"+JSON.stringify(item)'>商品{{item.shopsId}}</router-link>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      GoodsList:[{
            shopsId:1,
            simpleProduce:"简介1",
            sellPrice:110.50,
        },{
            shopsId:2,
            simpleProduce:"简介2",
            sellPrice:10.08
        },{
            shopsId:3,
            simpleProduce:"简介3",
            sellPrice:1200
        },]
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.home {
  display:flex;
  flex-direction: column
}
</style>