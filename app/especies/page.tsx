'use client';
import { useState } from "react";
import ClientOnly from "@/app/components/ClientOnly";
import { BiSearch } from "react-icons/bi";
import { FaList } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { GoSettings } from "react-icons/go";

import IconButton from "@/app/components/buttons/IconButton";
import Image from "next/image";
import Link from "next/link";
import EmptyState from "@/app/components/EmptyState";

const Especies = () => {
    const [isLoading, setIsLoading] = useState(false);
    
    const [results, setResults] = useState([]);

    const data = [
        {
            "id": 1,
            "scientific_name": "Cedrela Odorata",
            "names": ["Cedro", "Cedro español", "acaju", "cedro amargo"],
            "usos_comunes": ["Ornamental","Material"],
            "familia": "Meliaceae",
            "image": "https://upload.wikimedia.org/wikipedia/commons/2/29/Cedrela_odorata_foliage.jpg"
        },
        {
            "id": 2,
            "scientific_name": "Handroanthus chrysanthus",
            "names": ["Guayacan"],
            "usos_comunes": ["Ornamental"],
            "familia": "Bignoniaceae",
            "image": "https://static.inaturalist.org/photos/33572615/medium.jpeg"
        },
        {
            "id": 3,
            "scientific_name": "Vitex gigantea",
            "names": ["Cedro"],
            "usos_comunes": ["Ornamental", "Material"],
            "familia": "Lamiaceae",
            "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/103375965/medium.jpg"
        },
        {
            "id": 4,
            "scientific_name": "Vitex gigantea",
            "names": ["Cedro"],
            "usos_comunes": ["Ornamental", "Material"],
            "familia": "Lamiaceae",
            "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/103375965/medium.jpg"
        },
        {
            "id": 5,
            "scientific_name": "Vitex gigantea",
            "names": ["Cedro"],
            "usos_comunes": ["Ornamental", "Material"],
            "familia": "Lamiaceae",
            "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/103375965/medium.jpg"
        },
        {
            "id": 6,
            "scientific_name": "Vitex gigantea",
            "names": ["Cedro"],
            "usos_comunes": ["Ornamental", "Material"],
            "familia": "Lamiaceae",
            "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/103375965/medium.jpg"
        },
        {
            "id": 7,
            "scientific_name": "Vitex gigantea",
            "names": ["Cedro"],
            "usos_comunes": ["Ornamental", "Material"],
            "familia": "Lamiaceae",
            "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/103375965/medium.jpg"
        },
        {
            "id": 8,
            "scientific_name": "Vitex gigantea",
            "names": ["Cedro"],
            "usos_comunes": ["Ornamental", "Material"],
            "familia": "Lamiaceae",
            "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/103375965/medium.jpg"
        },
        {
            "id": 9,
            "scientific_name": "Vitex gigantea",
            "names": ["Cedro"],
            "usos_comunes": ["Ornamental", "Material"],
            "familia": "Lamiaceae",
            "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/103375965/medium.jpg"
        }
    ]
    const [view, setView] = useState("list")
    const changeView = (view:String) => {
        if(view === "grid"){
            setView("grid");
        }else{
            setView("list");
        }
    }
    const showfilter = () => {
        console.log('Show filter')
    }
    

    return (
        <div className="flex flex-col w-full h-full bg-[#eee] relative">
            <div className="w-full h-auto p-6 text-xl flex bg-gray-800 flex-col gap-4 justify-center md:justify-around items-center font-bold text-white md:flex-row md:gap-0">
                <h1 className="w-full text-lg md:text-lg text-center md:text-left md:mr-2">Especies Nativas</h1>
                <ClientOnly>
                    <div className="flex flex-row items-center gap-2 w-full">
                        <input
                            type="text"
                            placeholder="Especie"
                            onChange={(e)=>{}}
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
                        <IconButton style="outline outline-1 outline-white" small onClick={()=>{}} iconSize={20} icon={BiSearch}/>
                        <button type="button" className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-2 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2" 
                        onClick={showfilter}>
                            <GoSettings className="w-5 h-5 md:mr-2"/>
                            <span className="hidden md:flex">Filtrar</span>
                        </button>                    
                    </div>
                </ClientOnly>
            </div>
            <div className="w-[80vw] flex flex-col h-auto px-3 py-3 min-h-[70vh] mx-auto my-10">
                <div className="w-full md:pl-8 py-2 px-2 h-auto flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center mb-4">
                    <p className="text-sm font-bold text-gray-700">{results.length} Resultados</p>
                    <div className="inline-flex rounded-md shadow-sm" role="group">
                        <button
                            type="button"
                            className={(view === "list" ? "bg-gray-100 text-green-700" : "bg-white text-gray-800") + `
                                inline-flex
                                items-center
                                px-4
                                py-2
                                text-sm
                                font-medium
                                border
                                border-gray-200
                                rounded-l-lg
                                hover:bg-gray-100
                                hover:text-green-700
                                focus:z-10
                                focus:ring-2
                                focus:ring-green-700
                                focus:text-green-700
                            `}
                            onClick={()=>changeView("list")}
                        >
                            <FaList className="md:mr-2"/>
                            <span className="hidden md:flex">Lista</span>
                        </button>
                        <button
                            type="button"
                            className={(view === "grid" ? "bg-gray-100 text-green-700" : "bg-white text-gray-800") + `
                                inline-flex
                                items-center
                                px-4
                                py-2
                                text-sm
                                font-medium
                                text-gray-800
                                bg-white
                                border
                                border-gray-200
                                rounded-r-md
                                hover:bg-gray-100
                                hover:text-green-700
                                focus:z-10
                                focus:ring-2
                                focus:ring-green-700
                                focus:text-green-700
                            `}
                            onClick={()=>changeView("grid")}
                        >
                            <IoGrid className="md:mr-2"/>
                            <span className="hidden md:flex">Multimedia</span>
                        </button>
                    </div>
                </div>
                {data.length ===0 ? (
                    <div className="w-full h-auto flex flex-col items-center justify-center">
                        <EmptyState
                            title="No se encontraron resultados"
                            subtitle="Intenta con otra busqueda"
                        />
                    </div>
                ) : isLoading ? (
                    <div className="w-full h-auto flex flex-col items-center justify-center">
                        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                    </div>
                ) : (
                    <div className="relative overflow-x-auto shadow-md rounded-lg">
                        {view === "list" ? (
                            <table className="w-full text-sm text-left text-gray-500">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                                    <tr>
                                        <th scope="col" className="px-6 py-3"><span className="sr-only">Image</span></th>
                                        <th scope="col" className="px-6 py-3">Nombre</th>
                                        <th scope="col" className="px-6 py-3">Usos Comunes</th>
                                        <th scope="col" className="px-6 py-3">Familia</th>
                                    </tr>
                                </thead>
                                <ClientOnly>
                                <tbody >

                                    {data.map((result, index)=>(
                                        <tr key={index} className="bg-white border-b hover:bg-gray-50">
                                            <td className="w-32 p-4">
                                                <Link href={'/especies/' + result.id}>
                                                    <Image 
                                                        src={result.image} alt={result.scientific_name[0]} width={100} height={100}
                                                        className="rounded-sm aspect-square overflow-hidden"
                                                    />
                                                </Link>
                                            </td>
                                            <td className="text-gray-900 font-semibold px-6 py-4">
                                                <Link href={'/'}>{result.scientific_name}</Link>
                                                <div className="font-light text-gray-700">
                                                    <p>
                                                        {result.names.map((item, index)=>(
                                                            <Link key={index} href={'/especies/' + result.id}>
                                                                {item + (index === result.names.length-1 ? "" : ", ")}
                                                            </Link>    
                                                        ))}
                                                    </p>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-gray-700">
                                                {result.usos_comunes.map((item, index)=>(
                                                    <div key={index}>{item + (index === result.usos_comunes.length-1 ? "" : ", ")}</div>    
                                                ))}
                                            </td>
                                            <td className="text-gray-700 px-6 py-4">{result.familia}</td>
                                        </tr>
                                    ))}
                                </tbody>
                                </ClientOnly>
                            </table>
                        ) : (
                            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-8">
                                {data.map((result, index)=>(
                                    <div key={index} onClick={()=>{}} className="col-span-1 cursor-pointer group bg-white rounded-xl overflow-hidden shadow-lg">
                                        <div className="flex flex-col gap-2 w-full">
                                            <div 
                                                className="
                                                    w-full
                                                    aspect-square
                                                    relative
                                                    overflow-hidden
                                                    rounded-xl
                                                "
                                            >
                                                <Image fill className="object-cover h-full w-full group-hover:scale-110 transition" alt={"especie"} src={result.image} />
                                            </div>
                                        </div>
                                        <div className="bg-white p-2">
                                            <div className="font-semibold text-xs md:text-sm lg:text-md">
                                                {result.scientific_name}
                                            </div>
                                            <div className="font-light text-xs md:text-sm lg:text-md text-neutral-500 truncate">
                                                <p>
                                                    {result.names.map((item, index)=>(
                                                        <span key={index}>
                                                            {item + (index === result.names.length-1 ? "" : ", ")}
                                                        </span>
                                                    ))}
                                                </p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                ))}
                            </div>
                        )}    
                    </div>
            )}
                
            </div>
        </div>
    );
}

export default Especies;