import * as Yup from "yup";

export const validationSchemaEditProduct = Yup.object().shape({
  produto: Yup.string()
    .required('O nome do produto é obrigatório'),
  descricao: Yup.string(),
  preco: Yup.string()
    .required('Preço é um campo obrigatório'),
  categoria: Yup.string()
    .required('A categoria do produto é obrigatória'),
  visibilidade: Yup.boolean()
    .required('A visibilidade é obrigatória')
});

export const validationSchemaEditCategorie = Yup.object().shape({
  categoria: Yup.string().required('O campo categoria é obrigatório'),
  descricao: Yup.string().required('O campo descrição é obrigatório'),
});

export const validationSchemaLogin = Yup.object().shape({
  email: Yup.string()
    .email("Digite um e-mail válido")
    .required("Campo obrigatório"),
  password: Yup.string().required("Campo obrigatório"),
});
