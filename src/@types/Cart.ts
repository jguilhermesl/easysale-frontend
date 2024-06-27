export interface CartItem {
  productId: string,
  name: string,
  price: number,
  quantity: number,
  photo: string,
  description?: string
}