<template>
  <div class="wrap">
    <div class="lostPsw">
      <div class="top">
        忘记密码
      </div>
      <div class="username box">
        <label for="username">用户名:</label>
        <div class="username-inner input">
          <input type="text" id="username" name="username" @blur="ValidateUsername" v-model="username">
          <span v-if="validateUsername" class="validate">用户名不能为空</span>
        </div>
      </div>
      <div class="email box">
        <label for="email">邮箱账号:</label>
        <div class="input">
          <input type="text" id="email" name="email" @blur="ValidateEmail" v-model="email">
          <span v-if="validateEmail" class="validate">邮箱号码非法</span>
          <span v-if="validateEmailNull" class="validate">请输入邮箱号码</span>
        </div>
      </div>
      
       <div class="password box">
        <label for="password">新&nbsp;密 &nbsp;码:</label>
        <div class="input">
          <input type="password" id="password" name="password" @blur="ValidatePassword" v-model="password">
          <span v-if="validatePassword" class="validate">长度6-16，数字和英文组合</span>
        </div>
      </div>
      <div class="code box">
        <label for="code">验证码:</label>
        <div class="input">
          <input type="text" id="code" name="code" @blur="ValidateCode" v-model="code">
          <span @click="getCode" class="side"><a>获取验证码</a></span>
          <span v-if="validateCode" class="validate">验证码错误</span>
          <span v-if="validateCodeNull" class="validate">请输入验证码</span>
        </div>
       </div>
      <div class="btn-foot text-center">
        <button @click="lostPsw" class="btn btn-primary submit" type="button" style="margin-right: 35px">修改密码</button>
        <router-link tag="a" to="/layout/index" class="btn btn-default" style="border: 1px solid #ccc">返回</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { Message } from 'iview'
import { getCode } from '@/api/api'
import { lostPsw } from '@/api/api'
export default {
  name: 'losePsw',
  data () {
    return {
    	username: '',
      	email: '',
      	emailCode: '',
      	code: '',
      	password: '',
      	validateUsername: '',
      	validateEmail: '',
      	validateEmailNull: '',
      	validateCode: '',
      	validateCodeNull: '',
      	validatePassword: '',

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
    // 邮箱验证
    ValidateEmail () {
      if (this.phoneNum === '') {
        this.validateEmailNull = true
        return false
      } else if (!/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(this.email)) {
        this.validateEmailNull = false
        this.validateEmail = true
        return false
      } else {
        this.validateEmail = false
        return true
      }
    },
    // 获取验证码
    async getCode () {
      if (this.ValidateUsername() && this.ValidateEmail()) {
        const data = {
          userId: this.email
        }
        const res = await getCode(data)
        if (res.code === 0) {
          //this.emailCode = res.data.pageData.emailCode
          //this.password = res.data.pageData.password
        }
      }
    },
    // 验证码校验
    ValidateCode () {
      if (this.code === '') {
        this.validateCodeNull = true
        this.validateCode = false
        return false
      } 
      else {
        this.validateCode = false
        this.validateCodeNull = false
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
    // 修改密码
    async lostPsw () {
      if (this.ValidatePassword()) {
        const data = {
          userId: this.email,
          verificationCode: this.code,
          userPassword: this.password,
        }
        const res = await lostPsw(data)
        if (res.code === 0) {
          Message.success('修改成功')
          this.$router.replace('/layout/index')
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrap{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrap .lostPsw{
  width: 400px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  /*justify-content: center;*/
  align-items: center;
  padding: 20px;
  border-radius: 8px;
}
.wrap .lostPsw .top{
  width: 100%;
  text-align: center;
  font-weight: 700;
  font-size: 16px;
  border-bottom: 1px solid blue;
}
.wrap .lostPsw .box{
  /*height: 60px;*/
  padding-top: 40px;
  display: flex;
  align-items: center;
}
.wrap .lostPsw .box label{
  width: 80px;
  vertical-align: middle;
  margin-bottom: 0;
  text-align: right;
}
.wrap .lostPsw .box label:before{
  content: '*';
  color: red;
}
.wrap .lostPsw .box .input{
  position: relative;
}
.wrap .lostPsw .box .input .side{
  position: absolute;
}
.wrap .lostPsw .box .input .validate{
  font-size: 12px;
  color: red;
  position: absolute;
  top: 100%;
  left: 0;
  margin-left: 10px;
}
.wrap .lostPsw .box input{
  width: 90%;
  border: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-left: 10px;
}
.wrap .lostPsw .box #code{
  width: 50%;
  border: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-left: 10px;
}
.wrap .lostPsw .box .input .side{
  width: 50%;
  border: none;
}
validate
.wrap .lostPsw .box input:hover{
  border-color: blue;
}
.wrap .lostPsw .btn-foot{
  padding-top: 40px;
}
</style>
