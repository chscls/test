import React from 'react';
import { connect } from 'dva';
import { Table, Icon } from 'antd';
import { Input, Button, Modal, Form, Select, Upload, message } from 'antd';
const FormItem = Form.Item;
const Search = Input.Search;
const Option = Select.Option;
const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id'
  }, {
    title: '名称',
    dataIndex: 'title',
    key: 'title',
  }, {
    title: '图片',
    dataIndex: 'img',
    key: 'img',
    render: text => <img style={{ width: '100px' }} src={text} />,
  }, {
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
class WmcPosterPage extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    selectedRowKeys: [],  // Check here to configure the default column
    loading: false,
    visible: false
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
  add = () => {
    this.setState({ visible: true });
  }
  close = () => {
    this.setState({ visible: false });
  }
  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });


  }
  render() {
    let { data } = this.props.WmcPoster.list;
    let pagination = this.props.WmcPoster.pagination;
    const { loading, selectedRowKeys, visible, confirmLoading } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;

    return (

      <div>
        <div style={{ height: '50px', padding: '5px 5px', width: '100%' }}>
          <Button
            type="primary"
            onClick={this.add.bind(this)}
          >
            新增
          </Button>
          <Button style={{ marginLeft: '5px' }}
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
          <Button style={{ marginLeft: '5px', float: 'right' }} type="primary" icon="search">搜索</Button>
          <Input style={{ width: '200px', float: 'right' }} placeholder="名称" />
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



        <Modal title="新增版位"
          maskClosable={false}
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.close.bind(this)}
          width={"500px"}
        >
          <WrappedWmcPosterForm />
        </Modal>
      </div>
    )
  }
  handleTableChange(pagination, filters, sorter) {
    this.props.dispatch({
      type: 'WmcPoster/changePage',
      payload: {
        pagination: {
          current: pagination.current,
          pageSize: pagination.pageSize,
          showQuickJumper: true,
          loading: true
        }
      }
    });
    this.fetch(pagination.current)
  }

  fetch(current) {
    // 更新列表

    this.props.dispatch({
      type: 'WmcPoster/fetchRemote',
      payload: {
        current: current,
        pageSize: 10,
        loading: false,
        token: this.props.LoginUser.user != null ? this.props.LoginUser.user.token : null,
        auth: function () {
          this.props.dispatch({
            type: 'LoginUser/showModal',
            payload: {
              visible: true,
              reg: false,
              path: "/Member/WmcPosterPage"
            }

          });
        }.bind(this)
      }
    });
  }
  componentDidMount() {
    const breadcrumbData = {
      breadcrumb: [
        {
          name: '首页',
          path: '/'
        }, {
          name: '管理'
        }, {
          name: '广告'
        }
      ]
    };
    this.props.dispatch({
      type: 'common/changeBreadcrumb',
      payload: breadcrumbData
    });
    this.fetch(1);
  }
}
function mapStateToProps({ common, WmcPoster, LoginUser }) {
  return { common, WmcPoster, LoginUser };
}
export default connect(mapStateToProps)(WmcPosterPage);


function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    message.error('You can only upload JPG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJPG && isLt2M;
}
class WmcPosterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }


  handleChange = (info) => {
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => this.setState({ imageUrl }));
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    };
    const config = {
      rules: [{ type: 'object', required: true, message: 'Please select time!' }],
    };
    const rangeConfig = {
      rules: [{ type: 'array', required: true, message: 'Please select time!' }],
    };
    const imageUrl = this.state.imageUrl;
    return (<Form >



      <FormItem  {...formItemLayout} label="名称">
        {getFieldDecorator('title')(
          <Input type="text" />
        )}
      </FormItem>
      <FormItem  {...formItemLayout} label="路径">
        {getFieldDecorator('url')(
          <Input type="text" />
        )}
      </FormItem>
      <FormItem  {...formItemLayout} label="优先级">
        {getFieldDecorator('priority')(
          <Input type="text" />
        )}
      </FormItem>

      <FormItem
        label="版位"
        {...formItemLayout}
      >
        {getFieldDecorator('spaceId', {
          rules: [{ required: true, message: 'Please select your gender!' }],
        })(
          <Select
            placeholder="Select a option and change input text above"
            onChange={this.handleSelectChange}
          >
            <Option value="male">male</Option>
            <Option value="male2">male</Option>
            <Option value="male3">male</Option>
            <Option value="female33">female</Option>
            <Option value="female">female</Option>
            <Option value="female31">female</Option>
            <Option value="female32">female</Option>
            <Option value="female333">female</Option>
            <Option value="female3333">female</Option>
            <Option value="female3131313">female</Option>
            <Option value="female33333">female</Option>
          </Select>
          )}
      </FormItem>
      <FormItem>
        <Upload
          style={{
            margin: 'auto', display: 'block',
            border: '1px dashed #d9d9d9', width: '470px', height: '150px',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
          name="avatar"
          showUploadList={false}
          action="//jsonplaceholder.typicode.com/posts/"
          beforeUpload={beforeUpload}
          onChange={this.handleChange}
        >
          {
            imageUrl ?
              <img src={imageUrl} alt="" className="avatar" /> :
              <Icon type="plus" style={{
                display: 'table-cell',
                verticalAlign: 'middle', width: '470px', height: '150px',
                fontSize: '28px',
                color: '#999'
              }} />
          }
        </Upload>
      </FormItem>

    </Form>)
  }

}
function mapStateToProps2({ WmcPoster }) {
  return { WmcPoster };
}
const WrappedWmcPosterForm = Form.create()(WmcPosterForm)
connect(mapStateToProps2)(WrappedWmcPosterForm)
