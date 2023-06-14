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
          <div className={"embla__container h-[60vh] "}>
            {slides.map((image, index) => (
              <div className="embla__slide flex justify-center items-end" key={index}>
                  <div className="embla__slide__number flex flex-col bg-white/70 justify-center p-4 shadow-lg text-center mb-2">
                    <p className='text-md font-semibold text-gray-700'>{image.description}</p>
                  </div>
                  <Image
                      className="absolute object-contain"
                      src={image.src === "No definido" ? "/images/logo.svg" : image.src || "/images/logo.svg"}
                      width={500}
                      height={500}
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
              {slides.map((image, index) => (
                <Thumb
                  onClick={() => onThumbClick(index)}
                  selected={index === selectedIndex}
                  index={index}
                  imgSrc={image.src === "No definido" ? "/images/logo.svg" : image.src || "/images/logo.svg"}
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
