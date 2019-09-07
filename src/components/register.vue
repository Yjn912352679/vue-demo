<template>
  <div class="myDiv">
    <div class="register">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
      label-position="right"
      :hide-required-asterisk="hideRequiredAsterisk"
    >
      <el-form-item label="账号" prop="num">
        <el-input v-model="ruleForm.num"></el-input>
      </el-form-item>

      <!-- el-form-item  中的  prop  属性是用来做表单验证的 -->
      <el-form-item label="密码" prop="pass" style="display:inline-block">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    
    
    </el-form>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    //   自定义验证方法在data   return 前定义
    var checkpassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value != this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致！"));
        console.log("两次密码不一样");
      } else {
        callback();
      }
    };

    return {
      hideRequiredAsterisk:true,
      ruleForm: {
        num: "",
        pass: "",
        checkPass: ""
      },
      rules: {
        num: [
          { required: true, message: "必填项", trigger: "blur" },
          {
            //  正则表达式中的  ｛ ｝可以填一个数也可以填一个数和一个逗号  也可以两个数中间一个逗号
            //                 ｛ ｝如果 填一个数和一个逗号   则逗号后不能有空格符
            pattern: /^[0-9]{6,12}$/,
            message: "最少6位最多12位且全为数字",
            trigger: "blur"
          }
        ],
        pass: [
          { required: true, message: "必填项", trigger: "blur" },
          {
            pattern: /^(?=.*\d)(?=.*[a-zA-Z]).{6,12}$/,
            message:
              "必须包含数字和字母  可以输入特殊字符  至少6位最多12位",
            trigger: "blur"
          }
        ],

        // checkPass  设置为自定义校验
        checkPass: [
          { required: true, message: "必填项", trigger: "blur" },
          { validator: checkpassword, trigger: "blur" }
        ]
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    submitForm(FormName){
      var that = this;
      this.$refs[FormName].validate((valid)=>{
        if (valid){
          that.$message({
            type:'success',
            message:"正确的提交格式"
          })
        }else{
          that.$message({
            type:'error',
            message:"错误的提交格式"
          })
        }
      })
    },
    resetForm(FormName){
      this.$refs[FormName].resetFields();
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="css" scoped>
.myDiv {
  width: 100%;
  margin: 30px auto;
}

.register{
    width:100%;
    margin:0 auto;
    padding:30px;
    box-sizing:border-box;
    border:1px solid #F6F7F9;
    /* box-shadow: 10px 10px 10px 0 rgba(0, 33, 79, 0.11); */
    border-radius:10px;
}
</style>