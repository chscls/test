import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import {  LocaleProvider,Carousel } from 'antd';
import Header from '../components/Header'
import Nav from '../components/Nav'
class Search extends Component{
   constructor(props){
    super(props)
  }
render(){
return (
<LocaleProvider >
     <div>
       qwwwwwwwwwwwwwww
         </div>

</LocaleProvider >
)


}


};


function mapStateToProps({ common }) {
  return {common};
}
export default connect(mapStateToProps)(Search);