from sqlalchemy import Column, Integer, String, Float
from database import Base

class Location(Base):
    __tablename__ = "locations"
    
    id = Column(Integer, primary_key=True, index=True)
    region = Column(String, nullable=False)
    city = Column(String, nullable=False)
    
    latitude = Column(Float, nullable=True)
    longitude = Column(Float, nullable=True)