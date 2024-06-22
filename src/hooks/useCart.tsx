import { CartItem } from "@/@types/Cart";
import React, { createContext, ReactNode, useContext, useState } from "react";

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

  const addProductToCart = () => {};

  const removeProductFromCart = () => {};

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
