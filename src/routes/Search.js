import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import {  LocaleProvider} from 'antd';
class Search extends Component{
   constructor(props){
    super(props)
  }
render(){
return (
<LocaleProvider >
     <div id="content">
       搜索页
         </div>

</LocaleProvider >
)


}


};


function mapStateToProps({ common }) {
  return {common};
}
export default connect(mapStateToProps)(Search);