import { getCart, removeFromCartServer } from '@/app/actions/cart'
import Image from 'next/image'


export default async function CartPage() {
    const cart = await getCart()
    const total = cart.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0)


    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>


            {cart.length === 0 ? (
                <p className="text-gray-600">Your cart is empty.</p>
            ) : (
                <div className="space-y-4">
                    {cart.map((item: any) => (
                        <form
                            key={item.id}
                            action={async () => {
                                'use server'
                                await removeFromCartServer(item.id)
                            }}
                            className="bg-white p-4 border rounded flex items-center justify-between"
                        >
                            <div className="flex items-center gap-4">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    className="w-20 h-20 object-contain border rounded"
                                />


                                <div>
                                    <h2 className="font-semibold text-lg">{item.title}</h2>
                                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                                    <p className="font-medium text-blue-600">RS {item.price}</p>
                                </div>
                            </div>


                            <button className="text-red-600 hover:underline">Remove</button>
                        </form>
                    ))}


                    <div className="text-right border-t pt-4 mt-4">
                        <h3 className="text-xl font-bold">Total: RS {total}</h3>
                        <button
                            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}