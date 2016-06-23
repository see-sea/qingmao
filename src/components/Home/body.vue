<template>
<section id="hot" class="mt5">

   <h3 class="mt10" style="border-left-color:#{$shop_config.color}">热门<span>进入教材书城</span></h3>
  <div class="hot-bd">
    <div>
      <ul class="w50" >
        <volist name='product_show' id='list_vo'>
            <a href="{:addons_url('Shop://Index/productinfo',array('id'=>$list_vo['id']))}">
                <li><div class="fang_div" style="background-image: url({$list_vo['head_img']|get_cover_url})"></div>
                    <span class="hot_title">
                      <p class="tit_h">{$list_vo.name}</p>
                      <p class="price mt10">￥{$list_vo.true_price}</p>
                      <p class="oldprice">￥{$list_vo.old_price}</p>
                    </span>
                </li>
          </a>
        </volist>
      </ul>
    </div>

</section>
</template>
<script>
export default {
  ready () {

  },
  data: {
    return: {
      shop_config: {},
      page: {},
      list: [{}]
    }
  }
}
</script>
