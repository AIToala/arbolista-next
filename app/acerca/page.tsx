"use client";
require("./prettifier.css");

const Acerca = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col ancho image-shadow">
          <div className="divs-caracs ">
            <div className="text-4xl font-bold text-gray-800 mt-10 top-no-margin text-center">
              Jardín Botánico de Guayaquil
            </div>
            <p>
              El Jardín Botánico de Guayaquil es un proyecto que fue creado por
              la Asociación Ecuatoriana de Orquideología en el año 1979 con el
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
          <div className="divs-caracs">
            <div className="text-4xl font-bold text-gray-800 mt-5 top-no-margin text-center">
              Colecciones de plantas
            </div>
            <ul className="ul-decor ">
              <li>Arboretum</li>
              <li>Palmetum</li>
              <li>Cactarium</li>
              <li>Árboles frutales</li>
              <li>Plantas ornamentales</li>
              <li>Plantas tropicales exóticas</li>
              <li>Orquideario</li>
              <li>Bromelias nativas de Ecuador</li>
              <li>Tillandsias nativas de Ecuador</li>
              <li>Flor de loto o Nelumbonaceae</li>
              <li>
                Nepenthes especie de planta carnívora introducida de Madagascar
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col ancho justify-center ">
          <img
            src="/images/jardin-botanico.jpeg"
            alt="Jardin botanico Gye"
            width="80%"
            className="image-shadow"
          ></img>
        </div>
      </div>
    </div>
  );
};
export default Acerca;
