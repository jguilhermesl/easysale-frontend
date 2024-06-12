import { ReactNode } from "react";
import { Heading } from "../ui/heading";
import { Paragraph } from "../ui/paragraph";
import PizzaLogo from "@/assets/pizza-logo.jpeg";
import Image from "next/image";
import Link from "next/link";

interface ICompanyAuthenticatedLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  actionsComponent?: ReactNode;
}

export const CompanyAuthenticatedLayout = ({
  children,
  title,
  description,
  actionsComponent,
}: ICompanyAuthenticatedLayoutProps) => {
  return (
    <div className="flex flex-col relative">
      <div className="flex h-20 w-full border border-b items-center px-10 md:px-40 justify-between">
        <div className="flex gap-16">
          <Link href="/company/products">
            <Heading className="text-green-600 text-2xl">easy.sale</Heading>
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/company/products">
              <Paragraph className="font-medium">Produtos</Paragraph>
            </Link>
            <Link href="/company/categories">
              <Paragraph className="font-medium">Categorias</Paragraph>
            </Link>
          </div>
        </div>
        <Image
          src={PizzaLogo}
          alt="Foto de perfil"
          className="h-10 w-10 rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col relative py-12 w-full px-4 md:px-40">
        <Heading>{title}</Heading>
        <Paragraph>{description}</Paragraph>
        <div className="mt-12 w-full">{children}</div>
        <div className="absolute top-12 right-4 md:right-40">
          {actionsComponent}
        </div>
      </div>
    </div>
  );
};
