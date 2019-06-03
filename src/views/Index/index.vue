<template>
  <div class="index">
  	      <!-- 轮播 -->
      <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators">
          <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
          <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        </ol>
      
        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
          <div class="item active">
            <img src="image/1.jpg" alt="..." width="100%">
            <div class="carousel-caption">
              ...
            </div>
          </div>
          <div class="item">
            <img src="image/2.jpg" alt="..." width="100%">
            <div class="carousel-caption">
              ...
            </div>
          </div>
          <div class="item">
              <img src="image/3.jpg" alt="..." width="100%">
              <!-- <div class="carousel-caption">
                ...
              </div> -->
            </div>
        </div>
      
        <!-- Controls -->
        <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <!-- 内容 -->
      <!-- 精品活动 -->
      <div class="content">
        <h4 class="text-center">精品活动</h4>
        <p class="text-center" style="line-height: 14px">交友学习两不误</p>
        <div class="activity">
          <div class="row activity_box">
            <h4>活动名称</h4>
            <p class="col-md-6">活动内容</p>
            <p class="col-md-6">基本条件</p>
            <p class="col-md-6">2017-01-01</p>
            <p class="col-md-6">参加人数</p>
            <div class="statue">活动中</div>
          </div>
          <div class="row activity_box">
            <h4>活动名称</h4>
            <p class="col-md-6">活动内容</p>
            <p class="col-md-6">基本条件</p>
            <p class="col-md-6">2017-01-01</p>
            <p class="col-md-6">参加人数</p>
            <div class="statue">活动中</div>
          </div>
          <div class="row activity_box">
            <h4>活动名称</h4>
            <p class="col-md-6">活动内容</p>
            <p class="col-md-6">基本条件</p>
            <p class="col-md-6">2017-01-01</p>
            <p class="col-md-6">参加人数</p>
            <div class="statue">活动中</div>
          </div>
          <div class="row activity_box">
            <h4>活动名称</h4>
            <p class="col-md-6">活动内容</p>
            <p class="col-md-6">基本条件</p>
            <p class="col-md-6">2017-01-01</p>
            <p class="col-md-6">参加人数</p>
            <div class="statue">活动中</div>
          </div>
          <div class="row activity_box">
            <h4>活动名称</h4>
            <p class="col-md-6">活动内容</p>
            <p class="col-md-6">基本条件</p>
            <p class="col-md-6">2017-01-01</p>
            <p class="col-md-6">参加人数</p>
            <div class="statue">活动中</div>
          </div>
        </div>
      </div>
      <!-- 社区交流圈 -->
      <div class="content">
        <h4 class="text-center">社区交流圈</h4>
        <p class="text-center" style="line-height: 14px">当你需要，我在你身边</p>
        <div class="activity">
          <div class="row community_box">
            <h4 class="text-center">社区名称</h4>
            <p class="text-center">负责人：XXX</p>
            <p class="text-center">线下活跃度：50%</p>
            <p class="text-center">总人数</p>
            <p class="text-center">参加人数</p>
            <div class="img">
              <img src="image/2.jpg" alt="">
            </div>
          </div>
          <div class="row community_box">
            <h4 class="text-center">社区名称</h4>
            <p class="text-center">负责人：XXX</p>
            <p class="text-center">线下活跃度：50%</p>
            <p class="text-center">总人数</p>
            <p class="text-center">参加人数</p>
            <div class="img">
              <img src="image/2.jpg" alt="">
            </div>
          </div>
          <div class="row community_box">
            <h4 class="text-center">社区名称</h4>
            <p class="text-center">负责人：XXX</p>
            <p class="text-center">线下活跃度：50%</p>
            <p class="text-center">总人数</p>
            <p class="text-center">参加人数</p>
            <div class="img">
              <img src="image/2.jpg" alt="">
            </div>
          </div>
          <div class="row community_box">
            <h4 class="text-center">社区名称</h4>
            <p class="text-center">负责人：XXX</p>
            <p class="text-center">线下活跃度：50%</p>
            <p class="text-center">总人数</p>
            <p class="text-center">参加人数</p>
            <div class="img">
              <img src="image/2.jpg" alt="">
            </div>
          </div>
          <div class="row community_box">
            <h4 class="text-center">社区名称</h4>
            <p class="text-center">负责人：XXX</p>
            <p class="text-center">线下活跃度：50%</p>
            <p class="text-center">总人数</p>
            <p class="text-center">参加人数</p>
            <div class="img">
              <img src="image/2.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
      <!-- 热门视频 -->
      <div class="content">
        <h4 class="text-center">热门视频</h4>
        <p class="text-center" style="line-height: 14px">生活在于乐趣</p>
        <div class="category">
          <ul>
            <li><a href="#">舞蹈</a></li>
            <li><a href="#">棋艺</a></li>
            <li><a href="#">绘画</a></li>
            <li><a href="#">混杂</a></li>
          </ul>
        </div>
        <div class="audio">
          <div class="row audio_box">
            <div class="box">
              <img src="image/2.jpg" alt="">
            </div>
            <div class="img">
              <img src="image/2.jpg" alt="">
            </div>
            <p class="text-right" style="margin-right: 80px">
              <span>刘云</span>
              <span style="margin-left: 10px">5天前</span>
            </p>
            <p class="text-right">
              <span>赞66</span>
              <span style="margin-left: 10px">评论99+</span>
            </p>
          </div>
          <div class="row audio_box">
            <div class="box">
              <img src="image/2.jpg" alt="">
            </div>
            <div class="img">
              <img src="image/2.jpg" alt="">
            </div>
            <p class="text-right" style="margin-right: 80px">
              <span>刘云</span>
              <span style="margin-left: 10px">5天前</span>
            </p>
            <p class="text-right">
              <span>赞66</span>
              <span style="margin-left: 10px">评论99+</span>
            </p>
          </div>
          <div class="row audio_box">
            <div class="box">
              <img src="image/2.jpg" alt="">
            </div>
            <div class="img">
              <img src="image/2.jpg" alt="">
            </div>
            <p class="text-right" style="margin-right: 80px">
              <span>刘云</span>
              <span style="margin-left: 10px">5天前</span>
            </p>
            <p class="text-right">
              <span>赞66</span>
              <span style="margin-left: 10px">评论99+</span>
            </p>
          </div>
          <div class="row audio_box">
            <div class="box">
              <img src="image/2.jpg" alt="">
            </div>
            <div class="img">
              <img src="image/2.jpg" alt="">
            </div>
            <p class="text-right" style="margin-right: 80px">
              <span>刘云</span>
              <span style="margin-left: 10px">5天前</span>
            </p>
            <p class="text-right">
              <span>赞66</span>
              <span style="margin-left: 10px">评论99+</span>
            </p>
          </div>
          <div class="row audio_box">
            <div class="box">
              <img src="image/2.jpg" alt="">
            </div>
            <div class="img">
              <img src="image/2.jpg" alt="">
            </div>
            <p class="text-right" style="margin-right: 80px">
              <span>刘云</span>
              <span style="margin-left: 10px">5天前</span>
            </p>
            <p class="text-right">
              <span>赞66</span>
              <span style="margin-left: 10px">评论99+</span>
            </p>
          </div>
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
                <h3>宿舍欠费</h3>
                <p><strong>摘要：</strong>宿舍欠费啦</p>
              </div>
              <div class="more">more>></div>
            </div>
            <div class="right">
              <div class="news">
                <div class="img">
                  <img src="image/3.jpg" alt="">
                </div>
                <div class="con">
                  <h3>旅游</h3>
                  <p><strong>摘要</strong></p>
                </div>
                <div class="more">more>></div>
              </div>
              <div class="news">
                  <div class="img">
                    <img src="image/3.jpg" alt="">
                  </div>
                  <div class="con">
                    <h3>旅游</h3>
                    <p><strong>摘要</strong></p>
                  </div>
                  <div class="more">more>></div>
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
export default {
  name: 'index',
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrap, .mynav{
  min-width: 1024px;
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
