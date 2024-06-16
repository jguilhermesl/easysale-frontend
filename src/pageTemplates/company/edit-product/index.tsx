import { CompanyAuthenticatedLayout } from "@/components/layouts/company-authenticated-layout";
import { Button } from "@/components/ui/button";
import { FormInputField } from "@/components/form-input-field";
import { FormSelectField } from "@/components/form-select-field";
import { MOCK_CATEGORIES_CHOICES } from "@/constants/mocks";
import { FormSwitchField } from "@/components/form-switch-field";

import { Field, Form, Formik, ErrorMessage } from "formik";
import { validationSchemaEditProduct } from "@/lib/utils/validations";


export const EditProductTemplate = () => {

  const handleSubmitForm = (values)=> {
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
          categoria: '',
          visibilidade: true,
        }}
        validationSchema={validationSchemaEditProduct}
        onSubmit={handleSubmitForm}
      >
        {({ handleSubmit, values, setFieldValue }) => (
          <Form className="space-y-6" onSubmit={handleSubmit}>
            <Field
            id="produto"
              name="produto"
              label="Produto"
              placeholder="Nome do produto"
              description="O nome que ficará visível para o produto."
              component={FormInputField}
              
            />
              <ErrorMessage name="produto" component="div" className="text-red-500" />
            <Field
             id="descricao"
              name="descricao"
              label="Descrição (opcional)"
              placeholder="Descrição do produto"
              description="Adicione uma descrição breve e direta para o produto."
              component={FormInputField}
            />
              <ErrorMessage name="descricao" component="div" className="text-red-500" />
            <Field
             id="preco"
              name="preco"
              label="Preço"
              placeholder="Preço do produto"
              description="O preço que ficará disponível para o produto."
              type="number"
              component={FormInputField}
            />
             <ErrorMessage name="preco" component="div" className="text-red-500" />
             <Field
              id="categoria"
              name="categoria"
              label="Categoria"
              choices={MOCK_CATEGORIES_CHOICES}
              placeholder="Categoria do produto"
              description="A categoria que o produto pertence."
              component={FormSelectField}
              onChange={(value) => setFieldValue('categoria', value)}
              value={values.categoria}
            />
             <ErrorMessage name="categoria" component="div" className="text-red-500" />
            <Field
              id="visibilidade"
              name="visibilidade"
              label="Visibilidade"
              description="Isso garante com que seu produto fique visível ou não"
              component={FormSwitchField}
              isChecked={values.visibilidade}
              onCheckedChange={(checked) => setFieldValue('visibilidade', checked)}
            />
             <ErrorMessage name="visibilidade" component="div" className="text-red-500" />
            <Button type="submit" >
            Confirmar Alteração
            </Button>
          </Form>
        )}
      </Formik>
  </CompanyAuthenticatedLayout>
  );
};
