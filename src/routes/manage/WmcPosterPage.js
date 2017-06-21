import React from 'react';
import { connect } from 'dva';
import {Table,Icon} from 'antd';
import { Input,Button} from 'antd';
const Search = Input.Search;
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

  state = {
    selectedRowKeys: [],  // Check here to configure the default column
    loading: false,
  };
  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  }
  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }
  render(){
    let {data} = this.props.WmcPoster.list;
    let pagination = this.props.WmcPoster.pagination;
      const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (

      <div>
      <div style={{height:'50px',padding:'5px 5px',width:'100%'}}>
         <Button
            type="primary"
            onClick={this.start}
            disabled={!hasSelected}
            loading={loading}
          >
            删除
          </Button>
           <span style={{ marginLeft: 8 }}>
            {hasSelected ? `选中 ${selectedRowKeys.length} 个数据` : ''}
          </span>
           <Button style={{marginLeft:'5px',float:'right'}} type="primary" icon="search">搜索</Button>
         <Input style={{width:'200px',float:'right'}} placeholder="名称" />
        </div>
      <Table
       rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        pagination={pagination}
        onChange={this.handleTableChange.bind(this)}
        loading={loading}
         rowKey="id"
      />
      </div>
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
        token:this.props.LoginUser.user!=null?this.props.LoginUser.user.token:null,
        auth: function(){
              this.props.dispatch({
            type: 'LoginUser/showModal',
            payload: {
                visible: true,
                reg:false,
                path:"/Member/WmcPosterPage"
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
