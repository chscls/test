import React from 'react';
import { Icon } from 'antd';
import { Link } from 'dva/router';

const Header = (props) => {
  return (

<div id="mallPage" className="mui-global-biz-mallfp  ">

    <div id="site-nav" data-spm="a2226mz" role="navigation">
    <div id="sn-bg">
        <div className="sn-bg-right">
        </div>
    </div>
    <div id="sn-bd">
        <b className="sn-edge"></b>
        <div className="sn-container">
            <p id="login-info" className="sn-login-info"><em>喵，欢迎来天猫</em><a className="sn-login" href="//login.tmall.com/?redirectURL=https%3A%2F%2Fwww.tmall.com%2F%3Fali_trackid%3D2%3Amm_26632258_3504122_55934697%3A1495779391_3k7_310564321%26upsid%3D0f5644caabcdd7cdeb8a8e588ccf437c%26clk1%3D0f5644caabcdd7cdeb8a8e588ccf437c" target="_top">请登录</a><a className="sn-register" href="//register.tmall.com/" target="_top">免费注册</a></p>
            <ul className="sn-quick-menu">
                <li className="sn-mytaobao menu-item j_MyTaobao">
                    <div className="sn-menu">
                        <a className="menu-hd" href="//i.taobao.com/my_taobao.htm" target="_top" rel="nofollow" tabindex="0" aria-haspopup="true" aria-expanded="false">我的淘宝<b></b></a>
                        <div className="menu-bd" role="menu" aria-hidden="true" id="menu-3">
                            <div className="menu-bd-panel" id="myTaobaoPanel">
                                <a href="//trade.taobao.com/trade/itemlist/list_bought_items.htm?t=20110530" target="_top" rel="nofollow">已买到的宝贝</a>
                                <a href="//trade.taobao.com/trade/itemlist/list_sold_items.htm?t=20110530" target="_top" rel="nofollow">已卖出的宝贝</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="sn-seller-center hidden j_SellerCenter">
                    <a target="_top" href="//mai.taobao.com/seller_admin.htm">商家中心</a>
                </li>
                <li className="sn-mybrand"><i className="mui-global-iconfont">㑉</i>
                    <a target="_top" id="J_SnMyBrand" className="sn-mybrand-link" href="//mybrand.tmall.com?scm=1048.1.1.1">我关注的品牌</a>
                </li>
                <li className="sn-cart mini-cart menu"><i className="mui-global-iconfont">󰅈</i>
                    <a className="sn-cart-link" href="//cart.tmall.com/cart/myCart.htm?from=btop" target="_top" rel="nofollow" id="mc-menu-hd">购物车<span className="mc-count mc-pt3">0</span>件</a>
                </li>
                <li className="sn-favorite menu-item">
                    <div className="sn-menu">
                        <a className="menu-hd" href="//shoucang.taobao.com/shop_collect_list.htm?scjjc=c1" target="_top" rel="nofollow" tabindex="0" aria-haspopup="true" aria-expanded="false">收藏夹<b></b></a>

                        <div className="menu-bd" role="menu" aria-hidden="true" id="menu-5">
                            <div className="menu-bd-panel">
                                <a href="//shoucang.taobao.com/item_collect.htm" target="_top" rel="nofollow">收藏的宝贝</a>
                                <a href="//shoucang.taobao.com/shop_collect_list.htm" target="_top" rel="nofollow">收藏的店铺</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="sn-separator"></li>
                <li className="sn-mobile">
                    <i className="mui-global-iconfont">㑈</i>
                    <a title="天猫无线" target="_top" className="sn-mobile-link" href="//pages.tmall.com/wow/portal/act/app-download?scm=1027.1.1.1">手机版</a>
                </li>
                <li className="sn-home">
                    <a href="//www.taobao.com/">淘宝网</a>
                </li>
                <li className="sn-b">
                    <a href="//b.tmall.com/">企业购</a>
                </li>
                <li className="sn-seller menu-item">
                    <div className="sn-menu J_DirectPromo">
                        <a className="menu-hd" href="//mai.taobao.com" target="_top">商家支持<b></b></a>
                        <div className="menu-bd sn-seller-lazy">
                        <ul>
    <li><h3>商家：</h3>
        <a target="_top" href="//mai.taobao.com/">商家中心</a>
        <a className="sitemap-right" target="_top" href="//zhaoshang.tmall.com/?acm=lb-tms-1104633-90536.1003.4.268545&amp;scm=1003.4.lb-tms-1104633-90536.OTHER_2_268545">商家入驻</a>
        <a target="_top" href="//fw.tmall.com/?acm=lb-tms-1104633-90536.1003.4.268545&amp;scm=1003.4.lb-tms-1104633-90536.OTHER_3_268545">运营服务</a>
        <a className="sitemap-right" target="_top" href="//www.tmall.com/wow/seller/act/tmallpinkong">商家品控</a> <a target="_top" href="//fuwu.tmall.com/?acm=lb-tms-1104633-90536.1003.4.268545&amp;scm=1003.4.lb-tms-1104633-90536.OTHER_5_268545">商家工具</a>
        <a className="sitemap-right" target="_top" href="//guize.tmall.com/?acm=lb-tms-1104633-90536.1003.4.268545&amp;scm=1003.4.lb-tms-1104633-90536.OTHER_6_268545">商家规则</a>
        <a target="_top" href="//zhiku.tmall.com">天猫智库</a>
        <a className="sitemap-right" target="_top" href="//maowo.tmall.com/?acm=lb-tms-1104633-90536.1003.4.268545&amp;scm=1003.4.lb-tms-1104633-90536.OTHER_8_268545">喵言喵语</a>
    </li>
    <li><h3>帮助：</h3>
        <a target="_top" href="//helpcenter.tmall.com/index?from=high">帮助中心</a>
    </li>
</ul></div>
                    </div>
                </li>
                <li className="sn-sitemap">
                    <div className="sn-menu">
                        <h3 className="menu-hd"><i className="mui-global-iconfont"></i><span>网站导航</span><b></b></h3>
                        <div className="menu-bd sn-sitemap-lazy sn-sitemap-bd" data-spm="a2228l4">
                        <div className="site-cont site-hot"><h2>热点推荐<span>Hot</span></h2>
    <ul className="site-list">
        <li>
            <a href="//chaoshi.tmall.com?acm=lb-tms-1289015-81300.1003.4.247689&amp;scm=1003.4.lb-tms-1289015-81300.OTHER_1_247689">天猫超市</a>
        </li>
        <li>
            <a href="//miao.tmall.com?acm=lb-tms-1289015-81300.1003.4.247689&amp;scm=1003.4.lb-tms-1289015-81300.OTHER_2_247689">喵鲜生</a>
        </li>
        <li>
            <a href="//new3c.tmall.com/?acm=lb-tms-1289015-81300.1003.4.247689&amp;scm=1003.4.lb-tms-1289015-81300.OTHER_3_247689">科技新品<i className="sn-sitemap-icon sn-sitemap-icon-new"></i> </a></li>
        <li>
            <a href="//www.tmall.com/wow/fushi/act/nvzhuangnew?acm=lb-tms-1289015-81300.1003.4.247689&amp;scm=1003.4.lb-tms-1289015-81300.OTHER_4_247689">女装新品<i className="sn-sitemap-icon  sn-sitemap-icon-hot "></i> </a></li>
        <li>
            <a href="//ku.tmall.com?acm=lb-tms-1289015-81300.1003.4.247689&amp;scm=1003.4.lb-tms-1289015-81300.OTHER_5_247689">酷玩街</a>
        </li>
        <li>
            <a href="//www.tmall.com/wow/fushi/act/neiyinew?acm=lb-tms-1289015-81300.1003.4.247689&amp;scm=1003.4.lb-tms-1289015-81300.OTHER_6_247689">内衣新品<i className="sn-sitemap-icon  sn-sitemap-icon-hot "></i> </a></li>
        <li>
            <a href="//mei.tmall.com/shiyong.htm?acm=lb-tms-1289015-81300.1003.4.247689&amp;scm=1003.4.lb-tms-1289015-81300.OTHER_7_247689">试美妆</a>
        </li>
        <li>
            <a href="//www.tmall.com/wow/fushi/act/sportsnew?acm=lb-tms-1289015-81300.1003.4.247689&amp;scm=1003.4.lb-tms-1289015-81300.OTHER_8_247689">运动新品</a>
        </li>
        <li>
            <a href="//www.tmall.com/wow/fushi/act/nanzhuangnew?acm=lb-tms-1289015-81300.1003.4.247689&amp;scm=1003.4.lb-tms-1289015-81300.OTHER_9_247689">时尚先生<i className="sn-sitemap-icon  sn-sitemap-icon-hot "></i> </a></li>
        <li>
            <a href="//baby.tmall.com?acm=lb-tms-1289015-81300.1003.4.247689&amp;scm=1003.4.lb-tms-1289015-81300.OTHER_11_247689">精明妈咪</a>
        </li>
        <li>
            <a href="//chi.tmall.com/?acm=lb-tms-1289015-81300.1003.4.247689&amp;scm=1003.4.lb-tms-1289015-81300.OTHER_12_247689">吃乐会<i className="sn-sitemap-icon sn-sitemap-icon-new"></i> </a></li>
        <li>
            <a href="//b.tmall.com/?acm=lb-tms-1289015-81300.1003.4.247689&amp;scm=1003.4.lb-tms-1289015-81300.OTHER_13_247689">企业采购</a>
        </li>
        <li>
            <a href="//vip.tmall.com/vip/index.htm?acm=lb-tms-1289015-81300.1003.4.247689&amp;scm=1003.4.lb-tms-1289015-81300.OTHER_14_247689">会员积分</a>
        </li>
        <li>
            <a href="//www.tmall.hk/?acm=lb-tms-1289015-81300.1003.4.247689&amp;scm=1003.4.lb-tms-1289015-81300.OTHER_15_247689">天猫国际</a>
        </li>
    </ul>
</div>
<div className="site-cont site-market"><h2>行业市场<span>Market</span></h2>
    <ul className="site-list">
        <li><a href="//mei.tmall.com">美妆</a></li>
        <li><a href="//3c.tmall.com">电器</a></li>
        <li><a href="//nvzhuang.tmall.com">女装<i className="sn-sitemap-icon  sn-sitemap-icon-hot "></i> </a></li>
        <li><a href="//nanzhuang.tmall.com">男装<i className="sn-sitemap-icon  sn-sitemap-icon-hot "></i> </a></li>
        <li><a href="//nvxie.tmall.com">女鞋</a></li>
        <li><a href="//nanxie.tmall.com">男鞋</a></li>
        <li><a href="//neiyi.tmall.com">内衣<i className="sn-sitemap-icon  sn-sitemap-icon-hot "></i> </a></li>
        <li><a href="//bag.tmall.com">箱包</a></li>
        <li><a href="//sports.tmall.com">运动</a></li>
        <li><a href="//baby.tmall.com">母婴</a></li>
        <li><a href="//jia.tmall.com">家装</a></li>
        <li><a href="//yao.tmall.com">医药</a></li>
        <li><a href="//food.tmall.com">食品</a></li>
        <li><a href="//dai.tmall.com/">配饰<i className="sn-sitemap-icon sn-sitemap-icon-new"></i></a></li>
        <li><a href="//car.tmall.com/">汽车</a></li>
    </ul>
</div>
<div className="site-cont site-brand"><h2>品牌风尚<span>Brand</span></h2>
    <ul className="site-list">
        <li><a href="//www.tmall.com/wow/brand/act/fashion">尚天猫</a></li>
        <li><a href="//brand.tmall.com/first.html">大牌街</a></li>
        <li><a href="//brand.tmall.com/second.htm">潮牌街</a></li>
        <li><a href="//brand.tmall.com/yuanChuang.htm">天猫原创</a></li>
        <li><a href="//www.tmall.com/wow/brand/act/goodbrand">什么牌子好</a></li>
    </ul>
</div>
<div className="site-cont site-help"><h2>服务指南<span>Help</span></h2>
    <ul className="site-list">
        <li>
            <a href="//service.tmall.com/support/tmall/tmallHelp.htm?acm=lb-tms-1289015-81320.1003.4.247717&amp;spm=3.7396704.2000b001.4.khKvah&amp;scm=1003.4.lb-tms-1289015-81320.OTHER_1_247717">帮助中心 </a>
        </li>
        <li><a href="//www.tmall.com/wow/seller/act/pinkong">品质保障 </a></li>
        <li><a href="//www.tmall.com/wow/seller/act/special-service">特色服务 </a></li>
        <li><a href="//www.tmall.com/wow/seller/act/seven-day">7天退换货 </a></li>
    </ul>
</div></div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
  </div>


    
    /* <div id="site-nav" style={{width:'100%',height:'32px',background:'#F2F2F2'}}>
     <p style={{height:'32px',lineHeight:'32px',display: 'inline-block'}}>
      <em style={{fontStyle:'normal'}}>欢迎来到知用慕课</em>
       <Link to="login" style={{paddingLeft: '20px'}}>请登录</Link>
        <a style={{ paddingLeft: '20px'}}>免费注册</a>
     </p>
        <ul style={{position: 'absolute', right: '0', top:'0',height:'32px',lineHeight:'32px'}}>
          <li style={{padding:'0 10px',float: 'left',position:'relative'}}><Icon type="appstore" /><a>我关注的学校</a></li>
          <li style={{padding:'0 10px',float: 'left',position:'relative'}}><Icon type="appstore" /><a>购物车0件</a></li>
          <li style={{padding:'0 10px',float: 'left',position:'relative'}}><Icon type="appstore" /><a>收藏夹</a></li>
         <li style={{padding:'0 10px',float: 'left',position:'relative'}}><Icon type="appstore" /><a>手机版</a></li>
         <li style={{padding:'0 10px',float: 'left',position:'relative'}}><Icon type="appstore" /><a>网站导航</a></li>
         
          </ul> 
     </div>*/
  );
};

Header.propTypes = {
};

export default Header;
