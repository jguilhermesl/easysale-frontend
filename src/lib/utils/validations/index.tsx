import * as Yup from "yup";

export const validationSchemaEditProduct = Yup.object().shape({
  produto: Yup.string().required('Campo obrigatório'),
  descricao: Yup.string(),
  preco: Yup.number().required('Campo obrigatório'),
  categoria: Yup.string().required('Campo obrigatório'),
});

export const validationSchemaEditCategorie = Yup.object().shape({
  categoria: Yup.string().required('Campo obrigatório'),
  descricao: Yup.string().required('Campo obrigatório'),
});

export const validationSchemaLogin = Yup.object().shape({
  email: Yup.string()
    .email("Digite um e-mail válido")
    .required("Campo obrigatório"),
  password: Yup.string().required("Campo obrigatório"),
});
