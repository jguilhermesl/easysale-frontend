import { CartItem } from '@/@types/Cart';
import { toast } from '@/components/ui/use-toast';
import React, { createContext, ReactNode, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface CartProviderProps {
  children: ReactNode;
}

export interface CartContextDataProps {
  cartItems: CartItem[];
  addProductToCart: (product: CartItem) => void;
  removeProductFromCart: (productId: string) => void;
  changeItemQuantity: (
    productId: string,
    action: 'increment' | 'decrement'
  ) => void;
}

const CartContext = createContext<CartContextDataProps>(
  {} as CartContextDataProps
);

export function CartContextProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState([] as CartItem[]);

  const checkIfAlreadyExistsProduct = (product: CartItem) => {
    const item = cartItems.find(
      (cartItem) =>
        cartItem.name === product.name && cartItem.price === product.price
    );

    if (item) {
      changeItemQuantity(item.productId, 'increment', product.quantity);
      changeItemDescription(item.productId, product.description);
      return true;
    }

    return false;
  };

  const addProductToCart = (product: CartItem) => {
    const alreadyExistsProduct = checkIfAlreadyExistsProduct(product);

    if (alreadyExistsProduct) {
      return true;
    }

    const newCartItem: CartItem = {
      ...product,
      productId: uuidv4(),
    };

    setCartItems((prevCartItems) => [...prevCartItems, newCartItem]);

    toast({
      title: 'Item adicionado ao carrinho ',
    });
  };

  const removeProductFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.productId !== id));

    toast({
      title: 'Item excluído do carrinho ',
    });
  };

  const changeItemQuantity = (
    productId: string,
    action: 'increment' | 'decrement',
    quantity: number = 1
  ) => {
    const item = cartItems.find((item) => item.productId === productId);
    const cartItemsWithoutItem = cartItems.filter(
      (item) => item.productId !== productId
    );
    setCartItems([
      ...cartItemsWithoutItem,
      {
        ...item,
        quantity:
          action === 'increment'
            ? item.quantity + quantity
            : item.quantity - quantity,
      },
    ]);
  };

  const changeItemDescription = (productId: string, description: string) => {
    const item = cartItems.find((item) => item.productId === productId);
    const cartItemsWithoutItem = cartItems.filter(
      (item) => item.productId !== productId
    );
    setCartItems([
      ...cartItemsWithoutItem,
      {
        ...item,
        description,
      },
    ]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addProductToCart,
        removeProductFromCart,
        changeItemQuantity,
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
