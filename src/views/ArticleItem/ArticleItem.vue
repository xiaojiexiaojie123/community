<template>
  <div class="article">
    <div class="container-fluid city">
      
    </div>
    <div class="ranking">
      
    </div>
    <div class="con_wrap">
      <h3 class="text-center">{{title}}</h3>
      <p>{{Mainbody}}</p>
      <div class="img">
        <img src="image/3.jpg" alt="">
      </div>
    </div>
    <hr />
    <div class="con_wrap">
      <h4><b>热门评论</b></h4>
      <p></p>
      <div class="">
        <span>用户名</span>
        <span>评论信息</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Message } from 'iview'
import { getTourAll } from '@/api/api'
import { getNewsAll } from '@/api/api'
export default {
  name: 'articleItem',
  data () {
    return {
      articleList: [],
      title: '',
      Mainbody: ''
    }
  },
  mounted:function () {
  // 获取路由
    if(this.$route.query.type=='tour'){
      this.getTourArticle()
    }
    else{
      this.getNewsValue()
    }
    
  },
  methods: {
    // 获取数据
    async getTourArticle () {
      const data = {
          tourId: this.$route.query.Id,
        }
      const res = await getTourAll(data)
      if (res.code === 0) {
        console.log(res.data)
        this.articleList = res.data
        this.title = res.data.pageData[0].tourTitle
        this.Mainbody = res.data.pageData[0].tourMainBody
      }
    },

    // 获取数据
    async getNewsValue () {
      const data = {
          newId: this.$route.query.Id,
        }
      const res = await getNewsAll(data)
      if (res.code === 0) {
        console.log(res.data)
        this.articleList = res.data
        this.title = res.data.pageData[0].newTitle
        this.Mainbody = res.data.pageData[0].newMainBody
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
.con_wrap h3{
  margin: 10px 0;
}
.con_wrap p{
  text-indent: 2em;
  line-height: 1.5em;
  font-size: 20px;
}
.con_wrap .img{
  width: 100%;
  text-align: center;
}
.con_wrap img{
  width: 600px;
}
</style>
