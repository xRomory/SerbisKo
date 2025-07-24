from fastapi import APIRouter, HTTPException, Depends, status
from sqlalchemy.orm import Session
from database import get_db
from schemas.auth import SignUpRequest, LoginRequest, AuthResponse
from services.auth import verify_password, get_password_hash, create_access_token
from models.user import User
from config import settings
from common.utils import generate_unique_username

router = APIRouter(prefix="/auth", tags=["Auth"])

@router.post("/signup")
def signup(data: SignUpRequest, db: Session = Depends(get_db)):
    existing_user = db.query(User).filter(User.email == data.email).first()
    if existing_user:
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail="Email already registered")
    
    if data.password != data.confirm_password:
        raise HTTPException(status_code=400, detail="Passwords do not match")
    
    hashed_pw = get_password_hash(data.password)
    username = generate_unique_username(db)
    new_user = User(
        username = username,
        first_name = data.first_name,
        last_name = data.last_name,
        email = data.email,
        hashed_password = hashed_pw,
        phone_number = data.phone_number,
        address_line = data.address_line,
        region = data.region,
        city = data.city,
        role = data.role
    )
    
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    
    token = create_access_token({
        "sub": str(new_user.public_id),
        "role": new_user.role,
        "email": new_user.email,
    })
    
    return AuthResponse(
        access_token=token,
        token_type="bearer",
        username=new_user.username,
        first_name=new_user.first_name,
        last_name=new_user.last_name,
        email=new_user.email,
        phone_number=new_user.phone_number,
        address_line=new_user.address_line,
        region=new_user.region,
        city=new_user.city,
        role=new_user.role,
        user_id=str(new_user.public_id),
        expires_in=settings.ACCESS_TOKEN_EXPIRE_MINUTES * 60,
        created_at=new_user.created_at,
    )
    
@router.post("/login")
def login(data: LoginRequest, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == data.email).first()
    if not user or not verify_password(data.password, user.hashed_password):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")
    
    token = create_access_token({
        "sub": str(user.public_id),
        "role": user.role,
        "email": user.email,
    })
    
    return AuthResponse(
        access_token=token,
        token_type="bearer",
        username=user.username,
        first_name=user.first_name,
        last_name=user.last_name,
        email=user.email,
        phone_number=user.phone_number,
        address_line=user.address_line,
        region=user.region,
        city=user.city,
        role=user.role,
        user_id=str(user.public_id),
        expires_in=settings.ACCESS_TOKEN_EXPIRE_MINUTES * 60,
        created_at=user.created_at,
        profile_photo=user.profile_photo
    )
    
# Deletion of test data (Will deleted once api is connected to frontend)
@router.delete("/delete-test-data")
def delete_test_users(db: Session = Depends(get_db)):
    deleted = db.query(User).filter(User.email.like("%@example.com")).delete(synchronize_session=False)
    db.commit()
    return {"deleted_count": deleted}