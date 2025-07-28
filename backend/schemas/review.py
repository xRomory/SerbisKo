from pydantic import BaseModel, ConfigDict, Field
from typing import Optional, Annotated
from datetime import datetime

RatingInt = Annotated[int, Field(ge=1, le=5, description="Rating must be between 1 and 5")]

class ReviewBase(BaseModel):
    rating: RatingInt
    comment: Optional[str] = None
    
class ReviewCreate(ReviewBase):
    booking_id: int
    provider_id = int
    
class ReviewOut(ReviewBase):
    id: int
    booking_id: int
    provider_id: int
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    model_config = ConfigDict(from_attributes=True)