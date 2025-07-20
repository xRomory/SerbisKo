from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import auth, location
from config import settings
import os

origins = os.getenv("CORS_ORIGINS", "http:localhost:3000").split(",")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(location.router)

@app.get("/")
def read_root():
    return {"return": "Hello from FastAPI!"}