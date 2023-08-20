/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
import prisma from "@/app/libs/prismadb";
import { type Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
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

    if (taxonomy == null) {
      return NextResponse.error();
    }
    for (const key in taxonomy) {
      if (
        taxonomy[key] === null ||
        taxonomy[key] === "" ||
        taxonomy[key] === undefined
      ) {
        taxonomy[key] = "No determinado";
      }
    }
    for (const key in stalk) {
      if (
        stalk[key] === null ||
        stalk[key] === "" ||
        stalk[key] === undefined
      ) {
        stalk[key] = "No determinado";
      }
    }
    for (const key in seeds) {
      if (
        seeds[key] === null ||
        seeds[key] === "" ||
        seeds[key] === undefined
      ) {
        seeds[key] = "No determinado";
      }
    }
    for (const key in root) {
      if (root[key] === null || root[key] === "" || root[key] === undefined) {
        root[key] = "No determinado";
      }
    }
    for (const key in leaf) {
      if (leaf[key] === null || leaf[key] === "" || leaf[key] === undefined) {
        leaf[key] = "No determinado";
      }
    }
    for (const key in flower) {
      if (
        flower[key] === null ||
        flower[key] === "" ||
        flower[key] === undefined
      ) {
        flower[key] = "No determinado";
      }
    }
    for (const key in ethnobotany) {
      if (
        ethnobotany[key] === null ||
        ethnobotany[key] === "" ||
        ethnobotany[key] === undefined
      ) {
        ethnobotany[key] = "No determinado";
      }
    }
    for (const key in ecology) {
      if (
        ecology[key] === null ||
        ecology[key] === "" ||
        ecology[key] === undefined
      ) {
        ecology[key] = "No determinado";
      }
    }
    for (const key in arboriculture) {
      if (
        arboriculture[key] === null ||
        arboriculture[key] === "" ||
        arboriculture[key] === "Float" ||
        arboriculture[key] === undefined
      ) {
        if (typeof arboriculture[key] === "number") arboriculture[key] = 0;
        arboriculture[key] = "No determinado";
      }
    }
    console.log(images);
    for (const key in images) {
      if (
        images[key] === null ||
        images[key] === "" ||
        images[key] === undefined
      ) {
        images[key] = "No determinado";
      }
    }
    let family = await prisma.speciesFamilyDetail.findUnique({
      where: {
        family: taxonomy.family,
      },
    });
    if (family == null) {
      family = await prisma.speciesFamilyDetail.create({
        data: {
          family: taxonomy.family,
          description: taxonomy.familyDescription,
        },
      });
    }
    const bibliographyData = taxonomy.bibliography.split(";");

    const speciesD: Prisma.SpeciesCreateInput = {
      name: taxonomy.genus + " " + taxonomy.tSpecies,
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
          common_names: taxonomy.common_names,
          growth_habit: taxonomy.growth_habit,
          bibliography:
            taxonomy.bibliography != null && taxonomy.bibliography.length > 0
              ? {
                  createMany: {
                    data: bibliographyData.map((item: any) => {
                      const bibliographyParts = item.split(",");
                      const [
                        authors,
                        publicationYear,
                        title,
                        journalName,
                        DOI_URL,
                      ] = bibliographyParts;
                      if (
                        authors != null &&
                        publicationYear != null &&
                        title != null &&
                        journalName != null &&
                        DOI_URL != null
                      ) {
                        return {
                          authors,
                          publication_year: publicationYear,
                          title,
                          journal_name: journalName,
                          DOI_URL,
                        };
                      }
                      return {
                        authors: "No determinado",
                        publication_year: "No determinado",
                        title: "No determinado",
                        journal_name: "No determinado",
                        DOI_URL: "No determinado",
                      };
                    }),
                  },
                }
              : {
                  create: {},
                },
        },
      },
      images: {
        create: {
          presentation_url: images.presentation_url,
          fruit_url: images.fruit_url,
          leaf_url: images.leaf_url,
          flower_url: images.flower_url,
          detailFlower_url: images.detailFlower_url,
          bark_url: images.bark_url,
          seed_url: images.seed_url,
        },
      },
      arboriculture:
        Object.keys(arboriculture).length > 0
          ? {
              create: {
                public_spaceUse: arboriculture.public_spaceUse,
                flower_limitations: arboriculture.flower_limitations,
                fruit_limitations: arboriculture.fruit_limitations,
                longevity: arboriculture.longevity,
                pests_diseases: arboriculture.pests_iseases,
                light_requirements: arboriculture.light_requirements,
                growth_rate: arboriculture.growth_rate,
                maximum_height: parseFloat(arboriculture.maximum_height),
                crown_width: parseFloat(arboriculture.crown_width),
                crown_shape: arboriculture.crown_shape,
                DAP: parseFloat(arboriculture.DAP),
                foliage_density: arboriculture.foliage_density,
                soil_type: arboriculture.soil_type,
                humidity_zone: arboriculture.humidity_zone,
              },
            }
          : {
              create: {},
            },
      stalk:
        Object.keys(stalk).length > 0
          ? {
              create: {
                bark_attributes: stalk.bark_attributes,
                barkColor: stalk.bark_color,
              },
            }
          : {
              create: {},
            },
      seeds:
        Object.keys(seeds).length > 0
          ? {
              create: {
                fruitType: seeds.fruitType,
                dispersal_system: seeds.dispersal_system,
                fruit_attributes: seeds.fruit_attributes,
                seed_attributes: seeds.seed_attributes,
                fruiting_months: seeds.fruiting_months,
              },
            }
          : {
              create: {},
            },
      root:
        Object.keys(root).length > 0
          ? {
              create: {
                reproduction_form: root.reproduction_form,
                root_attributes: root.root_attributes,
                rooting_type: root.rooting_type,
              },
            }
          : {
              create: {},
            },
      leaf:
        Object.keys(leaf).length > 0
          ? {
              create: {
                leaf_attributes: leaf.leaf_attributes,
                leaf_persistence: leaf.leaf_persistence,
                stemLeaf_position: leaf.stemLeaf_position,
                leaf_composition: leaf.leaf_composition,
              },
            }
          : {
              create: {},
            },
      flower:
        Object.keys(flower).length > 0
          ? {
              create: {
                floral_attributes: flower.floral_attributes,
                flower_color: flower.flower_color,
                flower_arrangement: flower.flower_arrangement,
                flowering_season: flower.flowering_season,
                flowering_months: flower.flowering_months,
                pollination_system: flower.pollination_system,
              },
            }
          : {
              create: {},
            },
      ethnobotany:
        Object.keys(ethnobotany).length > 0
          ? {
              create: {
                category: ethnobotany.category,
                use_detail: ethnobotany.use_detail,
              },
            }
          : {
              create: {},
            },
      ecology:
        Object.keys(ecology).length > 0
          ? {
              create: {
                altitudinal_range: ecology.altitudinal_range,
                geo_distribution: ecology.geo_distribution,
                origin: ecology.origin,
                conservation_status: ecology.conservation_status,
                fauna_attraction: ecology.fauna_attraction,
                associated_fauna: {
                  create: {
                    fauna_name:
                      ecology.associated_fauna === "No determinado"
                        ? ecology.associated_fauna
                        : ecology.associated_fauna
                            .split(",")
                            .map((item: any) => item.trim())
                            .sort()
                            .join(","),
                  },
                },
              },
            }
          : {
              create: {},
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
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
    return NextResponse.json(species);
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    return NextResponse.error();
  }
}

export async function PUT(request: Request) {
  try {
    const {
      id,
      name,
      availableStatus,
      taxonomy,
      images,
      arboriculture,
      ecology,
      ethnobotany,
      flower,
      leaf,
      root,
      seeds,
      stalk,
    } = await request.json();

    if (taxonomy == null) {
      return NextResponse.error();
    }

    const synonymsId = taxonomy.synonymsId;
    if (taxonomy.synonyms != null && synonymsId != null) {
      const existingSynonym = await prisma.speciesSynonyms.findUnique({
        where: { taxonomyId: synonymsId },
      });
      if (existingSynonym != null) {
        await prisma.speciesSynonyms.update({
          where: { id: synonymsId },
          data: { synonym_name: taxonomy.synonyms },
        });
        console.log("Synonyms updated");
      } else {
        await prisma.speciesSynonyms.create({
          data: {
            taxonomy: { connect: { id } },
            synonym_name: taxonomy.synonyms,
          },
        });
        console.log("Synonyms created");
      }
    }

    if (taxonomy.bibliography != null && taxonomy.bibliographyIds != null) {
      await prisma.speciesBibliography.deleteMany({
        where: {
          taxonomyId: {
            in: taxonomy.bibliographyIds.split(","),
          },
        },
      });

      for (const bibliography of taxonomy.bibliography.split(";")) {
        const bibliographyParts = bibliography.split(",");
        const [authors, publicationYear, title, journalName, DOI_URL] =
          bibliographyParts;

        if (
          authors != null &&
          publicationYear != null &&
          title != null &&
          journalName != null &&
          DOI_URL != null
        ) {
          await prisma.speciesBibliography.create({
            data: {
              taxonomy: { connect: { id: taxonomy.id } },
              authors,
              publication_year: publicationYear,
              title,
              journal_name: journalName,
              DOI_URL,
            },
          });
          console.log("Bibliography created");
        } else {
          console.log("Bibliography not created");
        }
      }
    }

    if (ecology?.associatedFauna != null) {
      const existingAssociatedFauna = await prisma.associated_Fauna.findUnique({
        where: { speciesId: id },
      });

      if (existingAssociatedFauna != null) {
        await prisma.associated_Fauna.update({
          where: { speciesId: id },
          data: { fauna_name: ecology.associatedFauna },
        });
        console.log("Associated fauna updated");
      } else {
        await prisma.associated_Fauna.create({
          data: {
            ecology: { connect: { id } },
            fauna_name: ecology.associatedFauna,
          },
        });
        console.log("Associated fauna created");
      }
    }

    if (taxonomy.family !== null) {
      const family = await prisma.speciesFamilyDetail.findUnique({
        where: {
          family: taxonomy.family,
        },
      });
      if (family == null) {
        const familyCreated = await prisma.speciesFamilyDetail.create({
          data: {
            family: taxonomy.family,
            description: taxonomy.familyDescription,
          },
        });
        taxonomy.familyId = familyCreated.id;
      } else {
        await prisma.speciesFamilyDetail.update({
          where: { id: taxonomy.familyId },
          data: {
            family: taxonomy.family,
            description: taxonomy.familyDescription,
          },
        });
      }
    }

    if (taxonomy.genus == null) {
      taxonomy.genus = name.split(" ")[0];
    }
    if (taxonomy.tSpecies == null) {
      taxonomy.tSpecies = name.split(" ")[1];
    }

    const taxonomyUpdate: Prisma.TaxonomyUpdateInput = {};
    if (taxonomy.familyId !== null)
      taxonomyUpdate.family = { connect: { id: taxonomy.familyId } };
    if (taxonomy.genus !== null) taxonomyUpdate.genus = taxonomy.genus;
    if (taxonomy.tSpecies !== null) taxonomyUpdate.tSpecies = taxonomy.tSpecies;
    if (taxonomy.subspecies !== null)
      taxonomyUpdate.subspecies = taxonomy.subspecies;
    if (taxonomy.variety !== null) taxonomyUpdate.variety = taxonomy.variety;
    if (taxonomy.author !== null) taxonomyUpdate.author = taxonomy.author;
    if (taxonomy.etymology !== null)
      taxonomyUpdate.etymology = taxonomy.etymology;
    if (taxonomy.common_names !== null)
      taxonomyUpdate.common_names = taxonomy.common_names;
    if (taxonomy.growth_habit !== null)
      taxonomyUpdate.growth_habit = taxonomy.growth_habit;

    const imagesUpdate: Prisma.ImagesUpdateInput = {};
    if (images.presentation_url !== null)
      imagesUpdate.presentation_url = images.presentation_url;
    if (images.fruit_url !== null) imagesUpdate.fruit_url = images.fruit_url;
    if (images.leaf_url !== null) imagesUpdate.leaf_url = images.leaf_url;
    if (images.flower_url !== null) imagesUpdate.flower_url = images.flower_url;
    if (images.detailFlower_url !== null)
      imagesUpdate.detailFlower_url = images.detailFlower_url;
    if (images.bark_url !== null) imagesUpdate.bark_url = images.bark_url;
    if (images.seed_url !== null) imagesUpdate.seed_url = images.seed_url;

    const arboricultureUpdate: Prisma.ArboricultureUpdateInput = {};
    if (arboriculture.public_spaceUse !== null)
      arboricultureUpdate.public_spaceUse = arboriculture.public_spaceUse;
    if (arboriculture.flower_limitations !== null)
      arboricultureUpdate.flower_limitations = arboriculture.flower_limitations;
    if (arboriculture.fruit_limitations !== null)
      arboricultureUpdate.fruit_limitations = arboriculture.fruit_limitations;
    if (arboriculture.longevity !== null)
      arboricultureUpdate.longevity = arboriculture.longevity;
    if (arboriculture.pests_diseases !== null)
      arboricultureUpdate.pests_diseases = arboriculture.pests_diseases;
    if (arboriculture.light_requirements !== null)
      arboricultureUpdate.light_requirements = arboriculture.light_requirements;
    if (arboriculture.growth_rate !== null)
      arboricultureUpdate.growth_rate = arboriculture.growth_rate;
    if (arboriculture.maximum_height !== null)
      arboricultureUpdate.maximum_height = parseFloat(
        arboriculture.maximum_height
      );
    if (arboriculture.crown_width !== null)
      arboricultureUpdate.crown_width = arboriculture.crown_width;
    if (arboriculture.crown_shape !== null)
      arboricultureUpdate.crown_shape = arboriculture.crown_shape;
    if (arboriculture.DAP !== null)
      arboricultureUpdate.DAP = parseFloat(arboriculture.DAP);
    if (arboriculture.foliage_density !== null)
      arboricultureUpdate.foliage_density = arboriculture.foliage_density;
    if (arboriculture.soil_type !== null)
      arboricultureUpdate.soil_type = arboriculture.soil_type;
    if (arboriculture.humidity_zone !== null)
      arboricultureUpdate.humidity_zone = arboriculture.humidity_zone;

    const stalkUpdate: Prisma.StalkUpdateInput = {};
    if (stalk.bark_attributes !== null)
      stalkUpdate.bark_attributes = stalk.bark_attributes;
    if (stalk.bark_color !== null) stalkUpdate.barkColor = stalk.bark_color;

    const seedsUpdate: Prisma.SeedsUpdateInput = {};
    if (seeds.fruitType !== null) seedsUpdate.fruitType = seeds.fruitType;
    if (seeds.dispersal_system !== null)
      seedsUpdate.dispersal_system = seeds.dispersal_system;
    if (seeds.fruit_attributes !== null)
      seedsUpdate.fruit_attributes = seeds.fruit_attributes;
    if (seeds.seed_attributes !== null)
      seedsUpdate.seed_attributes = seeds.seed_attributes;
    if (seeds.fruiting_months !== null)
      seedsUpdate.fruiting_months = seeds.fruiting_months;

    const rootUpdate: Prisma.RootUpdateInput = {};
    if (root.reproduction_form !== null)
      rootUpdate.reproduction_form = root.reproduction_form;
    if (root.root_attributes !== null)
      rootUpdate.root_attributes = root.root_attributes;
    if (root.rooting_type !== null) rootUpdate.rooting_type = root.rooting_type;

    const leafUpdate: Prisma.LeafUpdateInput = {};
    if (leaf.leaf_attributes !== null)
      leafUpdate.leaf_attributes = leaf.leaf_attributes;
    if (leaf.leaf_persistence !== null)
      leafUpdate.leaf_persistence = leaf.leaf_persistence;
    if (leaf.stemLeaf_position !== null)
      leafUpdate.stemLeaf_position = leaf.stemLeaf_position;
    if (leaf.leaf_composition !== null)
      leafUpdate.leaf_composition = leaf.leaf_composition;

    const flowerUpdate: Prisma.FlowerUpdateInput = {};
    if (flower.floral_attributes !== null)
      flowerUpdate.floral_attributes = flower.floral_attributes;
    if (flower.flower_color !== null)
      flowerUpdate.flower_color = flower.flower_color;
    if (flower.flower_arrangement !== null)
      flowerUpdate.flower_arrangement = flower.flower_arrangement;
    if (flower.flowering_season !== null)
      flowerUpdate.flowering_season = flower.flowering_season;
    if (flower.flowering_months !== null)
      flowerUpdate.flowering_months = flower.flowering_months;
    if (flower.pollination_system !== null)
      flowerUpdate.pollination_system = flower.pollination_system;

    const ethnobotanyUpdate: Prisma.EthnobotanyUpdateInput = {};
    if (ethnobotany.category !== null)
      ethnobotanyUpdate.category = ethnobotany.category;
    if (ethnobotany.use_detail !== null)
      ethnobotanyUpdate.use_detail = ethnobotany.use_detail;

    const ecologyUpdate: Prisma.EcologyUpdateInput = {};
    if (ecology.altitudinal_range !== null)
      ecologyUpdate.altitudinal_range = ecology.altitudinal_range;
    if (ecology.geo_distribution !== null)
      ecologyUpdate.geo_distribution = ecology.geo_distribution;
    if (ecology.origin !== null) ecologyUpdate.origin = ecology.origin;
    if (ecology.conservation_status !== null)
      ecologyUpdate.conservation_status = ecology.conservation_status;
    if (ecology.fauna_attraction !== null)
      ecologyUpdate.fauna_attraction = ecology.fauna_attraction;

    const speciesD: Prisma.SpeciesUpdateInput = {
      name: taxonomyUpdate.genus + " " + taxonomyUpdate.tSpecies,
      availables_status: availableStatus,
      taxonomy: {
        update: taxonomyUpdate,
      },
      images: {
        update: imagesUpdate,
      },
      arboriculture: {
        update: arboricultureUpdate,
      },
      ecology: {
        update: ecologyUpdate,
      },
      ethnobotany: {
        update: ethnobotanyUpdate,
      },
      flower: {
        update: flowerUpdate,
      },
      leaf: {
        update: leafUpdate,
      },
      root: {
        update: rootUpdate,
      },
      seeds: {
        update: seedsUpdate,
      },
      stalk: {
        update: stalkUpdate,
      },
    };
    const species = await prisma.species
      .update({
        where: { id },
        data: speciesD,
      })
      .catch((e) => {
        console.error(e);
        return NextResponse.error();
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
    return NextResponse.json(species);
  } catch (e) {
    await prisma.$disconnect();
    console.error(e);
    return NextResponse.error();
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    const species = await prisma.species
      .update({
        where: { id },
        data: {
          availables_status: false,
        },
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
    return NextResponse.json(species);
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    return NextResponse.error();
  }
}
