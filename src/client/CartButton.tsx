"use client";

import type { Product } from '@/types/product'
import { addToCartServer } from '@/app/actions/cart'


export default function CartButton({ product, cartData }: { product: Product, cartData: Product[] }) {

    async function handleAdd() {
        await addToCartServer(product);
    }

    return (
        <button
            onClick={handleAdd}
            className={`w-full py-2 rounded transition ${cartData?.find((item) => item.id === product.id) ? 'bg-green-600 text-white' : 'bg-[#15ADB7] text-white hover:bg-[#0e8a95]'
                }`}
        >
            {cartData?.find((item) => item.id === product.id) ? 'Added!' : 'Add to Cart'}
        </button>
    )
}