import * as Yup from "yup";


export const validationSchemaProduct = Yup.object().shape({
  product: Yup.string()
    .required('O nome do produto é obrigatório'),
  description: Yup.string(),
  price: Yup.number()
    .required('Preço é um campo obrigatório'),
  category: Yup.string()
    .required('A categoria do produto é obrigatória'),
  file: Yup.mixed().required('O arquivo é obrigatório'),
  visibility: Yup.boolean()
    .required('A visibilidade é obrigatória')
});



export const validationSchemaCategory = Yup.object().shape({
  categoria: Yup.string().required('O campo categoria é obrigatório'),
  descricao: Yup.string().required('O campo descrição é obrigatório'),
});

export const validationSchemaLogin = Yup.object().shape({
  email: Yup.string()
    .email("Digite um e-mail válido")
    .required("Campo obrigatório"),
  password: Yup.string().required("Campo obrigatório"),
});
