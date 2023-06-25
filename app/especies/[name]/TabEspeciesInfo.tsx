"use client";
import { Tabs } from "flowbite-react";
import CarouselImages from "@/app/components/carousel/CarouselImages";

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
      <div className="w-full grid grid-cols-1 p-2 md:grid-cols-2 justify-center">
        <CarouselImages
          slides={images}
          style="w-full col-span-1 rounded-md bg-[#f8f8f8]"
        />
        <div className="col-span-1 w-full"></div>
      </div>
      <Tabs.Group
        className="tab w-full my-4 px-2 flex justify-between flex-wrap items-center"
        aria-label="Tabs"
        style="underline"
      >
        <Tabs.Item active title="Taxonomia" className="w-full">
          <div className="flex flex-col w-full items-center justify-center mx-2 p-2">
            {taxonomy !== null ? (
              <table className=" w-[80%] overflow-x-auto shadow-md border-[#e8e6e2] border p-4">
                <tbody className="">
                  <tr className="border-b border-b-[#e8e6e2]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Familia
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {taxonomy.family.family}
                    </td>
                  </tr>
                  <tr className="border-b border-b-[#e8e6e3]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Genero
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {taxonomy.genus}
                    </td>
                  </tr>
                  <tr className="border-b border-b-[#e8e6e3]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Especie
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {taxonomy.tSpecies}
                    </td>
                  </tr>
                  <tr className="border-b border-b-[#e8e6e3]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Subespecie
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {taxonomy.subspecies}
                    </td>
                  </tr>
                  <tr className="border-b border-b-[#e8e6e3]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Variedad
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {taxonomy.variety}
                    </td>
                  </tr>
                  <tr className="border-b border-b-[#e8e6e3]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Nombres comunes
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {taxonomy.common_names}
                    </td>
                  </tr>
                  <tr className="border-b border-b-[#e8e6e3]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Autores
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {taxonomy.author}
                    </td>
                  </tr>
                  <tr className="border-b border-b-[#e8e6e3]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Sinonimos
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {taxonomy.synonyms.length !== 0 ? (
                        <ul className="list-disc list-inside">
                          {taxonomy.synonyms.map((synonym: any) => (
                            <li key={synonym}>{synonym.synonym_name}</li>
                          ))}
                        </ul>
                      ) : (
                        <p>No hay datos</p>
                      )}
                    </td>
                  </tr>
                  <tr className="border-b border-b-[#e8e6e3]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Etimologia
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {taxonomy.etymology}
                    </td>
                  </tr>
                  <tr className="border-b border-b-[#e8e6e3]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Habito de crecimiento
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {taxonomy.growth_habit}
                    </td>
                  </tr>
                  <tr className="border-b border-b-[#e8e6e3]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Bibliografia
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {taxonomy.bibliography.length !== 0 ? (
                        <ul className="list-disc list-inside">
                          {taxonomy.bibliography.map((bibliography: any) => (
                            <li key={bibliography}>
                              {bibliography.authors}{" "}
                              {bibliography.publication_year}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p>No hay datos</p>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <div className="text-gray-700 font-light p-6">No hay datos.</div>
            )}
          </div>
        </Tabs.Item>
        <Tabs.Item title="Detalles" className="w-full">
          <div className="flex flex-col w-full items-center justify-center mx-2 p-2 gap-4">
            <h2 className="w-[80%] p-4 text-lg font-semibold uppercase border-b border-b-amber-600">
              Flor
            </h2>
            {flower !== null ? (
              <table className=" w-[80%] overflow-x-auto shadow-md border-[#e8e6e2] border p-4">
                <tbody className="">
                  <tr className="border-b border-b-[#e8e6e2]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Color
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {flower.flower_color}
                    </td>
                  </tr>
                  <tr className="border-b border-b-[#e8e6e2]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Arreglo de la flor
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {flower.flower_arrangement}
                    </td>
                  </tr>
                  <tr className="border-b border-b-[#e8e6e2]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Temporada de florecimiento
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {flower.flowering_season}
                    </td>
                  </tr>
                  <tr className="border-b border-b-[#e8e6e2]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Meses de florecimiento
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {flower.flowering_months}
                    </td>
                  </tr>
                  <tr className="border-b border-b-[#e8e6e2]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Sistema de polinizacion
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {flower.pollination_system}
                    </td>
                  </tr>
                  <tr className="border-b border-b-[#e8e6e2]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Atributos florales
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {flower.floral_attributes}
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <div className="text-gray-700 font-light p-6">No hay datos.</div>
            )}
            <h2 className="w-[80%] p-4 text-lg font-semibold uppercase border-b border-b-amber-600">
              Semillas y Frutos
            </h2>
            {seeds !== null ? (
              <table className=" w-[80%] overflow-x-auto shadow-md border-[#e8e6e2] border p-4">
                <tbody className="">
                  <tr className="border-b border-b-[#e8e6e2]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Tipo de fruto
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {seeds.fruitType}
                    </td>
                  </tr>
                  <tr className="border-b border-b-[#e8e6e2]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Meses de fructificacion
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {seeds.fruiting_months}
                    </td>
                  </tr>
                  <tr className="border-b border-b-[#e8e6e2]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Atributos frutales
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {seeds.fruit_attributes}
                    </td>
                  </tr>
                  <tr className="border-b border-b-[#e8e6e2]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Atributos de semilla
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {seeds.seed_attributes}
                    </td>
                  </tr>
                  <tr className="border-b border-b-[#e8e6e2]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Sistema de dispersion de semillas
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {seeds.dispersal_system}
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <div className="text-gray-700 font-light p-6">No hay datos.</div>
            )}
            <h2 className="w-[80%] p-4 text-lg font-semibold uppercase border-b border-b-amber-600">
              Hojas
            </h2>
            {leaf !== null ? (
              <table className=" w-[80%] overflow-x-auto shadow-md border-[#e8e6e2] border p-4">
                <tbody className="">
                  <tr className="border-b border-b-[#e8e6e2]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Composicion de hoja
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {leaf.leaf_composition}
                    </td>
                  </tr>
                  <tr className="border-b border-b-[#e8e6e2]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Posicionamiento de Hoja de tallo{" "}
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {leaf.stemLeaf_position}
                    </td>
                  </tr>
                  <tr className="border-b border-b-[#e8e6e2]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Persistencia de hoja
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {leaf.leaf_persistence}
                    </td>
                  </tr>
                  <tr className="border-b border-b-[#e8e6e2]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Atributos de hoja
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {leaf.leaf_attributes}
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <div className="text-gray-700 font-light p-6">No hay datos.</div>
            )}
            <h2 className="w-[80%] p-4 text-lg font-semibold uppercase border-b border-b-amber-600">
              Raiz
            </h2>
            {root !== null ? (
              <table className=" w-[80%] overflow-x-auto shadow-md border-[#e8e6e2] border p-4">
                <tbody className="">
                  <tr className="border-b border-b-[#e8e6e2]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Forma de reproduccion
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {root.reproduction_form}
                    </td>
                  </tr>
                  <tr className="border-b border-b-[#e8e6e2]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Tipo de enraizamiento
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {root.rooting_type}
                    </td>
                  </tr>
                  <tr className="border-b border-b-[#e8e6e2]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Atributos de raiz
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {root.root_attributes}
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <div className="text-gray-700 font-light p-6">No hay datos.</div>
            )}
            <h2 className="w-[80%] p-4 text-lg font-semibold uppercase border-b border-b-amber-600">
              Tallo
            </h2>
            {stalk !== null ? (
              <table className=" w-[80%] overflow-x-auto shadow-md border-[#e8e6e2] border p-4">
                <tbody className="">
                  <tr className="border-b border-b-[#e8e6e2]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Color de corteza
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {stalk.barkColor}
                    </td>
                  </tr>
                  <tr className="border-b border-b-[#e8e6e2]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Atributos de corteza
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {stalk.bark_attributes}
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <div className="text-gray-700 font-light p-6">No hay datos.</div>
            )}
          </div>
        </Tabs.Item>
        <Tabs.Item title="Etnobotanica" className="w-full">
          <div className="flex flex-col w-full items-center justify-center mx-2 p-2">
            {ethnobotany !== null ? (
              <table className=" w-[80%] overflow-x-auto shadow-md border-[#e8e6e2] border p-4">
                <tbody className="">
                  <tr className="border-b border-b-[#e8e6e2]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Categorias de uso
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {ethnobotany.category}
                    </td>
                  </tr>
                  <tr className="border-b border-b-[#e8e6e2]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Detalles de uso
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {ethnobotany.use_detail}
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <div className="text-gray-700 font-light p-6">No hay datos.</div>
            )}
          </div>
        </Tabs.Item>
        <Tabs.Item title="Ecologia" className="w-full">
          <div className="flex flex-col w-full items-center justify-center mx-2 p-2">
            {ecology !== null ? (
              <table className=" w-[80%] overflow-x-auto shadow-md border-[#e8e6e2] border p-4">
                <tbody>
                  <tr className="border-b border-b-[#e8e6e2]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Rango altitudinal
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {ecology.altitudinal_range}
                    </td>
                  </tr>
                  <tr className="border-b border-b-[#e8e6e2]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Distribucion geografica
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {ecology.geo_distribution}
                    </td>
                  </tr>
                  <tr className="border-b border-b-[#e8e6e2]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Origen
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {ecology.origin}
                    </td>
                  </tr>
                  <tr className="border-b border-b-[#e8e6e2]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Estado de conservacion
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {ecology.conservation_status}
                    </td>
                  </tr>
                  <tr className="border-b border-b-[#e8e6e2]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Nivel de atraccion de fauna
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {ecology.fauna_attraction}
                    </td>
                  </tr>
                  <tr className="border-b border-b-[#e8e6e2]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Fauna asociada
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {ecology.associated_fauna !== undefined &&
                      ecology.associated_fauna.length !== 0 ? (
                        <ul className="list-disc list-inside">
                          {ecology.associated_fauna.map((fauna: any) => (
                            <li key={fauna}>{fauna.fauna_name}</li>
                          ))}
                        </ul>
                      ) : (
                        <p>No hay datos</p>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <div className="text-gray-700 font-light p-6">No hay datos.</div>
            )}
          </div>
        </Tabs.Item>
        <Tabs.Item title="Arboricultura" className="w-full">
          <div className="flex flex-col w-full items-center justify-center mx-2 p-2">
            {arboriculture !== null ? (
              <table className=" w-[80%] overflow-x-auto shadow-md border-[#e8e6e2] border p-4">
                <tbody>
                  <tr className="border-b border-b-[#e8e6e2]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Usos en espacio publico
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {arboriculture.public_spaceUse}
                    </td>
                  </tr>
                  <tr className="border-b border-b-[#e8e6e2]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Limitaciones florales
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {arboriculture.flower_limitations}
                    </td>
                  </tr>
                  <tr className="border-b border-b-[#e8e6e2]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Limitaciones frutas
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {arboriculture.fruit_limitations}
                    </td>
                  </tr>
                  <tr className="border-b border-b-[#e8e6e2]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Longevidad
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {arboriculture.longevity}
                    </td>
                  </tr>
                  <tr className="border-b border-b-[#e8e6e2]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Plagas y enfermedades
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {arboriculture.pests_diseases}
                    </td>
                  </tr>
                  <tr className="border-b border-b-[#e8e6e2]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Requerimientos de luz
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {arboriculture.light_requirements}
                    </td>
                  </tr>
                  <tr className="border-b border-b-[#e8e6e2]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Tasa de crecimiento
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {arboriculture.growth_rate}
                    </td>
                  </tr>
                  <tr className="border-b border-b-[#e8e6e2]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Altura maxima
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {arboriculture.maximum_height}
                    </td>
                  </tr>
                  <tr className="border-b border-b-[#e8e6e2]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Ancho de la copa
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {arboriculture.crown_width}
                    </td>
                  </tr>
                  <tr className="border-b border-b-[#e8e6e2]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Forma de la copa
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {arboriculture.crown_shape}
                    </td>
                  </tr>
                  <tr className="border-b border-b-[#e8e6e2]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      DAP
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {arboriculture.DAP}
                    </td>
                  </tr>
                  <tr className="border-b border-b-[#e8e6e2]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Densidad de foliaje
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {arboriculture.foliage_density}
                    </td>
                  </tr>
                  <tr className="border-b border-b-[#e8e6e2]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Tipo de suelo
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {arboriculture.soil_type}
                    </td>
                  </tr>
                  <tr className="border-b border-b-[#e8e6e2]">
                    <td className="w-[40%] text-green-600 font-semibold uppercase p-6">
                      Humedad
                    </td>
                    <td className="w-[60%] text-gray-700 font-light p-6">
                      {arboriculture.humidity_zone}
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <div className="text-gray-700 font-light p-6">No hay datos.</div>
            )}
          </div>
        </Tabs.Item>
      </Tabs.Group>
    </div>
  );
};
export default TabEspeciesInfo;
