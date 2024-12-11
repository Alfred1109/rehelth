import React from 'react';
import { Layout, Menu, Card, Row, Col, Typography, Statistic, Progress, Table } from 'antd';
import { 
  UserOutlined, 
  HeartOutlined, 
  MedicineBoxOutlined 
} from '@ant-design/icons';

const { Sider, Content } = Layout;
const { Title, Text } = Typography;

const HealthRecords: React.FC = () => {
  const basicInfoColumns = [
    { title: '项目', dataIndex: 'item', key: 'item' },
    { title: '数值', dataIndex: 'value', key: 'value' },
  ];

  const basicInfoData = [
    { key: '1', item: '姓名', value: '张三' },
    { key: '2', item: '性别', value: '男' },
    { key: '3', item: '年龄', value: '35岁' },
    { key: '4', item: '身高', value: '175cm' },
    { key: '5', item: '体重', value: '70kg' },
  ];

  const medicalHistoryColumns = [
    { title: '日期', dataIndex: 'date', key: 'date' },
    { title: '诊断', dataIndex: 'diagnosis', key: 'diagnosis' },
    { title: '医院', dataIndex: 'hospital', key: 'hospital' },
  ];

  const medicalHistoryData = [
    { 
      key: '1', 
      date: '2023-06-15', 
      diagnosis: '高血压', 
      hospital: '市中心医院' 
    },
    { 
      key: '2', 
      date: '2023-03-22', 
      diagnosis: '血脂异常', 
      hospital: '人民医院' 
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={200} theme="light">
        <Menu mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>基本信息</Menu.Item>
          <Menu.Item key="2" icon={<HeartOutlined />}>健康指标</Menu.Item>
          <Menu.Item key="3" icon={<MedicineBoxOutlined />}>病历记录</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff' }}>
          <Row gutter={16}>
            <Col span={16}>
              <Card title="基本信息">
                <Table 
                  columns={basicInfoColumns} 
                  dataSource={basicInfoData} 
                  pagination={false} 
                />
              </Card>
              
              <Card title="健康指标" style={{ marginTop: 16 }}>
                <Row gutter={16}>
                  <Col span={8}>
                    <Statistic 
                      title="血压" 
                      value="120/80" 
                      suffix="mmHg" 
                      prefix={<HeartOutlined />} 
                    />
                    <Progress percent={80} status="active" />
                  </Col>
                  <Col span={8}>
                    <Statistic 
                      title="血糖" 
                      value="5.6" 
                      suffix="mmol/L" 
                      prefix={<HeartOutlined />} 
                    />
                    <Progress percent={60} status="normal" />
                  </Col>
                  <Col span={8}>
                    <Statistic 
                      title="血脂" 
                      value="正常" 
                      prefix={<HeartOutlined />} 
                    />
                    <Progress percent={90} status="success" />
                  </Col>
                </Row>
              </Card>
            </Col>
            
            <Col span={8}>
              <Card title="病历记录">
                <Table 
                  columns={medicalHistoryColumns} 
                  dataSource={medicalHistoryData} 
                  pagination={false} 
                />
              </Card>
              
              <Card title="健康建议" style={{ marginTop: 16 }}>
                <Text>根据您的健康指标，建议：</Text>
                <ul>
                  <li>保持规律作息</li>
                  <li>控制饮食</li>
                  <li>适度运动</li>
                  <li>定期体检</li>
                </ul>
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default HealthRecords;
