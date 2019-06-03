<template>
  <div class="movie">
  	<div class="container-fluid city">
      <ul>
        <li>分类：</li>
        <li>
          <a href="#">全部</a>
        </li>
        <li>
          <a href="#">舞蹈</a>
        </li>
        <li>
          <a href="#">绘画</a>
        </li>
        <li>
          <a href="#">棋艺</a>
        </li>
      </ul>
      <ul>
        <li>风格：</li>
        <li>
          <a href="#">全部</a>
        </li>
        <li>
          <a href="#">中国风</a>
        </li>
        <li>
          <a href="#">慢节奏</a>
        </li>
        <li>
          <a href="#">快节奏</a>
        </li>
        <li>
          <a href="#">混搭</a>
        </li>
      </ul>
    </div>
    <div class="ranking">
      <ul>
        <li>点赞最多</li>
        <li>评论最多</li>
        <li>最新发布</li>
      </ul>
    </div>
    <div class="con_wrap">
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
</template>

<script>
export default {
  name: 'movie',
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
.city{
  background:rgb(255, 153, 51);
  height: 115px;
  padding-top: 10px;
  border-radius: 5px
}
.city ul{
  border-bottom: 1px solid #fff;
  height: 40px;
  margin: 0 38px
}
.city ul li{
  float: left;
  line-height: 40px;
  padding: 0 10px;
  color: #fff
}
.ranking{
  height: 40px
}
.ranking ul{
  height: 40px;
  display: flex;
  align-items: center
}
.ranking ul li{
  float: left;
  padding: 4px 10px;
  border: 1px solid #ccc;
  margin: 0 10px;
  border-radius: 5px;
  cursor: pointer;
}
.ranking ul li:hover{
  color: #f40;
  border: 1px solid #f40;
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
</style>
