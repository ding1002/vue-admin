<template>
  <div id="login">
    <div class="login-wrap">
      <ul class="menu-tab">
        <li
          v-for="item in menuTab"
          :key="item.id"
          :class="{'current': item.current}"
          @click="toggleMenu(item)"
        >{{item.txt}}</li>
      </ul>
      <!-- 表单开始 -->
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        class="login-form"
        size="medium"
      >
        <el-form-item prop="username" class="item-form">
          <label>邮箱</label>
          <el-input v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="password" class="item-form">
          <label>密码</label>
          <el-input
            type="text"
            v-model="ruleForm.password"
            autocomplete="off"
            minlength="6"
            maxlength="20"
          ></el-input>
        </el-form-item>
        <el-form-item prop="passwords" class="item-form" v-show="model === 'register'">
          <label>重复密码</label>
          <el-input
            type="text"
            v-model="ruleForm.passwords"
            autocomplete="off"
            minlength="6"
            maxlength="20"
          ></el-input>
        </el-form-item>
        <el-form-item prop="code" class="item-form">
          <label>验证码</label>

          <el-row :gutter="20">
            <el-col :span="15">
              <el-input type="text" v-model="ruleForm.code" minlength="6" maxlength="6"></el-input>
            </el-col>
            <el-col :span="9">
              <el-button type="success" class="block">获取验证码</el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-btn block" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
      </el-form>
      <!-- 表单结束 -->
    </div>
  </div>
</template>
<script>
import {
  stripscript,
  validateEmail,
  validatePass,
  validateVCode
} from "@/utils/validate";
export default {
  name: "login",
  data() {
    var checkCode = (rule, value, callback) => {
      // let reg=/^[a-z0-9]{6}$/;
      this.ruleForm.code = stripscript(value);
      value = this.ruleForm.code;
      let flag = validateVCode(value);
      if (value === "") {
        return callback(new Error("请输入验证码"));
      } else if (flag) {
        return callback(new Error("验证码格式错误"));
      } else {
        callback();
      }
      //   setTimeout(() => {
      //     if (!Number.isInteger(value)) {
      //       callback(new Error("请输入数字值"));
      //     }
      //   }, 1000);
    };
    var validateUsername = (rule, value, callback) => {
      // let reg=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      let flag = validateEmail(value);
      debugger;
      if (value === "") {
        callback(new Error("请输入邮箱"));
      } else if (flag) {
        callback(new Error("邮箱格式有误"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
      debugger;
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (!reg.test(value)) {
        callback(new Error("密码长度为6至20位的字母加数字"));
      } else {
        callback();
      }
    };
    var validatePasss = (rule, value, callback) => {
        debugger
      if (this.model === "login") {
        callback();
      }
      let flag =
        this.ruleForm.password == this.ruleForm.passwords ? true : false;
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (!flag) {
        callback(new Error("密码不一致"));
      } else {
        callback();
      }
    };
    return {
      //登陆 注册标识
      model: "login",
      menuTab: [
        { txt: "登录", current: true, type: "login" },
        { txt: "注册", current: false, type: "register" }
      ],
      ruleForm: {
        username: "",
        password: "",
        code: "",
        passwords: ""
      },
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        code: [{ validator: checkCode, trigger: "blur" }],
        passwords: [{ validator: validatePasss, trigger: "blur" }]
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
    //数据驱动视图渲染
    toggleMenu(data) {
      this.menuTab.forEach(element => {
        element.current = false;
      });
      data.current = true;
      this.model = data.type;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
#login {
  height: 100vh;
  // vh 可视区的大小
  background-color: #344a5f;
}
.login-wrap {
  width: 330px;
  margin: auto;
}
.menu-tab {
  text-align: center;
  li {
    display: inline-block;
    width: 88px;
    line-height: 36px;
    font-size: 14px;
    color: #fff;
    border-radius: 2px;
    //鼠标手指
    cursor: pointer;
  }
}
.current {
  background-color: rgba(0, 0, 0, 0.1);
}
.login-form {
  margin-top: 9px;
  label {
    margin-bottom: 3px;
    display: block;
    font-size: 14px;
    color: #fff;
  }
}
.item-form {
  margin-bottom: 13px;
}
.block {
  width: 100%;
  display: block;
}
.login-btn {
  margin-top: 19px;
}
</style>