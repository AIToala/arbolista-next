"use client";

import Image from "next/image";

require("./prettifier.css");

const Acerca = () => {
  return (
    <div>
      <div className="grid-struc items-center justify-between">
        <div className="divs-caracs ancho">
          <div className="text-4xl font-bold text-gray-800 mt-10 top-no-margin text-center">
            Flora Nativa de Guayaquil
          </div>
          <p className="p-tag">
            Flora Nativa de Guayaquil colabora con el Jardín Botánico de
            Guayaquil con el objetivo de promover e informar acerca de la
            importancia y conservación de las especies de flora nativas.
          </p>
          <p className="p-tag">
            Flora Nativa de Guayaquil, además de incentivar a la preservación de
            las especies locales y ofrecer una amplia galería de imágenes,
            brinda información de contacto actualizada de viveristas asociados
            al Jardín Botánico de Guayaquil para facilitarle a los visitantes la
            compra de especies.
          </p>
        </div>
        <div className="divs-caracs2 ancho justify-center ">
          <Image
            id="img-jardin"
            src="/images/jardin-botanico.jpeg"
            alt="Jardin botanico Gye"
            width={500}
            height={500}
            priority
            className="rounded-lg w-full h-auto relative"
          />
        </div>
      </div>
      <div className="text-4xl font-bold text-gray-800 mt-5 text-center top-no-margin2">
        Servicios disponibles en Arbolista
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="webpage text-center">
          <div className="text-4xl font-bold text-gray-800 mt-5 text-center top-no-margin1">
            Catálogo de plantas
          </div>
          <ul className="ul-decor ">
            <li>Busqueda de especies nativas por nombre común</li>
            <li>Busqueda de especies nativas por nombre científico</li>
            <li>Busqueda de especies nativas por familia</li>
            <li>Busqueda de especies nativas por características</li>
            <li>Busqueda de especies nativas mediante un formulario</li>
            <li>Galería de especies nativas disponibles</li>
            <li>Cartas descriptivas de especies nativas disponibles</li>
          </ul>
        </div>
        <div className="webpage text-center webpage2">
          <div className="text-4xl font-bold text-gray-800 mt-5 text-center top-no-margin1">
            Viveros asociados
          </div>
          <ul className="ul-decor ">
            <li>Creación de cuenta de viverista asociado</li>
            <li>Información general de viveros asociados</li>
            <li>Información de contacto de viveros asociados</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Acerca;
