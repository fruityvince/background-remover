from pydantic_settings import BaseSettings
from pydantic import Field
import os

class Settings(BaseSettings):
    # Database
    MONGODB_URL: str = Field(..., env="MONGODB_URL")
    DATABASE_NAME: str = Field(..., env="DATABASE_NAME")
    
    # File paths
    UPLOAD_DIR: str = Field(..., env="UPLOAD_DIR")
    PROCESSED_DIR: str = Field(..., env="PROCESSED_DIR")
    TEMP_DIR: str = Field(..., env="TEMP_DIR")
    
    # App configuration
    APP_HOST: str = Field(..., env="APP_HOST")
    APP_PORT: int = Field(..., env="APP_PORT")
    DEBUG_MODE: bool = Field(..., env="DEBUG_MODE")
    
    # Security
    SECRET_KEY: str = Field(..., env="SECRET_KEY")
    JWT_ALGORITHM: str = Field(..., env="JWT_ALGORITHM")
    
    # Limits
    MAX_FILE_SIZE: int = Field(..., env="MAX_FILE_SIZE")
    RATE_LIMIT: int = Field(..., env="RATE_LIMIT")
    
    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"
        case_sensitive = True  # This should be True for your case

# Create settings instance
settings = Settings()

# Ensure directories exist
os.makedirs(settings.UPLOAD_DIR, exist_ok=True)
os.makedirs(settings.PROCESSED_DIR, exist_ok=True)
os.makedirs(settings.TEMP_DIR, exist_ok=True)

print("Settings loaded successfully!")
print(f"MongoDB URL: {settings.MONGODB_URL}")
print(f"Upload dir: {settings.UPLOAD_DIR}")
