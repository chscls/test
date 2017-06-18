import React from 'react';
import { connect } from 'dva';
import {Table,Icon} from 'antd';

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id'
  }, {
    title: '名称',
    dataIndex: 'title',
    key: 'title',
  },{
    title: '图片',
    dataIndex: 'img',
    key: 'img',
    render: text => <img style={{width:'100px'}} src={text}/>,
  },{
     title: '栏位名称',
    dataIndex: 'spaceName',
    key: 'spaceName',

  }, {
    title: '优先级',
    dataIndex: 'priority',
    key: 'priority',
  }, {
    title: '路径',
    dataIndex: 'url',
    key: 'url',
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
class WmcPosterPage extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    let {data,loading} = this.props.WmcPoster.list;
    let pagination = this.props.WmcPoster.pagination;
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
      type:'WmcPoster/changePage',
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
      type:'WmcPoster/fetchRemote',
      payload:{
        current:current,
        pageSize:10,
        loading:false,
        token:this.props.LoginUser.user.token
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
          name:'广告'
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
function mapStateToProps({ common,WmcPoster,LoginUser}) {
  return {common,WmcPoster,LoginUser};
}
export default connect(mapStateToProps)(WmcPosterPage);
