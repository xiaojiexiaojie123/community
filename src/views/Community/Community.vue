<template>
  <div class="community">
  	<div class="container-fluid city">
      <ul>
        <li>分类：</li>
       <li>
          <a href="#">全部</a>
        </li>
        <li>
          <a href="#">广州</a>
        </li>
        <li>
          <a href="#">深圳</a>
        </li>
        <li>
          <a href="#">东莞</a>
        </li>
      </ul>
      <ul>
        <li>类型：</li>
        <li>
          <a href="#">全部</a>
        </li>
        <li>
          <a href="#">义工服务</a>
        </li>
        <li>
          <a href="#">社区互助</a>
        </li>
      </ul>
    </div>
    <div class="con_wrap">
      <div class="community_box">
        <div class="title">
          <h3>义工服务</h3>
          <p>广州市/天河区</p>
        </div>
        <div class="date">
          <p>2018-02-28发布</p>
        </div>
        <div class="enroll">
          <h5>发起人：黄晓杰</h5>
          <p></p>
        </div>
        <div class="difficulty">
          <h5>联系方式</h5>
          <p>123456789101</p>
        </div>
        <div class="require">
          <h5>报名条件</h5>
          <p>年龄不限，难度不限</p>
        </div>
        <div class="img">
          <img src="image/3.jpg" alt="">
        </div>
      </div>
      <div class="community_box">
        <div class="title">
          <h3>社区互助</h3>
          <p>广州市/天河区</p>
        </div>
        <div class="date">
          <p>2018-02-28发布</p>
        </div>
        <div class="enroll">
          <h5>发起人：黄晓杰</h5>
          <p></p>
        </div>
        <div class="difficulty">
          <h5>联系方式</h5>
          <p>123456789101</p>
        </div>
        <div class="require">
          <h5>报名条件</h5>
          <p>年龄不限，难度不限</p>
        </div>
        <div class="img">
          <img src="image/3.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'community',
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
.con_wrap{
  margin-top: 20px;
}
.community_box{
  display: flex;
  align-items: center;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  margin: 10px 0;
}
.title, .date, .enroll, .difficulty, .img{
  flex: 1
}
.require{
  flex: 2;
  text-align: center
}
.img{
  width: 100px;
  height: 80px;
  line-height: 80px;
}
.img img{
  width: 80%;
  height: 80%
}
p{
  line-height: 2em;
}
h3, h5{
  font-weight: 700
}
</style>
