<template>
  <div class="wrap">
    <div class="login">
      <div class="left">
        <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2190681173,3756786443&fm=26&gp=0.jpg" alt="">
      </div>
      <div class="right">
        <form>
          <div class="top">
            登陆
          </div>
          <div class="username box">
            <label for="username">用户名:</label>
            <div class="username-inner">
              <input type="text" id="username" name="username" @blur="ValidateUsername" v-model="username">
              <span v-if="validateUsername" class="validate">用户名不嫩为空</span>
            </div>
          </div>
          <div class="password box">
            <label for="password">密 &nbsp;&nbsp;&nbsp;码:</label>
            <div class="username-inner">
              <input type="password" id="password" name="password" @blur="ValidatePassword" v-model="password">
              <span v-if="validatePassword" class="validate">长度6-16，数字和英文组合</span>
            </div>
          </div>
          <div class="btn-foot text-center">
            <button @click="login" class="btn btn-primary" type="button" style="margin-right: 35px">登录</button>
            <router-link tag="button" to="/losePsw" class="btn btn-default" style="border: 1px solid #ccc">忘记密码</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/api'
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: '',
      validateUsername: false,
      validatePassword: false
    }
  },
  methods: {
    // 用户名验证
    ValidateUsername () {
      if (this.username === '') {
        this.validateUsername = true
        return false
      } else {
        this.validateUsername = false
        return true
      }
    },
    // 密码验证
    ValidatePassword () {
      if (this.password === '' || this.password.length < 6 || this.password.length > 16 || (!/^(?=.*[a-zA-Z]+)(?=.*[0-9]+)[a-zA-Z0-9]+$/.test(this.password))) {
        this.validatePassword = true
        return false
      } else {
        this.validatePassword = false
        return true
      }
    },
    // 登陆
    async login () {
      if (this.ValidateUsername() && this.ValidatePassword) {
        const data = {
          userName: this.username,
          userPassword: this.password
        }
        // this.$store.dispatch('login', data)
        const res = await login(data)
        // console.log(res, 'res')
        if (res.code === 0) {
          localStorage.setItem('userinfo', JSON.stringify(res.data))
          this.$router.replace('/layout/index')
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrap{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrap .login{
  width: 600px;
  height: 250px;
  background-color: #fff;
  display: flex;
  padding: 20px;
  border-radius: 8px;
}
.wrap .login .left{
  border-right: 1px solid #ccc;
  flex: 1;
  padding: 10px;
}
.wrap .login .left img{
  width: 100%;
  height: 100%;
  border-radius: 6px;
}
.wrap .login .right{
  /*border: 1px solid red;*/
  flex: 1.5;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
}
.wrap .login .right .top{
  /*height: 60px;*/
  /*width: 300px;*/
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  border-bottom: 1px solid blue;
}
.wrap .login .right .box{
  /*height: 60px;*/
  padding-top: 30px;
  display: flex;
  align-items: center;
}
.wrap .login .right .box label{
  vertical-align: middle;
  margin-bottom: 0;
}
.wrap .login .right .box input{
  width: 90%;
  border: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-left: 10px;
  position: relative;
}
.wrap .login .right .box input:hover{
  border-color: blue;
}
.wrap .login .right .box .username-inner{
  position relative
}
.wrap .login .right .box .username-inner .validate{
  font-size: 12px;
  color: red;
  position: absolute;
  top: 100%;
  left: 0;
  margin-left: 10px;
}
.wrap .login .right .btn-foot{
  padding-top: 30px;
}
</style>
