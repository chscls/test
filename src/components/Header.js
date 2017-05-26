import React from 'react';
import { Icon } from 'antd';
import { Link } from 'dva/router';
import styles from '../routes/IndexPage.css';
const Header = (props) => {
  return (
     <div id="site-nav" className={styles.siteNav}>
     <p className={styles.topLeftBar}>
      <em style={{fontStyle:'normal'}}>欢迎来到知用慕课</em>
       <Link to="login" style={{paddingLeft: '20px'}}>请登录</Link>
        <a style={{ paddingLeft: '20px'}}>免费注册</a>
     </p>
        <ul className={styles.topMenuGroup} >
          <li className={styles.topMenu} ><Icon type="appstore" /><a>我关注的学校</a></li>
          <li className={styles.topMenu}><Icon type="appstore" /><a>购物车0件</a></li>
          <li className={styles.topMenu}><Icon type="appstore" /><a>收藏夹</a></li>
         <li className={styles.topMenu}><Icon type="appstore" /><a>手机版</a></li>
         <li className={styles.topMenu}><Icon type="appstore" /><a>网站导航</a></li>
         
          </ul> 
     </div>
  );
};

Header.propTypes = {
};

export default Header;
