import { PrismaClient, Prisma } from '@prisma/client'
const prisma = new PrismaClient()

const speciesData: Prisma.SpeciesCreateInput[] = [
    {
        name: "Caracolí",
        taxonomy: {
          create: {
            family: "Anacardiaceae",
            author: "(Bertero ex Kunth) Skeels",
            etymology: "Anacardium, del griego kardia, corazón, por la forma de su fruto; excelsum, epíteto latino que significa alta.",
            common_names: "Caracolí",
            bibliography: "Morales y Varón (2006), Alcaldía de Medellín (2011), Instituto de Ciencias Naturales UNAL (2004), Vásquez y Ramírez (2005), AMVA y UNAL (2014)"
          }
        },
        images: {
            create: {
                presentation_url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/26381411/medium.jpg',
            },
        },
        arboriculture: {
          create: {
            fauna_attraction: "Alta",
            light_requirements: "Media",
            growth_rate: "Media a Rápida",
            humidity_zone: "Seca, Húmeda",
            maximum_height: "30",
            crown_width: "Amplia (mayor que 14 m)",
            DAP: "300",
            foliage_density: "Alta",
            soil_type: "Tolera inundaciones periódicas y niveles freáticos altos",
            flower_limitations: "Ninguna",

          }
        },
        ethnobotany: {
          create: {
            altitudinal_range: "0 - 1000 msnm, 1001 - 1500 msnm, 1501 - 2000 msnm",
            geo_distribution: "Honduras a Ecuador; Venezuela",
            origin: "Nativa",
            conservation_status: "No evaluada"
          }
        },
        flower: {
          create: {
            floral_attributes: "5 pétalos pequeños",
            flowering_season: "No determinado",
            pollination_system: "No determinado"
          }
        },
        leaf: {
          create: {
            leaf_attributes: "Coriáceas, glabras",
            leaf_persistence: "Semicaducifolia"
          }
        },
        root: {
          create: {}
        },
        seeds: {
          create: {
            dispersal_system: "No determinado",
            seed_attributes: "Ninguna"
          }
        },
        stalk: {
          create: {}
        }
      },
      {
        name: "Guanábana",
        taxonomy: {
          create: {
            family: "Annonaceae",
            author: "L.",
            etymology: "Annona, del nombre vérnaculo en Haití de la especie; muricata, del latín muricatus que significa áspero y con muchas puntas, como su fruto.",
            common_names: "Guanábana",
            bibliography: "Morales y Varón (2013), Idárraga, Ortíz, Callejas y Merello (2013), Instituto de Ciencias Naturales UNAL (2004), SAO (2009), AMVA y UNAL (2014)"
          }
        },
        images: {
            create: {
                presentation_url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/26381411/medium.jpg',
            },
        },
        arboriculture: {
          create: {
            fauna_attraction: "Alta",
            light_requirements: "Sombra en estado juvenil",
            growth_rate: "Media",
            humidity_zone: "Seca, Húmeda",
            maximum_height: "12",
            crown_width: "Media (7 - 14 m)",
            DAP: "20",
            foliage_density: "Alta",
            soil_type: "Suelo profundo y bien drenado",
            flower_limitations: "Ninguna",

          }
        },
        ethnobotany: {
          create: {
            altitudinal_range: "0 - 1000 msnm",
            geo_distribution: "Neotrópico",
            origin: "Nativa",
            conservation_status: "No evaluada"
          }
        },
        flower: {
          create: {
            floral_attributes: "Miden 3 cm de ancho, carnosas y tiene tres ángulos por su tres pétalos",
            flowering_season: "Estacional",
            pollination_system: "No determinado"
          }
        },
        leaf: {
          create: {
            leaf_attributes: "Miden  15 cm de largo por 6 de ancho, con forma ovada y anchas",
            leaf_persistence: "Perenne"
          }
        },
        root: {
          create: {}
        },
        seeds: {
          create: {
            dispersal_system: "Aves",
            seed_attributes: "Pesados, Carnosos"
          }
        },
        stalk: {
          create: {}
        }
      },
      {
        name: "Totumo",
        taxonomy: {
          create: {
            family: "Bignoniaceae",
            author: "L.",
            etymology: "Crescentia por Pietro de Crescenzi, de Bologna; cujete, de su nombre nativo popular",
            common_names: "Totumo",
            bibliography: "Morales y Varón (2013), Morales y Varón (2006), Idárraga, Ortíz, Callejas y Merello (2013), SAO (2009), AMVA y UNAL (2014)"
          }
        },
        images: {
            create: {
                presentation_url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/26381411/medium.jpg',
            },
        },
        arboriculture: {
          create: {
            fauna_attraction: "Alta",
            light_requirements: "Alta",
            growth_rate: "Media a Rápida",
            humidity_zone: "Seca, Húmeda, Muy húmeda",
            maximum_height: "6",
            crown_width: "Media (7 - 14 m)",
            DAP: "25",
            foliage_density: "Baja",
            soil_type: "No determinado",
            flower_limitations: "Olor no agradable",

          }
        },
        ethnobotany: {
          create: {
            altitudinal_range: "0 - 1000 msnm, 1001 - 1500 msnm, 1501 - 2000 msnm",
            geo_distribution: "América tropical",
            origin: "Nativa",
            conservation_status: "Preocupación menor (LC)"
          }
        },
        flower: {
          create: {
            floral_attributes: "Miden 4 cm de largo por 2 cm de ancho, campanuladas y caulinares.",
            flowering_season: "Estacional",
            pollination_system: "Aves"
          }
        },
        leaf: {
          create: {
            leaf_attributes: "Miden 10 cm de largo por 2 cm de ancho, borde entero, con forma de espátula, lisas y coriáceas.",
            leaf_persistence: "Perenne"
          }
        },
        root: {
          create: {}
        },
        seeds: {
          create: {
            dispersal_system: "No determinado",
            seed_attributes: "Pesados"
          }
        },
        stalk: {
          create: {}
        }
      },
      {
        name: "Guayacán amarillo",
        taxonomy: {
          create: {
            family: "Bignoniaceae",
            author: "(Jacq.) S.O.Grose",
            etymology: "Handroanthus, en  honor al botánico brasileño Oswaldo Handro; chrysanthus, en latín significa flores doradas.",
            common_names: "Guayacán amarillo",
            bibliography: "Morales y Varón (2013), Gómez, Toro y Piedrahita (2013), SAO (2009), AMVA y UNAL (2014), Morales y Varón (2006), Alcaldía de Medellín (2011), Gómez (2011)"
          }
        },
        images: {
            create: {
                presentation_url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/26381411/medium.jpg',
            },
        },
        arboriculture: {
          create: {
            fauna_attraction: "Alta",
            light_requirements: "Alta",
            growth_rate: "Media a Rápida",
            humidity_zone: "Húmeda",
            maximum_height: "35",
            crown_width: "Media (7 - 14 m)",
            DAP: "100",
            foliage_density: "Media",
            soil_type: "Franco",
            flower_limitations: "Carnosas: al caer, afecta la movilidad de peatones",

          }
        },
        ethnobotany: {
          create: {
            altitudinal_range: "0 - 1000 msnm, 1001 - 1500 msnm, 1501 - 2000 msnm",
            geo_distribution: "México a Perú; Trinidad",
            origin: "Nativa",
            conservation_status: "Preocupación menor (LC)"
          }
        },
        flower: {
          create: {
            floral_attributes: "Miden de 5 a 7  cm de largo, campanuladas y vistosas",
            flowering_season: "Estacional",
            pollination_system: "Insectos, Aves"
          }
        },
        leaf: {
          create: {
            leaf_attributes: "Con 5 a 7 folíolos de margen entera o aserrada.",
            leaf_persistence: "Caducifolia"
          }
        },
        root: {
          create: {}
        },
        seeds: {
          create: {
            dispersal_system: "Anemocoria (viento), Zoocoria (animales)",
            seed_attributes: "Masivos: afecta movilidad de peatones y vehículos"
          }
        },
        stalk: {
          create: {}
        }
      },
      {
        name: "Guayacán rosado",
        taxonomy: {
          create: {
            family: "Bignoniaceae",
            author: "(Bertol.) Bertero ex A.DC.",
            etymology: "Tabebuia, nombre vérnaculo brasileño tabebuia o taiaveruia; rosea,del latín rosa, por el color rosado de sus flores.",
            common_names: "Guayacán rosado",
            bibliography: "Morales y Varón (2006), Morales y Varón (2013), Gómez, Toro y Piedrahita (2013), Vásquez y Ramírez (2005), Gómez (2010), SAO (2009), AMVA y UNAL (2014)"
          }
        },
        images: {
            create: {
                presentation_url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/26381411/medium.jpg',
            },
        },
        arboriculture: {
          create: {
            fauna_attraction: "Alta",
            light_requirements: "Alta",
            growth_rate: "Rápida",
            humidity_zone: "Húmeda, Muy húmeda",
            maximum_height: "40",
            crown_width: "Amplia (mayor que 14 m)",
            DAP: "100",
            foliage_density: "Media",
            soil_type: "Se desarrolla aún en suelos pobres y degradados, pero con suficiente humedad",
            flower_limitations: "Carnosas: al caer, afecta la movilidad de peatones",
          
        }
        },
        ethnobotany: {
          create: {
            altitudinal_range: "0 - 1000 msnm, 1001 - 1500 msnm, 1501 - 2000 msnm",
            geo_distribution: "México a Ecuador",
            origin: "Nativa",
            conservation_status: "Preocupación menor (LC)"
          }
        },
        flower: {
          create: {
            floral_attributes: "Miden 5 cm de largo, campanuladas",
            flowering_season: "Época seca",
            pollination_system: "Insectos, Aves"
          }
        },
        leaf: {
          create: {
            leaf_attributes: "Miden 30 cm de largo por 20 cm de ancho, con borde entero y con 5 folíolos",
            leaf_persistence: "Caducifolia"
          }
        },
        root: {
          create: {}
        },
        seeds: {
          create: {
            dispersal_system: "Aves, Anemocoria (viento)",
            seed_attributes: "Masivos: afecta movilidad de peatones y vehículos"
          }
        },
        stalk: {
          create: {}
        }
      },
      {
        name: "Achiote",
        taxonomy: {
          create: {
            family: "Bixaceae",
            author: "L.",
            etymology: "Bixa, latinización del portugués bixa; orellana, dedicado al explorador español Francisco de Orellana",
            common_names: "Achiote",
            bibliography: "Alcaldía de Medellín (2011), Idárraga, Ortíz, Callejas y Merello (2013), Instituto de Ciencias Naturales UNAL (2004), SAO (2009), AMVA y UNAL (2014)"
          }
        },
        images: {
            create: {
                presentation_url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/26381411/medium.jpg',
            },
        },
        arboriculture: {
          create: {
            fauna_attraction: "Media",
            light_requirements: "Alta",
            growth_rate: "Lenta",
            humidity_zone: "Seca, Húmeda, Muy húmeda",
            maximum_height: "10",
            crown_width: "Estrecha (menor que 7 m)",
            DAP: "30",
            foliage_density: "Media",
            soil_type: "Suelos húmedos y bien drenados",
            flower_limitations: "Ninguna"
          }
        },
        ethnobotany: {
          create: {
            altitudinal_range: "0 - 1000 msnm, 1001 - 1500 msnm, 1501 - 2000 msnm",
            geo_distribution: "Neotrópico; cultivada en los trópicos",
            origin: "Nativa",
            conservation_status: "No evaluada"
          }
        },
        flower: {
          create: {
            floral_attributes: "Miden 3 cm de diámetro, con 5 pétalos separados entre sí y con numerosos estambres",
            flowering_season: "Estacional",
            pollination_system: "Insectos"
          }
        },
        leaf: {
          create: {
            leaf_attributes: "Miden 18 cm de largo por 10 cm de ancho, borde entero y base acorazonada",
            leaf_persistence: "Perenne"
          }
        },
        root: {
          create: {}
        },
        seeds: {
          create: {
            dispersal_system: "No determinado",
            seed_attributes: "Ninguna"
          }
        },
        stalk: {
          create: {}
        }
      },
      {
        name: "Papayuelo",
        taxonomy: {
          create: {
            family: "Euphorbiaceae",
            author: "(Mill.) I.M.Johnst.",
            etymology: "-",
            common_names: "Papayuelo",
            bibliography: "Morales y Varón (2006), Idárraga, Ortíz, Callejas y Merello (2013), Instituto de Ciencias Naturales UNAL (2004)"
          }
        },
        images: {
            create: {
                presentation_url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/26381411/medium.jpg',
            },
        },
        arboriculture: {
          create: {
            fauna_attraction: "-",
            light_requirements: "Alta",
            growth_rate: "Rápida",
            humidity_zone: "Seca, Húmeda",
            maximum_height: "6",
            crown_width: "Media (7 - 14 m)",
            DAP: "15",
            foliage_density: "No determinado",
            soil_type: "Suelos bien drenados",
            flower_limitations: "Ninguna"            
          }
        },
        ethnobotany: {
          create: {
            altitudinal_range: "0 - 1000 msnm, 1001 - 1500 msnm, 1501 - 2000 msnm",
            geo_distribution: "México a Perú",
            origin: "Nativa",
            conservation_status: "No evaluada"
          }
        },
        flower: {
          create: {
            floral_attributes: "Flores aromáticas, numerosas y pequeñas.",
            flowering_season: "No determinado",
            pollination_system: "No determinado"
          }
        },
        leaf: {
          create: {
            leaf_attributes: "Hojas grandes, palmatilobuladas que miden  32 cm de largo y 30 cm de ancho, con numeros venas de color verde claro.",
            leaf_persistence: "Perenne"
          }
        },
        root: {
          create: {}
        },
        seeds: {
          create: {
            dispersal_system: "No determinado",
            seed_attributes: "Ninguna"
          }
        },
        stalk: {
          create: {}
        }
      },
      {
        name: "Pisquín, carbonero",
        taxonomy: {
          create: {
            family: "Fabaceae",
            author: "Britton",
            etymology: "Albizia, en honor al noble italiano Filippo de Albizzi, naturalista del siglo XVIII, quien introdujo en Europa las semillas de Albizia julibrissin, conocido como el árbol de seda; carbonaria, que significa carbón o tierra quemada",
            common_names: "Pisquín, carbonero",
            bibliography: "Morales y Varón (2006), Alcaldía de Medellín (2011), Gómez (2011), Gómez, Toro y Piedrahita (2013), SAO (2009)"
          }
        },
        images: {
            create: {
                presentation_url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/26381411/medium.jpg',
            },
        },
        arboriculture: {
          create: {
            fauna_attraction: "Media",
            light_requirements: "Alta",
            growth_rate: "Rápida",
            humidity_zone: "Húmeda",
            maximum_height: "25",
            crown_width: "Amplia (mayor que 14 m)",
            DAP: "60",
            foliage_density: "Media",
            soil_type: "Suelos bien drenados",
            flower_limitations: "Ninguna"
            
          }
        },
        ethnobotany: {
          create: {
            altitudinal_range: "0 - 1000 msnm, 1001 - 1500 msnm, 1501 - 2000 msnm",
            geo_distribution: "Centroamérica y N Suramérica",
            origin: "Nativa",
            conservation_status: "No evaluada"
          }
        },
        flower: {
          create: {
            floral_attributes: "Miden 1,5 cm de largo, con los estambres separados entre sí",
            flowering_season: "Estacional",
            pollination_system: "Insectos"
          }
        },
        leaf: {
          create: {
            leaf_attributes: "Miden 20 cm de largo por 15 cm de ancho, conformada por varias pinnas con muchos foliolulos pequeños; con estípulas libres",
            leaf_persistence: "Semicaducifolia"
          }
        },
        root: {
          create: {}
        },
        seeds: {
          create: {
            dispersal_system: "Aves",
            seed_attributes: "Ninguna"
          }
        },
        stalk: {
          create: {}
        }
      },
      {
        name: "Búcaro",
        taxonomy: {
          create: {
            family: "Fabaceae",
            author: "Lour.",
            etymology: "Erythrina, del griego eritros, rojo; fusca, que significa oscuro.",
            common_names: "Búcaro",
            bibliography: "Morales y Varón (2013), Idárraga, Ortíz, Callejas y Merello (2013), SAO (2009), AMVA y UNAL (2014)"
          }
        },
        images: {
            create: {
                presentation_url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/26381411/medium.jpg',
            },
        },
        arboriculture: {
          create: {
            fauna_attraction: "Alta",
            light_requirements: "Alta",
            growth_rate: "Rápida",
            humidity_zone: "Seca, Húmeda",
            maximum_height: "20",
            crown_width: "Amplia (mayor que 14 m)",
            DAP: "200",
            foliage_density: "Alta",
            soil_type: "Tolera niveles freáticos altos",
            flower_limitations: "Carnosas: al caer, afecta la movilidad de peatones",
          }
        },
        ethnobotany: {
          create: {
            altitudinal_range: "0 - 1000 msnm, 1001 - 1500 msnm, 1501 - 2000 msnm",
            geo_distribution: "América tropical; introducida en el Paleotrópico",
            origin: "Nativa",
            conservation_status: "Preocupación menor (LC)"
          }
        },
        flower: {
          create: {
            floral_attributes: "Miden 4 cm, cáliz verde ferrugíneo.",
            flowering_season: "Estacional",
            pollination_system: "Aves"
          }
        },
        leaf: {
          create: {
            leaf_attributes: "Miden 20 cm de largo por 15 cm de ancho,con folíolos elípticos, redondeados en la base y en el ápice; margen entera.",
            leaf_persistence: "Semicaducifolia"
          }
        },
        root: {
          create: {}
        },
        seeds: {
          create: {
            dispersal_system: "No determinado",
            seed_attributes: "Ninguna"
          }
        },
        stalk: {
          create: {}
        }
      },
      {
        name: "Cámbulo",
        taxonomy: {
          create: {
            family: "Fabaceae",
            author: "(Walp.) O.F.Cook",
            etymology: "Erythrina, del griego eritros, rojo; poeppigiana, en honor a Eduard Friedrich Poeppig, botánico y zoólogo que en sus exploraciones por Chile, Perú y Brasil, describió mas de 4000 especies de plantas.",
            common_names: "Cámbulo",
            bibliography: "Morales y Varón (2013), Morales y Varón (2006), Alcaldía de Medellín (2011), Gómez, Toro y Piedrahita (2013), Idárraga, Ortíz, Callejas y Merello (2013), Gómez (2010), SAO (2009), AMVA y UNAL (2014)"
          }
        },
        images: {
            create: {
                presentation_url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/26381411/medium.jpg',
            },
        },
        arboriculture: {
          create: {
            fauna_attraction: "Alta",
            light_requirements: "Alta",
            growth_rate: "Rápida",
            humidity_zone: "Húmeda, Muy húmeda",
            maximum_height: "35",
            crown_width: "Amplia (mayor que 14 m)",
            DAP: "100",
            foliage_density: "Media",
            soil_type: "Franco-arcillosa a franca, puede soportar anegamiento por cortos períodos",
            flower_limitations: "Carnosas: al caer, afecta la movilidad de peatones"
          }
        },
        ethnobotany: {
          create: {
            altitudinal_range: "0 - 1000 msnm, 1001 - 1500 msnm, 1501 - 2000 msnm",
            geo_distribution: "América tropical",
            origin: "Nativa",
            conservation_status: "Preocupación menor (LC)"
          }
        },
        flower: {
          create: {
            floral_attributes: "Miden 4 cm de largo por 3 cm de ancho, su pétalo superior es ancho y abierto, carnosas.",
            flowering_season: "Época seca",
            pollination_system: "Insectos, Aves nectarívoras"
          }
        },
        leaf: {
          create: {
            leaf_attributes: "Miden entre 20 y 30 cm de largo por 15 cm de ancho, folíolos con forma romboide u ovada, y glándulas en su base; con estípulas libres",
            leaf_persistence: "Caducifolia"
          }
        },
        root: {
          create: {}
        },
        seeds: {
          create: {
            dispersal_system: "Mamíferos, Baricoria (gravedad), Aves frugívoras",
            seed_attributes: "Ninguna"
          }
        },
        stalk: {
          create: {}
        }
      },
      {
        name: "Suribio",
        taxonomy: {
          create: {
            family: "Fabaceae",
            author: "(Willd.) Britton & Rose",
            etymology: "Zygia, del griego zugon, yugo, por la madera de algunas especies de este género que se utilizan para fabricar yugos; longifolia, del latín, longus, que significa largo, y folia, del latín folium, que hace referencia a la hoja",
            common_names: "Suribio",
            bibliography: "Morales y Varón (2013), Idárraga, Ortíz, Callejas y Merello (2013), SAO (2009), AMVA y UNAL (2014)"
          }
        },
        images: {
            create: {
                presentation_url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/26381411/medium.jpg',
            },
        },
        arboriculture: {
          create: {
            fauna_attraction: "Alta",
            light_requirements: "Alta",
            growth_rate: "Rápida",
            humidity_zone: "Húmeda",
            maximum_height: "20",
            crown_width: "Amplia (mayor que 14 m)",
            DAP: "20",
            foliage_density: "Alta",
            soil_type: "Tolera niveles freáticos altos",
            flower_limitations: "Ninguna"
          }
        },
        ethnobotany: {
          create: {
            altitudinal_range: "0 - 1000 msnm, 1001 - 1500 msnm, 1501 - 2000 msnm",
            geo_distribution: "Centroamérica a Venezuela, Brasil y Perú",
            origin: "Nativa",
            conservation_status: "Preocupación menor (LC)"
          }
        },
        flower: {
          create: {
            floral_attributes: "Miden 1, 5 cm de largo, estambres largos y numeroso",
            flowering_season: "Estacional",
            pollination_system: "No determinado"
          }
        },
        leaf: {
          create: {
            leaf_attributes: "Miden 10 cm de largo por 15 cm de ancho, glabras",
            leaf_persistence: "Semicaducifolia"
          }
        },
        root: {
          create: {}
        },
        seeds: {
          create: {
            dispersal_system: "Aves",
            seed_attributes: "Masivos: afecta movilidad de peatones y vehículos"
          }
        },
        stalk: {
          create: {}
        }
      },
      {
        name: "Balso",
        taxonomy: {
          create: {
            family: "Malvaceae",
            author: "(Cav. ex Lam.) Urb.",
            etymology: "Ochroma,del griego okros, amarillo pálido, por el color de las hojas de algunas especies del género; pyramidale, del latín pyramis, con forma de pirámide",
            common_names: "Balso",
            bibliography: "Morales y Varón (2006), Morales y Varón (2013), Alcaldía de Medellín (2011), Idárraga, Ortíz, Callejas y Merello (2013), Vásquez y Ramírez (2005), SAO (2009)"
          }
        },
        images: {
            create: {
                presentation_url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/26381411/medium.jpg',
            },
        },
        arboriculture: {
          create: {
            fauna_attraction: "Alta",
            light_requirements: "Alta",
            growth_rate: "Rápida",
            humidity_zone: "Seca, Húmeda",
            maximum_height: "40",
            crown_width: "Amplia (mayor que 14 m)",
            DAP: "150",
            foliage_density: "Media",
            soil_type: "Bien drenados",
            flower_limitations: "Carnosas: al caer, afecta la movilidad de peatones",

          }
        },
        ethnobotany: {
          create: {
            altitudinal_range: "0 - 1000 msnm, 1001 - 1500 msnm, 1501 - 2000 msnm",
            geo_distribution: "Neotrópico",
            origin: "Nativa",
            conservation_status: "No evaluada"
          }
        },
        flower: {
          create: {
            floral_attributes: "Miden 17 cm de largo, con 5 pétalos separados entre sí, cáliz tubular y ferrugíneo",
            flowering_season: "Estacional",
            pollination_system: "No determinado"
          }
        },
        leaf: {
          create: {
            leaf_attributes: "Miden 25 cm de diámetro, anchas, vellosas y base cordada",
            leaf_persistence: "Perenne"
          }
        },
        root: {
          create: {}
        },
        seeds: {
          create: {
            dispersal_system: "Mamíferos, Aves frugívoras, Anemocoria (viento)",
            seed_attributes: "Masivos: afecta movilidad de peatones y vehículos"
          }
        },
        stalk: {
          create: {}
        }
      },
      {
        name: "Cedro",
        taxonomy: {
          create: {
            family: "Meliaceae",
            author: "L.",
            etymology: "Cedrela, diminutivo de Cedrus, por su similaridad con la madera de este género; odorata, adjetivo latino que significa perfumado, oloroso, por su madera",
            common_names: "Cedro",
            bibliography: "Morales y Varón (2013), Morales y Varón (2006), Alcaldía de Medellín (2011), Gómez, Toro y Piedrahita (2013), Idárraga, Ortíz, Callejas y Merello (2013), Vásquez y Ramírez (2005), Gómez (2010), SAO (2009), AMVA y UNAL (2014)"
          }
        },
        images: {
            create: {
                presentation_url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/26381411/medium.jpg',
            },
        },
        arboriculture: {
          create: {
            fauna_attraction: "Alta",
            light_requirements: "Alta",
            growth_rate: "Rápida",
            humidity_zone: "Seca, Húmeda",
            maximum_height: "35",
            crown_width: "Media (7 - 14 m)",
            DAP: "100",
            foliage_density: "Alta",
            soil_type: "Bien drenado",
            flower_limitations: "Ninguna"
          }
        },
        ethnobotany: {
          create: {
            altitudinal_range: "0 - 1000 msnm, 1001 - 1500 msnm, 1501 - 2000 msnm",
            geo_distribution: "México a N Argentina",
            origin: "Nativa",
            conservation_status: "En peligro (EN)"
          }
        },
        flower: {
          create: {
            floral_attributes: "Las flores son unisexuales, pequeñas, con 4 sépalos en forma de copa, corola con apariencia tubular, 5 pétalos angostos.",
            flowering_season: "Época húmeda",
            pollination_system: "Insectos"
          }
        },
        leaf: {
          create: {
            leaf_attributes: "Miden entre  15 y 50 cm de longitud, con 5 a 11 pares de folíolos, lanceolados a oblongos, margen entero y ápice acuminado.",
            leaf_persistence: "Caducifolia"
          }
        },
        root: {
          create: {}
        },
        seeds: {
          create: {
            dispersal_system: "Anemocoria (viento), Aves frugívoras",
            seed_attributes: "Masivos: afecta movilidad de peatones y vehículos"
          }
        },
        stalk: {
          create: {}
        }
      },
      {
        name: "Guayabo",
        taxonomy: {
          create: {
            family: "Myrtaceae",
            author: "L.",
            etymology: "Psidium, del latín psidion que significa granada, por la apariencia de sus frutos; guajava, proviene de su nombre vernáculo en taino",
            common_names: "Guayabo",
            bibliography: "Morales y Varón (2013), Morales y Varón (2006), Idárraga, Ortíz, Callejas y Merello (2013), Carvajal (2007), Bartholomäus, De la Rosa, Santos, Acero, y Moosbrugger (1998), SAO (2009), AMVA y UNAL (2014)"
          }
        },
        images: {
            create: {
                presentation_url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/26381411/medium.jpg',
            },
        },
        arboriculture: {
          create: {
            fauna_attraction: "Alta",
            light_requirements: "Alta",
            growth_rate: "Rápida",
            humidity_zone: "Seca, Húmeda",
            maximum_height: "10",
            crown_width: "Media (7 - 14 m)",
            DAP: "30",
            foliage_density: "No determinado",
            soil_type: "Se adapta a una gran variedad de suelos",
            flower_limitations: "Ninguna"
          }
        },
        ethnobotany: {
          create: {
            altitudinal_range: "0 - 1000 msnm, 1001 - 1500 msnm, 1501 - 2000 msnm",
            geo_distribution: "Origen incierto, prob. Centroamérica; ampliamente cultivada en el Neotrópico",
            origin: "Nativa",
            conservation_status: "No evaluada"
          }
        },
        flower: {
          create: {
            floral_attributes: "Miden 1,5 cm de diámetro, pétalos separados, estambres numerosos y anteras amarillas",
            flowering_season: "Permanente",
            pollination_system: "No determinado"
          }
        },
        leaf: {
          create: {
            leaf_attributes: "Miden 8 cm de largo por 4 cm de ancho, con forma ovada, cartáceas, con puntos translucidos y borde entero",
            leaf_persistence: "Perenne"
          }
        },
        root: {
          create: {}
        },
        seeds: {
          create: {
            dispersal_system: "Aves",
            seed_attributes: "Masivos: afecta movilidad de peatones y vehículos, Carnosos"
          }
        },
        stalk: {
          create: {}
        }
      },
      {
        name: "Uvito de playa",
        taxonomy: {
          create: {
            family: "Polygonaceae",
            author: "(L.) L.",
            etymology: "Coccoloba, procede del griego kokkosque significa baya y lobos, que significa lóbulo, en alusión a sus frutos con apariencia de racimo de uvas; uvifer, del latín uva, más el sufijo –fe, llevar, en referencia sus racimos parecidos a las uvas",
            common_names: "Uvito de playa",
            bibliography: "Morales y Varón (2013), Morales y Varón (2006), Idárraga, Ortíz, Callejas y Merello (2013), Carvajal (2007), AMVA y UNAL (2014)"
          }
        },
        images: {
            create: {
                presentation_url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/26381411/medium.jpg',
            },
        },
        arboriculture: {
          create: {
            fauna_attraction: "-",
            light_requirements: "Alta",
            growth_rate: "Rápida",
            humidity_zone: "Seca, Húmeda",
            maximum_height: "15",
            crown_width: "Media (7 - 14 m)",
            DAP: "50",
            foliage_density: "No determinado",
            soil_type: "Ligero y bien drenado",
            flower_limitations: "Ninguna"
          }
        },
        ethnobotany: {
          create: {
            altitudinal_range: "0 - 1000 msnm, 1001 - 1500 msnm, 1501 - 2000 msnm",
            geo_distribution: "México a Brasil; Antillas",
            origin: "Nativa",
            conservation_status: "No evaluada"
          }
        },
        flower: {
          create: {
            floral_attributes: "Pequeñas con una longitud aproximada de 4 mm.",
            flowering_season: "No determinado",
            pollination_system: "No determinado"
          }
        },
        leaf: {
          create: {
            leaf_attributes: "Coriáceas, redondeadas, base acorazonada, con nervaduras y pecíolos rojizos.",
            leaf_persistence: "Perenne"
          }
        },
        root: {
          create: {}
        },
        seeds: {
          create: {
            dispersal_system: "No determinado",
            seed_attributes: "Ninguna"
          }
        },
        stalk: {
          create: {}
        }
      },
      {
        name: "Cacao",
        taxonomy: {
          create: {
            family: "Malvaceae",
            author: "L.",
            etymology: "Theobroma, en griego, alimento de los dioses; cacao, palabra relacionada con el lenguaje mixe-zoque que hablaban los olmecas antiguos y se refiere al nombre de la planta",
            common_names: "Cacao",
            bibliography: "Morales y Varón (2013), Morales y Varón (2006), Idárraga, Ortíz, Callejas y Merello (2013), AMVA y UNAL (2014)"
          }
        },
        images: {
            create: {
                presentation_url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/26381411/medium.jpg',
            },
        },
        arboriculture: {
          create: {
            fauna_attraction: "-",
            light_requirements: "Media",
            growth_rate: "Lenta a Media",
            humidity_zone: "Húmeda, Seca",
            maximum_height: "6",
            crown_width: "Estrecha (menor que 7 m)",
            DAP: "25",
            foliage_density: "Alta",
            soil_type: "Suelos profundos y fértiles",
            flower_limitations: "Ninguna"
          }
        },
        ethnobotany: {
          create: {
            altitudinal_range: "0 - 1000 msnm, 1001 - 1500 msnm, 1501 - 2000 msnm",
            geo_distribution: "Nativa de Amazonia; cultivada en los trópicos",
            origin: "Nativa",
            conservation_status: "No evaluada"
          }
        },
        flower: {
          create: {
            floral_attributes: "Diminutas, con 5 pétalos, se disponen a lo largo del tronco y las ramas",
            flowering_season: "No determinado",
            pollination_system: "No determinado"
          }
        },
        leaf: {
          create: {
            leaf_attributes: "Hojas grandes, colgantes, elípticas u oblongas, margen liso",
            leaf_persistence: "Perenne"
          }
        },
        root: {
          create: {}
        },
        seeds: {
          create: {
            dispersal_system: "No determinado",
            seed_attributes: "Pesados, Carnosos"
          }
        },
        stalk: {
          create: {}
        }
      },
      {
        name: "Ciruelo",
        taxonomy: {
          create: {
            family: "Anacardiaceae",
            author: "L.",
            etymology: "Spondias, uno de los géneros griegos del ciruelo; purpurea, en latín, resplandeciente.",
            common_names: "Ciruelo",
            bibliography: "Morales y Varón (2013), AMVA y UNAL (2014), Idárraga, Ortíz, Callejas y Merello (2013), SAO (2009), Bartholomäus, De la Rosa, Santos, Acero, y Moosbrugger (1998)"
          }
        },
        images: {
            create: {
                presentation_url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/26381411/medium.jpg',
            },
        },
        arboriculture: {
          create: {
            fauna_attraction: "Media",
            light_requirements: "Alta",
            growth_rate: "Rápida",
            humidity_zone: "Seca, Húmeda",
            maximum_height: "6",
            crown_width: "Media (7 - 14 m)",
            DAP: "40",
            foliage_density: "Media",
            soil_type: "Se adapta a una gran variedad de suelos, aún de baja fertilidad",
            flower_limitations: "Ninguna"
          }
        },
        ethnobotany: {
          create: {
            altitudinal_range: "0 - 1000 msnm, 1001 - 1500 msnm, 1501 - 2000 msnm",
            geo_distribution: "O México a S Colombia y Ecuador; introducida, cultivada y naturalizada en la región tropical del Nuevo y Viejo Mundo",
            origin: "Introducida",
            conservation_status: "No evaluada"
          }
        },
        flower: {
          create: {
            floral_attributes: "Flores pequeñas",
            flowering_season: "Estacional",
            pollination_system: "No determinado"
          }
        },
        leaf: {
          create: {
            leaf_attributes: "Hojas entre 10 a 20  cm de longitud,  hasta 12 pares de folíolos elípticos con olor fuerte y perfumado",
            leaf_persistence: "Caducifolia"
          }
        },
        root: {
          create: {}
        },
        seeds: {
          create: {
            dispersal_system: "Aves",
            seed_attributes: "Carnosos"
          }
        },
        stalk: {
          create: {}
        }
      },
      {
        name: "Nogal, nogal cafetero",
        taxonomy: {
          create: {
            family: "Boraginaceae",
            author: "(Ruiz & Pav.) Oken",
            etymology: "Cordia,nombre otorgado en honor al botánico alemán Valerius Cordus; alliodora, epíteto latino que significa con olor a ajo.",
            common_names: "Nogal, nogal cafetero",
            bibliography: "Morales y Varón (2013), AMVA y UNAL (2014), Vásquez y Ramírez (2005), Bartholomäus, De la Rosa, Santos, Acero, y Moosbrugger (1998), Gómez (2010), Gómez, Toro y Piedrahita (2013)"
          }
        },
        images: {
            create: {
                presentation_url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/26381411/medium.jpg',
            },
        },
        arboriculture: {
          create: {
            fauna_attraction: "Media",
            light_requirements: "Alta",
            growth_rate: "Rápida",
            humidity_zone: "Húmeda",
            maximum_height: "30",
            crown_width: "Media (7 - 14 m)",
            DAP: "90",
            foliage_density: "Media",
            soil_type: "Requiere suelos profundos, fértiles y bien drenados",
            flower_limitations: "Ninguna"
          }
        },
        ethnobotany: {
          create: {
            altitudinal_range: "0 - 1000 msnm, 1001 - 1500 msnm, 1501 - 2000 msnm",
            geo_distribution: "Argentina, Colombia, México",
            origin: "Nativa",
            conservation_status: "No determinado"
          }
        },
        flower: {
          create: {
            floral_attributes: "Miden 1 cm de diámetro, con vellos en el cáliz y con forma de campanilla.",
            flowering_season: "Estacional",
            pollination_system: "Anemófila (viento), Insectos"
          }
        },
        leaf: {
          create: {
            leaf_attributes: "Miden 9 cm de largo por 5 cm de ancho, textura áspera, borde dentado y vellosidades.",
            leaf_persistence: "Caducifolia"
          }
        },
        root: {
          create: {}
        },
        seeds: {
          create: {
            dispersal_system: "Anemocoria (viento)",
            seed_attributes: "Ninguna"
          }
        },
        stalk: {
          create: {}
        }
      },
      {
        name: "Guácimo",
        taxonomy: {
          create: {
            family: "Malvaceae",
            author: "Lam.",
            etymology: "Guazuma, epíteto latinizado del nombre vernáculo mexicano Guacima; ulmifolia, con hojas semejantes a las del género Ulmus de la familia Ulmaceae",
            common_names: "Guácimo",
            bibliography: "Morales y Varón (2013), AMVA y UNAL (2014), Carvajal (2007), Bartholomäus, De la Rosa, Santos, Acero, y Moosbrugger (1998)"
          }
        },
        images: {
            create: {
                presentation_url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/26381411/medium.jpg',
            },
        },
        arboriculture: {
          create: {
            fauna_attraction: "Media",
            light_requirements: "Alta",
            growth_rate: "Rápida",
            humidity_zone: "Seca, Húmeda",
            maximum_height: "20",
            crown_width: "Amplia (mayor que 14 m)",
            DAP: "60",
            foliage_density: "Media",
            soil_type: "No es exigente en suelos",
            flower_limitations: "Ninguna"
          }
        },
        ethnobotany: {
          create: {
            altitudinal_range: "0 - 1000 msnm, 1001 - 1500 msnm, 1501 - 2000 msnm",
            geo_distribution: "México a NE Argentina",
            origin: "Nativa",
            conservation_status: "Preocupación menor (LC)"
          }
        },
        flower: {
          create: {
            floral_attributes: "Flores pequeñas y  aromáticas, con 5 pétalos",
            flowering_season: "No determinado",
            pollination_system: "No determinado"
          }
        },
        leaf: {
          create: {
            leaf_attributes: "Hojas trinervadas, con pelos estrellados, borde aserrado; con estípulas",
            leaf_persistence: "Semicaducifolia"
          }
        },
        root: {
          create: {}
        },
        seeds: {
          create: {
            dispersal_system: "Zoocoria (animales)",
            seed_attributes: "Ninguna"
          }
        },
        stalk: {
          create: {}
        }
      },
      {
        name: "Chumbimbo, jaboncillo",
        taxonomy: {
          create: {
            family: "Sapindaceae",
            author: "L.",
            etymology: "Sapindus, del latín sap, jabón, e indus, indio, por el uso que le daban los indígenas como jabón; saponaria, por el contenido de saponina de sus frutos",
            common_names: "Chumbimbo, jaboncillo",
            bibliography: "Morales y Varón (2013), AMVA y UNAL (2014), SAO (2009), Carvajal (2007), Mahecha, Ovalle, Camelo, Rozo y Barrero (2012)"
          }
        },
        images: {
            create: {
                presentation_url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/26381411/medium.jpg',
            },
        },
        arboriculture: {
          create: {
            fauna_attraction: "Media",
            light_requirements: "Alta",
            growth_rate: "Media a Rápida",
            humidity_zone: "Seca",
            maximum_height: "20",
            crown_width: "Amplia (mayor que 14 m)",
            DAP: "70",
            foliage_density: "Media",
            soil_type: "No determinado",
            flower_limitations: "Ninguna"
        }
        },
        ethnobotany: {
          create: {
            altitudinal_range: "0 - 1000 msnm, 1001 - 1500 msnm, 1501 - 2000 msnm",
            geo_distribution: "Estados Unidos a N Argentina; Antillas; trópicos de África y Asia",
            origin: "Nativa",
            conservation_status: "No evaluada"
          }
        },
        flower: {
          create: {
            floral_attributes: "Flores pequeñas y aromáticas",
            flowering_season: "Estacional",
            pollination_system: "No determinado"
          }
        },
        leaf: {
          create: {
            leaf_attributes: "Hojas con folíolos de borde entero, inequiláteros, de base asimétrica",
            leaf_persistence: "Caducifolia"
          }
        },
        root: {
          create: {}
        },
        seeds: {
          create: {
            dispersal_system: "Aves",
            seed_attributes: "Tóxicos"
          }
        },
        stalk: {
          create: {}
        }
      },
      {
        name: "Cañafístula",
        taxonomy: {
          create: {
            family: "Fabaceae",
            author: "L.f.",
            etymology: "Cassia, nombre genérico que proviene del griego antiguo kassía, nombre de la planta laurácea Cinnamomum cassia, en los antiguos, y pasado a Leguminosas por Caesalpinio",
            common_names: "Cañafístula",
            bibliography: "AMVA y UNAL (2014), Alcaldía de Medellín (2011), Bartholomäus, De la Rosa, Santos, Acero, y Moosbrugger (1998)"
          }
        },
        images: {
            create: {
                presentation_url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/26381411/medium.jpg',
            },
        },
        arboriculture: {
          create: {
            fauna_attraction: "Alta",
            light_requirements: "No determinado",
            growth_rate: "Rápida",
            humidity_zone: "Seca, Húmeda",
            maximum_height: "20",
            crown_width: "Amplia (mayor que 14 m)",
            DAP: "70",
            foliage_density: "No determinado",
            soil_type: "Soporta suelos infértiles",
            flower_limitations: "Carnosas: al caer, afecta la movilidad de peatones, Masivas: al caer, afecta la movilidad de peatones y vehículos"
          }
        },
        ethnobotany: {
          create: {
            altitudinal_range: "0 - 1000 msnm, 1001 - 1500 msnm, 1501 - 2000 msnm",
            geo_distribution: "América tropical",
            origin: "Nativa",
            conservation_status: "Preocupación menor (LC)"
          }
        },
        flower: {
          create: {
            floral_attributes: "Con forma de copa, miden cerca de 1,2 cm de largo y con 5 pétalos ovados.",
            flowering_season: "Época seca",
            pollination_system: "Insectos"
          }
        },
        leaf: {
          create: {
            leaf_attributes: "Miden entre 20-30 cm de largo, folíolos 12-20 pares, de borde entero, glabros por la haz y pubescentes por el envés",
            leaf_persistence: "Caducifolia"
          }
        },
        root: {
          create: {}
        },
        seeds: {
          create: {
            dispersal_system: "Zoocoria (animales)",
            seed_attributes: "Pesados"
          }
        },
        stalk: {
          create: {}
        }
      },
      {
        name: "Cedro amarillo, iguamarillo",
        taxonomy: {
          create: {
            family: "Fabaceae",
            author: "(Kunth) Dugand",
            etymology: "Albizia, en honor al noble italiano Filippo de Albizzi, naturalista del siglo XVIII, quien introdujo en Europa las semillas de Albizia julibrissin, conocido como el árbol de seda",
            common_names: "Cedro amarillo, iguamarillo",
            bibliography: "AMVA y UNAL (2014), Morales y Varón (2013), Alcaldía de Medellín (2011), Vásquez y Ramírez (2005), Bartholomäus, De la Rosa, Santos, Acero, y Moosbrugger (1998), Gómez (2010), Gómez, Toro y Piedrahita (2013)"
          }
        },
        images: {
            create: {
                presentation_url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/26381411/medium.jpg',
            },
        },
        arboriculture: {
          create: {
            fauna_attraction: "Alta",
            light_requirements: "Alta",
            growth_rate: "Media",
            humidity_zone: "Seca, Húmeda",
            maximum_height: "25",
            crown_width: "Amplia (mayor que 14 m)",
            DAP: "70",
            foliage_density: "Media",
            soil_type: "Suelos aluviales con drenaje bueno a moderado",
            flower_limitations: "Ninguna"
          }
        },
        ethnobotany: {
          create: {
            altitudinal_range: "0 - 1000 msnm, 1001 - 1500 msnm, 1501 - 2000 msnm",
            geo_distribution: "Colombia, Ecuador, México, Islas del Caribe",
            origin: "Nativa",
            conservation_status: "No determinado"
          }
        },
        flower: {
          create: {
            floral_attributes: "Las flores miden 2,5 cm",
            flowering_season: "Estacional",
            pollination_system: "Insectos"
          }
        },
        leaf: {
          create: {
            leaf_attributes: "Folíolos oblongos a elípticos, y con vellos, especialmente por el envés",
            leaf_persistence: "Caducifolia"
          }
        },
        root: {
          create: {}
        },
        seeds: {
          create: {
            dispersal_system: "Anemocoria (viento), Hidrocoria (agua), Aves",
            seed_attributes: "Ninguna"
          }
        },
        stalk: {
          create: {}
        }
      },
      {
        name: "Huesito",
        taxonomy: {
          create: {
            family: "Malpighiaceae",
            author: "L.",
            etymology: "-",
            common_names: "Huesito",
            bibliography: "AMVA y UNAL (2014), Carvajal (2007)"
          }
        },
        images: {
            create: {
                presentation_url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/26381411/medium.jpg',
            },
        },
        arboriculture: {
          create: {
            fauna_attraction: "Media",
            light_requirements: "No determinado",
            growth_rate: "No determinado",
            humidity_zone: "No determinado",
            maximum_height: "3",
            crown_width: "Estrecha (menor que 7 m)",
            DAP: "30",
            foliage_density: "Media",
            soil_type: "No determinado",
            flower_limitations: "Ninguna"
          }
        },
        ethnobotany: {
          create: {
            altitudinal_range: "No determinado",
            geo_distribution: "Texas (Estados Unidos) a Perú y Venezuela; Antillas Mayores",
            origin: "Introducida",
            conservation_status: "No evaluada"
          }
        },
        flower: {
          create: {
            floral_attributes: "Flores con 5 pétalos y con pintas amarillas en la base",
            flowering_season: "No determinado",
            pollination_system: "Insectos"
          }
        },
        leaf: {
          create: {
            leaf_attributes: "Hojas  ubicadas al final de las ramas, con borde entero y brillantes",
            leaf_persistence: "Perenne"
          }
        },
        root: {
          create: {}
        },
        seeds: {
          create: {
            dispersal_system: "No determinado",
            seed_attributes: "Ninguna"
          }
        },
        stalk: {
          create: {}
        }
      },
      {
        name: "Cedro güino, mazábalo",
        taxonomy: {
          create: {
            family: "Meliaceae",
            author: "Aubl.",
            etymology: "-",
            common_names: "Cedro güino, mazábalo",
            bibliography: "Morales y Varón (2013)"
          }
        },images: {
            create: {
                presentation_url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/26381411/medium.jpg',
            },
        },
        arboriculture: {
          create: {
            fauna_attraction: "-",
            light_requirements: "Media",
            growth_rate: "Lenta",
            humidity_zone: "Húmeda, Muy húmeda",
            maximum_height: "40",
            crown_width: "Amplia (mayor que 14 m)",
            DAP: "120",
            foliage_density: "No determinado",
            soil_type: "-",
            flower_limitations: "Ninguna"
          }
        },
        ethnobotany: {
          create: {
            altitudinal_range: "0 - 1000 msnm",
            geo_distribution: "Belice a Ecuador, Perú y Brasil; Antillas",
            origin: "Nativa",
            conservation_status: "No evaluada"
          }
        },
        flower: {
          create: {
            floral_attributes: "No determinado",
            flowering_season: "Estacional",
            pollination_system: "Insectos"
          }
        },
        leaf: {
          create: {
            leaf_attributes: "No determinado",
            leaf_persistence: "Semicaducifolia"
          }
        },
        root: {
          create: {}
        },
        seeds: {
          create: {
            dispersal_system: "Baricoria (gravedad)",
            seed_attributes: "Pesados"
          }
        },
        stalk: {
          create: {}
        }
      },
      {
        name: "Cuipo, güipo, bonga",
        taxonomy: {
          create: {
            family: "Malvaceae",
            author: "(Humb. & Bonpl.) Kunth",
            etymology: "Cavanillesia, en honor a Antonio José Cavanilles, científico que le ayudó a Bonpland a conseguir el permiso del rey para venir a las colonias españolas en América; platanifolia, de hojas como el plátano",
            common_names: "Cuipo, güipo, bonga",
            bibliography: "Morales y Varón (2013)"
          }
        },images: {
            create: {
                presentation_url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/26381411/medium.jpg',
            },
        },
        arboriculture: {
          create: {
            fauna_attraction: "-",
            light_requirements: "Alta",
            growth_rate: "Media",
            humidity_zone: "Seca, Húmeda, Muy húmeda",
            maximum_height: "60",
            crown_width: "Media (7 - 14 m)",
            DAP: "400",
            foliage_density: "Media",
            soil_type: "-",
            flower_limitations: "Ninguna"
          }
        },
        ethnobotany: {
          create: {
            altitudinal_range: "0 - 1000 msnm",
            geo_distribution: "Desde Nicaragua hasta Perú",
            origin: "Nativa",
            conservation_status: "No evaluada"
          }
        },
        flower: {
          create: {
            floral_attributes: "En forma de campana y miden 3 cm de largo.",
            flowering_season: "Época seca",
            pollination_system: "No determinado"
          }
        },
        leaf: {
          create: {
            leaf_attributes: "Hojas entre 15 y 30 cm de largo y de 15 a 25 cm de ancho, lobuladas, base cordada.",
            leaf_persistence: "Caducifolia"
          }
        },
        root: {
          create: {}
        },
        seeds: {
          create: {
            dispersal_system: "Anemocoria (viento)",
            seed_attributes: "Ninguna"
          }
        },
        stalk: {
          create: {}
        }
      },
      {
        name: "Ébano ornamental",
        taxonomy: {
          create: {
            family: "Fabaceae",
            author: "-",
            etymology: "-",
            common_names: "Ébano ornamental",
            bibliography: "AMVA y UNAL (2014), Morales y Varón (2013)"
          }
        },
        images: {
            create: {
                presentation_url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/26381411/medium.jpg',
            },
        },
        arboriculture: {
          create: {
            fauna_attraction: "Alta",
            light_requirements: "Alta",
            growth_rate: "Media",
            humidity_zone: "Seca, Húmeda",
            maximum_height: "15",
            crown_width: "Media (7 - 14 m)",
            DAP: "60",
            foliage_density: "Media",
            soil_type: "Resiste suelos inundados",
            flower_limitations: "Ninguna"
          }
        },
        ethnobotany: {
          create: {
            altitudinal_range: "0 - 1000 msnm, 1001 - 1500 msnm",
            geo_distribution: "Desde Colombia hasta el norte de Argentina",
            origin: "Nativa",
            conservation_status: "No evaluada"
          }
        },
        flower: {
          create: {
            floral_attributes: "Flores papilionadas",
            flowering_season: "No determinado",
            pollination_system: "No determinado"
          }
        },
        leaf: {
          create: {
            leaf_attributes: "Folíolos alternos, oblongos u obovados y con estípulas, con fuerte olor a frijól",
            leaf_persistence: "Caducifolia"
          }
        },
        root: {
          create: {}
        },
        seeds: {
          create: {
            dispersal_system: "No determinado",
            seed_attributes: "Ninguna"
          }
        },
        stalk: {
          create: {}
        }
      },
      {
        name: "Guanábano de playa",
        taxonomy: {
          create: {
            family: "Annonaceae",
            author: "L.",
            etymology: "Annona, del nombre vernáculo en Haití de la especie; glabra, por la superficie lisa de sus hojas, sin indumento",
            common_names: "Guanábano de playa",
            bibliography: "Monaco Nature Encyclopedia"
          }
        },
        images: {
            create: {
                presentation_url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/26381411/medium.jpg',
            },
        },
        arboriculture: {
          create: {
            fauna_attraction: "Media",
            light_requirements: "Alta",
            growth_rate: "Rápida",
            humidity_zone: "Húmeda",
            maximum_height: "12",
            crown_width: "Estrecha (menor que 7 m)",
            DAP: "20",
            foliage_density: "Media",
            soil_type: "Tolerante a suelos inundados, no es resistente a la sequía",
            flower_limitations: "Ninguna"
          }
        },
        ethnobotany: {
          create: {
            altitudinal_range: "0 - 1000 msnm",
            geo_distribution: "Sur de Estados Unidos a Brasil, Antillas, África",
            origin: "Nativa",
            conservation_status: "No evaluada"
          }
        },
        flower: {
          create: {
            floral_attributes: "Con 3 sépalos y 6 pétalos",
            flowering_season: "Época húmeda",
            pollination_system: "Zoófila (animales)"
          }
        },
        leaf: {
          create: {
            leaf_attributes: "Miden 4-13 cm de largo y 3 - 6 de ancho, glabras, margen entero",
            leaf_persistence: "Semicaducifolia"
          }
        },
        root: {
          create: {}
        },
        seeds: {
          create: {
            dispersal_system: "Zoocoria (animales)",
            seed_attributes: "Ninguna"
          }
        },
        stalk: {
          create: {}
        }
      }      
]

async function seed(){
    for (const species of speciesData) {
        const user = await prisma.species.create({
            data: species,
        })
    }
}
seed()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async(e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })