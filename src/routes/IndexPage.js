import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './IndexPage.css';
import "antd/dist/antd.less";   // 引入官方提供的 less 样式入口文件
import Silder from '../components/Silder'
import Header from '../components/Header'
import Nav from '../components/Nav'
import { Carousel } from 'antd';
import CustomBreadcrumb from '../components/breadcrumb'
import Videojs from 'video.js'

import { Row, Col } from 'antd';

const breadcrumbData = [
    {
      name:'首页',
      path:'/'
    },{
      name:'菜单21',
      path:'/21'
    }
];

class App extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
     <div>
         <Header/>
<Nav/>
           <div id="content">
<div className="main-nav" data-spm="2016004">
	<div className="inner-con0">
		<div className="inner-con1">
			<div className="inner-con2 clearfix">
				<a href="//chaoshi.tmall.com/?acm=lb-zebra-148799-667861.1003.4.1266918&amp;scm=1003.4.lb-zebra-148799-667861.OTHER_14561837688591_1266918" aria-label="天猫超市">			
						<img alt="" src="//img.alicdn.com/tps/i2/TB1xgT8LVXXXXaZXFXX8ueZHFXX-180-72.png"/>
					<div className="hover-pic"></div>
				</a>
        <a href="//3c.tmall.com/?acm=lb-zebra-148799-667861.1003.4.1266918&amp;scm=1003.4.lb-zebra-148799-667861.OTHER_14561822298635_1266918">
						农业
					<div className="hover-pic"></div>
				</a>
			</div>
		</div>
	</div>
</div>
<div className="j_category category-con">
	<div className="category-inner-con j_categoryInnerCon j_categoryTab">
<div className="j_logo logo-con" data-spm="2015002"><div className="doodle-con j_doodleCon"><a className="j_doodleLink" style={{display:'block',height:'100%',width:'100%'}} href="//lenovo.tmall.com/campaign-3734-28.htm?pos=1&amp;acm=201603169.1003.2.1776914&amp;scm=1003.2.201603169.ITEM_1495066068192_1776914"><img className="doodle hide j_doodle" src="https://img.alicdn.com/tfs/TB1uIlNRpXXXXb2apXXXXXXXXXX-290-130.gif" data-src="https://img.alicdn.com/tfs/TB1uIlNRpXXXXb2apXXXXXXXXXX-290-130.gif"/></a></div></div>

    <div className="category-type">
        <i className="fp-iconfont"></i>
        <div className="text">课程分类</div>
    </div>

<div className="category-tab-content">
    <div className="nav-con j_tabPannel category-tab-pannel pannel-normal">
        <ul className="normal-nav clearfix">
            
            <li className="j_MenuNav nav-item nav-item-0 category-loaded" data-spm="category2016010">
                <i className="fp-iconfont nav-item-icon icon"></i><i className="dot fp-iconfont"></i>
                <a href="//nvzhuang.tmall.com/?acm=lb-zebra-148799-667863.1003.8.708026&amp;scm=1003.8.lb-zebra-148799-667863.ITEM_14561681423980_708026">川菜</a>
                
                    /<a href="//neiyi.tmall.com/?acm=lb-zebra-148799-667863.1003.8.708026&amp;scm=1003.8.lb-zebra-148799-667863.ITEM_14561681423980_708026">农业</a>
                
                
                <b className="arrow"></b>
            </li>
            
            <li className="j_MenuNav nav-item nav-item-1 category-loaded" data-spm="category2016011">
                <i className="fp-iconfont nav-item-icon icon"></i><i className="dot fp-iconfont"></i>
                <a href="//nanzhuang.tmall.com/?acm=lb-zebra-148799-667863.1003.8.708026&amp;scm=1003.8.lb-zebra-148799-667863.ITEM_14561677576501_708026">医学</a>
                
                    /<a href="//sports.tmall.com/?acm=lb-zebra-148799-667863.1003.8.708026&amp;scm=1003.8.lb-zebra-148799-667863.ITEM_14561677576501_708026">护理</a>
                
                
                <b className="arrow"></b>
            </li>
        </ul>
    </div>
    
</div>

</div>
</div>

             </div>
     <Carousel autoplay effect="fade">
    <div><img  src="http://img.mukewang.com/5926501b000111f012000460.jpg" style={{width:'100%',height:'400px'}}/></div>
    <div><img  src="http://img.mukewang.com/592177a8000180ca12000460.jpg" style={{width:'100%',height:'400px'}}/></div>
    <div><img  src="http://img.mukewang.com/59278d45000173ba12000460.jpg" style={{width:'100%',height:'400px'}}/></div>
    <div><img  src="http://img.mukewang.com/591d825f00016a2612000460.jpg" style={{width:'100%',height:'400px'}}/></div>
  </Carousel>
      <Row style={{width:'100%',margin:'0 auto'}}>
        <Col span={24}>
       
          <CustomBreadcrumb data={this.props.common.breadcrumb} />
        </Col>
        <Col span={6}>
          <Silder />
        </Col>
        <Col span={18}>
          {this.props.children||'内容区域'}
        </Col>
      </Row>
      </div>
    )
  }
}

function mapStateToProps({ common }) {
  return {common};
}
export default connect(mapStateToProps)(App);
