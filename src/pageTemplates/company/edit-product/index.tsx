import { CompanyAuthenticatedLayout } from "@/components/layouts/company-authenticated-layout";
import { Button } from "@/components/ui/button";
import { FormInputField } from "@/components/form-input-field";
import { FormSelectField } from "@/components/form-select-field";
import { MOCK_CATEGORIES_CHOICES } from "@/constants/mocks";
import { FormSwitchField } from "@/components/form-switch-field";

import { Field, Form, Formik } from "formik";
import { validationSchemaEditProduct } from "@/lib/utils/validations";


export const EditProductTemplate = () => {

  const handleSubmit = (values)=> {
    console.log(values)
  }
  return (
    <CompanyAuthenticatedLayout
    title="Editar produto"
    description="Edite dados do seu produto de maneira rápida e eficaz"
  >
   <Formik
        initialValues={{
          produto: 'Coca-Cola',
          descricao: 'Sua bebida favorita',
          preco: '$ 49',
          categoria: 'bebidas',
          visibilidade: true,
        }}
        validationSchema={validationSchemaEditProduct}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-6">
            <Field
              name="produto"
              label="Produto"
              placeholder="Nome do produto"
              description="O nome que ficará visível para o produto."
              component={FormInputField}
            />
            <Field
              name="descricao"
              label="Descrição (opcional)"
              placeholder="Descrição do produto"
              description="Adicione uma descrição breve e direta para o produto."
              component={FormInputField}
            />
            <Field
              name="preco"
              label="Preço"
              placeholder="Preço do produto"
              description="O preço que ficará disponível para o produto."
              type="number"
              component={FormInputField}
            />
            <Field
              name="categoria"
              label="Categoria"
              choices={MOCK_CATEGORIES_CHOICES}
              placeholder="Categoria do produto"
              description="A categoria que o produto pertence."
              component={FormSelectField}
            />
            <Field
              name="visibilidade"
              label="Visibilidade"
              description="Isso garante com que seu produto fique visível ou não"
              component={FormSwitchField}
            />
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Confirmar Alteração'}
            </Button>
          </Form>
        )}
      </Formik>
  </CompanyAuthenticatedLayout>
  );
};
