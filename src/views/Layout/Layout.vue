<template>
  <div class="layout">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './../NavBar/NavBar'
export default {
  name: 'layout',
  data () {
    return {
    }
  },
  components: {
    NavBar
  }
}
</script>

<style lang="stylus" scoped>
</style>
