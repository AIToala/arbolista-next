import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import { Thumb } from './CarouselButtons'
import Image from 'next/image'

type PropType = {
  slides: ImageType[],
  options?: EmblaOptionsType,
  style?: string,
}
type ImageType = {
    src: string,
    alt: string,
    description: string,
}

const CarouselImages: React.FC<PropType> = (props) => {
  const { slides, options, style } = props
  let images = []
  if(slides === null) {
    images =[{
        src: 'No determinado',
        description: 'Presentacion',
        alt: 'Presentacion',
      },{
        src: 'No determinado',
        description: "Fruta",
          alt: 'Fruta',
      },{
        src: 'No determinado',
        description: "Hoja",
          alt: 'Hoja',
      },{
        src: 'No determinado',
        description: "Flor",
          alt: 'Flor',
      },{
        src: 'No determinado',
        description: "Detalle de flor",
          alt: 'Detalle de flor',
      },{
        src: 'No determinado',
        description: "Corteza",
          alt: 'Corteza',
      },{
        src: 'No determinado',
        description: "Semilla",
          alt: 'Semilla',
      },
    ]
  } else { images = slides}
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  })

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi],
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()
    emblaMainApi.on('select', onSelect)
    emblaMainApi.on('reInit', onSelect)
  }, [emblaMainApi, onSelect])

  return (
    <>
      <div className={"embla " + style} >
        <div className={"embla__viewport "} ref={emblaMainRef}>
          <div className={"embla__container"}>
            {images.map((image, index) => (
              <div className="embla__slide flex justify-center items-end aspect-square md:h-[60vh]" key={index}>
                <div className="embla__slide__number bg-black/70 mb-2 p-2 text-white w-fit shadow-lg text-center font-semibold rounded-sm">
                  {image.description}
                </div>
                <Image
                  className="!rounded-sm aspect-square object-contain"
                  src={image.src === "No determinado" ? "/images/logo.svg" : image.src || "/images/logo.svg"}
                  fill
                  alt="image.description"
                  priority
                />
              </div>
            ))}
          </div>
        </div>

        <div className="embla-thumbs">
          <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
            <div className="embla-thumbs__container">
              {images.map((image, index) => (
                <Thumb
                  onClick={() => onThumbClick(index)}
                  selected={index === selectedIndex}
                  index={index}
                  imgSrc={image.src === "No determinado" ? "/images/logo.svg" : image.src || "/images/logo.svg"}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>    
  )
}

export default CarouselImages
