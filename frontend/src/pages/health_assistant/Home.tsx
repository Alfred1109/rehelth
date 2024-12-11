import React from 'react';
import { Layout, Menu, Card, Row, Col, Typography, Avatar, Button, List, Tag, Statistic } from 'antd';
import { 
  MessageOutlined, 
  TeamOutlined, 
  ScheduleOutlined, 
  InfoCircleOutlined 
} from '@ant-design/icons';

const { Sider, Content } = Layout;
const { Title, Text } = Typography;

const HealthAssistantHome: React.FC = () => {
  const patientList = [
    { 
      name: '张三', 
      status: '康复中', 
      lastInteraction: '2小时前',
      tags: ['高血压', '糖尿病']
    },
    { 
      name: '李四', 
      status: '需要关注', 
      lastInteraction: '昨天',
      tags: ['心脏病']
    }
  ];

  const chatHistory = [
    { 
      name: '张三', 
      message: '请问我的康复计划什么时候开始？', 
      time: '10:30' 
    },
    { 
      name: '李四', 
      message: '最近感觉身体不太舒服', 
      time: '昨天' 
    }
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={200} theme="light">
        <Menu mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<TeamOutlined />}>患者列表</Menu.Item>
          <Menu.Item key="2" icon={<MessageOutlined />}>消息中心</Menu.Item>
          <Menu.Item key="3" icon={<ScheduleOutlined />}>日程管理</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff' }}>
          <Card style={{ marginBottom: 16 }}>
            <Row>
              <Col span={8}>
                <Avatar size={64} style={{ backgroundColor: '#1890ff' }}>助</Avatar>
                <Title level={4} style={{ marginTop: 16 }}>健康助理</Title>
              </Col>
              <Col span={16}>
                <Title level={5}>今日工作概览</Title>
                <Row gutter={16}>
                  <Col span={8}>
                    <Card>
                      <Statistic title="待处理患者" value={5} />
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card>
                      <Statistic title="未读消息" value={3} />
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card>
                      <Statistic title="今日预约" value={2} />
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>

          <Row gutter={16}>
            <Col span={12}>
              <Card title="患者列表">
                <List
                  itemLayout="horizontal"
                  dataSource={patientList}
                  renderItem={(patient) => (
                    <List.Item
                      actions={[<Button type="link">详情</Button>]}
                    >
                      <List.Item.Meta
                        title={patient.name}
                        description={
                          <>
                            <Text>{patient.status}</Text>
                            <div style={{ marginTop: 8 }}>
                              {patient.tags.map(tag => (
                                <Tag key={tag}>{tag}</Tag>
                              ))}
                            </div>
                          </>
                        }
                      />
                      <div>{patient.lastInteraction}</div>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card title="消息中心">
                <List
                  itemLayout="horizontal"
                  dataSource={chatHistory}
                  renderItem={(chat) => (
                    <List.Item>
                      <List.Item.Meta
                        title={chat.name}
                        description={chat.message}
                      />
                      <div>{chat.time}</div>
                    </List.Item>
                  )}
                />
                <Button type="primary" block style={{ marginTop: 16 }}>
                  开始新的对话
                </Button>
              </Card>
            </Col>
          </Row>

          <Card title="今日提醒" style={{ marginTop: 16 }}>
            <List
              itemLayout="horizontal"
              dataSource={[
                { title: '患者康复计划审核', description: '需要审核2份康复计划' },
                { title: '健康教育', description: '下午2点进行线上健康讲座' }
              ]}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    title={item.title}
                    description={item.description}
                  />
                  <Button type="link">查看详情</Button>
                </List.Item>
              )}
            />
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
};

export default HealthAssistantHome;
