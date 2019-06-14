<template>
  <div class="hello">
    <MyHeader></MyHeader>
    <!--content开始-->
    <div>
      <div class="index-content">
        <!--banner S-->
        <div class="banner clearfix">
          <ul class="advert">
            <li>
              <img :src="currentImg" alt="">
            </li>
          </ul>
          <div class="code">
            <span class="arrow-l fl"></span>
            <span class="arrow-r fr"></span>
            <ul class="fl">
              <li
                @click="clickShow(item, index)"
                v-for="(item, index) in bannerList"
                :class="{current: currentIndex == index}"
              >
                <img :src="item.url" :alt="item.movieName">
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="index-main clearfix">
        <!--正在热播S-->
        <div class="main-l fl">
          <div class="wrap-content clearfix">
            <div class="hot-play clearfix">
              <h2 class="ry fl">正在热映(55部)</h2>
              <a href="###" class="all fr">全部</a>
            </div>
            <ul class="hot-ul">
              <li @click="gotoDetail(item.movieId)" v-for="(item, index) in hotList">
                <i class="d-classify">
                  <!-- <img  :src='"" + item.movieType + ".png" ' alt=''> -->
                  <img :src="item.mType" alt>
                </i>
                <span class="hot-img" >
                  <!-- <span class="movies-tit">{{item.movieName}}</span> -->
                  <span class="score">
                    <i class="score-l">{{item.firstScore}}.</i>
                    <i class="score-s">{{item.secondScore}}</i>
                  </span>
                  <img :src="item.url" alt>
                </span>
                <span class="hot-title" title='点击购票跳转详情'>购票</span>
              </li>
            </ul>
          </div>
          <!--正在热播E-->
          <!--即将上映S-->
          <div class="wrap-content">
            <div class="advance clearfix">
              <h2 class="ry fl">即将上映(276部)</h2>
              <a href="###" class="all fr">全部</a>
            </div>
            <ul class="advance-ul clearfix">
              <li>
                <i class="d-classify">
                  <img src="../assets/images/3DMAX.png" alt>
                </i>
                <div class="advance-div">
                  <a href="detail.html">
                    <img src="../assets/images/tu8.jpeg" alt>
                    <span class="advance-tit">你的名字</span>
                  </a>
                  <h4 class="want">134人想看</h4>
                  <span class="pre-sale">
                    <a href="###">预告片</a>
                    <a class="ys" href="###">预售</a>
                  </span>
                </div>
                <h3 class="pre-time">12月26日上映</h3>
              </li>
              <li>
                <i class="d-classify">
                  <img src="../assets/images/3DMAX.png" alt>
                </i>
                <div class="advance-div">
                  <a href>
                    <img src="../assets/images/tu4.jpeg" alt>
                    <span class="advance-tit">你的名字</span>
                  </a>
                  <h4 class="want">134人想看</h4>
                  <span class="pre-sale">
                    <a href="###">预告片</a>
                    <a class="ys" href="###">预售</a>
                  </span>
                </div>
                <h3 class="pre-time">12月26日上映</h3>
              </li>
              <li>
                <i class="d-classify">
                  <img src="../assets/images/2DIMAX.png" alt>
                </i>
                <div class="advance-div">
                  <a href>
                    <img src="../assets/images/hot1.jpeg" alt>
                    <span class="advance-tit">爱你的人</span>
                  </a>
                  <h4 class="want">134人想看</h4>
                  <span class="pre-sale">
                    <a href="###">预告片</a>
                    <a class="ys" href="###">预售</a>
                  </span>
                </div>
                <h3 class="pre-time">12月26日上映</h3>
              </li>

              <li>
                <div class="advance-div">
                  <a href>
                    <img src="../assets/images/your-name.jpeg" alt>
                    <span class="advance-tit">你的名字</span>
                  </a>
                  <h4 class="want">134人想看</h4>
                  <span class="pre-sale">
                    <a href="###">预告片</a>
                    <a class="ys" href="###">预售</a>
                  </span>
                </div>
                <h3 class="pre-time">12月26日上映</h3>
              </li>

              <li>
                <div class="advance-div">
                  <a href>
                    <img src="../assets/images/your-name.jpeg" alt>
                    <span class="advance-tit">你的名字</span>
                  </a>
                  <h4 class="want">134人想看</h4>
                  <span class="pre-sale">
                    <a href="###">预告片</a>
                    <a class="ys" href="###">预售</a>
                  </span>
                </div>
                <h3 class="pre-time">12月26日上映</h3>
              </li>

              <li>
                <div class="advance-div">
                  <a href>
                    <img src="../assets/images/your-name.jpeg" alt>
                    <span class="advance-tit">你的名字</span>
                  </a>
                  <h4 class="want">134人想看</h4>
                  <span class="pre-sale">
                    <a href="###">预告片</a>
                    <a class="ys" href="###">预售</a>
                  </span>
                </div>
                <h3 class="pre-time">12月26日上映</h3>
              </li>
              <li>
                <i class="d-classify">
                  <img src="../assets/images/3DMAX.png" alt>
                </i>
                <div class="advance-div">
                  <a href>
                    <img src="../assets/images/your-name.jpeg" alt>
                    <span class="advance-tit">你的名字</span>
                  </a>
                  <h4 class="want">134人想看</h4>
                  <span class="pre-sale">
                    <a href="###">预告片</a>
                    <a class="ys" href="###">预售</a>
                  </span>
                </div>
                <h3 class="pre-time">12月26日上映</h3>
              </li>

              <li>
                <div class="advance-div">
                  <a href>
                    <img src="../assets/images/your-name.jpeg" alt>
                    <span class="advance-tit">你的名字</span>
                  </a>
                  <h4 class="want">134人想看</h4>
                  <span class="pre-sale">
                    <a href="###">预告片</a>
                    <a class="ys" href="###">预售</a>
                  </span>
                </div>
                <h3 class="pre-time">12月26日上映</h3>
              </li>
            </ul>
          </div>
          <!--即将上映E-->
          <!--热播电影 S-->
          <div class="wrap-content">
            <div class="rebo clearfix">
              <h2 class="ry fl">热播电影</h2>
              <ul class="rebo-menu">
                <li>
                  <a href>爱情</a>
                </li>
                <li>
                  <a href>喜剧</a>
                </li>
                <li>
                  <a href>动作</a>
                </li>
                <li>
                  <a href>恐怖</a>
                </li>
                <li>
                  <a href>动画</a>
                </li>
              </ul>
              <a href="###" class="all fr">全部</a>
            </div>
            <div class="rebo-movies clearfix">
              <div class="rebo-l fl">
                <!--<i class="d-classify"><img src="../assets/images/3D.png" alt=""></i>-->
                <a class="hot-img" href="detail.html">
                  <span class="movies-tit">战狼</span>
                  <span class="score">
                    <i class="score-l">8.</i>
                    <i class="score-s">9</i>
                  </span>
                  <img src="../assets/images/wid.jpeg" alt>
                </a>
              </div>
              <ul class="rebo-ul">
                <li>
                  <i class="d-classify">
                    <img src="../assets/images/3D.png" alt>
                  </i>
                  <a class="hot-img" href="detail.html">
                    <span class="movies-tit">爱你的人</span>
                    <span class="score">
                      <i class="score-l">8.</i>
                      <i class="score-s">9</i>
                    </span>
                    <img src="../assets/images/knan.jpeg" alt>
                  </a>
                </li>
                <li>
                  <i class="d-classify">
                    <img src="../assets/images/3D.png" alt>
                  </i>
                  <a class="hot-img" href="detail.html">
                    <span class="movies-tit">爱你的人</span>
                    <span class="score">
                      <i class="score-l">8.</i>
                      <i class="score-s">9</i>
                    </span>
                    <img src="../assets/images/knan.jpeg" alt>
                  </a>
                </li>
                <li>
                  <i class="d-classify">
                    <img src="../assets/images/3D.png" alt>
                  </i>
                  <a class="hot-img" href="detail.html">
                    <span class="movies-tit">名侦探柯南</span>
                    <span class="score">
                      <i class="score-l">8.</i>
                      <i class="score-s">9</i>
                    </span>
                    <img src="../assets/images/knan.jpeg" alt>
                  </a>
                </li>
                <li>
                  <i class="d-classify">
                    <img src="../assets/images/3D.png" alt>
                  </i>
                  <a class="hot-img" href="detail.html">
                    <span class="movies-tit">名侦探柯南</span>
                    <span class="score">
                      <i class="score-l">8.</i>
                      <i class="score-s">9</i>
                    </span>
                    <img src="../assets/images/knan.jpeg" alt>
                  </a>
                </li>
                <li>
                  <i class="d-classify">
                    <img src="../assets/images/3D.png" alt>
                  </i>
                  <a class="hot-img" href="detail.html">
                    <span class="movies-tit">名侦探柯南</span>
                    <span class="score">
                      <i class="score-l">8.</i>
                      <i class="score-s">9</i>
                    </span>
                    <img src="../assets/images/knan.jpeg" alt>
                  </a>
                </li>
                <li>
                  <i class="d-classify">
                    <img src="../assets/images/3D.png" alt>
                  </i>
                  <a class="hot-img" href="detail.html">
                    <span class="movies-tit">名侦探柯南</span>
                    <span class="score">
                      <i class="score-l">8.</i>
                      <i class="score-s">9</i>
                    </span>
                    <img src="../assets/images/knan.jpeg" alt>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <!--热播电影 E-->
        </div>

        <!--首页右边部分 S-->
        <div class="main-r fr">
          <div class="wrap-right">
            <div class="today clearfix">
              <h2 class="ry">今日票房</h2>
            </div>
            <div class="num1 clearfix">
              <i class="cup"></i>
              <a href="###">
                <img class="num1-img fl" src="../assets/images/shenqi.jpeg" alt="神奇动物在哪里">
                <div class="num1-div fr">
                  <h3 class="tit tx_over">神奇动物在哪里</h3>
                  <p class="count">5203.28万</p>
                </div>
              </a>
            </div>
            <ul class="num1-ul clearfix">
              <li>
                <a href="###">
                  <h3 class="fl">
                    <i>2</i>惊天破
                  </h3>
                  <p class="fr">1000.00万</p>
                </a>
              </li>
              <li>
                <a href="###">
                  <h3 class="fl">
                    <i>3</i>湄公河行动
                  </h3>
                  <p class="fr">999.99万</p>
                </a>
              </li>
              <li>
                <a href="###">
                  <h3 class="fl">
                    <i>4</i>侠探杰克：永不回头
                  </h3>
                  <p class="fr">888.88万</p>
                </a>
              </li>
              <li>
                <a href="###">
                  <h3 class="fl">
                    <i>5</i>龙珠Z：复活的弗利萨
                  </h3>
                  <p class="fr">756.00万</p>
                </a>
              </li>
              <li>
                <a href="###">
                  <h3 class="fl">
                    <i>6</i>从你的全世界路过
                  </h3>
                  <p class="fr">777.77万</p>
                </a>
              </li>
              <li>
                <a href="###">
                  <h3 class="fl">
                    <i>7</i>圆梦巨人
                  </h3>
                  <p class="fr">666.66万</p>
                </a>
              </li>
              <li>
                <a href="###">
                  <h3 class="fl">
                    <i>8</i>凶手还未睡
                  </h3>
                  <p class="fr">555.55万</p>
                </a>
              </li>
              <li>
                <a href="###">
                  <h3 class="fl">
                    <i>9</i>勇士
                  </h3>
                  <p class="fr">444.44万</p>
                </a>
              </li>
              <li>
                <a href="###">
                  <h3 class="fl">
                    <i>10</i>遵义会议
                  </h3>
                  <p class="fr">222.22万</p>
                </a>
              </li>
            </ul>
            <div class="today-pan">
              <span class="td-pan">今日盘点</span>
              <div class="td-r fr">
                <div class="total clearfix">
                  <h2 class="ry fl">
                    1.03
                    <i class="unit">亿</i>
                  </h2>
                  <a href="###" class="all fr">查看更多</a>
                </div>
                <p class="bt-time">
                  <span class="fl">北京时间22:46:26</span>
                  <span class="fr">猫眼专业版实时票房数据</span>
                </p>
              </div>
            </div>
          </div>
          <div class="wrap-right">
            <div class="wish">
              <div class="wishes clearfix">
                <h2 class="ry fl">最受期待</h2>
                <a href="###" class="all fr">查看完整榜单</a>
              </div>
            </div>
            <ul class="wish-ul clearfix">
              <li class="li-first">
                <a href="###">
                  <i class="fire"></i>
                  <img class="fl" src="../assets/images/your-name.jpeg" alt="你的名字">
                  <div class="wish-div">
                    <h3 class="wish-tit">你的名字</h3>
                    <p class="show-time">上映时间:2016</p>
                    <p class="want-watch">111111人想看</p>
                  </div>
                </a>
              </li>
              <li class="li-second">
                <a href="###">
                  <i class="turn">2</i>
                  <img src="../assets/images/pin.jpeg" alt="长城">
                  <div class="second-div">
                    <h3 class="wish-tit">长城</h3>
                    <p class="want-watch">123345人想看</p>
                  </div>
                </a>
              </li>
              <li class="li-second">
                <a href="###">
                  <i class="turn">3</i>
                  <img src="../assets/images/baiduren.jpg" alt="摆渡人">
                  <div class="second-div">
                    <h3 class="wish-tit">摆渡人</h3>
                    <p class="want-watch">123345人想看</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="###">
                  <h3 class="fl">
                    <i>4</i>你的名字。
                  </h3>
                  <p class="wish-num fr">1332455人想看</p>
                </a>
              </li>
              <li>
                <a href="###">
                  <h3 class="fl">
                    <i>5</i>你就是潘金莲
                  </h3>
                  <p class="wish-num fr">3455266人想看</p>
                </a>
              </li>
              <li>
                <a href="###">
                  <h3 class="fl">
                    <i>6</i>长城
                  </h3>
                  <p class="wish-num fr">345526人想看</p>
                </a>
              </li>
              <li>
                <a href="###">
                  <h3 class="fl">
                    <i>7</i>最萌身高差
                  </h3>
                  <p class="wish-num fr">222222人想看</p>
                </a>
              </li>
              <li>
                <a href="###">
                  <h3 class="fl">
                    <i>8</i>但丁密码
                  </h3>
                  <p class="wish-num fr">34555266人想看</p>
                </a>
              </li>
              <li>
                <a href="###">
                  <h3 class="fl">
                    <i>9</i>大闹天竺
                  </h3>
                  <p class="wish-num fr">3 人想看</p>
                </a>
              </li>
              <li>
                <a href="###">
                  <h3 class="fl">
                    <i>10</i>28岁未成年
                  </h3>
                  <p class="wish-num fr">3422556人想看</p>
                </a>
              </li>
            </ul>
          </div>
          <div class="wrap-right">
            <div class="orders">
              <div class="order clearfix">
                <h2 class="ry fl">TOP 100</h2>
                <a class="all fr" href="###">查看完整榜单</a>
              </div>
            </div>
            <div class="num2 clearfix">
              <i class="cup"></i>
              <a href="###">
                <img class="num1-img fl" src="../assets/images/bawangbieji.jpeg" alt="霸王别姬">
                <div class="num1-div fr">
                  <h3 class="tit tx_over">霸王别姬</h3>
                  <p class="count">9.6分</p>
                </div>
              </a>
            </div>
            <ul class="num2-ul clearfix">
              <li>
                <a href="###">
                  <h3 class="fl">
                    <i>2</i>肖申克的救赎
                  </h3>
                  <p class="fr">9.4分</p>
                </a>
              </li>
              <li>
                <a href="###">
                  <h3 class="fl">
                    <i>3</i>这个杀手不太冷
                  </h3>
                  <p class="fr">9.4分</p>
                </a>
              </li>
              <li>
                <a href="###">
                  <h3 class="fl">
                    <i>4</i>罗马假日
                  </h3>
                  <p class="fr">9.4分</p>
                </a>
              </li>
              <li>
                <a href="###">
                  <h3 class="fl">
                    <i>5</i>阿甘正传
                  </h3>
                  <p class="fr">9.2分</p>
                </a>
              </li>
              <li>
                <a href="###">
                  <h3 class="fl">
                    <i>6</i>泰塔尼克号
                  </h3>
                  <p class="fr">9.2分</p>
                </a>
              </li>
              <li>
                <a href="###">
                  <h3 class="fl">
                    <i>7</i>龙猫
                  </h3>
                  <p class="fr">9.2分</p>
                </a>
              </li>
              <li>
                <a href="###">
                  <h3 class="fl">
                    <i>8</i>教父
                  </h3>
                  <p class="fr">9.1分</p>
                </a>
              </li>
              <li>
                <a href="###">
                  <h3 class="fl">
                    <i>9</i>唐伯虎点秋香
                  </h3>
                  <p class="fr">9.1分</p>
                </a>
              </li>
              <li>
                <a href="###">
                  <h3 class="fl">
                    <i>10</i>千与千寻
                  </h3>
                  <p class="fr">9.0分</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!--首页右边部分 E-->
      </div>
    </div>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from "./pubComponent/myHeader";
import MyFooter from "./pubComponent/footer";
export default {
  name: "HelloWorld",
  data() {
    return {
      bannerList: [], // banner
      hotList: [], // 热映
      currentIndex: 0,
      currentImg: ""
    };
  },
  components: {
    MyHeader,
    MyFooter
  },
  mounted() {
    this.initPage();
  },
  methods: {
    clickShow(item, index) {
      this.currentIndex = index;
      this.currentImg = item.url;
    },
    initPage() {
      this.$axios.get("/api/bannerList").then(res => {
        this.bannerList = res.data.data.bannerList;
        this.currentImg = res.data.data.bannerList[0].url;
      });
      this.$axios.get("/api/hot_list").then(res => {
        let result = res.data.data.hotPlayList;
        for (let i = 0, len = result.length; i < len; i++) {
          result[i].firstScore = result[i].movieScore.split(".")[0];
          result[i].secondScore = result[i].movieScore.split(".")[1];
          result[i].mType =
            result[i].movieType != "2D"
              ? `/static/images/${result[i].movieType}.png`
              : "";
          //
        }
        this.hotList = result;
      });
    },
    gotoDetail(movieId) {
      if (localStorage.getItem("user")) {
        this.$router.push(`/detail/${movieId}`);
      } else {
        this.$router.push("/login");
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
body {
  min-width: 1200px;
  margin: 0 auto;
  background: #fff;
}
.logo-header {
  margin: 0 auto;
  width: 980px;
}
.logo-header > a {
  display: block;
  width: 230px;
  height: 45px;
  background: url("/static/images/login-icon.png") no-repeat -114px -677px;
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
  background: url("/static/images/login-icon.png") no-repeat -1268px -509px;
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
  background: url("/static/images/login-icon.png") no-repeat -1250px -617px;
}
.password {
  width: 16px;
  height: 18px;
  margin-top: 9px;
  background: url("/static/images/login-icon.png") no-repeat -1250px -527px;
}
.login-p3 {
  margin-bottom: 12px;
}

.login-p4 {
  height: 15px;
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
}
.free-register {
  color: #ec454a;
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
  background: url("/static/images/login-icon.png") no-repeat -534px -722px;
}
.line2 {
  width: 100%;
  border-top: 1px solid #ec797c;
  border-bottom: 1px solid #f5f5f5;
}

.register-content {
  margin: 35px auto 0;
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
/*index css*/
.index-content {
  width: 100%;
  margin: 81px auto 0;
}
.banner {
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 570px;
  overflow: hidden;
}
.banner .advert {
  width: 100%;
  margin: 0 auto;
}
.banner .advert li {
  height: 440px;
  width: 100%;
}
.banner .advert li img {
  width: 100%;
  height: 440px;
}

.banner .code {
  position: relative;
  margin: 0 auto;
  bottom: 65px;
  width: 1110px;
  height: 121px;
  background: #fff;
  box-shadow: 1px 1px 3px 1px #666;
}
.banner .code li {
  float: left;
  margin: 3px 0;
  width: 160px;
  height: 108px;
  border: 3px solid transparent;
}

.banner .code li img {
  width: 160px;
  height: 108px;
}
.banner .code .current {
  border: 3px solid #ef4238;
}
.banner .code li:hover {
  border: 3px solid #ef4238;
}
.code .arrow-l,
.code .arrow-r {
  display: block;
  width: 57px;
  height: 120px;
  cursor: pointer;
}
.code .arrow-l {
  background: url("/static/images/arrow-l.png");
}
.code .arrow-r {
  background: url("/static/images/arrow-r.jpg");
}
.index-main {
  margin: 0 auto;
  width: 1200px;
}
.index-main {
  margin-top: 10px;
}
.index-main .main-l {
  width: 740px;
}

.hot-ul {
  margin: 0 0 0 -15px;
  width: 770px;
}
.hot-ul li {
  float: left;
  position: relative;
  margin: 15px;
  width: 160px;
  height: 259px;
  border: 1px solid #ccc;
}

.hot-ul li a img {
  width: 160px;
  height: 220px;
}

.hot-ul .movies-tit {
  position: absolute;
}
.hot-img {
  display: block;
  position: relative;
  height: 220px;
}

.hot-img .movies-tit {
  position: absolute;
  left: 9px;
  bottom: 12px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
}

.hot-img .score {
  position: absolute;
  right: 8px;
  bottom: 12px;
  font-size: 18px;
  font-weight: bold;
  color: #ffb402;
  font-style: italic;
}
.score .score-l {
  font-style: italic;
}
.score-s {
  font-size: 14px;
  font-style: italic;
}
.hot-ul .hot-title {
  display: block;
  height: 39px;
  width: 100%;
  text-align: center;
  line-height: 39px;
  color: #ef4238;
  font-size: 14px;
}
.hot-ul .hot-title:hover {
  color: #fff;
  background: #ef4238;
}
/*即将上映S*/
.advance {
  margin-top: 60px;
}
.advance-ul {
  width: 770px;
  margin-left: -15px;
}
.advance-ul li {
  position: relative;
  float: left;
  margin: 15px;
  width: 162px;
  height: 320px;
}
.advance-ul li .advance-div {
  position: relative;
  display: block;
  width: 160px;
  height: 297px;
  border: 1px solid #ccc;
}
.advance-ul li a img {
  width: 160px;
  height: 220px;
}
.advance-ul li a {
  position: relative;
}
.advance-tit {
  position: absolute;
  left: 9px;
  bottom: 12px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
}
.want {
  display: block;
  height: 34px;
  width: 160px;
  text-indent: 10px;
  font-size: 12px;
  color: #febf00;
  background: #fbfbfb;
}
.pre-sale {
  height: 38px;
  width: 160px;
  font-size: 13px;
  text-align: center;
  line-height: 38px;
}
.pre-sale a {
  float: left;
  display: inline-block;
  width: 80px;
  height: 38px;
  color: #549ef3;
  text-align: center;
  background: #fff;
}
.pre-sale a:first-child {
  width: 79px;
  color: #999;
  text-align: center;
  border-right: 1px dotted #ccc;
}
.ys:hover {
  color: #fff;
  background: #549ef3;
}
.pre-time {
  height: 40px;
  width: 160px;
  text-align: center;
  line-height: 40px;
  color: #ccc;
  font-family: " Microsoft YaHei";
}
/*即将上映E*/
.rebo {
  margin-top: 60px;
}
.rebo-menu li {
  float: left;
  font-size: 14px;
}
.rebo-menu li a {
  padding-left: 15px;
  line-height: 39px;
  color: #333;
}
.rebo-menu li a:hover {
  text-decoration: underline;
}
.rebo-movies {
  padding-top: 15px;
  width: 770px;
  margin-left: -15px;
}
.rebo-l {
  position: relative;
  margin: 15px;
  width: 350px;
  height: 220px;
  border: 1px solid #ccc;
}
.rebo-ul {
  /*width: 775px;*/
}
.rebo-ul li {
  position: relative;
  float: left;
  margin: 15px;
  width: 160px;
  height: 220px;
  border: 1px solid #ccc;
}
/*首页右边部分*/
.index-main .main-r {
  width: 360px;
}
.num1,
.num2 {
  margin-top: 15px;
  position: relative;
  width: 358px;
  height: 78px;
  border: 1px solid #ccc;
}
.num1 .cup,
.num2 .cup {
  position: absolute;
  display: block;
  width: 22px;
  height: 26px;
  left: 0;
  top: 0;
  background: url("/static/images/cup.png") no-repeat;
}
.num1-img {
  float: left;
  width: 120px;
  height: 79px;
}
.num1-div {
  padding: 0 10px;
  width: 218px;
  height: 100%;
}
.num1-div .tit {
  font-size: 18px;
  color: #333;
  line-height: 40px;
}
.num1-div .count {
  font-size: 14px;
  color: #ef4238;
}
.num2 .num1-div .count {
  font-size: 14px;
  color: #ffb400;
}
.num1:hover {
  background: #f7f7f7;
}

.num1-ul,
.num2-ul {
  margin-top: 10px;
}
.num1-ul li,
.wish-ul li,
.num2-ul li {
  float: none;
  width: 360px;
  font-size: 16px;
  line-height: 35px;
  background: #fff;
  overflow: hidden;
}
.num1-ul li h3,
.wish-ul li h3,
.num2-ul li h3 {
  color: #333;
  font-size: 15px;
}

.num1-ul li p {
  color: #ef4238;
  font-size: 13px;
}
.num2-ul li p {
  color: #fdb863;
  font-size: 13px;
}
.wish-ul li .wish-num {
  color: #fdb863;
}
.num1-ul li h3 i,
.wish-ul li h3 i,
.num2-ul li h3 i {
  padding-right: 10px;
  font-size: 18px;
  font-style: italic;
  color: #999;
  vertical-align: top;
}
.num1-ul li:first-child h3 i,
.num1-ul li:nth-child(2) h3 i {
  color: #ef4238;
}
.num2-ul li:first-child h3 i,
.num2-ul li:nth-child(2) h3 i {
  color: #ffb417;
}
.num1-ul li:hover,
.wish-ul li:hover,
.num2-ul li:hover {
  background: #f7f7f7;
}
.today-pan {
  margin: 40px auto 0;
  width: 358px;
  height: 103px;
  border: 1px solid #ccc;
}
.td-pan {
  float: left;
  padding: 13px 12px 13px 11px;
  height: 77px;
  width: 15px;
  color: #fff;
  font-size: 18px;
  line-height: 20px;
  background: #ef4238;
}
.td-r {
  width: 318px;
  height: 103px;
  background: #fdfdfd;
}
.td-r .unit {
  font-size: 13px;
}
.td-r .total {
  padding: 20px 15px 10px;
}
.td-r .bt-time {
  padding: 0 15px;
  color: #ccc;
  font-size: 14px;
}
.today-pan .td-r:hover {
  background-color: #f7f7f7;
}
.wish {
  margin-top: 76px;
}
.wish-ul {
  margin: 15px 0 0 -8px;
  width: 376px;
}
.wish-ul li {
  float: left;
  margin: 0 8px;
}
.wish-ul .li-first {
  position: relative;
  width: 358px;
  height: 193px;
  border: 1px solid #ccc;
}
.wish-ul .li-first img {
  height: 194px;
  width: 140px;
}
.wish-ul .li-first .fire {
  display: block;
  position: absolute;
  width: 20px;
  height: 27px;
  background: url("/static/images/yellow-fire.png") no-repeat;
}
.wish-div {
  float: right;
  padding: 60px 0 0 10px;
  width: 208px;
  height: 133px;
  /*text-align: center;*/
}
.wish-tit {
  color: #333;
  font-size: 18px;
  text-align: left;
}
.show-time {
  color: #999;
  font-size: 16px;
  line-height: 40px;
}
.want-watch {
  font-size: 11px;
  color: #fdb863;
  line-height: 8px;
}
.wish-ul .li-second {
  float: left;
  position: relative;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 170px;
  height: 183px;
  border: 1px solid #ccc;
}
.wish-ul .li-second img {
  height: 118px;
  width: 170px;
}
.wish-ul .li-second .turn {
  display: block;
  position: absolute;
  width: 20px;
  height: 20px;
  color: #fff;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  font-style: italic;
  background: #ffb400;
}
.second-div {
  padding-left: 10px;
}
.second-div .wish-tit {
  line-height: 40px;
}
.orders {
  margin-top: 97px;
}
.orders .nunl-ul li p {
  color: #fdb863;
}
</style>
