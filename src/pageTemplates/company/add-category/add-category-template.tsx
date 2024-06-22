import { CompanyAuthenticatedLayout } from "@/components/layouts/company-authenticated-layout";
import { Button } from "@/components/ui/button";
import { FormInputField } from "@/components/form-input-field";
import { FormSwitchField } from "@/components/form-switch-field";
import { validationSchemaEditCategory } from "@/lib/utils/validations";
import { useFormik } from "formik";


export const AddCategoryTemplate = () => {
  const handleSubmitForm = (values) => {
    console.log(values);
  };

  const {values, setFieldValue, handleChange, getFieldProps, handleSubmit} = useFormik({
    initialValues: {
      categoria: '',
      descricao: '',
      visibilidade: true,
    },
    validationSchema: validationSchemaEditCategory,
    onSubmit: handleSubmitForm,
  });
  return (
    <CompanyAuthenticatedLayout
      title="Criar categoria"
      description="Crie uma categoria para seus produtos"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInputField
          label="Categoria"
          placeholder="Nome da categoria"
          description="O nome que ficará visível para a categoria."
          onChange={handleChange("categoria")}
          value={values.categoria}
          {...getFieldProps('categoria')}
        />
        <FormInputField
          label="Descrição"
          placeholder="Descrição da categoria"
          description="Adicione uma descrição breve de quais produtos se encaixam nessa categoria"
          onChange={handleChange("descricao")}
          value={values.descricao}
          {...getFieldProps('descricao')}
        />
         <FormSwitchField
          label="Visibilidade"
          description="Isso garante com que seu produto fique visível ou não"
          isChecked={values.visibilidade}
          onCheckedChange={(checked) => setFieldValue('visibilidade', checked)}
     
        />
   
        <Button type="submit">Cadastrar categoria</Button>
      </form>
    </CompanyAuthenticatedLayout>
  );
};
