<template>
  <div>
    <MyHeader></MyHeader>
    <div class="detail-banner clearfix">
      <div class="banner-detail-cont">
        <div class="detail-l fl clearfix">
          <div class="detail-l-l fl">
            <img :src="movieDetail.imgSrc" alt="mekong">
          </div>
          <div class="detail-r-r fr">
            <h2>{{movieDetail.chineseName}}</h2>
            <p class="language">{{movieDetail.englishName}}</p>
            <p>{{movieDetail.type}}</p>
            <p>{{movieDetail.playAreas}}/{{movieDetail.movieTime}}分钟</p>
            <p>{{movieDetail.showTime}}{{movieDetail.playingArea}}</p>
            <p class="situation">
              <a href="##">
                <i class="heart"></i>想看
              </a>
              <a href="##">
                <i class="star"></i>评分
              </a>
            </p>
          </div>
        </div>
        <div class="detail-r fr">
          <ol class="clearfix">
            <li>
              <i class="customer">用户评分</i>
              <i class="grade">{{movieDetail.userScore}}</i>
              <i class="population">(55.5万人评分)</i>
            </li>
            <li>
              <i class="customer">专业评分</i>
              <i class="grade">{{movieDetail.professorScore}}</i>
              <i class="population">(55.5万人评分)</i>
            </li>
            <li>
              <i class="customer">累计票房</i>
              <i class="count">{{movieDetail.total}}亿</i>
            </li>
          </ol>
          <a class="purchase" href>立即购票</a>
        </div>
      </div>
    </div>
    <!--content开始-->
    <div class="detail-cont clearfix">
      <div class="xq-l fl">
        <div class="tit-div">
          <ul class="tit-ul clearfix">
            <li>
              <a class="a-current" href="##">介绍</a>
            </li>
            <li>
              <a href="##">演职人员</a>
            </li>
            <li>
              <a class="a-awards" href="##">奖项</a>
            </li>
            <li>
              <a href="##">图集</a>
            </li>
          </ul>
        </div>
        <div class="jq">
          <div class="jq-head clearfix">
            <i class="mark"></i>
            <h3>剧情简介</h3>
          </div>
          <p>
            山小镇的少女宫水三叶（上白石萌音 配音）每天都过着忧郁烦燥的生活，而正处于青春叛逆期 的她对大都市的憧憬向往与日俱增。然而不久，三叶做了一个变成男孩子的梦，眼前的这里有着 陌生的房间、朋友和她梦寐以求的宽敞街道。三叶虽然感到迷茫困惑，但能够尽情享受朝思暮想 的都市生活的她觉得神清气爽。与此同时，远在他乡的东京少年立花泷（神木隆之介 配音）也有 一个奇怪的梦境，睁开睡眼的他发现变成一名不知名姓女孩的自己身处一个从未去过的深山小镇。 两人惊醒时发现各自回到了自己的身体，但每逢两人入睡或半梦半醒之际，他们就会交换对调身份
            。一头雾水的三叶决定循着线索找寻立花泷，而立花泷也试着跟三叶沟通，冥冥之中互换身份的两 人不约而同地竭尽所能设法找寻对方，而彼此间的了解也因此渐渐加深，虽未曾相见却早已似曾相 识的两人暗生情愫，一段青春季节的奇妙物语随之展开。跨越时空梦境的阻隔，终在现实世界邂逅 的两人上演了一幕青涩浪漫的奇遇暖心之恋。岂料一场突如其来的意外将两人的一切美好定格在梦 醒之际……
          </p>
        </div>
        <div class="actors clearfix">
          <div class="jq-head clearfix">
            <i class="mark"></i>
            <h3>演职人员</h3>
            <a href>全部</a>
          </div>
          <div class="act">
            <div class="act-l fl">
              <h4>导演</h4>
              <img src="../assets/images/d1.jpeg" alt="导演">
              <a href="##">导演名字</a>
            </div>
            <div class="act-r fr">
              <dl>
                <dt>演员</dt>
                <dd>
                  <img src="../assets/images/d2.jpeg" alt>
                  <a class="tx_over" href="##">张三三</a>
                  <span class="tx_over">饰：李四四(李四四李四四)</span>
                </dd>
                <dd>
                  <img src="../assets/images/d3.jpeg" alt>
                  <a class="tx_over" href="##">张三三</a>
                  <span class="tx_over">饰：李四四</span>
                </dd>
                <dd>
                  <img src="../assets/images/d2.jpeg" alt>
                  <a class="tx_over" href="##">张三三</a>
                  <span class="tx_over">饰：李四四</span>
                </dd>
                <dd>
                  <img src="../assets/images/d3.jpeg" alt>
                  <a class="tx_over" href="##">张三三</a>
                  <span class="tx_over">饰：李四四</span>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="pictures clearfix">
          <div class="jq-head clearfix">
            <i class="mark"></i>
            <h3>图集</h3>
            <a href>全部</a>
          </div>
          <div class="tuji">
            <ul class="clearfix">
              <li class="tuji-b">
                <a href="##">
                  <img src="../assets/images/tuji1.jpeg" alt>
                </a>
              </li>
              <li>
                <a href="##">
                  <img src="../assets/images/tuji2.jpeg" alt>
                </a>
              </li>
              <li>
                <a href="##">
                  <img src="../assets/images/tuji3.jpeg" alt>
                </a>
              </li>
              <li>
                <a href="##">
                  <img src="../assets/images/tuji4.jpeg" alt>
                </a>
              </li>
              <li>
                <a href="##">
                  <img src="../assets/images/tuji2.jpeg" alt>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="short-comment">
          <div class="jq-head clearfix">
            <i class="mark"></i>
            <h3>热门短评</h3>
            <a class="write" href>写短评</a>
          </div>
          <div class="discuss clearfix">
            <div class="discuss-info fl">
              <span>
                <i></i>
                <img src="../assets/images/youke1.jpeg" alt>
              </span>
            </div>
            <div class="discuss-detail fr">
              <p class="username">
                hkfgnf
                <i>购</i>
              </p>
              <div class="xji clearfix">
                <span>09-09</span>
                <ul>
                  <li>
                    <i class="left-star"></i>
                    <i class="right-star"></i>
                  </li>
                  <li>
                    <i class="left-star"></i>
                    <i class="right-star"></i>
                  </li>
                  <li>
                    <i class="left-star"></i>
                    <i class="right-star"></i>
                  </li>
                  <li>
                    <i class="left-star"></i>
                    <i class="right-star"></i>
                  </li>
                  <li>
                    <i class="left-star"></i>
                    <i class="right-star"></i>
                  </li>
                </ul>
                <p class="fr">
                  <a href></a>
                  <i>1234</i>
                </p>
              </div>
              <p
                class="shu"
              >每一帧都是壁纸，1080p的感觉和320p完全不一样， 剧情在双重推进下进入迷茫的找寻部分，最后的相 遇恰到好处(不回头就要砍人了)，恰到好处的泪点 和笑点交互也不至于泪崩，新海诚在剧情上下了蛮 大功夫，情节与BGM相互联系，满满的感动！ 最后把观众影评顶起来，让国内某些专业影评滚蛋。</p>
            </div>
          </div>
          <div class="discuss clearfix">
            <div class="discuss-info fl">
              <span>
                <i class="v4"></i>
                <img src="../assets/images/youke2.jpeg" alt>
              </span>
            </div>
            <div class="discuss-detail fr">
              <p class="username">
                abc
                <i>购</i>
              </p>
              <div class="xji clearfix">
                <span>09-09</span>
                <ul>
                  <li>
                    <i class="left-star"></i>
                    <i class="right-star"></i>
                  </li>
                  <li>
                    <i class="left-star"></i>
                    <i class="right-star"></i>
                  </li>
                  <li>
                    <i class="left-star"></i>
                    <i class="right-star"></i>
                  </li>
                  <li>
                    <i class="left-star"></i>
                    <i class="right-star"></i>
                  </li>
                  <li>
                    <i class="left-star"></i>
                    <i class="right-gray-star"></i>
                  </li>
                </ul>
                <p class="fr">
                  <a href></a>
                  <i>1234</i>
                </p>
              </div>
              <p class="shu">每一帧都是壁纸，1080p的感觉和320p完全不一样， 剧情在双重推进下进入迷茫的找寻部分，最后的相</p>
            </div>
          </div>
          <div class="discuss clearfix">
            <div class="discuss-info fl">
              <span>
                <i></i>
                <img src="../assets/images/youke1.jpeg" alt>
              </span>
            </div>
            <div class="discuss-detail fr">
              <p class="username">
                小丸子
                <i>购</i>
              </p>
              <div class="xji clearfix">
                <span>09-09</span>
                <ul>
                  <li>
                    <i class="left-star"></i>
                    <i class="right-star"></i>
                  </li>
                  <li>
                    <i class="left-star"></i>
                    <i class="right-star"></i>
                  </li>
                  <li>
                    <i class="left-star"></i>
                    <i class="right-star"></i>
                  </li>
                  <li>
                    <i class="left-star"></i>
                    <i class="right-star"></i>
                  </li>
                  <li>
                    <i class="left-star"></i>
                    <i class="right-gray-star"></i>
                  </li>
                </ul>
                <p class="fr">
                  <a href></a>
                  <i>1234</i>
                </p>
              </div>
              <p
                class="shu"
              >每一帧都是壁纸，1080p的感觉和320p完全不一样， 剧情在双重推进下进入迷茫的找寻部分，最后的相 遇恰到好处(不回头就要砍人了)，恰到好处的泪点 和笑点交互也不至于泪崩，新海诚在剧情上下了蛮 大功夫，情节与BGM相互联系，满满的感动！ 最后把观众影评顶起来，让国内某些专业影评滚蛋。</p>
            </div>
          </div>
          <div class="discuss clearfix">
            <div class="discuss-info fl">
              <span>
                <i class="v4"></i>
                <img src="../assets/images/youke2.jpeg" alt>
              </span>
            </div>
            <div class="discuss-detail fr">
              <p class="username">
                Seven Ghost
                <i>购</i>
              </p>
              <div class="xji clearfix">
                <span>09-09</span>
                <ul>
                  <li>
                    <i class="left-star"></i>
                    <i class="right-star"></i>
                  </li>
                  <li>
                    <i class="left-star"></i>
                    <i class="right-star"></i>
                  </li>
                  <li>
                    <i class="left-star"></i>
                    <i class="right-star"></i>
                  </li>
                  <li>
                    <i class="left-star"></i>
                    <i class="right-star"></i>
                  </li>
                  <li>
                    <i class="left-star"></i>
                    <i class="right-star"></i>
                  </li>
                </ul>
                <p class="fr">
                  <a href></a>
                  <i>1234</i>
                </p>
              </div>
              <p class="shu">每一帧都是壁纸，1080p的感觉和320p完全不一样， 剧情在双重推进下进入迷茫的找寻部分，最后的相</p>
            </div>
          </div>
          <div class="discuss clearfix">
            <div class="discuss-info fl">
              <span>
                <i></i>
                <img src="../assets/images/youke1.jpeg" alt>
              </span>
            </div>
            <div class="discuss-detail fr">
              <p class="username">
                hkfgnf
                <i>购</i>
              </p>
              <div class="xji clearfix">
                <span>09-09</span>
                <ul>
                  <li>
                    <i class="left-star"></i>
                    <i class="right-star"></i>
                  </li>
                  <li>
                    <i class="left-star"></i>
                    <i class="right-star"></i>
                  </li>
                  <li>
                    <i class="left-star"></i>
                    <i class="right-star"></i>
                  </li>
                  <li>
                    <i class="left-star"></i>
                    <i class="right-star"></i>
                  </li>
                  <li>
                    <i class="left-star"></i>
                    <i class="right-gray-star"></i>
                  </li>
                </ul>
                <p class="fr">
                  <a href></a>
                  <i>1234</i>
                </p>
              </div>
              <p
                class="shu"
              >每一帧都是壁纸，1080p的感觉和320p完全不一样， 剧情在双重推进下进入迷茫的找寻部分，最后的相 遇恰到好处(不回头就要砍人了)，恰到好处的泪点 和笑点交互也不至于泪崩，新海诚在剧情上下了蛮 大功夫，情节与BGM相互联系，满满的感动！ 最后把观众影评顶起来，让国内某些专业影评滚蛋。</p>
            </div>
          </div>
          <div class="discuss clearfix">
            <div class="discuss-info fl">
              <span>
                <i class="v4"></i>
                <img src="../assets/images/youke2.jpeg" alt>
              </span>
            </div>
            <div class="discuss-detail fr">
              <p class="username">
                萌宠
                <i>购</i>
              </p>
              <div class="xji clearfix">
                <span>09-09</span>
                <ul>
                  <li>
                    <i class="left-star"></i>
                    <i class="right-star"></i>
                  </li>
                  <li>
                    <i class="left-star"></i>
                    <i class="right-star"></i>
                  </li>
                  <li>
                    <i class="left-star"></i>
                    <i class="right-star"></i>
                  </li>
                  <li>
                    <i class="left-star"></i>
                    <i class="right-star"></i>
                  </li>
                  <li>
                    <i class="left-star"></i>
                    <i class="right-gray-star"></i>
                  </li>
                </ul>
                <p class="fr">
                  <a href></a>
                  <i>1234</i>
                </p>
              </div>
              <p class="shu">每一帧都是壁纸，1080p的感觉和320p完全不一样， 剧情在双重推进下进入迷茫的找寻部分，最后的相</p>
            </div>
          </div>
        </div>
      </div>
      <!--右边部分-->
      <div class="xq-r fr">
        <div class="jq-head atop clearfix">
          <i class="mark"></i>
          <h3>相关资讯</h3>
        </div>
        <div class="about">
          <ul>
            <li class="clearfix">
              <a class="about-l fl" href="hot.html">
                <img src="../assets/images/about1.jpeg" alt>
              </a>
              <div class="about-r fr">
                <p>《你的名字》首日狂揽，2D动画最高成绩</p>
                <p class="maoyan">
                  猫眼电影
                  <i class="eyes1"></i>236663
                  <i class="comment1"></i>111
                </p>
              </div>
            </li>
            <li class="clearfix">
              <a class="about-l fl" href="hot.html">
                <img src="../assets/images/about1.jpeg" alt>
              </a>
              <div class="about-r fr">
                <p>《你的名字》首日狂揽，2D动画最高成绩</p>
                <p class="maoyan">
                  猫眼电影
                  <i class="eyes1"></i>236663
                  <i class="comment1"></i>111
                </p>
              </div>
            </li>
            <li class="clearfix">
              <a class="about-l fl" href="hot.html">
                <img src="../assets/images/about1.jpeg" alt>
              </a>
              <div class="about-r fr">
                <p>《你的名字》首日狂揽，2D动画最高成绩</p>
                <p class="maoyan">
                  猫眼电影
                  <i class="eyes1"></i>236663
                  <i class="comment1"></i>111
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div class="jq-head clearfix">
          <i class="mark"></i>
          <h3>相关电影</h3>
        </div>
        <ul class="about-ul clearfix">
          <li>
            <a class="img-a" href="##">
              <img class="img-size" src="../assets/images/knan.jpeg" alt>
            </a>
            <h3 class="h3-tit tx_over">
              <a href>名侦探柯南：纯黑噩梦</a>
            </h3>
            <p class="score">
              8.
              <i>9</i>
            </p>
          </li>
          <li>
            <a class="img-a" href="##">
              <img class="img-size" src="../assets/images/hangyang.jpeg" alt>
            </a>
            <h3 class="h3-tit tx_over">
              <a href>海洋奇缘</a>
            </h3>
            <p class="score">
              9.
              <i>4</i>
            </p>
          </li>
          <li>
            <a class="img-a" href="##">
              <img class="img-size" src="../assets/images/tu1.jpeg" alt>
            </a>
            <h3 class="h3-tit tx_over">
              <a href>厨子戏子痞子</a>
            </h3>
            <p class="score">
              8.
              <i>9</i>
            </p>
          </li>
          <li>
            <a class="img-a" href="##">
              <img class="img-size" src="../assets/images/knan.jpeg" alt>
            </a>
            <h3 class="h3-tit tx_over">
              <a href>名侦探柯南：纯黑噩梦</a>
            </h3>
            <p class="score">
              8.
              <i>9</i>
            </p>
          </li>
          <li>
            <a class="img-a" href="##">
              <img class="img-size" src="../assets/images/hangyang.jpeg" alt>
            </a>
            <h3 class="h3-tit tx_over">
              <a href>海洋奇缘</a>
            </h3>
            <p class="score">
              9.
              <i>4</i>
            </p>
          </li>
          <li>
            <a class="img-a" href="##">
              <img class="img-size" src="../assets/images/tu1.jpeg" alt>
            </a>
            <h3 class="h3-tit tx_over">
              <a href>厨子戏子痞子</a>
            </h3>
            <p class="score">
              8.
              <i>9</i>
            </p>
          </li>
        </ul>
      </div>
    </div>
    <!--content结束-->
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from "./pubComponent/myHeader";
import MyFooter from "./pubComponent/footer";
export default {
  data() {
    return {
      movieDetail: {}
    };
  },
  components: {
    MyHeader,
    MyFooter
  },
  mounted() {
    console.log(1123, this.$route.params.movieId);
    this.$axios
      .get(`/api/movie_detail?movieId=${this.$route.params.movieId}`) //
      .then(res => {
        this.movieDetail = res.data.data.movieDetail
        console.log(579, this.movieDetail);
        
      });
  }
};
</script>
<style scoped>
/*电影详情 css S*/

.img-a {
  width: 145px;
  height: 106px;
}
.detail-banner {
  margin-top: 81px;
  width: 100%;
  min-width: 1200px;
  height: 376px;
  background: url(../assets/images/login-icon2.png) repeat-x;
}
.detail-banner .banner-detail-cont {
  margin: 0 auto;
  width: 1140px;
}
.detail-banner .banner-detail-cont .detail-l .detail-l-l {
  padding-top: 70px;
  width: 240px;
  height: 380px;
  background: url(../assets/images/bg-bottom.png) no-repeat center bottom;
}
.detail-banner .banner-detail-cont .detail-l .detail-l-l img {
  width: 232px;
  height: 322px;
  border: 4px solid #fff;
}
.detail-banner .banner-detail-cont .detail-l .detail-r-r {
  margin-left: 30px;
  padding-top: 100px;
  color: #fff;
}
.detail-banner .banner-detail-cont .detail-l .detail-r-r h2 {
  font-size: 26px;
  font-weight: bold;
}
.detail-banner .banner-detail-cont .detail-l .detail-r-r .language {
  font-size: 18px;
  line-height: 20px;
  margin-bottom: 13px;
}
.detail-banner .banner-detail-cont .detail-l .detail-r-r p {
  line-height: 30px;
}
.detail-banner .banner-detail-cont .detail-l .detail-r-r .situation a {
  display: inline-block;
  margin: 50px 10px 0 0;
  width: 120px;
  height: 36px;
  font-size: 14px;
  line-height: 36px;
  color: #fff;
  background: #756189;
}
.detail-banner .banner-detail-cont .detail-l .detail-r-r .situation a .heart,
.detail-banner .banner-detail-cont .detail-l .detail-r-r .situation a .star {
  display: inline-block;
  margin: 0 6px 0 34px;
  width: 16px;
  height: 16px;
  vertical-align: middle;
}
.detail-banner .banner-detail-cont .detail-l .detail-r-r .situation a .heart {
  background: url(../assets/images/heart.png) no-repeat;
}
.detail-banner .banner-detail-cont .detail-l .detail-r-r .situation a .star {
  background: url(../assets/images/star.png) no-repeat;
}
.detail-banner .banner-detail-cont .detail-r {
  margin-top: 155px;
  text-align: center;
}
.detail-banner .banner-detail-cont .detail-r ol li {
  float: left;
  position: relative;
  margin-left: 10px;
  width: 100px;
  height: 80px;
  border: 1px solid #59516d;
  background: #2e2648;
}
.detail-banner .banner-detail-cont .detail-r ol li .customer {
  display: block;
  position: absolute;
  top: -5px;
  left: 21px;
  width: 60px;
  height: 20px;
  font-size: 12px;
  line-height: 20px;
  color: #fff;
  background: #ef4238;
}
.detail-banner .banner-detail-cont .detail-r ol li .grade {
  display: block;
  padding-top: 18px;
  font-size: 18px;
  color: #ffb400;
  line-height: 30px;
}
.detail-banner .banner-detail-cont .detail-r ol li .population {
  font-size: 12px;
  color: #fff;
}
.detail-banner .banner-detail-cont .detail-r ol li .count {
  font-size: 18px;
  color: #fff;
  line-height: 85px;
}
.detail-banner .banner-detail-cont .detail-r .purchase {
  display: block;
  float: right;
  margin-top: 20px;
  width: 324px;
  height: 50px;
  background: #ef4238;
  color: #fff;
  font-size: 18px;
  line-height: 50px;
}
.detail-cont {
  margin: 0 auto;
  width: 1200px;
}
.detail-cont .jq-head {
  margin: 40px auto 28px;
  line-height: 21px;
}
.detail-cont .jq-head .mark {
  display: inline-block;
  float: left;
  margin-right: 5px;
  width: 4px;
  height: 18px;
  vertical-align: middle;
  background: #ef4238;
}

.about-ul {
  width: 373px;
  margin-left: -9px;
}
.about-ul li {
  float: left;
  margin: 9px;
  width: 106px;
}
.about-ul li .img-a {
  display: block;
  height: 145px;
  width: 106px;
}
.about-ul li .img-a .img-size {
  height: 145px;
  width: 106px;
  border: 1px solid #ccc;
}
.about-ul li {
  text-align: center;
}
.about-ul li .h3-tit a {
  color: #333;
}
.about-ul li .score {
  font-size: 20px;
  font-style: italic;
  color: #ffb400;
}
.about-ul li .score i {
  font-size: 15px;
  font-style: italic;
}
.detail-cont .jq-head h3 {
  float: left;
  font-size: 18px;
  color: #333;
}
.detail-cont .jq-head a {
  float: right;
  display: block;
  padding-right: 14px;
  font-size: 12px;
  color: #999;
  background: url(../assets/images/gray-arrow.png) no-repeat right center;
}
.detail-cont .jq-head a:hover {
  text-decoration: underline;
}
.detail-cont .jq-head .write {
  display: inline-block;
  padding: 0 10px;
  height: 30px;
  border-radius: 15px;
  -moz-border-radius: 15px;
  -webkit-border-radius: 15px;
  color: #ef4238;
  line-height: 30px;
  text-align: center;
  font-size: 14px;
  border: 1px solid #ef4238;
  background: #fff;
}
.detail-cont .jq-head .write:hover {
  text-decoration: none;
}
.detail-cont .xq-l {
  width: 730px;
}
.detail-cont .xq-l .tit-div {
  width: 730px;
  border-bottom: 1px solid #ccc;
}
.detail-cont .xq-l .tit-div .tit-ul li {
  float: left;
  padding-right: 30px;
  line-height: 35px;
  font-size: 18px;
}
.detail-cont .xq-l .tit-div .tit-ul li a {
  display: block;
  color: #333;
}
.detail-cont .xq-l .tit-div .tit-ul li .a-awards {
  color: #999;
}
.detail-cont .xq-l .tit-div .tit-ul li .a-current {
  color: #ef4238;
  border-bottom: 1px solid #ef4238;
}
.detail-cont .xq-l .jq p {
  line-height: 26px;
}
.detail-cont .xq-l .actors {
  color: #333;
  font-size: 15px;
}
.detail-cont .xq-l .actors .act-l h4 {
  padding-bottom: 18px;
}
.detail-cont .xq-l .actors .act-l img {
  width: 128px;
  height: 170px;
}
.detail-cont .xq-l .actors .act-l a {
  display: block;
  color: #333;
  text-align: center;
  line-height: 40px;
}
.detail-cont .xq-l .actors .act-r dt {
  margin: 0 0 18px 20px;
}
.detail-cont .xq-l .actors .act-r dd {
  float: left;
  margin-left: 20px;
  width: 128px;
}
.detail-cont .xq-l .actors .act-r dd img {
  width: 128px;
  height: 170px;
}
.detail-cont .xq-l .actors .act-r dd a,
.detail-cont .xq-l .actors .act-r dd span {
  display: block;
  text-align: center;
  color: #333;
}
.detail-cont .xq-l .actors .act-r dd a {
  margin-top: 8px;
}
.detail-cont .xq-l .actors .act-r dd span {
  font-size: 14px;
  color: #666;
}
.detail-cont .xq-l .pictures .tuji ul {
  margin-left: -3px;
  width: 735px;
}
.detail-cont .xq-l .pictures .tuji ul li {
  float: left;
  margin: 3px;
}
.detail-cont .xq-l .pictures .tuji ul li,
.detail-cont .xq-l .pictures .tuji ul li img {
  width: 126px;
  height: 126px;
}
.detail-cont .xq-l .pictures .tuji ul .tuji-b,
.detail-cont .xq-l .pictures .tuji ul .tuji-b img {
  width: 465px;
  height: 258px;
}
.detail-cont .xq-l .short-comment .discuss .discuss-info span,
.detail-cont .xq-l .short-comment .discuss .discuss-info span img {
  display: block;
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}
.detail-cont .xq-l .short-comment .discuss .discuss-info span i,
.detail-cont .xq-l .short-comment .discuss .discuss-info span img i {
  display: inline-block;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 20px;
  height: 20px;
  background: url(../assets/images/v3.png) no-repeat;
  z-index: 2;
}
.detail-cont .xq-l .short-comment .discuss .discuss-info span .v4,
.detail-cont .xq-l .short-comment .discuss .discuss-info span img .v4 {
  background: url(../assets/images/v4.png) no-repeat;
}
.detail-cont .xq-l .short-comment .discuss .discuss-detail {
  padding: 20px 0;
  width: 660px;
  border-bottom: 1px solid #ccc;
}
.detail-cont .xq-l .short-comment .discuss .discuss-detail .username {
  font-size: 16px;
  color: #333;
}
.detail-cont .xq-l .short-comment .discuss .discuss-detail .username i {
  display: inline-block;
  margin-left: 4px;
  width: 14px;
  height: 14px;
  line-height: 14px;
  font-size: 12px;
  color: #7cc6f9;
  border: 1px solid #7cc6f9;
  vertical-align: middle;
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
}
.detail-cont .xq-l .short-comment .discuss .discuss-detail .xji {
  line-height: 20px;
}
.detail-cont .xq-l .short-comment .discuss .discuss-detail .xji span {
  float: left;
  font-size: 16px;
  color: #ccc;
}
.detail-cont .xq-l .short-comment .discuss .discuss-detail .xji ul {
  float: left;
  margin-left: 7px;
}
.detail-cont .xq-l .short-comment .discuss .discuss-detail .xji ul li {
  width: 16px;
  float: left;
  font-size: 0;
  margin-right: 4px;
}
.detail-cont .xq-l .short-comment .discuss .discuss-detail .xji ul li i {
  display: inline-block;
  width: 8px;
  height: 16px;
  vertical-align: middle;
}
.detail-cont
  .xq-l
  .short-comment
  .discuss
  .discuss-detail
  .xji
  ul
  li
  .left-star {
  background: url(../assets/images/left-star.png) no-repeat;
}
.detail-cont
  .xq-l
  .short-comment
  .discuss
  .discuss-detail
  .xji
  ul
  li
  .left-gray-star {
  background: url(../assets/images/left--gray-star.png) no-repeat;
}
.detail-cont
  .xq-l
  .short-comment
  .discuss
  .discuss-detail
  .xji
  ul
  li
  .right-star {
  background: url(../assets/images/right-star.png) no-repeat;
}
.detail-cont
  .xq-l
  .short-comment
  .discuss
  .discuss-detail
  .xji
  ul
  li
  .right-gray-star {
  background: url(../assets/images/right-gray-star.png) no-repeat;
}
.detail-cont .xq-l .short-comment .discuss .discuss-detail .xji p {
  padding-bottom: 10px;
  line-height: 26px;
  font-size: 14px;
  color: #999;
}
.detail-cont .xq-l .short-comment .discuss .discuss-detail .xji p a {
  display: inline-block;
  margin-right: 9px;
  vertical-align: baseline;
  width: 16px;
  height: 16px;
  background: url(../assets/images/zan.png) no-repeat;
}
.detail-cont .xq-l .short-comment .discuss .discuss-detail .shu {
  padding: 10px 0;
}
.detail-cont .xq-r {
  width: 360px;
}
.detail-cont .xq-r .atop {
  margin-top: 0;
}
.detail-cont .xq-r .about ul li {
  margin-top: 16px;
}
.detail-cont .xq-r .about ul li .about-l {
  display: block;
}
.detail-cont .xq-r .about ul li .about-l,
.detail-cont .xq-r .about ul li .about-l img {
  width: 140px;
  height: 86px;
}
.detail-cont .xq-r .about ul li .about-r {
  padding: 7px 0 5px;
  width: 210px;
  height: 73px;
  font-size: 16px;
  color: #333;
  line-height: 20px;
}
.detail-cont .xq-r .about ul li .about-r .maoyan {
  margin-top: 10px;
  font-size: 14px;
  color: #ccc;
}
.detail-cont .xq-r .about ul li .about-r .maoyan i {
  display: inline-block;
  margin: 0 2px 0 5px;
  vertical-align: middle;
  height: 14px;
}
.detail-cont .xq-r .about ul li .about-r .maoyan .eyes1 {
  width: 18px;
  background: url(../assets/images/eyes1.png) no-repeat;
}
.detail-cont .xq-r .about ul li .about-r .maoyan .comment1 {
  width: 16px;
  background: url(../assets/images/comment1.png) no-repeat;
}
/*电影详情css E*/
</style>
