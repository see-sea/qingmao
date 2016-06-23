<template>
  <swiper direction="vertical" height="30px" auto v-for="item in list">
        <swiper-item><a href="{{item.url}}">{{item.title}}</a></swiper-item>
  </swiper>
</template>

<script>
export default {

  name: 'swiperVertical',
  props: ['list']
  data () {
    return {
      list: []
    };
  }
};
</script>

<style lang="css" scoped>

</style>
