"use client";
require("./prettifier.css");

const Acerca = () => {
  return (
    <div>
      <div className="grid-struc items-center justify-between">
        <div className="divs-caracs ancho">
          <div className="text-4xl font-bold text-gray-800 mt-10 top-no-margin text-center">
            Flora Nativa de Guayaquil
          </div>
          <p className="p-tag">
            Flora Nativa de Guayaquil colabora con el Jardín Botánico de
            Guayaquil con el objetivo de promover e informar acerca de la
            importancia y conservación de las especies de flora nativas.
          </p>
          <p className="p-tag">
            Flora Nativa de Guayaquil, además de incentivar a la preservación de
            las especies locales y ofrecer una amplia galería de imágenes,
            brinda información de contacto actualizada de viveristas asociados
            al Jardín Botánico de Guayaquil para facilitarle a los visitantes la
            compra de especies.
          </p>
        </div>
        <div className="divs-caracs2 ancho justify-center ">
          <img
            id="img-jardin"
            src="/images/jardin-botanico.jpeg"
            alt="Jardin botanico Gye"
          ></img>
        </div>
      </div>
    </div>
  );
};
export default Acerca;
