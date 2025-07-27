from pydantic import BaseModel, ConfigDict
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
    
    model_config = ConfigDict(from_attributes=True)