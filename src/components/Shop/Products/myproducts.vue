
<template>
  <x-header title="我的商品"></x-header>
  <tab>
    <tab-item :selected="current === '在售'" @click="current = '在售'">在售</tab-item>
    <tab-item :selected="current === '未发货'" @click="current = '下架'">下架</tab-item>
  </tab>
  <div>
    <p style="text-align: center;margin-bottom: 10px;">
          <a class="share-btn btn-primary btn-mini"  href="{:addons_url('Shop://Index/searchlist',array('uid'=>get_uid(),'school_id'=>$info['school_id'],'from'=>'myproducts'))}">制作我的书单</a>
          <a class="share-btn btn-primary btn-mini"  href="{:addons_url('Shop://Free/index')}">批量赠送</a>
      </p>
      <group>
    <div v-for="item in items">
        <div class="order_panel p10 mb10">
          <div class="myorder-info_top pr pb10 mb10"> <span class="fl mr10">ISBN号：{$vo.number}</span> <span class="fl">发布时间：{$vo.cTime|date="Y-m-d H:i:s",###}</span></div>
          <div class="order_list">
            <ul>
                    <li>
                        <a href="<neq name='vo.can_use' value='0'>{:addons_url('Shop://Index/productinfo')}?id={$vo.id}</neq>">
                            <img src="{$vo.head_img|get_cover_url}"><span class="order_title mt5">{$vo.name} x {$vo.store}</span><span>￥{$vo.true_price}  </span></a>
                        <div class=" fr" style=""><a href="#"  class="add2car" onClick='delproduct(this,{$vo.id})'>删除</a></div>
                    </li>
            </ul>
            <div style="clear:both;"></div>

            <!--备注行，无备注时不显示-->
            <notempty name='vo.remarks'>
            <div class="myorder-info_bottom"><span class="fl" style="width:40px; color:#999;padding-left:5px;">备注</span> <span class="fl mr10" style="width:-webkit-calc(100% - 55px); overflow:hidden; text-overflow:ellipsis;"><nobr>{$vo.desc}</nobr></span></div>
            </notempty>
            <notempty name='vo.location'>
            <div class="myorder-info_bottom"><span class="fl" style="width:40px; color:#999;padding-left:5px;">仓储</span> <span class="fl mr10" style="width:-webkit-calc(100% - 55px); overflow:hidden; text-overflow:ellipsis;"><nobr>{$vo.location}</nobr></span></div>
            </notempty>
            <div class="myorder-info_bottom">
                <div style="width:330px;" class="fr">
                    <div class="btn_bottom fr" style="background-color:#dc214c"><a href="{:addons_url('Shop://Index/editproduct',array('id'=>$vo['id']))}" id="editProduct">修改</a></div>
                    <eq name='vo.is_show' value='1'>
                    <div class="btn_bottom fr" style="background-color:#ccc"><a href="#"  class="add2car" onClick='unsale(this,{$vo.id})'>下架</a></div>
                        <else/>
                        <div class="btn_bottom fr" style="background-color:#0c77cc"><a href="#"  class="add2car" onClick='sell(this,{$vo.id})'>上架</a></div>
                    </eq>

                </div>
            </div>
          </div>
        </div>
    </div>
</group>
  </div>

</template>

<script>
export default {
  name: 'myproducts',
  ready () {
    this.$http.get(this.$parent.api + 'Shop/myproducts').then(function () {
      this.data
    }, function () {
      alert('网络错误，请稍后重试')
    })
  }
  data () {
    return {
      current: '在售',
      list: [],
      onsale: [],
      unsale: [],
    };
  }
}
Vue.$watch('current', function () {
  if(current === '在售')
    this.list = onsale
  else
    this.list = unsale
})
</script>

<style lang="css" scoped>
</style>
<include file="Public/mobile_head"/>
<include file="./Addons/Shop/View/default/Index/base.html" />
<body class="cate">
<header style="background-color:#{$shop_config.color}">
  <section id="title">
      <a href="javascript:history.back()"><span class="topback"></span></a>
      我的商品
      <!--<a class="icon_ucenter" href="{:addons_url('Shop://UserCenter/usercenter')}"></a>-->
  </section>
</header>
<!--底部导航-->
<include file="./Addons/Shop/View/default/Index/footer.html" />
<!--END 底部导航-->
<section id="selector">
  <div class="order w100p">
    <ul class="w50">
     <li><a href="{:addons_url('Shop://Index/myproducts',array('type'=>'sell'))}" <eq name="type" value="sell">class="current"  style="border-bottom-color:#{$shop_config.color}; color:#{$shop_config.color}"</eq>>在售</a></li>
      <li><a href="{:addons_url('Shop://Index/myproducts',array('type'=>'unsell'))}" <eq name="type" value="unsell">class="current" style="border-bottom-color:#{$shop_config.color}; color:#{$shop_config.color}"</eq>>下架/无库存</a></li>
    </ul>
  </div>
</section>
<section id="myorder" class="mb10 mt10">
  <notempty name="list">
      <p style="text-align: center;margin-bottom: 10px;">
          <a class="share-btn btn-primary btn-mini"  href="{:addons_url('Shop://Index/searchlist',array('uid'=>get_uid(),'school_id'=>$info['school_id'],'from'=>'myproducts'))}">制作我的书单</a>
          <a class="share-btn btn-primary btn-mini"  href="{:addons_url('Shop://Free/index')}">批量赠送</a>
      </p><!-- 我的书单-->
      <volist name ="list" id="vo">

    </volist>
      <div>

  <p style="text-align: center"><a class="share-btn btn-primary btn-mini"  href="{:addons_url('Shop://Index/searchlist',array('uid'=>get_uid(),'school_id'=>$info['school_id'],'from'=>'myproducts'))}">制作我的书单</a></p><!-- 我的书单-->
     </div>
  <else />
      <eq name="type" value="sell">
          <div class="empty_default" >
              <p><img src="__IMG__/m/face_sad.png"/><br/>您还没有在售书籍～</p><br/><br/>
              <a class="go_shop" href="{:addons_url('Shop://Index/index')}">马上去上传</a>
          </div>
      </eq>
      <eq name="type" value="unsell">
          <div class="empty_default" >
              <p><img src="__IMG__/m/face_sad.png"/><br/>您还没有下架书籍～</p><br/><br/>
              <a class="go_shop" href="{:addons_url('Shop://Index/index')}">马上去上传</a>
          </div>
      </eq>
   </div>
   </notempty>
</section>
<!--底部 版权信息-->
<include file="./Addons/Shop/View/default/Index/footerbq.html" />
<!--END 底部导航-->
</body>
<script src="{:ADDON_PUBLIC_PATH}/js/jquery.js"></script>
<script src="{:ADDON_PUBLIC_PATH}/js/comm.js"></script>
<script>

function unsale(me,id){
      if(confirm("确定要下架吗?")){
        $.ajax({
            url:"{:addons_url('Shop://Products/unsell')}"+"?id="+id,
            type:"get",
            dataType:"json",
            success:function(re){
                if(re){
                    $(me).parent().parent().parent().parent().parent().remove();
                    //如果为空，则显示空的消息
                    var len = $('.order_panel').length;
                    if(len<=0){
                        $('.empty_default').show();
                    }else{
                        $('.empty_default').hide();
                    }
                }else{
                    alert('下架失败');
                }
            },
            error:function(){
                alert('操作失败');
            }
        });
      }
      return false;
}
function sell(me,id){
      if(confirm("确定要上架吗?")){
        $.ajax({
            url:"{:addons_url('Shop://Products/sell')}"+"?id="+id,
            type:"get",
            dataType:"json",
            success:function(re){
                if(re){
                    $(me).parent().parent().parent().parent().parent().remove();
                    //如果为空，则显示空的消息
                    var len = $('.order_panel').length;
                    if(len<=0){
                        $('.empty_default').show();
                    }else{
                        $('.empty_default').hide();
                    }
                }else{
                    alert('上架失败');
                }
            },
            error:function(){
                alert('操作失败');
            }
        });
      }
      return false;
}
function delproduct(me,id){
      if(confirm("确定要删除吗?")){
        $.ajax({
            url:"{:addons_url('Shop://Products/delete')}"+"?id="+id,
            type:"get",
            dataType:"json",
            success:function(re){
                if(re){
                    $(me).parent().parent().parent().parent().parent().remove();
                    //如果为空，则显示空的消息
                    var len = $('.order_panel').length;
                    if(len<=0){
                        $('.empty_default').show();
                    }else{
                        $('.empty_default').hide();
                    }
                }else{
                    alert('删除失败');
                }
            },
            error:function(){
                alert('操作失败');
            }
        });
      }
      return false;
}

wx.ready(function() {
    wx.onMenuShareTimeline({
        title: '{$shop_config.share_title}', // 分享标题
        link: '{:addons_url("Shop://Index/searchlist")}'+'?uid='+'{$uid}'+'&from=timeline&openid=&school_id='+'{$info.school_id}', // 分享链接
        imgUrl: 'https://mmbiz.qlogo.cn/mmbiz/QwibP0T7fI61SmedtwGVckPhibicv7gV4iaXkYYY11SImNAnmqGV8mDRywv6hDWoYBxUxNn3P2Q0lj3cme9zfEYjUQ/0?wx_fmt=png', // 分享图标
        success: function () {
            // 用户确认分享后执行的回调函数
//        alert('分享成功');
            $.get('{:addons_url("Shop://Share/record")}');
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
//        alert('欢迎');
        }
    });
    wx.onMenuShareAppMessage({
        title: '{$shop_config.share_title}', // 分享标题
        desc:'同校区直接交易，方便快捷', //描述
        link: '{:addons_url("Shop://Index/searchlist")}'+'?uid='+'{$uid}'+'&from=timeline&openid=&school_id='+'{$info.school_id}', // 分享链接
        imgUrl: 'https://mmbiz.qlogo.cn/mmbiz/QwibP0T7fI61SmedtwGVckPhibicv7gV4iaXkYYY11SImNAnmqGV8mDRywv6hDWoYBxUxNn3P2Q0lj3cme9zfEYjUQ/0?wx_fmt=png', // 分享图标
        success: function () {
            // 用户确认分享后执行的回调函数
//        alert('分享成功');
            $.get('{:addons_url("Shop://Share/record")}');
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
//        alert('欢迎');
        }
    });

})

</script>
</html>
