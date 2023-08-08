"use client";
import Carousel from "../components/carousel/Carousel";

const HeroContainer = () => {
  const images = [
    {
      src: "/images/slides/slide2.jpg",
      alt: "poster1",
      title: "Pinta de verde Guayaquil",
      description:
        "¿Estas interesado en sembrar un arbol? Conoce los pasos para hacerlo usando nuestra herramienta de siembra",
      url: "sembrar",
      action: "Siembra",
    },
    {
      src: "/images/slides/slide1.jpg",
      alt: "poster2",
      title: "Conoce los arboles nativos de Guayaquil",
      description:
        "Explora nuestro catalogo de arboles, conoce sus caracteristicas y como sembrarlos",
      url: "/especies",
      action: "Explora",
    },
    {
      src: "/images/slides/slide3.jpg",
      alt: "poster3",
      title: "Unete a nuestra comunidad",
      description:
        "¿Eres un investigador de especies nativas o un viverista interesado en compartir tu negocio? Unete a nuestra comunidad, registrate y comparte tu conocimiento / vivero con nosotros.",
      url: "/login",
      action: "Unete",
    },
  ];
  return (
    <div className="w-full h-full relative">
      <Carousel style="!h-[61vh] !md:h-full " slides={images} />
    </div>
  );
};
export default HeroContainer;
