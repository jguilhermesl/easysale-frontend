import { Product } from '@/@types/Product';
import { Carousel } from '@/components/carousel';
import { ProductCard } from '@/components/product-card';
import { ProductGrid } from '@/components/product-grid';
import { Paragraph } from '@/components/ui/paragraph';
import { ChevronRight } from 'lucide-react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface ICategoryProps {
  name: string;
  items: Product[];
}

export const Category = ({ items, name }: ICategoryProps) => {
  const [filterIsActive, setFilterIsActive] = useState(false);
  const router = useRouter();

  const handleChangeCategory = (e: string) => {
    router.push({
      pathname: '/category',
      query: { category: e },
    });
  };

  useEffect(() => {
    const { category } = router.query;

    if (category) {
      setFilterIsActive(true);
    }
  }, [router.query]);

  return (
    <div key={name}>
      <div className="flex items-center justify-between">
        <Paragraph className="font-bold">{name}</Paragraph>
        {!filterIsActive && (
          <button onClick={() => handleChangeCategory(name)}>
            <Paragraph className="text-orange-600 text-xs flex items-center">
              Ver mais{' '}
              <ChevronRight color="#EA580C" size={12} className="ml-2" />
            </Paragraph>
          </button>
        )}
      </div>
      {filterIsActive ? (
        <ProductGrid items={items} />
      ) : (
        <Carousel classNameItem="max-w-[200px]">
          {items.map((item) => (
            <ProductCard key={item.name} product={item} />
          ))}
        </Carousel>
      )}
    </div>
  );
};
