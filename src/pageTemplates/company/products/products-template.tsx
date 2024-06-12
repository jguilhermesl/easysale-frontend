import { CompanyAuthenticatedLayout } from "@/components/layouts/company-authenticated-layout";
import { ProductsList } from "./products";
import { ProductsTableFilters } from "./products-table-filter";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/router";

export const ProductsTemplate = () => {
  const router = useRouter();

  return (
    <CompanyAuthenticatedLayout
      title="Produtos"
      description="Crie, edite e delete seus produtos"
      actionsComponent={
        <Button onClick={() => router.push("/company/add-product")}>
          <Plus className="mr-2 h-4 w-4" />
          Adicionar produto
        </Button>
      }
    >
      <div className="flex flex-col gap-4">
        <ProductsTableFilters />
        <ProductsList />
      </div>
    </CompanyAuthenticatedLayout>
  );
};
