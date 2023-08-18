/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-const-assign */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */
"use client";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import Select from "react-select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs";

import axios from "axios";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useState } from "react";
export function DashboardNurseryPage() {
  const [users, setUsers] = useState<Array<string | null>>([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  /*  const loadUsers = async () => {
    if (!isLoaded) {
      const response = await fetch('/api/nurseries');
      const fetchedUsers = await response.json();
      setUsers(fetchedUsers);
      setIsLoaded(true);
    }
  }; */
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      address: "",
      phone: "",
      email: "",
      website: "",
      logoSrc: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const imageResult = await axios.post("/api/images", {
        imagePath: data.logoSrc,
      });
      const imageUrl = imageResult.data.url;
      const formData = { ...data, logoSrc: imageUrl };
      axios
        .post("/api/viveros", formData)
        .then((response) => {
          toast.success("Usuario creado con exito");
        })
        .catch((e) => {
          toast.error("Hubo un error al momento de crear el usuario");
        });
    } catch (error) {
      console.log(error);
    }
  };
  const checkFileSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    const size = 1000000;
    let err = "";

    if (files) {
      for (let x = 0; x < files.length; x++) {
        if (files[x].size > size) {
          err += files[x].type + " is too large, please pick a smaller file\n";
        }
      }
    }

    if (err !== "") {
      event.target.value = "";
      toast.error("Tu archivo excede el maximo de tamaño del archivo");
      return false;
    }

    return true;
  };
  return (
    <Tabs
      defaultValue="nursery"
      className="flex flex-col gap-4 w-full p-4 h-full !mx-100"
    >
      <div className="select-fields-container">
        <TabsList className="w-full flex h-full">
          <TabsTrigger value="nursery">Registrar Vivero</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="nursery" className="flex flex-col gap-2 w-full">
        <div className="input-fields-container">
          <label>Dueño</label>
          {/* <Select
            id="owner"
            value={selectedUser} // This should be the currently selected user
            onChange={(selectedOption) => {
              if (selectedOption !== null)
                setSelectedUser(selectedOption); // Update the selected user
              setValue("owner", selectedOption);
            }}
            className={
              users.length === 0
                ? "border border-red-500 text-red"
                : "border border-input"
            }
            placeholder="Seleccione el dueño"
            isClearable={false}
            isSearchable={false}
            onFocus={loadUsers}
            required
          />  */}

          <label>Nombre</label>
          <Input
            id="name"
            className={
              errors.name != null
                ? "border border-red-500 text-red"
                : "border border-input"
            }
            placeholder="Ingrese el nombre del vivero"
            {...register("name", { required: "Campo obligatorio" })}
          />
          {errors.name != null && (
            <p className="text-red-700 w-fit p-2">
              {errors.name.message?.toString()}
            </p>
          )}
          <label className="!mt-20">Dirección</label>
          <Input
            id="address"
            className={
              errors.address != null
                ? "border border-red-500 text-red"
                : "border border-input"
            }
            placeholder="Ingrese la direccion del vivero"
            {...register("address", { required: "Campo obligatorio" })}
          />
          {errors.address != null && (
            <p className="text-red-700 w-fit p-2">
              {errors.address.message?.toString()}
            </p>
          )}
          <label>Número de telefono</label>
          <Input
            id="phone"
            className={
              errors.phone != null
                ? "border border-red-500 text-red"
                : "border border-input"
            }
            placeholder="Ingrese el numero de telefono del vivero"
            {...register("phone", { required: "Campo obligatorio" })}
          />
          {errors.phone != null && (
            <p className="text-red-700 w-fit p-2">
              {errors.phone.message?.toString()}
            </p>
          )}
          <label>Correo</label>
          <Input
            id="email"
            className={
              errors.email != null
                ? "border border-red-500 text-red"
                : "border border-input"
            }
            placeholder="Ingrese el correo electronico del vivero"
            {...register("email", { required: "Campo obligatorio" })}
          />
          {errors.email != null && (
            <p className="text-red-700 w-fit p-2">
              {errors.email.message?.toString()}
            </p>
          )}
          <label>Sitio web</label>
          <Input
            id="website"
            className={
              errors.website != null
                ? "border border-red-500 text-red"
                : "border border-input"
            }
            placeholder="Ingrese el url del sitio web del vivero"
          />
          {errors.website != null && (
            <p className="text-red-700 w-fit p-2">
              {errors.website.message?.toString()}
            </p>
          )}
          <div className="file-upload-field" id="fileUpload">
            <Label htmlFor="logo-src">Foto vivero</Label>
            <Input
              id="logo-src"
              type="file"
              accept="image/jpeg"
              {...register("logoSrc", { required: "Campo obligatorio" })}
              onChange={(e) => {
                void register("logoSrc", {
                  required: "Campo obligatorio",
                }).onChange(e);
                checkFileSize(e);
              }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
            marginTop: "30px",
            marginBottom: "50px",
          }}
        >
          <Button type="submit" onClick={handleSubmit(onSubmit)}>
            Agregar Vivero
          </Button>
        </div>
      </TabsContent>
    </Tabs>
  );
}

export default DashboardNurseryPage;
