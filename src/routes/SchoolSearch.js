import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';

import SearchCom from '../components/SearchCom'
class SchoolSearch extends Component{
   constructor(props){
    super(props)
  }
 
render(){
return (

    <SearchCom/>
)


}


};


function mapStateToProps({ common }) {
  return {common};
}
export default connect(mapStateToProps)(SchoolSearch);