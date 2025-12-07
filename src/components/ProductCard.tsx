import { Product } from '@/types/product'
import AddToCartButton from '@/client/CartButton'
import { getCart } from '@/app/actions/cart'


export default async function ProductCard({ product }: { product: Product }) {
    const cartData = await getCart();
    return (
        <div className="border p-4 rounded bg-white hover:shadow-md transition">
            <h3 className="mt-2 font-medium text-sm line-clamp-1">{product.category}</h3>
            <h3 className="mt-2 font-medium text-sm line-clamp-1 text-[#00CAD7]">{product.title}</h3>
            <div className="relative h-48 w-full">
                <img src={product.image} alt={product.title} className="w-full h-full object-contain" />
            </div>


            <p className="text-gray-500 text-sm">RS {product.price}</p>


            <div className="mt-4">
                <AddToCartButton product={product} cartData={cartData} />
            </div>
        </div>
    )
}