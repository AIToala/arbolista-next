"use client";
import CarouselImages from "@/app/components/carousel/CarouselImages";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/ui/tooltip";

interface TabEspeciesInfoProps {
  data: any[];
}

const TabEspeciesInfo: React.FC<TabEspeciesInfoProps> = ({ data }) => {
  const ecology = data[0].ecology;
  const taxonomy = data[0].taxonomy;
  const stalk = data[0].stalk;
  const root = data[0].root;
  const leaf = data[0].leaf;
  const flower = data[0].flower;
  const seeds = data[0].seeds;
  const ethnobotany = data[0].ethnobotany;
  const arboriculture = data[0].arboriculture;
  let images = data[0].images;

  if (images === null) images = [];
  else
    images = [
      {
        src: data[0].images.presentation_url,
        description: "Presentacion",
        alt: "Presentacion",
      },
      {
        src: data[0].images.fruit_url,
        description: "Fruta",
        alt: "Fruta",
      },
      {
        src: data[0].images.leaf_url,
        description: "Hoja",
        alt: "Hoja",
      },
      {
        src: data[0].images.flower_url,
        description: "Flor",
        alt: "Flor",
      },
      {
        src: data[0].images.detailFlower_url,
        description: "Detalle de flor",
        alt: "Detalle de flor",
      },
      {
        src: data[0].images.bark_url,
        description: "Corteza",
        alt: "Corteza",
      },
      {
        src: data[0].images.seed_url,
        description: "Semilla",
        alt: "Semilla",
      },
    ];
  return (
    <div className="w-full relative justify-center items-center flex flex-col mx-4">
      <div className="grid grid-cols-1 md:p-2 md:grid-cols-2 justify-center p-6 gap-6">
        <CarouselImages
          slides={images}
          style="col-span-1  rounded-lg md:rounded-md bg-transparent shadow-sm"
        />
        <div className="col-span-1 w-full text-center justify-center p-2 md:my-8">
          <h1 className="font-bold text-2xl md:text-4xl">{data[0].name}</h1>
          <h2 className="text-gray-700 font-light text-2xl mb-5">
            {data[0]?.taxonomy.common_names}
          </h2>
          <Accordion
            type="single"
            collapsible
            defaultValue="taxonomia"
            className="w-full grid"
          >
            <AccordionItem value="taxonomia">
              <AccordionTrigger className="text-xl text-green-600 font-semibold">
                Taxonomía
              </AccordionTrigger>
              <AccordionContent className="text-xl">
                {taxonomy !== null ? (
                  <div className="w-full grid grid-cols-1 gap-4 justify-center items-center !m-0">
                    <div className="w-full flex  items-center gap-6">
                      <p className="w-[40%] font-semibold">Familia</p>
                      <p className="w-full text-gray-700 font-light">
                        {taxonomy.family.family}
                      </p>
                    </div>
                    <div className="w-full flex  items-center gap-6">
                      <p className="w-[40%] font-semibold">Género</p>
                      <p className="w-full text-gray-700 font-light">
                        {taxonomy.genus}
                      </p>
                    </div>
                    <div className="w-full flex  items-center gap-6">
                      <p className="w-[40%] font-semibold">Especie</p>
                      <p className="w-full text-gray-700 font-light">
                        {taxonomy.tSpecies}
                      </p>
                    </div>
                    <div className="w-full flex  items-center gap-6">
                      <p className="w-[40%] font-semibold">Subespecie</p>
                      <p className="w-full text-gray-700 font-light">
                        {taxonomy.subspecies}
                      </p>
                    </div>
                    <div className="w-full flex  items-center gap-6">
                      <p className="w-[40%] font-semibold">Variedad</p>
                      <p className="w-full text-gray-700 font-light">
                        {taxonomy.variety}
                      </p>
                    </div>
                    <div className="w-full flex  items-center gap-6">
                      <p className="w-[40%] font-semibold">Nombres comunes</p>
                      <p className="w-full text-gray-700 font-light">
                        {taxonomy.common_names}
                      </p>
                    </div>
                    <div className="w-full flex  items-center gap-6">
                      <p className="w-[40%] font-semibold">Autores</p>
                      <p className="w-full text-gray-700 font-light">
                        {taxonomy.author}
                      </p>
                    </div>
                    <div className="w-full flex  items-center gap-6">
                      <p className="w-[40%] font-semibold">Sinónimos</p>
                      <ul className="w-full text-gray-700 font-light">
                        {taxonomy.synonyms !== undefined ||
                        taxonomy.synonyms !== null ? (
                          <li className="list-none">
                            {taxonomy.synonyms.synonym_name
                              .split(",")
                              .map((synonym: any) => (
                                <p key={synonym}>{synonym.synonym_name}</p>
                              ))}
                          </li>
                        ) : (
                          <p>No hay datos</p>
                        )}
                      </ul>
                    </div>
                    <div className="w-full flex  items-center gap-6">
                      <p className="w-[40%] font-semibold">Etimología</p>
                      <p className="w-full text-gray-700 font-light">
                        {taxonomy.etymology}
                      </p>
                    </div>
                    <div className="w-full flex  items-center gap-6">
                      <p className="w-[40%] font-semibold">
                        Habito de crecimiento
                      </p>
                      <p className="w-full text-gray-700 font-light">
                        {taxonomy.growth_habit}
                      </p>
                    </div>
                    <div className="w-full flex  items-center gap-6">
                      <p className="w-[40%] font-semibold">Bibliografía</p>
                      <ul className="list-none w-full text-gray-700 font-light">
                        {taxonomy.bibliography.length !== 0 ? (
                          <li>
                            {taxonomy.bibliography.map((bibliography: any) => (
                              <p key={bibliography}>
                                {bibliography.authors}{" "}
                                {bibliography.publication_year}
                              </p>
                            ))}
                          </li>
                        ) : (
                          <p>No hay datos</p>
                        )}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="text-gray-700 font-light p-6">
                    No hay datos.
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="detalles">
              <AccordionTrigger className="text-xl text-green-600 font-semibold">
                Detalles
              </AccordionTrigger>
              <AccordionContent className="text-xl">
                <div className="w-full grid grid-cols-1 gap-4 justify-center items-center !m-0">
                  <div className="w-full font-semibold border-b-2 border-amber-600">
                    Flor
                  </div>
                  {flower !== null ? (
                    <>
                      <div className="w-full flex  items-center gap-6">
                        <p className="w-[40%] font-semibold">Color</p>
                        <p className="w-full text-gray-700 font-light">
                          {flower.flower_color}
                        </p>
                      </div>
                      <div className="w-full flex  items-center gap-6">
                        <p className="w-[40%] font-semibold">
                          Arreglo de la flor
                        </p>
                        <p className="w-full text-gray-700 font-light">
                          {flower.flower_arrangement}
                        </p>
                      </div>
                      <div className="w-full flex  items-center gap-6">
                        <p className="w-[40%] font-semibold">
                          Temporada de florecimiento
                        </p>
                        <p className="w-full text-gray-700 font-light">
                          {flower.flowering_season}
                        </p>
                      </div>
                      <div className="w-full flex  items-center gap-6">
                        <p className="w-[40%] font-semibold">
                          Meses de florecimiento
                        </p>
                        <p className="w-full text-gray-700 font-light">
                          {flower.flowering_months}
                        </p>
                      </div>
                      <div className="w-full flex  items-center gap-6">
                        <p className="w-[40%] font-semibold">
                          Sistema de polinización
                        </p>
                        <p className="w-full text-gray-700 font-light">
                          {flower.pollination_system}
                        </p>
                      </div>
                      <div className="w-full flex  items-center gap-6">
                        <p className="w-[40%] font-semibold">
                          Atributos florales
                        </p>
                        <p className="w-full text-gray-700 font-light">
                          {flower.floral_attributes}
                        </p>
                      </div>
                    </>
                  ) : (
                    <div className="text-gray-700 font-light p-6">
                      No hay datos.
                    </div>
                  )}
                  <div className="w-full font-semibold border-b-2 border-amber-600">
                    Semillas y Frutos
                  </div>
                  {seeds !== null ? (
                    <>
                      <div className="w-full flex  items-center gap-6">
                        <p className="w-[40%] font-semibold">Tipo de fruto</p>
                        <p className="w-full text-gray-700 font-light">
                          {seeds.fruitType}
                        </p>
                      </div>
                      <div className="w-full flex  items-center gap-6">
                        <p className="w-[40%] font-semibold">
                          Meses de fructificacion
                        </p>
                        <p className="w-full text-gray-700 font-light">
                          {seeds.fruiting_months}
                        </p>
                      </div>
                      <div className="w-full flex  items-center gap-6">
                        <p className="w-[40%] font-semibold">
                          Atributos frutales
                        </p>
                        <p className="w-full text-gray-700 font-light">
                          {seeds.fruit_attributes}
                        </p>
                      </div>
                      <div className="w-full flex  items-center gap-6">
                        <p className="w-[40%] font-semibold">
                          Atributos de semilla
                        </p>
                        <p className="w-full text-gray-700 font-light">
                          {seeds.seed_attributes}
                        </p>
                      </div>
                      <div className="w-full flex  items-center gap-6">
                        <p className="w-[40%] font-semibold">
                          Sistema de dispersion de semillas
                        </p>
                        <p className="w-full text-gray-700 font-light">
                          {seeds.dispersal_system}
                        </p>
                      </div>
                    </>
                  ) : (
                    <div className="text-gray-700 font-light p-6">
                      No hay datos.
                    </div>
                  )}
                  <div className="w-full font-semibold border-b-2 border-amber-600">
                    Hojas
                  </div>
                  {leaf !== null ? (
                    <>
                      <div className="w-full flex  items-center gap-6">
                        <p className="w-[40%] font-semibold">
                          Composicion de hoja
                        </p>
                        <p className="w-full text-gray-700 font-light">
                          {leaf.leaf_composition}
                        </p>
                      </div>
                      <div className="w-full flex  items-center gap-6">
                        <p className="w-[40%] font-semibold">
                          Posicionamiento de Hoja de tallo{" "}
                        </p>
                        <p className="w-full text-gray-700 font-light">
                          {leaf.stemLeaf_position}
                        </p>
                      </div>
                      <div className="w-full flex  items-center gap-6">
                        <p className="w-[40%] font-semibold">
                          Persistencia de hoja
                        </p>
                        <p className="w-full text-gray-700 font-light">
                          {leaf.leaf_persistence}
                        </p>
                      </div>
                      <div className="w-full flex  items-center gap-6">
                        <p className="w-[40%] font-semibold">
                          Atributos de hoja
                        </p>
                        <p className="w-full text-gray-700 font-light">
                          {leaf.leaf_attributes}
                        </p>
                      </div>
                    </>
                  ) : (
                    <div className="text-gray-700 font-light p-6">
                      No hay datos.
                    </div>
                  )}
                  <div className="w-full font-semibold border-b-2 border-amber-600">
                    Raiz y Tallo
                  </div>
                  {root !== null ? (
                    <>
                      <div className="w-full flex  items-center gap-6">
                        <p className="w-[40%] font-semibold">
                          Forma de reproduccion
                        </p>
                        <p className="w-full text-gray-700 font-light">
                          {root.reproduction_form}
                        </p>
                      </div>
                      <div className="w-full flex  items-center gap-6">
                        <p className="w-[40%] font-semibold">
                          Tipo de enraizamiento
                        </p>
                        <p className="w-full text-gray-700 font-light">
                          {root.rooting_type}
                        </p>
                      </div>
                      <div className="w-full flex  items-center gap-6">
                        <p className="w-[40%] font-semibold">
                          Atributos de raiz
                        </p>
                        <p className="w-full text-gray-700 font-light">
                          {root.root_attributes}
                        </p>
                      </div>
                      <div className="w-full flex  items-center gap-6">
                        <p className="w-[40%] font-semibold">
                          Color de corteza
                        </p>
                        <p className="w-full text-gray-700 font-light">
                          {stalk.bark_color}
                        </p>
                      </div>
                      <div className="w-full flex  items-center gap-6">
                        <p className="w-[40%] font-semibold">
                          Atributos de corteza
                        </p>
                        <p className="w-full text-gray-700 font-light">
                          {stalk.bark_atributes}
                        </p>
                      </div>
                    </>
                  ) : (
                    <div className="text-gray-700 font-light p-6">
                      No hay datos.
                    </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="etbotanica">
              <AccordionTrigger className="text-xl text-green-600 font-semibold">
                Etnobotanica
              </AccordionTrigger>
              <AccordionContent className="text-xl">
                {ethnobotany !== null ? (
                  <div className="w-full grid grid-cols-1 gap-4 justify-center items-center !m-0">
                    <div className="w-full flex  items-center gap-6">
                      <p className="w-[40%] font-semibold">Categoria</p>
                      <p className="w-full text-gray-700 font-light">
                        {ethnobotany.category}
                      </p>
                    </div>
                    <div className="w-full flex  items-center gap-6">
                      <p className="w-[40%] font-semibold">Detalle de uso</p>
                      <p className="w-full text-gray-700 font-light">
                        {ethnobotany.use_detail}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="text-gray-700 font-light p-6">
                    No hay datos.
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="ecologia">
              <AccordionTrigger className="text-xl text-green-600 font-semibold">
                Ecología
              </AccordionTrigger>
              <AccordionContent className="text-xl">
                {ecology !== null ? (
                  <div className="w-full grid grid-cols-1 gap-4 justify-center items-center !m-0">
                    <div className="w-full flex  items-center gap-6">
                      <p className="w-[40%] font-semibold">Origen</p>
                      <p className="w-full text-gray-700 font-light">
                        {ecology.origin}
                      </p>
                    </div>
                    <div className="w-full flex  items-center gap-6">
                      <p className="w-[40%] font-semibold">
                        Distribución geográfica
                      </p>
                      <p className="w-full text-gray-700 font-light">
                        {ecology.geo_distribution}
                      </p>
                    </div>
                    <div className="w-full flex  items-center gap-6">
                      <p className="w-[40%] font-semibold">Rango altitudinal</p>
                      <p className="w-full text-gray-700 font-light">
                        {ecology.altitudinal_range}
                      </p>
                    </div>
                    <div className="w-full flex  items-center gap-6">
                      <p className="w-[40%] font-semibold">
                        Estado de conservación
                      </p>
                      <p className="w-full text-gray-700 font-light">
                        {ecology.conservation_status}
                      </p>
                    </div>
                    <div className="w-full flex  items-center gap-6">
                      <p className="w-[40%] font-semibold">
                        Nivel de atracción de fauna
                      </p>
                      <p className="w-full text-gray-700 font-light">
                        {ecology.fauna_attraction}
                      </p>
                    </div>
                    <div className="w-full flex  items-center gap-6">
                      <p className="w-[40%] font-semibold">Fauna Asociada</p>
                      <ul className="w-full text-gray-700 font-light">
                        {ecology.associated_fauna !== undefined &&
                        ecology.associated_fauna.length !== 0 ? (
                          <li className="list-none">
                            <TooltipProvider>
                              {ecology.associated_fauna.map((fauna: any) => (
                                <Tooltip key={fauna}>
                                  <TooltipTrigger>
                                    {fauna.fauna_name}
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>{fauna.fauna_detail}</p>
                                  </TooltipContent>
                                </Tooltip>
                              ))}
                            </TooltipProvider>
                          </li>
                        ) : (
                          "No hay datos"
                        )}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="text-gray-700 font-light p-6">
                    No hay datos.
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="arboricultura">
              <AccordionTrigger className="text-xl text-green-600 font-semibold">
                Arboricultura
              </AccordionTrigger>
              <AccordionContent className="text-xl">
                {arboriculture !== null ? (
                  <div className="w-full grid grid-cols-1 gap-4 justify-center items-center !m-0">
                    <div className="w-full flex  items-center gap-6">
                      <p className="w-[40%] font-semibold">
                        Requerimientos de luz
                      </p>
                      <p className="w-full text-gray-700 font-light">
                        {arboriculture.light_requirements}
                      </p>
                    </div>
                    <div className="w-full flex  items-center gap-6">
                      <p className="w-[40%] font-semibold">
                        Usos en espacio público
                      </p>
                      <p className="w-full text-gray-700 font-light">
                        {arboriculture.public_spaceUse}
                      </p>
                    </div>
                    <div className="w-full flex  items-center gap-6">
                      <p className="w-[40%] font-semibold">
                        Limitaciones florales
                      </p>
                      <p className="w-full text-gray-700 font-light">
                        {arboriculture.flower_limitations}
                      </p>
                    </div>
                    <div className="w-full flex  items-center gap-6">
                      <p className="w-[40%] font-semibold">
                        Limitaciones frutales
                      </p>
                      <p className="w-full text-gray-700 font-light">
                        {arboriculture.fruit_limitations}
                      </p>
                    </div>
                    <div className="w-full flex  items-center gap-6">
                      <p className="w-[50%] font-semibold">Longevidad</p>
                      <p className="w-full text-gray-700 font-light">
                        {arboriculture.longevity}
                      </p>
                    </div>
                    <div className="w-full flex  items-center gap-6">
                      <p className="w-[50%] font-semibold">Plagas asociadas</p>
                      <p className="w-full text-gray-700 font-light">
                        {arboriculture.pests_diseases}
                      </p>
                    </div>
                    <div className="w-full flex  items-center gap-6">
                      <p className="w-[50%] font-semibold">
                        Tasa de crecimiento
                      </p>
                      <p className="w-full text-gray-700 font-light">
                        {arboriculture.growth_rate}
                      </p>
                    </div>
                    <div className="w-full flex  items-center gap-6">
                      <p className="w-[50%] font-semibold">Altura maxima</p>
                      <p className="w-full text-gray-700 font-light">
                        {arboriculture.maximum_height}
                      </p>
                    </div>
                    <div className="w-full flex  items-center gap-6">
                      <p className="w-[50%] font-semibold">Ancho de copa</p>
                      <p className="w-full text-gray-700 font-light">
                        {arboriculture.crown_width}
                      </p>
                    </div>
                    <div className="w-full flex  items-center gap-6">
                      <p className="w-[50%] font-semibold">Forma de copa</p>
                      <p className="w-full text-gray-700 font-light">
                        {arboriculture.crown_shape}
                      </p>
                    </div>
                    <div className="w-full flex  items-center gap-6">
                      <p className="w-[50%] font-semibold">DAP</p>
                      <p className="w-full text-gray-700 font-light">
                        {arboriculture.DAP}
                      </p>
                    </div>
                    <div className="w-full flex  items-center gap-6">
                      <p className="w-[50%] font-semibold">
                        Densidad de foliage
                      </p>
                      <p className="w-full text-gray-700 font-light">
                        {arboriculture.foliage_density}
                      </p>
                    </div>
                    <div className="w-full flex  items-center gap-6">
                      <p className="w-[50%] font-semibold">Tipo de suelo</p>
                      <p className="w-full text-gray-700 font-light">
                        {arboriculture.soil_type}
                      </p>
                    </div>
                    <div className="w-full flex  items-center gap-6">
                      <p className="w-1/2 font-semibold">Nivel de humedad</p>
                      <p className="w-full text-gray-700 font-light">
                        {arboriculture.humidity_zone}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="text-gray-700 font-light p-6">
                    No hay datos.
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
export default TabEspeciesInfo;
