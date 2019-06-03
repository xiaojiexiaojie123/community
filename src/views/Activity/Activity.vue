<template>
  <div class="activity">
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
    <div class="activity">
      <div class="row activity_box">
        <h4>活动名称</h4>
        <p class="col-md-6">活动内容</p>
        <p class="col-md-6">基本条件</p>
        <p class="col-md-6">2017-01-01</p>
        <p class="col-md-6">活动地点</p>
        <div class="statue">活动中</div>
      </div>
      <div class="row activity_box">
        <h4>活动名称</h4>
        <p class="col-md-6">活动内容</p>
        <p class="col-md-6">基本条件</p>
        <p class="col-md-6">2017-01-01</p>
        <p class="col-md-6">活动地点</p>
        <div class="statue">活动中</div>
      </div>
      <div class="row activity_box">
        <h4>活动名称</h4>
        <p class="col-md-6">活动内容</p>
        <p class="col-md-6">基本条件</p>
        <p class="col-md-6">2017-01-01</p>
        <p class="col-md-6">活动地点</p>
        <div class="statue">活动中</div>
      </div>
      <div class="row activity_box">
        <h4>活动名称</h4>
        <p class="col-md-6">活动内容</p>
        <p class="col-md-6">基本条件</p>
        <p class="col-md-6">2017-01-01</p>
        <p class="col-md-6">活动地点</p>
        <div class="statue">活动中</div>
      </div>
      <div class="row activity_box">
        <h4>活动名称</h4>
        <p class="col-md-6">活动内容</p>
        <p class="col-md-6">基本条件</p>
        <p class="col-md-6">2017-01-01</p>
        <p class="col-md-6">活动地点</p>
        <div class="statue">活动中</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'activity',
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
html, body{
  padding: 0;
  margin: 0;
}
ul{
  list-style: none;
}
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
</style>
