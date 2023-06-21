'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
interface GalleryEspecieProps {
    data: any[];
}

const GalleryEspecie: React.FC<GalleryEspecieProps> = ({
    data,
}) => {
    const router = useRouter()
    return (
        <div className="w-full p-4 grid grid-cols-3 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-4 relative">
            {data.map((result, index)=>(
                <div key={index} className="col-span-1 cursor-pointer group bg-white rounded-md overflow-hidden shadow-lg grayscale-[50%] hover:grayscale-0">
                    <div className="flex flex-col gap-2 w-full">
                        <div 
                            className="
                                w-full
                                flex
                                h-[600px]
                                overflow-hidden
                                aspect-video
                                relative
                                items-end
                            "
                        >
                            <div className='w-full p-2 z-10 relative items-center flex flex-row text-xs md:text-md bg-black/30 justify-between text-white'>
                                <p>{result.name}</p>
                                <div className='rounded-full bg-white w-fit h-fit p-2'>
                                    <p className='text-black font-semibold'>{result?.ecology?.conservation_status}</p>
                                </div>
                            </div>
                            <Image fill className="object-cover h-full w-full group-hover:scale-110 transition" alt={"especie"} src={result?.images?.presentation_url} />
                            
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default GalleryEspecie;