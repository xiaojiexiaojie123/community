<template>
  <div class="community">
  	<div class="container-fluid city">
      <ul>
        <li>分类：</li>
        <template v-for="(item,index) in configOne">
        <li @click="getCommunityValue(item.typeId)">
          <a>{{item.typeName}}</a>
        </li>
        </template>
      </ul>
      <ul>
        <li>类型：</li>
        <template v-for="(item,index) in configTwo">
        <li @click="getCommunityValue(item.typeId)">
          <a>{{item.typeName}}</a>
        </li>
        </template>
      </ul>
    </div>
    <div class="con_wrap" v-for="(item,index) in communityList.pageData">
      <div class="community_box">
        <div class="title">
          <h3>{{item.loveTitle}}</h3>
          <p>{{item.loveAddress}}</p>
        </div>
        <div class="date">
          <p>{{item.loveTime}}发布</p>
        </div>
        <div class="enroll">
          <h5>发起人：{{item.loveOwer}}</h5>
          <p></p>
        </div>
        <div class="difficulty">
          <h5>联系方式</h5>
          <p>{{item.lovePhone}}</p>
        </div>
        <div class="require">
          <h5>报名条件</h5>
          <p>{{item.loveContent}}</p>
        </div>
        <div class="img">
          <img v-bind:src="item.lovePic" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Message } from 'iview'
import { getConfig } from '@/api/api'
import { getCommunityAll } from '@/api/api'
export default {
  name: 'community',
  data () {
    return {
      configOne: [],
      configTwo: [],
      communityList: []
    }
  },
  mounted:function () {
    this.getConfigOne(1,4)
    this.getConfigTwo(2,4)
    this.getCommunityValue(0)
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
    async getCommunityValue(type){
      const data = {
          selectType: type,
          lovestatus: 1,
        }
      const res = await getCommunityAll(data)
      if (res.code === 0) {
        console.log(res.data)
        this.communityList = res.data
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
