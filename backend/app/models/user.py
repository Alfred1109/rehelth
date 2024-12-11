from sqlalchemy import Column, Integer, String, Enum, DateTime
from sqlalchemy.orm import relationship
from ..database import Base
from enum import Enum as PyEnum
from datetime import datetime

class UserRole(str, PyEnum):
    PATIENT = "patient"
    DOCTOR = "doctor"
    ADMIN = "admin"
    HEALTH_ASSISTANT = "health_assistant"

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    role = Column(Enum(UserRole), nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    
    # 可以根据需要添加关联关系
    # patient_profile = relationship("PatientProfile", back_populates="user")
    # doctor_profile = relationship("DoctorProfile", back_populates="user")

    def __repr__(self):
        return f"<User {self.username} ({self.role})>"
