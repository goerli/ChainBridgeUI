import React from 'react';
import 'antd/dist/antd.css'
import NavigationHeader from '../layout/Header';
import SiderMenu from '../layout/SiderMenu';
import { Layout, Breadcrumb, Collapse } from 'antd';
import data from './assets/data';

const { Content } = Layout;
const Panel = Collapse.Panel;

const AboutPage = () => (
  <Layout style={layoutContainerStyle}>
    <NavigationHeader />
    <Layout>
      <SiderMenu />
      <Layout style={layoutStyle}>
        <Breadcrumb style={breadcrumbStyle}>
            <Breadcrumb.Item>Network</Breadcrumb.Item>
            <Breadcrumb.Item>About</Breadcrumb.Item>
        </Breadcrumb>
        <Content style={contentStyle}>
          <Collapse bordered={false} defaultActiveKey={['1']}>
            {
              data.map((item, index) => {
                return (
                  <Panel header={item.title} key={index} style={customPanelStyle}>
                    <p>{item.content}</p>
                  </Panel>
                )
              })
            }
          </Collapse>
        </Content>
      </Layout>
    </Layout>
  </Layout>
);

const layoutContainerStyle = {
  flex: 1, 
  height: '100%'
};

const layoutStyle = {
  padding: '0 24px 24px',
};

const breadcrumbStyle = {
  margin: '16px 0',
};

const contentStyle = {
  background: '#fff',
  padding: 24,
  margin: 0,
  minHeight: 280,
}
const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
};

export default AboutPage;
