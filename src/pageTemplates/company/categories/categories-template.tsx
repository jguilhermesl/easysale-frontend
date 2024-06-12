import { CompanyAuthenticatedLayout } from "@/components/layouts/company-authenticated-layout";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/router";

export const CategoriesTemplate = () => {
  const router = useRouter();

  return (
    <CompanyAuthenticatedLayout
      title="Categorias"
      description="Crie, edite e delete suas categorias"
      actionsComponent={
        <Button onClick={() => router.push("/company/add-categorie")}>
          <Plus className="mr-2 h-4 w-4" />
          Adicionar categoria
        </Button>
      }
    >
      <div className="flex flex-col gap-4">
        {/* <ProductsTableFilters /> */}
        {/* <ProductsList /> */}
      </div>
    </CompanyAuthenticatedLayout>
  );
};
