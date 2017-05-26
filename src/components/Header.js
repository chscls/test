import React from 'react';
import { Icon } from 'antd';
import { Link } from 'dva/router';

const Header = (props) => {
  return (
     <div style={{width:'100%',height:'32px',background:'#F2F2F2'}}>
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
     </div>
  );
};

Header.propTypes = {
};

export default Header;
