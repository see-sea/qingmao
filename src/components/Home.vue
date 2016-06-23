
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
  		<x-header >{{title}}<span v-on:click="switch">切换</span><a slot="right">新版反馈</a></x-header>
  		<search placeholder="搜索" cancel-text="取消"></search>
  		<swiper :list="list" auto ></swiper>
      <swiper-vertical :list="notice"></swiper-vertical>
      <ul id="topic-container">
        <li v-for="topic in topics" class="topic-item">
          <a href="{{topic.url}}"><x-img src="{$topic-item.img}"></a>
        </li>
      </ul>
      <p>热门排行<span><a v-link="{path: 'shop'}">商城</a></span></p>
      <products-fragment></products-fragment>

      <popup :show.sync="show">
        <div class="popup0">
          <group>
          <address :title="title" :value.sync="address" :list="addressData"></address>
        </group>
        </div>
      </popup>
        <!-- footer -->
  		<foot-bottom msg="hello world"></foot-bottom>

	</div>
</template>

<script>
import xHeader from 'vux-components/x-header'
import swiper from 'vux-components/swiper'
import swiperItem from 'vux-components/swiper-item'
import productsFragment from './Shop/productsFragment'
import scroller from 'vux-components/scroller'
import footBottom from './_block/footBottom'
import search from 'vux-components/search'

export default {
  ready () {
    this.init()
  },
  components: {
    xHeader,
    swiper,
    swiperItem,
    scroller,
    search,
    productsFragment,
    footBottom
  },
  data: function () {
    return {
      title: '青猫校园',
      banner: [],
      topics: [],
      list: [],
      notice: [],
      school_id: 0,
      school: {},
      addressData: [],
      show: false,
      address: [],
      p: 0
    }
  },
  method: {
    init: function () {
      this.$http.get(this.$parent.api + 'home/index', {school_id: this.school_id, p: this.p}).then(function (response) {
        this.$data = response.data
          // success callback
      }, function (response) {
        alert('网络错误，请刷新重试')
        // error callback
      })
    },
    switch: function () {
      this.show = true
      this.$http.get(this.$parent.resource + 'school.json').then(function (response) {
        this.addressData = response.data
      })
    },
    loadmore: function () {
      this.$http.get(this.$parent.api + 'home/products', {p: this.p}).then(function (response) {
        var data = response.data
        this.list = data.list
        this.school = data.school
          // success callback
      })
    },
    getLoaction: function () {
      // 获取当前地址
    }
  }
}

</script>

