import HeroBanner from '@/components/HeroBanner'
import CategoriesSection from '@/components/CategoriesSection'
import NewArrivals from '@/components/NewArrivals'

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <div className="max-w-7xl mx-auto px-6">
        <CategoriesSection />
        <NewArrivals />
      </div>
    </div>
  )
}