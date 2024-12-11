import React from 'react';
import { Layout, Menu, Card, Row, Col, Typography, Progress, Button, Timeline } from 'antd';
import { 
  FileTextOutlined, 
  CheckCircleOutlined,
  ClockCircleOutlined
} from '@ant-design/icons';

const { Sider, Content } = Layout;
const { Title, Text } = Typography;

const RehabPlan: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={200} theme="light">
        <Menu mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<FileTextOutlined />}>康复计划</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff' }}>
          <Row gutter={16}>
            <Col span={16}>
              <Card title="当前康复计划">
                <Title level={4}>心血管康复训练计划</Title>
                <Progress percent={65} status="active" />
                <Timeline style={{ marginTop: 16 }}>
                  <Timeline.Item color="green" dot={<CheckCircleOutlined />}>
                    <Text strong>第1-2周：基础有氧训练</Text>
                    <p>每周3次，每次30分钟慢走或游泳</p>
                  </Timeline.Item>
                  <Timeline.Item color="green" dot={<CheckCircleOutlined />}>
                    <Text strong>第3-4周：间歇训练</Text>
                    <p>每周4次，包括有氧和力量训练</p>
                  </Timeline.Item>
                  <Timeline.Item color="blue" dot={<ClockCircleOutlined />}>
                    <Text strong>第5-6周：强化训练</Text>
                    <p>增加训练强度，进行心肺功能恢复</p>
                  </Timeline.Item>
                  <Timeline.Item color="gray">
                    <Text strong>第7-8周：维持训练</Text>
                    <p>巩固前期训练成果</p>
                  </Timeline.Item>
                </Timeline>
                <Button type="primary" style={{ marginTop: 16 }}>开始今日训练</Button>
              </Card>
            </Col>
            <Col span={8}>
              <Card title="训练记录">
                <Timeline>
                  <Timeline.Item color="green">2024-01-05 完成有氧训练</Timeline.Item>
                  <Timeline.Item color="green">2024-01-03 完成力量训练</Timeline.Item>
                  <Timeline.Item color="red">2024-01-01 未完成训练</Timeline.Item>
                  <Timeline.Item color="green">2023-12-30 完成有氧训练</Timeline.Item>
                </Timeline>
              </Card>
              <Card title="训练建议" style={{ marginTop: 16 }}>
                <Text>根据您的身体状况，建议：</Text>
                <ul>
                  <li>保持规律作息</li>
                  <li>适当补充水分</li>
                  <li>注意训练强度</li>
                </ul>
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default RehabPlan;
