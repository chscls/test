import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const Sider = React.createClass({
  getInitialState() {
    return {
      current: '1',
    };
  },
  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  },
  render() {
    return (
      <Menu onClick={this.handleClick}
        style={{ width: 200 }}
        defaultOpenKeys={['sub1']}
        selectedKeys={[this.state.current]}
        mode="inline"
      >

      <Menu.Item key="0"><Link to="Member/34">首页</Link></Menu.Item>
      <Menu.Item key="10"><Link to="Member/22">我的课程</Link></Menu.Item>
        
        <SubMenu key="sub1" title={<span>我的收藏</span>}>
          <Menu.Item key="1"><Link to="Member/31">收藏的课程</Link></Menu.Item>
          <Menu.Item key="2"><Link to="Member/32">收藏的学校</Link></Menu.Item>
        
        </SubMenu>
        <Menu.Item key="3"><Link to="Member/33">代码编辑器</Link></Menu.Item> 
        <Menu.Item key="4"><Link to="Member/11">我的订单</Link></Menu.Item> 
          <Menu.Item key="5"><Link to="Member/35">设置</Link></Menu.Item> 
      </Menu>
      
    );
  },
});

export default Sider
