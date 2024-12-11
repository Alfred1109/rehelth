import React from 'react';
import { Layout, Menu, Card, Row, Col, Typography, Progress, Statistic, Button } from 'antd';
import { 
  HeartOutlined, 
  MedicineBoxOutlined, 
  FileTextOutlined, 
  UserOutlined,
  ScheduleOutlined,
  LogoutOutlined 
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Sider, Content } = Layout;
const { Title, Text } = Typography;

const PatientHome: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 清除本地存储的登录信息
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    // 跳转到登录页
    navigate('/login');
  };

  const healthStats = [
    { title: '血压', value: '120/80', status: 'active', percent: 80 },
    { title: '血糖', value: '5.6', status: 'normal', percent: 60 },
    { title: '心率', value: '72', status: 'success', percent: 90 }
  ];

  const quickActions = [
    { 
      title: '我的医生', 
      icon: <UserOutlined />, 
      path: '/patient/my-doctors' 
    },
    { 
      title: '健康档案', 
      icon: <FileTextOutlined />, 
      path: '/patient/health-records' 
    },
    { 
      title: '康复计划', 
      icon: <MedicineBoxOutlined />, 
      path: '/patient/rehab-plan' 
    }
  ];

  return (
    <Layout>
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
          <Title level={4} style={{ margin: 0 }}>患者中心</Title>
        </div>
        <Menu 
          mode="inline" 
          defaultSelectedKeys={['1']} 
          style={{ borderRight: 'none', flex: 1 }}
        >
          <Menu.Item key="1" icon={<HeartOutlined />}>健康总览</Menu.Item>
          <Menu.Item key="2" icon={<ScheduleOutlined />}>预约管理</Menu.Item>
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
        <Content style={{ padding: '24px', background: '#f5f5f5' }}>
          <Card bordered={false} style={{ marginBottom: 24 }}>
            <Row gutter={[24, 24]} align="middle">
              <Col xs={24} sm={24} md={8}>
                <div style={{ padding: '16px 0' }}>
                  <Title level={4} style={{ margin: 0, marginBottom: '8px' }}>欢迎，张三</Title>
                  <Text type="secondary">今天状态不错！继续保持</Text>
                </div>
              </Col>
              <Col xs={24} sm={24} md={16}>
                <Row gutter={[16, 16]}>
                  {healthStats.map((stat, index) => (
                    <Col xs={24} sm={8} key={index}>
                      <Card bordered={false}>
                        <Statistic 
                          title={stat.title} 
                          value={stat.value} 
                          prefix={<HeartOutlined style={{ color: '#1890ff' }} />}
                          style={{ marginBottom: '8px' }}
                        />
                        <Progress 
                          percent={stat.percent} 
                          status={stat.status as any} 
                          strokeWidth={6}
                          showInfo={false}
                        />
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Card>

          <Card title="快速入口" bordered={false} style={{ marginBottom: 24 }}>
            <Row gutter={[16, 16]}>
              {quickActions.map((action, index) => (
                <Col xs={24} sm={12} md={8} key={index}>
                  <Card 
                    hoverable 
                    onClick={() => navigate(action.path)}
                    style={{ 
                      textAlign: 'center',
                      cursor: 'pointer'
                    }}
                  >
                    {React.cloneElement(action.icon, { 
                      style: { 
                        fontSize: 32, 
                        color: '#1890ff',
                        marginBottom: '8px',
                        display: 'block'
                      } 
                    })}
                    <Title level={5} style={{ margin: 0 }}>{action.title}</Title>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>

          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <Card 
                title="最新医疗建议" 
                bordered={false}
              >
                <Text>根据您的健康状况，建议：</Text>
                <ul style={{ paddingLeft: '20px', marginTop: '16px' }}>
                  <li style={{ marginBottom: '8px' }}>保持规律作息</li>
                  <li style={{ marginBottom: '8px' }}>适度运动</li>
                  <li style={{ marginBottom: '8px' }}>均衡饮食</li>
                </ul>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card 
                title="近期预约" 
                bordered={false}
              >
                <div style={{ textAlign: 'center', padding: '24px 0' }}>
                  <Text style={{ display: 'block', marginBottom: '16px' }}>暂无近期预约</Text>
                  <Button type="primary" size="large">预约医生</Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default PatientHome;
