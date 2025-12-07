import HeroBanner from '@/components/HeroBanner'
import CategoriesSection from '@/components/CategoriesSection'
import NewArrivals from '@/components/NewArrivals'

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <CategoriesSection />
      <div className="max-w-7xl mx-auto px-6">
        <NewArrivals />
      </div>
    </div>
  )
}