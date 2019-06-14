<template>
  <div>
    <!--header开始-->
    <div class="index-header-content">
      <div class="index-header">
        <a class="index-logo fl" href="###"></a>
        <div class="header-fr1 fl">
          成都
          <i class="triangle triangle1"></i>
          <div class="cities">
            <p>定位城市：成都</p>
            <ul class="cities-ul">
              <li>
                <span class="letter">A</span>
                <div class="letters">
                  <a href="###">安阳</a>
                  <a href="###">安阳</a>
                  <a href="###">安阳</a>
                  <a href="###">安阳</a>
                  <a href="###">安阳</a>
                  <a href="###">安阳</a>
                  <a href="###">安阳</a>
                  <a href="###">安阳</a>
                  <a href="###">安阳</a>
                  <a href="###">安阳</a>
                  <a href="###">安阳</a>
                  <a href="###">安阳</a>
                </div>
              </li>
              <li>
                <span class="letter">B</span>
                <div class="letters">
                  <a href="###">保定</a>
                  <a href="###">保定</a>
                  <a href="###">保定</a>
                  <a href="###">保定</a>
                  <a href="###">保定</a>
                </div>
              </li>
              <li>
                <span class="letter">C</span>
                <div class="letters">
                  <a href="###">成都</a>
                  <a href="###">成都</a>
                  <a href="###">成都</a>
                  <a href="###">成都</a>
                  <a href="###">成都</a>
                </div>
              </li>
              <li>
                <span class="letter">D</span>
                <div class="letters">
                  <a href="###">大兴安岭</a>
                  <a href="###">大兴安岭</a>
                  <a href="###">大兴安岭</a>
                  <a href="###">大庆</a>
                  <a href="###">大庆</a>
                  <a href="###">大庆</a>
                  <a href="###">大庆</a>
                  <a href="###">大庆</a>
                  <a href="###">大庆</a>
                </div>
              </li>
              <li>
                <span class="letter">D</span>
                <div class="letters">
                  <a href="###">大兴安岭</a>
                  <a href="###">大兴安岭</a>
                  <a href="###">大兴安岭</a>
                  <a href="###">大庆</a>
                  <a href="###">大庆</a>
                  <a href="###">大庆</a>
                  <a href="###">大庆</a>
                  <a href="###">大庆</a>
                  <a href="###">大庆</a>
                </div>
              </li>
              <li>
                <span class="letter">D</span>
                <div class="letters">
                  <a href="###">大兴安岭</a>
                  <a href="###">大兴安岭</a>
                  <a href="###">大兴安岭</a>
                  <a href="###">大庆</a>
                  <a href="###">大庆</a>
                  <a href="###">大庆</a>
                  <a href="###">大庆</a>
                  <a href="###">大庆</a>
                  <a href="###">大庆</a>
                </div>
              </li>
              <li>
                <span class="letter">D</span>
                <div class="letters">
                  <a href="###">大兴安岭</a>
                  <a href="###">大兴安岭</a>
                  <a href="###">大兴安岭</a>
                  <a href="###">大庆</a>
                  <a href="###">大庆</a>
                  <a href="###">大庆</a>
                  <a href="###">大庆</a>
                  <a href="###">大庆</a>
                  <a href="###">大庆</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="header-fr2 fl">
          <ul>
            <!-- <li
              @click="navTo(item, index)"
              @mouseenter="enter"
              @mouseleave="leave"
              :class="{active:currentIndex == index}"
              v-for="(item, index) in navList"
              :key="index"
            >
              {{item.navText}}
            </li>-->
            <li v-for="(item, index) in navList" @click="changeR(index)">
              <router-link
                @mouseenter.native="enter"
                :index="index"
                @mouseleave.native="leave"
                :to="item.path"
                active-class="active"
              >{{item.navText}}</router-link>
            </li>
          </ul>
        </div>
        <div class="header-fr4 fr">
          <i class="head">
            <img src="/static/images/person.png" alt="头像">
          </i>
          <span class="triangle triangle1"></span>
          <a href="###" class="index-login">登录</a>
        </div>
        <div class="header-fr3 fr">
          <input
            type="text"
            value="找影视剧、影人、影院"
            onFocus="if(value==defaultValue){value=''; style.color='#333';}"
            onBlur="if(!value){value=defaultValue; style.color='#ccc';}"
          >
          <span class="search-btn"></span>
        </div>
      </div>
    </div>
    <!--header结束-->
  </div>
</template>
<script>
export default {
  name: "myHeader",
  data() {
    return {
      currentIndex: 0,
      textColor: false,
      navList: [
        {
          navText: "首页",
          path: "/home"
        },
        {
          navText: "电影",
          path: "/movie"
        },
        {
          navText: "榜单",
          path: "/bangdan"
        },
        {
          navText: "热点",
          path: "/rd"
        }
      ]
    };
  },
  watch: {},
  mounted() {},
  methods: {
    changeR(index) {
      this.currentIndex = index;
    },
    enter(e) {
      // if (e.target.getAttribute("index") != this.currentIndex) {
      //   e.target.style.color = "#ef4238";
      // } else {
      //   e.target.style.color = "#fff";
      // }
    },
    leave(e) {
      // if (e.target.getAttribute("index") == this.currentIndex) {
      //   e.target.style.color = "#fff";
      // } else {
      //   e.target.style.color = "#333";
      // }
    }
  }
};
</script>
<style>
/*导航 css S*/
.index-header-content {
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  z-index: 99;
  background: #fff;
  border-bottom: 1px solid #d8d8d8;
}
.index-header {
  width: 1200px;
  margin: 0 auto;
}
.index-logo {
  display: block;
  width: 133px;
  height: 80px;
  background: url(../../assets/images/login-icon.png) no-repeat -536px -702px;
}
.index-header .header-fr1 {
  position: relative;
  padding: 0 10px;
  margin-left: 10px;
  width: 48px;
  color: #333;
  font: normal 15px/80px "Microsoft YaHei";
  border: 1px solid transparent;
  border-bottom: none;
  border-top: none;
}
.index-header .header-fr1:hover {
  border: 1px solid #ccc;
  border-top: none;
  border-bottom: #fff;
}
.cities {
  display: none;
  position: absolute;
  left: -1px;
  bottom: -332px;
  width: 460px;
  height: 330px;
  overflow-y: auto;
  border: 1px solid #ccc;
  border-top: 1px solid transparent;
  background: #fff;
}
.cities p {
  padding-left: 20px;
  height: 49px;
  line-height: 49px;
  border-bottom: 1px solid #ccc;
}
.cities-ul li {
  width: 460px;
  line-height: 30px;
}
.letter {
  margin-left: 20px;
  width: 20px;
  text-align: center;
  float: left;
  vertical-align: top;
  display: block;
  background-color: #eee;
  font-weight: 700;
  line-height: 20px;
  margin-top: 5px;
}
.letters {
  margin-left: 40px;
  display: block;
  margin-bottom: 10px;
}
.letters a {
  display: inline-block;
  line-height: 24px;
  margin-top: 3px;
  padding: 0 5px;
  text-align: center;
  cursor: pointer;
  color: #333;
}
.letters a:hover {
  color: #fff;
  background: #ef4238;
}
.header-fr1:hover .cities {
  display: block;
}
.header-fr2 {
  width: 320px;
  margin-left: 38px;
}
.header-fr2 ul li {
  float: left;
  font: normal 18px/80px "Microsoft YaHei";
  text-align: center;
}
.header-fr2 ul li a {
  display: block;
  width: 80px;
  height: 80px;
  color: #333;
  background-color: transparent;
}
/* .header-fr2 ul li a:hover {
  color: #ef4238;
} */
.header-fr2 ul li .active {
  color: #fff;
  background-color: #ef4238;
}

.header-fr3 {
  position: relative;
  margin-top: 20px;
  width: 260px;
  height: 38px;
  border: 1px solid #ccc;
  border-radius: 30px;
  -webkit-border-radius: 30px;
  background: #faf8fa;
}
.header-fr3 input {
  width: 200px;
  height: 37px;
  padding-left: 20px;
  font-size: 13px;
  line-height: 37px;
  border-radius: 30px;
  -webkit-border-radius: 30px;
}

.header-fr3 .search-btn {
  display: inline-block;
  position: absolute;
  top: 0;
  right: -1px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  -webkit-border-radius: 20px;
  background-color: #ef4238;
  background-image: url(../../assets/images/index-search.png);
  background-repeat: no-repeat;
}
.header-fr4 {
  position: relative;
  margin-left: 20px;
  width: 76px;
  height: 79px;
  border: 1px solid transparent;
  border-top: none;
}
.header-fr4 .head {
  position: absolute;
  display: inline-block;
  left: 10px;
  top: 20px;
  width: 40px;
  height: 40px;
}
.header-fr4 .head img {
  width: 100%;
  height: 100%;
}
.header-fr4 .index-login {
  padding-right: 10px;
  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 66px;
  height: 40px;
  color: #999;
  line-height: 40px;
  text-align: right;
  background: #fff;
}
.header-fr4:hover {
  height: 119px;
  border: 1px solid #ccc;
  border-top: none;
}
.header-fr4:hover .index-login {
  display: block;
  color: #999;
}
.header-fr4 .index-login:hover {
  color: #ef4238;
  text-decoration: underline;
}
/*导航 css E*/
</style>