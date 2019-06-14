<template>
  <div>
    <!--header开始-->
    <div class="logo-header">
      <a href="#####"></a>
    </div>
    <!--header结束-->
    <!--content开始-->
    <div class="login-content clearfix">
      <p class="login-left fl">
        <img src="../assets/images/login-bg.png" alt>
      </p>
      <div class="login-right fl">
        <form action method="post" class="login-p1">
          <span class="fl">账号登录</span>
          <a class="change fr" href="###">
            手机动态码登录
            <i class="chang-bg"></i>
          </a>
        </form>
        <form action method="post" class="login-p2">
          <i class="user"></i>
          <input v-model="userName" type="text" placeholder="手机号/用户名/邮箱">
        </form>
        <p class="login-p3">
          <i class="password"></i>
          <input v-model="pwd" type="password" placeholder="密码">
        </p>
        <p class="login-p4">
          <input class="btn" type="checkbox">7天内自动登录
          <a class="forget fr" href="###">忘记密码？</a>
        </p>
        <form action method="post">
          <input @click="goIndex" type="button" class="logo-btn" value="登录">
        </form>
        <p class="logo-p5">
          还没有账号？
          <span @click="gotoRegister" class="free-register">免费注册</span>
        </p>
      </div>
    </div>
    <div class="logo-footer clearfix">
      &copy;2016
      <a href="###">美团网团购</a> meituan.com
      <a href="###">京ICP证070791号</a> 京公网安备11010502025545号
      <a href="###">电子公告服务规则</a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: "",
      pwd: ""
    };
  },
  methods: {
    gotoRegister() {
      this.$router.push({
        name: "register"
      });
    },
    goIndex() {
      // this.$router.push('/home');
      localStorage.setItem("user", {
        userName: this.userName,
        pwd: this.pwd
      });
      this.$router.push({ path: "/home" });
    }
  }
};
</script>
<style>
.logo-header {
  margin: 60px auto 0;
  width: 980px;
}
.logo-header > a {
  display: block;
  width: 230px;
  height: 45px;
  background: url(../assets/images/login-icon.png) no-repeat -114px -677px;
}
.login-content {
  margin: 40px auto 0;
  width: 980px;
}
.login-left {
  width: 480px;
  height: 370px;
}
.login-left img {
  width: 480px;
  height: 370px;
}
.login-right {
  width: 270px;
  height: 283px;
  padding: 43px 0 0 115px;
  color: #666;
}

.change {
  color: #666;
  font-size: 12px;
}
.change:hover {
  text-decoration: underline;
}
.chang-bg {
  display: inline-block;
  vertical-align: middle;
  width: 10px;
  height: 13px;
  background: url(../assets/images/login-icon.png) no-repeat -1268px -509px;
}
.login-p1 {
  padding-bottom: 14px;
}
.login-p2 {
  margin: 14px 0 16px;
}
.login-p2,
.login-p3 {
  height: 36px;
  width: 270px;
}
.login-p2 input,
.login-p3 input {
  height: 24px;
  width: 230px;
  padding: 5px 5px 5px 33px;
  border: 1px solid #aaa;
}
.user,
.password {
  position: absolute;
  display: inline-block;
  margin-left: 9px;
}
.login-p2 input[type="text"]:focus,
.login-p3 input[type="password"]:focus {
  border: 1px solid #ec454a;
}
.user {
  width: 19px;
  height: 17px;
  margin-top: 8px;
  background: url(../assets/images/login-icon.png) no-repeat -1250px -617px;
}
.password {
  width: 16px;
  height: 18px;
  margin-top: 9px;
  background: url(../assets/images/login-icon.png) no-repeat -1250px -527px;
}
.login-p3 {
  margin-bottom: 12px;
}

.login-p4 {
  height: 15px;
  text-align: left;
  font-size: 12px;
  color: #333;
  line-height: 35px;
}
.btn {
  width: 14px;
  height: 14px;
  margin-right: 4px;
  vertical-align: middle;
}
.forget {
  color: #ec454a;
}
.forget:hover {
  text-decoration: underline;
}
.logo-btn {
  width: 270px;
  height: 35px;
  margin-top: 5px;
  color: #fff;
  font-weight: bold;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  background: linear-gradient(#eb4146, #e02025);
  /*cursor: pointer;*/
}
.logo-p5 {
  margin-top: 14px;
  text-align: left;
}
.free-register {
  color: #ec454a;
  display: inline-block;
}
.free-register:hover {
  text-decoration: underline;
}
.logo-footer {
  margin: 50px auto 30px;
  text-align: center;
  width: 980px;
  font-size: 12px;
  color: #999;
}
.logo-footer a {
  color: #999;
}
.logo-footer a:hover {
  text-decoration: underline;
}
</style>