from pydantic import BaseModel
from typing import Optional, List

class ProviderProfileBase(BaseModel):
    service_type: str
    bio: Optional[str] = None
    available_days: Optional[List[str]] = []
    profile_photo: Optional[str] = None
    experience_years: Optional[int] = None
    rate: Optional[str] = None
    is_verified: Optional[str] = "pending"
    
class ProviderProfileCreate(ProviderProfileBase):
    pass

class ProviderProfileOut(ProviderProfileBase):
    class Config:
        orm_mode = True