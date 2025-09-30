# from rembg import remove
from PIL import Image
import io
import time
import os
from ..core.config import settings

class BackgroundRemovalService:
    def __init__(self):
        self.input_dir = settings.UPLOAD_DIR
        self.output_dir = settings.PROCESSED_DIR
        
        # Create directories if they don't exist
        os.makedirs(self.input_dir, exist_ok=True)
        os.makedirs(self.output_dir, exist_ok=True)
    
    def remove_background(self, image_data: bytes, image_id: str) -> str:
        try:
            start_time = time.time()
            
            # Process image with rembg
            output_data = remove(image_data)
            
            # Save processed image
            output_filename = f"{image_id}_processed.png"
            output_path = os.path.join(self.output_dir, output_filename)
            
            with open(output_path, 'wb') as f:
                f.write(output_data)
            
            processing_time = time.time() - start_time
            
            return output_filename, processing_time, True
            
        except Exception as e:
            return None, 0, False, str(e)
