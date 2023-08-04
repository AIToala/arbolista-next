/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
"use client";

import useSiembraModal from "@/app/hooks/useSiembraModal";
import { speciesEnums } from "@/app/types/index";
import dynamic from "next/dynamic";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { useCallback, useMemo, useState } from "react";
import Select from "react-select";

import { type ISpeciesParams } from "@/app/actions/getSpecies";
import Image from "next/image";
import Heading from "../Heading";
import Modal from "./Modal";

enum STEPS {
  INTRO = 0,
  ESPECIE = 1,
  LUGAR = 2,
  ESPACIO = 3,
  LIMITES = 4,
}

const SiembraModal = () => {
  const router = useRouter();
  const siembraModal = useSiembraModal();
  const params = useSearchParams();
  const [speciesParams, setSpeciesParams] = useState<ISpeciesParams>({});

  const [step, setStep] = useState(STEPS.INTRO);

  const onBack = useCallback(() => {
    setStep((value) => value - 1);
  }, []);

  const onNext = useCallback(() => {
    setStep((value) => value + 1);
  }, []);

  const onSubmit = useCallback(async () => {
    if (step !== STEPS.LIMITES) {
      onNext();
      return;
    }

    let currentQuery = {};

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
    };

    const url = qs.stringifyUrl(
      {
        url: "/especies",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    setStep(STEPS.INTRO);
    siembraModal.onClose();
    router.push(url);
  }, [step, siembraModal, router, onNext, params]);

  const actionLabel = useMemo(() => {
    if (step === STEPS.LIMITES) {
      return "Buscar";
    }

    return "Siguiente";
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.INTRO) {
      return undefined;
    }

    return "Regresar";
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-8 justify-center">
      <div className="flex flex-row gap-4 justify-between items-center">
        <Heading
          title="Siembra tu Árbol"
          subtitle="Describenos tu arbol y te ayudaremos a encontrarlo"
        />
        <Image
          src="images/sembradoTool/intro2.svg"
          alt="sembrado"
          width={300}
          height={300}
          priority
        />
      </div>
      <hr />
    </div>
  );

  const checkList = [
    { label: "Otorgue sombra", value: "Sombra" },
    { label: "Ornamental", value: "Ornamental" },
    { label: "Deseo un seto", value: "Seto" },
    { label: "Mejore el suelo", value: "Mejora suelo" },
    { label: "Otorgue alimento", value: "Alimento" },
    { label: "Sea medicinal", value: "Medicinal" },
    { label: "Sea material", value: "Materiales" },
    { label: "Habitat para la fauna", value: "Habitat" },
    { label: "Inhibidor de ruido", value: "Inhibidor de ruido" },
    {
      label: "Proteccion contra vientos fuertes",
      value: "Proteccion contra vientos fuertes",
    },
    {
      label: "Inhibidor de contaminacion",
      value: "Inhibidor de contaminacion",
    },
    { label: "Es una especie amenazada", value: "Especie amenazada" },
    { label: "Restauracion Ecologica", value: "Restauracion Ecologica" },
    { label: "Quiero un cerco vivo", value: "Cerco vivo" },
    { label: "Otorgue ayuda a polinizadores", value: "Ayuda a polinizadores" },
  ];

  if (step === STEPS.ESPECIE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Caracteristicas de Árbol"
          subtitle="Que caracteristicas deseas de tu arbol?"
        />
        <div className="grid gap-4 relative grid-cols-3">
          {checkList.map((item, index) => (
            <div key={index} className="flex items-center col-span-1 ">
              <input
                id={item.label}
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                onChange={(event) => {
                  if (event.target.checked) {
                    if (item.label === "Es una especie amenazada") {
                      speciesParams.conservationStatus = "";
                    } else {
                      speciesParams.useCategory += item.label + ",";
                    }
                    setSpeciesParams(speciesParams);
                  } else {
                    speciesParams.useCategory =
                      speciesParams.useCategory?.replace(item.label + ",", "");
                    setSpeciesParams(speciesParams);
                  }
                }}
              />
              <label
                htmlFor={item.label}
                className="ml-2 text-sm font-medium text-gray-900"
              >
                {item.label}
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const selectLugar = [
    {
      label: "Existen obstaculos?", //
    },
    {
      label: "Disponibilidad de agua", // humidity_zone
    },
    {
      label: "Disponibilidad de suelo", // soil_type
    },
    {
      label: "Presencia de luz", // light_requirements
    },
    {
      label: "Presencia de animales", // fauna_attraction
    },
  ];

  if (step === STEPS.LUGAR) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Donde quieres sembrar?"
          subtitle="Encuentra el lugar adecuado y perfecto!"
        />
        <div className="grid gap-2 w-full relative grid-cols-3">
          {selectLugar.map((item, index) => (
            <div key={index}>
              <label
                htmlFor={"lugar" + index.toString()}
                className="block text-sm font-medium text-gray-900"
              >
                {item.label}
              </label>
              {index === 0 ? (
                <Select
                  id="lugar0"
                  options={speciesEnums.priorityLevel}
                  className="text-sm"
                  onChange={(value) => {}}
                  isClearable={false}
                  isSearchable={false}
                  placeholder="Escoga una opcion"
                />
              ) : (
                <Select
                  id={"lugar" + index.toString()}
                  options={speciesEnums.priorityLevel}
                  className="text-sm"
                  onChange={(value) => {}}
                  isClearable={false}
                  isSearchable={false}
                  placeholder="Escoga una opcion"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (step === STEPS.ESPACIO) {
    bodyContent = (
      <div className="flex flex-col gap-8 justify-center">
        <div className="flex flex-row gap-2 justify-between items-center bg-white">
          <Heading
            title="Tienes suficiente espacio?"
            subtitle="Describenos el espacio que tienes disponible!"
          />
          <Image
            src="images/sembradoTool/lugar2.svg"
            className=""
            alt="sembrado"
            width={300}
            height={300}
            priority
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 relative w-full gap-2">
          <div>
            <label
              htmlFor="anchoSembrado"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Ancho del area de sembrado (metros)
            </label>
            <input
              type="number"
              name="anchoSembrado"
              id="anchoSembrado"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="0.00"
              min="0"
              step="0.01"
              onChange={(value) => {}}
            />
          </div>
          <div>
            <label
              htmlFor="largoSembrado"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Largo del area de sembrado (metros)
            </label>
            <input
              type="number"
              name="largoSembrado"
              id="largoSembrado"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="0.00"
              min="0"
              step="0.01"
              onChange={(value) => {}}
            />
          </div>
          <div>
            <label
              htmlFor="distanciaTendido"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Distancia a tendido electrico (metros)
            </label>
            <input
              type="number"
              name="distanciaTendido"
              id="distanciaTendido"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="0.00"
              min="0"
              step="0.01"
              onChange={(value) => {}}
            />
          </div>
          <div>
            <label
              htmlFor="alturaTendido"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Altura del tendido electrico
            </label>
            <input
              type="number"
              name="alturaTendido"
              id="alturaTendido"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="0.00"
              min="0"
              step="0.01"
              onChange={(value) => {}}
            />
          </div>
          <div>
            <label
              htmlFor="distanciaEstructuras"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Distancia hacia otras estructuras
            </label>
            <input
              type="number"
              name="distanciaEstructuras"
              id="distanciaEstructuras"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="0.00"
              min="0"
              step="0.01"
              onChange={(value) => {}}
            />
          </div>
        </div>
      </div>
    );
  }
  if (step === STEPS.LIMITES) {
    bodyContent = (
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-2 justify-between items-center bg-white">
          <Heading
            title="Conoces los limites de tu arbol?"
            subtitle="Describenos los limites y caracteristicas de tu arbol!"
          />
          <Image
            src="/images/tipoCopas.png"
            className=""
            alt="sembrado"
            width={150}
            height={150}
            priority
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 relative w-full gap-2">
          <div>
            <label
              htmlFor="usoEspacioPublico"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Uso del espacio publico
            </label>
            <Select
              id="usoEspacioPublico"
              options={speciesEnums.publicUseValues}
              className="text-sm"
              onChange={(value) => {}}
              isClearable={false}
              isSearchable={false}
              placeholder="Escoga una opcion"
            />
          </div>
          <div>
            <label
              htmlFor="tasaCrecimiento"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Tasa de crecimiento
            </label>
            <Select
              id="tasaCrecimiento"
              options={speciesEnums.growthRate}
              className="text-sm"
              onChange={(value) => {}}
              isClearable={false}
              isSearchable={false}
              placeholder="Escoga una opcion"
            />
          </div>
          <div>
            <label
              htmlFor="longevidad"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Longevidad
            </label>
            <Select
              id="longevidad"
              options={speciesEnums.longevity}
              className="text-sm"
              onChange={(value) => {}}
              isClearable={false}
              isSearchable={false}
              placeholder="Escoga una opcion"
            />
          </div>
          <div>
            <label
              htmlFor="persistenciaHoja"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Persistencia de hoja
            </label>
            <Select
              id="persistenciaHoja"
              options={speciesEnums.leafPersistence}
              className="text-sm"
              onChange={(value) => {}}
              isClearable={false}
              isSearchable={false}
              placeholder="Escoga una opcion"
            />
          </div>
          <div>
            <label
              htmlFor="formaCopa"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Forma de copa
            </label>
            <Select
              id="formaCopa"
              options={speciesEnums.crownShapeValues}
              className="text-sm"
              onChange={(value) => {}}
              isClearable={false}
              isSearchable={false}
              placeholder="Escoga una opcion"
            />
          </div>
        </div>
        <hr />
        <div className="flex flex-col">
          <label
            htmlFor="limitacionFloral"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Limitacion de floracion
          </label>
          <Select
            isMulti
            id="limitacionFloral"
            classNamePrefix="select"
            className="basic-multi-select text-sm"
            options={speciesEnums.limitFloralValues}
            onChange={(value) => {
              if (value !== null) {
                const data: any = [];
                value.map((item) => {
                  data.push(item.value);
                  return item;
                });
              }
            }}
            isClearable={false}
            isSearchable={false}
            placeholder="Escoga una opcion"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="limitacionFrutos"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Limitacion de frutos
          </label>
          <Select
            isMulti
            id="limitacionFrutos"
            classNamePrefix="select"
            className="basic-multi-select text-sm"
            options={speciesEnums.limitFrutoValues}
            onChange={(value) => {
              if (value !== null) {
                const data: any = [];
                value.map((item) => {
                  data.push(item.value);
                  return item;
                });
              }
            }}
            isClearable={false}
            isSearchable={false}
            placeholder="Escoga una opcion"
          />
        </div>
      </div>
    );
  }

  return (
    <Modal
      isOpen={siembraModal.isOpen}
      title={
        "SiembraGYQ" + (step === 0 ? "" : " - " + step.toString() + " de 4")
      }
      actionLabel={actionLabel}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={onSubmit}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.ESPECIE ? undefined : onBack}
      onClose={siembraModal.onClose}
      body={bodyContent}
    />
  );
};

export default SiembraModal;
