import { CompanyAuthenticatedLayout } from "@/components/layouts/company-authenticated-layout";
import { Button } from "@/components/ui/button";
import { FormInputField } from "@/components/form-input-field";
import { FormSelectField } from "@/components/form-select-field";
import { MOCK_CATEGORIES_CHOICES } from "@/constants/mocks";
import { FormSwitchField } from "@/components/form-switch-field";
import { useFormik } from "formik";
import { validationSchemaEditProduct } from "@/lib/utils/validations";

export const AddProductTemplate = () => {
  const handleSubmitForm = (values) => {
    console.log(values);
  };

  const {values, getFieldProps, setFieldValue, handleSubmit, handleChange} = useFormik({
    initialValues: {
      produto: '',
      descricao: '',
      preco: '',
      categoria: '',
      visibilidade: true,
    },
    validationSchema: validationSchemaEditProduct,
    onSubmit: handleSubmitForm,
  });

  return (
    <CompanyAuthenticatedLayout
      title="Editar produto"
      description="Edite dados do seu produto de maneira rápida e eficaz"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInputField
        label="Produto"
        placeholder="Digite o nome do produto"
        description="O nome que ficará visível par ao produto"
      value={values.produto}
      onChange={handleChange("produto")}
          {...getFieldProps('produto')}
        />
        <FormInputField
          label="Descrição"
          placeholder="Descrição do produto"
          description="Adicione uma descrição breve sobre seu produto"
          value={values.descricao}
          onChange={handleChange("descricao")}
          {...getFieldProps('descricao')}
        />
        <FormInputField
        label="Preço"
         placeholder="Preço do produto"
          description="Adicione umm preço no seu produto"
            value={values.preco}
            onChange={handleChange("preco")}
          {...getFieldProps('preco')}
        />
        <FormSelectField
          label="Categoria"
          choices={MOCK_CATEGORIES_CHOICES}
          placeholder="Categoria do produto"
          description="A categoria que o produto pertence."
          value={values.categoria}
          onChange={(value) => setFieldValue('categoria', value)}
        />
        <FormSwitchField
          label="Visibilidade"
          description="Isso garante com que seu produto fique visível ou não"
          isChecked={values.visibilidade}
          onCheckedChange={(checked) => setFieldValue('visibilidade', checked)}
     
        />
        <Button type="submit">Confirmar Alteração</Button>
      </form>
    </CompanyAuthenticatedLayout>
  );
};


