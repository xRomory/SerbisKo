from pydantic import BaseModel, EmailStr, Field
from typing import Literal, Optional, Annotated

PasswordStr = Annotated[
        str,
        Field(min_length=8, max_length=64, description="Must be 8-64 characters")
    ]

class UserBase(BaseModel):
    first_name: str
    last_name: str
    email: EmailStr
    phone_number: str
    address_line: Optional[str]
    region: str
    city: str
    role: Literal["customer", "provider"]
    
class UserCreate(UserBase):
    password: PasswordStr
    confirm_password: PasswordStr
    
class UserOut(BaseModel):
    public_id: str
    first_name: str
    last_name: str
    email: EmailStr
    phone_number: str
    region: str
    city: str
    role: str
    
    class Config:
        orm_mode = True