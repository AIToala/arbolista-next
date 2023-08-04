/* eslint-disable @typescript-eslint/restrict-plus-operands */
"use client";
import { type ISpeciesParams } from "@/app/actions/getSpecies";
import { speciesEnums } from "@/app/types/index";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import Select from "react-select";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
const FilterButton = () => {
  const router = useRouter();
  const [speciesParams, setSpeciesParams] = useState<ISpeciesParams>({});
  const handleFilter = (e: any) => {
    console.log(speciesParams);
    e.preventDefault();
    const queryParams = Object.entries(speciesParams)
      .filter(([key, value]) => value !== undefined)
      .map(([key, value]) =>
        typeof value === "string"
          ? `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
          : `${encodeURIComponent(key)}=${encodeURIComponent(value.value)}`
      )
      .join("&");
    const query = "/especies?" + queryParams;
    router.push(query);
  };

  return (
    <form onSubmit={handleFilter}>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button className="bg-gray-700 hover:bg-gray-700/90 flex flex-row gap-2">
            Filtro <GiSettingsKnobs />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[70vw] h-[80vh] overflow-y-auto p-4 gap-4 grid items-start mr-5">
          <DropdownMenuLabel className="w-full px-4 flex flex-column justify-around items-center">
            <h1 className="text-2xl font-semibold w-full">Filtro avanzado</h1>
            <div className="w-full px-4 gap-3 flex flex-row items-center justify-end">
              <Button
                type="submit"
                onClick={handleFilter}
                className="bg-blue-700 hover:bg-blue-700/90"
              >
                Aplicar
              </Button>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Label className="text-xl font-semibold">
            Estado de conservación
          </Label>
          <RadioGroup className="grid md:grid-cols-9 grid-cols-5 gap-2">
            {speciesEnums.conservationStatus.map((item: any, index: any) => (
              <Label
                key={index}
                htmlFor={item.value}
                className={
                  "[&:has([data-state=checked])]:text-white " +
                  (item.value === "EX"
                    ? "ex"
                    : item.value === "EW"
                    ? "ew"
                    : item.value === "CR"
                    ? "cr"
                    : item.value === "EN"
                    ? "en"
                    : item.value === "VU"
                    ? "vu"
                    : item.value === "NT"
                    ? "nt"
                    : item.value === "LC"
                    ? "lc"
                    : item.value === "DD"
                    ? "dd"
                    : item.value === "NE"
                    ? "ne"
                    : "") +
                  " flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-8 hover:ring-4 hover:ring-offset-2 ring-green-500 [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:ring-4 [&:has([data-state=checked])]:ring-green-500 [&:has([data-state=checked])]:ring-offset-2 hover:cursor-pointer text-xl"
                }
              >
                <RadioGroupItem
                  value={item.value}
                  id={item.value}
                  className="sr-only"
                  onClick={() => {
                    speciesParams.conservationStatus = item.value.toString();
                    setSpeciesParams({ ...speciesParams });
                  }}
                />
                <div>{item.value}</div>
              </Label>
            ))}
          </RadioGroup>
          <DropdownMenuSeparator />
          <Label className="text-xl font-semibold">Caracteristicas</Label>
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 h-full">
            <div className="col-span-1">
              <Label className="text-lg">Tipo de crecimiento</Label>
              <Select
                id="growth_habit"
                className="text-md"
                placeholder="No determinado"
                isClearable={false}
                isSearchable={false}
                options={speciesEnums.growth_habit}
                onChange={(value: any) => {
                  speciesParams.growthHabit = value;
                  setSpeciesParams({ ...speciesParams });
                }}
              />
            </div>
            <div className="col-span-1">
              <Label className="text-lg">Origen</Label>
              <Select
                id="origin"
                options={speciesEnums.originValues}
                className="text-md"
                placeholder="Nativo"
                isClearable={false}
                isSearchable={false}
                onChange={(value: any) => {
                  speciesParams.origin = value;
                  setSpeciesParams({ ...speciesParams });
                }}
              />
            </div>
            <div className="col-span-1">
              <Label className="text-lg">Longevidad</Label>
              <Select
                id="longevity"
                options={speciesEnums.longevity}
                className="text-md"
                placeholder="No determinado"
                isClearable={false}
                isSearchable={false}
                onChange={(value: any) => {
                  speciesParams.longevity = value;
                  setSpeciesParams({ ...speciesParams });
                }}
              />
            </div>
            <div className="col-span-1 ">
              <Label className="text-lg">Categoria de Uso</Label>
              <Select
                isMulti
                id="useCategory"
                classNamePrefix="select"
                className="basic-multi-select text-md"
                options={speciesEnums.useCategoryValues}
                onChange={(valueArr) => {
                  speciesParams.useCategory = "";
                  valueArr.forEach((value) => {
                    if (value.value !== undefined) {
                      speciesParams.useCategory += value.value + ",";
                    }
                  });
                  speciesParams.useCategory = speciesParams.useCategory.slice(
                    0,
                    -1
                  );
                  setSpeciesParams({ ...speciesParams });
                }}
                isClearable={false}
                isSearchable={false}
                placeholder="Escoga una opcion"
              />
            </div>
            <div className="col-span-1">
              <Label className="text-lg">Tasa Crecimiento</Label>
              <Select
                id="growth_rate"
                options={speciesEnums.growthRate}
                className="text-md"
                placeholder="No determinado"
                isClearable={false}
                isSearchable={false}
                onChange={(value: any) => {
                  speciesParams.growthRate = value;
                  setSpeciesParams({ ...speciesParams });
                }}
              />
            </div>
            <div className="col-span-1 ">
              <Label className="text-lg">Uso en espacio publico</Label>
              <Select
                isMulti
                id="publicUse"
                classNamePrefix="select"
                className="basic-multi-select text-md"
                options={speciesEnums.publicUseValues}
                onChange={(value) => {
                  speciesParams.publicSpaceUse = "";
                  value.forEach((value) => {
                    if (value.value !== undefined) {
                      speciesParams.publicSpaceUse += value.value + ",";
                    }
                  });
                  speciesParams.publicSpaceUse =
                    speciesParams.publicSpaceUse.slice(0, -1);
                  setSpeciesParams({ ...speciesParams });
                }}
                isClearable={false}
                isSearchable={false}
                placeholder="Escoga una opcion"
              />
            </div>
            <div className="col-span-1">
              <Label className="text-lg">Atraccion a fauna</Label>
              <Select
                id="fauna_attraction"
                options={speciesEnums.priorityLevel}
                className="text-md"
                placeholder="No determinado"
                isClearable={false}
                isSearchable={false}
                onChange={(value: any) => {
                  speciesParams.faunaAttraction = value;
                  setSpeciesParams({ ...speciesParams });
                }}
              />
            </div>
            <div className="col-span-1">
              <Label className="text-lg">Rango altitudinal</Label>
              <Select
                id="altitudinal_range"
                options={speciesEnums.altitudeRange}
                className="text-md"
                placeholder="No determinado"
                isClearable={false}
                isSearchable={false}
                onChange={(value: any) => {
                  speciesParams.altitudinalRange = value;
                  setSpeciesParams({ ...speciesParams });
                }}
              />
            </div>
            <div className="col-span-1">
              <Label className="text-lg">Limitaciones florales</Label>
              <Select
                id="flower_limitations"
                className="text-md"
                options={speciesEnums.limitFloralValues}
                placeholder="No determinado"
                isClearable={false}
                isSearchable={false}
                onChange={(value: any) => {
                  speciesParams.flowerLimitations = value;
                  setSpeciesParams({ ...speciesParams });
                }}
              />
            </div>
            <div className="col-span-1">
              <Label className="text-lg">Limitaciones frutales</Label>
              <Select
                id="frutal_limitations"
                className="text-md"
                options={speciesEnums.limitFrutoValues}
                placeholder="No determinado"
                isClearable={false}
                isSearchable={false}
                onChange={(value: any) => {
                  speciesParams.fruitLimitations = value;
                  setSpeciesParams({ ...speciesParams });
                }}
              />
            </div>
            <div className="col-span-1">
              <Label className="text-lg">Requerimientos de luz</Label>
              <Select
                id="light_requirement"
                options={speciesEnums.lightRequirement}
                className="text-md"
                placeholder="No determinado"
                isClearable={false}
                isSearchable={false}
                onChange={(value: any) => {
                  speciesParams.lightRequirements = value;
                  setSpeciesParams({ ...speciesParams });
                }}
              />
            </div>
            <div className="col-span-1">
              <Label className="text-lg">Forma de copa</Label>
              <Select
                id="crown_shape"
                options={speciesEnums.crownShapeValues}
                className="text-md"
                placeholder="No determinado"
                isClearable={false}
                isSearchable={false}
                onChange={(value: any) => {
                  speciesParams.crownShape = value;
                  setSpeciesParams({ ...speciesParams });
                }}
              />
            </div>
            <div className="col-span-1">
              <Label className="text-lg">Densidad de follaje</Label>
              <Select
                id="foliage_density"
                options={speciesEnums.priorityLevel}
                className="text-md"
                placeholder="No determinado"
                isClearable={false}
                isSearchable={false}
                onChange={(value: any) => {
                  speciesParams.foliageDensity = value;
                  setSpeciesParams({ ...speciesParams });
                }}
              />
            </div>
            <div className="col-span-1">
              <Label className="text-lg">Humedad</Label>
              <Select
                id="humidity_zone"
                options={speciesEnums.humidityValues}
                className="text-md"
                placeholder="No determinado"
                isClearable={false}
                isSearchable={false}
                onChange={(value: any) => {
                  speciesParams.humidityZone = value;
                  setSpeciesParams({ ...speciesParams });
                }}
              />
            </div>
            <div className="col-span-1">
              <Label className="text-lg">Tipo de Fruta</Label>
              <Select
                id="fruit_type"
                options={speciesEnums.fruitType}
                className="text-md"
                placeholder="No determinado"
                isClearable={false}
                isSearchable={false}
                onChange={(value: any) => {
                  speciesParams.fruitType = value;
                  setSpeciesParams({ ...speciesParams });
                }}
              />
            </div>
            <div className="col-span-1">
              <Label className="text-lg">Sistema de Dispersion</Label>
              <Select
                id="dispersal"
                options={speciesEnums.dispersalValues}
                className="text-md"
                placeholder="No determinado"
                isClearable={false}
                isSearchable={false}
                onChange={(value: any) => {
                  speciesParams.dispersalSystem = value;
                  setSpeciesParams({ ...speciesParams });
                }}
              />
            </div>
            <div className="col-span-1">
              <Label className="text-lg">Meses de fructificacion</Label>
              <Select
                id="months_fruiting"
                options={speciesEnums.monthValues}
                className="text-md"
                placeholder="No determinado"
                isClearable={false}
                isSearchable={false}
                onChange={(value: any) => {
                  speciesParams.fruitingMonths = value;
                  setSpeciesParams({ ...speciesParams });
                }}
              />
            </div>
            <div className="col-span-1">
              <Label className="text-lg">Tipo de Raiz</Label>
              <Select
                id="rooting_type"
                options={speciesEnums.rootingTypes}
                className="text-md"
                placeholder="No determinado"
                isClearable={false}
                isSearchable={false}
                onChange={(value: any) => {
                  speciesParams.rootingType = value;
                  setSpeciesParams({ ...speciesParams });
                }}
              />
            </div>
            <div className="col-span-1">
              <Label className="text-lg">Color de flor</Label>
              <Input
                type="text"
                id="flower_color"
                placeholder="Ej: Rojo, amarillo, etc."
                onChange={(e: any) => {
                  speciesParams.flowerColor = e.target.value;
                  setSpeciesParams({ ...speciesParams });
                }}
              />
            </div>
            <div className="col-span-1">
              <Label className="text-lg">Tiempo florecimiento</Label>
              <Select
                id="flowering_season"
                options={speciesEnums.floweringSeason}
                className="text-md"
                placeholder="No determinado"
                isClearable={false}
                isSearchable={false}
                onChange={(value: any) => {
                  speciesParams.floweringSeason = value;
                  setSpeciesParams({ ...speciesParams });
                }}
              />
            </div>
            <div className="col-span-1">
              <Label className="text-lg">Meses de florecimiento</Label>
              <Select
                id="months_flowering"
                options={speciesEnums.monthValues}
                className="text-md"
                placeholder="No determinado"
                isClearable={false}
                isSearchable={false}
                onChange={(value: any) => {
                  speciesParams.floweringMonths = value;
                  setSpeciesParams({ ...speciesParams });
                }}
              />
            </div>
            <div className="col-span-1">
              <Label className="text-lg">Arreglo de flor</Label>
              <Select
                id="flower_arrangement"
                options={speciesEnums.flowerArrangement}
                className="text-md"
                placeholder="No determinado"
                isClearable={false}
                isSearchable={false}
                onChange={(value: any) => {
                  speciesParams.flowerArrangement = value;
                  setSpeciesParams({ ...speciesParams });
                }}
              />
            </div>
            <div className="col-span-1">
              <Label className="text-lg">Polinizacion</Label>
              <Select
                id="polinization"
                options={speciesEnums.polinizationValues}
                className="text-md overflow-visible"
                placeholder="No determinado"
                isClearable={false}
                isSearchable={false}
                onChange={(value: any) => {
                  speciesParams.pollinationSystem = value;
                  setSpeciesParams({ ...speciesParams });
                }}
              />
            </div>
            <div className="col-span-1">
              <Label className="text-lg">Color de corteza</Label>
              <Input
                type="text"
                id="bark_color"
                placeholder="Ej: Rojo, amarillo, etc."
                onChange={(e: any) => {
                  speciesParams.barkColor = e.target.value;
                  setSpeciesParams({ ...speciesParams });
                }}
              />
            </div>
          </div>
          <Label>Taxonomía</Label>
          <div className="text-xl w-full p-2 grid grid-cols-2 md:grid-cols-4 gap-2">
            <div className="col-span-1">
              <Label className="text-lg">Familia</Label>
              <Input
                type="text"
                id="family"
                placeholder="Familia"
                onChange={(e: any) => {
                  speciesParams.family = e.target.value;
                  setSpeciesParams({ ...speciesParams });
                }}
              />
            </div>
            <div className="col-span-1">
              <Label className="text-lg">Genero</Label>
              <Input
                type="text"
                id="genus"
                placeholder="Genero"
                onChange={(e: any) => {
                  speciesParams.genus = e.target.value;
                  setSpeciesParams({ ...speciesParams });
                }}
              />
            </div>
            <div className="col-span-1">
              <Label className="text-lg">Subespecie</Label>
              <Input
                type="text"
                id="subspecies"
                placeholder="Subespecie"
                onChange={(e: any) => {
                  speciesParams.subspecies = e.target.value;
                  setSpeciesParams({ ...speciesParams });
                }}
              />
            </div>
            <div className="col-span-1">
              <Label className="text-lg">Autor</Label>
              <Input
                type="text"
                id="author"
                placeholder="Autor"
                onChange={(e: any) => {
                  speciesParams.author = e.target.value;
                  setSpeciesParams({ ...speciesParams });
                }}
              />
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </form>
  );
};

export default FilterButton;
