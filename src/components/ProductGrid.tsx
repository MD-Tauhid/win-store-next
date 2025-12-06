import { Suspense } from 'react'
import ProductSkeleton from './ProductSkeleton'
import ProductCard from './ProductCard'
import { getAllProducts } from '@/app/actions/products'


export default async function ProductGrid() {
    const products = await getAllProducts()


    return (
        <Suspense fallback={<ProductSkeleton />}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {products.map((p: any) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </Suspense>
    )
}