import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

export interface ISpeciesParams {
  id?: string;
  name?: string;
  family?: string;
  genus?: string;
  tSpecies?: string;
  subspecies?: string;
  commonNames?: string;
  growthHabit?: string;
  bibliography?: string;
  barkAttributes?: string;
  barkColor?: string;
  reproductionForm?: string;
  rootingType?: string;
  rootAttributes?: string;
  floralAttributes?: string;
  flowerColor?: string;
  flowerArrangement?: string;
  floweringSeason?: string;
  floweringMonths?: string;
  leafAttributes?: string;
  leafArrangement?: string;
  leafPersistence?: string;
  stemLeafPosition?: string;
  leafComposition?: string;
  fruitType?: string;
  dispersalSystem?: string;
  fruitAttributes?: string;
  seedAttributes?: string;
  fruitingMonths?: string;
  useCategory?: string;
  useDetail?: string;
  altitudinalRange?: string;
  geoDistribution?: string;
  origin?: string;
  conservationStatus?: string;
  publicSpaceUse?: string;
  flowerLimitations?: string;
  fruitLimitations?: string;
  longevity?: string;
  pestsDiseases?: string;
  faunaAttraction?: string;
  associatedFauna?: string;
  lightRequirements?: string;
  growthRate?: string;
  maximumHeight?: string;
  crownWidth?: string;
  crownShape?: string;
  DAP?: string;
  foliageDensity?: string;
  soilType?: string;
  humidityZone?: string;
  availablesStatus?: boolean;
  pollinationSystem?: string;
  author?: string;
}

export default async function getSpecies(params: ISpeciesParams) {
  try {
    const currentUser = await getCurrentUser();
    const {
      id,
      name,
      family,
      genus,
      tSpecies,
      subspecies,
      commonNames,
      growthHabit,
      bibliography,
      barkAttributes,
      barkColor,
      reproductionForm,
      rootingType,
      rootAttributes,
      floralAttributes,
      flowerColor,
      flowerArrangement,
      floweringSeason,
      floweringMonths,
      leafAttributes,
      leafArrangement,
      leafPersistence,
      stemLeafPosition,
      leafComposition,
      fruitType,
      dispersalSystem,
      fruitAttributes,
      seedAttributes,
      fruitingMonths,
      useCategory,
      useDetail,
      altitudinalRange,
      geoDistribution,
      origin,
      conservationStatus,
      publicSpaceUse,
      flowerLimitations,
      fruitLimitations,
      longevity,
      pestsDiseases,
      faunaAttraction,
      associatedFauna,
      lightRequirements,
      growthRate,
      maximumHeight,
      crownWidth,
      crownShape,
      DAP,
      foliageDensity,
      soilType,
      humidityZone,
      availablesStatus,
      pollinationSystem,
      author,
    } = params;

    const query: any = {};

    if (id != null) query.id = id;
    if (name != null) query.name = name;
    if (family != null && family !== "") query.family = family;
    if (genus != null && genus !== "") query.genus = genus;
    if (tSpecies != null && tSpecies !== "") query.tSpecies = tSpecies;
    if (subspecies != null && subspecies !== "") query.subspecies = subspecies;
    if (commonNames != null && commonNames !== "")
      query.common_names = commonNames;
    if (growthHabit != null && growthHabit !== "")
      query.growth_habit = growthHabit;
    if (bibliography != null && bibliography !== "")
      query.bibliography = bibliography;
    if (barkAttributes != null && barkAttributes !== "")
      query.bark_attributes = barkAttributes;
    if (barkColor != null && barkColor !== "") query.bark_color = barkColor;
    if (reproductionForm != null && reproductionForm !== "")
      query.reproduction_form = reproductionForm;
    if (rootingType != null && rootingType !== "")
      query.rooting_type = rootingType;
    if (rootAttributes != null && rootAttributes !== "")
      query.root_attributes = rootAttributes;
    if (floralAttributes != null && floralAttributes !== "")
      query.floral_attributes = floralAttributes;
    if (flowerColor != null && flowerColor !== "")
      query.flower_color = flowerColor;
    if (flowerArrangement != null && flowerArrangement !== "")
      query.flower_arrangement = flowerArrangement;
    if (floweringSeason != null && floweringSeason !== "")
      query.flowering_season = floweringSeason;
    if (floweringMonths != null && floweringMonths !== "")
      query.flowering_months = floweringMonths;
    if (leafAttributes != null && leafAttributes !== "")
      query.leafAttributes = leafAttributes;
    if (leafArrangement != null && leafArrangement !== "")
      query.leaf_arrangement = leafArrangement;
    if (leafPersistence != null && leafPersistence !== "")
      query.leaf_persistence = leafPersistence;
    if (stemLeafPosition != null && stemLeafPosition !== "")
      query.stemLeaf_position = stemLeafPosition;
    if (leafComposition != null && leafComposition !== "")
      query.leaf_composition = leafComposition;
    if (fruitType != null && fruitType !== "") query.fruitType = fruitType;
    if (dispersalSystem != null && dispersalSystem !== "")
      query.dispersal_system = dispersalSystem;
    if (fruitAttributes != null && fruitAttributes !== "")
      query.fruit_attributes = fruitAttributes;
    if (seedAttributes != null && seedAttributes !== "")
      query.seed_attributes = seedAttributes;
    if (fruitingMonths != null && fruitingMonths !== "")
      query.fruiting_months = fruitingMonths;
    if (useCategory != null && useCategory !== "")
      query.use_category = useCategory;
    if (useDetail != null && useDetail !== "") query.use_detail = useDetail;
    if (altitudinalRange != null && altitudinalRange !== "")
      query.altitudinal_range = altitudinalRange;
    if (geoDistribution != null && geoDistribution !== "")
      query.geo_distribution = geoDistribution;
    if (origin != null && origin !== "") query.origin = origin;
    if (conservationStatus != null && conservationStatus !== "")
      query.conservation_status = conservationStatus;
    if (publicSpaceUse != null && publicSpaceUse !== "")
      query.public_spaceUse = publicSpaceUse;
    if (flowerLimitations != null && flowerLimitations !== "")
      query.flower_limitations = flowerLimitations;
    if (fruitLimitations != null && fruitLimitations !== "")
      query.fruit_limitations = fruitLimitations;
    if (longevity != null && longevity !== "") query.longevity = longevity;
    if (pestsDiseases != null && pestsDiseases !== "")
      query.pests_diseases = pestsDiseases;
    if (faunaAttraction != null && faunaAttraction !== "")
      query.fauna_attraction = faunaAttraction;
    if (associatedFauna != null && associatedFauna !== "")
      query.associated_fauna = associatedFauna;
    if (lightRequirements != null && lightRequirements !== "")
      query.light_requirements = lightRequirements;
    if (growthRate != null && growthRate !== "") query.growth_rate = growthRate;
    if (maximumHeight != null && maximumHeight !== "")
      query.maximum_height = maximumHeight;
    if (crownWidth != null && crownWidth !== "") query.crown_width = crownWidth;
    if (crownShape != null && crownShape !== "") query.crown_shape = crownShape;
    if (DAP != null && DAP !== "") query.DAP = DAP;
    if (foliageDensity != null && foliageDensity !== "")
      query.foliage_density = foliageDensity;
    if (soilType != null && soilType !== "") query.soil_type = soilType;
    if (humidityZone != null && humidityZone !== "")
      query.humidity_zone = humidityZone;
    if (pollinationSystem != null && pollinationSystem !== "")
      query.pollination_system = pollinationSystem;
    if (author != null && author !== "") query.author = author;
    query.availables_status = true;
    if (currentUser != null && currentUser.userRole !== "NURSERY_ADMIN") {
      query.availables_status = true;
    } else {
      if (availablesStatus != null) query.availables_status = availablesStatus;
    }

    query.availables_status = true;
    const species = await prisma.species.findMany({
      include: {
        taxonomy: {
          select: {
            family: true,
            common_names: true,
          },
        },
        images: {
          select: {
            presentation_url: true,
          },
        },
      },
      where: {
        id: query?.id,
        OR: [
          {
            name: {
              contains: query?.name,
            },
          },
          {
            taxonomy: {
              common_names: {
                contains: query?.name,
              },
            },
          },
          {
            taxonomy: {
              family: {
                family: query?.name,
              },
            },
          },
        ],
        availables_status: query?.availables_status,
        taxonomy: {
          genus: query?.genus,
          tSpecies: query?.tSpecies,
          subspecies: query?.subspecies,
          growth_habit: query?.growth_habit,
          author: query?.author,
        },
        stalk: {
          bark_attributes: query?.bark_attributes,
          barkColor: query?.bark_color,
        },
        root: {
          reproduction_form: query?.reproduction_form,
          root_attributes: query?.root_attributes,
          rooting_type: query?.rooting_type,
        },
        flower: {
          floral_attributes: query?.floral_attributes,
          flower_color: query?.flower_color,
          flower_arrangement: query?.flower_arrangement,
          flowering_season: query?.flowering_season,
          flowering_months: query?.flowering_months,
          pollination_system: query?.pollination_system,
        },
        leaf: {
          leaf_attributes: query?.leafAttributes,
          leaf_persistence: query?.leaf_persistence,
          stemLeaf_position: query?.stemLeaf_position,
          leaf_composition: query?.leaf_composition,
        },
        seeds: {
          fruitType: query?.fruitType,
          dispersal_system: query?.dispersal_system,
          fruit_attributes: query?.fruit_attributes,
          seed_attributes: query?.seed_attributes,
          fruiting_months: query?.fruiting_months,
        },
        ethnobotany: {
          category: query?.use_category,
        },
        ecology: {
          altitudinal_range: query?.altitudinal_range,
          geo_distribution: query?.geo_distribution,
          origin: query?.origin,
          conservation_status: query?.conservation_status,
          fauna_attraction: query?.fauna_attraction,
          associated_fauna: query?.associated_fauna,
        },
        arboriculture: {
          public_spaceUse: query?.public_spaceUse,
          flower_limitations: query?.flower_limitations,
          fruit_limitations: query?.fruit_limitations,
          longevity: query?.longevity,
          pests_diseases: query?.pests_diseases,
          light_requirements: query?.light_requirements,
          growth_rate: query?.growth_rate,
          maximum_height: query?.maximum_height,
          crown_width: query?.crown_width,
          crown_shape: query?.crown_shape,
          DAP: query?.DAP,
          foliage_density: query?.foliage_density,
          soil_type: query?.soil_type,
          humidity_zone: query?.humidity_zone,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    const safeSpecies = species.map((specie) => ({
      ...specie,
      createdAt: specie.createdAt.toISOString(),
      updatedAt: specie.updatedAt.toISOString(),
    }));
    return safeSpecies;
  } catch (error: any) {
    return [];
  }
}
