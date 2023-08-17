/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
"use client";

import { type ISpeciesParams } from "@/app/actions/getSpecies";
import useSiembraModal from "@/app/hooks/useSiembraModal";
import { speciesEnums } from "@/app/types/index";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import toast from "react-hot-toast";
import Select from "react-select";
import Heading from "../Heading";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
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
  const [hasObstacles, setHasObstacles] = useState(false);
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
    speciesParams.sembradoTool = true;
    if (
      speciesParams.profundidadSembrado !== undefined &&
      speciesParams.profundidadSembrado <= 2
    ) {
      setStep(STEPS.INTRO);
      siembraModal.onClose();
      router.push("/especies");
      toast.error("La profundidad de siembra debe ser mayor a 2 metros.");
    }
    if (speciesParams.useCategory?.endsWith(",") === true) {
      speciesParams.useCategory = speciesParams.useCategory.slice(0, -1);
    }
    const queryParams = Object.entries(speciesParams)
      .filter(([key, value]) => value !== undefined)
      .map(([key, value]) =>
        typeof value === "string" ||
        typeof value === "boolean" ||
        typeof value === "number"
          ? `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
          : `${encodeURIComponent(key)}=${encodeURIComponent(value.value)}`
      )
      .join("&");
    const query = "/especies?" + queryParams;

    setStep(STEPS.INTRO);
    siembraModal.onClose();
    router.push(query);
  }, [step, siembraModal, router, onNext, speciesParams]);

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
    <div className="grid grid-cols-2 gap-8 !justify-center !items-center w-full">
      <Heading
        className="col-span-2 md:col-span-1 text-2xl !text-center md:!text-left w-full"
        title="Siembra tu Árbol"
        subtitle="Describenos tu arbol y te ayudaremos a encontrarlo"
      />
      <Image
        className="w-full h-full col-span-2 md:col-span-1"
        src="images/sembradoTool/intro2.svg"
        alt="sembrado"
        width={300}
        height={300}
        priority
      />
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
      <div className="grid grid-cols-2 gap-8 !justify-center !items-center w-full">
        <Heading
          className="col-span-2 text-2xl !text-center md:!text-left w-full"
          title="Caracteristicas de Árbol"
          subtitle="Que caracteristicas deseas de tu arbol?"
        />
        <div className="grid col-span-2 gap-4 relative grid-cols-2 md:grid-cols-3">
          {checkList.map((item, index) => (
            <div key={index} className="flex items-center col-span-1 ">
              <input
                id={item.label}
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                onChange={(event) => {
                  if (event.target.checked) {
                    if (item.label === "Es una especie amenazada") {
                      speciesParams.isEndangered = true;
                    } else {
                      if (speciesParams.useCategory === undefined) {
                        speciesParams.useCategory = "";
                      }
                      speciesParams.useCategory += item.value + ",";
                    }
                    setSpeciesParams({ ...speciesParams });
                  } else {
                    if (item.label === "Es una especie amenazada") {
                      speciesParams.isEndangered = false;
                    }
                    speciesParams.useCategory =
                      speciesParams.useCategory?.replace(item.value + ",", "");
                    console.log(speciesParams.useCategory);
                    setSpeciesParams({ ...speciesParams });
                  }
                }}
              />
              <Label className="ml-2 text-sm font-medium text-gray-900">
                {item.label}
              </Label>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const selectLugar = [
    {
      label: "Humedad del suelo",
    },
    {
      label: "Tipo de suelo",
    },
    {
      label: "Presencia de luz",
    },
    {
      label: "Presencia de animales",
    },
  ];

  if (step === STEPS.LUGAR) {
    bodyContent = (
      <div className="grid grid-cols-2 gap-8 !justify-center !items-center w-full">
        <Heading
          className="col-span-2 text-2xl !text-center md:!text-left w-full"
          title="Donde quieres sembrar?"
          subtitle="Encuentra el lugar adecuado y perfecto!"
        />
        <div className="grid col-span-2 gap-2 w-full relative grid-cols-1 md:grid-cols-2">
          {selectLugar.map((item, index) => (
            <div key={index}>
              <Label
                htmlFor={"lugar" + index.toString()}
                className="block text-sm font-medium text-gray-900"
              >
                {item.label}
              </Label>

              <Select
                id={"lugar" + index.toString()}
                options={
                  item.label === "Tipo de suelo"
                    ? speciesEnums.soilTypes
                    : item.label === "Presencia de luz"
                    ? speciesEnums.lightRequirement
                    : item.label === "Humedad del suelo"
                    ? speciesEnums.humidityValues
                    : speciesEnums.priorityLevel
                }
                className="text-sm"
                onChange={(value) => {
                  if (value?.value !== undefined) {
                    if (item.label === "Humedad del suelo")
                      speciesParams.humidityZone = value?.value.toString();
                    if (item.label === "Tipo de suelo")
                      speciesParams.soilType = value?.value.toString();
                    if (item.label === "Presencia de luz")
                      speciesParams.lightRequirements = value?.value.toString();
                    if (item.label === "Presencia de animales")
                      speciesParams.faunaAttraction = value?.value.toString();
                    setSpeciesParams({ ...speciesParams });
                  }
                }}
                isClearable={false}
                isSearchable={false}
                placeholder="Escoga una opcion"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (step === STEPS.ESPACIO) {
    bodyContent = (
      <div className="grid grid-cols-2 gap-8 !justify-center !items-center h-full w-full">
        <Heading
          className="col-span-2 md:col-span-1 text-2xl !text-center md:!text-left w-full"
          title="Tienes suficiente espacio?"
          subtitle="Describenos el espacio que tienes disponible!"
        />
        <Image
          src="images/sembradoTool/lugar2.svg"
          className="col-span-2 md:col-span-1 w-auto h-auto justify-self-center"
          alt="sembrado"
          width={150}
          height={150}
          priority
        />

        <div className="grid col-span-2 grid-cols-1 md:grid-cols-2 relative w-full gap-2">
          <div className="col-span-1">
            <Label
              htmlFor="anchoSembrado"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Ancho del area de sembrado (metros)
            </Label>
            <Input
              type="number"
              name="anchoSembrado"
              id="anchoSembrado"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full"
              placeholder="0.00 m"
              min="0"
              step="0.01"
              onChange={(value) => {
                speciesParams.anchoSembrado = value.target.valueAsNumber;
              }}
            />
          </div>
          <div className="col-span-1">
            <Label
              htmlFor="largoSembrado"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Largo del area de sembrado (metros)
            </Label>
            <Input
              type="number"
              name="largoSembrado"
              id="largoSembrado"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full"
              placeholder="0.00 m"
              min="0"
              step="0.01"
              value={speciesParams.largoSembrado}
              onChange={(value) => {
                speciesParams.largoSembrado = value.target.valueAsNumber;
              }}
            />
          </div>
          <div className="col-span-1">
            <Label
              htmlFor="distanciaTendido"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Distancia a tendido electrico (metros)
            </Label>
            <Input
              type="number"
              name="distanciaTendido"
              id="distanciaTendido"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full"
              placeholder="0.00 m"
              min="0"
              step="0.01"
              value={speciesParams.distanciaTendidoSembrado}
              onChange={(value) => {
                speciesParams.distanciaTendidoSembrado =
                  value.target.valueAsNumber;
              }}
            />
          </div>
          <div className="col-span-1">
            <Label
              htmlFor="alturaTendido"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Altura del tendido electrico
            </Label>
            <Input
              type="number"
              name="alturaTendido"
              id="alturaTendido"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full"
              placeholder="0.00 m"
              min="0"
              step="0.01"
              value={speciesParams.alturaTendidoSembrado}
              onChange={(value) => {
                speciesParams.alturaTendidoSembrado =
                  value.target.valueAsNumber;
              }}
            />
          </div>
          <div className="col-span-1">
            <Label
              htmlFor="distanciaEstructuras"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Distancia hacia otras estructuras
            </Label>
            <Input
              type="number"
              name="distanciaEstructuras"
              id="distanciaEstructuras"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full"
              placeholder="0.00 m"
              min="0"
              step="0.01"
              value={speciesParams.distanciaSiembra}
              onChange={(value) => {
                speciesParams.distanciaSiembra = value.target.valueAsNumber;
              }}
            />
          </div>
          <div className="col-span-1">
            <Label
              htmlFor="Profundidad subterranea"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Profundidad de infraestructura subterranea
            </Label>
            <Input
              type="number"
              name="profundidadSembrado"
              id="profundidadSembrado"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full"
              placeholder="0.00 m"
              min="0"
              step="0.01"
              value={speciesParams.profundidadSembrado}
              onChange={(value) => {
                speciesParams.profundidadSembrado = value.target.valueAsNumber;
              }}
            />
          </div>
        </div>
      </div>
    );
  }
  if (step === STEPS.LIMITES) {
    bodyContent = (
      <div className="grid grid-cols-2 gap-8 !justify-center !items-center w-full">
        <Heading
          className="col-span-2 md:col-span-1 text-2xl !text-center md:!text-left w-full"
          title="Conoces los limites de tu arbol?"
          subtitle="Describenos los limites y caracteristicas de tu arbol!"
        />
        <Image
          src="/images/sembradoTool/tipoCopas.png"
          className="col-span-2 md:col-span-1 w-auto h-auto justify-self-center"
          alt="sembrado"
          width={250}
          height={250}
          priority
        />
        <div className="grid col-span-2 grid-cols-2 lg:grid-cols-3 w-full gap-2">
          <div className="col-span-1">
            <Label
              htmlFor="usoEspacioPublico"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Uso del espacio publico
            </Label>
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
                if (speciesParams.publicSpaceUse !== "")
                  setSpeciesParams({ ...speciesParams });
              }}
              isClearable={false}
              isSearchable={false}
              placeholder="Escoga una opcion"
            />
          </div>
          <div className="col-span-1">
            <Label
              htmlFor="tasaCrecimiento"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Tasa de crecimiento
            </Label>
            <Select
              id="tasaCrecimiento"
              options={speciesEnums.growthRate}
              className="text-sm"
              onChange={(value) => {
                if (value?.value !== undefined) {
                  speciesParams.growthRate = value?.value;
                  setSpeciesParams({ ...speciesParams });
                }
              }}
              isClearable={false}
              isSearchable={false}
              placeholder="Escoga una opcion"
            />
          </div>
          <div className="col-span-1">
            <Label
              htmlFor="longevidad"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Longevidad
            </Label>
            <Select
              id="longevidad"
              options={speciesEnums.longevity}
              className="text-sm"
              onChange={(value) => {
                if (value?.value !== undefined) {
                  speciesParams.longevity = value?.value;
                  setSpeciesParams({ ...speciesParams });
                }
              }}
              isClearable={false}
              isSearchable={false}
              placeholder="Escoga una opcion"
            />
          </div>
          <div className="col-span-1">
            <Label
              htmlFor="persistenciaHoja"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Persistencia de hoja
            </Label>
            <Select
              id="persistenciaHoja"
              options={speciesEnums.leafPersistence}
              className="text-sm"
              onChange={(value) => {
                if (value?.value !== undefined) {
                  speciesParams.leafPersistence = value?.value;
                  setSpeciesParams({ ...speciesParams });
                }
              }}
              isClearable={false}
              isSearchable={false}
              placeholder="Escoga una opcion"
            />
          </div>
          <div className="col-span-1">
            <Label
              htmlFor="formaCopa"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Forma de copa
            </Label>
            <Select
              id="formaCopa"
              options={speciesEnums.crownShapeValues}
              className="text-sm"
              onChange={(value) => {
                if (value?.value !== undefined) {
                  speciesParams.crownShape = value?.value;
                  setSpeciesParams({ ...speciesParams });
                }
              }}
              isClearable={false}
              isSearchable={false}
              placeholder="Escoga una opcion"
            />
          </div>
          <hr className="w-full col-span-2" />
          <div className="col-span-3">
            <Label
              htmlFor="limitacionFloral"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Limitacion de floracion
            </Label>
            <Select
              isMulti
              id="limitacionFloral"
              classNamePrefix="select"
              className="basic-multi-select text-sm"
              options={speciesEnums.limitFloralValues}
              onChange={(value) => {
                speciesParams.flowerLimitations = "";
                value.forEach((value) => {
                  if (value.value !== undefined) {
                    speciesParams.flowerLimitations += value.value + ",";
                  }
                });
                speciesParams.flowerLimitations =
                  speciesParams.flowerLimitations.slice(0, -1);
                if (speciesParams.flowerLimitations !== "")
                  setSpeciesParams({ ...speciesParams });
              }}
              isClearable={false}
              isSearchable={false}
              placeholder="Escoga una opcion"
            />
          </div>
          <div className="col-span-3">
            <Label
              htmlFor="limitacionFrutos"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Limitacion de frutos
            </Label>
            <Select
              isMulti
              id="limitacionFrutos"
              classNamePrefix="select"
              className="basic-multi-select text-sm"
              options={speciesEnums.limitFrutoValues}
              onChange={(value) => {
                speciesParams.fruitLimitations = "";
                value.forEach((value) => {
                  if (value.value !== undefined) {
                    speciesParams.fruitLimitations += value.value + ",";
                  }
                });
                speciesParams.fruitLimitations =
                  speciesParams.fruitLimitations.slice(0, -1);
                if (speciesParams.fruitLimitations !== "")
                  setSpeciesParams({ ...speciesParams });
              }}
              isClearable={false}
              isSearchable={false}
              placeholder="Escoga una opcion"
            />
          </div>
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
      onClose={() => {
        siembraModal.onClose();
        setStep(STEPS.INTRO);
      }}
      body={bodyContent}
    />
  );
};

export default SiembraModal;
