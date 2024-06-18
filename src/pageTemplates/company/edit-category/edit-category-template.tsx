import { CompanyAuthenticatedLayout } from "@/components/layouts/company-authenticated-layout";
import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import { FormInputField } from "@/components/form-input-field";

export const EditCategoryTemplate = () => {
  const handleSubmitForm = (values) => {
    console.log(values);
  };

  const { handleSubmit, values, handleChange, getFieldProps } = useFormik({
    initialValues: {
      name: "Bebida",
      description: "Bebida gelada e de fácil consumo",
    },
    onSubmit: handleSubmitForm,
  });

  return (
    <CompanyAuthenticatedLayout
      title="Editar categoria"
      description="Edite os dados da sua categoria de forma fácil"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <FormInputField
            value={values.name}
            onChange={handleChange("name")}
            {...getFieldProps("name")}
          />
          <FormInputField
            value={values.description}
            onChange={handleChange("description")}
            {...getFieldProps("description")}
          />
        </div>
        <Button type="submit">Confirmar alteração</Button>
      </form>
    </CompanyAuthenticatedLayout>
  );
};
