import Link from 'next/link'
import { getCart } from '@/app/actions/cart'
import CartPreview from '@/client/CartPreview'
import Image from 'next/image'
import { getCategories } from '@/app/actions/products'


export default async function Navbar() {
    const cart = await getCart()
    const qty = cart.reduce((s: number, i: any) => s + i.quantity, 0)
    const allCategories = await getCategories();

    return (
        <nav className="w-full bg-[#004A43] text-white">

            {/* 🔹 TOP BAR */}
            <div className="flex items-center justify-between px-6 py-4">

                {/* LOGO */}
                <Link href="/" className="flex items-center gap-2">
                    {/* <span className="text-2xl font-bold">WIN</span>
                    <span className="text-sm -ml-1">store</span> */}
                    <img src="/images/win-store.png" alt="store-logo" />
                </Link>

                {/* SEARCH AREA */}
                <div className="flex flex-1 mx-10 max-w-2xl">
                    <select className="px-3 py-2 bg-white text-black rounded-l-md border-r">
                        <option>All categories</option>
                        {allCategories.data.map((category: any) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>

                    <input
                        type="text"
                        placeholder="Search for products"
                        className="flex-1 px-4 py-2 bg-white text-black outline-none"
                    />

                    <button className="bg-gray-200 px-4 flex items-center justify-center rounded-r-md">
                        🔍
                    </button>
                </div>

                {/* RIGHT ICONS */}
                <div className="flex items-center gap-6">

                    {/* CALL INFO */}
                    <div className="text-right text-xs leading-tight">
                        <div className="flex items-center gap-1">
                            <Image src="/icons/head-phone.png" alt="Phone" width={24} height={24} />
                            <span>+011 5827918</span>
                        </div>
                        <Link href="#" className="underline text-[11px] mt-1">Sign In</Link>
                    </div>

                    {/* USER ICON */}
                    <Image src="/icons/user.png" alt="User" className='cursor-pointer' width={24} height={24} />


                    {/* HEART */}
                    <Image src="/icons/heart.png" alt="Wishlist" className='cursor-pointer' width={24} height={24} />

                    {/* CART */}
                    <Link href="/cart" className="relative cursor-pointer flex items-center">
                        <CartPreview serverQty={qty} />
                    </Link>

                </div>
            </div>

            {/* 🔹 BOTTOM NAV BAR */}
            <div className="bg-[#003A34] text-sm px-6 py-3 flex items-center justify-between">

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src="/icons/menu.png" alt="menu" width={16} height={16} />
                        <span>Browse By Category</span>
                    </div>

                    <Link href="/">Home</Link>
                    <Link href="#">Easy Monthly Installments</Link>
                    <Link href="#">Shop by Brands</Link>
                    <Link href="#">Become a Vendor</Link>
                </div>

                {/* SOCIAL LINKS */}
                <div className="flex items-center gap-4">
                    <Image src="/icons/facebook.png" alt="Facebook" className='cursor-pointer' width={10} height={10} />
                    <Image src="/icons/twitter.png" alt="Twitter" className='cursor-pointer' width={16} height={16} />
                    <Image src="/icons/linkedin.png" alt="LinkedIn" className='cursor-pointer' width={16} height={16} />
                    <Image src="/icons/instagram.png" alt="Instagram" className='cursor-pointer' width={16} height={16} />
                </div>

            </div>

        </nav>
    )
}