import { Product } from '@/@types/Product';
import { ProductCard } from './product-card';

interface ProductGridProps {
  items: Product[];
}

export const ProductGrid = ({ items }: ProductGridProps) => (
  <div className="h-screen">
    <div className="flex flex-wrap justify-center gap-6 py-6">
      {items.map((item) => (
        <ProductCard key={item.name} product={item} />
      ))}
    </div>
  </div>
);
