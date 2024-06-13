import { CompanyAuthenticatedLayout } from "@/components/layouts/company-authenticated-layout";
import { Button } from "@/components/ui/button";
import { FormInputField } from "@/components/form-input-field";
import { FormSelectField } from "@/components/form-select-field";
import { FormSwitchField } from "@/components/form-switch-field";
import { MOCK_CATEGORIES_CHOICES } from "@/constants/mocks";

export const AddProductTemplate = () => {
  return (
    <CompanyAuthenticatedLayout
      title="Criar produto"
      description="Crie um produto e visualize nas suas listagens"
    >
      <form onSubmit={() => {}} className="space-y-6">
        <FormInputField
          label="Produto"
          placeholder="Nome do produto"
          description="O nome que ficará visível para o produto."
          onChange={() => {}}
          value={""}
        />
        <FormInputField
          label="Descrição (opcional)"
          placeholder="Descrição do produto"
          description="Adicione uma descrição breve e direta para o produto."
          onChange={() => {}}
          value={""}
        />
        <FormInputField
          label="Preço"
          placeholder="Preço do produto"
          description="O preço que ficará disponível para o produto."
          onChange={() => {}}
          value={""}
        />
        <FormSelectField
          choices={MOCK_CATEGORIES_CHOICES}
          label="Categoria"
          placeholder="Categoria do produto"
          description="A categoria que o produto pertence."
          onChange={() => {}}
          value={"temakis"}
        />
        <FormSwitchField
          isChecked={true}
          onCheckedChange={() => {}}
          label="Visibilidade"
          description="Isso garante com que seu produto fique visível ou não"
        />
        <Button type="submit">Cadastrar produto</Button>
      </form>
    </CompanyAuthenticatedLayout>
  );
};
