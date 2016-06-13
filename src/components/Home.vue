<template>
	<div>
  		<x-header v-on:click="switchSchool()">{{school.title}}<a slot="right">新版反馈</a></x-header>
  		<search placeholder="搜索" cancel-text="取消"></search>
  		<swiper :list="list" auto></swiper>
      <ul id="topic-container">
        <li v-for="topic in topics" class="topic-item">
          <a href=""><img src="" alt="{$topic_list_vo.title}"></a>
        </li>
      </ul>


        <!-- footer -->
  		<foot-bottom></foot-bottom>

	</div>
</template>

<script>
import xHeader from 'vux-components/x-header'
import swiper from 'vux-components/swiper'
import footBottom from './_block/footBottom'
import search from 'vux-components/search'
export default {
  ready () {
     // GET request
    this.$http({url: this.$parent.api + 'home/index', method: 'GET'}).then(function (response) {
      var data = response.data
      this.list = data.list
      this.school = data.school
        // success callback
    }, function (response) {

    })
  },
  components: {
    xHeader,
    swiper,
    search,
    footBottom
  },
  data: function () {
    return {
      banner: [],
      topics: [],
      list: [],
      school: {}
    }
  },
  method: {
    switchSchool: function () {

    }
  }
}

</script>

<style>
@import '~vux/dist/vux.css';
.topic-container{
  display: flex;
}

</style>
