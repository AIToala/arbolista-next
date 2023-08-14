/* eslint-disable @typescript-eslint/no-misused-promises */
"use client";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs";
import { speciesEnums } from "@/app/types/index";
import axios from "axios";
import { useState } from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import Select from "react-select";
import { toast } from "react-hot-toast";

export function DashboardUsuarioPage() {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors }, // Add formState to access validation errors
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordConf: "",
    },
  });

  const [selectedRole, setSelectedRole] = useState("");
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    axios
      .post("/api/register", data)
      .then((response) => {
        toast.success("Usuario creado con exito");
      })
      .catch((e) => {
        toast.error("Hubo un error al momento de crear el usuario");
      });
  };

  return (
    <div className="flex flex-col w-full mx-4 !my-2 items-start h-full">
      <Tabs
        defaultValue="name"
        className="flex flex-col gap-4 w-full p-4 h-full"
      >
        <TabsList className="w-full flex h-full">
          <TabsTrigger value="name">Registrar usuario</TabsTrigger>
        </TabsList>
        <TabsContent value="name" className="flex flex-col gap-2 w-full">
          <Label>Nombre Completo</Label>
          <Input
            id="name"
            className={
              errors.name != null
                ? "border border-red-500 text-red"
                : "border border-input"
            }
            placeholder="Ingrese los nombres completos del usuario"
            {...register("name", { required: "Campo obligatorio" })}
          />
          {errors.name != null && (
            <p className="text-red-700 w-fit p-2">
              {errors.name.message?.toString()}
            </p>
          )}
          <Label>Correo</Label>
          <Input
            id="email"
            className={
              errors.email != null
                ? "border border-red-500 text-red"
                : "border border-input"
            }
            placeholder="Ingrese el correo del usuario"
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
          <div className="select-upload-field" id="fileUpload">
            <Label>Rol</Label>
            <Select
              id="userRole"
              value={speciesEnums.userRole.find(
                (option) => option.value === selectedRole
              )}
              onChange={(selectedOption) => {
                if (selectedOption !== null)
                  setSelectedRole(selectedOption.value);
                setValue("userRole", selectedOption?.value);
              }}
              className={
                selectedRole === ""
                  ? "border border-red-500 text-red"
                  : "border border-input"
              }
              placeholder="Seleccione el rol del usuario"
              isClearable={false}
              isSearchable={false}
              options={speciesEnums.userRole}
              required
            />
            {selectedRole === "" && (
              <p className="text-red-700 w-fit p-2">{"Campo obligatorio"}</p>
            )}
          </div>
          <Label>Contraseña</Label>
          <Input
            id="password"
            type="password"
            placeholder="Ingrese la contraseña"
            className={
              errors.password != null
                ? "border border-red-500 text-red"
                : "border border-input"
            }
            {...register("password", {
              required: "Campo obligatorio",
              minLength: {
                value: 8,
                message: "La contraseña debe tener al menos 8 caracteres",
              },
            })}
          />
          {errors.password != null && (
            <p className="text-red-700 w-fit p-2">
              {errors.password.message?.toString()}
            </p>
          )}
          <Label>Confirmar Contraseña</Label>
          <Input
            id="passwordConf"
            type="password"
            className={
              errors.passwordConf != null
                ? "border border-red-500 text-red"
                : "border border-input"
            }
            placeholder="Confirme la contraseña"
            {...register("passwordConf", {
              required: "Campo obligatorio",
              validate: {
                matchesPreviousPassword: (value) => {
                  const { password } = getValues();
                  return (
                    password === value || "Las contraseñas deben coincidir"
                  );
                },
              },
            })}
          />
          {errors.passwordConf != null && (
            <p className="text-red-700 w-fit p-2">
              {errors.passwordConf.message?.toString()}
            </p>
          )}
          <div className="flex w-full mt-7 mb-12 justify-end">
            <Button type="submit" onClick={handleSubmit(onSubmit)}>
              Agregar Usuario
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default DashboardUsuarioPage;
