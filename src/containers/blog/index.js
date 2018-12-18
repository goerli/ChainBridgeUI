import React from 'react';
import 'antd/dist/antd.css'
import NavigationHeader from '../layout/Header';
import SiderMenu from '../layout/SiderMenu';
import { Layout, Breadcrumb, List, Avatar } from 'antd';

const { Content } = Layout;

const listData = [];
for (let i = 0; i < 10; i++) {
  listData.push({
    href: 'https://github.com/goerli/testnet/edit/master/README.md',
    title: `Example Blog Post ${i}`,
    avatar: require('../../assets/images/goerli.png'),
    description: 'Awesome content coming....',
    content: ' Read more on the motivation in the [Görli Testnet Proposal]  Read more on the motivation in the  Read more on the motivation in the [Görli Testnet Proposal] [Görli Testnet Proposal]  Read more on the motivation in the [Görli Testnet Proposal]  Read more on the motivation in the [Görli Testnet Proposal]Read more on the motivation in the [Görli Testnet Proposal](https://dev.to/5chdn/the-grli-testnet-proposal---a-call-for-participation-58pf)',
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
          dataSource={listData}
          renderItem={item => (
            <List.Item
              key={item.title}           
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
              />
              {item.content}
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
