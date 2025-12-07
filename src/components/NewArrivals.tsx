import ProductGrid from './ProductGrid'


export default function NewArrivals() {
    return (
        <section className="py-10">
            <h2 className="text-2xl font-semibold mb-6"><span className="text-[#00CAD7]">New</span> Arrivals</h2>
            <ProductGrid isNew={true} />
        </section>
    )
}