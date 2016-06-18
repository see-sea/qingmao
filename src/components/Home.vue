
<style>
@import '~vux/dist/vux.css';
.topic-container{
  display: flex;
  flex-flow: wrap;
}
.topic-item{
  width: 50%;
  display: flex;
}

</style>
<template>
	<div>
  		<x-header v-on:click="switch">{{title}}<a slot="right">新版反馈</a></x-header>
  		<search placeholder="搜索" cancel-text="取消"></search>
  		<swiper :list="list" auto></swiper>
      <ul id="topic-container">
        <li v-for="topic in topics" class="topic-item">
          <a href=""><img src="" alt="{$topic-item.image}"></a>
        </li>
      </ul>
      <p>热门排行<span><a v-link="{path: 'shop'}">商城</a></span></p>
      <products :list.sync="list"></products>

      <popup :show.sync="show">
        <div class="popup0">
          <address :title="title" :value.sync="selected" :list="addressData"></address>
        </div>
      </popup>


        <!-- footer -->
  		<foot-bottom msg="hello world"></foot-bottom>

	</div>
</template>

<script>
import xHeader from 'vux-components/x-header'
import swiper from 'vux-components/swiper'
import scroller from 'vux-components/scroller'
import footBottom from './_block/footBottom'
import search from 'vux-components/search'

export default {
  ready () {
    this.init()
    console.log(this.title)
    })
  },
  components: {
    xHeader,
    swiper,
    scroller,
    search,
    footBottom
  },
  data: function () {
    return {
      title: "青猫校园",
      banner: [],
      topics: [],
      list: [],
      school_id: 0,
      school: {},
      addressData: [],
      show: false,
      p: 0
    }
  },
  method: {
    init: function () {
      this.$http.get(this.$parent.api + 'home/index', {school_id: school_id, p: this.p}).then(function (response) {
        var data = response.data
        this.list = data.list
        this.school = data.school
          // success callback
      }, function (response) {
        // error callback
      })
      if (!school_id) {
        this.switch
      }
    },
    switch: function () {
      show = true
      this.$http.get(this.$parent.resource + 'school.json').then(function (response) {
        this.addressData = response.data
      })
    },
    loadmore: function () {
      this.$http.get(this.$parent.api + 'home/products', {p: p}).then(function (response) {
        var data = response.data
        this.list = data.list
        this.school = data.school
          // success callback
      }
    },
    getLoaction: function(){
      wx.ready({
        wx.getLocation ({
          type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
          success: function (res) {
              var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
              var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
              var speed = res.speed; // 速度，以米/每秒计
              var accuracy = res.accuracy; // 位置精度
          }
        });
      })
    }
  }
}

</script>

