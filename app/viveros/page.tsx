export const dynamic = 'force-dynamic';
import Image from "next/image";
import Link from "next/link";
import EmptyState from "@/app/components/EmptyState";
import getViveros from '../actions/getViveros';
import ClientOnly from '../components/ClientOnly';

const Viveros = async() => {
    const viveros = await getViveros();    
    if (viveros.length === 0) {
        return (
            <ClientOnly>
                <EmptyState title='No existen viveros aun.' subtitle='-=-'/>
            </ClientOnly>
        )
    }
    return (
        <ClientOnly>
            <div className="flex flex-col w-full h-full bg-[#eee] relative">
                <div className="w-full h-auto p-6 text-xl flex bg-gray-800 flex-col gap-4 justify-center md:justify-around items-center font-bold text-white md:flex-row md:gap-0">
                    <h1 className="w-full text-lg md:text-lg text-center md:text-left md:mr-2">VIVEROS</h1>
                </div>
                <div className="w-[80vw] flex flex-col px-3 py-3 min-h-[70vh] mx-auto my-10">
                    <div className="relative overflow-x-auto rounded-lg">
                        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
                            {viveros.map((result, index)=>(
                                <Link key={index} href={`/viveros/${result.name}`}>
                                    <div key={index} onClick={()=>{}} className="col-span-1 cursor-pointer group bg-white rounded-xl overflow-hidden shadow-lg">
                                        <div className="flex flex-col gap-2 w-full">
                                            <div className="w-full aspect-video h-[500px] relative overflow-hidden rounded-xl">
                                                <Image fill className="object-cover h-full w-full group-hover:scale-110 transition" alt={"especie"} src={result.logoSrc || "images/logo.svg"} />
                                            </div>
                                        </div>
                                        <div className="bg-white p-2">
                                            <div className="font-semibold text-xs md:text-sm lg:text-md">
                                                {result.name}
                                            </div>
                                            <div className="font-light text-xs md:text-sm lg:text-md text-neutral-500 truncate">
                                                <p>{result.address}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </ClientOnly>
        
    );
}
export default Viveros;