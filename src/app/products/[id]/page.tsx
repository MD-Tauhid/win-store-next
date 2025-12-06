import { getProductById } from '@/app/actions/products'
import ProductSkeleton from '@/components/ProductSkeleton'
import { Suspense } from 'react'
import AddToCartButton from '@/client/CartButton'
import Image from 'next/image'

interface Props { params: { id: string } }

export default async function ProductPage({ params }: Props) {
  const product = await getProductById(params.id)
  if (!product) return <div>Not found</div>

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Image src={product.image || ""} alt={product.title} className="w-full h-[450px] object-contain" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="mt-2 text-gray-600">RS {product.price}</p>
          <p className="mt-4 text-gray-700">{product.description}</p>

          <div className="mt-6">
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </div>
  )
}