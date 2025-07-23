from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from database import get_db
from models.user import User
from schemas.user import ProfilePhotoUpdate
from common.dependencies import get_current_user

profile_router = APIRouter(prefix="/profile", tags=["Profile"])

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