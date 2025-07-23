from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime
from common.types import PasswordStr, PHPhoneFormat, UserRoleEnum

class UserBase(BaseModel):
    username: str
    first_name: str
    last_name: str
    email: EmailStr
    phone_number: PHPhoneFormat
    address_line: Optional[str]
    region: str
    city: str
    role: UserRoleEnum
    
class UserCreate(UserBase):
    password: PasswordStr
    confirm_password: PasswordStr
    
class UserOut(BaseModel):
    public_id: str
    username: str
    profile_photo: str
    first_name: str
    last_name: str
    email: EmailStr
    phone_number: PHPhoneFormat
    region: str
    city: str
    role: UserRoleEnum
    reated_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None
    
    class Config:
        orm_mode = True
        
class ProfilePhotoUpdate(BaseModel):
    profile_photo: str