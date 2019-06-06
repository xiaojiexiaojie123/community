<template>
  <div class="wrap">
    <div class="register">
      <div class="top">
        注册
      </div>
      <div class="title box">
        <label for="title">标题:</label>
        <div class="username-inner input">
          <input type="text" id="title" name="title" @blur="ValidateTitle" v-model="title">
          <span v-if="validateTitle" class="validate">标题不能为空</span>
        </div>
      </div>
      <div class="type box">
        <label for="type">活动类型:</label>
        <div class="input">
          <input type="radio" id="love" value="love" v-model="type">
          <label for="love">爱心社区</label>
          <input type="radio" id="activity" value="activity" v-model="type">
          <label for="activity">活动发布</label>
          <span v-if="validateType" class="validate">类型不能为空</span>
        </div>
      </div>
      <div class="time box">
        <label for="time">活动日期:</label>
        <div class="input">
          <input type="text" id="time" name="time" @blur="ValidateTime" v-model="time">
          <span v-if="validateTime" class="validate">日期不能为空</span>
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
      <div class="address box">
        <label for="address">活动地点:</label>
        <div class="input">
          <input type="text" id="address" name="address" @blur="ValidateEmail" v-model="address">
          <span v-if="validateAddress" class="validate">地点不能为空</span>
        </div>
      </div>
      <div class="btn-foot text-center">
        <button @click="addActivity" class="btn btn-primary submit" type="button" style="margin-right: 35px">提交</button>
        <router-link tag="a" to="/layout/index" class="btn btn-default" style="border: 1px solid #ccc">返回</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { Message } from 'iview'
import { AddActivity } from '@/api/api'
export default {
  name: 'AddActivity',
  data () {
    return {
      title: '',
      time: '',
      type: '',
      phoneNum: '',
      address: '',
      validateTitle: '',
      validateTime: '',
      validateType: '',
      validatePhone: '',
      validatePhoneNull: '',
      validateAddress: '',
    }
  },
  methods: {
    // 标题验证
    ValidateTitle () {
      if (this.title === '') {
        this.validateTitle = true
        return false
      } else {
        this.validateTitle = false
        return true
      }
    },
    // 日期验证
    ValidateTime () {
      if (this.time === '') {
        this.validateTime = true
        return false
      } else {
        this.validateTime = false
        return true
      }
    },
    // 类型验证
    ValidateType () {
      if (this.type === '') {
        this.validateType = true
        return false
      } else {
        this.validateType = false
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
    // 邮箱验证
    ValidateAddress () {
      if (this.address === '') {
        this.validateAddress = true
        return false
      } else {
        this.validateAddress = false
        return true
      }
    },
    // 添加活动
    async addActivity () {
      if (this.ValidateTitle() && this.ValidateTime() && this.ValidateType() && this.ValidatePhone() && this.ValidateAddress()) {
        const data = {
          
        }
        const res = await AddActivity(data)
        if (res.code === 0) {
          Message.success('等待审核')

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
