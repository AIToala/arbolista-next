/* eslint-disable @typescript-eslint/restrict-plus-operands */
import prisma from "@/app/libs/prismadb";
import { type Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const {
    taxonomy,
    stalk,
    seeds,
    root,
    leaf,
    flower,
    ethnobotany,
    ecology,
    arboriculture,
    images,
  } = await request.json();
  let family = await prisma.speciesFamilyDetail.findUnique({
    where: {
      family: taxonomy.family,
    },
  });
  if (family == null) {
    family = await prisma.speciesFamilyDetail.create({
      data: taxonomy.family,
    });
  }
  const speciesD: Prisma.SpeciesCreateInput = {
    name: taxonomy.genus + taxonomy.tSpecies,
    taxonomy: {
      create: {
        family: { connect: { id: family.id } },
        genus: taxonomy.genus,
        tSpecies: taxonomy.tSpecies,
        subspecies: taxonomy.subspecies,
        variety: taxonomy.variety,
        author: taxonomy.author,
        synonyms: { create: { synonym_name: taxonomy.synonyms } },
        etymology: taxonomy.etymology,
        common_names: taxonomy.commonNames,
        growth_habit: taxonomy.growthHabit,
        bibliography: {
          create: {
            authors: taxonomy.bibliography.split(",")[0],
            publication_year: taxonomy.bibliography.split(",")[1],
            title: taxonomy.bibliography.split(",")[2],
            journal_name: taxonomy.bibliography.split(",")[3],
            DOI_URL: taxonomy.bibliography.split(",")[4],
          },
        },
      },
    },
    images: {
      create: {
        presentation_url: images.presentationUrl,
        fruit_url: images.fruitUrl,
        leaf_url: images.leafUrl,
        flower_url: images.flowerUrl,
        detailFlower_url: images.deatilFLowerUrl,
        bark_url: images.barkUrl,
        seed_url: images.seddUrl,
      },
    },
    arboriculture: {
      create: {
        public_spaceUse: arboriculture.publicSpaceUse,
        flower_limitations: arboriculture.flowerLimitations,
        fruit_limitations: arboriculture.fruitLimitations,
        longevity: arboriculture.longevity,
        pests_diseases: arboriculture.pestsDiseases,
        light_requirements: arboriculture.lightRequirements,
        growth_rate: arboriculture.growthRate,
        maximum_height: arboriculture.maximumHeight,
        crown_width: arboriculture.crownWidth,
        crown_shape: arboriculture.crownShape,
        DAP: arboriculture.DAP,
        foliage_density: arboriculture.foliageDensity,
        soil_type: arboriculture.soilType,
        humidity_zone: arboriculture.humidityZone,
      },
    },
    stalk: {
      create: {
        bark_attributes: stalk.barkAttributes,
        barkColor: stalk.barkColor,
      },
    },
    seeds: {
      create: {
        fruitType: seeds.fruitType,
        dispersal_system: seeds.dispersalSystem,
        fruit_attributes: seeds.fruitAttributes,
        seed_attributes: seeds.seedAttributes,
        fruiting_months: seeds.fruitingMonths,
      },
    },
    root: {
      create: {
        reproduction_form: root.reproductionForm,
        root_attributes: root.rootAttributes,
        rooting_type: root.rootingType,
      },
    },
    leaf: {
      create: {
        leaf_attributes: leaf.leafAttributes,
        leaf_persistence: leaf.leafPersistence,
        stemLeaf_position: leaf.stemLeafPosition,
        leaf_composition: leaf.leafComposition,
      },
    },
    flower: {
      create: {
        floral_attributes: flower.floralAttributes,
        flower_color: flower.flowerColor,
        flower_arrangement: flower.flowerArrangement,
        flowering_season: flower.floweringSeason,
        flowering_months: flower.floweringMonths,
        pollination_system: flower.pollinationSystem,
      },
    },
    ethnobotany: {
      create: {
        category: ethnobotany.category,
        use_detail: ethnobotany.useDatail,
      },
    },
    ecology: {
      create: {
        altitudinal_range: ecology.altitudinalRange,
        geo_distribution: ecology.geoDistribution,
        origin: ecology.origin,
        conservation_status: ecology.conservationStatus,
        fauna_attraction: ecology.faunaAttraction,
        associated_fauna: {
          create: { fauna_name: ecology.associatedFauna.split(",")[0] },
        },
      },
    },
  };
  const species = prisma.species
    .create({
      data: speciesD,
    })
    .then(async () => {
      console.log("Species created");
    })
    .catch(async (e) => {
      console.error(e);
    });

  return NextResponse.json(species);
}

export async function PUT(request: Request) {
  const {
    id,
    taxonomy,
    stalk,
    seeds,
    root,
    leaf,
    flower,
    ethnobotany,
    ecology,
    arboriculture,
    images,
  } = await request.json();

  if (
    taxonomy.synonyms != null &&
    prisma.speciesSynonyms.findUnique({ where: { id: taxonomy.synonymsId } }) !=
      null
  ) {
    prisma.speciesSynonyms
      .update({
        where: { id: taxonomy.synonymsId },
        data: { synonym_name: taxonomy.synonyms },
      })
      .then(async () => {
        console.log("Synonyms updated");
      })
      .catch(async (e) => {
        console.error(e);
      });
  } else if (
    taxonomy.synonyms != null &&
    prisma.speciesSynonyms.findUnique({ where: { id: taxonomy.synonymsId } }) ==
      null
  ) {
    prisma.speciesSynonyms
      .create({
        data: {
          taxonomy: { connect: { id } },
          synonym_name: taxonomy.synonyms,
        },
      })
      .then(async () => {
        console.log("Synonyms created");
      })
      .catch(async (e) => {
        console.error(e);
      });
  }

  if (
    taxonomy.bibliography != null &&
    prisma.speciesBibliography.findUnique({
      where: { id: taxonomy.bibliographyId },
    }) != null
  ) {
    prisma.speciesBibliography
      .update({
        where: { id: taxonomy.bibliographyId },
        data: {
          authors: taxonomy.bibliography.split(",")[0],
          publication_year: taxonomy.bibliography.split(",")[1],
          title: taxonomy.bibliography.split(",")[2],
          journal_name: taxonomy.bibliography.split(",")[3],
          DOI_URL: taxonomy.bibliography.split(",")[4],
        },
      })
      .then(async () => {
        console.log("Bibliography updated");
      })
      .catch(async (e) => {
        console.error(e);
      });
  } else if (
    taxonomy.bibliography != null &&
    prisma.speciesBibliography.findUnique({
      where: { id: taxonomy.bibliographyId },
    }) == null
  ) {
    prisma.speciesBibliography
      .create({
        data: {
          taxonomy: { connect: { id } },
          authors: taxonomy.bibliography.split(",")[0],
          publication_year: taxonomy.bibliography.split(",")[1],
          title: taxonomy.bibliography.split(",")[2],
          journal_name: taxonomy.bibliography.split(",")[3],
          DOI_URL: taxonomy.bibliography.split(",")[4],
        },
      })
      .then(async () => {
        console.log("Bibliography created");
      })
      .catch(async (e) => {
        console.error(e);
      });
  }
  if (
    ecology.associatedFauna != null &&
    prisma.associated_Fauna.findUnique({
      where: { id: ecology.associatedFaunaId },
    }) != null
  ) {
    prisma.associated_Fauna
      .update({
        where: { id: ecology.associatedFaunaId },
        data: {
          fauna_name: ecology.associatedFauna.split(",")[0],
        },
      })
      .then(async () => {
        console.log("Associated fauna updated");
      })
      .catch(async (e) => {
        console.error(e);
      });
  } else if (
    ecology.associatedFauna != null &&
    prisma.associated_Fauna.findUnique({
      where: { id: ecology.associatedFaunaId },
    }) == null
  ) {
    prisma.associated_Fauna
      .create({
        data: {
          ecology: { connect: { id } },
          fauna_name: ecology.associatedFauna.split(",")[0],
        },
      })
      .then(async () => {
        console.log("Associated fauna created");
      })
      .catch(async (e) => {
        console.error(e);
      });
  }
  const speciesD: Prisma.SpeciesUpdateInput = {
    name: taxonomy.genus + taxonomy.tSpecies,
    taxonomy: {
      update: {
        family: {
          update: {
            id: taxonomy.familyId,
            family: taxonomy.family,
            description: taxonomy.familyDescription,
          },
        },
        genus: taxonomy.genus,
        tSpecies: taxonomy.tSpecies,
        subspecies: taxonomy.subspecies,
        variety: taxonomy.variety,
        author: taxonomy.author,
        etymology: taxonomy.etymology,
        common_names: taxonomy.commonNames,
        growth_habit: taxonomy.growthHabit,
      },
    },
    images: {
      update: {
        presentation_url: images.presentationUrl,
        fruit_url: images.fruitUrl,
        leaf_url: images.leafUrl,
        flower_url: images.flowerUrl,
        detailFlower_url: images.deatilFLowerUrl,
        bark_url: images.barkUrl,
        seed_url: images.seddUrl,
      },
    },
    arboriculture: {
      update: {
        public_spaceUse: arboriculture.publicSpaceUse,
        flower_limitations: arboriculture.flowerLimitations,
        fruit_limitations: arboriculture.fruitLimitations,
        longevity: arboriculture.longevity,
        pests_diseases: arboriculture.pestsDiseases,
        light_requirements: arboriculture.lightRequirements,
        growth_rate: arboriculture.growthRate,
        maximum_height: arboriculture.maximumHeight,
        crown_width: arboriculture.crownWidth,
        crown_shape: arboriculture.crownShape,
        DAP: arboriculture.DAP,
        foliage_density: arboriculture.foliageDensity,
        soil_type: arboriculture.soilType,
        humidity_zone: arboriculture.humidityZone,
      },
    },
    stalk: {
      update: {
        bark_attributes: stalk.barkAttributes,
        barkColor: stalk.barkColor,
      },
    },
    seeds: {
      update: {
        fruitType: seeds.fruitType,
        dispersal_system: seeds.dispersalSystem,
        fruit_attributes: seeds.fruitAttributes,
        seed_attributes: seeds.seedAttributes,
        fruiting_months: seeds.fruitingMonths,
      },
    },
    root: {
      update: {
        reproduction_form: root.reproductionForm,
        root_attributes: root.rootAttributes,
        rooting_type: root.rootingType,
      },
    },
    leaf: {
      update: {
        leaf_attributes: leaf.leafAttributes,
        leaf_persistence: leaf.leafPersistence,
        stemLeaf_position: leaf.stemLeafPosition,
        leaf_composition: leaf.leafComposition,
      },
    },
    flower: {
      update: {
        floral_attributes: flower.floralAttributes,
        flower_color: flower.flowerColor,
        flower_arrangement: flower.flowerArrangement,
        flowering_season: flower.floweringSeason,
        flowering_months: flower.floweringMonths,
        pollination_system: flower.pollinationSystem,
      },
    },
    ethnobotany: {
      update: {
        category: ethnobotany.category,
        use_detail: ethnobotany.useDatail,
      },
    },
    ecology: {
      update: {
        altitudinal_range: ecology.altitudinalRange,
        geo_distribution: ecology.geoDistribution,
        origin: ecology.origin,
        conservation_status: ecology.conservationStatus,
        fauna_attraction: ecology.faunaAttraction,
      },
    },
  };

  const species = await prisma.species.update({
    where: { id },
    data: speciesD,
  });

  return NextResponse.json(species);
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  const species = await prisma.species.update({
    where: { id },
    data: {
      availables_status: false,
    },
  });
  return NextResponse.json(species);
}
