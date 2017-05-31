import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import {  LocaleProvider} from 'antd';
class Questions extends Component{
   constructor(props){
    super(props)
  }
  componentDidMount() {
   window.scrollTo(0,0);
  }
render(){
return (
<LocaleProvider >
     <div id="content">
       题库主页
         </div>

</LocaleProvider >
)


}


};


function mapStateToProps({ common }) {
  return {common};
}
export default connect(mapStateToProps)(Questions);