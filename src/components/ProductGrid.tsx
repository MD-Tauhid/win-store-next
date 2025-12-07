import { Suspense } from 'react'
import ProductSkeleton from './ProductSkeleton'
import ProductCard from './ProductCard'
import { getAllProducts } from '@/app/actions/products'
import { Product } from '@/types/product'


export default async function ProductGrid() {
    const products = await getAllProducts()

    return (
        <Suspense fallback={<ProductSkeleton />}>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {products.data.slice(0, 10).map((p: Product) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </Suspense>
    )
}