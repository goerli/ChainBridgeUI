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
       <Sider width={200} style={siderContainerStyle}>
        <Menu
            mode="inline"
            defaultOpenKeys={['sub1', 'sub2']}
            style={siderStyle}
        >
        <SubMenu key="sub1" title={<span><Icon type="user" />Information</span>}>
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
        <SubMenu key="sub2" title={<span><Icon type="user" />Information</span>}>
            <Menu.Item key="2">
                <Link to="/bridge" onClick={() =>this.handleClick(5)}>Bridge </Link> 
            </Menu.Item>            
        </SubMenu>
        </Menu>
    </Sider>
    );
  }
}

const siderContainerStyle = {
  background: '#fff',
};

const siderStyle = {
  height: '100%',
  borderRight: 0, 
};

export default SiderMenu;
