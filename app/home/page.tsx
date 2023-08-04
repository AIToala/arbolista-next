import ClientOnly from "@/app/components/ClientOnly";
import HeroContainer from "./HeroContainer";
require("../acerca/prettifier.css");

const Home = async () => {
  return (
    <ClientOnly>
      <HeroContainer />
      <div className="w-full flex flex-col items-center">
        <div className="text-4xl font-bold text-gray-800 mt-5 text-center top-no-margin2 css-selector">
          Servicios disponibles
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="webpage text-center rounded-md">
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
          <div className="webpage text-center webpage2 rounded-md">
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
    </ClientOnly>
  );
};

export default Home;
