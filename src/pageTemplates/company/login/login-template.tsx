import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import { Envelope } from "phosphor-react";
import { validationSchemaLogin } from "@/lib/utils/validations";
import { useRouter } from "next/router";
import { Heading } from "@/components/ui/heading";
import { FormInputField } from "@/components/form-input-field";
import { FormPasswordField } from "@/components/form-password-field";

export const LoginTemplate = () => {
  const router = useRouter();

  const handleAuth = async (values: { email: string; password: string }) => {
    console.log(values);
    router.push("/company");
  };

  const { handleBlur, handleChange, values, handleSubmit } = useFormik({
    validateOnChange: false,
    validateOnBlur: true,
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchemaLogin,
    onSubmit: (values) =>
      handleAuth({ email: values.email, password: values.password }),
  });

  return (
    <div className="h-[100vh] w-full flex flex-col md:flex-row">
      <div className="w-full md:w-[50%] bg-primary p-9 flex flex-col ">
        <Heading className="text-white text-2xl">easy.sale</Heading>
      </div>
      <div className="w-full md:w-[50%] flex flex-col items-center justify-center px-7 md:px-20 relative">
        <h1 className="text-3xl font-semibold text-black mb-2">Fazer Login</h1>
        <p className="text-sm text-default-grey !font-poppins">
          Insira seu e-mail e senha abaixo para fazer login
        </p>
        <form
          className="w-full md:w-[400px] mt-6 flex flex-col"
          onSubmit={handleSubmit}
        >
          <FormInputField
            label="E-mail"
            placeholder="Digite seu e-mail"
            iconRight={<Envelope size={16} />}
            onChange={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
          />
          <FormPasswordField
            label="Senha"
            placeholder="Digite sua senha"
            onChange={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
          />
          <Button
            type="submit"
            className="!rounded-md !font-poppins !font-medium mt-8"
          >
            Logar
          </Button>
        </form>
      </div>
    </div>
  );
};
