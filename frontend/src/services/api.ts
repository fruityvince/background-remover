const API_BASE_URL = 'http://localhost:8000/api/v1';

export interface ProcessingResponse {
  image_id: string;
  processed_filename: string;
  processing_time: number;
  success: boolean;
}

export class ApiService {
  // static async processImage(file: File): Promise<ProcessingResponse> {
  static async processImage(file: File): Promise<Blob> {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`${API_BASE_URL}/process-image/`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Failed to process image: ${response.statusText}`);
    }

    return response.blob();
    // return response.json();
  }
  static getProcessedImageUrl(imageId: string): string {
    return `${API_BASE_URL}/download/${imageId}`;
  }
}
