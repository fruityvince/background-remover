from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Your React port
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

@app.get("/")  # Handle GET requests to root URL
def read_root():
    return {"message": "Hello World"}

@app.post("/process-image/")  # Handle image uploads
def process_image(image_data: bytes):
    print("BLABLA")
    processed_image = remove_background(image_data)
    return {"status": "processed", "image": processed_image}
