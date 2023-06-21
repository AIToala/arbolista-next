"use client";
import { useState } from "react";
import Select from "react-select";
import { Dropdown } from "flowbite-react";
import { speciesEnums } from "@/app/types/index";
import { DateRange } from "react-date-range";

const FilterButton = () => {
  const filtrar = () => {
    console.log("filtrar");
  };
  const limpiar = () => {
    console.log("limpiar");
  };

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
                  options={speciesEnums.growth_habit}
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
                  options={speciesEnums.altitudeRange}
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
                  options={speciesEnums.originValues}
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
                  options={speciesEnums.conservationStatus}
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
                  options={speciesEnums.priorityLevel}
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
                  options={speciesEnums.useCategoryValues}
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
                  options={speciesEnums.publicUseValues}
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
                  options={speciesEnums.longevity}
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
                  options={speciesEnums.growthRate}
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
                  options={speciesEnums.lightRequirement}
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
                  options={speciesEnums.crownShapeValues}
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
                  options={speciesEnums.priorityLevel}
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
                  options={speciesEnums.humidityValues}
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
                  options={speciesEnums.fruitType}
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
                  options={speciesEnums.dispersalValues}
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
                  options={speciesEnums.rootingTypes}
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
                  options={speciesEnums.floweringSeason}
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
                  options={speciesEnums.flowerArrangement}
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
