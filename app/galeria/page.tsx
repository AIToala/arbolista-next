import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import getSpeciesEndangered from "../actions/getSpeciesEndangered";
import GalleryEspecie from "./GalleryEspecie";

export const dynamic = "force-dynamic";

const Galeria = async () => {
  const results = await getSpeciesEndangered();
  if (results.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset urlAction="/" actionLabel="Volver al inicio" />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <div className="w-full bg-white flex relative flex-col min-h-screen mt-10 mb-20 items-center">
        <div className="mt-10 flex flex-col items-center gap-2 w-[80%] justify-center">
          <h1 className="text-3xl text-center font-bold text-gray-700">
            GALERIA
          </h1>
          <p className="font-light text-gray-600">
            Presentamos una galería de plantas nativas de Guayaquil que se
            encuentran en peligro de extinción.
          </p>
          <hr className="w-full bg-[#B8352E] h-[2px]" />
        </div>
        <GalleryEspecie data={results} />
      </div>
    </ClientOnly>
  );
};

export default Galeria;
