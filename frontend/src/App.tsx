import { useState, useRef } from 'react'

import { DragDropArea } from './components/DragDropArea'
import { ProcessedImage } from './components/ProcessedImage'

import { useImageProcessing } from './hooks/useImageProcessing'

function App() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [validImageProvided, setValidImageProvided] = useState(false)
  
  const { isProcessing, processedImageUrl, error, processImage, reset } = useImageProcessing()

  const handleFileUpload = (file: File) => {
    setUploadedFile(file)
    setValidImageProvided(true)
    reset()
    
    // Create preview URL
    const url = URL.createObjectURL(file)
    setPreviewUrl(url)
  }

  const handleRemoveFile = () => {
    setUploadedFile(null)
    setValidImageProvided(false)
    reset()
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl)
      setPreviewUrl(null)
    }
  }

  const handleRemoveBackground = async () => {
    if (!uploadedFile) return
    await processImage(uploadedFile)
  }

  return (
    <div className="min-h-screen bg-base-100">
      <div className="max-w-4xl mx-auto p-8">
        <div className="text-center mb-8">
          <p className="text-base-content/70 text-lg">
            Upload an image to remove its background
          </p>
        </div>

        {/* Drag and Drop Area */}
        <DragDropArea
          onFileUpload={handleFileUpload}
          previewUrl={previewUrl}
          uploadedFile={uploadedFile}
          onRemoveFile={handleRemoveFile}
        />

        {/* Remove Background Button */}
        <div className="text-center mb-8">
          <button
            onClick={handleRemoveBackground}
            disabled={!validImageProvided || isProcessing}
            className={`btn btn-primary ${isProcessing ? 'loading' : ''}`}
          >
            {isProcessing ? 'Processing...' : 'Remove Background'}
          </button>
        </div>

        {/* Error Display */}
        {error && (
          <div className="alert alert-error mb-8">
            <span>{error}</span>
          </div>
        )}

        {/* Processed Image Display */}
        {processedImageUrl && (
          <ProcessedImage processedImageUrl={processedImageUrl} />
        )}

      </div>
    </div>
  )
}

export default App
