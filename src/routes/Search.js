import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import {  LocaleProvider} from 'antd';
import Nav from '../components/Nav'
class Search extends Component{
   constructor(props){
    super(props)
  }
render(){
return (
<LocaleProvider >
  <div>
   <Nav/>
     <div id="content">
      
         </div>
</div>
</LocaleProvider >
)


}


};


function mapStateToProps({ common }) {
  return {common};
}
export default connect(mapStateToProps)(Search);