from fastapi import APIRouter, UploadFile, File, HTTPException, BackgroundTasks
from fastapi.responses import FileResponse
import uuid
import os
from datetime import datetime
from ..services.background_removal import BackgroundRemovalService
from ..models.schemas import ProcessingRequest, ProcessingResult
from ..core.config import settings
from ..services.file_processing import save_upload_file

router = APIRouter()
bg_removal_service = BackgroundRemovalService()

@router.post("/process-image/")
async def process_image(
    background_tasks: BackgroundTasks,
    file: UploadFile = File(...)
):
    try:
        # Generate unique ID for this request
        image_id = str(uuid.uuid4())
        
        # Save uploaded file
        input_path = await save_upload_file(file, settings.UPLOAD_DIR, image_id)
        
        # Read file data
        with open(input_path, 'rb') as f:
            image_data = f.read()
        
        # Process image
        output_filename, processing_time, success, error = bg_removal_service.remove_background(
            image_data, image_id
        )
        
        if not success:
            raise HTTPException(status_code=500, detail=f"Processing failed: {error}")
        
        # Here you would save to MongoDB
        # await save_to_database(image_id, file.filename, processing_time, success)
        
        return {
            "image_id": image_id,
            "processed_filename": output_filename,
            "processing_time": processing_time,
            "success": success
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/download/{image_id}")
async def download_processed_image(image_id: str):
    filename = f"{image_id}_processed.png"
    file_path = os.path.join(settings.PROCESSED_DIR, filename)
    
    if not os.path.exists(file_path):
        raise HTTPException(status_code=404, detail="File not found")
    
    return FileResponse(
        file_path,
        media_type="image/png",
        filename=f"processed_{image_id}.png"
    )
