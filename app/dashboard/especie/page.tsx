"use client";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs";

import { InputField, TextAreaField, FileInputField } from "../inputs";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/app/components/ui/alert-dialog";
import { Button } from "@/app/components/ui/button";
import { type ISpeciesParams } from "@/app/actions/getSpecies";
import { useState } from "react";
import Select from "react-select";
import { speciesEnums } from "@/app/types/index";
import { Label } from "@/app/components/ui/label";

const DashboardIndexPage = () => {
  const [taxonomyParams, setTaxonomyParams] = useState<ISpeciesParams>({});
  const [speciesParams, setSpeciesParams] = useState<ISpeciesParams>({});
  console.log(speciesParams);
  return (
    <div className="flex flex-col w-full ">
      <div className="w-full mt-[20px]  flex justify-end mr-[100px] p-10">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button>Agregar especie</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Deseas continuar?</AlertDialogTitle>
              <AlertDialogDescription>
                Una vez seleccionada la opción (Enviar) los datos seran
                guardados dentro del sistema
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction>Enviar</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <Tabs
        defaultValue="taxonomy"
        className=" grid gap-4 w-full mt-[40px] mb-[100px] p-0"
      >
        <TabsList className="w-full flex flex-row flex-wrap h-fit">
          <TabsTrigger value="taxonomy">Taxonomia</TabsTrigger>
          <TabsTrigger value="stalk">Tallo</TabsTrigger>
          <TabsTrigger value="root">Raíz</TabsTrigger>
          <TabsTrigger value="flower">Flor</TabsTrigger>
          <TabsTrigger value="leaf">Hoja</TabsTrigger>
          <TabsTrigger value="fruit">Fruto/Semilla</TabsTrigger>
          <TabsTrigger value="ecology">Ecologia</TabsTrigger>
          <TabsTrigger value="etnobotanic">Etnobotánica</TabsTrigger>
          <TabsTrigger value="arboliculture">Arboricultura</TabsTrigger>
          <TabsTrigger value="images">Imagenes</TabsTrigger>
        </TabsList>

        <TabsContent value="taxonomy" className="w-full mx-auto px-8">
          <div className="input-fields-container">
            <InputField
              value={speciesParams.family}
              onChange={(e: any) => {
                speciesParams.family = e.target.value;
                setSpeciesParams({ ...speciesParams });
                console.log(speciesParams);
              }}
              id="family"
              label="Familia"
              placeholder="Ingrese aqui la familia de la especie"
            />
            <InputField
              onChange={(value: any) => {
                taxonomyParams.genus = value;
                setTaxonomyParams({ ...taxonomyParams });
              }}
              id="genus"
              label="Genero"
              placeholder="Ingrese aqui  el genero de la especie"
            />
            <InputField
              onChange={(value: any) => {
                taxonomyParams.tSpecies = value;
                setTaxonomyParams({ ...taxonomyParams });
              }}
              id="tSpecies"
              label="Especie"
              placeholder="Ingrese aqui  la especie"
            />
            <InputField
              onChange={(value: any) => {
                taxonomyParams.subspecies = value;
                setTaxonomyParams({ ...taxonomyParams });
              }}
              id="subspecie"
              label="Subespecie"
              placeholder="Ingrese aqui  la subespecie"
            />
            <InputField
              onChange={(value: any) => {
                taxonomyParams.availablesStatus = value;
                setTaxonomyParams({ ...taxonomyParams });
              }}
              id="variety"
              label="Variedad"
              placeholder="Ingrese aqui la variedad de la especie"
            />
            <InputField
              onChange={(value: any) => {
                taxonomyParams.author = value;
                setTaxonomyParams({ ...taxonomyParams });
              }}
              id="author"
              label="Autor"
              placeholder="Ingrese aqui el autor de la especie"
            />
            <InputField
              onChange={(value: any) => {
                taxonomyParams.dispersalSystem = value;
                setTaxonomyParams({ ...taxonomyParams });
              }}
              id="synonyms"
              label="Sinonimo"
              placeholder="Ingrese aqui el sinonimo de la especie"
            />
            <TextAreaField
              onChange={(value: any) => {
                taxonomyParams.bibliography = value;
                setTaxonomyParams({ ...taxonomyParams });
              }}
              id="etimology"
              label="Etimologia"
              placeholder="Ingrese aqui la etimologia de la especie"
            />
            <InputField
              onChange={(value: any) => {
                taxonomyParams.commonNames = value;
                setTaxonomyParams({ ...taxonomyParams });
              }}
              id="commonName"
              label="Nombres Comunes"
              placeholder="Ingrese aqui el nombre comun de  la especie"
            />
            <Label>Tipo de crecimiento</Label>
            <Select
              id="growth_habit"
              className="text-mds"
              placeholder="No determinado"
              isClearable={false}
              isSearchable={false}
              value={speciesParams.growthHabit}
              options={speciesEnums.growth_habit}
              onChange={(value: any) => {
                speciesParams.growthHabit = value;
                setSpeciesParams({ ...speciesParams });
              }}
            />
            <TextAreaField
              onChange={(value: any) => {
                taxonomyParams.bibliography = value;
                setTaxonomyParams({ ...taxonomyParams });
              }}
              id="bibliography"
              label="Bibliogafia"
              placeholder="Ej: Autor,Año de publicación, Titulo, Nombre Editorial, DOI"
            />
          </div>
        </TabsContent>
        <TabsContent value="stalk" className="w-full mx-auto px-8">
          <div className="input-fields-container">
            <InputField
              onChange={(value: any) => {
                speciesParams.barkAttributes = value;
                setSpeciesParams({ ...speciesParams });
              }}
              id="stalkAtributes"
              label="Atributos de corteza"
              placeholder="Ingrese los Atributos de corteza de la especie"
            />
            <InputField
              onChange={(value: any) => {
                speciesParams.barkColor = value;
                setSpeciesParams({ ...speciesParams });
              }}
              id="stalkColor"
              label="Color Corteza"
              placeholder="Ingrese aqui el color de corteza de la especie"
            />
          </div>
        </TabsContent>
        <TabsContent value="root" className="w-full mx-auto px-8">
          <div className="input-fields-container">
            <Label>Forma de reproduccion</Label>
            <Select
              id="reproduction_form"
              className="text-mds"
              placeholder="No determinado"
              isClearable={false}
              isSearchable={false}
              value={speciesParams.reproductionForm}
              options={speciesEnums.reproductionForm}
              onChange={(value: any) => {
                speciesParams.reproductionForm = value;
                setSpeciesParams({ ...speciesParams });
              }}
            />
            <TextAreaField
              onChange={(value: any) => {
                speciesParams.rootAttributes = value;
                setSpeciesParams({ ...speciesParams });
              }}
              id="root_attributes"
              label="Atributos radiculares"
              placeholder="Ingrese aqui los atributos radiculares de la especie"
            />
            <Label>Tipos de enraizamiento</Label>
            <Select
              id="rooting_type"
              className="text-mds"
              placeholder="No determinado"
              isClearable={false}
              isSearchable={false}
              value={speciesParams.rootingType}
              options={speciesEnums.rootingTypes}
              onChange={(value: any) => {
                speciesParams.rootingType = value;
                setSpeciesParams({ ...speciesParams });
              }}
            />
          </div>
        </TabsContent>
        <TabsContent value="flower" className="w-full mx-auto px-8">
          <div className="input-fields-container">
            <TextAreaField
              onChange={(value: any) => {
                speciesParams.floralAttributes = value;
                setSpeciesParams({ ...speciesParams });
              }}
              id="floral_attributes"
              label="Atributos Florales"
              placeholder="Ingrese aqui los atributos florales de la especie"
            />
            <InputField
              onChange={(value: any) => {
                speciesParams.flowerColor = value;
                setSpeciesParams({ ...speciesParams });
              }}
              id="flower_color"
              label="Color Flor"
              placeholder="Ingrese aqui el color de flor de la especie"
            />
            <Label>Disposicion de las flores</Label>
            <Select
              id="flower_arrangement"
              className="text-mds"
              placeholder="No determinado"
              isClearable={false}
              isSearchable={false}
              value={speciesParams.flowerArrangement}
              options={speciesEnums.flowerArrangement}
              onChange={(value: any) => {
                speciesParams.flowerArrangement = value;
                setSpeciesParams({ ...speciesParams });
              }}
            />
            <Label>Sistema de polinizacion</Label>
            <Select
              id="pollination_system"
              className="text-mds"
              placeholder="No determinado"
              isClearable={false}
              isSearchable={false}
              value={speciesParams.pollinationSystem}
              options={speciesEnums.polinizationValues}
              onChange={(value: any) => {
                speciesParams.pollinationSystem = value;
                setSpeciesParams({ ...speciesParams });
              }}
            />
            <Label>Estacion de floración</Label>
            <Select
              id="flowering_season"
              className="text-mds"
              placeholder="No determinado"
              isClearable={false}
              isSearchable={false}
              value={speciesParams.floweringSeason}
              options={speciesEnums.floweringSeason}
              onChange={(value: any) => {
                speciesParams.floweringSeason = value;
                setSpeciesParams({ ...speciesParams });
              }}
            />
            <InputField
              onChange={(value: any) => {
                speciesParams.floweringMonths = value;
                setSpeciesParams({ ...speciesParams });
              }}
              id="flowering_months"
              label="Meses de floración"
              placeholder="Ingrese aqui los meses de floració de la especie"
            />
          </div>
        </TabsContent>
        <TabsContent value="leaf" className="w-full mx-auto px-8">
          <div className="input-fields-container">
            <TextAreaField
              onChange={(value: any) => {
                speciesParams.leafAttributes = value;
                setSpeciesParams({ ...speciesParams });
              }}
              id="leaf_attributes"
              label="Atributos Foliares"
              placeholder="Ingrese aqui los atributos foliares de la especie"
            />
            <Label>Persistencia de la hoja</Label>
            <Select
              id="leaf_persistence"
              className="text-mds"
              placeholder="No determinado"
              isClearable={false}
              isSearchable={false}
              value={speciesParams.leafPersistence}
              options={speciesEnums.leafPersistence}
              onChange={(value: any) => {
                speciesParams.leafPersistence = value;
                setSpeciesParams({ ...speciesParams });
              }}
            />
            <Label>Posicion de la hoja en el tallo</Label>
            <Select
              id="stemLeaf_position"
              className="text-mds"
              placeholder="No determinado"
              isClearable={false}
              isSearchable={false}
              value={speciesParams.stemLeafPosition}
              options={speciesEnums.stemLeafPosition}
              onChange={(value: any) => {
                speciesParams.stemLeafPosition = value;
                setSpeciesParams({ ...speciesParams });
              }}
            />
            <Label>Composicion de la hoja</Label>
            <Select
              id="leaf_composition"
              className="text-mds"
              placeholder="No determinado"
              isClearable={false}
              isSearchable={false}
              value={speciesParams.leafComposition}
              options={speciesEnums.leafComposition}
              onChange={(value: any) => {
                speciesParams.leafComposition = value;
                setSpeciesParams({ ...speciesParams });
              }}
            />
          </div>
        </TabsContent>
        <TabsContent value="fruit" className="w-full mx-auto px-8">
          <div className="input-fields-container">
            <Label>Tipo de fruto</Label>
            <Select
              id="fruitType"
              className="text-mds"
              placeholder="No determinado"
              isClearable={false}
              isSearchable={false}
              value={speciesParams.fruitType}
              options={speciesEnums.fruitType}
              onChange={(value: any) => {
                speciesParams.fruitType = value;
                setSpeciesParams({ ...speciesParams });
              }}
            />
            <Label>Sistema de dispercion de frutos</Label>
            <Select
              id="dispersal_system"
              className="text-mds"
              placeholder="No determinado"
              isClearable={false}
              isSearchable={false}
              value={speciesParams.dispersalSystem}
              options={speciesEnums.dispersalValues}
              onChange={(value: any) => {
                speciesParams.dispersalSystem = value;
                setSpeciesParams({ ...speciesParams });
              }}
            />
            <InputField
              onChange={(value: any) => {
                speciesParams.fruitAttributes = value;
                setSpeciesParams({ ...speciesParams });
              }}
              id="fruit_attributes"
              label="Atributos de fruto"
              placeholder="Ingrese los atributos de fruto de la especie"
            />
            <InputField
              onChange={(value: any) => {
                speciesParams.seedAttributes = value;
                setSpeciesParams({ ...speciesParams });
              }}
              id="seed_attributes"
              label="Atributos de la semilla"
              placeholder="Ingrese los atributos de la semilla de la especie"
            />
            <InputField
              onChange={(value: any) => {
                speciesParams.fruitingMonths = value;
                setSpeciesParams({ ...speciesParams });
              }}
              id="fruiting_months"
              label="Meses de fructificación"
              placeholder="Ingrese los meses de fructificación de la especie"
            />
          </div>
        </TabsContent>
        <TabsContent value="ecology" className="w-full mx-auto px-8">
          <div className="input-fields-container">
            <Label>Rango altitudinal</Label>
            <Select
              id="altitudinal_range"
              className="text-mds"
              placeholder="No determinado"
              isClearable={false}
              isSearchable={false}
              value={speciesParams.altitudinalRange}
              options={speciesEnums.altitudeRange}
              onChange={(value: any) => {
                speciesParams.altitudinalRange = value;
                setSpeciesParams({ ...speciesParams });
              }}
            />
            <InputField
              onChange={(value: any) => {
                speciesParams.geoDistribution = value;
                setSpeciesParams({ ...speciesParams });
              }}
              id="geo_distribution"
              label="Distribución geografica"
              placeholder="Ingrese la distribución geografica de la especie"
            />
            <Label>Origen</Label>
            <Select
              id="origin"
              className="text-mds"
              placeholder="No determinado"
              isClearable={false}
              isSearchable={false}
              value={speciesParams.origin}
              options={speciesEnums.origin}
              onChange={(value: any) => {
                speciesParams.origin = value;
                setSpeciesParams({ ...speciesParams });
              }}
            />
            <Label>Estado de conservación</Label>
            <Select
              id="conservation_status"
              className="text-mds"
              placeholder="No determinado"
              isClearable={false}
              isSearchable={false}
              value={speciesParams.conservationStatus}
              options={speciesEnums.conservationStatus}
              onChange={(value: any) => {
                speciesParams.conservationStatus = value;
                setSpeciesParams({ ...speciesParams });
              }}
            />
            <Label>Atraccion de fauna</Label>
            <Select
              id="fauna_attraction"
              className="text-mds"
              placeholder="No determinado"
              isClearable={false}
              isSearchable={false}
              value={speciesParams.faunaAttraction}
              options={speciesEnums.faunaAtraction}
              onChange={(value: any) => {
                speciesParams.faunaAttraction = value;
                setSpeciesParams({ ...speciesParams });
              }}
            />
            <InputField
              onChange={(value: any) => {
                speciesParams.associatedFauna = value;
                setSpeciesParams({ ...speciesParams });
              }}
              id="associated_fauna"
              label="Fauna Asociada"
              placeholder="Ingrese la fauna asociada de la especie"
            />
          </div>
        </TabsContent>
        <TabsContent value="etnobotanic" className="w-full mx-auto px-8">
          <div className="input-fields-container">
            <InputField
              onChange={(value: any) => {
                speciesParams.useDetail = value;
                setSpeciesParams({ ...speciesParams });
              }}
              id="category"
              label="Categoria"
              placeholder="Ingrese aqui la categoria de la especie"
            />
            <InputField
              onChange={(value: any) => {
                speciesParams.useDetail = value;
                setSpeciesParams({ ...speciesParams });
              }}
              id="use_detail"
              label="detalle de uso"
              placeholder="Ingrese aqui el detalle de uso de la especie"
            />
          </div>
        </TabsContent>
        <TabsContent value="arboliculture" className="w-full mx-auto px-8">
          <div className="input-fields-container">
            <Label>Uso en espacio publico</Label>
            <Select
              isMulti
              id="publicUse"
              classNamePrefix="select"
              className="basic-multi-select text-mds"
              options={speciesEnums.publicUseValues}
              onChange={(value) => {
                speciesParams.publicSpaceUse = "";
                value.forEach((value) => {
                  if (value.value !== undefined) {
                    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
                    speciesParams.publicSpaceUse += value.value + ",";
                  }
                });
                setSpeciesParams({ ...speciesParams });
              }}
              isClearable={false}
              isSearchable={false}
              placeholder="Escoga una opcion"
            />
            <Label>Limitaciones florales</Label>
            <Select
              id="flower_limitations"
              className="text-mds"
              options={speciesEnums.limitFloralValues}
              placeholder="No determinado"
              value={speciesParams.flowerLimitations}
              isClearable={false}
              isSearchable={false}
              onChange={(value: any) => {
                speciesParams.flowerLimitations = value;
                setSpeciesParams({ ...speciesParams });
              }}
            />
            <Label>Limitaciones frutales</Label>
            <Select
              id="frutal_limitations"
              className="text-mds"
              options={speciesEnums.limitFrutoValues}
              value={speciesParams.fruitLimitations}
              placeholder="No determinado"
              isClearable={false}
              isSearchable={false}
              onChange={(value: any) => {
                speciesParams.fruitLimitations = value;
                setSpeciesParams({ ...speciesParams });
              }}
            />
            <Label>Longevidad</Label>
            <Select
              id="longevity"
              options={speciesEnums.longevity}
              className="text-mds"
              value={speciesParams.longevity}
              placeholder="No determinado"
              isClearable={false}
              isSearchable={false}
              onChange={(value: any) => {
                speciesParams.longevity = value;
                setSpeciesParams({ ...speciesParams });
              }}
            />
            <InputField
              onChange={(value: any) => {
                speciesParams.pestsDiseases = value;
                setSpeciesParams({ ...speciesParams });
              }}
              id="name"
              label="Plagas y enfermedades"
              placeholder="Ingrese las plagas y enfermedades de la especie"
            />

            <Label>Tasa Crecimiento</Label>
            <Select
              id="growth_rate"
              options={speciesEnums.growthRate}
              className="text-mds"
              value={speciesParams.growthRate}
              placeholder="No determinado"
              isClearable={false}
              isSearchable={false}
              onChange={(value: any) => {
                speciesParams.growthRate = value;
                setSpeciesParams({ ...speciesParams });
              }}
            />
            <Label>Requerimientos de luz</Label>
            <Select
              id="light_requirement"
              options={speciesEnums.lightRequirement}
              className="text-mds"
              value={speciesParams.lightRequirements}
              placeholder="No determinado"
              isClearable={false}
              isSearchable={false}
              onChange={(value: any) => {
                speciesParams.lightRequirements = value;
                setSpeciesParams({ ...speciesParams });
              }}
            />
            <Label>Rango de altura</Label>
            <Select
              id="crown_width"
              options={speciesEnums.heightValues}
              className="text-mds"
              value={speciesParams.maximumHeight}
              placeholder="No determinado"
              isClearable={false}
              isSearchable={false}
              onChange={(value: any) => {
                speciesParams.maximumHeight = value;
                setSpeciesParams({ ...speciesParams });
              }}
            />

            <Label>Rango de amplitud de la copa</Label>
            <Select
              id="crown_width"
              options={speciesEnums.crownWidthValues}
              className="text-mds"
              value={speciesParams.crownWidth}
              placeholder="No determinado"
              isClearable={false}
              isSearchable={false}
              onChange={(value: any) => {
                speciesParams.crownWidth = value;
                setSpeciesParams({ ...speciesParams });
              }}
            />
            <Label>Forma de copa</Label>
            <Select
              id="crown_shape"
              options={speciesEnums.crownShapeValues}
              className="text-mds"
              value={speciesParams.crownShape}
              placeholder="No determinado"
              isClearable={false}
              isSearchable={false}
              onChange={(value: any) => {
                speciesParams.crownShape = value;
                setSpeciesParams({ ...speciesParams });
              }}
            />

            <Label>Densidad de follaje</Label>
            <Select
              id="foliage_density"
              options={speciesEnums.priorityLevel}
              className="text-mds"
              value={speciesParams.foliageDensity}
              placeholder="No determinado"
              isClearable={false}
              isSearchable={false}
              onChange={(value: any) => {
                speciesParams.foliageDensity = value;
                setSpeciesParams({ ...speciesParams });
              }}
            />

            <InputField
              onChange={(value: any) => {
                speciesParams.soilType = value;
                setSpeciesParams({ ...speciesParams });
              }}
              id="name"
              label="Tipo de suelo"
              placeholder="Ingrese el tipo del suelo de la especie"
            />

            <Label>Humedad de la zona</Label>
            <Select
              id="humidity_zone"
              options={speciesEnums.humidityValues}
              className="text-mds"
              value={speciesParams.humidityZone}
              placeholder="No determinado"
              isClearable={false}
              isSearchable={false}
              onChange={(value: any) => {
                speciesParams.humidityZone = value;
                setSpeciesParams({ ...speciesParams });
              }}
            />
          </div>
        </TabsContent>
        <TabsContent value="images" className="w-full mx-auto px-8">
          <div className="input-fields-container">
            <FileInputField
              id="presentation_url"
              label="foto presentación"
              placeholder="Ingrese aqui la foto de la presentación de la especie"
            />
            <FileInputField
              id="fruit_url"
              label="Foto de fruto"
              placeholder="Ingrese aqui la foto de la presentación de la especie"
            />
            <FileInputField
              id="flower_url"
              label="Foto de la flor"
              placeholder="Ingrese foto de la flor de la especie"
            />

            <FileInputField
              id="detailFlower_url"
              label="Foto de detalle de la flor"
              placeholder="Ingrese foto del detalle de la flor de la especie"
            />
            <FileInputField
              id="leaf_url"
              label="Foto de la hoja"
              placeholder="Ingrese foto de la hoja de la especie"
            />
            <FileInputField
              id="bark_url"
              label="Foto Corteza"
              placeholder="Ingrese aqui la foto de corteza de la especie"
            />
            <FileInputField
              id="seed_url"
              label="Foto de semilla"
              placeholder="Ingrese aqui la foto de la semilla de la especie"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
export default DashboardIndexPage;
