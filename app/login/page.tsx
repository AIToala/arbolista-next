"use client";

import Heading from "@/app/components/Heading";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { Label } from "../components/ui/label";
import { email } from "../types";

const Login = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (data.email === "" || data.password === "") {
      toast.error("Por favor, llene todos los campos");
      return;
    }
    setIsLoading(true);
    signIn("credentials", {
      ...data,
      redirect: false,
    })
      .then((callback) => {
        setIsLoading(false);
        if (callback?.error != null) {
          toast.error("Correo y/o contraseña incorrectos");
        } else if (callback?.ok ?? false) {
          toast.success("Inicio de sesión exitos\nBienvenido");
          router.refresh();
          window.location.href = "/";
        }
      })
      .catch((_err) => {
        setIsLoading(false);
        toast.error("Correo y/o contraseña incorrectos");
      });
  };

  return (
    <div className="w-full my-10 items-center justify-center flex flex-col">
      <div className="text-center mb-8">
        {/* Logo */}
        <Image
          src="/images/logos/fngye-logo-about.png"
          alt="Arbolista Logo"
          className="h-24 mx-auto mb-4"
          width={100}
          height={100}
          priority
        />
        {/* Heading */}
        <Heading center title="Bienvenido a Arbolista" subtitle="" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10 justify-center">
        <div className="flex flex-col col-span-1 gap-4 px-6">
          <div className="flex flex-col gap-4 ">
            <p className="text-gray-700">
              Inicia sesión y ayúdanos a crear un mejor catálogo de plantas de
              Guayaquil.
            </p>
            <hr />
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <Label>Correo</Label>
              <Input
                id="email"
                type="email"
                className={
                  errors.email != null
                    ? "border border-red-500 text-red"
                    : "border border-input"
                }
                placeholder="Ingrese su correo electrónico"
                {...register("email", {
                  required: "Campo obligatorio",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Correo inválido",
                  },
                })}
              />
              {errors.email != null && (
                <p className="text-red-700 w-fit p-2">
                  {errors.email.message?.toString()}
                </p>
              )}
            </div>
            <div>
              <Label>Contraseña</Label>
              <Input
                id="password"
                type="password"
                placeholder="Ingrese su contraseña"
                className={
                  errors.password != null
                    ? "border border-red-500 text-red"
                    : "border border-input"
                }
                {...register("password", {
                  required: "Campo obligatorio",
                })}
              />
              {errors.password != null && (
                <p className="text-red-700 w-fit p-2">
                  {errors.password.message?.toString()}
                </p>
              )}
            </div>
            <Button
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onClick={handleSubmit(onSubmit)}
              className="bg-green-700 hover:bg-green-700/90"
              disabled={isLoading}
            >
              Iniciar sesión
            </Button>
          </div>
        </div>
        <div className="flex flex-col col-span-1 justify-center bg-slate-700 p-4 rounded-md text-center text-white">
          <p className="text-center text-gray-300">
            ¿Quieres formar parte de nosotros? Envianos un correo a nuestro
            email
          </p>
          <p className="text-center font-bold">
            <a target="_blank" href={`mailto:${email}`}>
              {email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
