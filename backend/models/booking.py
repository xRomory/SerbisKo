from sqlalchemy import Column, Integer, String, Date, Time, ForeignKey, Enum, Text
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
    date = Column(Date, nullable=True)
    start_time = Column(Time, nullable=False)
    end_time = Column(Time, nullable=False)
    status = Column(Enum(BookingStatusEnum), default=BookingStatusEnum.pending)
    
    customer = relationship("User", foreign_keys=[customer_id])
    provider = relationship("User", foreign_keys=[provider_id])