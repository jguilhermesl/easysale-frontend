import { Product } from '@/@types/Product';
import { DialogAddProductToCart } from '@/components/dialog-add-product-to-cart';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { Paragraph } from '@/components/ui/paragraph';
import { Plus } from 'lucide-react';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => (
  <div className="max-w-[200px] flex flex-col mx-auto">
    <Image
      src={product.photo}
      alt={product.name}
      className="object-cover rounded-lg"
      style={{ width: '200px', height: '200px' }}
    />
    <Paragraph className="mt-2">{product.name}</Paragraph>
    <div className="flex items-center justify-between">
      <Paragraph className="font-bold text-base">R$ {product.price}</Paragraph>
      <Dialog>
        <DialogTrigger asChild>
          <button className="h-8 w-8 bg-black rounded-lg items-center flex justify-center hover:bg-opacity-90 active:bg-opacity-80">
            <Plus color="#FFF" size={16} />
          </button>
        </DialogTrigger>
        <DialogAddProductToCart product={product} />
      </Dialog>
    </div>
  </div>
);
