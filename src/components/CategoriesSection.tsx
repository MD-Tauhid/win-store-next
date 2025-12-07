import { getCategories } from '@/app/actions/products'
import Link from 'next/link'


export default async function CategoriesSection() {
    const categories = await getCategories()


    return (
        <section className="py-10">
            <h2 className="text-2xl font-semibold mb-6">Categories</h2>
            <div className="flex gap-4 flex-wrap">
                {categories?.data?.map((c) => (
                    <Link key={c.id} href={`/category/${c.name}`} className="px-4 py-2 bg-white rounded shadow hover:bg-gray-100">
                        {c.name}
                    </Link>
                ))}
            </div>
        </section>
    )
}