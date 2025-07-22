from datetime import datetime, timezone

def utcnow():
    return datetime.now(timezone.utc)

# --- Unique Username Generator ---
import random
import string
from sqlalchemy.orm import Session
from models.user import User

def generate_unique_username(db: Session, prefix="serbisko_", length=8):
    while True:
        username = prefix + ''.join(random.choices(string.ascii_lowercase + string.digits, k=length))
        
        if not db.query(User).filter_by(username=username).first():
            return username