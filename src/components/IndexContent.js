import React, { Component, PropTypes } from 'react'
import { Icon } from 'antd'
import { Link } from 'dva/router'
import styles from '../routes/IndexPage.css'
import Activity2 from '../components/Activity2'
import { Carousel } from 'antd'
import Nav from '../components/Nav'
import LazyLoad from 'react-lazyload'
import { connect } from 'dva'
import LogoGather from '../components/LogoGather'
class IndexContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      detailShow: 'none',
      current: null
    }
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseOver = (e) => {
    var y = e.currentTarget;
    this.setState({
      detailShow: 'block',
      current: y.dataset.index
    })

    var x = y.parentNode.childNodes;




    for (var i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = "rgba(238, 238, 238, 0.952941)";
    }
    y.style.backgroundColor = "white";
  }

  handleMouseLeave = (e) => {
    this.setState({
      detailShow: 'none'
    })
    var x = document.getElementById("ctc").childNodes;




    for (var i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = "rgba(238, 238, 238, 0.952941)";
    }
  }
  getPosterList = (count) => {

    this.props.dispatch({
      type: 'Poster/getPosterList',
      payload: {
        count: count
      }

    });
  }
  getCatalogGroupList = (count) => {

    this.props.dispatch({
      type: 'CatalogGroup/getCatalogGroupList',
      payload: {
        count: count
      }

    });
  }
 
  componentDidMount() {

    this.getPosterList(5);
    this.getCatalogGroupList(12);

  }

  render() {
    /*获取当前选中目录组*/
    var currentNode = this.state.current != null ? this.props.CatalogGroup.catalogGroupList[this.state.current] : null;
    /*获取却换目录组*/
    var orgs  = currentNode == null ? null : currentNode.items.orgIds.map(function (o, index) {
        return( <Link key={o.id} title={o.name} to="School" className='logo' href=''><img style={{width:'75px',height:'75px'}} src={o.logo} /></Link>)
    })
    var content = currentNode == null ? null : currentNode.items.content.map(function (c, index) {

      var cts = c.ids.map(function (ct, index) {
        return (<Link key={ct.id} to="School" className='hot-word '>{ct.name}</Link>);
      });
      return (<div key={index} className='hot-word-line'>
        <div className='line-title'>
          <div className='title-text'>
            {c.name}
          </div><i className='fp-iconfont'></i>
        </div>

        <div className='line-con'>
          {cts}

          <div className='seprate clearfix'></div>
        </div>
      </div>);
    })
    /*获取海报*/
    var posterNodes = this.props.Poster.posterList.map(function (poster) {
      return (
        <div key={poster.id}>
          <a href={poster.url}>
            <img src={poster.img} style={{ width: '100%', height: '500px' }} />
          </a>
        </div>
      );
    });


    /*获取目录组顶层目录*/
    var cgs = this.props.CatalogGroup.catalogGroupList.map(function (catalogGroup, index) {
      var top = catalogGroup.items.top.map(function (to, index) {
        return (
          <Link key={to.id} to='Search'
            style={{ color: 'black' }}>{index == 1 ? "/" : ""}{to.name}
          </Link>
        );
      })
      return (
        <li data-index={index} key={catalogGroup.id} className='j_MenuNav nav-item nav-item-0 category-loaded' data-spm='category2016010' onMouseOver={this.handleMouseOver} >
          <Icon type={catalogGroup.icon} /><i className='dot fp-iconfont'></i>
          {top}
          <b className='arrow'></b>
        </li>
      );
    }.bind(this));

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
                  <a className='j_doodleLink' style={{ display: 'block', height: '100%', width: '100%' }} href=''>

                    <LogoGather />
                  </a>
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
                  <ul id="ctc" className='normal-nav clearfix'>
                    {cgs}
                  </ul>
                </div>
              </div>
              <div className='content-con j_categoryContent'>
                <div className='pannel-con j_CategoryMenuPannel' style={{ display: this.state.detailShow }}>
                  <div className='pannel-0'>
                    <div className='hot-word-con' data-spm='subpannel2016025'>

                      {content}
                    </div>
                  </div>
                  <div className='sub-logo-con'>
                    <div data-spm='subpannel2016026'>
                      {orgs}
                     
                    </div>
                    <div data-spm='subpannel2016027'>
                      <Link to="Search" className='activity clearfix' href='' title={currentNode!=null?currentNode.items.bigOrgId.name:""}><img src={currentNode!=null?currentNode.items.bigOrgId.logo:""} />
                        <div className='title'></div>
                        <div className='sub-title'></div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='banner-con j_mainBanner loading' data-spm='2016006' style={{ width: '1230px' }}>
                <div className='banner-slider j_bannerSlider' style={{ width: '1230px' }}>
                  {this.props.Poster.posterList.length > 0 ? (this.props.Poster.posterList.length == 1 ? posterNodes : <Carousel autoplay effect='fade'>{posterNodes}</Carousel>) : ""}
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
function mapStateToProps({ Poster, CatalogGroup }) {
  return { Poster, CatalogGroup };
}
export default connect(mapStateToProps)(IndexContent);


