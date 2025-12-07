import { getProductById } from '@/app/actions/products'
import ProductSkeleton from '@/components/ProductSkeleton'
import { Suspense } from 'react'
import AddToCartButton from '@/client/CartButton'
import Image from 'next/image'
import { getCart } from '@/app/actions/cart'
import ProductSkull from '@/components/ProductSkull'

interface Props { params: { id: string } }

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const productRes = await getProductById(id);
  const product = productRes?.data;
  if (!product) return <div>Not found</div>
  const cartData = await getCart();
  return (
    <Suspense fallback={<ProductSkull />}>
      <div className="max-w-5xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img src={product.image} alt={product.title} className="w-full h-[450px] object-contain" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p className="mt-2 text-gray-600">RS {product.price}</p>
            <p className="mt-4 text-gray-700">{product.description}</p>

            <div className="mt-6">
              <AddToCartButton product={product} cartData={cartData} />
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  )
}