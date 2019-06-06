<template>
  <div class="activity">
  	<div class="container-fluid city">
      <ul>
        <li>分类：</li>
        <template v-for="(item,index) in configOne">
        <li @click="getActivityValue(item.typeId)">
          <a>{{item.typeName}}</a>
        </li>
        </template>
      </ul>
      <ul>
        <li>风格：</li>
        <template v-for="(item,index) in configTwo">
        <li @click="getActivityValue(item.typeId)">
          <a>{{item.typeName}}</a>
        </li>
        </template>
      </ul>
    </div>
    <div class="activity" v-for="(item,index) in acitvityList.pageData">
      <div class="row activity_box">
        <h3><b>活动名称：</b>{{item.activityTitle}}</h3><br />
        <p class="col-md-6"><strong>活动地点：</strong>{{item.activityAddress}}</p>
        <p class="col-md-6"><strong>活动时间：</strong>{{item.activityTime}}</p>
        <p class="col-md-6"><strong>活动发起人：</strong>{{item.activityOwer}}</p>
        <p class="col-md-6"><strong>联系方式：</strong>{{item.activityPhone}}</p>
        <div class="statue">活动中</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Message } from 'iview'
import { getConfig } from '@/api/api'
import { getActivityAll } from '@/api/api'
export default {
  name: 'activity',
  data () {
    return {
      configOne: [],
      configTwo: [],
      acitvityList: []
    }
  },
  mounted:function () {
    this.getConfigOne(1,5)
    this.getConfigTwo(2,5)
    this.getActivityValue(0)
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
    // 获取数据
    async getActivityValue(type){
      const data = {
          // selectType: type,
        }
      const res = await getActivityAll(data)
      if (res.code === 0) {
        console.log(res.data)
        this.acitvityList = res.data
      }
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
