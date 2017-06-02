import React from 'react';
import { connect } from 'dva';
import { Timeline,Icon } from 'antd';
class Option extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (<div><Timeline pending={<a href="#">See more</a>}>
    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }}/>}><div>android</div></Timeline.Item>
      <Timeline.Item ><div>ios</div></Timeline.Item>
      <Timeline.Item><div>Technical testing 2015-09-01</div></Timeline.Item>
  </Timeline></div>)
  }
  componentDidMount(){
    const breadcrumbData = {
      breadcrumb:[
        {
          name:'首页',
          path:'/'
        },{
          name:'我的课程'
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
