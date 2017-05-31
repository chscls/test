import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './IndexPage.css';
import "antd/dist/antd.less";   // 引入官方提供的 less 样式入口文件

import Header from '../components/Header'


import Footer from '../components/Footer'
import IndexContent from '../components/IndexContent'
import Videojs from 'video.js'
import enUS from 'antd/lib/locale-provider/en_US';
import { Row, Col, LocaleProvider,Carousel } from 'antd';



class App extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount() {
   window.scrollTo(0,0);
  }
  render(){
    return(
      <LocaleProvider >
     <div>
         <Header/>

         

             {this.props.children|| <IndexContent/>}
        
    <Footer/>
     


      </div>
      </LocaleProvider>
    )
  }
}

function mapStateToProps({ common }) {
  return {common};
}
export default connect(mapStateToProps)(App);
