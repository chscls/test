import React from 'react';
import { connect } from 'dva';
import { Timeline,Icon } from 'antd';
import { Link } from 'dva/router';
class Option extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (<div>
      
      
      
      <Timeline pending={<a style={{ margin: 'auto',width:'100px'}} href="#">查看更多</a>}>
    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px'}}/>}>
    
       <div style={{width:'100%',height:'40px',padding:'0px 5px'}}><h1>2016-07-01 至 2016-08-01</h1></div>
    <Link to="School/Course"><div style={{width:'150px',height:'165px',float:'left',padding:'5px 5px'}}><img  src="http://iph.href.lu/140x140"/><p style={{textAlign:'center'}}>课程名</p>  </div></Link>
      <Link to="School/Course"><div style={{width:'150px',height:'165px',float:'left',padding:'5px 5px'}}><img  src="http://iph.href.lu/140x140"/><p style={{textAlign:'center'}}>课程名</p>  </div></Link>
      <Link to="School/Course"><div style={{width:'150px',height:'165px',float:'left',padding:'5px 5px'}}><img  src="http://iph.href.lu/140x140"/><p style={{textAlign:'center'}}>课程名</p>  </div></Link>
      <Link to="School/Course"><div style={{width:'150px',height:'165px',float:'left',padding:'5px 5px'}}><img  src="http://iph.href.lu/140x140"/> <p style={{textAlign:'center'}}>课程名</p> </div></Link>
      <Link to="School/Course"><div style={{width:'150px',height:'165px',float:'left',padding:'5px 5px'}}><img   src="http://iph.href.lu/140x140"/><p style={{textAlign:'center'}}>课程名</p>  </div></Link>
      <Link to="School/Course"><div style={{width:'150px',height:'165px',float:'left',padding:'5px 5px'}}><img   src="http://iph.href.lu/140x140"/> <p style={{textAlign:'center'}}>课程名</p> </div></Link>
      <Link to="School/Course"><div style={{width:'150px',height:'165px',float:'left',padding:'5px 5px'}}><img   src="http://iph.href.lu/140x140"/><p style={{textAlign:'center'}}>课程名</p> </div></Link>
      <Link to="School/Course"><div style={{width:'150px',height:'165px',float:'left',padding:'5px 5px'}}><img   src="http://iph.href.lu/140x140"/><p style={{textAlign:'center'}}>课程名</p>  </div></Link>
      <Link to="School/Course"><div style={{width:'150px',height:'165px',float:'left',padding:'5px 5px'}}><img   src="http://iph.href.lu/140x140"/><p style={{textAlign:'center'}}>课程名</p>  </div></Link>
      <Link to="School/Course"><div style={{width:'150px',height:'165px',float:'left',padding:'5px 5px'}}><img   src="http://iph.href.lu/140x140"/><p style={{textAlign:'center'}}>课程名</p>  </div></Link>
      <div style={{clear:'both'}}></div>
      </Timeline.Item>
       <Timeline.Item style={{height:'240px'}}dot={<Icon type="clock-circle-o" style={{ fontSize: '16px'}}/>}>
    <div style={{width:'100%',height:'40px',padding:'0px 5px'}}><h1>2016-06-01 至 2016-07-01</h1></div>
    <Link to="School/Course"><div style={{width:'150px',height:'165px',float:'left',padding:'5px 5px'}}><img  src="http://iph.href.lu/140x140"/><p style={{textAlign:'center'}}>课程名</p>  </div></Link>
      <Link to="School/Course"><div style={{width:'150px',height:'165px',float:'left',padding:'5px 5px'}}><img  src="http://iph.href.lu/140x140"/><p style={{textAlign:'center'}}>课程名</p>  </div></Link>
      <Link to="School/Course"><div style={{width:'150px',height:'165px',float:'left',padding:'5px 5px'}}><img  src="http://iph.href.lu/140x140"/> <p style={{textAlign:'center'}}>课程名</p> </div></Link>
      <Link to="School/Course"><div style={{width:'150px',height:'165px',float:'left',padding:'5px 5px'}}><img  src="http://iph.href.lu/140x140"/> <p style={{textAlign:'center'}}>课程名</p> </div></Link>
      <Link to="School/Course"><div style={{width:'150px',height:'165px',float:'left',padding:'5px 5px'}}><img   src="http://iph.href.lu/140x140"/><p style={{textAlign:'center'}}>课程名</p>  </div></Link>
       <div style={{clear:'both'}}></div>
        </Timeline.Item>
      <Timeline.Item style={{height:'240px'}}dot={<Icon type="clock-circle-o" style={{ fontSize: '16px'}}/>}>
    <div style={{width:'100%',height:'40px',padding:'0px 5px'}}><h1>2016-05-01 至 2016-06-01</h1></div>
    <Link to="School/Course"><div style={{width:'150px',height:'165px',float:'left',padding:'5px 5px'}}><img  src="http://iph.href.lu/140x140"/> <p style={{textAlign:'center'}}>课程名</p></div></Link>
      <Link to="School/Course"><div style={{width:'150px',height:'165px',float:'left',padding:'5px 5px'}}><img  src="http://iph.href.lu/140x140"/><p style={{textAlign:'center'}}>课程名</p> </div></Link>
      <Link to="School/Course"><div style={{width:'150px',height:'165px',float:'left',padding:'5px 5px'}}><img  src="http://iph.href.lu/140x140"/><p style={{textAlign:'center'}}>课程名</p> </div></Link>
      <Link to="School/Course"><div style={{width:'150px',height:'165px',float:'left',padding:'5px 5px'}}><img  src="http://iph.href.lu/140x140"/> <p style={{textAlign:'center'}}>课程名</p> </div></Link>
      <Link to="School/Course"><div style={{width:'150px',height:'165px',float:'left',padding:'5px 5px'}}><img   src="http://iph.href.lu/140x140"/><p style={{textAlign:'center'}}>课程名</p>  </div></Link>
      <Link to="School/Course"><div style={{width:'150px',height:'165px',float:'left',padding:'5px 5px'}}><img   src="http://iph.href.lu/140x140"/> <p style={{textAlign:'center'}}>课程名</p> </div></Link>
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
          name:'课程收藏'
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
