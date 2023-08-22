/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-const-assign */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
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
import Select from "react-select";

import axios from "axios";
import { Router } from "lucide-react";
import { useState } from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";
interface NurserySpecieFormProps {
  nurserySpecieData: any[];
}

const DashboardNurserySpeciePage: React.FC<NurserySpecieFormProps> = ({
  nurserySpecieData,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      speciesHeight: "",
      speciesAmount: "",
      nursery: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      axios
        .post("/api/viveros", data)
        .then((response) => {
          toast.success("Vivero creado con exito");
        })
        .catch((e) => {
          toast.error("Hubo un error al momento de crear el vivero");
        });
    } catch (error) {
      console.log(error);
      toast.error("Hubo un error al momento de crear el vivero");
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

  const userArray = Object.values(nurserySpecieData).map((item) => ({
    value: item.id,
    label: item.name + " - " + item.commonNames,
  }));

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
          <Select
            id="owner"
            options={userArray}
            value={getValues("owner")}
            onChange={(selectedOption) => {
              if (selectedOption !== null) {
                setValue("owner", selectedOption.value);
              }
            }}
            placeholder="Seleccione el dueño"
            isClearable={false}
            isSearchable={false}
            required
          />
          {userArray.length === 0 ||
            (getValues("owner") === "" && (
              <p className="text-red-700 w-fit p-2">
                {errors.owner?.message?.toString()}
              </p>
            ))}
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
          <label>Altura</label>
          <Input
            id="speciesHeight"
            className={
              errors.speciesHeight != null
                ? "border border-red-500 text-red"
                : "border border-input"
            }
            placeholder="Ingrese el nombre del vivero"
            {...register("speciesHeight", { required: "Campo obligatorio" })}
          />
          {errors.speciesHeight != null && (
            <p className="text-red-700 w-fit p-2">
              {errors.speciesHeight.message?.toString()}
            </p>
          )}
          <label className="!mt-20">Dirección</label>
          <label>Cantidad</label>
          <Input
            id="speciesAmount"
            className={
              errors.speciesAmount != null
                ? "border border-red-500 text-red"
                : "border border-input"
            }
            placeholder="Ingrese el nombre del vivero"
            {...register("speciesAmount", { required: "Campo obligatorio" })}
          />
          {errors.speciesAmount != null && (
            <p className="text-red-700 w-fit p-2">
              {errors.speciesAmount.message?.toString()}
            </p>
          )}
          <label className="!mt-20">Dirección</label>
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
};

export default DashboardNurserySpeciePage;
