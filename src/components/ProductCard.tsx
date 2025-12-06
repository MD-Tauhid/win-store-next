import { Product } from '@/types/product'
import AddToCartButton from '@/client/CartButton'


export default function ProductCard({ product }: { product: Product }) {
    return (
        <div className="border p-4 rounded bg-white hover:shadow-md transition">
            <div className="relative h-48 w-full">
                <img src={product.image} alt={product.title} className="w-full h-full object-contain" />
            </div>


            <h3 className="mt-2 font-medium text-sm line-clamp-2">{product.title}</h3>
            <p className="text-gray-500 text-sm">RS {product.price}</p>


            <div className="mt-4">
                <AddToCartButton product={product} />
            </div>
        </div>
    )
}