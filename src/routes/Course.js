import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import {  LocaleProvider} from 'antd';
class Course extends Component{
   constructor(props){
    super(props)
  }
render(){
return (
<LocaleProvider >
     <div id="content">
       课程详情页
         </div>

</LocaleProvider >
)


}


};


function mapStateToProps({ common }) {
  return {common};
}
export default connect(mapStateToProps)(Course);