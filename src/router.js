import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';
import IndexPage from './routes/IndexPage';

const r11 = (location, callback) => {
  require.ensure([], require => {
    callback(null,
      require('./routes/1-1'))
  }, '11')
};
const r12 = (location, callback) => {
  require.ensure([], require => {
    callback(null,
      require('./routes/1-2'))
  }, '12')
};
const r21 = (location, callback) => {
  require.ensure([], require => {
    callback(null,
      require('./routes/2-1'))
  }, '21')
};
const r22 = (location, callback) => {
  require.ensure([], require => {
    callback(null,
      require('./routes/2-2'))
  }, '22')
};
const r31 = (location, callback) => {
  require.ensure([], require => {
    callback(null,
      require('./routes/3-1'))
  }, '31')
};
const r32 = (location, callback) => {
  require.ensure([], require => {
    callback(null,
      require('./routes/3-2'))
  }, '32')
};
const r33 = (location, callback) => {
  require.ensure([], require => {
    callback(null,
      require('./routes/3-3'))
  }, '33')
};
const r34 = (location, callback) => {
  require.ensure([], require => {
    callback(null,
      require('./routes/3-4'))
  }, '34')
};
const r35 = (location, callback) => {
  require.ensure([], require => {
    callback(null,
      require('./routes/login'))
  }, 'login')
};
const r36 = (location, callback) => {
  require.ensure([], require => {
    callback(null,
      require('./routes/Search'))
  }, 'Search')
};
const r37 = (location, callback) => {
  require.ensure([], require => {
    callback(null,
      require('./routes/Good'))
  }, 'Good')
};
const r38 = (location, callback) => {
  require.ensure([], require => {
    callback(null,
      require('./routes/School'))
  }, 'School')
};
const r39 = (location, callback) => {
  require.ensure([], require => {
    callback(null,
      require('./routes/Course'))
  }, 'Course')
};
const r40 = (location, callback) => {
  require.ensure([], require => {
    callback(null,
      require('./routes/Questions'))
  }, 'Questions')
};

const r41 = (location, callback) => {
  require.ensure([], require => {
    callback(null,
      require('./routes/SchoolSearch'))
  }, 'SchoolSearch')
};
const r42 = (location, callback) => {
  require.ensure([], require => {
    callback(null,
      require('./routes/Member'))
  }, 'Member')
};
const r43 = (location, callback) => {
  require.ensure([], require => {
    callback(null,
      require('./routes/3-5'))
  }, '35')
};

const r44 = (location, callback) => {
  require.ensure([], require => {
    callback(null,
      require('./routes/CourseLearn'))
  }, 'CourseLearn')
};
const r45 = (location, callback) => {
  require.ensure([], require => {
    callback(null,
      require('./routes/Cart'))
  }, 'Cart')
};

const r46 = (location, callback) => {
  require.ensure([], require => {
    callback(null,
      require('./routes/manage/siteManage/WmcPosterSpacePage'))
  }, 'WmcPosterSpacePage')
};
const r47 = (location, callback) => {
  require.ensure([], require => {
    callback(null,
      require('./routes/manage/siteManage/WmcPosterPage'))
  }, 'WmcPosterPage')
};

const r48 = (location, callback) => {
  require.ensure([], require => {
    callback(null,
      require('./routes/manage/SiteManage'))
  }, 'SiteManage')
};
const r49 = (location, callback) => {
  require.ensure([], require => {
    callback(null,
      require('./routes/manage/siteManage/WmcSiteView'))
  }, 'WmcSiteView')
};

const r50 = (location, callback) => {
  require.ensure([], require => {
    callback(null,
      require('./routes/manage/siteManage/WmcAppPage'))
  }, 'WmcAppPage')
};

const r51 = (location, callback) => {
  require.ensure([], require => {
    callback(null,
      require('./routes/manage/siteManage/WmcCatalogGroupPage'))
  }, 'WmcCatalogGroupPage')
};
const r52 = (location, callback) => {
  require.ensure([], require => {
    callback(null,
      require('./routes/manage/CourseManage'))
  }, 'CourseManage')
};
const r53 = (location, callback) => {
  require.ensure([], require => {
    callback(null,
      require('./routes/manage/courseManage/WmcCoursePage'))
  }, 'WmcCoursePage')
};



export default function ({ history }) {
  return (
    <Router hjsistory={history}>
      <Route path="/" component={IndexPage}>
        <Route path="Cart" getComponent={r45} />
        <Route path="Search" getComponent={r36} />
        <Route path="Good" getComponent={r37} />
        <Route path="School" getComponent={r38} >

          <Route path="SchoolSearch" getComponent={r41} />
          <Route path="Course" getComponent={r39} />
        </Route>

        <Route path="Questions" getComponent={r40} />
        <Route path="CourseLearn" getComponent={r44} />
        <Route path="Member" getComponent={r42} >


          <Route path="21" getComponent={r21} />
          <Route path="22" getComponent={r22} />
          <Route path="31" getComponent={r31} />
          <Route path="32" getComponent={r32} />
          <Route path="33" getComponent={r33} />
          <Route path="34" getComponent={r34} />
          <Route path="11" getComponent={r11} />
          <Route path="35" getComponent={r43} />
          <Route path="SiteManage" getComponent={r48} >
            <Route path="WmcSiteView" getComponent={r49} />
            <Route path="WmcPosterSpacePage" getComponent={r46} />
            <Route path="WmcPosterPage" getComponent={r47} />
            <Route path="WmcAppPage" getComponent={r50} />
            <Route path="WmcCatalogGroupPage/:type" getComponent={r51} />
          </Route>
          <Route path="CourseManage" getComponent={r52} >
               <Route path="WmcCoursePage" getComponent={r53} />

             </Route>
        </Route>
      </Route>
      <Route path="login" getComponent={r35} />
    </Router>
  );
};
