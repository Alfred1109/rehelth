import React, { useState } from 'react';
import { 
  Layout, 
  Card, 
  Form, 
  Input, 
  Button, 
  Tabs, 
  message, 
  Select, 
  Checkbox 
} from 'antd';
import { 
  UserOutlined, 
  LockOutlined, 
  MobileOutlined, 
  MailOutlined 
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Content } = Layout;
const { Option } = Select;

const Login: React.FC = () => {
  const [loginType, setLoginType] = useState<'account' | 'mobile'>('account');
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    // 模拟登录逻辑
    const { username, password, role } = values;
    
    // 根据不同角色跳转到不同首页
    switch(role) {
      case 'patient':
        navigate('/patient');
        break;
      case 'doctor':
        navigate('/doctor');
        break;
      case 'admin':
        navigate('/admin');
        break;
      case 'health_assistant':
        navigate('/health-assistant');
        break;
      default:
        message.error('无效的用户角色');
    }
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <Layout style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
    }}>
      <Content style={{ width: 400 }}>
        <Card 
          title="Rehelth System" 
          extra={
            <Button type="link" onClick={handleRegister}>
              注册新账户
            </Button>
          }
        >
          <Tabs 
            centered 
            activeKey={loginType}
            onChange={(key) => setLoginType(key as 'account' | 'mobile')}
          >
            <Tabs.TabPane key="account" tab="账号登录">
              <Form
                name="account_login"
                initialValues={{ remember: true }}
                onFinish={onFinish}
              >
                <Form.Item
                  name="username"
                  rules={[{ required: true, message: '请输入用户名' }]}
                >
                  <Input 
                    prefix={<UserOutlined />} 
                    placeholder="用户名" 
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[{ required: true, message: '请输入密码' }]}
                >
                  <Input.Password 
                    prefix={<LockOutlined />} 
                    placeholder="密码" 
                  />
                </Form.Item>
                <Form.Item
                  name="role"
                  rules={[{ required: true, message: '请选择角色' }]}
                >
                  <Select placeholder="选择登录角色">
                    <Option value="patient">患者</Option>
                    <Option value="doctor">医生</Option>
                    <Option value="admin">管理员</Option>
                    <Option value="health_assistant">健康助理</Option>
                  </Select>
                </Form.Item>
                <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>记住我</Checkbox>
                  </Form.Item>
                  <a style={{ float: 'right' }} href="#">
                    忘记密码
                  </a>
                </Form.Item>
                <Form.Item>
                  <Button 
                    type="primary" 
                    htmlType="submit" 
                    style={{ width: '100%' }}
                  >
                    登录
                  </Button>
                </Form.Item>
              </Form>
            </Tabs.TabPane>
            <Tabs.TabPane key="mobile" tab="手机登录">
              <Form
                name="mobile_login"
                initialValues={{ remember: true }}
                onFinish={onFinish}
              >
                <Form.Item
                  name="mobile"
                  rules={[
                    { required: true, message: '请输入手机号' },
                    { 
                      pattern: /^1[3-9]\d{9}$/, 
                      message: '请输入正确的手机号' 
                    }
                  ]}
                >
                  <Input 
                    prefix={<MobileOutlined />} 
                    placeholder="手机号" 
                  />
                </Form.Item>
                <Form.Item
                  name="captcha"
                  rules={[{ required: true, message: '请输入验证码' }]}
                >
                  <Input 
                    prefix={<MailOutlined />} 
                    placeholder="验证码" 
                    suffix={
                      <Button type="link" size="small">
                        获取验证码
                      </Button>
                    }
                  />
                </Form.Item>
                <Form.Item
                  name="role"
                  rules={[{ required: true, message: '请选择角色' }]}
                >
                  <Select placeholder="选择登录角色">
                    <Option value="patient">患者</Option>
                    <Option value="doctor">医生</Option>
                    <Option value="admin">管理员</Option>
                    <Option value="health_assistant">健康助理</Option>
                  </Select>
                </Form.Item>
                <Form.Item>
                  <Button 
                    type="primary" 
                    htmlType="submit" 
                    style={{ width: '100%' }}
                  >
                    登录
                  </Button>
                </Form.Item>
              </Form>
            </Tabs.TabPane>
          </Tabs>
        </Card>
      </Content>
    </Layout>
  );
};

export default Login;
