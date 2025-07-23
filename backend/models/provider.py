from sqlalchemy import Column, String, Integer, ForeignKey, Float, Enum, JSON, DateTime, func, Index
from sqlalchemy.orm import relationship
from database import Base
import enum

class ProviderVerifiedStatus(str, enum.Enum):
    pending = "pending"
    verified = "verified"
    not_verified = "not_verified"

class ServiceProviderProfile(Base):
    __tablename__ = "provider_profiles"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), unique=True)
    
    latitude = Column(Float, nullable=True)
    longitude = Column(Float, nullable=True)
    
    # Profile Completion
    service_type = Column(String, nullable=False)
    services_offered = Column(JSON, nullable=True)  # List of service IDs, e.g. [1, 2, 3]
    bio = Column(String, nullable=True)
    available_days = Column(JSON, nullable=True)    # List of available days, e.g. ["Monday", "Tuesday", "Friday"]
    portfolio_photo = Column(JSON, nullable=True)
    experience_years = Column(Integer, nullable=True)
    rate_per_hour = Column(Float, nullable=True)
    flat_fee = Column(Float, nullable=True)
    is_verified = Column(Enum(ProviderVerifiedStatus), default=ProviderVerifiedStatus.not_verified, nullable=False)
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    
    user = relationship("User", back_populates="provider_profile")
    reviews = relationship("Review", back_populates="provider")
    
    __table_args__ = (
        Index("ix_provider_profiles_service_type", "service_type"),
    )