/* eslint-disable @typescript-eslint/restrict-template-expressions */
import EmptyState from "@/app/components/EmptyState";
import getViveros from "../actions/getViveros";
import ClientOnly from "../components/ClientOnly";
import ViverosViews from "./ViverosViews";

export const dynamic = "force-dynamic";

const Viveros = async () => {
  const viveros = await getViveros();
  if (viveros.length === 0) {
    return (
      <ClientOnly>
        <EmptyState title="No existen viveros aun." subtitle="-=-" />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <div className="flex flex-col w-full h-full bg-[#eee] relative items-center">
        <div className="w-full h-auto p-6 text-xl flex bg-gray-800 flex-col gap-4 justify-center md:justify-around items-center font-bold text-white md:flex-row md:gap-0">
          <h1 className="w-full text-lg text-center md:text-left md:mr-2 font-semibold">
            VIVEROS
          </h1>
        </div>
        <div className="w-full flex flex-col h-auto px-4 py-4 min-h-[70vh] mx-auto my-5">
          <ViverosViews data={viveros} />
        </div>
      </div>
    </ClientOnly>
  );
};
export default Viveros;
