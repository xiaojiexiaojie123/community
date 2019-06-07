<template>
  <div class="tour">
    <label>起点：<input v-model="start"></label>
    <label>终点：<input v-model="end"></label>
    <label>搜索：<input v-model="keyword"></label>
    <baidu-map
      class="bm-view"
      :center="center"
      :zoom="zoom"
      :scroll-wheel-zoom="true"
      @ready="handler">
      <bm-transit :start="start" :end="end" :auto-viewport="true" ></bm-transit>
      <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
      <bm-local-search :keyword="keyword" :auto-viewport="true" :location="location"></bm-local-search>
    </baidu-map>
  </div>
</template>

<script>
export default {
  name: 'tour',
  data () {
    return {
      center: {lng: 0, lat: 0},
      zoom: 15,
      start: '',
      end: '',
      keyword: '',
      location: ''
    }
  },
  methods: {
    handler ({BMap, map}) {
      let _this = this
      let geolocation = new BMap.Geolocation()
      geolocation.getCurrentPosition(function (r) {
        console.log(r, 'r')
        _this.center.lng = r.longitude
        _this.center.lat = r.latitude
        _this.location = r.address.city
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .bm-view {
    width: 100%;
    height: 400px;
  }
</style>
