import React, { useState } from 'react';
import { useCart } from '@/hooks/useCart';
import { useRouter } from 'next/router';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MinusIcon, PlusIcon, ShoppingCart, Trash } from 'lucide-react';
import { Heading } from '@/components/ui/heading';
import { Paragraph } from '@/components/ui/paragraph';

const Cart = () => {

  const { cartItems, removeProductFromCart } = useCart();
  const [cart, setCart] = useState(cartItems)
const router = useRouter()

console.log(cart)
const handleQuantityChange = (id, quantity) => {
  setCart(cart.map((item) => (item.productId === id ? { ...item, quantity } : item)))
}
const handleRemoveItem = (id) => {
  removeProductFromCart(id)
  setCart(cartItems.filter((item) => item.productId !== id))
}
const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  return (
    <div className="flex flex-col justify-center items-center px-4 py-8 w-full">
      <h1 className="text-2xl font-bold mb-8">Carrinho de Compras</h1>
      <div className="flex flex-col w-full max-w-[380px] gap-4 justify-center">
        {cart.map((item, index) => (
          <Card key={index}>
            <CardContent className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-primary font-medium">R${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleQuantityChange(item.productId, item.quantity - 1)}
                    disabled={item.quantity === 1}
                  >
                    <MinusIcon className="w-4 h-4" />
                  </Button>
                  <span>{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleQuantityChange(item.productId, item.quantity + 1)}
                  >
                    <PlusIcon className="w-4 h-4" />
                  </Button>
                </div>
                <Button variant="outline" size="icon" onClick={() => handleRemoveItem(item.productId)}>
                  <Trash className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
        {cart.length > 0? (
  <div className="bg-muted rounded-lg p-4 w-full max-w-md m-auto">
  <div className="flex items-center justify-between mb-2">
    <span className="text-muted-foreground">Total:</span>
    <span className="text-primary font-medium">R${total.toFixed(2)}</span>
  </div>
  <Button className="w-full">Finalizar Compra</Button>
</div>
        ): <div className='max-w-[380px] flex flex-col items-center'><Heading>Ops, que pena... </Heading> <Paragraph className='text-xl'> Seu carrinho ainda está vazio </Paragraph><ShoppingCart className='my-4' size={60} /> <Button onClick={()=> router.push('/xxx')} className="w-full bg-green-400">Visualizar produtos</Button> </div>}
      
      </div>
   
  );
}

export default Cart;
