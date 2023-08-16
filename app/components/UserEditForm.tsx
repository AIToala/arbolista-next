"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useState } from "react";
import { useForm, type SubmitHandler, type FieldValues } from "react-hook-form";
import Select from "react-select";
import { toast } from "react-hot-toast";
import axios from "axios";
import { type AxiosResponse } from "axios";
import { speciesEnums } from "@/app/types/index";
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";

export function UserEditForm({ email }: { email: string }) {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  const [selectedRole, setSelectedRole] = useState("");
  const [userData, setUserData] = useState<FieldValues>({
    name: "",
    email: "",
    userRole: "",
    password: "",
    passwordConf: "",
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
    console.log(`Updating user with ID: ${email}`);
    console.log(data);
    try {
      const response: AxiosResponse<any> = await axios.put(
        `/api/users/${email}`,
        data
      );
      toast.success("Usuario actualizado con éxito");
    } catch (error) {
      console.log(error);
      toast.error("Hubo un error al momento de actualizar el usuario");
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label>Nombre Completo</Label>
      <Input
        id="name"
        placeholder="Ingrese los nombres completos del usuario"
        {...register("name", { required: "Campo obligatorio" })}
      />
      {errors.name && (
        <p className="text-red-700 w-fit p-2">
          {errors.name.message as string}
        </p>
      )}

      <Label>Correo</Label>
      <Input
        id="email"
        placeholder="Ingrese el correo del usuario"
        {...register("email", {
          required: "Campo obligatorio",
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

      <Label>Rol</Label>
      <Select
        id="userRole"
        value={speciesEnums.userRole.find(
          (option) => option.value === selectedRole
        )}
        onChange={(selectedOption) => {
          if (selectedOption !== null) setSelectedRole(selectedOption.value);
          setValue("userRole", selectedOption?.value);
        }}
        placeholder="Seleccione el rol del usuario"
        options={speciesEnums.userRole}
        required
      />
      {!selectedRole && (
        <p className="text-red-700 w-fit p-2">Campo obligatorio</p>
      )}

      <Label>Contraseña</Label>
      <Input
        id="password"
        type="password"
        placeholder="Ingrese la contraseña"
        {...register("password", {
          required: "Campo obligatorio",
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

      <Label>Confirmar Contraseña</Label>
      <Input
        id="passwordConf"
        type="password"
        placeholder="Confirme la contraseña"
        {...register("passwordConf", {
          required: "Campo obligatorio",
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

      <Button type="submit">Guardar cambios</Button>
    </form>
  );
}
