import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router'
import { Form, Row, Col, Input, Button } from 'antd';
const FormItem = Form.Item;

class WmcSiteView extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({ isEdit: false, text: "编辑" })
    }
    changeEdit = () => {
        this.setState({ isEdit: !this.state.isEdit, text: this.state.text == "编辑" ? "锁定" : "编辑" })

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
                  <Row style={{margin:'5px 0'}}>
                <Button
                    type="primary"
                    onClick={this.changeEdit.bind(this)}
                >
                    {this.state.text}
                </Button>
                {this.state.isEdit?<Button style={{marginLeft:'5px'}}
                    type="primary"
                >
                    保存
                </Button>:""}
                 </Row>
                <Row>
                    <Col span="12">
                        <FormItem  {...formItemLayout} label="站点id"><Input disabled={true} type="text" value={this.props.WmcSite.site.id} /></FormItem>
                    </Col>
                    <Col span="12">
                        <FormItem  {...formItemLayout} label="站点名称"><Input disabled={!this.state.isEdit} type="text" value={this.props.WmcSite.site.name} /></FormItem>
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
