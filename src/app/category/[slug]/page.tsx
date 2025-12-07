import { getProductsByCategory, getCategories } from '@/app/actions/products'
import ProductCard from '@/components/ProductCard'
import { Product } from '@/types/product'

interface Props { params: { slug: string } }

export default async function CategoryPage({ params }: Props) {
  const category = await params
  const products = await getProductsByCategory(category.slug)

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Category: {category.slug}</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.data.map((p: Product) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}