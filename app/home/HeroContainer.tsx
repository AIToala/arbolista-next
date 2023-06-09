'use client';
import Image from 'next/image';
import Carousel from '../components/carousel/Carousel';
import { useRouter } from 'next/navigation';
import { BiRightArrowAlt } from 'react-icons/bi';

const HeroContainer = () => {
    const router = useRouter();
    const images = [
        {
            src: '/images/slides/slide2.webp',
            alt: 'poster1',
            title: 'Pinta de verde Guayaquil',
            description: '¿Estas interesado en sembrar un arbol? Conoce los pasos para hacerlo usando nuestra herramienta de siembra',
            url: 'sembrar',
            action: 'Siembra',
        },
        {
            src: '/images/slides/slide1.webp',
            alt: 'poster2',
            title: 'Conoce los arboles nativos de Guayaquil',
            description: 'Explora nuestro catalogo de arboles, conoce sus caracteristicas y como sembrarlos',
            url: '/especies',
            action: 'Explora',
        },
        {
            src: '/images/slides/slide3.webp',
            alt: 'poster3',
            title: 'Unete a nuestra comunidad',
            description: '¿Eres un investigador de especies nativas o un viverista interesado en compartir tu negocio? Unete a nuestra comunidad, registrate y comparte tu conocimiento / vivero con nosotros.',
            url: '/unete',
            action: 'Unete',
        }
    ]
    const checkUrl = (url: string) => {
        if (url === 'sembrar') {
            console.log('sembrar');
        }
        router.push(url);
    }
    return (
        <div className='w-full h-[91vh] relative'>
            <Carousel>
                {images.map((image, index) => (
                <div className="embla__slide flex justify-center lg:justify-start items-center aspect-video" key={index}>
                    <div className="embla__slide__number px-[50px] py-[60px] flex flex-col gap-y-6 bg-white justify-center lg:justify-start lg:items-start items-center p-4 w-[70%] xl:w-[30%] lg:ml-[60px] shadow-lg text-center lg:text-left">
                        <hr className='bg-green-700 w-[20%] leading-tight h-2 justify-self-start' />
                        <h1 className='lg:text-[44px] md:text-3xl text-2xl font-bold text-gray-800'>{image.title}</h1>
                        <p className='lg:text-[16px] md:text-md text-md text-gray-700'>{image.description}</p>
                        <button className='bg-green-700 hover:bg-green-800 w-fit text-white font-bold pl-4 py-2 pr-[20px] rounded-sm' onClick={()=>{checkUrl(image.url)}}>
                        <span>{image.action}</span>
                        <BiRightArrowAlt className='inline-block ml-2' size={24} />
                        </button>
                    </div>
                    <Image
                        className="brightness-50"
                        src={image.src}
                        alt={image.alt}
                        fill
                        priority
                        quality={100}
                    />
                </div>
                ))}
            </Carousel>
        </div>
    );
}
export default HeroContainer;