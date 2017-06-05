import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import Header from '../components/Header'
import VideoJs from '../components/VideoJs'
class CourseLearn extends Component {
  constructor(props) {
        super(props)
    }

     render() {
        return (<div><Header/><div style={{position:'absolute',top:'30',right:'0',left:'0',bottom:'0'}}><VideoJs/></div></div>);
     }
}



function mapStateToProps({ common }) {
    return { common };
}
export default connect(mapStateToProps)(CourseLearn);