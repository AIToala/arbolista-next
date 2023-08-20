"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useRouter } from "next/navigation";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { speciesEnums } from "@/app/types/index";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs";
import axios, { type AxiosResponse } from "axios";
import { useState } from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";
import Select from "react-select";
import { NextResponse } from "next/server";

interface UserEditFormProps {
  userData: any;
}

const NurseryEditForm: React.FC<UserEditFormProps> = ({ userData }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      id: userData.id,
      name: userData.name,
      email: userData.email,
      website: userData.website,
      address: userData.address,
      phone: userData.phone,
      owner: userData.owner,
      logoSrc: userData.logoSrc,
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
    try {
      let imageUrl = "";
      if (userData.logoSrc !== data.logoSrc) {
        try {
          const imageResult = data.logoSrc[0];
          const newformData = new FormData();
          newformData.append("file", imageResult);
          newformData.append("upload_preset", "my-uploads");
          const response = await fetch(
            "https://api.cloudinary.com/v1_1/floraguayaquil/image/upload",
            {
              method: "POST",
              body: newformData,
            }
          );
          const imgdata = await response.json();
          imageUrl = imgdata.url;
        } catch (error) {
          console.log(error);
        }
      } else {
        imageUrl = data.logoUrl;
      }

      await axios.put(
        `/api/viveros/`,
        {
          id: data.id,
          name: data.name,
          email: data.email,
          website: data.website,
          address: data.address,
          logoSrc: imageUrl,
          phone: data.phone,
          owner: data.owner,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("Vivero actualizado con éxito");
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Hubo un error al momento de actualizar el vivero");
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
    <form
      className="flex flex-col w-full mx-4 !my-2 items-start h-full mr-5"
      onSubmit={handleSubmit(onSubmit)}
    >
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
            <label className="mb-5">Dueño: {userData.owner.name}</label>
            <br />
            <label>Nombre</label>
            <Input
              id="name"
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
              {...register("website", { required: "Campo obligatorio" })}
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
            <Button type="submit">Editar Vivero</Button>
          </div>
        </TabsContent>
      </Tabs>
    </form>
  );
};
export default NurseryEditForm;
