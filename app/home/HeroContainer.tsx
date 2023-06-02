'use client';
import Image from 'next/image';
import Carousel from '../components/carousel/Carousel';
import { useRouter } from 'next/navigation';
import { BiRightArrowAlt } from 'react-icons/bi';

const HeroContainer = () => {
    const router = useRouter();
    const images = [
        {
            src: '/images/slide.jpg',
            alt: 'poster',
            title: 'Conoce los arboles nativos de Guayaquil',
            description: 'Explora nuestro catalogo de arboles, conoce sus caracteristicas y como sembrarlos',
            url: '/especies',
        },
        {
            src: '/images/slide1.jpg',
            alt: 'poster2',
            title: 'Conoce la variedad de arboles nativos en Guayaquil',
            description: 'Observa informacion clave de cada especie, como su nombre cientifico, como sembrarlas y como obtenerlas',
            url: '/unete',
        },
    ]
    const redirectGallery = () => {
        window.location.href = '/galeria';
    }
    const redirectSpecies = () => {
        window.location.href = '/especies';
    }
    return (
        <div className='w-full h-[91vh] relative'>
            <Carousel>
                {images.map((image, index) => (
                <div className="embla__slide flex justify-start items-center aspect-video" key={index}>
                    <div className="embla__slide__number px-[50px] py-[60px] flex flex-col gap-y-6 bg-white p-4 w-[40%] xl:w-[20%] ml-[60px] shadow-lg text-center md:text-left">
                        <hr className='bg-green-700 w-[20%] leading-tight h-2 justify-self-start' />
                        <h1 className='lg:text-[44px] md:text-3xl text-xl font-bold text-gray-800'>{image.title}</h1>
                        <p className='lg:text-[16px] md:text-md text-sm text-gray-700'>{image.description}</p>
                        <button className='bg-green-700 hover:bg-green-800 w-fit text-white font-bold pl-4 py-2 pr-[20px] rounded-sm' onClick={()=>{router.push(image.url)}}>
                        <span>Explora</span>
                        <BiRightArrowAlt className='inline-block ml-2' size={24} />
                        </button>
                    </div>
                    <Image
                        className="brightness-50"
                        src={image.src}
                        alt={image.alt}
                        fill
                        priority
                    />
                </div>
                ))}
            </Carousel>
        </div>
    );
}
export default HeroContainer;