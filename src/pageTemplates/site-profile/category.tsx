import { Carousel } from "@/components/carousel";
import { Button } from "@/components/ui/button";
import { Paragraph } from "@/components/ui/paragraph";
import { ChevronRight, Plus } from "lucide-react";
import Image from "next/image";

interface ICategoryProps {
  name: string;
  items: any[];
}

export const Category = ({ items, name }: ICategoryProps) => {
  return (
    <div key={name}>
      <div className="flex items-center justify-between">
        <Paragraph className="font-bold">{name}</Paragraph>
        <Paragraph className="text-orange-600 text-xs flex items-center">
          Ver mais <ChevronRight color="#EA580C" size={12} className="ml-2" />
        </Paragraph>
      </div>
      <Carousel classNameItem="max-w-[200px]">
        {items.map((item, index) => (
          <div className="max-w-[200px] flex flex-col">
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
              <button className="h-8 w-8 bg-black rounded-lg items-center flex justify-center">
                <Plus color="#FFF" size={16} />
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
