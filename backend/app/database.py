from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession, async_sessionmaker
from sqlalchemy.orm import declarative_base
from sqlalchemy.ext.declarative import declarative_base

# SQLite异步引擎
DATABASE_URL = "sqlite+aiosqlite:///./health_system.db"

engine = create_async_engine(
    DATABASE_URL, 
    echo=True,  # 开发阶段打印SQL语句
    future=True
)

# 创建异步会话工厂
AsyncSessionLocal = async_sessionmaker(
    engine, 
    expire_on_commit=False, 
    class_=AsyncSession
)

# 基础模型
Base = declarative_base()
