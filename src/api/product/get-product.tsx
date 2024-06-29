
import api from "@/services/axios"

interface products {
  name: string,
  isActive: boolean,
  photoUrl: string,
  categoryId: string,
  description: string,
  price: number
}

export const getProducts = async () => {
  const response = await api.get('/product')
  return response.data as products
}