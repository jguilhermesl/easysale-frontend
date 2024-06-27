import React from 'react';
import { useCart } from '@/hooks/useCart';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trash } from 'lucide-react';
import { Paragraph } from '@/components/ui/paragraph';
import Image from 'next/image';
import Counter from '@/components/counter';

export const CartListItems = () => {
  const { cartItems, removeProductFromCart, changeItemQuantity } = useCart();

  const handleRemoveItem = (id) => {
    removeProductFromCart(id);
  };

  return (
    <div className="flex flex-col gap-4">
      {cartItems.map((item, index) => {
        console.log(item);
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
                <Paragraph className="font-bold">{item.name}</Paragraph>
                <Paragraph className="text-xs">{item.description}</Paragraph>
                <div className="flex flex-col gap-2 mt-4">
                  <Paragraph className="text-base font-bold">
                    R${item.price}
                  </Paragraph>
                </div>

                <Counter
                  count={item.quantity}
                  increment={() =>
                    changeItemQuantity(item.productId, 'increment')
                  }
                  decrement={() =>
                    changeItemQuantity(item.productId, 'decrement')
                  }
                />
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
