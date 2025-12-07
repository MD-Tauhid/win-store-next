'use client'


import Image from 'next/image'
import { useEffect, useState } from 'react'


export default function CartPreview({ serverQty = 0 }: { serverQty?: number }) {
    const [qty, setQty] = useState(serverQty)


    useEffect(() => {
        setQty(serverQty)
    }, [serverQty])


    return (
        <div className="relative cursor-pointer flex items-center">
            <Image src="/icons/shopping-cart.png" alt="Cart" className='cursor-pointer' width={24} height={24} />

            <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {qty}
            </span>
            <span className="ml-1 text-sm">Cart</span>
        </div>
    )
}