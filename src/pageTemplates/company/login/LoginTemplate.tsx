import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFormik } from "formik";
import { Envelope, Eye, EyeClosed } from "phosphor-react"
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { validationSchemaLogin } from "@/lib/utils/validations";
import { useRouter } from "next/router";

export const LoginTemplate = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter()
  const handleAuth = async (values: { email: string; password: string }) => {
    console.log(values)
    router.push('/company')
  }

  const formik = useFormik({
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
    <div className="w-full md:w-[50%] bg-primary p-9 flex flex-col justify-center items-center md:justify-between md:h-auto h-[200px] mb-10 md:mb-0">
      <div className="text-center md:text-left">
        <p className="text-white font-normal">
          Bem vindo ao seu facilitador de vendas
        </p>
        <p className="text-white font-normal">
          EasySale
        </p>
      </div>
    </div>
    <div className="w-full md:w-[50%] flex flex-col items-center justify-center px-7 md:px-20 relative">
     
      <h1 className="text-3xl font-semibold text-black mb-2">Fazer Login</h1>
      <p className="text-sm text-default-grey !font-poppins">
        Insira seu e-mail e senha abaixo para fazer login
      </p>
      <form className="w-full md:w-[400px] mt-6 flex flex-col" onSubmit={formik.handleSubmit}>
        <Label className="text-base mb-2">Email</Label>
        <Input
          placeholder="Digite seu e-mail"
          type="text"
          className="px-4 py-[10px] mb-2"
          iconRight={<Envelope size={16} />}
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email && (
          <div className="text-red-500 text-xs mb-1">{formik.errors.email}</div>
        )}
        <Label className="text-base mb-2">Senha</Label>
        <Input
          placeholder="Digite sua senha"
          type={showPassword ? "text" : "password"}
          className="px-4 py-[10px]"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          iconRight={
            showPassword ? (
              <Eye
                className="cursor-pointer"
                size={16}
                onClick={(e) => {
                  e.preventDefault();
                  setShowPassword(!showPassword);
                }}
              />
            ) : (
              <EyeClosed
                className="cursor-pointer"
                size={16}
                onClick={(e) => {
                  e.preventDefault();
                  setShowPassword(!showPassword);
                }}
              />
            )
          }
        />
        {formik.errors.password && formik.touched.password && (
          <div className="text-red-500 text-xs mb-1">{formik.errors.password}</div>
        )}
        <Button type="submit" className="!rounded-md !font-poppins !font-medium mt-8">
          Logar
        </Button>
      </form>
    </div>
  </div>
  
  );
};
