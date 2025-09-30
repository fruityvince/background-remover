import { useState, useRef, type RefObject } from 'react'

interface DragDropAreaProps {
  onFileUpload: (file: File) => void
  previewUrl: string | null
  uploadedFile: File | null
  onRemoveFile: () => void
}

export const DragDropArea = ({ onFileUpload, previewUrl, uploadedFile, onRemoveFile }: DragDropAreaProps) => {
  const [isDragOver, setIsDragOver] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    
    const files = Array.from(e.dataTransfer.files)
    const imageFile = files.find(file => file.type.startsWith('image/'))
    
    if (imageFile) {
      onFileUpload(imageFile)
    }
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      onFileUpload(file)
    }
  }

  const handleBrowseClick = () => {
    fileInputRef.current?.click()
  }

  const uploadedFilePreview = (previewUrl: string, uploadedFile: File | null) => {
    return (
      <div className="space-y-4">
        <div className="relative inline-block">
          <img
            src={previewUrl}
            alt="Uploaded preview"
            className="max-w-full max-h-48 rounded-lg shadow-lg"
          />
          <button
            onClick={onRemoveFile}
            className="btn btn-sm btn-circle btn-error absolute -top-2 -right-2"
          >
            ✕
          </button>
        </div>
        <div>
          <p className="text-success font-semibold mb-2">
            ✓ {uploadedFile?.name} uploaded successfully
          </p>
          <p className="text-sm text-base-content/60">
            Size: {(uploadedFile?.size! / 1024 / 1024).toFixed(2)} MB
          </p>
        </div>
      </div>
    )
  }

  const flushFilePreview = (fileInputRef: RefObject<HTMLInputElement | null>) => {
    return (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-base-content">
          Drag & drop your image here
        </h3>
        <p className="text-base-content/60">
          or click to browse files
        </p>
        <button
          onClick={handleBrowseClick}
          className="btn btn-primary"
        >
          Browse Files
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileInput}
          className="hidden"
        />
        <p className="text-xs text-base-content/50 mt-4">
          Supports: JPG, PNG, GIF, WebP (Max 10MB)
        </p>
      </div>
    )
  }

  return (
    <div className="card shadow-2xl rounded-3xl p-8 mb-8">
      <div
        className={`w-full h-64 border-2 border-dashed rounded-3xl p-6 text-center transition-all duration-300 ${
          isDragOver
            ? 'border-primary bg-primary/10 scale-105'
            : 'border-base-300 hover:border-primary/50'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {previewUrl ? (
          uploadedFilePreview(previewUrl, uploadedFile)
        ) : (
          flushFilePreview(fileInputRef)
        )}
      </div>
    </div>
  )
}
