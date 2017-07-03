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
    current: 'mail1',
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
       <Menu.Item key="mail1">
          <Link to="Member/SiteManage/WmcSiteView">站点管理</Link>
        </Menu.Item>
          <Menu.Item key="mail2">
          <Link to="Member/SiteManage/WmcAppPage">应用管理</Link>
        </Menu.Item>
        <Menu.Item key="mail">
          <Link to="Member/SiteManage/WmcPosterSpacePage">版位管理</Link>
        </Menu.Item>
        <Menu.Item key="sub22"><Link to="Member/SiteManage/WmcPosterPage">广告管理</Link></Menu.Item>
         <SubMenu title={<span>版面管理</span>}>
          <MenuItemGroup title="首页版面">
            <Menu.Item key="setting:1">顶层目录组</Menu.Item>
            <Menu.Item key="setting:2">目录主题</Menu.Item>
            <Menu.Item key="setting:3">楼层</Menu.Item>
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
