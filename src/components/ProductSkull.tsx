export default function ProductSkull() {
  return (
    <div className="max-w-5xl mx-auto p-6 animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Image Skeleton */}
        <div className="w-full h-[450px] bg-gray-300 rounded"></div>

        {/* Text Skeleton */}
        <div className="space-y-4">
          <div className="h-8 w-3/4 bg-gray-300 rounded"></div>
          <div className="h-5 w-1/3 bg-gray-300 rounded"></div>

          <div className="space-y-2 mt-6">
            <div className="h-4 w-full bg-gray-300 rounded"></div>
            <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
            <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
          </div>

          {/* Button Skeleton */}
          <div className="mt-8 h-12 w-40 bg-gray-300 rounded"></div>
        </div>

      </div>
    </div>
  )
}