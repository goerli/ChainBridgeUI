import React from 'react';
import 'antd/dist/antd.css'
import NavigationHeader from '../layout/Header';
import SiderMenu from '../layout/SiderMenu';
import { Layout, Breadcrumb, Timeline } from 'antd';

const { Content } = Layout;

const RoadmapPage = () => (
  <Layout style={layoutContainerStyle}>
  <NavigationHeader />
  <Layout>
    <SiderMenu />
    <Layout style={layoutStyle}>
      <Breadcrumb style={breadcrumbStyle}>
          <Breadcrumb.Item>Network</Breadcrumb.Item>
          <Breadcrumb.Item>Roadmap</Breadcrumb.Item>
      </Breadcrumb>
      <Content style={contentStyle}>
        <Timeline>
          <div style={roadmapHeaderStyle}>
            <h4>Complete </h4>
          </div>
           <Timeline.Item color="green">[Tools] Open-source block explorer</Timeline.Item>
           <Timeline.Item color="green">[Tools] One-way throttled bridge (faucet)</Timeline.Item>
           <Timeline.Item color="green">[Core] StateRoot Mismatch with Parity NullEngine</Timeline.Item>
           <Timeline.Item color="green">[Core] ReceiptRoot Mismatch with Pantheon Clique</Timeline.Item>
           <Timeline.Item color="green">[Tools] Explorer for testnet</Timeline.Item>
           <div style={roadmapHeaderStyle}>
            <h4>In Progress </h4>
           </div>
           <Timeline.Item color="orange">[Config] Goerli Classic Genesis and Chain Spec</Timeline.Item>
           <Timeline.Item color="orange">[Config] Goerli Genesis and Chain Spec</Timeline.Item>
           <Timeline.Item color="orange">[Core] Clique engine for Parity Ethereum</Timeline.Item>
           <Timeline.Item color="orange">[Misc] Goerli Website </Timeline.Item>
           <Timeline.Item color="orange">[Core] Clique engine for EthereumJ</Timeline.Item>
          <div style={roadmapHeaderStyle}>
            <h4>To Do </h4>
          </div>
          <Timeline.Item color="red">[Core] Unit test cases for parity clique</Timeline.Item>
          <Timeline.Item color="red">[Tools] Devops tooling for testing PoA testnets locally</Timeline.Item>
          <Timeline.Item color="red">[Core] Clique engine for Mantis</Timeline.Item>
          <Timeline.Item color="red">[Tools] Fork Monitor Dashboard</Timeline.Item>
          <Timeline.Item color="red">[Core] Aura engine for Geth</Timeline.Item>
          <Timeline.Item color="red">[Tools] Open-source faucet</Timeline.Item>
          <Timeline.Item color="red">[Core] Clique engine for Aleth</Timeline.Item>
          <Timeline.Item color="red">[Core] Clique engine for Trinity</Timeline.Item>
          <Timeline.Item color="red">[Tools] Ethstats Status Dashboard</Timeline.Item>
          <Timeline.Item color="red">[Spec] Authority Round EIP/ECIP</Timeline.Item>
        </Timeline>
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

const roadmapHeaderStyle= {
  paddingBottom: '2.5%',
  paddingTop: '2.5%',
};

export default RoadmapPage;
