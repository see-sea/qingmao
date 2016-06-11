<template>
  <tabbar>
<tabbar-item  selected v-link="{path: '/home'}">
      <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_button.png">
      <span slot="label">首页</span>
    </tabbar-item>
    <tabbar-item v-link="{path: '/moments'}">
      <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_msg.png">
      <span slot="label">校园圈</span>
    </tabbar-item>
    <tabbar-item v-link="{path: '/discover'}">
      <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_article.png">
      <span slot="label">发现</span>
    </tabbar-item>
    <tabbar-item v-link="{path: '/me'}">
      <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_cell.png">
      <span slot="label">我</span>
    </tabbar-item>
  </tabbar>
</template>

<script>
import tabbar from 'vux/dist/components/tabbar'
import tabbarItem from 'vux/dist/components/tabbar-item'
export default {
  components: {
    tabbar,
    tabbarItem
  }
}
</script>
