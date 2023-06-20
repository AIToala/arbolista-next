import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

export interface ISpeciesParams {
    id?: string;
    name?: string;
    family?: string;
    genus?: string;
    tSpecies?: string;
    subspecies?: string;
    common_names?: string;
    growth_habit?: string;
    bibliography?: string;
    bark_attributes?: string;
    bark_color?: string;
    reproduction_form?: string;
    rooting_type?: string;
    root_attributes?: string;
    floral_attributes?: string;
    flower_color?: string;
    flower_arrangement?: string;
    flowering_season?: string;
    flowering_months?: string;
    leafAttributes?: string;
    leaf_arrangement?: string;
    leaf_persistence?: string;
    stemLeaf_position?: string;
    leaf_composition?: string;
    fruitType?: string;
    dispersal_system?: string;
    fruit_attributes?: string;
    seed_attributes?: string;
    fruiting_months?: string;
    use_category?: string;
    use_detail?: string;
    altitudinal_range?: string;
    geo_distribution?: string;
    origin?: string;
    conservation_status?: string;
    public_spaceUse?: string;
    flower_limitations?: string;
    fruit_limitations?: string;
    longevity?: string;
    pests_diseases?: string;
    fauna_attraction?: string;
    associated_fauna?: string;
    light_requirements?: string;
    growth_rate?: string;
    maximum_height?: string;
    crown_width?: string;
    crown_shape?: string;
    DAP?: string;
    foliage_density?: string;
    soil_type?: string;
    humidity_zone?: string;
    availables_status?: boolean;
}

export default async function getSpecies( params: ISpeciesParams ){
    try{
        const currentUser = await getCurrentUser();
        const {
            id,
            name,
            family,
            genus,
            tSpecies,
            subspecies,
            common_names,
            growth_habit,
            bibliography,
            bark_attributes,
            bark_color,
            reproduction_form,
            rooting_type,
            root_attributes,
            floral_attributes,
            flower_color,
            flower_arrangement,
            flowering_season,
            flowering_months,
            leafAttributes,
            leaf_arrangement,
            leaf_persistence,
            stemLeaf_position,
            leaf_composition,
            fruitType,
            dispersal_system,
            fruit_attributes,
            seed_attributes,
            fruiting_months,
            use_category,
            use_detail,
            altitudinal_range,
            geo_distribution,
            origin,
            conservation_status,
            public_spaceUse,
            flower_limitations,
            fruit_limitations,
            longevity,
            pests_diseases,
            fauna_attraction,
            associated_fauna,
            light_requirements,
            growth_rate,
            maximum_height,
            crown_width,
            crown_shape,
            DAP,
            foliage_density,
            soil_type,
            humidity_zone,
            availables_status,
        } = params;
        
        let query:any = {};

        if( id ) query.id = id;
        if( name ) query.name = name;
        if( family ) query.family = family;
        if( genus ) query.genus = genus;
        if( tSpecies ) query.tSpecies = tSpecies;
        if( subspecies ) query.subspecies = subspecies;
        if( common_names ) query.common_names = common_names;
        if( growth_habit ) query.growth_habit = growth_habit;
        if( bibliography ) query.bibliography = bibliography;
        if( bark_attributes ) query.bark_attributes = bark_attributes;
        if( bark_color ) query.bark_color = bark_color;
        if( reproduction_form ) query.reproduction_form = reproduction_form;
        if( rooting_type ) query.rooting_type = rooting_type;
        if( root_attributes ) query.root_attributes = root_attributes;
        if( floral_attributes ) query.floral_attributes = floral_attributes;
        if( flower_color ) query.flower_color = flower_color;
        if( flower_arrangement ) query.flower_arrangement = flower_arrangement;
        if( flowering_season ) query.flowering_season = flowering_season;
        if( flowering_months ) query.flowering_months = flowering_months;
        if( leafAttributes ) query.leafAttributes = leafAttributes;
        if( leaf_arrangement ) query.leaf_arrangement = leaf_arrangement;
        if( leaf_persistence ) query.leaf_persistence = leaf_persistence;
        if( stemLeaf_position ) query.stemLeaf_position = stemLeaf_position;
        if( leaf_composition ) query.leaf_composition = leaf_composition;
        if( fruitType ) query.fruitType = fruitType;
        if( dispersal_system ) query.dispersal_system = dispersal_system;
        if( fruit_attributes ) query.fruit_attributes = fruit_attributes;
        if( seed_attributes ) query.seed_attributes = seed_attributes;
        if( fruiting_months ) query.fruiting_months = fruiting_months;
        if( use_category ) query.use_category = use_category;
        if( use_detail ) query.use_detail = use_detail;
        if( altitudinal_range ) query.altitudinal_range = altitudinal_range;
        if( geo_distribution ) query.geo_distribution = geo_distribution;
        if( origin ) query.origin = origin;
        if( conservation_status ) query.conservation_status = conservation_status;
        if( public_spaceUse ) query.public_spaceUse = public_spaceUse;
        if( flower_limitations ) query.flower_limitations = flower_limitations;
        if( fruit_limitations ) query.fruit_limitations = fruit_limitations;
        if( longevity ) query.longevity = longevity;
        if( pests_diseases ) query.pests_diseases = pests_diseases;
        if( fauna_attraction ) query.fauna_attraction = fauna_attraction;
        if( associated_fauna ) query.associated_fauna = associated_fauna;
        if( light_requirements ) query.light_requirements = light_requirements;
        if( growth_rate ) query.growth_rate = growth_rate;
        if( maximum_height ) query.maximum_height = maximum_height;
        if( crown_width ) query.crown_width = crown_width;
        if( crown_shape ) query.crown_shape = crown_shape;
        if( DAP ) query.DAP = DAP;
        if( foliage_density ) query.foliage_density = foliage_density;
        if( soil_type ) query.soil_type = soil_type;
        if( humidity_zone ) query.humidity_zone = humidity_zone;
        query.availables_status = true;
        if (currentUser && (currentUser.userRole!=="NURSERY_ADMIN")) {
            query.availables_status = true;
        }else{
            if( availables_status ) query.availables_status = availables_status;
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
                name: query?.name,
                availables_status: query?.availables_status,
                taxonomy: {
                    genus: query?.genus,
                    tSpecies: query?.tSpecies,
                    subspecies: query?.subspecies,
                    common_names: {
                        contains: query?.common_names,
                    },
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
                    useCategory: query?.use_category,
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
    } catch (error: any){
        return [];
    }
}