import { getCategories } from '@/app/actions/products'
import Link from 'next/link'


export default async function CategoriesSection() {
    const categories = await getCategories()


    return (
        // <section className="py-10">
        /* <h2 className="text-2xl font-semibold mb-6">Categories</h2>
        <div className="flex gap-4 flex-wrap">
            {categories?.data?.map((c) => (
                <Link key={c.id} href={`/category/${c.name}`} className="px-4 py-2 bg-white rounded shadow hover:bg-gray-100">
                    {c.name}
                </Link>
            ))}
        </div> */

        <div className="relative w-full py-5 bg-gradient-to-r from-[#f7eec7] to-[#f7f6e1]">

            {/* Left Arrow */}
            <a
                href="#scroll-left"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10"
            >
                <span className='text-3xl' >‹</span>
            </a>

            {/* Slider */}
            <div
                id="scroll-left"
                className="flex overflow-x-auto gap-6 px-14 justify-around scroll-smooth scrollbar-hide"
            >
                {categories.data.map((cat, i) => (
                    <div
                        key={i}
                        className="min-w-[260px] bg-white rounded-md overflow-hidden shadow-md"
                    >
                        <div className="w-full h-40 relative">
                            <img
                                src={cat.id === 1 ? "https://images.unsplash.com/photo-1517336714731-489689fd1ca8" :
                                    cat.id === 2 ? "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3" :
                                        cat.id === 3 ? "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" :
                                            cat.id === 4 ? "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c" :
                                                "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                                }
                                alt={cat.name}
                                className="object-cover w-full h-full"
                            />
                        </div>

                        {/* Label Box */}
                        <div className="flex justify-between items-center px-4 py-3 shadow-md bg-white">
                            <h3 className="text-lg font-medium">{cat.name}</h3>
                            <Link
                                href={`/category/${cat.name}`}
                                className="text-[#00CAD7] text-sm font-medium"
                            >
                                Shop
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* Right Arrow */}
            <a
                href="#scroll-right"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10"
            >
                <span className='text-3xl' >›</span>
            </a>

            <div id="scroll-right"></div>
        </div>
        // </section>
    )
}