import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router'
import { Form, Row, Col, Input, Button, message } from 'antd';
const FormItem = Form.Item;

class WmcSiteView extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({ isEdit: false ,loading:false})
        
    }
    changeEdit = () => {
        this.setState({ isEdit: !this.state.isEdit})

    }

    handleSubmit = (e) => {

        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.setState({ loading: true });
                this.props.dispatch({
                    type: 'WmcSite/updateSite',
                    payload: {
                        name: this.props.form.getFieldValue("name"),
                        id: this.props.WmcSite.site.id,
                        back:()=>{
                            message.info('保存成功');
                            this.setState({isEdit:false,loading: false })
                        }
                        
                    }

                });


            }

        });

    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const config = {
            rules: [{ type: 'object', required: true, message: 'Please select time!' }],
        };
        const rangeConfig = {
            rules: [{ type: 'array', required: true, message: 'Please select time!' }],
        };
        return (
            <Form onSubmit={this.handleSubmit} layout="inline">
                <Row style={{ margin: '5px 0' }}>
                    <Button
                        type="primary"
                        onClick={this.changeEdit.bind(this)}
                    >
                        {this.state.isEdit ? "锁定" : "编辑" }
                    </Button>
                    {this.state.isEdit ? <Button loading={this.state.loading} style={{ marginLeft: '5px' }}
                        type="primary" onClick={this.handleSubmit.bind(this)}
                    >
                        保存
                </Button> : ""}
                </Row>
                <Row>
                    <Col span="12">


                        <FormItem  {...formItemLayout} label="站点id" ><Input disabled={true} type="text" value={this.props.WmcSite.site.id} /></FormItem>
                    </Col>
                    <Col span="12">

                        <FormItem  {...formItemLayout} label="站点名称">
                            {getFieldDecorator('name',{ initialValue: this.props.WmcSite.site.name })(
                                <Input disabled={!this.state.isEdit} type="text"  />
                            )}
                        </FormItem>

                        <FormItem   ></FormItem>
                    </Col>
                </Row>
            </Form>



        )
    }
    getSite = () => {

        this.props.dispatch({
            type: 'WmcSite/getSite',
            payload: {
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
                    name: '站点管理'
                }
            ]
        };
        this.props.dispatch({
            type: 'common/changeBreadcrumb',
            payload: breadcrumbData
        });
        this.getSite()
    }

}
function mapStateToProps({ common, WmcSite, LoginUser }) {
    return { common, WmcSite, LoginUser };
}
const WrappedWmcSiteView = Form.create()(WmcSiteView)
export default connect(mapStateToProps)(WrappedWmcSiteView);
