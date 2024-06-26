import React from 'react';
import { useCart } from '@/hooks/useCart';
import { useRouter } from 'next/router';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ShoppingCart } from 'lucide-react';
import { Heading } from '@/components/ui/heading';
import { Paragraph } from '@/components/ui/paragraph';
import { SiteProfileHeader } from '../site-profile-header';
import { MOCK_PROFILE } from '@/constants/mocks';
import { CartListItems } from './cart-list-items';

const profile = MOCK_PROFILE;

const CartTemplate = () => {
  const { cartItems } = useCart();

  const router = useRouter();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <div className="flex flex-col relative w-full">
        <SiteProfileHeader profile={profile} showDetails={false} />
      </div>
      <div className="flex flex-col px-6 md:px-32 lg:px-48 xl:px-[300px] pt-8 pb-20">
        <button
          className="flex items-center gap-2"
          onClick={() => router.back()}
        >
          <ChevronLeft className="w-4 h-4" />
          <Paragraph>Mix João</Paragraph>
        </button>
        <Heading className="my-4">Carrinho de Compras</Heading>
        <CartListItems />
        {cartItems.length > 0 ? (
          <div className="bg-primary-foreground rounded-lg p-4 w-full mt-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-muted-foreground">Total:</span>
              <span className="text-primary font-medium">
                R${total.toFixed(2)}
              </span>
            </div>
            <Button className="w-full">Finalizar Compra</Button>
          </div>
        ) : (
          <div className="max-w-[380px] flex flex-col items-center">
            <Heading>Ops, que pena... </Heading>{' '}
            <Paragraph className="text-xl">
              Seu carrinho ainda está vazio{' '}
            </Paragraph>
            <ShoppingCart className="my-4" size={60} />{' '}
            <Button
              onClick={() => router.push('/xxx')}
              className="w-full bg-green-400"
            >
              Visualizar produtos
            </Button>{' '}
          </div>
        )}
      </div>
    </>
  );
};

export default CartTemplate;
