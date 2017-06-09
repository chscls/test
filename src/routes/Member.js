import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import CustomBreadcrumb from '../components/breadcrumb'
import Header from '../components/Header'
import Silder from '../components/Silder'
import { getLocalStorage, setLocalStorage } from '../utils/helper';
const { SubMenu } = Menu;
const { LocaleProvider, Content, Footer, Sider } = Layout;
import { browserHistory } from 'react-router'

const breadcrumbData = [
    {
      name:'首页',
      path:'/'
    },{
      name:'菜单21',
      path:'/21'
    }
];
class Member extends Component{
   constructor(props){
    super(props)
    if(getLocalStorage("user")==null){
      browserHistory.push('/')
   
    }
  }
  
  componentDidMount() {
   window.scrollTo(0,0);
  }
  
  getHeight(){
    return window.screen.availHeight-250
  }
render(){
return ( <Layout>
   
   
    <Content style={{ padding: '0 50px' }}>
     
      <Layout style={{ padding: '24px 0', background: '#fff' }}>
        <Sider width={200} style={{ background: '#fff' }}>
           <Silder />
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: this.getHeight() }}>
           <CustomBreadcrumb data={this.props.common.breadcrumb} />
           <div style={{marginTop:'20px'}}> {this.props.children||'内容区域'}</div>
        </Content>
      </Layout>
    </Content>
    
  </Layout>)


}


};


function mapStateToProps({ common }) {
  return {common};
}
export default connect(mapStateToProps)(Member);