import { getProductsByCategory, getCategories } from '@/app/actions/products'
import ProductCard from '@/components/ProductCard'

interface Props { params: { slug: string } }

export default async function CategoryPage({ params }: Props) {
  const products = await getProductsByCategory(params.slug)

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Category: {params.slug}</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((p: any) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}