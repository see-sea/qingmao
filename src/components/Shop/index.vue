
  <h3 class="mt10" style="border-left-color:#{$shop_config.color}">校区商品<span style="color: #ccc;font-size: 0.75rem">&nbsp;&nbsp;

      <?php echo $page['count']>1000?'超过1000本书籍':($page['count']>500?'将近1000本书籍':($page['count']>100?'将近500本书籍':''));?>

  </span>
    <span style="float:right"><a href="{:addons_url('Shop://Index/categories')}" >
				分类
        </a></span>
  </h3>
  <div class="hot-bd">
    <div>

      <ul class="w50" id='plist'>
        <volist name='list' id='list_vo'> 
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
      <div class="listloading" id = "loading">
          <if condition="$page.num gt 1">
              更多...下拉加载
          </if>
      </div>
  </div>