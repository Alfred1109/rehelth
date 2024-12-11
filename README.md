# Rehelth System

## 项目介绍
Rehelth System 是一个全面的健康管理平台，旨在提供个性化的医疗服务和健康追踪。

## 技术栈
- 后端: FastAPI (Python)
- 前端: React + TypeScript + Ant Design
- 数据库: SQLite (异步 SQLAlchemy)

## 项目结构
rehelthsytem/
├── backend/          # 后端服务
│   ├── app/          # 应用代码
│   ├── tests/        # 测试目录
│   └── requirements.txt
├── frontend/         # 前端服务
│   ├── src/          # 源代码
│   └── package.json
└── run.py            # 项目启动脚本

## 开发环境准备

### 前提条件
- Python 3.11+
- Node.js 16+
- npm 8+

### 安装步骤

1. 克隆项目
```bash
git clone https://github.com/yourusername/rehelthsytem.git
cd rehelthsytem
```

2. 启动项目
```bash
# 直接运行启动脚本
python run.py

# 或者手动启动
# 后端
cd backend
python -m venv venv
source venv/bin/activate  # Windows使用 venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload

# 前端
cd ../frontend
npm install
npm run dev
```

## 功能特性
- 多角色用户系统（患者、医生、健康助理、管理员）
- 个性化健康管理
- 在线问诊
- 康复计划追踪
- 健康数据可视化

## 贡献指南
1. Fork 项目
2. 创建 feature 分支 (`git checkout -b feature/AmazingFeature`)
3. 提交代码 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 许可证
MIT License

## 联系方式
项目负责人：[Your Name]
项目链接：[https://github.com/yourusername/rehelthsytem]
