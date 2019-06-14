<template>
  <div>
    <div class="detail-banner clearfix">
      <div class="banner-detail-cont">
        <div class="detail-l fl clearfix">
          <div class="detail-l-l fl">
            <img src="../assets/images/mekong.jpeg" alt="mekong">
          </div>
          <div class="detail-r-r fr">
            <h2>湄公河行动</h2>
            <p class="language">Operation Mekong</p>
            <p>动作，剧情，犯罪</p>
            <p>中国大陆，中国香港/124分钟</p>
            <p>2066-02-30大陆上映</p>
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
              <i class="grade">9.3</i>
              <i class="population">(55.5万人评分)</i>
            </li>
            <li>
              <i class="customer">专业评分</i>
              <i class="grade">6.4</i>
              <i class="population">(55.5万人评分)</i>
            </li>
            <li>
              <i class="customer">累计票房</i>
              <i class="count">10.33亿</i>
            </li>
          </ol>
          <a class="purchase" href>立即购票</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    // this.$axios
    //   .get(
    //     "https://www.easy-mock.com/mock/5cb6fceb3ac8ab7a1d3e1926/maoyan/bannerList"
    //   )
    //   .then(response => {
    //     if (response.data.result == 200) {
    //       this.list = response.data.data.data;
    //       this.Bnner1 = response.data.data.data[0].url;
    //       console.log(756, this.list);
    //     }
    //     console.log(11, response);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  },
  methods: {
    // enter(index, url) {
    //     console.log(index)
    //   this.currentIndex = index;
    //   this.Bnner1 = url;
    // },
    // leave(index, url) {
    //   this.currentIndex = index;
    //   this.Bnner1 = url;
    // }
  }
};
</script>

<style>
/*电影 css S*/
.movies-nav {
  margin-top: 81px;
  width: 100%;
  height: 60px;
  background: #47464a;
}
.movies-nav .nav {
  position: relative;
  margin: 0 auto;
  width: 1120px;
}
.movies-nav .nav .nav-i {
  position: absolute;
  display: inline-block;
  width: 0;
  height: 9px;
  border: 9px solid transparent;
  border-bottom: 9px solid #fff;
  right: 408px;
  bottom: -1px;
}
.movies-nav .nav ul {
  margin: 0 auto;
  width: 435px;
}
.movies-nav .nav ul li {
  float: left;
}
.movies-nav .nav ul li a {
  display: inline-block;
  padding: 0 40px;
  font-size: 16px;
  line-height: 60px;
  color: #999;
}
.movies-nav .nav ul li:hover a {
  color: #fff;
}
.movies-nav .nav ul li .classics {
  color: #ef4243;
}
.movies-cont {
  margin: 0 auto;
  width: 1120px;
}
.movies-menu {
  margin: 0 auto;
  width: 1118px;
  border: 1px solid #ccc;
}
.movies-menu dl {
  margin: 0 20px;
  padding: 10px 0;
  font-size: 14px;
  border-bottom: 1px dotted #ccc;
}
.movies-menu dl dt {
  float: left;
  margin-right: 16px;
  line-height: 36px;
  color: #999;
}
.movies-menu dl .all {
  padding: 3px 8px;
  color: #fff;
  line-height: 27px;
  border-radius: 14px;
  -moz-border-radius: 14px;
  -webkit-border-radius: 14px;
  background: #ef4238;
}
.movies-menu dl dd {
  float: left;
  line-height: 33px;
}
.movies-menu dl dd a {
  padding: 0 15px;
  color: #333;
}
.movies-menu dl dd a:hover {
  color: #ef4238;
  text-decoration: underline;
}
.movies-menu .years-dl {
  border-bottom: none;
}
.single-radio {
  margin: 0 auto;
  width: 1120px;
  padding: 42px 0 10px;
}
.single-radio span {
  float: left;
  margin-right: 34px;
}
.single-radio span i {
  display: inline-block;
  margin-right: 6px;
  vertical-align: middle;
  width: 14px;
  height: 14px;
  border-radius: 14px;
  -moz-border-radius: 14px;
  -webkit-border-radius: 14px;
  border: 1px solid #ccc;
}
.single-radio span .click-css {
  display: inline-block;
  width: 6px;
  height: 6px;
  border: 5px solid #ef4238;
  border-radius: 14px;
  -moz-border-radius: 14px;
  -webkit-border-radius: 14px;
}
.single-radio p {
  float: right;
}
.single-radio p .play-i {
  display: inline-block;
  margin-right: 6px;
  width: 14px;
  height: 14px;
  vertical-align: middle;
  border: 1px solid #ccc;
}
.movie-ul {
  margin-left: -14px;
  width: 1140px;
}
.movie-ul li {
  margin: 14px;
  width: 162px;
}
.movie-ul li .img-a {
  display: block;
  width: 160px;
  height: 220px;
}
.movie-ul li .img-a .img-size {
  width: 160px;
  height: 220px;
  border: 1px solid #ccc;
}
.about-ul {
  width: 373px;
  margin-left: -9px;
}
.about-ul li {
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
.movie-ul li,
.about-ul li {
  float: left;
  position: relative;
}
.movie-ul li .d-max i,
.about-ul li .d-max i {
  position: absolute;
  top: 4px;
  left: -2px;
}
.movie-ul li .h3-tit,
.about-ul li .h3-tit {
  font-size: 15px;
  line-height: 41px;
  text-align: center;
}
.movie-ul li .h3-tit a,
.about-ul li .h3-tit a {
  color: #333;
}
.movie-ul li .score,
.about-ul li .score {
  text-align: center;
  font-size: 20px;
  font-style: italic;
  color: #ffb400;
}
.movie-ul li .score i,
.about-ul li .score i {
  font-size: 15px;
  font-style: italic;
}
.pages {
  margin: 5px auto 0;
  width: 445px;
}
.pages .page-ul {
  margin-left: 12px;
}
.pages .page-ul li {
  float: left;
  margin-right: 13px;
}
.pages .page-ul li a {
  display: block;
  padding: 8px 13px;
  font-size: 11px;
  color: #333;
  text-align: center;
  border: 1px solid #ccc;
}
.pages .page-ul li a:hover {
  color: #fff;
  border: 1px solid #ef4238;
  background: #ef4238;
}
/*电影 css E*/
/*电影详情 css S*/
.detail-banner {
  margin-top: 81px;
  width: 100%;
  min-width: 1200px;
  height: 376px;
  background: url(../assets/images/login-icon2.png) no-repeat;
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
  text-align: left;
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
</style>