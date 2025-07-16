from sqlalchemy import Column, Integer, String, Date, ForeignKey, Enum, Text, Time, DateTime, func
from sqlalchemy.orm import relationship
from database import Base
import enum

class BookingStatusEnum(str, enum.Enum):
    pending = "pending"
    accepted = "accepted"
    rejected = "rejected"
    completed = "completed"
    cancelled = "cancelled"
    
class Booking(Base):
    __tablename__="bookings"
    
    id = Column(Integer, primary_key=True, index=True)
    customer_id = Column(Integer, ForeignKey("users.id"))
    provider_id = Column(Integer, ForeignKey("users.id"))
    service_id = Column(Integer, ForeignKey("services.id"))
    
    description = Column(Text, nullable=True)
    date = Column(Date, nullable=False)
    time_slot = Column(String, nullable=False)
    start_time = Column(Time, nullable=True)
    end_time = Column(Time, nullable=True)
    status = Column(Enum(BookingStatusEnum), default=BookingStatusEnum.pending, nullable=False)
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    
    customer = relationship("User", foreign_keys=[customer_id])
    provider = relationship("User", foreign_keys=[provider_id])
    reviews = relationship("Review", back_populates="booking")