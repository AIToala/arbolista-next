import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import getSpecies, { type ISpeciesParams } from "../actions/getSpecies";
import FilterButton from "../components/buttons/FilterButton";
import SearchButton from "../components/buttons/SearchButton";
import TabEspecies from "./TabEspecies";

export const dynamic = "force-dynamic";

interface EspeciesProps {
  searchParams: ISpeciesParams;
}

const Especies = async ({ searchParams }: EspeciesProps) => {
  const results = await getSpecies(searchParams);
  if (results.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset urlAction="/especies" />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <div className="flex flex-col w-full h-full bg-[#eee] relative items-center">
        <div className="w-full h-auto p-6 text-xl flex bg-slate-800 flex-col gap-4 justify-center md:justify-around items-center font-bold text-white md:flex-row md:gap-0">
          <h1 className="w-full text-lg md:text-lg text-center md:text-left md:mr-2 font-semibold">
            Especies nativas
          </h1>
          <div className="flex flex-row items-center gap-2 w-full">
            <SearchButton />
            <FilterButton />
          </div>
        </div>
        <div className="w-full justify-between flex flex-row bg-green-700 text-white items-center px-4 py-2 rounded-b-md">
          <div className="text-md flex flex-col">
            <span className="text-xl font-bold">{results.length}</span>
            <span>Especies</span>
          </div>
          <div className="text-md flex flex-row"></div>
        </div>
        <div className="w-full flex flex-col h-auto px-4 py-4 min-h-[70vh] mx-auto my-5">
          <TabEspecies data={results} />
        </div>
      </div>
    </ClientOnly>
  );
};

export default Especies;
