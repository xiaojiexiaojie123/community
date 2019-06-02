<template>
  <div id="app">
    <!-- keep-alive可以对数据进行缓存 -->
    <div class="container">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus" scoped>
#app
  width 100%
  height 100%
  position relative
  margin 0 auto
  .container
    width 1200px
    height 100%
</style>
