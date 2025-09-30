interface ProcessedImageProps {
  processedImageUrl: string
}

export const ProcessedImage = ({ processedImageUrl }: ProcessedImageProps) => {
  return (
    <div className="card bg-base-200 shadow-xl p-8">
      <h3 className="text-xl font-semibold text-center mb-4">Processed Image</h3>
      <div className="flex justify-center">
        <img
          src={processedImageUrl}
          alt="Processed result"
          className="max-w-full max-h-96 rounded-lg shadow-lg"
        />
      </div>
      <div className="text-center mt-4">
        <a
          href={processedImageUrl}
          download="processed-image.png"
          className="btn btn-secondary"
        >
          Download Result
        </a>
      </div>
    </div>
  )
}
