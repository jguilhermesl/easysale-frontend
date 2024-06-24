import Image from "next/image";
import { FormInputField } from "./form-input-field";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Minus, Plus } from "lucide-react";
import { Paragraph } from "./ui/paragraph";
import { Button } from "./ui/button";
import { useCart } from "@/hooks/useCart";
import { useState } from "react";

export const DialogAddProductToCart = ({ product }) => {
  const [quantityProduct, setQuantityProduct] = useState(1); 

  const { addProductToCart } = useCart();

  const handleAddProductCart = () => {
    addProductToCart({ ...product, quantity: quantityProduct });
    console.log(product);
  };

  const handleAddQuantityProduct = () => {
    setQuantityProduct(quantityProduct + 1);
  };

  const handleDecreaseQuantityProduct = () => {
    if (quantityProduct > 1) {
      setQuantityProduct(quantityProduct - 1);
    }
  };

  return (
    <DialogContent className="max-w-[50%] w-full">
      <DialogHeader>
        <DialogTitle>Adicionar {product.name} ao carrinho</DialogTitle>
        <DialogDescription>
          Anyone who has this link will be able to view this.
        </DialogDescription>
      </DialogHeader>
      <div className="flex">
        <div className="p-4 w-1/2">
          <Image
            src={product.photo}
            className="object-cover rounded-lg"
            alt=""
            width={400}
            height={400}
          />
        </div>
        <div className="w-1/2 flex flex-col justify-between items-end h-full">
          <FormInputField
            label="Detalhes"
            placeholder="Adicione detalhes ao pedido"
            onChange={() => {}}
            value={""}
            className="w-full"
          />
          <div className="flex items-center gap-4">
            <button
              onClick={handleDecreaseQuantityProduct}
              className="h-8 w-8 bg-black rounded-lg items-center flex justify-center hover:bg-opacity-90 active:bg-opacity-80"
            >
              <Minus color="#FFF" size={16} />
            </button>
            <Paragraph className="font-bold text-xl">{quantityProduct}</Paragraph>
            <button
              onClick={handleAddQuantityProduct}
              className="h-8 w-8 bg-black rounded-lg items-center flex justify-center hover:bg-opacity-90 active:bg-opacity-80"
            >
              <Plus color="#FFF" size={16} />
            </button>
            <Button
              onClick={handleAddProductCart}
              className="bg-red-600 ml-4"
            >
              Adicionar ao carrinho
            </Button>
          </div>
        </div>
      </div>
    </DialogContent>
  );
};
