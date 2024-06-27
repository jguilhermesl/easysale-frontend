import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Paragraph } from '@/components/ui/paragraph';
import { ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/router';

export const CartEmptyState = () => {
  const router = useRouter();

  return (
    <div className="max-w-[380px] flex flex-col items-center">
      <Heading>Ops, que pena... </Heading>
      <Paragraph className="text-xl">Seu carrinho ainda está vazio </Paragraph>
      <ShoppingCart className="my-4" size={60} />
      <Button
        onClick={() => router.push('/xxx')}
        className="w-full bg-green-400"
      >
        Visualizar produtos
      </Button>
    </div>
  );
};
