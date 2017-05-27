import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import Silder from '../components/Silder'
import { Row, Col, LocaleProvider,Carousel } from 'antd';
import CustomBreadcrumb from '../components/breadcrumb'
const breadcrumbData = [
    {
      name:'首页',
      path:'/'
    },{
      name:'菜单21',
      path:'/21'
    }
];
class Login extends Component{
   constructor(props){
    super(props)
  }
  render(){
  return (
     <div style={{width:'100%',height:'32px'}}>
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
  );
};

}
function mapStateToProps({ common }) {
  return {common};
}
export default connect(mapStateToProps)(Login);

