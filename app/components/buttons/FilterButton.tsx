"use client";
import { useState } from "react";
import Select from "react-select";
import { Dropdown } from "flowbite-react";
import {
  ConservationStatus,
  RootingTypes,
  FlowerArrangement,
  FloweringSeason,
  LeafPersistence,
  StemLeafPosition,
  LeafComposition,
  FruitType,
  Origin,
  LightRequirement,
  GrowthRate,
  PriorityLevel,
  CrownWidth,
} from "@prisma/client";
import { DateRange } from "react-date-range";

const FilterButton = () => {
  const filtrar = () => {
    console.log("filtrar");
  };
  const limpiar = () => {
    console.log("limpiar");
  };
  const conservationStatus = Object.values(ConservationStatus).map((value) => ({
    value,
    label: value.replace("_"," "),
  }));
  const rootingTypes = Object.values(RootingTypes).map((value) => ({
    value,
    label: value.replace("_"," "),
  }));
  const flowerArrangement = Object.values(FlowerArrangement).map((value) => ({
    value,
    label: value.replace("_"," "),
  }));
  const floweringSeason = Object.values(FloweringSeason).map((value) => ({
    value,
    label: value.replace("_"," "),
  }));
  const leafPersistence = Object.values(LeafPersistence).map((value) => ({
    value,
    label: value.replace("_"," "),
  }));
  const stemLeafPosition = Object.values(StemLeafPosition).map((value) => ({
    value,
    label: value.replace("_"," "),
  }));
  const leafComposition = Object.values(LeafComposition).map((value) => ({
    value,
    label: value.replace("_"," "),
  }));
  const fruitType = Object.values(FruitType).map((value) => ({
    value,
    label: value.replace("_"," "),
  }));
  const origin = Object.values(Origin).map((value) => ({
    value,
    label: value.replace("_"," "),
  }));
  const lightRequirement = Object.values(LightRequirement).map((value) => ({
    value,
    label: value.replace("_"," "),
  }));
  const growthRate = Object.values(GrowthRate).map((value) => ({
    value,
    label: value.replace("_"," "),
  }));
  const priorityLevel = Object.values(PriorityLevel).map((value) => ({
    value,
    label: value.replace("_"," "),
  }));
  const crownWidth = Object.values(CrownWidth).map((value) => ({
    value,
    label: value.replace("_"," "),
  }));

  const altitudeRange = [
    { value: "No determinado", label: "No determinado" },
    { value: "0-1000 msnm", label: "0-1000" },
    { value: "1001-1500 msnm", label: "1000-2000" },
    { value: "1501-2000 msnm", label: "1501-2000" },
    { value: "2001-2500 msnm", label: "2001-2500" },
    { value: "2501-3000 msnm", label: "2501-3000" },
    { value: "3001-3500 msnm", label: "3001-3500" },
    { value: "3501-4000 msnm", label: "3501-4000" },
    { value: "> 4001 msnm", label: "> 4001" },
  ];
  const longevity = [
    { value: "Anual", label: "Anual" },
    { value: "Perenne", label: "Perenne" },
    { value: "Baja", label: "Baja" },
    { value: "Media", label: "Media" },
    { value: "Alta", label: "Alta" },
    { value: "No determinado", label: "No determinado" },
  ];
  const growth_habit = [
    { value: "Arborea", label: "Arborea" },
    { value: "Arbustiva", label: "Arbustiva" },
    { value: "Palmera", label: "Palmera" },
    { value: "Cactacea", label: "Cactácea" },
  ];
  const originValues = [
    { value: "Nativa", label: "Nativo" },
    { value: "Endemico", label: "Endemico" },
  ];
  const useCategoryValues = [
    { value: "Alimenticio", label: "Alimenticio" },
    { value: "Aditivo de los alimentos", label: "Aditivo de los alimentos" },
    {
      value: "Alimento de animales vertebrados",
      label: "Alimento de animales vertebrados",
    },
    {
      value: "Alimento de animales invertebrados",
      label: "Alimento de animales invertebrados",
    },
    { value: "Apícola", label: "Apícola" },
    { value: "Combustibles", label: "Combustibles" },
    { value: "Materiales", label: "Materiales" },
    { value: "Social", label: "Social" },
    { value: "Tóxico", label: "Tóxico" },
    { value: "Medicinal", label: "Medicinal" },
    { value: "Medioambiental", label: "Medioambiental" },
  ];
  const publicUseValues = [
    { value: "No determinado", label: "No determinado" },
    { value: "Andenes vía de servicio", label: "Andenes vía de servicio" },
    { value: "Cerros", label: "Cerros" },
    { value: "Glorietas", label: "Glorietas" },
    { value: "Orejas de puente", label: "Orejas de puente" },
    { value: "Parques", label: "Parques" },
    { value: "Plazas", label: "Plazas/Plazoletas" },
    { value: "Retiros de quebrada", label: "Retiros de quebrada" },
    { value: "Separador de autopistas", label: "Separador de autopistas" },
    { value: "Edificios institucionales", label: "Edificios institucionales" },
    { value: "Antejardines", label: "Antejardines" },
    {
      value: "Separador de arterias principales",
      label: "Separador de arterias principales",
    },
    { value: "Vías peatonales", label: "Vías peatonales" },
    { value: "Separadores", label: "Separadores" },
  ];
  const crownShapeValues = [
    { value: "Aparasolada", label: "Aparasolada" },
    { value: "Columnar", label: "Columnar" },
    { value: "Estratificada", label: "Estratificada" },
    { value: "Globosa", label: "Globosa" },
    { value: "Irregular", label: "Irregular" },
    { value: "Oval", label: "Oval" },
    { value: "Péndula", label: "Péndula" },
    { value: "Piramidal", label: "Piramidal" },
    { value: "Semiglobosa", label: "Semiglobosa" },
    { value: "No determinada", label: "No determinada" },
  ];
  const humidityValues = [
    { value: "Seca", label: "Seca" },
    { value: "Humeda", label: "Humeda" },
    { value: "Muy humeda", label: "Muy humeda" },
    { value: "No determinada", label: "No determinada" },
  ];
  const dispersalValues = [
    { value: "Anemocoria", label: "Anemocoria (viento)" },
    { value: "Hidrocoria", label: "Hidrocoria (agua)" },
    { value: "Baricoria", label: "Baricoria (gravedad)" },
    { value: "Zoocoria", label: "Zoocoria (animales)" },
    { value: "Aves", label: "Aves" },
    { value: "Mamíferos", label: "Mamíferos" },
    { value: "Insectos", label: "Insectos" },
    { value: "Aves semilleras", label: "Aves semilleras" },
    { value: "Aves frugívoras", label: "Aves frugívoras" },
    { value: "No determinado", label: "No determinado" },
  ];

  return (
    <>
      <Dropdown label="Filtro" arrowIcon={false}>
        <div className="w-[85vw] h-[70vh] p-2 gap-4 grid grid-cols-2 divide-x items-start justify-center overflow-y-auto">
          <div className="col-span-1 px-4 gap-2 grid">
            <h1>Taxonomia</h1>
            <hr />
            <div className="grid grid-cols-3 gap-2">
              <div className="col-span-1">
                <label className="text-xs">Familia</label>
                <input
                  type="text"
                  id="family"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-md  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Familia"
                />
              </div>
              <div className="col-span-1">
                <label className="text-xs">Genero</label>
                <input
                  type="text"
                  id="genus"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-md  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Genero"
                />
              </div>
              <div className="col-span-1">
                <label className="text-xs">Subespecie</label>
                <input
                  type="text"
                  id="subspecies"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-md  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Genero"
                />
              </div>
              <div className="col-span-1">
                <label className="text-xs">Sinonimos</label>
                <input
                  type="text"
                  id="synonyms"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-md  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Sinonimos"
                />
              </div>
              <div className="col-span-1">
                <label className="text-xs">Autor</label>
                <input
                  type="text"
                  id="author"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-md  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Autor"
                />
              </div>
              <div className="col-span-1">
                <label className="text-xs">Tipo de crecimiento</label>
                <Select
                  id="growth_habit"
                  className="text-xs"
                  placeholder="No determinado"
                  isClearable={false}
                  isSearchable={false}
                  options={growth_habit}
                  onChange={(value: any) => console.log(value)}
                />
              </div>
            </div>
          </div>
          <div className="col-span-1 px-4 gap-2 grid">
            <h1>Ecologia</h1>
            <hr />
            <div className="grid grid-cols-3 gap-2">
              <div className="col-span-2">
                <label className="text-xs">Rango altitudinal</label>
                <Select
                  id="altitudinal_range"
                  options={altitudeRange}
                  className="text-xs"
                  placeholder="No determinado"
                  isClearable={false}
                  isSearchable={false}
                  onChange={(value: any) => console.log(value)}
                />
              </div>
              <div className="col-span-1">
                <label className="text-xs">Origen</label>
                <Select
                  id="origin"
                  options={originValues}
                  className="text-xs"
                  placeholder="Nativo"
                  isClearable={false}
                  isSearchable={false}
                  onChange={(value: any) => console.log(value)}
                />
              </div>
              <div className="col-span-1">
                <label className="text-xs">Conservación</label>
                <Select
                  id="conservation_status"
                  options={conservationStatus}
                  className="text-xs"
                  placeholder="NE"
                  isClearable={false}
                  isSearchable={false}
                  onChange={(value: any) => console.log(value)}
                />
              </div>
              <div className="col-span-1">
                <label className="text-xs">Atraccion a fauna</label>
                <Select
                  id="fauna_attraction"
                  options={priorityLevel}
                  className="text-xs"
                  placeholder="No determinado"
                  isClearable={false}
                  isSearchable={false}
                  onChange={(value: any) => console.log(value)}
                />
              </div>
              <div className="col-span-1">
                <label className="text-xs">Fauna asociada</label>
                <input
                  type="text"
                  id="associated_fauna"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-md  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Fauna"
                />
              </div>
            </div>
          </div>
          <div className="col-span-2 px-4 gap-2 grid">
            <h1>Arboricultura y Etnobotanica</h1>
            <hr />
            <div className="grid grid-cols-3 gap-2">
              <div className="col-span-1">
                <label className="text-xs">Categoria de Uso</label>
                <Select
                  isMulti
                  id="useCategory"
                  classNamePrefix="select"
                  className="basic-multi-select text-xs"
                  options={useCategoryValues}
                  onChange={(value) => {
                    if (value !== null) {
                      let data: any = [];
                      value.map((item) => {
                        data.push(item.value);
                      });
                    }
                  }}
                  isClearable={false}
                  isSearchable={false}
                  placeholder="Escoga una opcion"
                />
              </div>
              <div className="col-span-2">
                <label className="text-xs">Uso en espacio publico</label>
                <Select
                  isMulti
                  id="publicUse"
                  classNamePrefix="select"
                  className="basic-multi-select text-xs"
                  options={publicUseValues}
                  onChange={(value) => {
                    if (value !== null) {
                      let data: any = [];
                      value.map((item) => {
                        data.push(item.value);
                      });
                    }
                  }}
                  isClearable={false}
                  isSearchable={false}
                  placeholder="Escoga una opcion"
                />
              </div>
              <div className="col-span-1">
                <label className="text-xs">Limitaciones florales</label>
                <input
                  type="text"
                  id="flower_limitations"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-md  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Limitaciones florales"
                />
              </div>
              <div className="col-span-1">
                <label className="text-xs">Limitaciones frutales</label>
                <input
                  type="text"
                  id="fruit_limitations"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-md  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Limitaciones frutales"
                />
              </div>
              <div className="col-span-1">
                <label className="text-xs">Posibles pestes</label>
                <input
                  type="text"
                  id="possible_pests"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-md  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Posibles pestes"
                />
              </div>
              <div className="col-span-1">
                <label className="text-xs">Longevidad</label>
                <Select
                  id="longevity"
                  options={longevity}
                  className="text-xs"
                  placeholder="No determinado"
                  isClearable={false}
                  isSearchable={false}
                  onChange={(value: any) => console.log(value)}
                />
              </div>
              <div className="col-span-1">
                <label className="text-xs">Tasa Crecimiento</label>
                <Select
                  id="growth_rate"
                  options={growthRate}
                  className="text-xs"
                  placeholder="No determinado"
                  isClearable={false}
                  isSearchable={false}
                  onChange={(value: any) => console.log(value)}
                />
              </div>
              <div className="col-span-1">
                <label className="text-xs">Requerimientos de luz</label>
                <Select
                  id="light_requirement"
                  options={lightRequirement}
                  className="text-xs"
                  placeholder="No determinado"
                  isClearable={false}
                  isSearchable={false}
                  onChange={(value: any) => console.log(value)}
                />
              </div>
              <div className="col-span-1">
                <label className="text-xs">Forma de copa</label>
                <Select
                  id="crown_shape"
                  options={crownShapeValues}
                  className="text-xs"
                  placeholder="No determinado"
                  isClearable={false}
                  isSearchable={false}
                  onChange={(value: any) => console.log(value)}
                />
              </div>
              <div className="col-span-1">
                <label className="text-xs">Densidad de follaje</label>
                <Select
                  id="foliage_density"
                  options={priorityLevel}
                  className="text-xs"
                  placeholder="No determinado"
                  isClearable={false}
                  isSearchable={false}
                  onChange={(value: any) => console.log(value)}
                />
              </div>
              <div className="col-span-1">
                <label className="text-xs">Humedad</label>
                <Select
                  id="humidity_zone"
                  options={humidityValues}
                  className="text-xs"
                  placeholder="No determinado"
                  isClearable={false}
                  isSearchable={false}
                  onChange={(value: any) => console.log(value)}
                />
              </div>
            </div>
          </div>
          <div className="col-span-2 px-4 gap-2 grid">
            <h1>Detalles</h1>
            <hr />
            <div className="grid grid-cols-3 gap-2">
                <div className="col-span-1">
                    <label className="text-xs">Tipo de Fruta</label>
                    <Select 
                        id="fruit_type"
                        options={fruitType}
                        className="text-xs"
                        placeholder="No determinado"
                        isClearable={false}
                        isSearchable={false}
                        onChange={(value: any) => console.log(value)}
                    />
                </div>
                <div className="col-span-1">
                    <label className="text-xs">Sistema de Dispersion</label>
                    <Select 
                        id="dispersal"
                        options={dispersalValues}
                        className="text-xs"
                        placeholder="No determinado"
                        isClearable={false}
                        isSearchable={false}
                        onChange={(value: any) => console.log(value)}
                    />
                </div>
                <div className="col-span-1">
                    <label className="text-xs">Meses de fructificacion</label>
                    <input 
                        type="text"
                        id="fruiting_months"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-md  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Meses de fructificacion"
                    />
                </div>
                <div className="col-span-1">
                    <label className="text-xs">Tipo de Raiz</label>
                    <Select 
                        id="rooting_type"
                        options={rootingTypes}
                        className="text-xs"
                        placeholder="No determinado"
                        isClearable={false}
                        isSearchable={false}
                        onChange={(value: any) => console.log(value)}
                    />
                </div>
                <div className="col-span-1">
                    <label className="text-xs">Color de flor</label>
                    <input 
                        type="text"
                        id="flower_color"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-md  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Color de flor"
                    />
                </div>
                <div className="col-span-1">
                    <label className="text-xs">Tiempo de florecimiento</label>
                    <Select 
                        id="flowering_season"
                        options={floweringSeason}
                        className="text-xs"
                        placeholder="No determinado"
                        isClearable={false}
                        isSearchable={false}
                        onChange={(value: any) => console.log(value)}
                    />
                </div>
                <div className="col-span-1">
                    <label className="text-xs">Meses de florecimiento</label>
                    <input 
                        type="text"
                        id="flowering_months"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-md  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Meses de florecimiento"
                    />
                </div>
                <div className="col-span-1">
                    <label className="text-xs">Arreglo de flor</label>
                    <Select 
                        id="flower_arrangement"
                        options={flowerArrangement}
                        className="text-xs"
                        placeholder="No determinado"
                        isClearable={false}
                        isSearchable={false}
                        onChange={(value: any) => console.log(value)}
                    />
                </div>
                <div className="col-span-1">
                    <label className="text-xs">Polinizacion</label>
                    <input 
                        type="text"
                        id="pollination_system"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-md  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Ej: Aves, insectos, etc."
                    />
                </div>
                <div className="col-span-1">
                    <label className="text-xs">Color de corteza</label>
                    <input 
                        type="text"
                        id="bark_color"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-md  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Color de corteza"
                    />
                </div>
            </div>
          </div>
          <div className="col-span-2 px-4 gap-3 w-full flex flex-row items-center justify-end">
            <button
              onClick={limpiar}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Limpiar
            </button>
            <button
              onClick={filtrar}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Aplicar
            </button>
          </div>
        </div>
      </Dropdown>
    </>
  );
};

export default FilterButton;
