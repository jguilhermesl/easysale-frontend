import { CompanyAuthenticatedLayout } from "@/components/layouts/company-authenticated-layout";
import { Button } from "@/components/ui/button";
import { FormInputField } from "@/components/form-input-field";
import { FormSelectField } from "@/components/form-select-field";
import { MOCK_CATEGORIES_CHOICES } from "@/constants/mocks";
import { FormSwitchField } from "@/components/form-switch-field";
import { useFormik } from "formik";
import { validationSchemaEditProduct } from "@/lib/utils/validations";
import { useState } from "react";
import Image from "next/image";
import { Trash } from "lucide-react";

export const AddProductTemplate = () => {
  const [imagePreview, setImagePreview] = useState([]);

  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    setFieldValue('file', file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(prevState => [...prevState, reader.result]);;
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleRemoveImage = (index) => {
    setImagePreview((prevPreviews) => {
      const newPreviews = [...prevPreviews];
      newPreviews.splice(index, 1);
      return newPreviews;
    });
  
    setFieldValue('file', (prevFiles) => {
      const newFiles = [...prevFiles];
      newFiles.splice(index, 1);
      return newFiles;
    });
  };
  const handleSubmitForm = (values) => {
    console.log(values);
  };

  const { values, getFieldProps, setFieldValue, handleSubmit, handleChange } = useFormik({
    initialValues: {
      produto: '',
      descricao: '',
      preco: '',
      categoria: '',
      file: '',
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
          description="O nome que ficará visível para o produto"
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
          description="Adicione um preço no seu produto"
          value={values.preco}
          onChange={handleChange("preco")}
          {...getFieldProps('preco')}
        />
        <FormInputField
          label="Imagem"
          type="file"
          placeholder="Imagem do produto"
          description="Adicione até 3 imagens do seu produto"
          onChange={handleFileChange}
        />
{imagePreview.length > 0 && (
  <div className="flex flex-row gap-6">
    {imagePreview.map((item, index) => (
      <div key={index} className="relative group">
        <Image src={item} alt="Preview" width={120} height={120} className="rounded" />
        <button
          className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
           onClick={() => handleRemoveImage(index)}
        >
          <Trash color="#fff" size={24} />
        </button>
      </div>
    ))}
  </div>
)}

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
