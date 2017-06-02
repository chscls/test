import React from 'react';
import { connect } from 'dva';
import { Timeline,Icon,Progress  } from 'antd';
class Option extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (<div>
      
      
      
      <Timeline pending={<a style={{ margin: 'auto',width:'100px'}} href="#">查看更多</a>}>
    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px'}}/>}>
    
       <div style={{width:'100%',height:'40px',float:'left',padding:'0px 5px'}}><h1>2016-07-01 至 2016-08-01</h1></div>
    <div style={{width:'150px',height:'180px',float:'left',padding:'5px 5px'}}><img  src="http://iph.href.lu/140x140"/><Progress percent={50}  status="active" /><p style={{textAlign:'center'}}>课程名</p>  </div>
      <div style={{width:'150px',height:'180px',float:'left',padding:'5px 5px'}}><img  src="http://iph.href.lu/140x140"/><Progress percent={50} /><p style={{textAlign:'center'}}>课程名</p>  </div>
      <div style={{width:'150px',height:'180px',float:'left',padding:'5px 5px'}}><img  src="http://iph.href.lu/140x140"/><Progress percent={50}  /><p style={{textAlign:'center'}}>课程名</p>  </div>
      <div style={{width:'150px',height:'180px',float:'left',padding:'5px 5px'}}><img  src="http://iph.href.lu/140x140"/> <Progress percent={100}  /><p style={{textAlign:'center'}}>课程名</p> </div>
      <div style={{width:'150px',height:'180px',float:'left',padding:'5px 5px'}}><img   src="http://iph.href.lu/140x140"/><Progress percent={50}  /><p style={{textAlign:'center'}}>课程名</p>  </div>
      <div style={{width:'150px',height:'180px',float:'left',padding:'5px 5px'}}><img   src="http://iph.href.lu/140x140"/> <Progress percent={50}  /><p style={{textAlign:'center'}}>课程名</p> </div>
      <div style={{width:'150px',height:'180px',float:'left',padding:'5px 5px'}}><img   src="http://iph.href.lu/140x140"/><Progress percent={50} /><p style={{textAlign:'center'}}>课程名</p> </div>
      <div style={{width:'150px',height:'180px',float:'left',padding:'5px 5px'}}><img   src="http://iph.href.lu/140x140"/><Progress percent={50}  /><p style={{textAlign:'center'}}>课程名</p>  </div>
      <div style={{width:'150px',height:'180px',float:'left',padding:'5px 5px'}}><img   src="http://iph.href.lu/140x140"/><Progress percent={50} /><p style={{textAlign:'center'}}>课程名</p>  </div>
      <div style={{width:'150px',height:'180px',float:'left',padding:'5px 5px'}}><img   src="http://iph.href.lu/140x140"/><Progress percent={0}  /><p style={{textAlign:'center'}}>课程名</p>  </div>
      <div style={{clear:'both'}}></div>
      </Timeline.Item>
       <Timeline.Item style={{height:'240px'}}dot={<Icon type="clock-circle-o" style={{ fontSize: '16px'}}/>}>
    <div style={{width:'100%',height:'40px',float:'left',padding:'0px 5px'}}><h1>2016-06-01 至 2016-07-01</h1></div>
    <div style={{width:'150px',height:'180px',float:'left',padding:'5px 5px'}}><img  src="http://iph.href.lu/140x140"/><Progress percent={50}  /><p style={{textAlign:'center'}}>课程名</p>  </div>
      <div style={{width:'150px',height:'180px',float:'left',padding:'5px 5px'}}><img  src="http://iph.href.lu/140x140"/><Progress percent={50}  /><p style={{textAlign:'center'}}>课程名</p>  </div>
      <div style={{width:'150px',height:'180px',float:'left',padding:'5px 5px'}}><img  src="http://iph.href.lu/140x140"/> <Progress percent={90}  /><p style={{textAlign:'center'}}>课程名</p> </div>
      <div style={{width:'150px',height:'180px',float:'left',padding:'5px 5px'}}><img  src="http://iph.href.lu/140x140"/> <Progress percent={50}  /><p style={{textAlign:'center'}}>课程名</p> </div>
      <div style={{width:'150px',height:'180px',float:'left',padding:'5px 5px'}}><img   src="http://iph.href.lu/140x140"/><Progress percent={70}  /><p style={{textAlign:'center'}}>课程名</p>  </div>
       <div style={{clear:'both'}}></div>
        </Timeline.Item>
      <Timeline.Item style={{height:'240px'}}dot={<Icon type="clock-circle-o" style={{ fontSize: '16px'}}/>}>
    <div style={{width:'100%',height:'40px',float:'left',padding:'0px 5px'}}><h1>2016-05-01 至 2016-06-01</h1></div>
    <div style={{width:'150px',height:'180px',float:'left',padding:'5px 5px'}}><img  src="http://iph.href.lu/140x140"/> <Progress percent={50} /><p style={{textAlign:'center'}}>课程名</p></div>
      <div style={{width:'150px',height:'180px',float:'left',padding:'5px 5px'}}><img  src="http://iph.href.lu/140x140"/> <Progress percent={50}  /><p style={{textAlign:'center'}}>课程名</p> </div>
      <div style={{width:'150px',height:'180px',float:'left',padding:'5px 5px'}}><img  src="http://iph.href.lu/140x140"/> <Progress percent={50} /><p style={{textAlign:'center'}}>课程名</p> </div>
      <div style={{width:'150px',height:'180px',float:'left',padding:'5px 5px'}}><img  src="http://iph.href.lu/140x140"/> <Progress percent={50}  /><p style={{textAlign:'center'}}>课程名</p> </div>
      <div style={{width:'150px',height:'180px',float:'left',padding:'5px 5px'}}><img   src="http://iph.href.lu/140x140"/><Progress percent={50} /><p style={{textAlign:'center'}}>课程名</p>  </div>
      <div style={{width:'150px',height:'180px',float:'left',padding:'5px 5px'}}><img   src="http://iph.href.lu/140x140"/> <Progress percent={50} /><p style={{textAlign:'center'}}>课程名</p> </div>
       <div style={{clear:'both'}}></div>
       </Timeline.Item>
  </Timeline></div>)
  }
  componentDidMount(){
    const breadcrumbData = {
      breadcrumb:[
        {
          name:'首页',
          path:'/'
        },{
          name:'我的课程'
        }
      ]
    };
    this.props.dispatch({
      type:'common/changeBreadcrumb',
      payload:breadcrumbData
    })
  }
}
function mapStateToProps({ common }) {
  return {common};
}
export default connect(mapStateToProps)(Option);
