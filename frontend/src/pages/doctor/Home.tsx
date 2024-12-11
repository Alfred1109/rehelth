import React from 'react';
import { Layout, Menu, Card, Row, Col, Typography, Avatar, Button, Carousel, Table } from 'antd';
import { 
  UserOutlined, 
  NotificationOutlined, 
  ScheduleOutlined, 
  TeamOutlined, 
  InfoCircleOutlined,
  FileTextOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Sider, Content } = Layout;
const { Title, Text } = Typography;

const columns = [
  {
    title: '患者姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '诊断',
    dataIndex: 'diagnosis',
    key: 'diagnosis',
  },
  {
    title: '操作',
    key: 'action',
    render: () => (
      <Button type="link">查看详情</Button>
    ),
  },
];

const data = [
  {
    key: '1',
    name: '张三',
    age: 32,
    diagnosis: '高血压',
  },
  {
    key: '2',
    name: '李四',
    age: 42,
    diagnosis: '糖尿病',
  },
];

const DoctorHome: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 清除本地存储的登录信息
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    // 跳转到登录页
    navigate('/login');
  };

  const patientReports = [
    '患者张三：血压正常，继续观察',
    '患者李四：糖尿病控制良好',
    '患者王五：建议增加锻炼'
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider 
        width={200} 
        theme="light"
        style={{ 
          borderRight: '1px solid #f0f0f0',
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div style={{ height: 64, padding: '16px', borderBottom: '1px solid #f0f0f0' }}>
          <Title level={4} style={{ margin: 0 }}>医生工作台</Title>
        </div>
        <Menu 
          mode="inline" 
          defaultSelectedKeys={['1']}
          style={{ borderRight: 'none', flex: 1 }}
        >
          <Menu.Item key="1" icon={<UserOutlined />}>工作台</Menu.Item>
          <Menu.Item key="2" icon={<NotificationOutlined />}>通知</Menu.Item>
          <Menu.Item key="3" icon={<FileTextOutlined />}>患者列表</Menu.Item>
        </Menu>
        <Menu 
          mode="inline" 
          selectable={false}
          style={{ borderRight: 'none', borderTop: '1px solid #f0f0f0' }}
        >
          <Menu.Item 
            key="logout" 
            icon={<LogoutOutlined />} 
            onClick={handleLogout}
            style={{ color: '#ff4d4f' }}
          >
            退出登录
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ marginLeft: 200, minHeight: '100vh' }}>
        <Content style={{ margin: '24px', padding: '24px', background: '#f5f5f5' }}>
          <Card bordered={false} style={{ marginBottom: 24 }}>
            <Row>
              <Col xs={24} sm={8}>
                <Avatar size={64} icon={<UserOutlined />} />
                <Button style={{ marginLeft: 16 }}>我的二维码</Button>
              </Col>
              <Col xs={24} sm={16}>
                <Title level={4}>个人基本信息</Title>
                <Text>这里展示医生的个人基本信息。</Text>
              </Col>
            </Row>
          </Card>

          <Card title="病人情况报告" bordered={false} style={{ marginBottom: 24 }}>
            <Carousel autoplay>
              {patientReports.map((report, index) => (
                <div key={index} style={{ padding: '16px 0' }}>
                  <Text>{report}</Text>
                </div>
              ))}
            </Carousel>
          </Card>

          <Row gutter={[24, 24]}>
            <Col xs={24} lg={12}>
              <Card title="病人列表" bordered={false}>
                <Table columns={columns} dataSource={data} />
              </Card>
            </Col>
            <Col xs={24} lg={12}>
              <Card title="日程计划" bordered={false}>
                <Text>这里展示日程计划和预约信息。</Text>
              </Card>
            </Col>
          </Row>

          <Card title="资讯" bordered={false} style={{ marginTop: 24 }}>
            <Text>最新的医疗资讯和公告。</Text>
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DoctorHome;
