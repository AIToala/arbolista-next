"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs";
import {
  InputField,
  TextAreaField,
  FileInputField,
  SelectField,
} from "../inputs";

const DashboardIndexPage = () => {
  return (
    <Tabs
      defaultValue="taxonomy"
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
        <TabsList className="grid w-full grid-cols-9">
          <TabsTrigger value="taxonomy">Taxonomia</TabsTrigger>
          <TabsTrigger value="stalk">Tallo</TabsTrigger>
          <TabsTrigger value="root">Raíz</TabsTrigger>
          <TabsTrigger value="flower">Flor</TabsTrigger>
          <TabsTrigger value="leaf">Hoja</TabsTrigger>
          <TabsTrigger value="fruit">Fruto/Semilla</TabsTrigger>
          <TabsTrigger value="ecology">Ecologia</TabsTrigger>
          <TabsTrigger value="etnobotanic">Etnobotánica</TabsTrigger>
          <TabsTrigger value="arboliculture">Arboricultura</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="taxonomy">
        <div className="input-fields-container">
          <InputField
            id="family"
            label="Familia"
            placeholder="Ingrese aqui la familia de la especie"
          />
          <InputField
            id="genus"
            label="Genero"
            placeholder="Ingrese aqui  el genero de la especie"
          />
          <InputField
            id="specie"
            label="Especie"
            placeholder="Ingrese aqui  la especie"
          />
          <InputField
            id="subspecie"
            label="Subespecie"
            placeholder="Ingrese aqui  la subespecie"
          />
          <InputField
            id="variety"
            label="Variedad"
            placeholder="Ingrese aqui la variedad de la especie"
          />
          <InputField
            id="author"
            label="Autor"
            placeholder="Ingrese aqui el autor de la especie"
          />
          <InputField
            id="sinomin"
            label="Sinonimo"
            placeholder="Ingrese aqui el sinonimo de la especie"
          />
          <TextAreaField
            id="etimology"
            label="Etimologia"
            placeholder="Ingrese aqui la etimologia de la especie"
          />
          <InputField
            id="commonName"
            label="Nombres Comunes"
            placeholder="Ingrese aqui el nombre comun de  la especie"
          />
          <SelectField
            label="Habito de crecimiento"
            placeholder="Selecciona el habito de crecimiento de la especie"
            optionsList={[
              { value: "NO_DETERMINADO", displayText: "No determinado" },
              { value: "ARBOREA", displayText: "Arborea" },
              { value: "ARBUSTIVA", displayText: "Arbustiva" },
              { value: "PALMERA", displayText: "Palmera" },
              { value: "CACTACEA", displayText: "Cactecea" },
            ]}
          />
          <TextAreaField
            id="bibliography"
            label="Bibliogafia"
            placeholder="Ingrese aqui la bibliografia de la especie"
          />
        </div>
      </TabsContent>
      <TabsContent value="stalk">
        <div className="input-fields-container">
          <InputField
            id="stalkAtributes"
            label="Atributos de corteza"
            placeholder="Ingrese los Atributos de corteza de la especie"
          />
          <InputField
            id="stalkAolor"
            label="Color Corteza"
            placeholder="Ingrese aqui el color de corteza de la especie"
          />
          <FileInputField
            id="stalkPhoto"
            label="Color Corteza"
            placeholder="Ingrese aqui el color de corteza de la especie"
          />
        </div>
      </TabsContent>
      <TabsContent value="root">
        <div className="input-fields-container">
          <SelectField
            label="Forma de reproducción"
            placeholder="Selecciona el habito de crecimiento de la especie"
            optionsList={[
              { value: "NO_DETERMINADO", displayText: "no determinado" },
              { value: "POR_SEMILLA", displayText: "por semilla" },
              { value: "POR_ESTACA", displayText: "por estaca" },
              { value: "POR_BULBO", displayText: "por bulbo" },
              { value: "POR_TUBÉRCULO", displayText: "por tubérculo" },
              { value: "POR_ESTOLÓN", displayText: "por estolón" },
              { value: "POR_ACODO", displayText: "por acodo" },
              { value: "DIVISION_DE_PIE", displayText: "division de pie" },
            ]}
          />
          <TextAreaField
            id="etimology"
            label="Atributos Radiculares"
            placeholder="Ingrese aqui la etimologia de la especie"
          />
          <SelectField
            label="Tipo de enraizamiento"
            placeholder="Selecciona el habito de crecimiento de la especie"
            optionsList={[
              { value: "NO_DETERMINADO", displayText: "No determinado" },
              { value: "SUPERFICIAL", displayText: "Superficial" },
              { value: "MEDIO", displayText: "Medio" },
              { value: "PROFUNDO", displayText: "Profundo" },
            ]}
          />
        </div>
      </TabsContent>
      <TabsContent value="flower">
        <div className="input-fields-container">
          <TextAreaField
            id="etimology"
            label="Atributos Radiculares"
            placeholder="Ingrese aqui la etimologia de la especie"
          />
          <InputField
            id="stalkAolor"
            label="Color Corteza"
            placeholder="Ingrese aqui el color de corteza de la especie"
          />
          <SelectField
            label="Disposición de las flores"
            placeholder="Selecciona el habito de crecimiento de la especie"
            optionsList={[
              { value: "NO_DETERMINADO", displayText: "No determinado" },
              { value: "SOLITARIA", displayText: "Solitaria" },
              { value: "RACIMO", displayText: "Racimo" },
              { value: "PANICULA", displayText: "Panicula" },
              { value: "CORIMBO", displayText: "Corimbo" },
              { value: "ESPIGA", displayText: "Espiga" },
              { value: "AMENTO", displayText: "Amento" },
              { value: "CIMA", displayText: "Cima" },
              { value: "CABEZUELA", displayText: "Cabezuela" },
              { value: "UMBELA", displayText: "Umbela" },
              { value: "NO_APLICA", displayText: "No Aplica" },
            ]}
          />
          <SelectField
            label="Sistema de polinización"
            placeholder="Selecciona el habito de crecimiento de la especie"
            optionsList={[
              { value: "NO_DETERMINADO", displayText: "No determinado" },
              { value: "ANEMOFILA", displayText: "Anemofila (Viento)" },
              { value: "HIDROFILA", displayText: "Hidrofila (Agua)" },
              { value: "ZOOFILA", displayText: "Zoofila (Animales)" },
              { value: "AVES", displayText: "Aves" },
              { value: "MAMIFEROS", displayText: "Mamiferos" },
              { value: "INSECTOS", displayText: "Insectos" },
              { value: "AVES_NECTARÍVORAS", displayText: "Aves nectarívoras" },
            ]}
          />
          <SelectField
            label="Estacion de floración"
            placeholder="Selecciona el habito de crecimiento de la especie"
            optionsList={[
              { value: "NO_DETERMINADO", displayText: "No determinado" },
              { value: "PERMANENTE", displayText: "Permanente" },
              { value: "ESTACIONAL", displayText: "Estacional" },
              { value: "ESTACION_SECA", displayText: "Estacion Seca" },
              { value: "ESTACION_LLUVIOSA", displayText: "Estacion Lluviosa" },
              { value: "NO_APLICA", displayText: "No Aplica" },
            ]}
          />
          <FileInputField
            id="stalkPhoto"
            label="Foto de la flor"
            placeholder="Ingrese aqui el color de corteza de la especie"
          />
          <FileInputField
            id="stalkPhoto"
            label="Foto de detalle de la flor"
            placeholder="Ingrese aqui el color de corteza de la especie"
          />
          <InputField
            id="stalkAolor"
            label="Meses de floración"
            placeholder="Ingrese aqui el color de corteza de la especie"
          />
        </div>
      </TabsContent>
      <TabsContent value="leaf">
        <div className="input-fields-container">
          <TextAreaField
            id="etimology"
            label="Atributos Foliares"
            placeholder="Ingrese aqui la etimologia de la especie"
          />
          <SelectField
            label="Persistencia de la hoja"
            placeholder="Selecciona el habito de crecimiento de la especie"
            optionsList={[
              { value: "NO_DETERMINADO", displayText: "No determinado" },
              { value: "CADUCIFOLIA", displayText: "Caducifolia" },
              { value: "SEMICADUCIFOLIA", displayText: "Semicaducifolia" },
              { value: "PERENNE", displayText: "Perenne" },
              { value: "NO_APLICA", displayText: "No Aplica" },
            ]}
          />
          <SelectField
            label="Posicion de la hoja en el tallo"
            placeholder="Selecciona el habito de crecimiento de la especie"
            optionsList={[
              { value: "NO_DETERMINADO", displayText: "No determinado" },
              { value: "ALTERNA", displayText: "Alterna" },
              { value: "OPUESTA", displayText: "Opuesta" },
              { value: "FASCICULADA", displayText: "Fasciculada" },
              { value: "ROSETA", displayText: "Roseta" },
              { value: "VERTICILADA", displayText: "Verticilada" },
            ]}
          />
          <SelectField
            label="Posicion de la hoja"
            placeholder="Selecciona el habito de crecimiento de la especie"
            optionsList={[
              { value: "NO_DETERMINADO", displayText: "No determinado" },
              { value: "SIMPLE", displayText: "Simple" },
              {
                value: "DIGITADO_COMPUESTA",
                displayText: "Digitado compuesta",
              },
              {
                value: "COMPUESTA_PARIPINNADA",
                displayText: "Compuesta paripinnada",
              },
              {
                value: "COMPUESTA_IMPARIPINNADA",
                displayText: "Compuesta imparipinnada",
              },
              {
                value: "COMPUESTA_UNIFOLIADA",
                displayText: "Compuesta unifoliada",
              },
              {
                value: "COMPUESTA_BIFOLIADA",
                displayText: "Compuesta bifoliada",
              },
              {
                value: "COMPUESTA_TRIFOLIADA",
                displayText: "Compuesta trifoliada",
              },
              {
                value: "COMPUESTA_BIPINNADA",
                displayText: "Compuesta bipinnada",
              },
              { value: "COMPUESTA", displayText: "Compuesta" },
            ]}
          />
          <FileInputField
            id="stalkPhoto"
            label="Foto de la hoja"
            placeholder="Ingrese aqui el color de corteza de la especie"
          />
        </div>
      </TabsContent>
      <TabsContent value="fruit">
        <div className="input-fields-container">
          <SelectField
            label="Tipo de frut"
            placeholder="Selecciona el habito de crecimiento de la especie"
            optionsList={[
              { value: "NO_DETERMINADO", displayText: "No determinado" },
              { value: "LEGUMBRE", displayText: "Legumbre" },
              { value: "LEGUMBRE_PLANA", displayText: "Legumbre plana" },
              {
                value: "LEGUMBRE_CILÍNDRICA",
                displayText: "Legumbre cilíndrica",
              },
              { value: "FOLÍCULO", displayText: "Folículo" },
              { value: "SILICUA", displayText: "Silicua" },
              { value: "CÁPSULA", displayText: "Cápsula" },
              { value: "PIXIDIO", displayText: "Pixidio" },
              { value: "AQUENIO", displayText: "Aquenio" },
              { value: "CARIOPSE", displayText: "Cariopse" },
              { value: "SÁMARA", displayText: "Sámara" },
              { value: "BAYA", displayText: "Baya" },
              { value: "DRUPA", displayText: "Drupa" },
              { value: "NUEZ", displayText: "Nuez" },
              { value: "POMA", displayText: "Poma" },
              { value: "SÍCONO", displayText: "Sícono" },
              { value: "NO_APLICA", displayText: "No aplica" },
            ]}
          />
          <SelectField
            label="Sistema de dispersión de frutos"
            placeholder="Selecciona el habito de crecimiento de la especie"
            optionsList={[
              { value: "NO_DETERMINADO", displayText: "No determinado" },
              { value: "ANEMOCORIA", displayText: "Anemocoria (viento)" },
              { value: "HIDROCORIA", displayText: "Hidrocoria (agua)" },
              { value: "BARICORIA", displayText: "Baricoria (gravedad)" },
              { value: "ZOOCORIA", displayText: "Zoocoria (animales)" },
              { value: "AVES", displayText: "Aves" },
              { value: "MAMÍFEROS", displayText: "Mamíferos" },
              { value: "INSECTOS", displayText: "Insectos" },
              { value: "AVES_SEMILLERAS", displayText: "Aves semilleras" },
              { value: "AVES_FRUGÍVORAS", displayText: "Aves frugívoras" },
            ]}
          />
          <InputField
            id="stalkAolor"
            label="Atributos de fruto"
            placeholder="Ingrese aqui el color de corteza de la especie"
          />
          <InputField
            id="stalkAolor"
            label="Atributos de la semilla"
            placeholder="Ingrese aqui el color de corteza de la especie"
          />
          <InputField
            id="stalkAolor"
            label="Meses de fructificación"
            placeholder="Ingrese aqui el color de corteza de la especie"
          />
        </div>
      </TabsContent>
      <TabsContent value="ecology">
        <div className="input-fields-container">
          <SelectField
            label="Rango Altitudinal"
            placeholder="Selecciona el habito de crecimiento de la especie"
            optionsList={[
              { value: "NO_DETERMINADO", displayText: "No determinado" },
              { value: "0-500", displayText: "0-500" },
              { value: "500-1000", displayText: "500-1000" },
              { value: "1000-1500", displayText: "1000-1500" },
              { value: "1500-2000", displayText: "1500-2000" },
              { value: "2000-2500", displayText: "2000-2500" },
              { value: "2500-3000", displayText: "2500-3000" },
              { value: "MAYOR_A_3000", displayText: "mayor a 3000" },
            ]}
          />
          <InputField
            id="stalkAolor"
            label="Distribución geografica"
            placeholder="Ingrese aqui el color de corteza de la especie"
          />
          <SelectField
            label="Origen de la especie"
            placeholder="Selecciona el habito de crecimiento de la especie"
            optionsList={[
              { value: "NO_DETERMINADO", displayText: "Nativa" },
              { value: "ARBOREA", displayText: "Endemica" },
            ]}
          />
          <SelectField
            label="Estado de conservacion"
            placeholder="Selecciona el habito de crecimiento de la especie"
            optionsList={[
              { value: "NE", displayText: "No evaluada (NE)" },
              { value: "DD", displayText: "Datos Insuficientes (DD)" },
              { value: "LC", displayText: "Preocupación menor (LC)" },
              { value: "NT", displayText: "Casi Amenazada (NT)" },
              { value: "VU", displayText: "Vulnerable (VU)" },
              { value: "EN", displayText: "En peligro (EN)" },
              { value: "CR", displayText: "En peligro crítico (CR)" },
              { value: "EW", displayText: "Extinta en estado salvaje (EW)" },
              { value: "EX", displayText: "Extinta (EX)" },
            ]}
          />
          <SelectField
            label="Atraccion de la fauna"
            placeholder="Selecciona el habito de crecimiento de la especie"
            optionsList={[
              { value: "NO_DETERMINADO", displayText: "No determinado" },
              { value: "BAJA", displayText: "Baja" },
              { value: "MEDIA", displayText: "Media" },
              { value: "ALTA", displayText: "Alta" },
            ]}
          />
        </div>
      </TabsContent>
      <TabsContent value="etnobotanic">
        <div className="input-fields-container">
          <SelectField
            label="Atraccion de la fauna"
            placeholder="Selecciona el habito de crecimiento de la especie"
            optionsList={[
              { value: "NO_DETERMINADO", displayText: "No determinado" },
              { value: "ALIMENTÍCIO", displayText: "Alimentício" },
              {
                value: "ADITIVO_DE_LOS_ALIMENTOS",
                displayText: "Aditivo de los alimentos",
              },
              {
                value: "ALIMENTO_DE_ANIMALES_VERTEBRADOS",
                displayText: "Alimento de animales vertebrados",
              },
              {
                value: "ALIMENTO_DE_ANIMALES_INVERTEBRADOS",
                displayText: "Alimento de animales invertebrados",
              },
              { value: "APÍCOLA", displayText: "Apícola" },
              { value: "COMBUSTIBLES", displayText: "Combustibles" },
              { value: "MATERIALES", displayText: "Materiales" },
              { value: "SOCIAL", displayText: "Social" },
              { value: "TÓXICO", displayText: "Tóxico" },
              { value: "MEDICINAL", displayText: "Medicinal" },
              { value: "MEDIOAMBIENTAL", displayText: "Medioambiental" },
            ]}
          />
          <InputField
            id="etimology"
            label="detalle de uso"
            placeholder="Ingrese aqui la etimologia de la especie"
          />
        </div>
      </TabsContent>
      <TabsContent value="arboliculture">
        <div className="input-fields-container">
          <SelectField
            label="Uso en espacio publico"
            placeholder="Selecciona el habito de crecimiento de la especie"
            optionsList={[
              { value: "NO_DETERMINADO", displayText: "No determinado" },
              {
                value: "ANDENES_VÍA_DE_SERVICIO",
                displayText: "Andenes vía de servicio",
              },
              { value: "CERROS", displayText: "Cerros" },
              { value: "GLORIETAS", displayText: "Glorietas" },
              { value: "OREJAS_DE_PUENTE", displayText: "Orejas de puente" },
              { value: "PARQUES", displayText: "Parques" },
              { value: "PLAZAS/PLAZOLETAS", displayText: "Plazas/Plazoletas" },
              {
                value: "RETIROS_DE_QUEBRADA",
                displayText: "Retiros de quebrada",
              },
              {
                value: "SEPARADOR_DE_AUTOPISTAS",
                displayText: "Separador de autopistas",
              },
              {
                value: "EDIFICIOS_INSTITUCIONALES",
                displayText: "Edificios institucionales",
              },
              {
                value: "SEPARADOR_DE_ARTERIAS_PRINCIPALES",
                displayText: "Separador de arterias principales",
              },
              { value: "VÍAS_PEATONALES", displayText: "Vías peatonales" },
              { value: "SEPARADORES", displayText: "Separadores" },
            ]}
          />
          <InputField
            id="name"
            label="Limitacion flores"
            placeholder="Ingrese los nombres completos del usuario"
          />
          <InputField
            id="name"
            label="Limitacion frutas"
            placeholder="Ingrese los nombres completos del usuario"
          />
          <SelectField
            label="Requerimiento de luminosidad"
            placeholder="Selecciona el habito de crecimiento de la especie"
            optionsList={[
              { value: "NO_DETERMINADO", displayText: "No determinado" },
              { value: "BAJA", displayText: "Baja" },
              { value: "MEDIA", displayText: "Media" },
              { value: "ALTA", displayText: "Alta" },
              {
                value: "SOMBRA_EN_ESTADO_JUVENIL",
                displayText: "Sombra en estado juvenil",
              },
            ]}
          />
          <InputField
            id="name"
            label="Plagas y enfermedades"
            placeholder="Ingrese los nombres completos del usuario"
          />
          <SelectField
            label="Tasa de crecimiento"
            placeholder="Selecciona el habito de crecimiento de la especie"
            optionsList={[
              { value: "NO_DETERMINADO", displayText: "No determinado" },
              { value: "LENTA", displayText: "Lenta" },
              { value: "MEDIA", displayText: "Media" },
              { value: "RÁPIDA", displayText: "Rápida" },
              { value: "LENTA_A_MEDIA", displayText: "Lenta a Media" },
              { value: "MEDIA_A_RÁPIDA", displayText: "Media a Rápida" },
            ]}
          />
          <SelectField
            label="Rango de altura maxima (m)"
            placeholder="Selecciona el habito de crecimiento de la especie"
            optionsList={[
              { value: "MENOR_QUE_7M", displayText: "menor que 7m" },
              { value: "ENTRE_7_Y_15_M", displayText: "entre 7 y 15 m" },
              { value: "MAYOR_QUE_15_M", displayText: "mayor que 15 m" },
            ]}
          />
          <SelectField
            label="longevidad"
            placeholder="Selecciona el habito de crecimiento de la especie"
            optionsList={[
              { value: "NO_DETERMINADO", displayText: "No determinado" },
              {
                value: "BAJA_(0_-_35_AÑOS)",
                displayText: "Baja (0 - 35 años)",
              },
              {
                value: "MEDIA_(36-60_AÑOS)",
                displayText: "Media (36-60 años)",
              },
              {
                value: "ALTA_(MAYOR_A_60_AÑOS)",
                displayText: "Alta (mayor a 60 años)",
              },
              { value: "ANUAL", displayText: "Anual" },
              { value: "PERENNE", displayText: "Perenne" },
            ]}
          />
          <SelectField
            label="Rango de amplitud (m)"
            placeholder="Selecciona el habito de crecimiento de la especie"
            optionsList={[
              { value: "NO_DETERMINADO", displayText: "No determinado" },
              { value: "ALIMENTÍCIO", displayText: "Alimentício" },
              {
                value: "ADITIVO_DE_LOS_ALIMENTOS",
                displayText: "Aditivo de los alimentos",
              },
              {
                value: "ALIMENTO_DE_ANIMALES_VERTEBRADOS",
                displayText: "Alimento de animales vertebrados",
              },
              {
                value: "ALIMENTO_DE_ANIMALES_INVERTEBRADOS",
                displayText: "Alimento de animales invertebrados",
              },
              { value: "APÍCOLA", displayText: "Apícola" },
              { value: "COMBUSTIBLES", displayText: "Combustibles" },
              { value: "MATERIALES", displayText: "Materiales" },
              { value: "SOCIAL", displayText: "Social" },
              { value: "TÓXICO", displayText: "Tóxico" },
              { value: "MEDICINAL", displayText: "Medicinal" },
              { value: "MEDIOAMBIENTAL", displayText: "Medioambiental" },
            ]}
          />
          <SelectField
            label="Forma de copa (m)"
            placeholder="Selecciona el habito de crecimiento de la especie"
            optionsList={[
              { value: "NO_DETERMINADO", displayText: "No determinado" },
              { value: "APARASOLADA", displayText: "Aparasolada" },
              { value: "COLUMNAR", displayText: "Columnar" },
              { value: "ESTRATIFICADA", displayText: "Estratificada" },
              { value: "GLOBOSA", displayText: "Globosa" },
              { value: "IRREGULAR", displayText: "Irregular" },
              { value: "OVAL", displayText: "Oval" },
              { value: "PÉNDULA", displayText: "Péndula" },
              { value: "PIRAMIDAL", displayText: "Piramidal" },
              { value: "SEMIGLOBOSA", displayText: "Semiglobosa" },
            ]}
          />
          <SelectField
            label="Densidad de follaje"
            placeholder="Selecciona el habito de crecimiento de la especie"
            optionsList={[
              { value: "NO_DETERMINADO", displayText: "No determinado" },
              { value: "ALTA", displayText: "Alta" },
              { value: "MEDIA", displayText: "Media" },
              { value: "BAJA", displayText: "Baja" },
            ]}
          />

          <InputField
            id="name"
            label="Plagas y enfermedades"
            placeholder="Ingrese los nombres completos del usuario"
          />
          <InputField
            id="name"
            label="Tipo de suelo"
            placeholder="Ingrese los nombres completos del usuario"
          />

          <SelectField
            label="Zona de humedad"
            placeholder="Selecciona el habito de crecimiento de la especie"
            optionsList={[
              { value: "NO_DETERMINADO", displayText: "No determinado" },
              { value: "SECA", displayText: "Seca" },
              { value: "HÚMEDA", displayText: "Húmeda" },
              { value: "MUY_HÚMEDA", displayText: "Muy húmeda" },
            ]}
          />
        </div>
      </TabsContent>
    </Tabs>
  );
};
export default DashboardIndexPage;
