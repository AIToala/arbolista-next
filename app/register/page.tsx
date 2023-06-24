"use client";

import axios from "axios";
import { type FieldValues, type SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Input from "@/app/components/inputs/Input";
import Heading from "@/app/components/Heading";
import Button from "@/app/components/buttons/Button";
import Link from "next/link";

const Register = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    axios
      .post("/api/register", data)
      .then((response) => {
        toast.success(
          "Registro exitoso. Te contactaremos pronto para habilitar tu cuenta."
        );
      })
      .catch(() => {
        toast.error("Ocurrió un error al registrarse");
      })
      .finally(() => {
        router.push("/");
      });
  };

  return (
    <div className="w-full my-32 items-center justify-center flex flex-row">
      <div className="w-[70vw] text-sm md:text-md md:w-[60vw] lg:w-[50vw]  ">
        <div className="flex flex-col gap-4">
          <Heading
            center
            title="Bienvenido a Arbolista"
            subtitle="Unete a nuestra comunidad de viveristas y ayudanos a crear un mejor catalogo de plantas de Guayaquil"
          />
          <hr />
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <Input
            id="name"
            label="Nombre Completo"
            register={register}
            errors={errors}
            type="text"
            required
          />
          <Input
            id="email"
            label="Correo"
            type="email"
            register={register}
            errors={errors}
            required
          />
          <Input
            id="password"
            type="password"
            label="Contraseña"
            register={register}
            errors={errors}
            required
          />
          <Button
            label="Registrar cuenta"
            onClick={() => {
              handleSubmit(onSubmit);
            }}
          />
        </div>
        <div className="flex flex-col gap-4 mt-3">
          <div className="text-neutral-500 text-center mt-4 font-light">
            <div className="justify-center flex flex-row items-center gap-2">
              <div>¿Ya tienes una cuenta?</div>
              <div className="text-green-500 font-semibold cursor-pointer hover:underline">
                <Link href="/login">Inicia sesion</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
