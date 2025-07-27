from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import auth, location, user
from config import settings

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
app.include_router(user.profile_router)

@app.get("/")
def read_root():
    return {"return": "Hello from FastAPI!"}