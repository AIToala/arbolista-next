"use client";
require("./prettifier.css");

const Acerca = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <div className="divs-caracs ancho">
          <div className="text-4xl font-bold text-gray-800 mt-10 top-no-margin text-center">
            Jardín Botánico de Guayaquil
          </div>
          <p>
            El Jardín Botánico de Guayaquil es un proyecto que fue creado por la
            Asociación Ecuatoriana de Orquideología en el año 1979 con el
            propósito de exhibir plantas y dar a conocer a los visitantes
            información importante acerca de la conservación, divulgación e
            investigación de la flora ecuatoriana.
          </p>
          <p>
            Es un área natural y turística que ocupa cinco hectáreas de
            extensión en la zona norte de Guayaquil, específicamente en el
            sector de Las Orquídeas.
          </p>
        </div>
        <div className="flex flex-col ancho justify-center ">
          <img
            src="/images/jardin-botanico.jpeg"
            alt="Jardin botanico Gye"
            width="850rem"
          ></img>
        </div>
      </div>
      <div className="text-4xl font-bold text-gray-800 mt-5 text-center top-no-margin2 css-selector">
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
