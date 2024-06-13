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

export const DialogAddProductToCart = ({ product }) => {
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
          <div className="flex items-center gap-4 ">
            <button className="h-8 w-8 bg-black rounded-lg items-center flex justify-center hover:bg-opacity-90 active:bg-opacity-80">
              <Minus color="#FFF" size={16} />
            </button>
            <Paragraph className="font-bold text-xl">1</Paragraph>
            <button className="h-8 w-8 bg-black rounded-lg items-center flex justify-center hover:bg-opacity-90 active:bg-opacity-80">
              <Plus color="#FFF" size={16} />
            </button>
            <Button className="bg-red-600 ml-4">Adicionar ao carrinho</Button>
          </div>
        </div>
      </div>
    </DialogContent>
  );
};
