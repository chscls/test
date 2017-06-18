import React from 'react';
import { connect } from 'dva';
import {Table,Icon} from 'antd';

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id'
  }, {
    title: '关键字',
    dataIndex: 'keyword',
    key: 'keyword',
  }, {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
  }
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User',    // Column configuration not to be checked
  }),
};
class WmcPosterSpacePage extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    let {data,loading} = this.props.WmcPosterSpace.list;
    let pagination = this.props.WmcPosterSpace.pagination;
    return (
      <Table
       rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        pagination={pagination}
        onChange={this.handleTableChange.bind(this)}
        loading={loading}
        rowKey="id"
      />
    )
  }
  handleTableChange(pagination, filters, sorter){
    this.props.dispatch({
      type:'WmcPosterSpace/changePage',
      payload:{
        pagination:{
          current:pagination.current,
          pageSize:pagination.pageSize,
          showQuickJumper: true,
          loading:true
        }
      }
    });
    this.fetch(pagination.current)
  }
  fetch(current){
    // 更新列表
    
    this.props.dispatch({
      type:'WmcPosterSpace/fetchRemote',
      payload:{
        current:current,
        pageSize:10,
        loading:false,
        token:this.props.LoginUser.user!=null?this.props.LoginUser.user.token:null,
          auth: function(){
              this.props.dispatch({
            type: 'LoginUser/showModal',
            payload: {
                visible: true,
                reg:false,
            }

            });
        }.bind(this)
      }
    });
  }
  componentDidMount(){
    const breadcrumbData = {
      breadcrumb:[
        {
          name:'首页',
          path:'/'
        },{
          name:'管理'
        },{
          name:'广告版位'
        }
      ]
    };
    this.props.dispatch({
      type:'common/changeBreadcrumb',
      payload:breadcrumbData
    });
    this.fetch(1);
  }
}
function mapStateToProps({ common,WmcPosterSpace,LoginUser}) {
  return {common,WmcPosterSpace,LoginUser};
}
export default connect(mapStateToProps)(WmcPosterSpacePage);
