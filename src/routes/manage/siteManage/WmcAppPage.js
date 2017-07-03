import React from 'react';
import { connect } from 'dva';
import { Table, Icon } from 'antd';
import { Input, Button, Slider, Modal, Form, Select, Upload, message } from 'antd';
import { getImgUrl } from '../../../utils/query';
import { rapHost } from '../../../config/config';

const FormItem = Form.Item;
const Search = Input.Search;
const Option = Select.Option;
const NameSpace = "WmcApp";
const RoutePath = "/Member/SiteManage/WmcAppPage";
class WmcAppPage extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    selectedRowKeys: [],  // Check here to configure the default column
    loading: false,
    visible: false,
    selectObj: {},
    modalTitle: '新增'
  };
  delete = () => {

    this.setState({ loading: true });
    // ajax request after empty completing
    this.props.dispatch({
      type: NameSpace+'/delete',
      payload: {
        token: this.props.LoginUser.user != null ? this.props.LoginUser.user.token : null,
        ids: this.state.selectedRowKeys,
        back: (list) => {
          this.setState({ loading: false, selectedRowKeys: [] });
          this.fetch(1);
        },
        auth: () => {
          this.props.dispatch({
            type: 'LoginUser/showModal',
            payload: {
              visible: true,
              reg: false,
              path: RoutePath
            }

          });
        }

      }

    });
  }
  onSelectChange = (selectedRowKeys) => {
    this.setState({ selectedRowKeys });
  }
  
  close = () => {
    this.setState({ visible: false });
  }
  add = (e, index) => {
    this.setState({  visible: true, selectObj: index != null ? this.props.WmcApp.list.data[index] : null, modalTitle: index != null ? "编辑" : "新增" });
  }
  handleEdit = (e) => {
    this.add(e, e.target.dataset.index);
  }
  handleOk = (e) => {
    var x = this.refs.WrappedForm.refs.wrappedComponent.refs.formWrappedComponent
    x.submit(e, (values) => {
      this.setState({
        confirmLoading: true,
      });

      if (this.state.selectObj != null&&this.state.selectObj.id != null) {
        values.id = this.state.selectObj.id
      }

      this.props.dispatch({
        type: NameSpace+'/saveOrUpdate',
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
                path: RoutePath
              }

            });
          }

        }

      });

    });
  }

  render() {
     let { data } = this.props.WmcApp.list;
    let pagination = this.props.WmcApp.pagination;
    const columns = [
      {
        title: 'Id',
        dataIndex: 'id',
        key: 'id'
      }, {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: 'LOGO',
        dataIndex: 'logo',
        key: 'logo',
        render: text => <img style={{ width: '100px' }} src={getImgUrl(text)} />,
      }, {
        title: '优先级',
        dataIndex: 'priority',
        key: 'priority',
      }, {
        title: '路径',
        dataIndex: 'path',
        key: 'path',
      }, {
        title: '操作',
        dataIndex: '',
        key: 'edit',
        render: (text, record, index) => <a data-index={index} onClick={this.handleEdit.bind(this)}>编辑</a>
      },

    ];
    
   
    const { modalTitle, selectList, selectObj, loading, selectedRowKeys, visible, confirmLoading } = this.state;
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
            onClick={this.delete}
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



        <Modal title={modalTitle}
          maskClosable={false}
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.close.bind(this)}
          width={"500px"}
        >
          <WrappedForm ref="WrappedForm" selectObj={selectObj}  />
        </Modal>
      </div>
    )
  }
  handleTableChange(pagination, filters, sorter) {
    this.props.dispatch({
      type: 'WmcApp/changePage',
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
      type: 'WmcApp/fetchRemote',
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
          name: '应用'
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
function mapStateToProps({ common, WmcApp, LoginUser }) {
  return { common, WmcApp, LoginUser };
}
export default connect(mapStateToProps)(WmcAppPage)



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

class AddAndUpdateForm extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = { imageUrl: this.props.selectObj != null ? this.props.selectObj.logo : null }
  }
  submit = (e, callback) => {

    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (this.state.imageUrl == null) {
        message.info('请选择图片');
        return
         }
        values.logo = this.state.imageUrl;
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
    const imageUrl = this.state.imageUrl
    return (<Form >



      <FormItem  {...formItemLayout} label="名称">
        {getFieldDecorator('name', { initialValue: this.props.selectObj != null ? this.props.selectObj.name : '' }, {
          rules: [{ required: true, message: 'Please select your gender!' }],
        })(
          <Input type="text" />
          )}
      </FormItem>
      <FormItem  {...formItemLayout} label="路径">
        {getFieldDecorator('path', { initialValue: this.props.selectObj != null ? this.props.selectObj.path: '' }, {
          rules: [{ required: true, message: 'Please select your gender!' }],
        })(
          <Input type="text" />
          )}
      </FormItem>
      <FormItem  {...formItemLayout} label="优先级">
        {getFieldDecorator('priority', { initialValue: this.props.selectObj != null ? this.props.selectObj.priority : 1 })(
          <Slider min={1} max={100} />

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
AddAndUpdateForm.propTypes = {
};


const WrappedForm = Form.create({ withRef: true })(AddAndUpdateForm);

