import React from 'react';
import { connect } from 'dva';
import { Table, Icon } from 'antd';
import { Input, Button, Slider, Modal, Form, Select, Upload, message } from 'antd';
import { getImgUrl } from '../../../utils/query';
import { rapHost } from '../../../config/config';

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
  handleOk = (e) => {
    var x = this.refs.WmcPosterForm.refs.wrappedComponent.refs.formWrappedComponent
    x.submit(e, (values) => {
      this.setState({

        confirmLoading: true,
      });
     
          this.props.dispatch({
            type: 'WmcPoster/savePoster',
            payload: {
              values: values,
              token: this.props.LoginUser.user != null ? this.props.LoginUser.user.token : null,
              back: () => {
                message.info('保存成功');
                this.setState({ visible: false, confirmLoading: false })
                 this.fetch(1);
              },
              auth: () => {
                this.props.dispatch({
                  type: 'LoginUser/showModal',
                  payload: {
                    visible: true,
                    reg: false,
                    path: "/Member/WmcPosterPage"
                  }

                });
              }

            }

          });

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
          <WrappedWmcPosterForm ref="WmcPosterForm" />
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
export default connect(mapStateToProps)(WmcPosterPage)



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
  submit = (e, callback) => {

    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        values.img = this.state.imageUrl;
        callback(values);
      }
    });
  }

  handleChange = (info) => {
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      this.setState({ imageUrl: info.file.response.body })
      // getBase64(info.file.originFileObj, imageUrl => this.setState({ imageUrl }));
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
        {getFieldDecorator('title', {
          rules: [{ required: true, message: 'Please select your gender!' }],
        })(
          <Input type="text" />
          )}
      </FormItem>
      <FormItem  {...formItemLayout} label="路径">
        {getFieldDecorator('url', {
          rules: [{ required: true, message: 'Please select your gender!' }],
        })(
          <Input type="text" />
          )}
      </FormItem>
      <FormItem  {...formItemLayout} label="优先级">
        {getFieldDecorator('priority')(
          <Slider min={1} max={100} />

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
            <Option value="1">male1</Option>
            <Option value="2">male2</Option>
            <Option value="3">male3</Option>
            <Option value="4">female4</Option>

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
          name="file"
          showUploadList={false}
          action={rapHost + "/WmcSiteSvc/upload"}
          beforeUpload={beforeUpload}
          onChange={this.handleChange}
        >
          {
            imageUrl ?
              <img style={{ width: '470px', height: '150px' }} src={getImgUrl(imageUrl)} alt="" className="avatar" /> :
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
WmcPosterForm.propTypes = {
};

const WrappedWmcPosterForm = Form.create({ withRef: true })(WmcPosterForm);

