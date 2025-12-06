'use client'


import { useState } from 'react'
import type { Product } from '@/types/product'


export default function CartButton({ product }: { product: Product }) {
    const [loading, setLoading] = useState(false)
    const [added, setAdded] = useState(false)


    async function handleAdd() {
        setLoading(true)
        setAdded(true) // optimistic


        try {
            await fetch('/api/cart/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ productId: product.id })
            })
        } catch (err) {
            console.error(err)
            setAdded(false)
        } finally {
            setLoading(false)
        }
    }


    return (
        <button
            onClick={handleAdd}
            disabled={loading}
            className={`w-full py-2 rounded transition ${added ? 'bg-green-600 text-white' : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
        >
            {loading ? 'Adding...' : added ? 'Added!' : 'Add to Cart'}
        </button>
    )
}