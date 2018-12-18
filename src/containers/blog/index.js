import React from 'react';
import 'antd/dist/antd.css'
import NavigationHeader from '../layout/Header';
import SiderMenu from '../layout/SiderMenu';
import { Layout, Breadcrumb, List, Avatar } from 'antd';
import articles from './assets/articles';

const { Content } = Layout;

const listData = [];
for (let i = 0; i < 10; i++) {
  listData.push({
    href: 'https://github.com/goerli/testnet/edit/master/README.md',
    title: `Example Blog Post ${i}`,
    avatar: require('../../assets/images/goerli.png'),
    description: 'Awesome content coming....',
    content:`There are many Ethereum testnets available for experimenting with smart contracts and deploying
    decentralised applications before going live on the main Ethereum network. However, there is no testnet 
    available that is both widely usable across all client implementations, and robust enough to guarantee 
    consistent availability and high reliability.\n`,
  });
}

const BlogPage = () => (
  <Layout style={layoutStyle}>
  <NavigationHeader />
  <Layout>
    <SiderMenu />
    <Layout style={{ padding: '0 24px 24px', height: '100%' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Network</Breadcrumb.Item>
          <Breadcrumb.Item>Blog</Breadcrumb.Item>
      </Breadcrumb>
      <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
        <h3 style={{ margin: '16px 0' }}>Goerli Articles</h3>
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
              <p style={{paddingTop: '2.5%'}}> <a href={item.href} target="_blank" rel="noopener noreferrer">Read Article </a> </p>
            </List.Item>
          )}
        />
      </Content>
    </Layout>
  </Layout>
</Layout>
);

const layoutStyle = {
  flex: 1, 
  height: '100vh'
};

export default BlogPage;
