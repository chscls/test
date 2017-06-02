import React from 'react';
import { connect } from 'dva';
import {Progress} from 'antd';
class Option extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (<div><div>
    <Progress type="circle" percent={75} />
    <Progress type="circle" percent={70} status="exception" />
    <Progress type="circle" percent={100} />
  </div> <div>
    <Progress percent={30} />
    <Progress percent={50} status="active" />
    <Progress percent={70} status="exception" />
    <Progress percent={100} />
    <Progress percent={50} showInfo={false} />
  </div></div>)
  }
  componentDidMount(){
    const breadcrumbData = {
      breadcrumb:[
        {
          name:'首页',
          path:'/'
        }
      ]
    };
    this.props.dispatch({
      type:'common/changeBreadcrumb',
      payload:breadcrumbData
    })
  }
}
function mapStateToProps({ common }) {
  return {common};
}
export default connect(mapStateToProps)(Option);
