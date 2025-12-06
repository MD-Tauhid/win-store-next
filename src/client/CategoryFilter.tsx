'use client'


import { useState } from 'react'


export default function CategoryFilter({ categories, onSelect }: { categories: string[], onSelect: (c: string) => void }) {
    const [selected, setSelected] = useState('')


    function handleSelect(c: string) {
        setSelected(c)
        onSelect(c)
    }


    return (
        <div className="flex gap-2 flex-wrap">
            {categories.map(c => (
                <button
                    key={c}
                    onClick={() => handleSelect(c)}
                    className={`px-3 py-1 rounded border transition ${selected === c ? 'bg-blue-600 text-white' : 'bg-white hover:bg-gray-100'
                        }`}
                >
                    {c}
                </button>
            ))}
        </div>
    )
}