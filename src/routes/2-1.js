import React from 'react';
import { connect } from 'dva';
import { Pagination, LocaleProvider,DatePicker } from 'antd';
const { MonthPicker, RangePicker } = DatePicker;
class Option extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (<div><div>
    <DatePicker />
    <br />
    <MonthPicker  placeholder="Select month" />
    <br />
    <RangePicker />
  </div>
   <Pagination defaultCurrent={1} total={50} showSizeChanger />
    </div>)
  }
  componentDidMount(){
    const breadcrumbData = {
      breadcrumb:[
        {
          name:'首页',
          path:'/'
        },{
          name:'菜单二1'
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
