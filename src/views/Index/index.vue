<template>

  <div class="index">
    <!-- 轮播 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="./image/1.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="./image/2.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="./image/3.jpg" alt="">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>

      <!-- 内容 -->
      <!-- 精品活动 -->
      <div class="content">
        <h4 class="text-center">精品活动</h4>
        <p class="text-center" style="line-height: 14px">交友学习两不误</p>
        <div class="activity">
          <div class="row activity_box"  v-for="(item,index) in activityList.pageData">
            <h3><b>活动名称：</b>{{item.activityTitle}}</h3><br />
            <p class="col-md-6"><strong>活动地点：</strong>{{item.activityAddress}}</p>
            <p class="col-md-6"><strong>活动时间：</strong>{{item.activityTime}}</p>
            <p class="col-md-6"><strong>活动发起人：</strong>{{item.activityOwer}}</p>
            <p class="col-md-6"><strong>联系方式：</strong>{{item.activityPhone}}</p>
            <div class="statue">活动中</div>
          </div>
        </div>
      </div>

      <!-- 热门视频 -->
      <div class="content">
        <h4 class="text-center">热门视频</h4>
        <p class="text-center" style="line-height: 14px">生活在于乐趣</p>
<!--        <div class="category">-->
<!--          &lt;!&ndash;-->
<!--          <ul>-->
<!--            <li><a href="#">舞蹈</a></li>-->
<!--            <li><a href="#">棋艺</a></li>-->
<!--            <li><a href="#">绘画</a></li>-->
<!--            <li><a href="#">混杂</a></li>-->
<!--          </ul>-->
<!--          &ndash;&gt;-->
<!--        </div>-->
        <div class="audio con_wrap">
        <template v-for="(item,index) in movieList.pageData">
          <div class="row audio_box">
            <div class="box">
              <img src="image/2.jpg" alt="">
            </div>
            <video class="img">
              <source v-bind:src="item.url" type="video/mp4">
              您的浏览器不支持 HTML5 video 标签。
            </video>
            <p class="text-right" style="margin-right: 80px">
              <span>{{item.videoTitle}}</span>
              <span style="margin-left: 10px">发布人：{{item.videoOwer}}</span>
            </p>
            <p class="text-right">
              <span style="margin-left: 10px">评论数：{{item.commentsNum}}</span>
            </p>
          </div>
        </template>
        </div>
      </div>


      <!-- 悦生活 -->
      <div class="content">
        <h4 class="text-center">悦生活</h4>
        <p class="text-center" style="line-height: 14px">生活越美好</p>
        <div class="life">
          <div class="row life_box">
            <div class="left">
              <h3 class="text-center" style="color:#fff">此时此刻，非你莫属</h3>
              <div class="img">
                <img src="image/2.jpg" alt="">
              </div>
              <div class="news">
                <h3>{{newsList.newitle}}</h3>
                <p><strong>摘要：</strong>{{newsList.newDigest}}</p>
              </div>
              <router-link :to="{ path: 'articleItem', query: { type: 'news', Id: newsList.newId }}">
              more>>
              </router-link>
            </div>
            <div class="right">
<!--              <div class="news">-->
<!--                <div class="img">-->
<!--                  <img v-bind:src="newsList.newPic" alt="">-->
<!--                </div>-->
<!--                <div class="con">-->
<!--                  <h3>{{tourList.pageData[0].tourTitle}}</h3>-->
<!--                  <p><strong>{{tourList.pageData[0].tourDigest}}</strong></p>-->
<!--                </div>-->
<!--                <router-link :to="{ path: 'articleItem', query: { type: 'tour', Id: tourList.pageData[0].tourId }}">-->
<!--              more>>-->
<!--              </router-link>-->
<!--              </div>-->
              <div class="news" v-for="(item, index) in tourList.pageData" v-if="index < 2">
                  <div class="img">
                    <img v-bind:src="item.tourPic" alt="">
                  </div>
                  <div class="con">
                    <h3>{{item.tourTitle}}</h3>
                    <p><strong>{{item.tourDigest}}</strong></p>
                  </div>
                  <router-link :to="{ path: 'articleItem', query: { type: 'tour', Id: item.tourId }}">
                  more>>
                  </router-link>
                </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 合作伙伴 -->
      <div class="content">
        <h4 class="text-center">合作伙伴</h4>
        <p class="text-center" style="line-height: 14px">携手前行，共创未来</p>
        <div class="partner">
          <div class="row partner_box">
            <div class="img">
              <img src="image/2.jpg" alt="">
            </div>
            <p class="text-center">自愿者团体名称</p>
          </div>
          <div class="row partner_box">
            <div class="img">
              <img src="image/2.jpg" alt="">
            </div>
            <p class="text-center">自愿者团体名称</p>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import { getActivityAll } from '@/api/api'
import { getMovieAll } from '@/api/api'
import { getNewsAll } from '@/api/api'
import { getTourAll } from '@/api/api'
export default {
  name: 'index',
  data () {
    return {
      activityList: {},
      movieList: {},
      newsList: [],
      tourList: {}
    }
  },
  mounted () {
    // this.getActivityValue(0)
    // this.getMovieValue(0)
    this.getNewsValue(0)
    this.getTourValue(0)
    this.swiperInit()
  },
  methods: {
    swiperInit () {
      this.$nextTick(function () {
        new Swiper ('.swiper-container', {
          // autoplay: true,
          // loop: true,
          // 如果需要分页器
          pagination: '.swiper-pagination',
          autoplay: true/*每隔3秒自动播放*/
        })
      })
    },
    // 获取活动数据
    async getActivityValue(type){
      const data = {
          // selectType: type,
        }
      const res = await getActivityAll(data)
      if (res.code === 0) {
        console.log(res.data)
        this.activityList = res.data
      }
    },
    //获取视频数据
    async getMovieValue(type){
      const res = await getMovieAll()
      if (res.code === 0) {
        console.log(res.data)
        this.movieList = res.data
      }
    },
    // 获取新闻数据
    async getNewsValue(type){
      const data = {
          selectType: type,
        }
      const res = await getNewsAll(data)
      if (res.code === 0) {
        console.log(res.data)
        this.newsList = res.data.pageData[0]
      }
    },
    //获取旅游数据
    async getTourValue(type){
      const data = {
          selectType: type,
        }
      const res = await getTourAll(data)
      if (res.code === 0) {
        console.log(res.data)
        this.tourList = res.data
        console.log(this.tourList, 'list')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "./../../../node_modules/swiper/dist/css/swiper.css"

.wrap, .mynav{
  min-width: 1024px;
}
.swiper-container {
  width: 100%;
  height: auto;
}
.swiper-container img {
  width: 100%;
}
.content{
  margin-bottom: 20px;
}
.life{
  margin-top: 10px;
}
.activity::after{
  display: block;
  content: "";
  clear: both;
}
.activity_box{
  width: 31%;
  float: left;
  box-sizing: border-box;
  border: 1px solid #ccc;
  margin: 10px;
  padding: 10px;
  box-shadow: 3px 3px 1px rgb(182, 160, 160);
  position: relative;
  border-radius: 3px;
}
.activity_box .statue {
  position: absolute;
  width: 60px;
  height: 30px;
  line-height: 30px;
  top: 0;
  right: 0;
  background: #f60;
  border-radius: 5px;
  text-align: center;
  color: #fff;
}
.community_box {
  width: 23%;
  box-sizing: border-box;
  border: 1px solid #ccc;
  margin: 35px 10px 10px 10px;
  padding: 35px 10px 10px 10px;
  float: left;
  position: relative;
}
.community_box .img{
  width: 70px;
  height: 70px;
  position: absolute;
  top: -35px;
  left: 50%;
  margin-left: -35px;
  border-radius: 50%;
  overflow: hidden;
}
.community_box .img img{
  width: 100%;
  height: 100%;
}
.category{
  height: 30px;
}
.category ul{
  float: right;
  margin-bottom: 0;
}
.category ul li{
  list-style: none;
  padding: 4px 10px;
  float: left;
}
.audio_box{
  width: 31%;
  height: 300px;
  float: left;
  box-sizing: border-box;
  border: 1px solid #ccc;
  margin: 10px;
  padding: 10px;
  position: relative;
  border-radius: 3px;
}
.audio_box .box{
  width: 100%;
  height: 230px;
}
.audio_box .box img{
  width: 100%;
}
.audio_box .img{
  position: relative;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  position: absolute;
  bottom: 45px;
  left: 15%;
  overflow: hidden;
  /* z-index: 99; */
}
.audio_box .img img{
  width: 100%;
  height: 100%;
}
.audio::after{
  display: block;
  content: "";
  clear: both;
}
.life_box{
  background: #ccc;
  border-radius: 6px;
}
.life_box .left{
  width: 35%;
  height: 400px;
  border-right: 1px solid rgb(32, 28, 28);
  float: left;
  padding-left: 40px;
  position: relative;
}
.life_box .left .img{
  margin: 50px 0;
}
.life_box .left .img img{
  width: 300px;
  height: 80px
}
.life_box .left .more{
  position: absolute;
  bottom: 30px;
  right: 30px;
  cursor: pointer
}
.life_box .left .more:hover{
  color: red;
}
.life_box .right{
  float: right;
  width: 65%
}
.life_box .right .news{
  height: 200px;
  display: flex;
  position: relative;
  flex-direction: row;
}
.life_box .right .news:first-child{
  border-bottom: 1px solid rgb(32, 28, 28);
}
.life_box .right .news .img{
  width: 300px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center
}
.life_box .right .news .img img{
  width: 200px;
  height: 150px
}
.life_box .right .news .more{
  position: absolute;
  bottom: 25px;
  right: 35px;
  cursor: pointer
}
.life_box .right .news .more:hover{
  color: red
}
.partner_box{
  width: 23%;
  height: 200px;
  float: left;
  box-sizing: border-box;
  border: 1px solid #ccc;
  margin: 10px;
  padding: 10px;
  border-radius: 3px;
}
.partner_box .img{
  width: 100%;
}
.partner_box .img img{
  width: 100%;
  height: 150px
}
.partner_box p{
  line-height: 40px
}
.partner::after{
  display: block;
  content: "";
  clear: both;
}
.footer{
  background: #4d4d4d
}
.footer .top{
  display: flex;
  border-bottom: 1px solid #fff
}
.footer .top .box{
  flex: 1;
  display: flex;
  align-items: center
}
.footer .top .box .img{
  width: 200px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center
}
.footer .top .box .img img{
  width: 80px;
  height: 80px;
  border-radius: 50%
}
.footer .bottom{
  display: flex;
  margin-top: 10px
}
.footer .bottom ul{
  flex: 1
}
.footer .bottom ul li{
  list-style: none;
  text-align: center;
  color: #ccc
}
.footer .bottom ul li:first-child{
  color: #fff
}
.footer .bottom .phone{
  flex: 2;
  padding-left: 30px
}
</style>
