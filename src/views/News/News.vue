<template>
  <div class="news">
  	<div class="container-fluid city">
      <ul>
        <template v-for="(item,index) in configOne">
        <li @click="getNewsValue(item.typeId)">
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
    <div class="con_wrap" v-for="(item,index) in newsList.pageData">
      <router-link :to="{ path: 'articleItem', query: { type: 'news', Id: item.newId }}">
      <div class="tour_box" v-bind:id="item.newId">
        <div class="img">
          <img v-bind:src="item.newPic" alt="">
        </div>
        <div class="con">
          <h4>{{item.newitle}}</h4>
          <p style="line-height: 1.5em"><strong>摘要：</strong>{{item.newDigest}}</p>
        </div>
      </div>
      </router-link>
    </div>
    
  </div>
</template>

<script>
import { Message } from 'iview'
import { getConfig } from '@/api/api'
import { getNewsAll } from '@/api/api'
export default {
  name: 'news',
  data () {
    return {
      configOne: [],
      newsList: []
    }
  },
  mounted:function () {
    this.getConfig(1,2)
    this.getNewsValue(0)
  },
  methods: {
    //获取列表数据
    async getConfig(level,type){
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
    // 获取数据
    async getNewsValue(type){
      const data = {
          selectType: type,
        }
      const res = await getNewsAll(data)
      if (res.code === 0) {
        console.log(res.data)
        this.newsList = res.data
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.city{
  background:rgb(255, 153, 51);
  height: 65px;
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
.tour_box{
  width: 100%;
  float:left;
  height: 120px;
  display: flex;
  overflow: hidden;
  box-sizing: border-box;
  padding: 0 10px;
  margin: 15px 0;
}
.tour_box .img{
  flex: 2;
  width: 100%;
}
.tour_box .img img{
  width: 100%
}
.tour_box .con{
  flex: 3;
  padding: 5px 10px;
}
.tour_box .con h4{
  font-size: 22px;
  font-weight: 700;
  margin: 5px 0;
}
.tour_box .con h4 a{
  color: rgb(41, 32, 32);
}
</style>
