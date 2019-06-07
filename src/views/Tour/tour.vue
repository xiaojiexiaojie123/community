<template>
  <div class="tour">
  	<div class="container-fluid city">
      <ul>
        <li>分类：</li>
        <template v-for="(item,index) in configOne">
        <li @click="getTourValue(item.typeId)">
          <a>{{item.typeName}}</a>
        </li>
        </template>
      </ul>
      
    </div>
    <div class="ranking">
      <ul>
        <li @click="getTourValue(4)">评论最多</li>
        <li @click="getTourValue(5)">最新发布</li>
      </ul>
    </div>
    <div class="con_wrap" v-for="(item,index) in tourList.pageData">
    <router-link :to="{ path: 'articleItem', query: { type: 'tour', Id: item.tourId }}">
      <div class="tour_box" v-bind:id="item.tourId">
        <div class="img">
          <img v-bind:src="item.tourPic" alt="">
        </div>
        <div class="con">
          <h4>{{item.tourTitle}}</h4>
          <p style="line-height: 1.5em"><strong>摘要：</strong>{{item.tourDigest}}</p>
        </div>
      </div>
    </router-link>
    </div>
  </div>
</template>

<script>
import { Message } from 'iview'
import { getConfig } from '@/api/api'
import { getTourAll } from '@/api/api'
export default {
  name: 'tour',
  data () {
    return {
      configOne: [],
      tourList: []
    }
  },
  mounted:function () {
    this.getConfig(1,1)
    this.getTourValue(0)

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
    
    //获取旅游数据
    async getTourValue(type){
      const data = {
          selectType: type,
        }
      const res = await getTourAll(data)
      if (res.code === 0) {
        console.log(res.data)
        this.tourList = res.data
      }
    },

  }
}
</script>

<style lang="stylus" scoped>
.city{
  background:rgb(255, 153, 51);
  //height: 115px;
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
  float: right;
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
  width: 50%;
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
</style>
