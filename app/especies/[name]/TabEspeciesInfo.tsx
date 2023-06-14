'use client';
import { Tabs } from 'flowbite-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { SafeSpecies } from '@/app/types';
import Carousel from '@/app/components/carousel/Carousel';
import CarouselImages from '@/app/components/carousel/CarouselImages';

interface TabEspeciesInfoProps {
    data: any[];
}

const TabEspeciesInfo: React.FC<TabEspeciesInfoProps> = ({
    data,
}) => {
    const router = useRouter()
    const images = [
        {
            src: data[0].images['presentation_url'],
            description: 'Presentacion',
            alt: 'Presentacion',
        },
        {
            src: data[0].images['fruit_url'],
            description: "Fruta",
            alt: 'Fruta',
        },
        {
            src: data[0].images['leaf_url'],
            description: "Hoja",
            alt: 'Hoja',
        },
        {
            src: data[0].images['flower_url'],
            description: "Flor",
            alt: 'Flor',
        },
        {
            src: data[0].images['detailFlower_url'],
            description: "Detalle de flor",
            alt: 'Detalle de flor',
        },
        {
            src: data[0].images['bark_url'],
            description: "Corteza",
            alt: 'Corteza',
        },
        {
            src: data[0].images['seed_url'],
            description: "Semilla",
            alt: 'Semilla',
        },
    ]

    console.log(images)
    
    return (
        <div className='w-full relative justify-center items-center grid grid-cols-1 md:grid-cols-2'>
            <CarouselImages slides={images} style='col-span-1 w-full bg-[#0c0c0c]'/>
            <Tabs.Group className="col-span-1 w-full md:mx-4 "
                aria-label="Tabs"
                style="underline"
            >
                <Tabs.Item active title="Taxonomia" className=''>
                    
                </Tabs.Item>
                <Tabs.Item title="Detalles" className=''>
                    
                </Tabs.Item>
                <Tabs.Item title="Ecologia" className=''>

                </Tabs.Item>
                <Tabs.Item title="Etnobotanica" className=''>

                </Tabs.Item>
                <Tabs.Item title="Arboricultura" className=''>

                </Tabs.Item>
            </Tabs.Group>
        </div>
         
    );
}
export default TabEspeciesInfo;