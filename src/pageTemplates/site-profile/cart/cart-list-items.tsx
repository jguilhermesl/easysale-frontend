import React from 'react';
import { useCart } from '@/hooks/useCart';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash } from 'lucide-react';
import { Paragraph } from '@/components/ui/paragraph';
import Image from 'next/image';

export const CartListItems = () => {
  const { cartItems, removeProductFromCart } = useCart();

  const handleRemoveItem = (id) => {
    removeProductFromCart(id);
  };

  return (
    <div className="flex flex-col gap-4">
      {cartItems.map((item, index) => {
        return (
          <Card key={index}>
            <CardContent className="flex items-center gap-4 p-4">
              <Image
                src={item.photo}
                height={180}
                width={180}
                alt=""
                className="object-cover rounded-lg !w-24 !h-24"
              />
              <div className="flex flex-col">
                <Paragraph className="">{item.name}</Paragraph>
                <div className="flex flex-col gap-2 mt-4">
                  <Paragraph className="text-base font-bold">
                    R${item.price}
                  </Paragraph>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {}}
                    className="h-8 w-8 bg-black rounded-lg items-center flex justify-center hover:bg-opacity-90 active:bg-opacity-80"
                  >
                    <Minus color="#FFF" size={16} />
                  </button>
                  <Paragraph className="font-bold text-xl">3</Paragraph>
                  <button
                    onClick={() => {}}
                    className="h-8 w-8 bg-black rounded-lg items-center flex justify-center hover:bg-opacity-90 active:bg-opacity-80"
                  >
                    <Plus color="#FFF" size={16} />
                  </button>
                </div>
              </div>

              <Button
                variant="outline"
                size="icon"
                className="ml-auto"
                onClick={() => handleRemoveItem(item.productId)}
              >
                <Trash className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
