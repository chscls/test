import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router'
import {Table,Icon,Menu} from 'antd';
import { Input,Button} from 'antd';
const Search = Input.Search;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
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
 state = {
    current: 'mail',
     selectedRowKeys: [],  // Check here to configure the default column
    loading: false,
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

 
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
    let {data} = this.props.WmcPosterSpace.list;
     const { loading, selectedRowKeys } = this.state;
    let pagination = this.props.WmcPosterSpace.pagination;
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
          >
            新增
          </Button>
         <Button style={{marginLeft:'5px'}}
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
