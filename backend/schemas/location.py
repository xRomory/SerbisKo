from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class LocationBase(BaseModel):
    region: str
    city: str
    latitude: float
    longitude: float
    
class LocationCreate(LocationBase):
    pass

class LocationOut(LocationBase):
    id: int
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None
    
    class Config:
        orm_mode = True