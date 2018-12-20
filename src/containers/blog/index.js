import React from 'react';
import 'antd/dist/antd.css'
import NavigationHeader from '../layout/Header';
import SiderMenu from '../layout/SiderMenu';
import { Layout, Breadcrumb, List, Avatar } from 'antd';
import articles from './assets/articles';

const { Content } = Layout;

const BlogPage = () => (
  <Layout style={layoutContainerStyle}>
    <NavigationHeader />
    <Layout>
      <SiderMenu />
      <Layout style={layoutStyle}>
        <Breadcrumb style={breadcrumbStyle}>
          <Breadcrumb.Item>Network</Breadcrumb.Item>
          <Breadcrumb.Item>Blog</Breadcrumb.Item>
        </Breadcrumb>
        <Content style={contentStyle}>
          <h3 style={headerStyle}>Goerli Articles</h3>
          <List
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 10,
            }}
            dataSource={articles}
            renderItem={item => (
              <List.Item
                key={item.title}           
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={<a href={item.href} target="_blank" rel="noopener noreferrer">{item.title}</a>}
                  description={item.meta}
                />
                {item.content}
                <p style={linkStyle}> <a href={item.href} target="_blank" rel="noopener noreferrer">Read Article </a> </p>
              </List.Item>
            )}
          />
        </Content>
      </Layout>
    </Layout>
  </Layout>
);

const layoutContainerStyle = {
  flex: 1, 
  height: '100vh'
};

const layoutStyle = {
  padding: '0 24px 24px',
  height: '100%',
};

const breadcrumbStyle = {
  margin: '16px 0',
};

const contentStyle = {
  background: '#fff',
  padding: 24,
  margin: 0,
  minHeight: 280, 
};

const headerStyle = {
  margin: '16px 0',
};

const linkStyle = {
  paddingTop: '2.5%',
};

export default BlogPage;
