import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import {  LocaleProvider} from 'antd';
import Nav2 from '../components/Nav2'
class School extends Component{
   constructor(props){
    super(props)
  }
render(){
return (
<LocaleProvider >
  <div>
   <Nav2/>
     <div id="content">
       学校主页
         </div>
</div>
</LocaleProvider >
)


}


};


function mapStateToProps({ common }) {
  return {common};
}
export default connect(mapStateToProps)(School);