import React, { Component, PropTypes } from 'react'
import { Icon } from 'antd'
import { Link } from 'dva/router'
import styles from '../routes/IndexPage.css'
import Activity2 from '../components/Activity2'
import { Carousel } from 'antd'
import Nav from '../components/Nav'
class IndexContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      detailShow: 'none',
    }
  }

  handleMouseOver = (e) => {
    this.setState({
      detailShow: 'block',

    })
   var y = e.currentTarget;
    var x= y.parentNode.childNodes;
    
     
   
    
 for(var i=0;i<x.length;i++){
x[i].style.backgroundColor = "rgba(238, 238, 238, 0.952941)";
}
 y.style.backgroundColor = "white";
  }
   
  handleMouseLeave = (e) => {
    this.setState({
      detailShow: 'none'
    })

  }
  
  render() {
    return (
      <div>
        <Nav />
        <div id='content'>
          <div className='main-nav' data-spm='2016004'>
            <div className='inner-con0'>
              <div className='inner-con1'>
                <div className='inner-con2 clearfix'>
                  <Link to='Questions' aria-label=''> 资源
                  <div className='hover-pic'></div>
                  </Link>
                  <Link to='Questions'> 题库
                  <div className='hover-pic'></div>
                  </Link>
                  <Link to='Questions'> 直播
                  <div className='hover-pic'></div>
                  </Link>
                  <Link to='Questions'> 答疑
                  <div className='hover-pic'></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='j_category category-con' onMouseLeave={this.handleMouseLeave}>
            <div className='category-inner-con j_categoryInnerCon j_categoryTab'>
              <div className='j_logo logo-con' data-spm='2015002'>
                <div className='doodle-con j_doodleCon'>
                  <a className='j_doodleLink' style={{ display: 'block', height: '100%', width: '100%' }} href=''><img className='doodle hide j_doodle' src='123.gif' data-src='123.gif' /></a>
                </div>
              </div>
              <div className='category-type'>
                <i className='fp-iconfont'></i>
                <div className='text'>
                  课程分类
                </div>
              </div>
              <div className='category-tab-content'  >
                <div className='nav-con j_tabPannel category-tab-pannel pannel-normal'>
                  <ul className='normal-nav clearfix'>
                    <li className='j_MenuNav nav-item nav-item-0 category-loaded' data-spm='category2016010' onMouseOver={this.handleMouseOver} >
                      <i className='fp-iconfont nav-item-icon icon'></i><i className='dot fp-iconfont'></i>
                      <Link to='Search'
                        style={{ color: 'black' }} href=''> 农林牧渔
                      </Link>
                      /
                      <Link to='Search'
                        style={{ color: 'black' }} href=''> 交通运输
                      </Link>
                      <b className='arrow'></b>
                    </li>
                    <li className='j_MenuNav nav-item nav-item-1 category-loaded' data-spm='category2016011' onMouseOver={this.handleMouseOver} >
                      <i className='fp-iconfont nav-item-icon icon'></i><i className='dot fp-iconfont'></i>
                      <Link to='Search'
                        style={{ color: 'black' }} href=''> 生化药品
                      </Link>
                      /
                      <Link to='Search'
                        style={{ color: 'black' }} href=''> 资源开发测绘
                      </Link>
                      <Link className='arrow'></Link>
                    </li>
                    <li className='j_MenuNav nav-item nav-item-1 category-loaded' data-spm='category2016011' onMouseOver={this.handleMouseOver} >
                      <i className='fp-iconfont nav-item-icon icon'></i><i className='dot fp-iconfont'></i>
                      <Link style={{ color: 'black' }}
                        href=''> 材料能源
                      </Link>
                      /
                      <Link to='Search'
                        style={{ color: 'black' }} href=''> 土建
                      </Link>
                      <b className='arrow'></b>
                    </li>
                    <li className='j_MenuNav nav-item nav-item-1 category-loaded' data-spm='category2016011' onMouseOver={this.handleMouseOver} >
                      <i className='fp-iconfont nav-item-icon icon'></i><i className='dot fp-iconfont'></i>
                      <Link to='Search'
                        style={{ color: 'black' }} href=''> 水利
                      </Link>
                      /
                      <Link to='Search'
                        style={{ color: 'black' }} href=''> 制造
                      </Link>
                      <b className='arrow'></b>
                    </li>
                    <li className='j_MenuNav nav-item nav-item-1 category-loaded' data-spm='category2016011' onMouseOver={this.handleMouseOver} >
                      <i className='fp-iconfont nav-item-icon icon'></i><i className='dot fp-iconfont'></i>
                      <Link to='Search'
                        style={{ color: 'black' }} href=''> 电子信息
                      </Link>
                      /
                      <Link to='Search'
                        style={{ color: 'black' }} href=''> 环保气象安全
                      </Link>
                      <b className='arrow'></b>
                    </li>
                    <li className='j_MenuNav nav-item nav-item-1 category-loaded' data-spm='category2016011' onMouseOver={this.handleMouseOver} >
                      <i className='fp-iconfont nav-item-icon icon'></i><i className='dot fp-iconfont'></i>
                      <Link to='Search'
                        style={{ color: 'black' }} href=''> 轻纺食品
                      </Link>
                      /
                      <Link to='Search'
                        style={{ color: 'black' }} href=''> 财经
                      </Link>
                      <b className='arrow'></b>
                    </li>
                    <li className='j_MenuNav nav-item nav-item-1 category-loaded' data-spm='category2016011' onMouseOver={this.handleMouseOver} >
                      <i className='fp-iconfont nav-item-icon icon'></i><i className='dot fp-iconfont'></i>
                      <Link to='Search'
                        style={{ color: 'black' }} href=''> 医药卫生
                      </Link>
                      /
                      <Link to='Search' style={{ color: 'black' }} href=''> 旅游
                      </Link>
                      <b className='arrow'></b>
                    </li>
                    <li className='j_MenuNav nav-item nav-item-1 category-loaded' data-spm='category2016011' onMouseOver={this.handleMouseOver} >
                      <i className='fp-iconfont nav-item-icon icon'></i><i className='dot fp-iconfont'></i>
                      <Link to='Search'
                        style={{ color: 'black' }} href=''> 公共事业
                      </Link>
                      /
                      <Link to='Search'
                        style={{ color: 'black' }} href=''> 文化教育
                      </Link>
                      <b className='arrow'></b>
                    </li>
                    <li className='j_MenuNav nav-item nav-item-1 category-loaded' data-spm='category2016011' onMouseOver={this.handleMouseOver} >
                      <i className='fp-iconfont nav-item-icon icon'></i><i className='dot fp-iconfont'></i>
                      <Link to='Search'
                        style={{ color: 'black' }} href=''> 艺术设计传媒
                      </Link>
                      /
                      <Link to='Search'
                        style={{ color: 'black' }} href=''> 公安
                      </Link>
                      <b className='arrow'></b>
                    </li>
                    <li className='j_MenuNav nav-item nav-item-1 category-loaded' data-spm='category2016011' onMouseOver={this.handleMouseOver} >
                      <i className='fp-iconfont nav-item-icon icon'></i><i className='dot fp-iconfont'></i>
                      <Link to='Search'
                        style={{ color: 'black' }} href=''> 法律
                      </Link>
                      /
                      <Link to='Search'
                        style={{ color: 'black' }} href=''> 其他
                      </Link>
                      <b className='arrow'></b>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='content-con j_categoryContent'>
                <div className='pannel-con j_CategoryMenuPannel' style={{ display: this.state.detailShow }}>
                  <div className='pannel-0'>
                    <div className='hot-word-con' data-spm='subpannel2016025'>
                      <div className='hot-word-line'>
                        <div className='line-title'>
                          <div className='title-text'>
                            养殖业
                          </div><i className='fp-iconfont'></i>
                        </div>
                        <div className='line-con'>
                          <Link to="School" className='hot-word highlight ' href=''>养鸡</Link>
                          <Link to="School"className='hot-word ' href=''>养鸭</Link>
                          <div className='seprate clearfix'></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='sub-logo-con'>
                    <div data-spm='subpannel2016026'>
                      <Link to="School" className='logo' href=''><img src='100.jpg' /></Link>
                      <Link to="School" className='logo' href=''><img src='//img.alicdn.com/bao/uploaded/i4/T1gRqVXk4fXXb1upjX.jpg_170x120q30.jpg' /></Link>
                      <Link to="School" className='logo' href=''><img src='//img.alicdn.com/bao/uploaded/TB1wNJAHFXXXXc7XpXXSutbFXXX.jpg_170x120q30.jpg' /></Link>
                    </div>
                    <div data-spm='subpannel2016027'>
                      <Link to="Search" className='activity clearfix' href=''><img src='https://img.alicdn.com/tps/TB1xnkQKVXXXXaJXXXXXXXXXXXX-378-174.jpg' />
                        <div className='title'></div>
                        <div className='sub-title'></div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='banner-con j_mainBanner loading' data-spm='2016006' style={{ width: '1230px' }}>
                <div className='banner-slider j_bannerSlider' style={{ width: '1230px' }}>
                  <Carousel autoplay effect='fade'>
                    <div>
                      <Link to='Course'>
                        <img src='http://img.mukewang.com/5926501b000111f012000460.jpg' style={{ width: '100%', height: '500px' }} />
                      </Link>
                    </div>
                    <div>
                      <Link to='Course'>
                        <img src='http://img.mukewang.com/592177a8000180ca12000460.jpg' style={{ width: '100%', height: '500px' }} />
                      </Link>
                    </div>
                    <div>
                      <Link to='Course'>
                        <img src='http://img.mukewang.com/59278d45000173ba12000460.jpg' style={{ width: '100%', height: '500px' }} />
                      </Link>
                    </div>
                    <div>
                      <Link to='Course'>
                        <img src='http://img.mukewang.com/591d825f00016a2612000460.jpg' style={{ width: '100%', height: '500px' }} />
                      </Link>
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
          <Activity2 />
        </div>
      </div>)
  }
}

IndexContent.propTypes = {
}

export default IndexContent
