"use server";

import { cookies } from "next/headers";
import { Product } from "@/types/product";

export async function getCart() {
  const cookieStore = await cookies();
  const cookie = cookieStore.get("cart")?.value;
  return cookie ? JSON.parse(cookie) : [];
}

export async function setCart(cart: any[]) {
  const cookieStore = await cookies();
  cookieStore.set("cart", JSON.stringify(cart), { httpOnly: true });
}

export async function addToCartServer(product: Product, qty = 1) {
  const cart = await getCart();
  const existing = cart.find((i: any) => i.id === product.id);

  if (existing) existing.quantity += qty;
  else cart.push({ ...product, quantity: qty });

  await setCart(cart);
  return cart;
}

export async function removeFromCartServer(productId: string | number) {
  const cart = (await getCart()).filter((i: any) => i.id !== productId);
  await setCart(cart);
  return cart;
}
