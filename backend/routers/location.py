from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db
from models.location import Location

router = APIRouter(prefix="/locations", tags=["Locations"])

@router.get("/regions")
def get_regions_and_cities(db: Session = Depends(get_db)):
    locations = db.query(Location.region, Location.city).all()
    
    region_map = {}
    for region, city in locations:
        region_map.setdefault(region, []).append(city)
        
    return region_map

@router.get("/cities")
def get_all_cities(db: Session = Depends(get_db)):
    cities = db.query(Location.city).distinct().order_by(Location.city).all()
    return [city[0] for city in cities]