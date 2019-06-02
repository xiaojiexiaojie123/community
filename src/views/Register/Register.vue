<template>
  <div class="wrap">
    <div class="register">
      <div class="top">
        注册
      </div>
      <div class="username box">
        <label for="username">用户名:</label>
        <div class="username-inner input">
          <input type="text" id="username" name="username" @blur="ValidateUsername" v-model="username">
          <span v-if="validateUsername" class="validate">用户名不嫩为空</span>
        </div>
      </div>
      <div class="password box">
        <label for="password">密 &nbsp;&nbsp;&nbsp;码:</label>
        <div class="input">
          <input type="password" id="password" name="password" @blur="ValidatePassword" v-model="password">
          <span v-if="validatePassword" class="validate">长度6-16，数字和英文组合</span>
        </div>
      </div>
      <div class="con-password box">
        <label for="con-password">确认密码:</label>
        <div class="input">
          <input type="password" id="con-password" name="con-password" @blur="ValidateConPassword" v-model="conPassword">
          <span v-if="validateConPassword" class="validate">两次密码输入不一致</span>
        </div>
      </div>
      <div class="phone box">
        <label for="phone">手机号码:</label>
        <div class="input">
          <input type="text" id="phone" name="phone" @blur="ValidatePhone" v-model="phoneNum">
          <span v-if="validatePhone" class="validate">手机号码非法</span>
          <span v-if="validatePhoneNull" class="validate">请输入手机号码</span>
        </div>
      </div>
      <div class="btn-foot text-center">
        <button @click="register" class="btn btn-primary submit" type="button" style="margin-right: 35px">提交</button>
        <router-link tag="a" to="/layout/index" class="btn btn-default" style="border: 1px solid #ccc">返回</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { Message } from 'iview'
import { loginUp } from '@/api/api'
export default {
  name: 'register',
  data () {
    return {
      username: '',
      password: '',
      conPassword: '',
      phoneNum: '',
      validateUsername: '',
      validatePassword: '',
      validateConPassword: '',
      validatePhone: '',
      validatePhoneNull: ''
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
    // 确认密码验证
    ValidateConPassword () {
      if (this.conPassword !== this.password) {
        this.validateConPassword = true
        return false
      } else {
        this.validateConPassword = false
        return true
      }
    },
    // 手机号码验证
    ValidatePhone () {
      if (this.phoneNum === '') {
        this.validatePhoneNull = true
        return false
      } else if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.phoneNum)) {
        this.validatePhoneNull = false
        this.validatePhone = true
        return false
      } else {
        this.validatePhone = false
        return true
      }
    },
    // 注册
    async register () {
      if (this.ValidateUsername() && this.ValidatePassword() && this.ValidateConPassword() && this.ValidatePhone()) {
        const data = {
          userName: this.username,
          userPassword: this.password
        }
        const res = await loginUp(data)
        if (res.code === 0) {
          Message.success('注册成功')
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
.wrap .register{
  width: 400px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  /*justify-content: center;*/
  align-items: center;
  padding: 20px;
  border-radius: 8px;
}
.wrap .register .top{
  width: 100%;
  text-align: center;
  font-weight: 700;
  font-size: 16px;
  border-bottom: 1px solid blue;
}
.wrap .register .box{
  /*height: 60px;*/
  padding-top: 40px;
  display: flex;
  align-items: center;
}
.wrap .register .box label{
  width: 80px;
  vertical-align: middle;
  margin-bottom: 0;
  text-align: right;
}
.wrap .register .box label:before{
  content: '*';
  color: red;
}
.wrap .register .box .input{
  position: relative;
}
.wrap .register .box .input .validate{
  font-size: 12px;
  color: red;
  position: absolute;
  top: 100%;
  left: 0;
  margin-left: 10px;
}
.wrap .register .box input{
  width: 90%;
  border: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-left: 10px;
}
validate
.wrap .register .box input:hover{
  border-color: blue;
}
.wrap .register .btn-foot{
  padding-top: 40px;
}
</style>
