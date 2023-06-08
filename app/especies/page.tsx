export const dynamic = 'force-dynamic';
import ClientOnly from "@/app/components/ClientOnly";
import { GoSettings } from "react-icons/go";

import EmptyState from "@/app/components/EmptyState";
import TabEspecies from "./TabEspecies";
import getSpecies, {
    ISpeciesParams
} from "../actions/getSpecies";

interface EspeciesProps {
    searchParams: ISpeciesParams;
}

const Especies = async({searchParams}: EspeciesProps) => {
    const results = await getSpecies(searchParams);
    if(results.length === 0){
        return(
            <ClientOnly>
                <EmptyState showReset />
            </ClientOnly>
        );
    }
    
    const showfilter = () => {
        console.log("show filter");
    }
    return (
        <ClientOnly>
            <div className="flex flex-col w-full h-full bg-[#eee] relative items-center">
                <div className="w-full h-auto p-6 text-xl flex bg-gray-800 flex-col gap-4 justify-center md:justify-around items-center font-bold text-white md:flex-row md:gap-0">
                    <h1 className="w-full text-lg md:text-lg text-center md:text-left md:mr-2 font-semibold">ESPECIES NATIVAS</h1>
                    <div className="flex flex-row items-center gap-2 w-full">
                        <input
                            type="text"
                            placeholder="Especie"
                            className="
                                w-full
                                p-2
                                text-sm
                                text-gray-600
                                font-light 
                                bg-white 
                                border-1
                                rounded-md
                                outline-none
                                transition
                                disabled:opacity-70
                                disabled:cursor-not-allowed
                                pl-4
                                border-neutral-300
                                focus:border-teal-500
                            "                    
                        />
                        <button type="button" className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-2 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2">
                            <GoSettings className="w-5 h-5 md:mr-2"/>
                            <span className="hidden md:flex">Filtrar</span>
                        </button>                    
                    </div>
                </div>
                <div className="w-[90%] justify-between flex flex-row bg-green-700 text-white items-center px-4 py-2 rounded-b-md">
                    <div className="text-md flex flex-col">
                        <span className="text-xl font-bold">{results.length}</span> 
                        <span>Especies</span>
                    </div>
                    <div className="text-md flex flex-row">
                    </div>
                </div>
                <div className="w-[90%] flex flex-col h-auto px-3 py-3 min-h-[70vh] mx-auto my-5">
                    <TabEspecies data={results}/>      
                </div>
            </div>
        </ClientOnly>
    );
}

export default Especies;