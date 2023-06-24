"use client";

import axios from "axios";
import { useState } from "react";
import { type FieldValues, type SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    axios
      .post("/api/register", data)
      .then((response) => {
        registerModal.onClose();
        toast.success(
          "Registro exitoso. Te contactaremos pronto para habilitar tu cuenta."
        );
      })
      .catch(() => {
        toast.error("Ocurrió un error al registrarse");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Bienvenido a Arbolista"
        subtitle="Registrate y ayudanos a crear un mejor catalogo de plantas de Guayaquil."
      />
      <Input
        id="name"
        label="Nombre Completo"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="email"
        label="Correo"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        type="password"
        label="Contraseña"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );
  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="justify-center flex flex-row items-center gap-2">
          <div>¿Ya tienes una cuenta?</div>
          <div className="text-green-500 font-semibold cursor-pointer hover:underline">
            Inicia sesión
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Registro"
      onClose={registerModal.onClose}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleSubmit(onSubmit)}
      actionLabel="Registrarse"
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
