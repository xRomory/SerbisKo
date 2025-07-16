from pydantic import BaseModel
from datetime import date, time
from typing import Optional
from datetime import datetime
from enum import Enum

class BookingStatusEnum(str, Enum):
    pending = "pending"
    accepted = "accepted"
    rejected = "rejected"
    completed = "completed"
    cancelled = "cancelled"

class BookingBase(BaseModel):
    service_id: int
    description: str | None = None
    date: date
    time_slot: str
    start_time: Optional[time] = None
    end_time: Optional[time] = None
    
class BookingCreate(BookingBase):
    provider_id: int
    
class BookingOut(BookingBase):
    id: int
    customer_id: int
    provider_id: int
    status: BookingStatusEnum
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None
    
    class Config:
        orm_mode = True