import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import {  LocaleProvider} from 'antd';
import Nav from '../components/Nav'
import { Breadcrumb,Input,Row,Col,Pagination,Icon  } from 'antd';
import SearchCom from '../components/SearchCom'
class Search extends Component{
   constructor(props){
    super(props)
  }
  componentDidMount() {
   window.scrollTo(0,0);
  }
render(){
return (
<LocaleProvider >
  <div>
   <Nav/>
    <SearchCom/>
</div>
</LocaleProvider >
)


}


};


function mapStateToProps({ common }) {
  return {common};
}
export default connect(mapStateToProps)(Search);