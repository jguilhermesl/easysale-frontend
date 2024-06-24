import React from 'react';
import { useCart } from '@/hooks/useCart';
import { useRouter } from 'next/router';

const Cart = () => {
  const { cartItems } = useCart();
const router = useRouter()
  return (
    <> 
    <div>
      <h1>Carrinho</h1>
      {cartItems.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p> 
          <p>{item.price}</p> 
          <p>{item.productId}</p> 
          <p>{item.name}</p> 
        </div>
      ))}
    </div>
    <button> Finalizar compra </button>
    <button onClick={()=> router.push('/xxx')}> Continuar comprando</button>
    </>
  );
}

export default Cart;
