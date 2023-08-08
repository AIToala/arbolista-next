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
import { InputsField } from "../inputs";

export function DashboardViveroPage() {
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
          <InputsField
            id="name"
            label="Nombre"
            placeholder="Ingrese el nombre del vivero"
          />
          <InputsField
            id="address"
            label="Direccion"
            placeholder="Ingrese la direccion del vivero"
          />
          <InputsField
            id="phone"
            label="Número de telefono"
            placeholder="Ingrese el numero de telefono del vivero"
          />
          <InputsField
            id="email"
            label="Correo electronico"
            placeholder="Ingrese el correo electronico del vivero"
          />
          <InputsField
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

export default DashboardViveroPage;
