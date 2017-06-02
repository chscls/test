import React from 'react';
import { connect } from 'dva';
import {Switch,Icon} from 'antd';
class Option extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (<div> <Switch checkedChildren={'开'} unCheckedChildren={'关'} />
  <br />
  <Switch checkedChildren="1" unCheckedChildren="0" />
  <br />
  <Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="cross" />}  />
  </div>)
  }
  componentDidMount(){
    const breadcrumbData = {
      breadcrumb:[
        {
          name:'首页',
          path:'/'
        },{
          name:'设置'
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
