from pydantic import BaseModel, ConfigDict
from datetime import datetime
from typing import Optional

class ServiceBase(BaseModel):
    name: str
    description: str | None = None
    category: str
    
class ServiceCreate(ServiceBase):
    pass

class ServiceOut(ServiceBase):
    id: int
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None
    
    model_config = ConfigDict(from_attributes=True)