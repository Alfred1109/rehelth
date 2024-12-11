import React from 'react';
import { Layout, Menu, Card, Row, Col, Typography, Avatar, Button, Divider } from 'antd';
import { 
  TeamOutlined, 
  MessageOutlined, 
  ScheduleOutlined 
} from '@ant-design/icons';

const { Sider, Content } = Layout;
const { Title, Text } = Typography;

const MyDoctors: React.FC = () => {
  const doctors = [
    {
      name: '李医生',
      specialty: '心血管内科',
      avatar: 'https://example.com/doctor1.jpg',
      workTime: '周一至周五 9:00-17:00',
      description: '拥有20年临床经验，擅长心血管疾病诊治'
    },
    {
      name: '王助理',
      specialty: '健康管理',
      avatar: 'https://example.com/assistant1.jpg',
      workTime: '全天在线',
      description: '专业健康管理助理，提供全方位健康咨询'
    }
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={200} theme="light">
        <Menu mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<TeamOutlined />}>我的医生</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff' }}>
          <Title level={2}>我的医疗团队</Title>
          <Row gutter={16}>
            {doctors.map((doctor, index) => (
              <Col span={12} key={index}>
                <Card>
                  <Row align="middle">
                    <Col span={6}>
                      <Avatar 
                        size={100} 
                        src={doctor.avatar} 
                        alt={doctor.name} 
                      />
                    </Col>
                    <Col span={18}>
                      <Title level={4}>{doctor.name}</Title>
                      <Text type="secondary">{doctor.specialty}</Text>
                      <Divider />
                      <p>
                        <ScheduleOutlined /> 工作时间：{doctor.workTime}
                      </p>
                      <Text>{doctor.description}</Text>
                      <div style={{ marginTop: 16 }}>
                        <Button 
                          type="primary" 
                          icon={<MessageOutlined />} 
                          style={{ marginRight: 8 }}
                        >
                          在线咨询
                        </Button>
                        <Button>预约</Button>
                      </div>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MyDoctors;
