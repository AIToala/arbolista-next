'use client';
import { FaList } from 'react-icons/fa';
import { IoGrid } from 'react-icons/io5';
import { Tabs } from 'flowbite-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ImageResponse } from 'next/server';

interface TabEspeciesProps {
    data: any[];
}

const TabEspecies: React.FC<TabEspeciesProps> = ({
    data,
}) => {
    const router = useRouter()
    return (
        <Tabs.Group className="w-full"
            aria-label="Tabs"
            style="underline"
        >
            <Tabs.Item active icon={FaList} title="List">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                        <tr>
                            <th scope="col" className="px-6 py-3"><span className="sr-only">Especie</span></th>
                            <th scope="col" className="px-6 py-3">Nombre</th>
                            <th scope="col" className="px-6 py-3">Familia</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((result)=>{
                            return (
                                <tr key={result.id} className="bg-white border-b hover:bg-gray-50">
                                    <td className="w-32 p-4">
                                        <div onClick={()=>router.push(`/especies/${result.name}`)} className='cursor-pointer'>
                                            <Image 
                                                src={result.images.presentation_url==="No determinado" ? 'images/logo.svg' : result.images.presentation_url || 'images/logo.svg'} alt={result.name} width={100} height={100}
                                                className="rounded-sm aspect-square overflow-hidden"
                                            />
                                        </div>
                                    </td>
                                    <td className="text-gray-900 font-semibold px-6 py-4">
                                    <div onClick={()=>router.push(`/especies/${result.name}`)} className='cursor-pointer'>{result.name}</div>
                                        <div className="font-light text-gray-700">
                                            <p>
                                                {result.taxonomy?.common_names}
                                            </p>
                                        </div>
                                    </td>
                                    <td className="text-gray-700 px-6 py-4">{}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>    
            </Tabs.Item>
            <Tabs.Item icon={IoGrid} title="Multimedia">
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-8">
                    {data.map((result)=>(
                        <Link key={result.id} href={`/especies/${result.name}`}>
                            <div className="col-span-1 cursor-pointer group bg-white rounded-xl overflow-hidden shadow-lg">
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
                                        <Image fill className="object-cover h-full w-full group-hover:scale-110 transition" alt={"especie"} src={result.images.presentation_url==="No determinado" ? 'images/logo.svg' : result.images.presentation_url || 'images/logo.svg'} />
                                    </div>
                                </div>
                                <div className="bg-white p-2">
                                    <div className="font-semibold text-xs md:text-sm lg:text-md">
                                        {result.name}
                                    </div>
                                    <div className="font-light text-xs md:text-sm lg:text-md text-neutral-500 truncate">
                                        <p>
                                        </p>
                                    </div>
                                </div>
                                
                            </div>
                        </Link>
                    ))}
                </div>
            </Tabs.Item>
        </Tabs.Group> 
    );
}
export default TabEspecies;