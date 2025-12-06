import Link from 'next/link'
import { getCart } from '@/app/actions/cart'
import CartPreview from '@/client/CartPreview'


export default async function Navbar() {
    const cart = await getCart()
    const qty = cart.reduce((s: number, i: any) => s + i.quantity, 0)


    return (
        <nav className="bg-white shadow-sm sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <Link href="/" className="text-2xl font-bold text-blue-600">Winstore</Link>
                    <Link href="/category/jewelery" className="text-gray-600 hover:text-blue-600">Jewelry</Link>
                    <Link href="/category/electronics" className="text-gray-600 hover:text-blue-600">Electronics</Link>
                </div>


                <div className="flex items-center gap-4">
                    <Link href="/cart" className="hidden md:inline hover:text-blue-600">Cart</Link>
                    <CartPreview serverQty={qty} />
                </div>
            </div>
        </nav>
    )
}