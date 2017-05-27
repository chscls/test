import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './IndexPage.css';
import "antd/dist/antd.less";   // 引入官方提供的 less 样式入口文件
import Silder from '../components/Silder'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Activity2 from '../components/Activity2'

import CustomBreadcrumb from '../components/breadcrumb'
import Videojs from 'video.js'
import enUS from 'antd/lib/locale-provider/en_US';
import { Row, Col, LocaleProvider,Carousel } from 'antd';

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
      <LocaleProvider >
     <div>
         <Header/>
          <Nav/>
           <div id="content">
<div className="main-nav" data-spm="2016004">
	<div className="inner-con0">
		<div className="inner-con1">
			<div className="inner-con2 clearfix">
				<a href="//chaoshi.tmall.com/?acm=lb-zebra-148799-667861.1003.4.1266918&amp;scm=1003.4.lb-zebra-148799-667861.OTHER_14561837688591_1266918" aria-label="天猫超市">			
						资源
					<div className="hover-pic"></div>
				</a>
        <a href="//3c.tmall.com/?acm=lb-zebra-148799-667861.1003.4.1266918&amp;scm=1003.4.lb-zebra-148799-667861.OTHER_14561822298635_1266918">
						题库
					<div className="hover-pic"></div>
				</a>
        <a href="//3c.tmall.com/?acm=lb-zebra-148799-667861.1003.4.1266918&amp;scm=1003.4.lb-zebra-148799-667861.OTHER_14561822298635_1266918">
						直播
					<div className="hover-pic"></div>
				</a>
        <a href="//3c.tmall.com/?acm=lb-zebra-148799-667861.1003.4.1266918&amp;scm=1003.4.lb-zebra-148799-667861.OTHER_14561822298635_1266918">
						答疑
					<div className="hover-pic"></div>
				</a>
			</div>
		</div>
	</div>
</div>



<div className="j_category category-con">
	<div className="category-inner-con j_categoryInnerCon j_categoryTab">
  <div className="j_logo logo-con" data-spm="2015002"><div className="doodle-con j_doodleCon"><a className="j_doodleLink" style={{display:'block',height:'100%',width:'100%'}} href="//lenovo.tmall.com/campaign-3734-28.htm?pos=1&amp;acm=201603169.1003.2.1776914&amp;scm=1003.2.201603169.ITEM_1495066068192_1776914"><img className="doodle hide j_doodle" src="123.gif" data-src="123.gif"/></a></div></div>

    <div className="category-type">
        <i className="fp-iconfont"></i>
        <div className="text">课程分类</div>
    </div>

<div className="category-tab-content">
    <div className="nav-con j_tabPannel category-tab-pannel pannel-normal">
        <ul className="normal-nav clearfix">
            
            <li className="j_MenuNav nav-item nav-item-0 category-loaded" data-spm="category2016010">
                <i className="fp-iconfont nav-item-icon icon"></i><i className="dot fp-iconfont"></i>
                <a style={{color:'black'}} href="">	农林牧渔</a>
                
                    /<a style={{color:'black'}} href="">交通运输</a>
                
                
                <b className="arrow"></b>
            </li>
            
            <li className="j_MenuNav nav-item nav-item-1 category-loaded" data-spm="category2016011">
                <i className="fp-iconfont nav-item-icon icon"></i><i className="dot fp-iconfont"></i>
                <a style={{color:'black'}} href="">生化药品</a>
                
                    /<a style={{color:'black'}} href="">资源开发测绘</a>
                
                
                <b className="arrow"></b>
            </li>
            <li className="j_MenuNav nav-item nav-item-1 category-loaded" data-spm="category2016011">
                <i className="fp-iconfont nav-item-icon icon"></i><i className="dot fp-iconfont"></i>
                <a style={{color:'black'}} href="">材料能源</a>
                
                    /<a style={{color:'black'}} href="">土建</a>
                
                
                <b className="arrow"></b>
            </li>
              <li className="j_MenuNav nav-item nav-item-1 category-loaded" data-spm="category2016011">
                <i className="fp-iconfont nav-item-icon icon"></i><i className="dot fp-iconfont"></i>
                <a style={{color:'black'}} href="">水利</a>
                
                    /<a style={{color:'black'}} href="">制造</a>
                
                
                <b className="arrow"></b>
            </li>
          
             <li className="j_MenuNav nav-item nav-item-1 category-loaded" data-spm="category2016011">
                <i className="fp-iconfont nav-item-icon icon"></i><i className="dot fp-iconfont"></i>
                <a style={{color:'black'}} href="">电子信息</a>
                
                    /<a style={{color:'black'}} href="">环保气象安全</a>
                
                
                <b className="arrow"></b>
            </li>
             <li className="j_MenuNav nav-item nav-item-1 category-loaded" data-spm="category2016011">
                <i className="fp-iconfont nav-item-icon icon"></i><i className="dot fp-iconfont"></i>
                <a style={{color:'black'}} href="">轻纺食品</a>
                
                    /<a style={{color:'black'}} href="">	财经</a>
                
                
                <b className="arrow"></b>
            </li>
            <li className="j_MenuNav nav-item nav-item-1 category-loaded" data-spm="category2016011">
                <i className="fp-iconfont nav-item-icon icon"></i><i className="dot fp-iconfont"></i>
                <a style={{color:'black'}} href="">医药卫生</a>
                
                    /<a style={{color:'black'}} href="">	旅游</a>
                
                
                <b className="arrow"></b>
            </li>
                <li className="j_MenuNav nav-item nav-item-1 category-loaded" data-spm="category2016011">
                <i className="fp-iconfont nav-item-icon icon"></i><i className="dot fp-iconfont"></i>
                <a style={{color:'black'}} href="">公共事业</a>
                
                    /<a style={{color:'black'}} href="">	文化教育</a>
                
                
                <b className="arrow"></b>
            </li>
               <li className="j_MenuNav nav-item nav-item-1 category-loaded" data-spm="category2016011">
                <i className="fp-iconfont nav-item-icon icon"></i><i className="dot fp-iconfont"></i>
                <a style={{color:'black'}} href="">艺术设计传媒</a>
                
                    /<a style={{color:'black'}} href="">公安</a>
                
                
                <b className="arrow"></b>
            </li>
             <li className="j_MenuNav nav-item nav-item-1 category-loaded" data-spm="category2016011">
                <i className="fp-iconfont nav-item-icon icon"></i><i className="dot fp-iconfont"></i>
                <a style={{color:'black'}} href="">法律</a>
                
                    /<a style={{color:'black'}} href="">其他</a>
                
                
                <b className="arrow"></b>
            </li>
        </ul>
    </div>
    
</div>


<div className="content-con j_categoryContent">
    <div className="pannel-con j_CategoryMenuPannel" style={{display: 'none'}}><div className="pannel-0">
  <div className="hot-word-con" data-spm="subpannel2016025">
    
      <div className="hot-word-line">
        <div className="line-title">
          <div className="title-text">当季流行</div><i className="fp-iconfont"></i>
        </div>
        <div className="line-con">
              <a className="hot-word  highlight " href="https://list.tmall.com/search_product.htm?new=1&amp;q=%CC%EC%C3%A8%C5%AE%D7%B0&amp;pos=2&amp;style=g&amp;from=.list.pc_1_searchbutton&amp;acm=2016031463.1003.2.1398732&amp;search_condition=48&amp;sort=s&amp;shopType=any&amp;scm=1003.2.2016031463.OTHER_1496306406551_1398732">夏季新品</a>
            
              <a className="hot-word " href="https://list.tmall.com/search_product.htm?q=%B4%AC%CD%E0+%C5%AE&amp;spm=a220m.1000858.a2227oh.d100&amp;pos=12&amp;from=.list.pc_1_searchbutton&amp;acm=2016031463.1003.2.1398732&amp;type=p&amp;scm=1003.2.2016031463.OTHER_1493288070515_1398732">百搭船袜</a>
        <div className="seprate clearfix"></div>
          
        </div>

      </div>
    </div>
    </div>


  <div className="sub-logo-con">
    <div data-spm="subpannel2016026">
    
        <a className="logo" href="https://goelia.tmall.com/shop/view_shop.htm?spm=a220m.1000862.1000730.3.3KBpcC&amp;user_number_id=133006562&amp;pos=1&amp;acm=2016022913.1003.2.709009&amp;rn=99a403f2b2463b658523cb6694775b4a&amp;scm=1003.2.2016022913.OTHER_1481821973536_709009">
          <img src="//img.alicdn.com/bao/uploaded/TB1B_DcJpXXXXXWXFXXSutbFXXX.jpg_170x120q30.jpg"/>
        </a>
    
        <a className="logo" href="https://metersbonwe.tmall.com/shop/view_shop.htm?spm=a220m.1000862.1000730.3.REt9sA&amp;user_number_id=134363478&amp;pos=2&amp;acm=2016022913.1003.2.709009&amp;rn=b8a6a2d2216c7e00de44f71ed9894bcb&amp;scm=1003.2.2016022913.OTHER_1483508856009_709009">
          <img src="//img.alicdn.com/bao/uploaded/i4/T1gRqVXk4fXXb1upjX.jpg_170x120q30.jpg"/>
        </a>
    
        <a className="logo" href="https://olrain.tmall.com/shop/view_shop.htm?spm=a220m.1000862.1000730.3.o3sm9O&amp;user_number_id=758392199&amp;pos=3&amp;acm=2016022913.1003.2.709009&amp;rn=ccafa3b45dc79bdc53a8f3f342c585f8&amp;scm=1003.2.2016022913.OTHER_1480239037214_709009">
          <img src="//img.alicdn.com/bao/uploaded/TB1wNJAHFXXXXc7XpXXSutbFXXX.jpg_170x120q30.jpg"/>
        </a>
    
       
    </div>
    <div data-spm="subpannel2016027">
    
      
      <a className="activity clearfix" href="https://nvzhuang.tmall.com/?pos=1&amp;acm=201603010.1003.2.708961&amp;scm=1003.2.201603010.OTHER_1483238608900_708961">
        <img src="https://img.alicdn.com/tps/TB1xnkQKVXXXXaJXXXXXXXXXXXX-378-174.jpg"/>
        <div className="title"></div>
        <div className="sub-title"></div>
      </a>
      
    
    </div>
  </div>


</div>
</div>


<div className="banner-con j_mainBanner loading" data-spm="2016006" style={{width:'1230px'}}>

<div className="banner-slider j_bannerSlider" style={{width:'1230px'}}>
 <Carousel autoplay effect="fade"  >
    <div><img  src="http://img.mukewang.com/5926501b000111f012000460.jpg" style={{width:'100%',height:'500px'}}/></div>
    <div><img  src="http://img.mukewang.com/592177a8000180ca12000460.jpg" style={{width:'100%',height:'500px'}}/></div>
    <div><img  src="http://img.mukewang.com/59278d45000173ba12000460.jpg" style={{width:'100%',height:'500px'}}/></div>
    <div><img  src="http://img.mukewang.com/591d825f00016a2612000460.jpg" style={{width:'100%',height:'500px'}}/></div>
  </Carousel>
  </div>

  </div>

    </div>



</div>

<Activity2/>

             </div>
    
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
      </LocaleProvider>
    )
  }
}

function mapStateToProps({ common }) {
  return {common};
}
export default connect(mapStateToProps)(App);
