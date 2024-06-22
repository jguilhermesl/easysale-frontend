import { CompanyAuthenticatedLayout } from "@/components/layouts/company-authenticated-layout";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/router";
import { CategoriesTableFilters } from "./categories-table-filter";
import { CategoriesList } from "./categories";

export const CategoriesTemplate = () => {
  const router = useRouter();

  return (
    <CompanyAuthenticatedLayout
      title="Categorias"
      description="Crie, edite e delete suas categorias"
      actionsComponent={
        <Button onClick={() => router.push("/company/add-category")}>
          <Plus className="mr-2 h-4 w-4" />
          Adicionar categoria
        </Button>
      }
    >
      <div className="flex flex-col gap-4">
        <CategoriesTableFilters />
        <CategoriesList />
      </div>
    </CompanyAuthenticatedLayout>
  );
};
