from sqlalchemy import Column, String, Boolean, Integer, ForeignKey
from sqlalchemy.orm import relationship
from database import Base

class ServiceProvidersProfile(Base):
    __tablename__ = "provider_profiles"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), unique=True)
    
    # Profile Completion
    service_type = Column(String, nullable=False)
    bio = Column(String, nullable=True)
    available_days = Column(String, nullable=True)
    profile_photo = Column(String, nullable=True)
    experience_years = Column(String, nullable=True)
    rate = Column(String, nullable=True)
    is_verified = Column(String, default="pending")
    
    user = relationship("User", back_populates="provider_profile")