import React from 'react';
import 'antd/dist/antd.css'
import NavigationHeader from '../layout/Header';
import SiderMenu from '../layout/SiderMenu';
import { Layout, Breadcrumb } from 'antd';

const { Content } = Layout;

const WikiPage = () => (
  <Layout style={layoutStyle}>
  <NavigationHeader />
  <Layout>
    <SiderMenu />
    <Layout style={{ padding: '0 24px 24px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Network</Breadcrumb.Item>
          <Breadcrumb.Item>Wiki</Breadcrumb.Item>
      </Breadcrumb>
      <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
      </Content>
    </Layout>
  </Layout>
</Layout>
);

const layoutStyle = {
  flex: 1, 
  height: '100vh'
};

export default WikiPage;
