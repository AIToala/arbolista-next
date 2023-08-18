"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { speciesEnums } from "@/app/types/index";
import axios, { type AxiosResponse } from "axios";
import { get } from "http";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";
import Select from "react-select";

export function UserEditForm({ id }: { id: string }) {
  const fetchUserData = async () => {
    const response: AxiosResponse<any> = await axios.get(`/api/users/`, {
      params: { id },
    });
    const data = response.data;
    return data;
  };
  const [userData, setUserData] = useState(fetchUserData());
  console.log(userData);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
    try {
      const response: AxiosResponse<any> = await axios.put(`/api/users/`, {
        id,
        name: data.name,
        email: data.email,
        userRole: data.userRole,
        password: data.password,
        passwordConf: data.passwordConf,
      });
      toast.success("Usuario actualizado con éxito");
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Hubo un error al momento de actualizar el usuario");
    }
  };
  return (
    <form
      className="flex flex-col w-full mx-4 !my-2 items-start h-full mr-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Label className="mt-5">Nombre Completo</Label>
      <Input
        id="name"
        value={getValues("name")}
        placeholder="Ingrese los nombres completos del usuario"
        {...register("name")}
      />
      {errors.name && (
        <p className="text-red-700 w-fit p-2">
          {errors.name.message as string}
        </p>
      )}

      <Label className="mt-5">Correo</Label>
      <Input
        id="email"
        placeholder="Ingrese el correo del usuario"
        value={getValues("email")}
        {...register("email", {
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Correo inválido",
          },
        })}
      />
      {errors.email && (
        <p className="text-red-700 w-fit p-2">
          {errors.email.message as string}
        </p>
      )}
      <div className="w-full">
        <Label className="mt-5">Rol</Label>
        <Select
          id="userRole"
          value={getValues("userRole")}
          onChange={(selectedOption) => {
            if (selectedOption !== null)
              setValue("userRole", selectedOption?.value);
          }}
          placeholder="Seleccione el rol del usuario"
          options={speciesEnums.userRole}
        />
      </div>
      <Label className="mt-5">Contraseña</Label>
      <Input
        id="password"
        type="password"
        placeholder="Ingrese la contraseña"
        {...register("password", {
          minLength: {
            value: 8,
            message: "La contraseña debe tener al menos 8 caracteres",
          },
        })}
      />
      {errors.password && (
        <p className="text-red-700 w-fit p-2">
          {errors.password.message as string}
        </p>
      )}

      <Label className="mt-5">Confirmar Contraseña</Label>
      <Input
        id="passwordConf"
        type="password"
        placeholder="Confirme la contraseña"
        {...register("passwordConf", {
          required: getValues("password") ? "Campo obligatorio" : false,
          validate: {
            matchesPreviousPassword: (value) => {
              const { password } = getValues();
              return password === value || "Las contraseñas deben coincidir";
            },
          },
        })}
      />
      {errors.passwordConf && (
        <p className="text-red-700 w-fit p-2">
          {errors.passwordConf.message as string}
        </p>
      )}
      <div className="flex w-full mt-7 mb-12 justify-end">
        <Button type="submit">Guardar cambios</Button>
      </div>
    </form>
  );
}
