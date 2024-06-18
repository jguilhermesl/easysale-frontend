import { CompanyAuthenticatedLayout } from "@/components/layouts/company-authenticated-layout";
import { Button } from "@/components/ui/button";
import { FormInputField } from "@/components/form-input-field";


export const AddCategoryTemplate = () => {
  return (
    <CompanyAuthenticatedLayout
      title="Criar categoria"
      description="Crie uma categoria para seus produtos"
    >
      <form onSubmit={() => {}} className="space-y-6">
        <FormInputField
          label="Categoria"
          placeholder="Nome da categoria"
          description="O nome que ficará visível para a categoria."
          onChange={() => {}}
          value={""}
        />
        <FormInputField
          label="Descrição"
          placeholder="Descrição da categoria"
          description="Adicione uma descrição breve de quais produtos se encaixam nessa categoria"
          onChange={() => {}}
          value={""}
        />
   
        <Button type="submit">Cadastrar categoria</Button>
      </form>
    </CompanyAuthenticatedLayout>
  );
};
