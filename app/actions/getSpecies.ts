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
    } = params;

    const query: any = {};

    if (id != null) query.id = id;
    if (name != null) query.name = name;
    if (family != null) query.family = family;
    if (genus != null) query.genus = genus;
    if (tSpecies != null) query.tSpecies = tSpecies;
    if (subspecies != null) query.subspecies = subspecies;
    if (commonNames != null) query.common_names = commonNames;
    if (growthHabit != null) query.growth_habit = growthHabit;
    if (bibliography != null) query.bibliography = bibliography;
    if (barkAttributes != null) query.bark_attributes = barkAttributes;
    if (barkColor != null) query.bark_color = barkColor;
    if (reproductionForm != null) query.reproduction_form = reproductionForm;
    if (rootingType != null) query.rooting_type = rootingType;
    if (rootAttributes != null) query.root_attributes = rootAttributes;
    if (floralAttributes != null) query.floral_attributes = floralAttributes;
    if (flowerColor != null) query.flower_color = flowerColor;
    if (flowerArrangement != null) query.flower_arrangement = flowerArrangement;
    if (floweringSeason != null) query.flowering_season = floweringSeason;
    if (floweringMonths != null) query.flowering_months = floweringMonths;
    if (leafAttributes != null) query.leafAttributes = leafAttributes;
    if (leafArrangement != null) query.leaf_arrangement = leafArrangement;
    if (leafPersistence != null) query.leaf_persistence = leafPersistence;
    if (stemLeafPosition != null) query.stemLeaf_position = stemLeafPosition;
    if (leafComposition != null) query.leaf_composition = leafComposition;
    if (fruitType != null) query.fruitType = fruitType;
    if (dispersalSystem != null) query.dispersal_system = dispersalSystem;
    if (fruitAttributes != null) query.fruit_attributes = fruitAttributes;
    if (seedAttributes != null) query.seed_attributes = seedAttributes;
    if (fruitingMonths != null) query.fruiting_months = fruitingMonths;
    if (useCategory != null) query.use_category = useCategory;
    if (useDetail != null) query.use_detail = useDetail;
    if (altitudinalRange != null) query.altitudinal_range = altitudinalRange;
    if (geoDistribution != null) query.geo_distribution = geoDistribution;
    if (origin != null) query.origin = origin;
    if (conservationStatus != null)
      query.conservation_status = conservationStatus;
    if (publicSpaceUse != null) query.public_spaceUse = publicSpaceUse;
    if (flowerLimitations != null) query.flower_limitations = flowerLimitations;
    if (fruitLimitations != null) query.fruit_limitations = fruitLimitations;
    if (longevity != null) query.longevity = longevity;
    if (pestsDiseases != null) query.pests_diseases = pestsDiseases;
    if (faunaAttraction != null) query.fauna_attraction = faunaAttraction;
    if (associatedFauna != null) query.associated_fauna = associatedFauna;
    if (lightRequirements != null) query.light_requirements = lightRequirements;
    if (growthRate != null) query.growth_rate = growthRate;
    if (maximumHeight != null) query.maximum_height = maximumHeight;
    if (crownWidth != null) query.crown_width = crownWidth;
    if (crownShape != null) query.crown_shape = crownShape;
    if (DAP != null) query.DAP = DAP;
    if (foliageDensity != null) query.foliage_density = foliageDensity;
    if (soilType != null) query.soil_type = soilType;
    if (humidityZone != null) query.humidity_zone = humidityZone;
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
