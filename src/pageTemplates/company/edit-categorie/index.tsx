import { CompanyAuthenticatedLayout } from "@/components/layouts/company-authenticated-layout";
import { Button } from "@/components/ui/button";
import { FormInputField } from "@/components/form-input-field";
import { Field, Form, Formik } from "formik";
import { validationSchemaEditCategorie } from "@/lib/utils/validations";


export const EditCategorieTemplate = () => {

  const handleSubmit = (values)=> {
    console.log(values)
  }
  return (
    <CompanyAuthenticatedLayout
      title="Editar categoria"
      description="Edite dados da sua categoria de forma fácil"
    >
      <Formik
        initialValues={{
          categoria: 'Bebida',
          descricao: 'Bebida gelada e de fácil consumo',
        }}
        validationSchema={validationSchemaEditCategorie}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-6">
            <Field
              name="categoria"
              label="Categoria"
              placeholder="Nome da categoria"
              component={FormInputField}
            />
            <Field
              name="descricao"
              label="Descrição"
              placeholder="Descrição da categoria"
              component={FormInputField}
            />
   
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Confirmar alteração'}
            </Button>
          </Form>
        )}
      </Formik>
    </CompanyAuthenticatedLayout>
  );
};
