import React from 'react';
import { Icon } from 'antd';
import { Link } from 'dva/router';
import styles from '../routes/IndexPage.css';
const Header = (props) => {
  return (
     <div id="site-nav" className={styles.siteNav}>



<div id="sn-bg">
        <div className="sn-bg-right">
        </div>
    </div>
<div id="sn-bd">
        <b className="sn-edge"></b>
        <div className="sn-container">
            <p id="login-info" className="sn-login-info"><em>喵，欢迎来知用慕课</em><Link className="sn-login" to="login">请登录</Link>  <Link to="login" className="sn-register">免费注册</Link></p>
            <ul className="sn-quick-menu">
                <li className="sn-mytaobao menu-item j_MyTaobao">
                    <div className="sn-menu">
                        <a className="menu-hd" href="" target="_top" rel="nofollow" tabindex="0" aria-haspopup="true" aria-expanded="false">我的课程<b></b></a>
                        <div className="menu-bd" role="menu" aria-hidden="true" id="menu-20">
                            <div className="menu-bd-panel" id="myTaobaoPanel">
                                <a href="" target="_top" rel="nofollow">已学课程</a>
                                <a href="" target="_top" rel="nofollow">已教课程</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="sn-seller-center hidden j_SellerCenter">
                    <a target="_top" href="//mai.taobao.com/seller_admin.htm">商家中心</a>
                </li>
                <li className="sn-mybrand"><i className="mui-global-iconfont">㑉</i>
                    <a target="_top" id="J_SnMyBrand" className="sn-mybrand-link" href="//mybrand.tmall.com?scm=1048.1.1.1">我关注的学校</a>
                </li>
                <li className="sn-cart mini-cart menu"><i className="mui-global-iconfont">󰅈</i>
                    <a className="sn-cart-link" href="" target="_top" rel="nofollow" id="mc-menu-hd">购物车<span className="mc-count mc-pt3">0</span>件</a>
                </li>
                <li className="sn-favorite menu-item">
                    <div className="sn-menu">
                        <a className="menu-hd" href="" target="_top" rel="nofollow" tabindex="0" aria-haspopup="true" aria-expanded="false">收藏夹<b></b></a>

                        <div className="menu-bd" role="menu" aria-hidden="true" id="menu-22">
                            <div className="menu-bd-panel">
                                <a href="" target="_top" rel="nofollow">收藏的课程</a>
                                <a href="" target="_top" rel="nofollow">收藏的学校</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="sn-separator"></li>
                <li className="sn-mobile">
                    <i className="mui-global-iconfont">㑈</i>
                    <a title="知用移动" target="_top" className="sn-mobile-link" href="">手机版</a>
                </li>
                
              
               
            </ul>
        </div>
    </div>








     
          
     </div>
  );
};

Header.propTypes = {
};

export default Header;
