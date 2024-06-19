import { Product } from "@/@types/Product";
import { Carousel } from "@/components/carousel";
import { DialogAddProductToCart } from "@/components/dialog-add-product-to-cart";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Paragraph } from "@/components/ui/paragraph";
import { ChevronRight, Plus } from "lucide-react";
import Image from "next/image";
import {useRouter} from "next/router"

interface ICategoryProps {
  name: string;
  items: Product[];
}

export const Category = ({ items, name }: ICategoryProps) => {

  const router = useRouter()
  return (
    <div key={name}>
      <div className="flex items-center justify-between">
        <Paragraph className="font-bold">{name}</Paragraph>
        <button onClick={ () => router.push(`/category?=${name}`)}>
          <Paragraph className="text-orange-600 text-xs flex items-center">
            Ver mais <ChevronRight color="#EA580C" size={12} className="ml-2" />
          </Paragraph>
        </button>
      </div>
      <Carousel classNameItem="max-w-[200px]">
        {items.map((item) => (
          <div className="max-w-[200px] flex flex-col" key={item.name}>
            <Image
              src={item.photo}
              alt=""
              className="object-cover rounded-lg"
              style={{ width: "200px", height: "200px" }}
            />
            <Paragraph className="mt-2">{item.name}</Paragraph>
            <div className="flex items-center justify-between">
              <Paragraph className=" font-bold text-base">
                R$ {item.price}
              </Paragraph>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="h-8 w-8 bg-black rounded-lg items-center flex justify-center hover:bg-opacity-90 active:bg-opacity-80">
                    <Plus color="#FFF" size={16} />
                  </button>
                </DialogTrigger>
                <DialogAddProductToCart product={item} />
              </Dialog>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
