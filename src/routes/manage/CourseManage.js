import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router'
import {Table,Icon,Menu} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class CourseManage extends React.Component{
  constructor(props){
    super(props)
    
}
 state = {
    current: 'mail1',
  }
  handleClick = (e) => {
   
    this.setState({
      current: e.key,
    });
  }

  render(){

    return (



      <div>

         <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
       
          <Menu.Item key="mail2">
          <Link to="Member/CourseManage/WmcCoursePage">课程管理</Link>
        </Menu.Item>
        <Menu.Item key="mail1">
          <Link to="Member/CourseManage/WmcCatalogPage">目录管理</Link>
        </Menu.Item>
          <Menu.Item key="mail3">
          <Link to="Member/CourseManage/WmcTopicPage">主题管理</Link>
        </Menu.Item>
      
      </Menu>
      {this.props.children|| ""}
      </div>
    )
  }
  
}
function mapStateToProps({ }) {
  return {};
}
export default connect(mapStateToProps)(CourseManage);
