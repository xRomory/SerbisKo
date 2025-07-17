from fastapi import APIRouter, HTTPException, Depends, status
from sqlalchemy.orm import Session
from database import get_db
from schemas.auth import SignUpRequest, LoginRequest, AuthResponse
from services.auth import verify_password, get_password_hash, create_access_token
from models.user import User
from config import settings
from common.utils import utcnow

router = APIRouter(prefix="/auth", tags=["Auth"])

@router.post("/signup")
def signup(data: SignUpRequest, db: Session = Depends(get_db)):
    existing_user = db.query(User).filter(User.email == data.email).first()
    if existing_user:
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail="Email already registered")
    
    hashed_pw = get_password_hash(data.password)
    new_user = User(
        first_name = data.first_name,
        last_name = data.last_name,
        email = data.email,
        hashed_password = hashed_pw,
        phone_number = data.phone_number,
        address_line = data.address_line,
        
    )