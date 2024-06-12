import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { MOCK_CATEGORIES, MOCK_PROFILE } from "@/constants/mocks";
import Image from "next/image";
import { Category } from "./category";

export const SiteProfileTemplate = () => {
  const profile = MOCK_PROFILE;
  const categories = MOCK_CATEGORIES;

  return (
    <div className="flex flex-col">
      <div className="w-full h-40 bg-red-300 relative">
        <Image
          src={profile.background}
          className="w-full h-full object-cover"
          alt=""
        />
        <Image
          src={profile.photo}
          width={48}
          height={48}
          className="w-20 h-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full object-cover"
          alt=""
        />
      </div>
      <div className="flex flex-col px-6 md:px-40 py-8">
        <Heading>{profile.name}</Heading>
        <Paragraph>
          Melhor preço, melhores produtos você encontra aqui!
        </Paragraph>
        <div className="flex flex-col mt-6 gap-12">
          {categories.map((category) => {
            return <Category name={category.category} items={category.items} />;
          })}
        </div>
      </div>
    </div>
  );
};
