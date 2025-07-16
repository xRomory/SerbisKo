from sqlalchemy import Column, Integer, String, Float, Index, DateTime, func, UniqueConstraint
from database import Base

class Location(Base):
    __tablename__ = "locations"
    
    id = Column(Integer, primary_key=True, index=True)
    region = Column(String, nullable=False)
    city = Column(String, nullable=False)
    latitude = Column(Float, nullable=True)
    longitude = Column(Float, nullable=True)
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    
    __table_args__ = (
        Index("ix_locations_region", "region"),
        Index("ix_locations_city", "city"),
        UniqueConstraint("region", "city", "latitude", "longitude", name="uq_location_unique"),
    )