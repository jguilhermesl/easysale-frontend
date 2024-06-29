import api from "@/services/axios";

export interface ICreateProductBody {
  name: string,
  isActive: boolean,
  photoUrl: string,
  categoryId: string,
  description: string,
  price: number
}

export async function createProduct(body: ICreateProductBody) {
  const response = await api.post(`/product`, body);
  return response.data;
}
