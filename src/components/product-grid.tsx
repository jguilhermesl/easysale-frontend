import { Product } from '@/@types/Product';
import { ProductCard } from './product-card';

interface ProductGridProps {
  items: Product[];
}

export const ProductGrid = ({ items }: ProductGridProps) => (
  <div className="h-screen">
    <div className="grid grid-cols-1 justify-center items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6">
      {items.map((item) => (
        <ProductCard key={item.name} product={item} />
      ))}
    </div>
  </div>
);
