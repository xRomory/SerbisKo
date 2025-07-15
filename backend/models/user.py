from sqlalchemy import Column, String, Boolean, Integer, Float
from sqlalchemy.orm import relationship
from database import Base
import uuid

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    public_id = Column(String, unique=True, default=lambda: str(uuid.uuid4()))
    
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    phone_number = Column(String, nullable=False)
    
    address_line = Column(String, nullable=False)
    region = Column(String, nullable=False)
    city = Column(String, nullable=False)
    
    latitude = Column(Float, nullable=True)
    longitude = Column(Float, nullable=True)
    
    role = Column(String, nullable=False)
    is_active = Column(Boolean, default=True)
    
    provider_profile = relationship("ServiceProviderProfile", back_populates="user", uselist=False)