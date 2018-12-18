import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Sider } = Layout;

class SiderMenu extends Component {
  state= {
    current: 1,
  }

  handleClick = (index) => {
    this.setState({current: index})
  };

  render() {
    return (
       <Sider width={200} style={{ background: '#fff' }}>
        <Menu
            mode="inline"
            defaultOpenKeys={['sub1', 'sub2']}
            style={{ height: '100%', borderRight: 0 }}
        >
        <SubMenu key="sub1" title={<span><Icon type="laptop" />Network</span>}>
            <Menu.Item key="1">
                <Link to="/bridge" onClick={() =>this.handleClick(1)}>Bridge</Link> 
             </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="user" />Information</span>}>
            <Menu.Item key="2">
                <Link to="/roadmap" onClick={() =>this.handleClick(2)}>Roadmap </Link> 
            </Menu.Item>  
            <Menu.Item key="3">
                <Link to="/blog" onClick={() =>this.handleClick(3)}> Blog </Link> 
            </Menu.Item>     
            <Menu.Item key="4">
                <Link to="/about" onClick={() => this.handleClick(4)}>About</Link> 
            </Menu.Item>            
        </SubMenu>
        </Menu>
    </Sider>
    );
  }
}

export default SiderMenu;
