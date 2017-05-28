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
         <Header/>
 <Nav/>
         </div>

</LocaleProvider >
)


}


};
Search.propTypes = {
};

export default Search;