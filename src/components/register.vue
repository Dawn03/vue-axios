<template>
  <div>
    <!--header开始-->
    <div class="line1">
      <div class="register-header">
        <a href="#####"></a>
      </div>
    </div>
    <!--header结束-->
    <!--content开始-->
    <div class="line2 clearfix">
      <div class="register-content">
        <form action method="post">
          <i class="distance">手机号</i>
          <input class="reg-in1" type="text">
          <span class="reg-after">注册成功后全美团通用</span>
        </form>
        <form action method="post">
          <input type="submit" class="verify" value="免费获取短信验证码">
        </form>
        <!--<input type="button" class="verify" value="免费获取短信验证码">-->
        <form action method="post">
          <i class="distance">短信动态码</i>
          <input class="reg-in2" type="text">
        </form>
        <form action method="post">
          <i class="distance">创建密码</i>
          <input class="reg-in3" type="password">
        </form>
        <p class="rank">
          <i>弱</i>
          <i>中</i>
          <i>强</i>
        </p>
        <form action method="post">
          <i class="distance">确认密码</i>
          <input class="reg-in4" type="password">
        </form>
        <form action="login.html" method="post">
          <input @click='goLogin' type="button" class="agree" value="同意以下协议并注册">
        </form>
        <a class="agreement" href="####">《美团用户协议》</a>
      </div>
    </div>
    <!--content结束-->

    <!--footer开始-->
    <div class="register-footer">
      &copy;
      <a href="###">meituan.com</a>
      <a href="http://cd.meituan.com/">京ICP证070791号</a> 京公网安备11010502025545号
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    goLogin() {
      this.$router.push({
        name: "login"
      });
    }
  }
}
</script>
<style>
/*register css*/
.line1 {
  width: 100%;
  border-bottom: 1px solid #e02025;
}
.register-header {
  /*background: fuchsia;*/
  margin: 0 auto;
  width: 980px;
  height: 48px;
}
.register-header a {
  display: block;
  width: 133px;
  height: 40px;
  margin-top: 8px;
  background: url(../assets/images/login-icon.png) no-repeat -534px -722px;
}
.line2 {
  width: 100%;
  border-top: 1px solid #ec797c;
  border-bottom: 1px solid #f5f5f5;
}

.register-content {
  margin: 35px auto 0;
  text-align: left;
  width: 980px;
  padding-left: 30px;
}
.register-content > p {
  width: 980px;
}
.register-content form input[type="text"]:focus,
.register-content form input[type="password"]:focus {
  border: 1px solid #2bb8aa;
}
.register-content .reg-in1,
.register-content .reg-in2,
.register-content .reg-in3,
.register-content .reg-in4 {
  padding-left: 5px;
  width: 258px;
  height: 34px;
  border: 1px solid #aaa;
}
.reg-in3 {
  margin: 16px 0 7px;
}
.reg-in4 {
  margin: 8px 0 16px;
}
.reg-after {
  display: inline-block;
  margin-left: 4px;
  padding: 6px 0;
  line-height: 24px;
  font-size: 12px;
  color: #999;
  vertical-align: top;
  zoom: 1;
}
.verify {
  margin: 10px 0 8px 104px;
  width: 140px;
  height: 20px;
  color: #333;
  background: linear-gradient(#f7f7f7, #dedede);
  border: 1px solid #e3e3e3;
  border-bottom: 1px solid #aaa;
}
.verify:hover {
  color: #333;
  background: linear-gradient(#fff, #e9e9e9);
  border: 1px solid #e5e5e5;
  border-bottom: 1px solid #b3b3b3;
}
.rank {
  margin-left: 104px;
}
.rank i {
  display: inline-block;
  width: 85px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  color: #fff;
  background: #eee;
  border-right: 2px solid #fff;
}
.agree {
  display: block;
  margin-left: 104px;
  width: 184px;
  height: 35px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  background: linear-gradient(#eb4146, #e02025);
  cursor: pointer;
  border-radius: 3px;
  -webkit-border-radius: 3px;
}
.agreement {
  display: block;
  margin: 16px 0 36px 104px;
  color: #eb4247;
}

.agreement:hover {
  text-decoration: underline;
}
.distance {
  display: inline-block;
  width: 100px;
  text-align: right;
}
.register-footer {
  margin: 20px auto 0;
  width: 980px;
  text-align: center;
  color: #999;
  font-size: 13px;
}
.register-footer a {
  color: #999;
}
.register-footer :hover {
  text-decoration: underline;
}
</style>