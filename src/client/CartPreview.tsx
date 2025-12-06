'use client'


import { useEffect, useState } from 'react'


export default function CartPreview({ serverQty = 0 }: { serverQty?: number }) {
    const [qty, setQty] = useState(serverQty)


    useEffect(() => {
        setQty(serverQty)
    }, [serverQty])


    return (
        <div className="relative">
            <button className="px-3 py-2 rounded bg-gray-100 hover:bg-gray-200 transition">
                Cart ({qty})
            </button>
        </div>
    )
}