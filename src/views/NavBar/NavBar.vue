<template>
  <div class="navBar">
    <div class="logo">
      <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2366719972,4016445873&fm=200&gp=0.jpg" alt="">
    </div>
    <ul>
      <router-link tag="li" to="/layout/index">首页</router-link>
      <router-link tag="li" to="/layout/tour">旅游</router-link>
      <router-link tag="li" to="/layout/news">新闻</router-link>
      <router-link tag="li" to="/layout/movie">观影视频</router-link>
      <router-link tag="li" to="/layout/position">附近定位</router-link>
      <router-link tag="li" to="/layout/community">爱心社区</router-link>
      <router-link tag="li" to="/layout/activity">活动发布</router-link>
      <li v-if="!isLogin">
        <router-link to="/login">登录</router-link>
        丨
        <router-link to="/register">注册</router-link>
      </li>
      <router-link tag="li" v-if="isLogin">{{userName}}</router-link>
      <router-link tag="li" v-if="isLogin" to="/layout/addactivity">
        <button class="btn">发布活动</button>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'navBar',
  data () {
    return {
      isLogin: false,
      userName: ''
    }
  },
  mounted:function () {
    if(this.$cookie.get('userMessage')){
      this.isLogin = true
    }
    else{
      this.isLogin = false
    }
  },
  methods: {
    
  },
}
</script>

<style lang="stylus" scoped>
.navBar
  background-color #f8f8f8
  border 1px solid #e7e7e7
  height 50px
  padding 0 15px 0 15px
  margin-bottom 2px
  display flex
  justify-content space-between
  align-items center
  border-radius 4px
  .logo
    width 40px
    height 40px
    img
      width 100%
      height 100%
  ul
    padding 0
    margin 0
    height 50px
    display flex
    justify-content center
    align-items center
    li
      padding 15px
      cursor pointer
      &:hover
        color #ccc
      button
        background-color #f0ad4e
        border-color #eea236
        color #fff
        &:hover
          background-color: #ec971f;
          border-color: #d58512;
</style>
