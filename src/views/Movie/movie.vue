<template>
  <div class="movie">
  	<div class="container-fluid city">
      <ul>
        <li>分类：</li>
        <template v-for="(item,index) in configOne">
        <li @click="getMovieValue(item.typeId)">
          <a>{{item.typeName}}</a>
        </li>
        </template>
      </ul>
      <ul>
        <li>风格：</li>
        <template v-for="(item,index) in configTwo">
        <li @click="getMovieValue(item.typeId)">
          <a>{{item.typeName}}</a>
        </li>
        </template>
      </ul>
    </div>
    <div class="ranking">
      <ul>
        <li>评论最多</li>
        <li>最新发布</li>
      </ul>
    </div>
    <div class="con_wrap" v-for="(item,index) in movieList.pageData">
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
    </div>
  </div>
</template>

<script>
import { Message } from 'iview'
import { getConfig } from '@/api/api'
import { getMovieAll } from '@/api/api'
export default {
  name: 'movie',
  data () {
    return {
      configOne: [],
      configTwo: [],
      movieList: []
    }
  },
  mounted:function () {
    this.getConfigOne(1,3)
    this.getConfigTwo(2,3)
    this.getMovieValue(0)
  },
  methods: {
    // 获取列表数据
    async getConfigOne(level,type){
      const result = []
      const data = {
          level: level,
          typeOwer: type
        }
      const res = await getConfig(data)
      if (res.code === 0) {
        this.configOne =  res.data
      }
    },
    // 获取列表数据
    async getConfigTwo(level,type){
      const result = []
      const data = {
          level: level,
          typeOwer: type
        }
      const res = await getConfig(data)
      if (res.code === 0) {
        this.configTwo =  res.data
      }
    },
    //获取数据
    async getMovieValue(type){
      
      const res = await getMovieAll()
      if (res.code === 0) {
        console.log(res.data)
        this.movieList = res.data
      }
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
