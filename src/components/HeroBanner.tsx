export default function HeroBanner() {
    return (
        <section className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-6 flex items-center gap-8">
                <div className="flex-1">
                    <h1 className="text-4xl font-bold mb-4">Shop Smart. Level Up Your Life.</h1>
                    <p className="text-gray-600 mb-6">Quality electronics, jewelry, and more — delivered fast.</p>
                    <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Explore Now</a>
                </div>
                <div className="w-80">
                    <img src="/images/placeholder.png" alt="Hero" />
                </div>
            </div>
        </section>
    )
}