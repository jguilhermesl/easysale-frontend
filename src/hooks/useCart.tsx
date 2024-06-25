import { CartItem } from "@/@types/Cart"
import { toast } from "@/components/ui/use-toast";
import React, { createContext, ReactNode, useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export interface CartProviderProps {
  children: ReactNode;
}

export interface CartContextDataProps {
  cartItems: CartItem[];
  addProductToCart: (product: CartItem) => void;
  removeProductFromCart: (productId: string) => void;
}

const CartContext = createContext<CartContextDataProps>(
  {} as CartContextDataProps
);

export function CartContextProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState([] as CartItem[]);

  const addProductToCart = (product) => {
    const newCartItem: CartItem = {
      productId: uuidv4(),
      name: product.name,
      price: product.price,
      quantity: product.quantity, 
    };
    setCartItems((prevCartItems) => [...prevCartItems, newCartItem]);
    
    toast({
      title: "Item adicionado ao carrinho ",
         })

  };
  const removeProductFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.productId !== id))
    toast({
      title: "Item excluído do carrinho ",
         })
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addProductToCart,
        removeProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  return context;
}
