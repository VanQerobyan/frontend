export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  stock_quantity: number;
  image_url: string;
  created_at: string;
}


export type AddedProduct = Omit<Product, "id" | "created_at" | "description" | "image_url"> & {
    description?:string
    image_url?: string
    created_at?:string
}