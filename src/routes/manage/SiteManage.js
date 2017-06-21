import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router'
import {Table,Icon,Menu} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class SiteManage extends React.Component{
  constructor(props){
    super(props)
    
}
 state = {
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
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
        <Menu.Item key="mail">
          <Link to="Member/SiteManage/WmcPosterSpacePage">版位管理</Link>
        </Menu.Item>
        <Menu.Item key="sub22"><Link to="Member/SiteManage/WmcPosterPage">广告管理</Link></Menu.Item>
         <SubMenu title={<span><Icon type="setting" />3级菜单 - Submenu</span>}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">4级菜单1</Menu.Item>
            <Menu.Item key="setting:2">4级菜单2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting:3">4级菜单3</Menu.Item>
            <Menu.Item key="setting:4">4级菜单4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
      </Menu>
      {this.props.children|| ""}
      </div>
    )
  }
  
}
function mapStateToProps({ }) {
  return {};
}
export default connect(mapStateToProps)(SiteManage);
