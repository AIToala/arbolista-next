import Image from 'next/image';

const galeria = () => {
    const data = [
        {
            "id": 1,
            "scientific_name": "Cedrela Odorata",
            "endangeredStatus": "VU",
            "image": "https://upload.wikimedia.org/wikipedia/commons/2/29/Cedrela_odorata_foliage.jpg"
        },
        {
            "id": 2,
            "scientific_name": "Handroanthus chrysanthus",
            "endangeredStatus": "VU",
            "image": "https://static.inaturalist.org/photos/33572615/medium.jpeg"
        },
        {
            "id": 3,
            "scientific_name": "Vitex gigantea",
            "endangeredStatus": "VU",
            "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/103375965/medium.jpg"
        },
        {
            "id": 4,
            "scientific_name": "Vitex gigantea",
            "endangeredStatus": "EN",
            "usos_comunes": ["Ornamental", "Material"],
            "familia": "Lamiaceae",
            "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/103375965/medium.jpg"
        },
        {
            "id": 5,
            "scientific_name": "Vitex gigantea",
            "endangeredStatus": "EN",
            "usos_comunes": ["Ornamental", "Material"],
            "familia": "Lamiaceae",
            "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/103375965/medium.jpg"
        },
        {
            "id": 6,
            "scientific_name": "Vitex gigantea",
            "endangeredStatus": "EN",
            "usos_comunes": ["Ornamental", "Material"],
            "familia": "Lamiaceae",
            "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/103375965/medium.jpg"
        },
        {
            "id": 7,
            "scientific_name": "Vitex gigantea",
            "endangeredStatus": "EN",
            "usos_comunes": ["Ornamental", "Material"],
            "familia": "Lamiaceae",
            "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/103375965/medium.jpg"
        },
        {
            "id": 8,
            "scientific_name": "Vitex gigantea",
            "endangeredStatus": "EN",
            "usos_comunes": ["Ornamental", "Material"],
            "familia": "Lamiaceae",
            "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/103375965/medium.jpg"
        },
        {
            "id": 9,
            "scientific_name": "Vitex gigantea",
            "endangeredStatus": "EN",
            "usos_comunes": ["Ornamental", "Material"],
            "familia": "Lamiaceae",
            "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/103375965/medium.jpg"
        }
    ]
    return (
        <div className="w-full bg-white flex relative flex-col min-h-screen mt-10 mb-20 items-center">
            <div className="mt-10 flex flex-col items-center gap-2 w-[80%] justify-center">
                <h1 className="text-3xl text-center font-bold text-gray-700">GALERIA</h1>
                <p className="font-light text-gray-600">
                    Presentamos una galería de plantas nativas de Guayaquil que se encuentran en peligro de extinción.
                </p>
                <hr className="w-full bg-[#B8352E] h-[2px]" />
            </div>
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
                                    <p>{result.scientific_name}</p>
                                    <div className='rounded-full bg-white w-fit h-fit p-2'>
                                        <p className='text-black font-semibold'>{result.endangeredStatus}</p>
                                    </div>
                                </div>
                                <Image fill className="object-cover h-full w-full group-hover:scale-110 transition" alt={"especie"} src={result.image} />
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>        
    );
}

export default galeria;