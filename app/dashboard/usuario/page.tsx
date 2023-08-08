"use client";
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import axios from "axios";

import { type ISpeciesParams } from "@/app/actions/getSpecies";

import Select from "react-select";
import { useState } from "react";
import { speciesEnums } from "@/app/types/index";

export function DashboardIndexPage() {
  const [speciesParams] = useState<ISpeciesParams>({});

  const { register, handleSubmit, getValues } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "",
      passwordConf: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    axios
      .post("/api/register", data)
      .then((response) => {
        console.log(response);
      })
      .catch(() => {});
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    void handleSubmit(onSubmit)();
  };

  return (
    <div className="flex flex-col w-full mx-[100px]">
      <form onSubmit={handleFormSubmit}>
        <Tabs
          defaultValue="name"
          className="dashboard-container grid gap-4 w-full mt-[40px] mb-[100px] p-0"
        >
          <div className="select-fields-container">
            <TabsList className="w-full flex flex-row flex-wrap h-fit">
              <TabsTrigger value="name">Registrar usuario</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="name">
            <div className="input-fields-container">
              <Input
                id="name"
                placeholder="Ingrese los nombres completos del usuario"
                {...register("name", { required: true })}
              />
              <Input
                id="email"
                placeholder="Ingrese el correo del usuario"
                {...register("email", { required: true })}
              />
              <div className="select-upload-field" id="fileUpload">
                <Label>Rol</Label>
                <Select
                  id="role"
                  {...register("role", { required: true })}
                  className="text-mds"
                  placeholder="No determinado"
                  isClearable={false}
                  isSearchable={false}
                  value={speciesParams.rootingType}
                  options={speciesEnums.userRole}
                  onChange={(value: any) => {
                    speciesParams.rootingType = value;
                  }}
                />
              </div>
              <Input
                id="password"
                type="password"
                placeholder="Ingrese la contraseña"
                {...register("password", { required: true })}
              />
              <Input
                id="passwordConf"
                type="password"
                placeholder="Confirme la contraseña"
                {...register("passwordConf", {
                  required: true,
                  validate: {
                    matchesPreviousPassword: (value) => {
                      const { password } = getValues();
                      return (
                        password === value || "Las contraseñas deben coincidir!"
                      );
                    },
                  },
                })}
              />
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
              <Button
                onClick={() => {
                  handleSubmit(onSubmit);
                }}
              >
                Agregar Usuario
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </form>
    </div>
  );
}

export default DashboardIndexPage;
