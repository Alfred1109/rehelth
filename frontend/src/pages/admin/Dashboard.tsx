import React from 'react';
import { Layout, Menu, Card, Row, Col, Typography, Button } from 'antd';
import { 
  UserAddOutlined, 
  TeamOutlined, 
  BarChartOutlined, 
  ShoppingCartOutlined, 
  InfoCircleOutlined 
} from '@ant-design/icons';

const { Sider, Content } = Layout;
const { Title, Text } = Typography;

const AdminDashboard: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={200} theme="light">
        <Menu mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserAddOutlined />}>创建账户</Menu.Item>
          <Menu.Item key="2" icon={<TeamOutlined />}>病人列表</Menu.Item>
          <Menu.Item key="3" icon={<BarChartOutlined />}>数据统计</Menu.Item>
          <Menu.Item key="4" icon={<ShoppingCartOutlined />}>服务包管理</Menu.Item>
          <Menu.Item key="5" icon={<InfoCircleOutlined />}>资讯发布</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff' }}>
          <Row gutter={16}>
            <Col span={12}>
              <Card title="创建账户">
                <Text>在这里创建医生、助理和管理员账户。</Text>
                <Button type="primary" style={{ marginTop: 16 }}>创建新账户</Button>
              </Card>
            </Col>
            <Col span={12}>
              <Card title="病人列表">
                <Text>查看所有病人的详细信息。</Text>
                <Button type="primary" style={{ marginTop: 16 }}>查看列表</Button>
              </Card>
            </Col>
          </Row>

          <Row gutter={16} style={{ marginTop: 16 }}>
            <Col span={12}>
              <Card title="数据统计">
                <Text>查看病人的管理情况统计报表。</Text>
                <Button type="primary" style={{ marginTop: 16 }}>查看统计</Button>
              </Card>
            </Col>
            <Col span={12}>
              <Card title="服务包管理">
                <Text>管理及购买服务包的情况。</Text>
                <Button type="primary" style={{ marginTop: 16 }}>管理服务包</Button>
              </Card>
            </Col>
          </Row>

          <Card title="资讯发布" style={{ marginTop: 16 }}>
            <Text>发布最新的资讯和公告。</Text>
            <Button type="primary" style={{ marginTop: 16 }}>发布资讯</Button>
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;
