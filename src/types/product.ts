export interface Product {
  id: number | string;
  title: string;
  price: number;
  description?: string;
  category?: string;
  image?: string;
  rating?: { rate: number; count: number };
}

export interface ProductResponse {
  data: Product[];
  message: string;
  success: boolean;
}

export interface SingleProductResponse {
  data: Product;
  message: string;
  success: boolean;
}