import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './IndexPage.css';
import "antd/dist/antd.less";   // 引入官方提供的 less 样式入口文件
import Silder from '../components/Silder'
import Header from '../components/Header'
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
