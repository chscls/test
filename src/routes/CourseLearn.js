import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';


class CourseLearn extends Component {
  constructor(props) {
        super(props)
    }

     render() {
        return (<div>课程学习页</div>);
     }
}



function mapStateToProps({ common }) {
    return { common };
}
export default connect(mapStateToProps)(CourseLearn);