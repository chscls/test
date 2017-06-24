import React from 'react';
import { connect } from 'dva';
import { Table, Icon } from 'antd';
import { Input, Button, Slider,Modal, Form, Select, Upload, message } from 'antd';
import {getImgUrl}from '../utils/query.js'
import {rapHost} from '../config/config.js'
const FormItem = Form.Item;
const Search = Input.Search;
const Option = Select.Option;
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
submit22=function(){
  alert("XXXXXXXXXX");
}

  handleChange = (info) => {
    if (info.file.status === 'done') {
      // Get this url from response in real world.
     this.setState({ imageUrl:info.file.response.body })
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
          <Slider min={1} max={100}  />
          
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
          name="file"
          showUploadList={false}
          action={rapHost+"/WmcSiteSvc/upload"}
          beforeUpload={beforeUpload}
          onChange={this.handleChange}
        >
          {
            imageUrl ?
              <img style={{width:'470px',height:'150px'}} src={getImgUrl(imageUrl)} alt="" className="avatar" /> :
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
function mapStateToProps({ WmcPoster }) {
  return { WmcPoster };
}
const WrappedWmcPosterForm = Form.create({ withRef: true })(WmcPosterForm);
connect(mapStateToProps)(WrappedWmcPosterForm)
export default WrappedWmcPosterForm;
