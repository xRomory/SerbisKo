from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime
from common.types import PHPhoneFormat, UserRoleEnum, PasswordStr

class SignUpRequest(BaseModel):
    first_name: str
    last_name: str
    email: EmailStr
    phone_number: PHPhoneFormat
    address_line: Optional[str]
    region: str
    city: str
    role: UserRoleEnum
    password: PasswordStr
    confirm_password: PasswordStr
    
class LoginRequest(BaseModel):
    email: EmailStr
    password: str
    
class AuthResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    first_name: str
    last_name: str
    email: EmailStr
    phone_number: str
    address_line: Optional[str]
    region: str
    city: str
    role: UserRoleEnum
    user_id: str
    expires_in: int
    created_at: datetime
    
    class Config:
        json_encoders = {
            datetime: lambda v: v.isoformat()
        }