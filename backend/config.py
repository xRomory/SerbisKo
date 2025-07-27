from pydantic import Field, field_validator
from pydantic_settings import SettingsConfigDict, BaseSettings
from typing import List

class Settings(BaseSettings):
    SECRET_KEY: str = Field(..., env="SECRET_KEY")
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60
    
    DATABASE_URL: str = Field(..., env="DATABASE_URL")
    
    # --- For Self-Hosting Server ---
    cors_origins: List[str] = []
    
    @field_validator("cors_origins", mode="before")
    def split_origins(cls, v):
        if isinstance(v, str):
            v = v.strip()
            if v.startswith("[") and v.endswith("]"):
                import json
                return json.loads(v)
            return [i.strip() for i in v.split(",") if i.strip()]
        
        return v
    
    model_config = SettingsConfigDict(env_file=".env", extra="forbid")
    
settings = Settings()