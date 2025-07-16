from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime
from enum import Enum

class ProviderVerifiedStatus(str, Enum):
    pending = "pending"
    verified = "verified"
    not_verified = "not_verified"

class ProviderProfileBase(BaseModel):
    service_type: str
    services_offered: Optional[List[int]] = None
    latitude: Optional[float] = None
    longitude: Optional[float] = None
    bio: Optional[str] = None
    available_days: Optional[List[str]] = None
    profile_photo: Optional[str] = None
    experience_years: Optional[int] = None
    rate_per_hour: Optional[float] = None
    flat_fee: Optional[float] = None
    is_verified: ProviderVerifiedStatus = ProviderVerifiedStatus.pending
    
class ProviderProfileCreate(ProviderProfileBase):
    pass

class ProviderProfileOut(ProviderProfileBase):
    id: int
    user_id: int
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None
    
    class Config:
        orm_mode = True