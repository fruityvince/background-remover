import { useState } from 'react'
import { ApiService } from '../services/api'

export const useImageProcessing = () => {
  const [isProcessing, setIsProcessing] = useState(false)
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const processImage = async (file: File) => {
    setIsProcessing(true)
    setError(null)

    try {
      console.log('Processing image:', file)
      const imageBlob = await ApiService.processImage(file)  // error here
      const imageUrl = URL.createObjectURL(imageBlob)
      setProcessedImageUrl(imageUrl)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'useImageProcessing::Failed to process image')
    } finally {
      setIsProcessing(false)
    }
  }

  const reset = () => {
    setProcessedImageUrl(null)
    setError(null)
  }

  return {
    isProcessing,
    processedImageUrl,
    error,
    processImage,
    reset
  }
}
