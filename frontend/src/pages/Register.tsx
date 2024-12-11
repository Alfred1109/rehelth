import React, { useState } from 'react';
import { 
  Layout, 
  Card, 
  Form, 
  Input, 
  Button, 
  Select, 
  Steps, 
  message 
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
const { Step } = Steps;

const Register: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const steps = [
    {
      title: '基本信息',
      content: (
        <Form.Provider 
          onFormFinish={(name, { values }) => {
            setFormData({ ...formData, ...values });
            setCurrent(current + 1);
          }}
        >
          <Form name="basic_info">
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
              name="confirm_password"
              dependencies={['password']}
              rules={[
                { required: true, message: '请确认密码' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('两次密码不一致'));
                  },
                }),
              ]}
            >
              <Input.Password 
                prefix={<LockOutlined />} 
                placeholder="确认密码" 
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                下一步
              </Button>
            </Form.Item>
          </Form>
        </Form.Provider>
      )
    },
    {
      title: '个人信息',
      content: (
        <Form.Provider 
          onFormFinish={(name, { values }) => {
            setFormData({ ...formData, ...values });
            setCurrent(current + 1);
          }}
        >
          <Form name="personal_info">
            <Form.Item
              name="real_name"
              rules={[{ required: true, message: '请输入真实姓名' }]}
            >
              <Input 
                prefix={<UserOutlined />} 
                placeholder="真实姓名" 
              />
            </Form.Item>
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
              name="email"
              rules={[
                { required: true, message: '请输入邮箱' },
                { 
                  type: 'email', 
                  message: '请输入正确的邮箱' 
                }
              ]}
            >
              <Input 
                prefix={<MailOutlined />} 
                placeholder="邮箱" 
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                下一步
              </Button>
            </Form.Item>
          </Form>
        </Form.Provider>
      )
    },
    {
      title: '角色选择',
      content: (
        <Form.Provider 
          onFormFinish={(name, { values }) => {
            const finalData = { ...formData, ...values };
            console.log('注册信息:', finalData);
            message.success('注册成功');
            navigate('/login');
          }}
        >
          <Form name="role_selection">
            <Form.Item
              name="role"
              rules={[{ required: true, message: '请选择角色' }]}
            >
              <Select placeholder="选择注册角色">
                <Option value="patient">患者</Option>
                <Option value="doctor">医生</Option>
                <Option value="health_assistant">健康助理</Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                完成注册
              </Button>
            </Form.Item>
          </Form>
        </Form.Provider>
      )
    }
  ];

  return (
    <Layout style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
    }}>
      <Content style={{ width: 500 }}>
        <Card title="Rehelth System 用户注册">
          <Steps current={current}>
            {steps.map(item => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <div style={{ marginTop: 24 }}>
            {steps[current].content}
          </div>
        </Card>
      </Content>
    </Layout>
  );
};

export default Register;
