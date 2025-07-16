from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from database import Base

class Review(Base):
    __tablename__ = "reviews"
    
    id = Column(Integer, primary_key=True, index=True)
    provider_id = Column(Integer, ForeignKey("provider_profiles.id"), nullable=False)
    booking_id = Column(Integer, ForeignKey("bookings.id"), unique=True)
    rating = Column(Integer, nullable=False)
    comment = Column(String, nullable=True)
    
    booking = relationship("Booking", back_populates="reviews")
    provider = relationship("ServiceProviderProfile", back_populates="reviews")