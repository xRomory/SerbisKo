from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from database import get_db
from models.user import User
from schemas.user import ProfilePhotoUpdate, UserEdit
from schemas.auth import AuthResponse
from common.dependencies import get_current_user

profile_router = APIRouter(prefix="/profile", tags=["Profile"])

# Update Username Endpoint
@profile_router.patch("/username")
def update_username(new_username: str, user_id: str, db: Session = Depends(get_db)):
    if db.query(User).filter_by(username=new_username).first():
        raise HTTPException(status_code=409, detail="Username already taken")
    
    user = db.query(User).filter_by(public_id=user_id).first()
    
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    user.username = new_username
    db.commit()
    db.refresh(user)
    
    return {"message": "Username udpated", "username": user.username}

# Uploading of Profile Picture Endpoint
@profile_router.patch("/profile-photo")
def update_profile_photo(
    data: ProfilePhotoUpdate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    current_user.profile_photo = data.profile_photo
    db.commit()
    db.refresh(current_user)
    return {"message": "Profile photo updated", "profile_photo": current_user.profile_photo}

# User Profile Edit Endpoint
@profile_router.patch("/edit")
def edit_profile(
    data: UserEdit,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    if data.username and data.username != current_user.username:
        if db.query(User).filter_by(username=data.username).first():
            raise HTTPException(status_code=409, detail="Username already taken")
        current_user.username = data.username
        
    for field, value in data.model_dump(exclude_unset=True).items():
        if field != "username" and value != "":
            setattr(current_user, field, value)
            
    db.commit()
    db.refresh(current_user)
    
    return {
        "message": "Profile updated successfully",
        "username": current_user.username,
        "first_name": current_user.first_name,
        "last_name": current_user.last_name,
        "email": current_user.email,
        "phone_number": current_user.phone_number,
        "address_line": current_user.address_line,
        "region": current_user.region,
        "city": current_user.city,
        "profile_photo": current_user.profile_photo,
    }