<template>
<div class="myDiv">
  <div class="login-container">
    <router-link to="/login/numbox2">去login   numbox2 组件</router-link>
   
      <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="50px"
      class="demo-ruleForm"
     
      :hide-required-asterisk="hideRequiredAsterisk"
      style=" text-align: center;"
    >
      <el-form-item label="账号" prop="num">
        <!-- .number   为修饰符   只允许填入数字 -->
        <el-input v-model="ruleForm.num"></el-input>
      </el-form-item>

      <!-- el-form-item  中的  prop  属性是用来做表单验证的 -->
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
       <el-button class="login-btn" type="primary" @click="submitForm('ruleForm')">登陆</el-button>
        </el-form>
  </div>
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
      hideRequiredAsterisk:true,
      ruleForm: {
        num: "",
        pass: ""
      },
      rules: {
        num: [
          { required: true, message: "请输入账号", trigger: "blur" },
        ],
        pass: [
          { required: true, message: "请输入密码", trigger: "blur" },
         
        ],
      }
    };
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style lang="css" scoped>

.myDiv {
  width: 100%;
  margin: 30px auto;
}

.login-container{
    width:100%;
    margin:0 auto;
    padding:30px;
    box-sizing:border-box;
    border:1px solid #F6F7F9;
    /* box-shadow: 10px 10px 10px 0 rgba(0, 33, 79, 0.11); */
    border-radius:10px;
}

.login-btn{
  width:100%;
}

</style>