export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="animate-pulse border p-4 rounded bg-white">
          <div className="h-40 bg-gray-300 rounded mb-4"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="h-10 bg-gray-300 rounded"></div>
        </div>
      ))}
    </div>
  )
}