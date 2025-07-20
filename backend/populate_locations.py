import os
import json
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models.location import Location
from database import Base
from dotenv import load_dotenv

load_dotenv()
DATABASE_URL = os.getenv("DATABASE_URL")
if not DATABASE_URL:
    raise RuntimeError("DATABASE_URL not set in environment variables.")

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(bind=engine)

def main():
    json_path = os.path.join(os.path.dirname(__file__), "ph_regions_cities.json")
    with open(json_path, "r", encoding="utf-8") as f:
        data = json.load(f)
        
    session = SessionLocal()
    
    try:
        count = 0
        for region, cities in data.items():
            for city in cities:
                exists = session.query(Location).filter_by(region=region, city=city).first()
                
                if not exists:
                    loc = Location(region=region, city=city)
                    session.add(loc)
                    count += 1
                    
        session.commit()
        print(f"Locations populated sucessfully. {count} new records added.")
        
    except Exception as e:
        session.rollback()
        print("Error:", e)
    finally:
        session.close()

if __name__ == "__main__":
    main()