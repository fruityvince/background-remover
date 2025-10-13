from fastapi import APIRouter, UploadFile, File, HTTPException, BackgroundTasks
from fastapi.responses import FileResponse, Response
import uuid
import os
from datetime import datetime
from ..models.schemas import ProcessingRequest, ProcessingResult

from rembg import remove


router = APIRouter()
# bg_removal_service = BackgroundRemovalService()

@router.post("/process-image/")
async def process_image(
    background_tasks: BackgroundTasks,
    file: UploadFile = File(...)
):
    try:
        # Generate unique ID for this request
        image_id = str(uuid.uuid4())

        check_file_is_valid(file)

        # Save uploaded file
        image_bytes = await file.read()
        output = remove(image_bytes)
        return Response(
            content=output, 
            media_type="image/png",
            headers={
                "Content-Disposition": "attachment; filename=background-removed.png"
            }
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


def check_file_is_valid(file: UploadFile):
    allowed_types = ["image/jpeg", "image/png", "image/webp"]
    if file.content_type not in allowed_types:
        raise HTTPException(
            status_code=400,
            detail="Invalid file type. Please upload JPEG, PNG, or WebP images."
        )
