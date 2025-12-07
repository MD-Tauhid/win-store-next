'use server'
import { fetcher } from '@/lib/fetcher'
import { CategoryResponse } from '@/types/category'
import { Product, ProductResponse } from '@/types/product'

const BASE = 'https://mm-assesment-server.vercel.app/api/v1/products'

export async function getAllProducts(): Promise<ProductResponse> {
  return fetcher(BASE)
}

export async function getCategories(): Promise<CategoryResponse> {
  return fetcher(`${BASE}/categories`)
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  return fetcher(`${BASE}/category/${encodeURIComponent(category)}`)
}

export async function getProductById(id: string | number): Promise<Product | null> {
  return fetcher(`${BASE}/${id}`)
}