from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class ProcessingRequest(BaseModel):
    image_id: str
    original_filename: str
    upload_time: datetime
    status: str = "pending"

class ProcessingResult(BaseModel):
    image_id: str
    processed_filename: str
    processing_time: datetime
    processing_duration: float
    success: bool
    error_message: Optional[str] = None
