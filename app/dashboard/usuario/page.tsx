"use client";
import { Label } from "@/app/components/ui/label";
import { Button } from "@/app/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";

import { InputField, PasswordInputField } from "../inputs";

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
          <TabsTrigger value="name">Registrar usuario</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="name">
        <div className="input-fields-container">
          <InputField
            id="name"
            label="Nombres Completos"
            placeholder="Ingrese los nombres completos del usuario"
          />
          <InputField
            id="email"
            label="Correo"
            placeholder="Ingrese el correo del usuario"
          />
          <div className="select-upload-field" id="fileUpload">
            <Label>Rol</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Selecciona un rol para el usuario" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="NURSERY_ADMIN">VIVERISTA</SelectItem>
                <SelectItem value="SPECIES_ADMIN">BIOLOGO BOTANICO</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <PasswordInputField
            id="password"
            label="Contraseña"
            placeholder="Ingrese la contraseña"
          />
          <PasswordInputField
            id="passwordConf"
            label="Confirmar contraseña"
            placeholder="Confirme la contraseña"
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
          <Button>Agregar Usuario</Button>
        </div>
      </TabsContent>
    </Tabs>
  );
}

export default DashboardIndexPage;
