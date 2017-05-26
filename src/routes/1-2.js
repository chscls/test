import React from 'react';
import { connect } from 'dva';
import VideoJs from '../components/VideoJs'
class Option extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (<div>
<VideoJs vtt="video/demo.captions.vtt2"/>
    </div>)
  }
  componentDidMount(){
    const breadcrumbData = {
      breadcrumb:[
        {
          name:'首页',
          path:'/'
        },{
          name:'菜单一2'
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
