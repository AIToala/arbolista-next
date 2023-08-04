"use client";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Button } from "@/app/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs";
import { InputField } from "../inputs";

export function DashboardIndexPage() {
  return (
    <Tabs
      defaultValue="name"
      className="dashboard-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100% !important",
        marginTop: "50px",
        marginBottom: "100px",
        padding: "0",
      }}
    >
      <div className="select-fields-container">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="name">Registrar Vivero</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="name">
        <div className="input-fields-container">
          <InputField
            id="name"
            label="Nombre"
            placeholder="Ingrese el nombre del vivero"
          />
          <InputField
            id="address"
            label="Direccion"
            placeholder="Ingrese la direccion del vivero"
          />
          <InputField
            id="phone"
            label="Número de telefono"
            placeholder="Ingrese el numero de telefono del vivero"
          />
          <InputField
            id="email"
            label="Correo electronico"
            placeholder="Ingrese el correo electronico del vivero"
          />
          <InputField
            id="website"
            label="Sitio web"
            placeholder="Ingrese el url del sitio web del vivero"
          />
          <div className="file-upload-field" id="fileUpload">
            <Label htmlFor="logo-src">Foto vivero</Label>
            <Input id="logo-src" type="file" />
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
          <Button>Agregar Vivero</Button>
        </div>
      </TabsContent>
    </Tabs>
  );
}

export default DashboardIndexPage;
