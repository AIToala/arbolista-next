import {
  ConservationStatus,
  CrownWidth,
  FloweringSeason,
  GrowthRate,
  LeafPersistence,
  LightRequirement,
  PriorityLevel,
  PrismaClient,
  type Prisma,
} from "@prisma/client";
const prisma = new PrismaClient();

const speciesData: Prisma.SpeciesCreateInput[] = [
  {
    name: "Anacardium excelsum",
    taxonomy: {
      create: {
        family: { connect: { id: 1 } },
        author: "(Bertero ex Kunth) Skeels",
        etymology:
          "Anacardium, del griego kardia, corazón, por la forma de su fruto; excelsum, epíteto latino que significa alta.",
        common_names: "Caracolí",
        bibliography: {
          create: [
            {
              authors: "Morales y Varon",
              publication_year: "2006",
            },
            {
              authors: "Alcaldia de Medellin",
              publication_year: "2011",
            },
          ],
        },
      },
    },
    images: {
      create: {
        presentation_url:
          "https://inaturalist-open-data.s3.amazonaws.com/photos/194104132/large.jpeg",
      },
    },
    arboriculture: {
      create: {
        light_requirements: LightRequirement.ALTA,
        growth_rate: GrowthRate.MEDIA_RAPIDA,
        humidity_zone: "Seca, Humeda",
        maximum_height: 30,
        crown_width: CrownWidth.AMPLIA,
        DAP: 300,
        foliage_density: PriorityLevel.ALTO,
        soil_type: "Tolera inundaciones periódicas y niveles freáticos altos",
        flower_limitations: "Ninguna",
      },
    },
    ecology: {
      create: {
        altitudinal_range: "0 - 1000 msnm, 1001 - 1500 msnm, 1501 - 2000 msnm",
        geo_distribution: "Honduras a Ecuador; Venezuela",
        conservation_status: ConservationStatus.NE,
        fauna_attraction: PriorityLevel.ALTO,
      },
    },
    flower: {
      create: {
        floral_attributes: "5 pétalos pequeños",
      },
    },
    leaf: {
      create: {
        leaf_attributes: "Coriáceas, glabras",
        leaf_persistence: LeafPersistence.SEMICADUCIFOLIA,
      },
    },
    root: {
      create: {},
    },
    seeds: {
      create: {
        seed_attributes: "Ninguna",
      },
    },
    stalk: {
      create: {},
    },
  },
  {
    name: "Annona muricata",
    taxonomy: {
      create: {
        family: { connect: { id: 2 } },
        author: "L.",
        etymology:
          "Annona, del nombre vérnaculo en Haití de la especie; muricata, del latín muricatus que significa áspero y con muchas puntas, como su fruto.",
        common_names: "Guanábana",
        bibliography: {
          create: [
            {
              authors: "Morales y Varon",
              publication_year: "2013",
            },
            {
              authors: "Idarraga, Ortiz, Callejas y Merello",
              publication_year: "2013",
            },
          ],
        },
      },
    },
    images: {
      create: {
        presentation_url:
          "https://static.inaturalist.org/photos/179383026/large.jpeg",
      },
    },
    arboriculture: {
      create: {
        light_requirements: LightRequirement.SOMBRA_JUVENIL,
        growth_rate: GrowthRate.MEDIA,
        humidity_zone: "Seca, Humeda",
        maximum_height: 12,
        crown_width: CrownWidth.MEDIA,
        DAP: 20,
        foliage_density: PriorityLevel.ALTO,
        soil_type: "Suelo profundo y bien drenado",
        flower_limitations: "Ninguna",
      },
    },
    ecology: {
      create: {
        altitudinal_range: "0 - 1000 msnm",
        geo_distribution: "Neotrópico",
        conservation_status: ConservationStatus.NE,
        fauna_attraction: PriorityLevel.ALTO,
      },
    },
    flower: {
      create: {
        floral_attributes:
          "Miden 3 cm de ancho, carnosas y tiene tres ángulos por su tres pétalos",
        flowering_season: FloweringSeason.ESTACIONAL,
      },
    },
    leaf: {
      create: {
        leaf_attributes:
          "Miden  15 cm de largo por 6 de ancho, con forma ovada y anchas",
        leaf_persistence: LeafPersistence.PERENNE,
      },
    },
    root: {
      create: {},
    },
    seeds: {
      create: {
        dispersal_system: "Aves",
        seed_attributes: "Pesados, Carnosos",
      },
    },
    stalk: {
      create: {},
    },
  },
  {
    name: "Crescentia cujete",
    taxonomy: {
      create: {
        family: { connect: { id: 13 } },
        author: "L.",
        etymology:
          "Crescentia por Pietro de Crescenzi, de Bologna; cujete, de su nombre nativo popular",
        common_names: "Totumo",
        bibliography: {
          create: {
            authors: "Morales y Varon",
            publication_year: "2013",
          },
        },
      },
    },
    images: {
      create: {
        presentation_url:
          "https://inaturalist-open-data.s3.amazonaws.com/photos/128818774/large.jpg",
      },
    },
    arboriculture: {
      create: {
        light_requirements: LightRequirement.ALTA,
        growth_rate: GrowthRate.MEDIA_RAPIDA,
        humidity_zone: "Seca, Humeda",
        maximum_height: 6,
        crown_width: CrownWidth.MEDIA,
        DAP: 25,
        foliage_density: PriorityLevel.BAJO,

        flower_limitations: "Olor no agradable",
      },
    },
    ecology: {
      create: {
        altitudinal_range: "0 - 1000 msnm, 1001 - 1500 msnm, 1501 - 2000 msnm",
        geo_distribution: "América tropical",
        fauna_attraction: PriorityLevel.ALTO,
        conservation_status: ConservationStatus.LC,
      },
    },
    flower: {
      create: {
        floral_attributes:
          "Miden 4 cm de largo por 2 cm de ancho, campanuladas y caulinares.",
        flowering_season: FloweringSeason.ESTACIONAL,
        pollination_system: "Aves",
      },
    },
    leaf: {
      create: {
        leaf_attributes:
          "Miden 10 cm de largo por 2 cm de ancho, borde entero, con forma de espátula, lisas y coriáceas.",
        leaf_persistence: LeafPersistence.PERENNE,
      },
    },
    root: {
      create: {},
    },
    seeds: {
      create: {
        seed_attributes: "Pesados",
      },
    },
    stalk: {
      create: {},
    },
  },
  {
    name: "Handroanthus chrysanthus",
    taxonomy: {
      create: {
        family: { connect: { id: 13 } },
        author: "(Jacq.) S.O.Grose",
        etymology:
          "Handroanthus, en  honor al botánico brasileño Oswaldo Handro; chrysanthus, en latín significa flores doradas.",
        common_names: "Guayacán amarillo",
        bibliography: {
          create: [
            {
              authors: "Morales y Varon",
              publication_year: "2013",
            },
          ],
        },
      },
    },
    images: {
      create: {
        presentation_url:
          "https://inaturalist-open-data.s3.amazonaws.com/photos/259126238/large.jpg",
      },
    },
    arboriculture: {
      create: {
        light_requirements: LightRequirement.ALTA,
        growth_rate: GrowthRate.MEDIA_RAPIDA,
        humidity_zone: "Humeda",
        maximum_height: 35,
        crown_width: CrownWidth.MEDIA,
        DAP: 100,
        foliage_density: PriorityLevel.MEDIO,
        soil_type: "Franco",
        flower_limitations:
          "Carnosas: al caer, afecta la movilidad de peatones",
      },
    },
    ecology: {
      create: {
        altitudinal_range: "0 - 1000 msnm, 1001 - 1500 msnm, 1501 - 2000 msnm",
        geo_distribution: "México a Perú; Trinidad",
        fauna_attraction: PriorityLevel.ALTO,
        conservation_status: ConservationStatus.LC,
      },
    },
    flower: {
      create: {
        floral_attributes:
          "Miden de 5 a 7  cm de largo, campanuladas y vistosas",
        flowering_season: FloweringSeason.ESTACIONAL,
        pollination_system: "Insectos, Aves",
      },
    },
    leaf: {
      create: {
        leaf_attributes: "Con 5 a 7 folíolos de margen entera o aserrada.",
        leaf_persistence: LeafPersistence.CADUCIFOLIA,
      },
    },
    root: {
      create: {},
    },
    seeds: {
      create: {
        dispersal_system: "Anemocoria, Zoocoria",
        seed_attributes: "Masivos: afecta movilidad de peatones y vehículos",
      },
    },
    stalk: {
      create: {},
    },
  },
  {
    name: "Tabebuia rosea",
    taxonomy: {
      create: {
        family: { connect: { id: 13 } },
        author: "(Bertol.) Bertero ex A.DC.",
        etymology:
          "Tabebuia, nombre vérnaculo brasileño tabebuia o taiaveruia; rosea,del latín rosa, por el color rosado de sus flores.",
        common_names: "Guayacán rosado",
        bibliography: {
          create: [
            {
              authors: "Morales y Varon",
              publication_year: "2013",
            },
          ],
        },
      },
    },
    images: {
      create: {
        presentation_url:
          "https://inaturalist-open-data.s3.amazonaws.com/photos/33825536/large.jpg",
      },
    },
    arboriculture: {
      create: {
        light_requirements: LightRequirement.ALTA,
        growth_rate: GrowthRate.RAPIDA,
        humidity_zone: "Humeda, Muy humeda",
        maximum_height: 40,
        crown_width: CrownWidth.AMPLIA,
        DAP: 100,
        foliage_density: PriorityLevel.MEDIO,
        soil_type:
          "Se desarrolla aún en suelos pobres y degradados, pero con suficiente humedad",
        flower_limitations:
          "Carnosas: al caer, afecta la movilidad de peatones",
      },
    },
    ecology: {
      create: {
        altitudinal_range: "0 - 1000 msnm, 1001 - 1500 msnm, 1501 - 2000 msnm",
        geo_distribution: "México a Ecuador",
        fauna_attraction: PriorityLevel.ALTO,
        conservation_status: ConservationStatus.LC,
      },
    },
    flower: {
      create: {
        floral_attributes: "Miden 5 cm de largo, campanuladas",
        flowering_season: FloweringSeason.ESTACION_SECA,
        pollination_system: "Insectos, Aves",
      },
    },
    leaf: {
      create: {
        leaf_attributes:
          "Miden 30 cm de largo por 20 cm de ancho, con borde entero y con 5 folíolos",
        leaf_persistence: LeafPersistence.CADUCIFOLIA,
      },
    },
    root: {
      create: {},
    },
    seeds: {
      create: {
        dispersal_system: "Aves, Anemocoria",
        seed_attributes: "Masivos: afecta movilidad de peatones y vehículos",
      },
    },
    stalk: {
      create: {},
    },
  },
  {
    name: "Bixa orellana",
    taxonomy: {
      create: {
        family: { connect: { id: 12 } },
        author: "L.",
        etymology:
          "Bixa, latinización del portugués bixa; orellana, dedicado al explorador español Francisco de Orellana",
        common_names: "Achiote",
        bibliography: {
          create: [
            {
              authors: "Morales y Varon",
              publication_year: "2013",
            },
          ],
        },
      },
    },
    images: {
      create: {
        presentation_url:
          "https://inaturalist-open-data.s3.amazonaws.com/photos/165719591/large.jpeg",
      },
    },
    arboriculture: {
      create: {
        light_requirements: LightRequirement.ALTA,
        growth_rate: GrowthRate.LENTA,
        humidity_zone: "Seca, Humeda",
        maximum_height: 10,
        crown_width: CrownWidth.ESTRECHA,
        DAP: 30,
        foliage_density: PriorityLevel.MEDIO,
        soil_type: "Suelos húmedos y bien drenados",
        flower_limitations: "Ninguna",
      },
    },
    ecology: {
      create: {
        altitudinal_range: "0 - 1000 msnm, 1001 - 1500 msnm, 1501 - 2000 msnm",
        geo_distribution: "Neotrópico; cultivada en los trópicos",
        fauna_attraction: PriorityLevel.MEDIO,
        conservation_status: ConservationStatus.NE,
      },
    },
    flower: {
      create: {
        floral_attributes:
          "Miden 3 cm de diámetro, con 5 pétalos separados entre sí y con numerosos estambres",
        flowering_season: FloweringSeason.ESTACIONAL,
        pollination_system: "Insectos",
      },
    },
    leaf: {
      create: {
        leaf_attributes:
          "Miden 18 cm de largo por 10 cm de ancho, borde entero y base acorazonada",
        leaf_persistence: LeafPersistence.PERENNE,
      },
    },
    root: {
      create: {},
    },
    seeds: {
      create: {
        seed_attributes: "Ninguna",
      },
    },
    stalk: {
      create: {},
    },
  },
  {
    name: "Vasconcellea pubescens",
    taxonomy: {
      create: {
        family: { connect: { id: 11 } },
        author: "(Mill.) I.M.Johnst.",
        etymology: "-",
        common_names: "Papayuelo",
        bibliography: {
          create: [
            {
              authors: "Morales y Varon",
              publication_year: "2013",
            },
          ],
        },
      },
    },
    images: {
      create: {
        presentation_url:
          "https://inaturalist-open-data.s3.amazonaws.com/photos/199396985/large.jpg",
      },
    },
    arboriculture: {
      create: {
        light_requirements: LightRequirement.ALTA,
        growth_rate: GrowthRate.RAPIDA,
        humidity_zone: "Seca, Humeda",
        maximum_height: 6,
        crown_width: CrownWidth.MEDIA,
        DAP: 15,

        soil_type: "Suelos bien drenados",
        flower_limitations: "Ninguna",
      },
    },
    ecology: {
      create: {
        altitudinal_range: "0 - 1000 msnm, 1001 - 1500 msnm, 1501 - 2000 msnm",
        geo_distribution: "México a Perú",

        conservation_status: ConservationStatus.NE,
      },
    },
    flower: {
      create: {
        floral_attributes: "Flores aromáticas, numerosas y pequeñas.",
      },
    },
    leaf: {
      create: {
        leaf_attributes:
          "Hojas grandes, palmatilobuladas que miden  32 cm de largo y 30 cm de ancho, con numeros venas de color verde claro.",
        leaf_persistence: LeafPersistence.PERENNE,
      },
    },
    root: {
      create: {},
    },
    seeds: {
      create: {
        seed_attributes: "Ninguna",
      },
    },
    stalk: {
      create: {},
    },
  },
  {
    name: "Pseudosamanea carbonaria",
    taxonomy: {
      create: {
        family: { connect: { id: 6 } },
        author: "Britton",
        etymology:
          "Albizia, en honor al noble italiano Filippo de Albizzi, naturalista del siglo XVIII, quien introdujo en Europa las semillas de Albizia julibrissin, conocido como el árbol de seda; carbonaria, que significa carbón o tierra quemada",
        common_names: "Pisquín, Carbonero",
        bibliography: {
          create: [
            {
              authors: "Morales y Varon",
              publication_year: "2013",
            },
          ],
        },
      },
    },
    images: {
      create: {
        presentation_url:
          "https://inaturalist-open-data.s3.amazonaws.com/photos/54043095/large.jpg",
      },
    },
    arboriculture: {
      create: {
        light_requirements: LightRequirement.ALTA,
        growth_rate: GrowthRate.RAPIDA,
        humidity_zone: "Humeda",
        maximum_height: 25,
        crown_width: CrownWidth.AMPLIA,
        DAP: 60,
        foliage_density: PriorityLevel.MEDIO,
        soil_type: "Suelos bien drenados",
        flower_limitations: "Ninguna",
      },
    },
    ecology: {
      create: {
        altitudinal_range: "0 - 1000 msnm, 1001 - 1500 msnm, 1501 - 2000 msnm",
        geo_distribution: "Centroamérica y N Suramérica",
        fauna_attraction: PriorityLevel.MEDIO,
        conservation_status: ConservationStatus.NE,
      },
    },
    flower: {
      create: {
        floral_attributes:
          "Miden 1,5 cm de largo, con los estambres separados entre sí",
        flowering_season: FloweringSeason.ESTACIONAL,
        pollination_system: "Insectos",
      },
    },
    leaf: {
      create: {
        leaf_attributes:
          "Miden 20 cm de largo por 15 cm de ancho, conformada por varias pinnas con muchos foliolulos pequeños; con estípulas libres",
        leaf_persistence: LeafPersistence.SEMICADUCIFOLIA,
      },
    },
    root: {
      create: {},
    },
    seeds: {
      create: {
        dispersal_system: "Aves",
        seed_attributes: "Ninguna",
      },
    },
    stalk: {
      create: {},
    },
  },
  {
    name: "Erythrina fusca",
    taxonomy: {
      create: {
        family: { connect: { id: 6 } },
        author: "Lour.",
        etymology:
          "Erythrina, del griego eritros, rojo; fusca, que significa oscuro.",
        common_names: "Búcaro",
        bibliography: {
          create: [
            {
              authors: "Morales y Varon",
              publication_year: "2013",
            },
          ],
        },
      },
    },
    images: {
      create: {
        presentation_url:
          "https://inaturalist-open-data.s3.amazonaws.com/photos/235044806/large.jpeg",
      },
    },
    arboriculture: {
      create: {
        light_requirements: LightRequirement.ALTA,
        growth_rate: GrowthRate.RAPIDA,
        humidity_zone: "Seca, Humeda",
        maximum_height: 20,
        crown_width: CrownWidth.AMPLIA,
        DAP: 200,
        foliage_density: PriorityLevel.ALTO,
        soil_type: "Tolera niveles freáticos altos",
        flower_limitations:
          "Carnosas: al caer, afecta la movilidad de peatones",
      },
    },
    ecology: {
      create: {
        altitudinal_range: "0 - 1000 msnm, 1001 - 1500 msnm, 1501 - 2000 msnm",
        geo_distribution: "América tropical; introducida en el Paleotrópico",
        fauna_attraction: PriorityLevel.ALTO,
        conservation_status: ConservationStatus.LC,
      },
    },
    flower: {
      create: {
        floral_attributes: "Miden 4 cm, cáliz verde ferrugíneo.",
        flowering_season: FloweringSeason.ESTACIONAL,
        pollination_system: "Aves",
      },
    },
    leaf: {
      create: {
        leaf_attributes:
          "Miden 20 cm de largo por 15 cm de ancho,con folíolos elípticos, redondeados en la base y en el ápice; margen entera.",
        leaf_persistence: LeafPersistence.SEMICADUCIFOLIA,
      },
    },
    root: {
      create: {},
    },
    seeds: {
      create: {
        seed_attributes: "Ninguna",
      },
    },
    stalk: {
      create: {},
    },
  },
  {
    name: "Erythrina poeppigiana",
    taxonomy: {
      create: {
        family: { connect: { id: 6 } },
        author: "(Walp.) O.F.Cook",
        etymology:
          "Erythrina, del griego eritros, rojo; poeppigiana, en honor a Eduard Friedrich Poeppig, botánico y zoólogo que en sus exploraciones por Chile, Perú y Brasil, describió mas de 4000 especies de plantas.",
        common_names: "Cámbulo",
        bibliography: {
          create: [
            {
              authors: "Morales y Varon",
              publication_year: "2013",
            },
          ],
        },
      },
    },
    images: {
      create: {
        presentation_url:
          "https://static.inaturalist.org/photos/111066594/large.jpg",
      },
    },
    arboriculture: {
      create: {
        light_requirements: LightRequirement.ALTA,
        growth_rate: GrowthRate.RAPIDA,
        humidity_zone: "Humeda, Muy humeda",
        maximum_height: 35,
        crown_width: CrownWidth.AMPLIA,
        DAP: 100,
        foliage_density: PriorityLevel.MEDIO,
        soil_type:
          "Franco-arcillosa a franca, puede soportar anegamiento por cortos períodos",
        flower_limitations:
          "Carnosas: al caer, afecta la movilidad de peatones",
      },
    },
    ecology: {
      create: {
        altitudinal_range: "0 - 1000 msnm, 1001 - 1500 msnm, 1501 - 2000 msnm",
        geo_distribution: "América tropical",
        fauna_attraction: PriorityLevel.ALTO,
        conservation_status: ConservationStatus.LC,
      },
    },
    flower: {
      create: {
        floral_attributes:
          "Miden 4 cm de largo por 3 cm de ancho, su pétalo superior es ancho y abierto, carnosas.",
        flowering_season: FloweringSeason.ESTACION_SECA,
        pollination_system: "Insectos, Aves nectarivoras",
      },
    },
    leaf: {
      create: {
        leaf_attributes:
          "Miden entre 20 y 30 cm de largo por 15 cm de ancho, folíolos con forma romboide u ovada, y glándulas en su base; con estípulas libres",
        leaf_persistence: LeafPersistence.CADUCIFOLIA,
      },
    },
    root: {
      create: {},
    },
    seeds: {
      create: {
        dispersal_system: "Mamiferos, Baricoria, Aves frugivoras",
        seed_attributes: "Ninguna",
      },
    },
    stalk: {
      create: {},
    },
  },
  {
    name: "Zygia longifolia",
    taxonomy: {
      create: {
        family: { connect: { id: 6 } },
        author: "(Willd.) Britton & Rose",
        etymology:
          "Zygia, del griego zugon, yugo, por la madera de algunas especies de este género que se utilizan para fabricar yugos; longifolia, del latín, longus, que significa largo, y folia, del latín folium, que hace referencia a la hoja",
        common_names: "Suribio",
        bibliography: {
          create: [
            {
              authors: "Morales y Varon",
              publication_year: "2013",
            },
          ],
        },
      },
    },
    images: {
      create: {
        presentation_url:
          "https://inaturalist-open-data.s3.amazonaws.com/photos/193980253/large.jpg",
      },
    },
    arboriculture: {
      create: {
        light_requirements: LightRequirement.ALTA,
        growth_rate: GrowthRate.RAPIDA,
        humidity_zone: "Humeda",
        maximum_height: 20,
        crown_width: CrownWidth.AMPLIA,
        DAP: 20,
        foliage_density: PriorityLevel.ALTO,
        soil_type: "Tolera niveles freáticos altos",
        flower_limitations: "Ninguna",
      },
    },
    ecology: {
      create: {
        altitudinal_range: "0 - 1000 msnm, 1001 - 1500 msnm, 1501 - 2000 msnm",
        geo_distribution: "Centroamérica a Venezuela, Brasil y Perú",
        fauna_attraction: PriorityLevel.ALTO,
        conservation_status: ConservationStatus.LC,
      },
    },
    flower: {
      create: {
        floral_attributes:
          "Miden 1, 5 cm de largo, estambres largos y numeroso",
        flowering_season: FloweringSeason.ESTACIONAL,
      },
    },
    leaf: {
      create: {
        leaf_attributes: "Miden 10 cm de largo por 15 cm de ancho, glabras",
        leaf_persistence: LeafPersistence.SEMICADUCIFOLIA,
      },
    },
    root: {
      create: {},
    },
    seeds: {
      create: {
        dispersal_system: "Aves",
        seed_attributes: "Masivos: afecta movilidad de peatones y vehículos",
      },
    },
    stalk: {
      create: {},
    },
  },
  {
    name: "Ochroma pyramidale",
    taxonomy: {
      create: {
        family: { connect: { id: 7 } },
        author: "(Cav. ex Lam.) Urb.",
        etymology:
          "Ochroma,del griego okros, amarillo pálido, por el color de las hojas de algunas especies del género; pyramidale, del latín pyramis, con forma de pirámide",
        common_names: "Balso",
        bibliography: {
          create: [
            {
              authors: "Morales y Varon",
              publication_year: "2013",
            },
          ],
        },
      },
    },
    images: {
      create: {
        presentation_url:
          "https://inaturalist-open-data.s3.amazonaws.com/photos/6984173/large.jpeg",
      },
    },
    arboriculture: {
      create: {
        light_requirements: LightRequirement.ALTA,
        growth_rate: GrowthRate.RAPIDA,
        humidity_zone: "Seca, Humeda",
        maximum_height: 40,
        crown_width: CrownWidth.AMPLIA,
        DAP: 150,
        foliage_density: PriorityLevel.MEDIO,
        soil_type: "Bien drenados",
        flower_limitations:
          "Carnosas: al caer, afecta la movilidad de peatones",
      },
    },
    ecology: {
      create: {
        altitudinal_range: "0 - 1000 msnm, 1001 - 1500 msnm, 1501 - 2000 msnm",
        geo_distribution: "Neotrópico",
        fauna_attraction: PriorityLevel.ALTO,
        conservation_status: ConservationStatus.NE,
      },
    },
    flower: {
      create: {
        floral_attributes:
          "Miden 17 cm de largo, con 5 pétalos separados entre sí, cáliz tubular y ferrugíneo",
        flowering_season: FloweringSeason.ESTACIONAL,
      },
    },
    leaf: {
      create: {
        leaf_attributes:
          "Miden 25 cm de diámetro, anchas, vellosas y base cordada",
        leaf_persistence: LeafPersistence.PERENNE,
      },
    },
    root: {
      create: {},
    },
    seeds: {
      create: {
        dispersal_system: "Mamiferos, Baricoria, Aves frugivoras",
        seed_attributes: "Masivos: afecta movilidad de peatones y vehículos",
      },
    },
    stalk: {
      create: {},
    },
  },
  {
    name: "Cedrela odorata",
    taxonomy: {
      create: {
        family: { connect: { id: 8 } },
        author: "L.",
        etymology:
          "Cedrela, diminutivo de Cedrus, por su similaridad con la madera de este género; odorata, adjetivo latino que significa perfumado, oloroso, por su madera",
        common_names: "Cedro",
        bibliography: {
          create: [
            {
              authors: "Morales y Varon",
              publication_year: "2013",
            },
          ],
        },
      },
    },
    images: {
      create: {
        presentation_url:
          "https://inaturalist-open-data.s3.amazonaws.com/photos/255389114/large.jpg",
      },
    },
    arboriculture: {
      create: {
        light_requirements: LightRequirement.ALTA,
        growth_rate: GrowthRate.RAPIDA,
        humidity_zone: "Seca, Humeda",
        maximum_height: 35,
        crown_width: CrownWidth.MEDIA,
        DAP: 100,
        foliage_density: PriorityLevel.ALTO,
        soil_type: "Bien drenado",
        flower_limitations: "Ninguna",
      },
    },
    ecology: {
      create: {
        altitudinal_range: "0 - 1000 msnm, 1001 - 1500 msnm, 1501 - 2000 msnm",
        geo_distribution: "México a N Argentina",
        fauna_attraction: PriorityLevel.ALTO,
        conservation_status: ConservationStatus.EN,
      },
    },
    flower: {
      create: {
        floral_attributes:
          "Las flores son unisexuales, pequeñas, con 4 sépalos en forma de copa, corola con apariencia tubular, 5 pétalos angostos.",
        flowering_season: FloweringSeason.ESTACION_LLUVIOSA,
        pollination_system: "Insectos",
      },
    },
    leaf: {
      create: {
        leaf_attributes:
          "Miden entre  15 y 50 cm de longitud, con 5 a 11 pares de folíolos, lanceolados a oblongos, margen entero y ápice acuminado.",
        leaf_persistence: LeafPersistence.CADUCIFOLIA,
      },
    },
    root: {
      create: {},
    },
    seeds: {
      create: {
        dispersal_system: "Anemocoria, Aves frugivoras",
        seed_attributes: "Masivos: afecta movilidad de peatones y vehículos",
      },
    },
    stalk: {
      create: {},
    },
  },
  {
    name: "Psidium guajava",
    taxonomy: {
      create: {
        family: { connect: { id: 10 } },
        author: "L.",
        etymology:
          "Psidium, del latín psidion que significa granada, por la apariencia de sus frutos; guajava, proviene de su nombre vernáculo en taino",
        common_names: "Guayabo",
        bibliography: {
          create: [
            {
              authors: "Morales y Varon",
              publication_year: "2013",
            },
          ],
        },
      },
    },
    images: {
      create: {
        presentation_url:
          "https://inaturalist-open-data.s3.amazonaws.com/photos/82765959/large.jpeg",
      },
    },
    arboriculture: {
      create: {
        light_requirements: LightRequirement.ALTA,
        growth_rate: GrowthRate.RAPIDA,
        humidity_zone: "Seca, Humeda",
        maximum_height: 10,
        crown_width: CrownWidth.MEDIA,
        DAP: 30,

        soil_type: "Se adapta a una gran variedad de suelos",
        flower_limitations: "Ninguna",
      },
    },
    ecology: {
      create: {
        altitudinal_range: "0 - 1000 msnm, 1001 - 1500 msnm, 1501 - 2000 msnm",
        geo_distribution:
          "Origen incierto, prob. Centroamérica; ampliamente cultivada en el Neotrópico",
        fauna_attraction: PriorityLevel.ALTO,
        conservation_status: ConservationStatus.NE,
      },
    },
    flower: {
      create: {
        floral_attributes:
          "Miden 1,5 cm de diámetro, pétalos separados, estambres numerosos y anteras amarillas",
        flowering_season: FloweringSeason.PERMANENTE,
      },
    },
    leaf: {
      create: {
        leaf_attributes:
          "Miden 8 cm de largo por 4 cm de ancho, con forma ovada, cartáceas, con puntos translucidos y borde entero",
        leaf_persistence: LeafPersistence.PERENNE,
      },
    },
    root: {
      create: {},
    },
    seeds: {
      create: {
        dispersal_system: "Aves",
        seed_attributes:
          "Masivos: afecta movilidad de peatones y vehículos, Carnosos",
      },
    },
    stalk: {
      create: {},
    },
  },
  {
    name: "Coccoloba uvifera",
    taxonomy: {
      create: {
        family: { connect: { id: 4 } },
        author: "(L.) L.",
        etymology:
          "Coccoloba, procede del griego kokkosque significa baya y lobos, que significa lóbulo, en alusión a sus frutos con apariencia de racimo de uvas; uvifer, del latín uva, más el sufijo –fe, llevar, en referencia sus racimos parecidos a las uvas",
        common_names: "Uvito de playa",
        bibliography: {
          create: [
            {
              authors: "Morales y Varon",
              publication_year: "2013",
            },
          ],
        },
      },
    },
    images: {
      create: {
        presentation_url:
          "https://static.inaturalist.org/photos/59860893/large.jpg",
      },
    },
    arboriculture: {
      create: {
        light_requirements: LightRequirement.ALTA,
        growth_rate: GrowthRate.RAPIDA,
        humidity_zone: "Seca, Humeda",
        maximum_height: 15,
        crown_width: CrownWidth.MEDIA,
        DAP: 50,

        soil_type: "Ligero y bien drenado",
        flower_limitations: "Ninguna",
      },
    },
    ecology: {
      create: {
        altitudinal_range: "0 - 1000 msnm, 1001 - 1500 msnm, 1501 - 2000 msnm",
        geo_distribution: "México a Brasil; Antillas",

        conservation_status: ConservationStatus.NE,
      },
    },
    flower: {
      create: {
        floral_attributes: "Pequeñas con una longitud aproximada de 4 mm.",
      },
    },
    leaf: {
      create: {
        leaf_attributes:
          "Coriáceas, redondeadas, base acorazonada, con nervaduras y pecíolos rojizos.",
        leaf_persistence: LeafPersistence.PERENNE,
      },
    },
    root: {
      create: {},
    },
    seeds: {
      create: {
        seed_attributes: "Ninguna",
      },
    },
    stalk: {
      create: {},
    },
  },
  {
    name: "Theobroma cacao",
    taxonomy: {
      create: {
        family: { connect: { id: 7 } },
        author: "L.",
        etymology:
          "Theobroma, en griego, alimento de los dioses; cacao, palabra relacionada con el lenguaje mixe-zoque que hablaban los olmecas antiguos y se refiere al nombre de la planta",
        common_names: "Cacao",
        bibliography: {
          create: [
            {
              authors: "Morales y Varon",
              publication_year: "2013",
            },
          ],
        },
      },
    },
    images: {
      create: {
        presentation_url:
          "https://static.inaturalist.org/photos/77322761/large.jpeg",
      },
    },
    arboriculture: {
      create: {
        light_requirements: LightRequirement.MEDIA,
        growth_rate: GrowthRate.LENTA_MEDIA,
        humidity_zone: "Humeda, Seca",
        maximum_height: 6,
        crown_width: CrownWidth.ESTRECHA,
        DAP: 25,
        foliage_density: PriorityLevel.ALTO,
        soil_type: "Suelos profundos y fértiles",
        flower_limitations: "Ninguna",
      },
    },
    ecology: {
      create: {
        altitudinal_range: "0 - 1000 msnm, 1001 - 1500 msnm, 1501 - 2000 msnm",
        geo_distribution: "Nativa de Amazonia; cultivada en los trópicos",

        conservation_status: ConservationStatus.NE,
      },
    },
    flower: {
      create: {
        floral_attributes:
          "Diminutas, con 5 pétalos, se disponen a lo largo del tronco y las ramas",
      },
    },
    leaf: {
      create: {
        leaf_attributes:
          "Hojas grandes, colgantes, elípticas u oblongas, margen liso",
        leaf_persistence: LeafPersistence.PERENNE,
      },
    },
    root: {
      create: {},
    },
    seeds: {
      create: {
        seed_attributes: "Pesados, Carnosos",
      },
    },
    stalk: {
      create: {},
    },
  },
  {
    name: "Spondias purpurea",
    taxonomy: {
      create: {
        family: { connect: { id: 1 } },
        author: "L.",
        etymology:
          "Spondias, uno de los géneros griegos del ciruelo; purpurea, en latín, resplandeciente.",
        common_names: "Ciruelo",
        bibliography: {
          create: [
            {
              authors: "Morales y Varon",
              publication_year: "2013",
            },
          ],
        },
      },
    },
    images: {
      create: {},
    },
    arboriculture: {
      create: {
        light_requirements: LightRequirement.ALTA,
        growth_rate: GrowthRate.RAPIDA,
        humidity_zone: "Seca, Humeda",
        maximum_height: 6,
        crown_width: CrownWidth.MEDIA,
        DAP: 40,
        foliage_density: PriorityLevel.MEDIO,
        soil_type:
          "Se adapta a una gran variedad de suelos, aún de baja fertilidad",
        flower_limitations: "Ninguna",
      },
    },
    ecology: {
      create: {
        altitudinal_range: "0 - 1000 msnm, 1001 - 1500 msnm, 1501 - 2000 msnm",
        geo_distribution:
          "O México a S Colombia y Ecuador; introducida, cultivada y naturalizada en la región tropical del Nuevo y Viejo Mundo",
        fauna_attraction: PriorityLevel.MEDIO,
        conservation_status: ConservationStatus.NE,
      },
    },
    flower: {
      create: {
        floral_attributes: "Flores pequeñas",
        flowering_season: FloweringSeason.ESTACIONAL,
      },
    },
    leaf: {
      create: {
        leaf_attributes:
          "Hojas entre 10 a 20  cm de longitud,  hasta 12 pares de folíolos elípticos con olor fuerte y perfumado",
        leaf_persistence: LeafPersistence.CADUCIFOLIA,
      },
    },
    root: {
      create: {},
    },
    seeds: {
      create: {
        dispersal_system: "Aves",
        seed_attributes: "Carnosos",
      },
    },
    stalk: {
      create: {},
    },
  },
  {
    name: "Cordia alliodora",
    taxonomy: {
      create: {
        family: { connect: { id: 3 } },
        author: "(Ruiz & Pav.) Oken",
        etymology:
          "Cordia,nombre otorgado en honor al botánico alemán Valerius Cordus; alliodora, epíteto latino que significa con olor a ajo.",
        common_names: "Nogal, nogal cafetero",
        bibliography: {
          create: [
            {
              authors: "Morales y Varon",
              publication_year: "2013",
            },
          ],
        },
      },
    },
    images: {
      create: {},
    },
    arboriculture: {
      create: {
        light_requirements: LightRequirement.ALTA,
        growth_rate: GrowthRate.RAPIDA,
        humidity_zone: "Humeda",
        maximum_height: 30,
        crown_width: CrownWidth.MEDIA,
        DAP: 90,
        foliage_density: PriorityLevel.MEDIO,
        soil_type: "Requiere suelos profundos, fértiles y bien drenados",
        flower_limitations: "Ninguna",
      },
    },
    ecology: {
      create: {
        altitudinal_range: "0 - 1000 msnm, 1001 - 1500 msnm, 1501 - 2000 msnm",
        geo_distribution: "Argentina, Colombia, México",
        fauna_attraction: PriorityLevel.MEDIO,
      },
    },
    flower: {
      create: {
        floral_attributes:
          "Miden 1 cm de diámetro, con vellos en el cáliz y con forma de campanilla.",
        flowering_season: FloweringSeason.ESTACIONAL,
        pollination_system: "Anemofila, Insectos",
      },
    },
    leaf: {
      create: {
        leaf_attributes:
          "Miden 9 cm de largo por 5 cm de ancho, textura áspera, borde dentado y vellosidades.",
        leaf_persistence: LeafPersistence.CADUCIFOLIA,
      },
    },
    root: {
      create: {},
    },
    seeds: {
      create: {
        dispersal_system: "Anemocoria",
        seed_attributes: "Ninguna",
      },
    },
    stalk: {
      create: {},
    },
  },
  {
    name: "Guazuma ulmifolia",
    taxonomy: {
      create: {
        family: { connect: { id: 7 } },
        author: "Lam.",
        etymology:
          "Guazuma, epíteto latinizado del nombre vernáculo mexicano Guacima; ulmifolia, con hojas semejantes a las del género Ulmus de la familia Ulmaceae",
        common_names: "Guácimo",
        bibliography: {
          create: [
            {
              authors: "Morales y Varon",
              publication_year: "2013",
            },
          ],
        },
      },
    },
    images: {
      create: {},
    },
    arboriculture: {
      create: {
        light_requirements: LightRequirement.ALTA,
        growth_rate: GrowthRate.RAPIDA,
        humidity_zone: "Seca, Humeda",
        maximum_height: 20,
        crown_width: CrownWidth.AMPLIA,
        DAP: 60,
        foliage_density: PriorityLevel.MEDIO,
        soil_type: "No es exigente en suelos",
        flower_limitations: "Ninguna",
      },
    },
    ecology: {
      create: {
        altitudinal_range: "0 - 1000 msnm, 1001 - 1500 msnm, 1501 - 2000 msnm",
        geo_distribution: "México a NE Argentina",
        fauna_attraction: PriorityLevel.MEDIO,
        conservation_status: ConservationStatus.LC,
      },
    },
    flower: {
      create: {
        floral_attributes: "Flores pequeñas y  aromáticas, con 5 pétalos",
      },
    },
    leaf: {
      create: {
        leaf_attributes:
          "Hojas trinervadas, con pelos estrellados, borde aserrado; con estípulas",
        leaf_persistence: LeafPersistence.SEMICADUCIFOLIA,
      },
    },
    root: {
      create: {},
    },
    seeds: {
      create: {
        dispersal_system: "Zoocoria",
        seed_attributes: "Ninguna",
      },
    },
    stalk: {
      create: {},
    },
  },
  {
    name: "Sapindus saponaria",
    taxonomy: {
      create: {
        family: { connect: { id: 5 } },
        author: "L.",
        etymology:
          "Sapindus, del latín sap, jabón, e indus, indio, por el uso que le daban los indígenas como jabón; saponaria, por el contenido de saponina de sus frutos",
        common_names: "Chumbimbo, jaboncillo",
        bibliography: {
          create: [
            {
              authors: "Morales y Varon",
              publication_year: "2013",
            },
          ],
        },
      },
    },
    images: {
      create: {
        presentation_url:
          "https://static.inaturalist.org/photos/59932852/large.jpeg",
      },
    },
    arboriculture: {
      create: {
        light_requirements: LightRequirement.ALTA,
        growth_rate: GrowthRate.MEDIA_RAPIDA,
        humidity_zone: "Seca",
        maximum_height: 20,
        crown_width: CrownWidth.AMPLIA,
        DAP: 70,
        foliage_density: PriorityLevel.MEDIO,

        flower_limitations: "Ninguna",
      },
    },
    ecology: {
      create: {
        altitudinal_range: "0 - 1000 msnm, 1001 - 1500 msnm, 1501 - 2000 msnm",
        geo_distribution:
          "Estados Unidos a N Argentina; Antillas; trópicos de África y Asia",
        fauna_attraction: PriorityLevel.MEDIO,
        conservation_status: ConservationStatus.NE,
      },
    },
    flower: {
      create: {
        floral_attributes: "Flores pequeñas y aromáticas",
        flowering_season: FloweringSeason.ESTACIONAL,
      },
    },
    leaf: {
      create: {
        leaf_attributes:
          "Hojas con folíolos de borde entero, inequiláteros, de base asimétrica",
        leaf_persistence: LeafPersistence.CADUCIFOLIA,
      },
    },
    root: {
      create: {},
    },
    seeds: {
      create: {
        dispersal_system: "Aves",
        seed_attributes: "Tóxicos",
      },
    },
    stalk: {
      create: {},
    },
  },
  {
    name: "Cassia grandis",
    taxonomy: {
      create: {
        family: { connect: { id: 6 } },
        author: "L.f.",
        etymology:
          "Cassia, nombre genérico que proviene del griego antiguo kassía, nombre de la planta laurácea Cinnamomum cassia, en los antiguos, y pasado a Leguminosas por Caesalpinio",
        common_names: "Cañafístula",
        bibliography: {
          create: [
            {
              authors: "Morales y Varon",
              publication_year: "2013",
            },
          ],
        },
      },
    },
    images: {
      create: {
        presentation_url:
          "https://inaturalist-open-data.s3.amazonaws.com/photos/3311886/large.JPG",
      },
    },
    arboriculture: {
      create: {
        growth_rate: GrowthRate.RAPIDA,
        humidity_zone: "Seca, Humeda",
        maximum_height: 20,
        crown_width: CrownWidth.AMPLIA,
        DAP: 70,

        soil_type: "Soporta suelos infértiles",
        flower_limitations:
          "Carnosas: al caer, afecta la movilidad de peatones, Masivas: al caer, afecta la movilidad de peatones y vehículos",
      },
    },
    ecology: {
      create: {
        altitudinal_range: "0 - 1000 msnm, 1001 - 1500 msnm, 1501 - 2000 msnm",
        geo_distribution: "América tropical",
        fauna_attraction: PriorityLevel.ALTO,
        conservation_status: ConservationStatus.LC,
      },
    },
    flower: {
      create: {
        floral_attributes:
          "Con forma de copa, miden cerca de 1,2 cm de largo y con 5 pétalos ovados.",
        flowering_season: FloweringSeason.ESTACION_SECA,
        pollination_system: "Insectos",
      },
    },
    leaf: {
      create: {
        leaf_attributes:
          "Miden entre 20-30 cm de largo, folíolos 12-20 pares, de borde entero, glabros por la haz y pubescentes por el envés",
        leaf_persistence: LeafPersistence.CADUCIFOLIA,
      },
    },
    root: {
      create: {},
    },
    seeds: {
      create: {
        dispersal_system: "Zoocoria",
        seed_attributes: "Pesados",
      },
    },
    stalk: {
      create: {},
    },
  },
  {
    name: "Albizia guachapele",
    taxonomy: {
      create: {
        family: { connect: { id: 6 } },
        author: "(Kunth) Dugand",
        etymology:
          "Albizia, en honor al noble italiano Filippo de Albizzi, naturalista del siglo XVIII, quien introdujo en Europa las semillas de Albizia julibrissin, conocido como el árbol de seda",
        common_names: "Cedro amarillo, iguamarillo",
        bibliography: {
          create: [
            {
              authors: "Morales y Varon",
              publication_year: "2013",
            },
          ],
        },
      },
    },
    images: {
      create: {
        presentation_url:
          "https://static.inaturalist.org/photos/182320888/large.jpeg",
      },
    },
    arboriculture: {
      create: {
        light_requirements: LightRequirement.ALTA,
        growth_rate: GrowthRate.MEDIA,
        humidity_zone: "Seca, Humeda",
        maximum_height: 25,
        crown_width: CrownWidth.AMPLIA,
        DAP: 70,
        foliage_density: PriorityLevel.MEDIO,
        soil_type: "Suelos aluviales con drenaje bueno a moderado",
        flower_limitations: "Ninguna",
      },
    },
    ecology: {
      create: {
        altitudinal_range: "0 - 1000 msnm, 1001 - 1500 msnm, 1501 - 2000 msnm",
        geo_distribution: "Colombia, Ecuador, México, Islas del Caribe",
        fauna_attraction: PriorityLevel.ALTO,
      },
    },
    flower: {
      create: {
        floral_attributes: "Las flores miden 2,5 cm",
        flowering_season: FloweringSeason.ESTACIONAL,
        pollination_system: "Insectos",
      },
    },
    leaf: {
      create: {
        leaf_attributes:
          "Folíolos oblongos a elípticos, y con vellos, especialmente por el envés",
        leaf_persistence: LeafPersistence.CADUCIFOLIA,
      },
    },
    root: {
      create: {},
    },
    seeds: {
      create: {
        dispersal_system: "Anemocoria, Hidrocoria, Aves",
        seed_attributes: "Ninguna",
      },
    },
    stalk: {
      create: {},
    },
  },
  {
    name: "Malpighia glabra",
    taxonomy: {
      create: {
        family: { connect: { id: 9 } },
        author: "L.",
        etymology: "-",
        common_names: "Huesito",
        bibliography: {
          create: [
            {
              authors: "Morales y Varon",
              publication_year: "2013",
            },
          ],
        },
      },
    },
    images: {
      create: {
        presentation_url:
          "https://inaturalist-open-data.s3.amazonaws.com/photos/56163339/large.jpg",
      },
    },
    arboriculture: {
      create: {
        maximum_height: 3,
        crown_width: CrownWidth.ESTRECHA,
        DAP: 30,
        foliage_density: PriorityLevel.MEDIO,

        flower_limitations: "Ninguna",
      },
    },
    ecology: {
      create: {
        geo_distribution:
          "Texas (Estados Unidos) a Perú y Venezuela; Antillas Mayores",
        fauna_attraction: PriorityLevel.MEDIO,
        conservation_status: ConservationStatus.NE,
      },
    },
    flower: {
      create: {
        floral_attributes:
          "Flores con 5 pétalos y con pintas amarillas en la base",

        pollination_system: "Insectos",
      },
    },
    leaf: {
      create: {
        leaf_attributes:
          "Hojas  ubicadas al final de las ramas, con borde entero y brillantes",
        leaf_persistence: LeafPersistence.PERENNE,
      },
    },
    root: {
      create: {},
    },
    seeds: {
      create: {
        seed_attributes: "Ninguna",
      },
    },
    stalk: {
      create: {},
    },
  },
  {
    name: "Carapa guianensis",
    taxonomy: {
      create: {
        family: { connect: { id: 8 } },
        author: "Aubl.",
        etymology: "-",
        common_names: "Cedro güino, mazábalo",
        bibliography: {
          create: [
            {
              authors: "Morales y Varon",
              publication_year: "2013",
            },
          ],
        },
      },
    },
    images: {
      create: {
        presentation_url:
          "https://inaturalist-open-data.s3.amazonaws.com/photos/36563528/large.jpeg",
      },
    },
    arboriculture: {
      create: {
        light_requirements: LightRequirement.MEDIA,
        growth_rate: GrowthRate.LENTA,
        humidity_zone: "Humeda, Muy humeda",
        maximum_height: 40,
        crown_width: CrownWidth.AMPLIA,
        DAP: 120,

        soil_type: "-",
        flower_limitations: "Ninguna",
      },
    },
    ecology: {
      create: {
        altitudinal_range: "0 - 1000 msnm",
        geo_distribution: "Belice a Ecuador, Perú y Brasil; Antillas",

        conservation_status: ConservationStatus.NE,
      },
    },
    flower: {
      create: {
        flowering_season: FloweringSeason.ESTACIONAL,
        pollination_system: "Insectos",
      },
    },
    leaf: {
      create: {
        leaf_persistence: LeafPersistence.SEMICADUCIFOLIA,
      },
    },
    root: {
      create: {},
    },
    seeds: {
      create: {
        dispersal_system: "Baricoria",
        seed_attributes: "Pesados",
      },
    },
    stalk: {
      create: {},
    },
  },
  {
    name: "Cavanillesia platanifolia",
    taxonomy: {
      create: {
        family: { connect: { id: 7 } },
        author: "(Humb. & Bonpl.) Kunth",
        etymology:
          "Cavanillesia, en honor a Antonio José Cavanilles, científico que le ayudó a Bonpland a conseguir el permiso del rey para venir a las colonias españolas en América; platanifolia, de hojas como el plátano",
        common_names: "Cuipo, güipo, bonga",
        bibliography: {
          create: [
            {
              authors: "Morales y Varon",
              publication_year: "2013",
            },
          ],
        },
      },
    },
    images: {
      create: {
        presentation_url:
          "https://inaturalist-open-data.s3.amazonaws.com/photos/113761745/large.jpg",
      },
    },
    arboriculture: {
      create: {
        light_requirements: LightRequirement.ALTA,
        growth_rate: GrowthRate.MEDIA,
        humidity_zone: "Seca, Humeda",
        maximum_height: 60,
        crown_width: CrownWidth.MEDIA,
        DAP: 400,
        foliage_density: PriorityLevel.MEDIO,
        flower_limitations: "Ninguna",
      },
    },
    ecology: {
      create: {
        altitudinal_range: "0 - 1000 msnm",
        geo_distribution: "Desde Nicaragua hasta Perú",

        conservation_status: ConservationStatus.NE,
      },
    },
    flower: {
      create: {
        floral_attributes: "En forma de campana y miden 3 cm de largo.",
        flowering_season: FloweringSeason.ESTACION_SECA,
      },
    },
    leaf: {
      create: {
        leaf_attributes:
          "Hojas entre 15 y 30 cm de largo y de 15 a 25 cm de ancho, lobuladas, base cordada.",
        leaf_persistence: LeafPersistence.CADUCIFOLIA,
      },
    },
    root: {
      create: {},
    },
    seeds: {
      create: {
        dispersal_system: "Anemocoria",
        seed_attributes: "Ninguna",
      },
    },
    stalk: {
      create: {},
    },
  },
  {
    name: "Geoffroea spinosa",
    taxonomy: {
      create: {
        family: { connect: { id: 6 } },
        author: "-",
        etymology: "-",
        common_names: "Ébano ornamental",
        bibliography: {
          create: [
            {
              authors: "Morales y Varon",
              publication_year: "2013",
            },
          ],
        },
      },
    },
    images: {
      create: {
        presentation_url:
          "https://static.inaturalist.org/photos/274460827/large.jpeg",
      },
    },
    arboriculture: {
      create: {
        light_requirements: LightRequirement.ALTA,
        growth_rate: GrowthRate.MEDIA,
        humidity_zone: "Seca, Humeda",
        maximum_height: 15,
        crown_width: CrownWidth.MEDIA,
        DAP: 60,
        foliage_density: PriorityLevel.MEDIO,
        soil_type: "Resiste suelos inundados",
        flower_limitations: "Ninguna",
      },
    },
    ecology: {
      create: {
        altitudinal_range: "0 - 1000 msnm, 1001 - 1500 msnm",
        geo_distribution: "Desde Colombia hasta el norte de Argentina",
        fauna_attraction: PriorityLevel.ALTO,
        conservation_status: ConservationStatus.NE,
      },
    },
    flower: {
      create: {
        floral_attributes: "Flores papilionadas",
      },
    },
    leaf: {
      create: {
        leaf_attributes:
          "Folíolos alternos, oblongos u obovados y con estípulas, con fuerte olor a frijól",
        leaf_persistence: LeafPersistence.CADUCIFOLIA,
      },
    },
    root: {
      create: {},
    },
    seeds: {
      create: {
        seed_attributes: "Ninguna",
      },
    },
    stalk: {
      create: {},
    },
  },
  {
    name: "Annona glabra",
    taxonomy: {
      create: {
        family: { connect: { id: 2 } },
        author: "L.",
        etymology:
          "Annona, del nombre vernáculo en Haití de la especie; glabra, por la superficie lisa de sus hojas, sin indumento",
        common_names: "Guanábano de playa",
        bibliography: {
          create: [
            {
              authors: "Morales y Varon",
              publication_year: "2013",
            },
          ],
        },
      },
    },
    images: {
      create: {
        presentation_url:
          "https://inaturalist-open-data.s3.amazonaws.com/photos/279768882/large.jpg",
      },
    },
    arboriculture: {
      create: {
        light_requirements: LightRequirement.ALTA,
        growth_rate: GrowthRate.RAPIDA,
        humidity_zone: "Humeda",
        maximum_height: 12,
        crown_width: CrownWidth.ESTRECHA,
        DAP: 20,
        foliage_density: PriorityLevel.MEDIO,
        soil_type: "Tolerante a suelos inundados, no es resistente a la sequía",
        flower_limitations: "Ninguna",
      },
    },
    ecology: {
      create: {
        altitudinal_range: "0 - 1000 msnm",
        geo_distribution: "Sur de Estados Unidos a Brasil, Antillas, África",
        fauna_attraction: PriorityLevel.MEDIO,
        conservation_status: ConservationStatus.NE,
      },
    },
    flower: {
      create: {
        floral_attributes: "Con 3 sépalos y 6 pétalos",
        flowering_season: FloweringSeason.ESTACION_LLUVIOSA,
        pollination_system: "Zoofila",
      },
    },
    leaf: {
      create: {
        leaf_attributes:
          "Miden 4-13 cm de largo y 3 - 6 de ancho, glabras, margen entero",
        leaf_persistence: LeafPersistence.SEMICADUCIFOLIA,
      },
    },
    root: {
      create: {},
    },
    seeds: {
      create: {
        dispersal_system: "Zoocoria",
        seed_attributes: "Ninguna",
      },
    },
    stalk: {
      create: {},
    },
  },
];

async function seed() {
  for (const species of speciesData) {
    await prisma.species.create({
      data: species,
    });
  }
}
seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
