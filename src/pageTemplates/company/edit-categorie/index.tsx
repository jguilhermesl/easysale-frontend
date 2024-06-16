import { CompanyAuthenticatedLayout } from "@/components/layouts/company-authenticated-layout";
import { Button } from "@/components/ui/button";
import { ErrorMessage, Field, Form, Formik } from "formik"; 
import { validationSchemaEditCategorie } from "@/lib/utils/validations";
import { FormInputField } from "@/components/form-input-field";

export const EditCategorieTemplate = () => {
  const handleSubmitForm = (values) => {
    console.log(values);
  };

  return (
    <CompanyAuthenticatedLayout
      title="Editar categoria"
      description="Edite os dados da sua categoria de forma fácil"
    >
      <Formik
        initialValues={{
          categoria: 'Bebida',
          descricao: 'Bebida gelada e de fácil consumo'
        }}
        validationSchema={validationSchemaEditCategorie}
        onSubmit={handleSubmitForm}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Field
                id="categoria"
                name="categoria"
                placeholder="Nome da categoria"
             label= 'Categoria'
             component={FormInputField}
              />
              <ErrorMessage name="categoria" component="div" className="text-red-500" />
            </div>
            <div>
              <Field
                id="descricao"
                name="descricao"
                placeholder="Descrição da categoria"
               label='Descrição da categoria'
                component={FormInputField}
               
              />
              <ErrorMessage name="descricao" component="div" className="text-red-500" />
            </div>
            <Button type="submit">
              Confirmar alteração
            </Button>
          </Form>
        )}
      </Formik>
    </CompanyAuthenticatedLayout>
  );
};
