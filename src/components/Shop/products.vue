<template>
  <scroller lock-y :scrollbar-x="false" pullup-config="{
          content: 'Pull Up To Refresh',
          pullUpHeight: 60,
          height: 40,
          autoRefresh: false,
          content: '下拉刷新',
          downContent: '下拉刷新',
          upContent: '释放刷新',
          loadingContent: '加载中',
          clsPrefix: 'xs-plugin-pullup-'
        }">
    <div id="plist">

    </div>
  </scroller>
</template>

<script>
  export default {
    data: return () {

    },
    method: {

    }
  }
</script>
