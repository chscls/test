import { Form, Icon, Input, Button, Checkbox } from 'antd';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  constructor(props) {
        super(props)
       
        
    }
  handleSubmit = (e) => {
    
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({loading:true});  
        const data= this.props.dispatch({
         type:'LoginUser/login',
         payload:{
            username:"zy001",
            password:"123456",
            loading:true,
            loginSuc:this.props.loginSuc
         }
         
        });
        
        
      }
      
    });
    
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    
    return (
      <Form onSubmit={this.handleSubmit} className="login-form" style={{maxWidth: '300px'}}>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入您的账号!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="账号" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入您的密码!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>记住密码</Checkbox>
          )}
          <a className="login-form-forgot" style={{float: 'right'}} href="">忘记密码</a>
          <Button loading={this.props.LoginUser.loading} type="primary" htmlType="submit" className="login-form-button" style={{width: '100%'}}>
            登录
          </Button>
          没有账号? <a href="">注册!</a>
        </FormItem>
      </Form>
    );
  }
}
NormalLoginForm.propTypes = {
};

function mapStateToProps({ LoginUser }) {
  return {LoginUser };
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
export default connect(mapStateToProps)(WrappedNormalLoginForm);

