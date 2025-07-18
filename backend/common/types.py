from pydantic import Field
from enum import Enum
from typing import Annotated

# --- User Validation ---
class UserRoleEnum(str, Enum):
    customer = "customer"
    provider = "provider"
    
PasswordStr = Annotated [
    str,
    Field(min_length=8, max_length=64, description="Must be 8-64 characters")
]

PHPhoneFormat = Annotated [
    str,
    Field(min_length=10, max_length=15, pattern=r"^(09|\+639)\d{9}$", description="Must be a valid Philippine mobile number (e.g., 09171234567 or +639171234567)")
]