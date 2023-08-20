import {
  ConservationStatus,
  FlowerArrangement,
  FloweringSeason,
  FruitType,
  GrowthRate,
  LeafComposition,
  LeafPersistence,
  LightRequirement,
  Origin,
  PriorityLevel,
  RootingTypes,
  StemLeafPosition,
  UserRole,
  type Species,
  type User,
} from "@prisma/client";

export type SafeUser = Omit<User, "createdAt" | "updatedAt" | "email"> & {
  createdAt: string;
  updatedAt: string;
  email: string | null;
};

export type TokenizedUser = Omit<
  User,
  "createdAt" | "updatedAt" | "hashedPassword"
>;

export interface FormData {
  id: string;
  name: string;
  availableStatus: boolean;
  taxonomy: {
    id: string;
    family: string;
    familyId: string;
    familyDescription: string;
    genus: string;
    tSpecies: string;
    subspecies: string;
    variety: string;
    author: string;
    etymology: string;
    common_names: string;
    growth_habit: string;
    bibliography: string;
    synonyms: string;
    synonymsId: string;
    bibliographyIds: string;
  };
  images: {
    presentation_url: string;
    fruit_url: string;
    leaf_url: string;
    flower_url: string;
    detailFlower_url: string;
    bark_url: string;
    seed_url: string;
  };
  arboriculture: {
    public_spaceUse: string;
    flower_limitations: string;
    fruit_limitations: string;
    longevity: string;
    pests_diseases: string;
    light_requirements: string;
    growth_rate: string;
    maximum_height: number;
    crown_width: number;
    crown_shape: string;
    DAP: number;
    foliage_density: string;
    soil_type: string;
    humidity_zone: string;
  };
  stalk: {
    bark_attributes: string;
    barkColor: string;
  };
  seeds: {
    fruitType: string;
    dispersal_system: string;
    fruit_attributes: string;
    seed_attributes: string;
    fruiting_months: string;
  };
  root: {
    reproduction_form: string;
    root_attributes: string;
    rooting_type: string;
  };
  leaf: {
    leaf_attributes: string;
    leaf_persistence: string;
    stemLeaf_position: string;
    leaf_composition: string;
  };
  flower: {
    floral_attributes: string;
    flower_color: string;
    flower_arrangement: string;
    flowering_season: string;
    flowering_months: string;
    pollination_system: string;
  };
  ethnobotany: {
    category: string;
    use_detail: string;
  };
  ecology: {
    altitudinal_range: string;
    geo_distribution: string;
    origin: string;
    conservation_status: string;
    fauna_attraction: string;
    associated_fauna: string;
    associatedFaunaId: string;
  };
}

export const email = "contactos@floranativa.org";

export type SafeSpecies = Omit<Species, "createdAt" | "updatedAt"> & {
  taxonomy: true;
  images: Array<{
    presentation_url: true;
    fruit_url: true;
    leaf_url: true;
    flower_url: true;
    detailFlower_url: true;
    bark_url: true;
    seed_url: true;
  }>;
  arboriculture: true;
  ecology: true;
  ethnobotany: true;
  flower: true;
  leaf: true;
  root: true;
  seeds: true;
  stalk: true;
};

export const speciesEnums = {
  userRole: Object.values(UserRole)
    .filter(
      (value) => value.toString() !== "USER" && value.toString() !== "ADMIN"
    )
    .map((value) => ({
      value: value as UserRole,
      label:
        value === "NURSERY_ADMIN"
          ? "Viverista"
          : value === "SPECIES_ADMIN"
          ? "Botánico"
          : "No determinado",
    })),
  conservationStatus: Object.values(ConservationStatus).map((value) => ({
    value: value as ConservationStatus,
    label:
      value === "NE"
        ? "No evaluado"
        : value === "DD"
        ? "Datos deficientes"
        : value === "LC"
        ? "Preocupación menor"
        : value === "NT"
        ? "Casi amenazado"
        : value === "VU"
        ? "Vulnerable"
        : value === "EN"
        ? "En peligro"
        : value === "CR"
        ? "En peligro crítico"
        : value === "EW"
        ? "Extinto en estado silvestre"
        : value === "EX"
        ? "Extinto"
        : "No determinado",
  })),
  rootingTypes: Object.values(RootingTypes).map((value) => ({
    value,
    label: value.replace("_", " "),
  })),
  flowerArrangement: Object.values(FlowerArrangement).map((value) => ({
    value,
    label: value.replace("_", " "),
  })),
  floweringSeason: Object.values(FloweringSeason).map((value) => ({
    value,
    label: value.replace("_", " "),
  })),
  leafPersistence: Object.values(LeafPersistence).map((value) => ({
    value,
    label: value.replace("_", " "),
  })),
  stemLeafPosition: Object.values(StemLeafPosition).map((value) => ({
    value,
    label: value.replace("_", " "),
  })),
  leafComposition: Object.values(LeafComposition).map((value) => ({
    value,
    label: value.replace("_", " "),
  })),
  fruitType: Object.values(FruitType).map((value) => ({
    value,
    label: value.replace("_", " "),
  })),
  origin: Object.values(Origin).map((value) => ({
    value,
    label: value.replace("_", " "),
  })),
  lightRequirement: Object.values(LightRequirement).map((value) => ({
    value,
    label: value.replace("_", " "),
  })),
  growthRate: Object.values(GrowthRate).map((value) => ({
    value,
    label: value.replace("_", " "),
  })),
  priorityLevel: Object.values(PriorityLevel).map((value) => ({
    value,
    label: value.replace("_", " "),
  })),
  crownWidth: [
    { value: 0, label: "No determinado" },
    { value: 7, label: "Estrecha (< 7 m)" },
    { value: 14, label: "Mediana (7 - 14 m)" },
    { value: 15, label: "Amplia (> 14 m)" },
  ],
  altitudeRange: [
    { value: "No determinado", label: "No determinado" },
    { value: "0-1000 msnm", label: "0-1000" },
    { value: "1001-1500 msnm", label: "1000-2000" },
    { value: "1501-2000 msnm", label: "1501-2000" },
    { value: "2001-2500 msnm", label: "2001-2500" },
    { value: "2501-3000 msnm", label: "2501-3000" },
    { value: "3001-3500 msnm", label: "3001-3500" },
    { value: "3501-4000 msnm", label: "3501-4000" },
    { value: "> 4001 msnm", label: "> 4001" },
  ],
  longevity: [
    { value: "Anual", label: "Anual" },
    { value: "Perenne", label: "Perenne" },
    { value: "Baja", label: "Baja" },
    { value: "Media", label: "Media" },
    { value: "Alta", label: "Alta" },
    { value: "No determinado", label: "No determinado" },
  ],
  growth_habit: [
    { value: "Arborea", label: "Arborea" },
    { value: "Arbustiva", label: "Arbustiva" },
    { value: "Palmera", label: "Palmera" },
    { value: "Cactacea", label: "Cactácea" },
    { value: "No determinado", label: "No determinado" },
  ],
  originValues: [
    { value: "Nativa", label: "Nativo" },
    { value: "Endemico", label: "Endemico" },
    { value: "No determinado", label: "No determinado" },
  ],
  useCategoryValues: [
    { value: "Alimenticio", label: "Alimenticio" },
    { value: "Aditivo de los alimentos", label: "Aditivo de los alimentos" },
    {
      value: "Alimento de animales vertebrados",
      label: "Alimento de animales vertebrados",
    },
    {
      value: "Alimento de animales invertebrados",
      label: "Alimento de animales invertebrados",
    },
    { value: "Apícola", label: "Apícola" },
    { value: "Combustibles", label: "Combustibles" },
    { value: "Materiales", label: "Materiales" },
    { value: "Social", label: "Social" },
    { value: "Tóxico", label: "Tóxico" },
    { value: "Medicinal", label: "Medicinal" },
    { value: "Medioambiental", label: "Medioambiental" },
    { value: "No determinado", label: "No determinado" },
  ],
  publicUseValues: [
    { value: "No determinado", label: "No determinado" },
    { value: "Andenes vía de servicio", label: "Andenes vía de servicio" },
    { value: "Cerros", label: "Cerros" },
    { value: "Glorietas", label: "Glorietas" },
    { value: "Orejas de puente", label: "Orejas de puente" },
    { value: "Parques", label: "Parques" },
    { value: "Plazas", label: "Plazas/Plazoletas" },
    { value: "Retiros de quebrada", label: "Retiros de quebrada" },
    { value: "Separador de autopistas", label: "Separador de autopistas" },
    { value: "Edificios institucionales", label: "Edificios institucionales" },
    { value: "Antejardines", label: "Antejardines" },
    {
      value: "Separador de arterias principales",
      label: "Separador de arterias principales",
    },
    { value: "Vías peatonales", label: "Vías peatonales" },
    { value: "Separadores", label: "Separadores" },
  ],
  heightValues: [
    { value: "menor que 7m", displayText: "menor que 7m" },
    { value: "entre 7 y 15 m", displayText: "entre 7 y 15 m" },
    { value: "mayor que 15 m", displayText: "mayor que 15 m" },
  ],
  crownWidthValues: [
    { value: "Estrecha (menor a 7m)", displayText: "Estrecha (menor a 7m)" },
    { value: "Media (7-14m)", displayText: "Media (7-14m)" },
    { value: "Amplia (mayor a 14m)", displayText: "Amplia (mayor a 14m)" },
  ],
  crownShapeValues: [
    { value: "Aparasolada", label: "Aparasolada" },
    { value: "Columnar", label: "Columnar" },
    { value: "Estratificada", label: "Estratificada" },
    { value: "Globosa", label: "Globosa" },
    { value: "Irregular", label: "Irregular" },
    { value: "Oval", label: "Oval" },
    { value: "Péndula", label: "Péndula" },
    { value: "Piramidal", label: "Piramidal" },
    { value: "Semiglobosa", label: "Semiglobosa" },
    { value: "No determinado", label: "No determinado" },
  ],
  humidityValues: [
    { value: "Seca", label: "Seca" },
    { value: "Humeda", label: "Humeda" },
    { value: "Muy humeda", label: "Muy humeda" },
    { value: "No determinado", label: "No determinado" },
  ],
  dispersalValues: [
    { value: "Anemocoria", label: "Anemocoria (viento)" },
    { value: "Hidrocoria", label: "Hidrocoria (agua)" },
    { value: "Baricoria", label: "Baricoria (gravedad)" },
    { value: "Zoocoria", label: "Zoocoria (animales)" },
    { value: "Aves", label: "Aves" },
    { value: "Mamíferos", label: "Mamíferos" },
    { value: "Insectos", label: "Insectos" },
    { value: "Aves semilleras", label: "Aves semilleras" },
    { value: "Aves frugívoras", label: "Aves frugívoras" },
    { value: "No determinado", label: "No determinado" },
  ],
  limitFloralValues: [
    { value: "Alergenico", label: "Alergenicos" },
    { value: "Oloroso", label: "Olor Desagradable" },
    { value: "Movilidad peatones", label: "Afectan movilidad de peatones" },
    { value: "Movilidad vehiculos", label: "Afectan movilidad de vehiculos" },
    { value: "Ninguna", label: "Ninguna" },
    { value: "No determinado", label: "No determinado" },
  ],
  limitFrutoValues: [
    { value: "Alergenico", label: "Alergenicos" },
    { value: "Toxico", label: "Toxicos" },
    { value: "Pesado", label: "Pesados" },
    { value: "Masivo", label: "Masivos" },
    { value: "Carnoso", label: "Carnosos" },
    { value: "Espinas", label: "Con espinas" },
    { value: "Ninguna", label: "Ninguna" },
    { value: "No determinado", label: "No determinado" },
  ],
  monthValues: [
    { value: "Enero", label: "Enero" },
    { value: "Febrero", label: "Febrero" },
    { value: "Marzo", label: "Marzo" },
    { value: "Abril", label: "Abril" },
    { value: "Mayo", label: "Mayo" },
    { value: "Junio", label: "Junio" },
    { value: "Julio", label: "Julio" },
    { value: "Agosto", label: "Agosto" },
    { value: "Septiembre", label: "Septiembre" },
    { value: "Octubre", label: "Octubre" },
    { value: "Noviembre", label: "Noviembre" },
    { value: "Diciembre", label: "Diciembre" },
    { value: "No determinado", label: "No determinado" },
  ],
  polinizationValues: [
    { value: "Anemofilia", label: "Anemofilia (viento)" },
    { value: "Insectos", label: "Insectos" },
    { value: "Aves", label: "Aves" },
    { value: "Aves nectarivoras", label: "Aves nectarivoras" },
    { value: "Zoofila", label: "Zoofila (animales)" },
    { value: "Hidrofila", label: "Hidrófila (agua)" },
    { value: "Mamiferos", label: "Mamiferos" },
    { value: "No determinado", label: "No determinado" },
  ],
  reproductionForm: [
    { value: "No determinado", label: "No determinado" },
    { value: "Por semilla", label: "Por semilla" },
    { value: "Por estaca", label: "Por estaca" },
    { value: "Por bulbo", label: "Por bulbo" },
    { value: "Por tubérculo", label: "Por tubérculo" },
    { value: "Por estolón", label: "Por estolón" },
    { value: "Por acodo", label: "Por acodo" },
    { value: "Division de pie", label: "Division de pie" },
  ],
  faunaAtraction: [
    { value: "No determinado", label: "No determinado" },
    { value: "BAJO", label: "Alto" },
    { value: "MEDIO", label: "Medio" },
    { value: "ALTO", label: "Bajo" },
  ],
  soilTypes: [
    { value: "No determinado", label: "No determinado" },
    { value: "Arcilloso", label: "Suelo arcilloso" },
    { value: "Arenoso", label: "Suelo arenoso" },
    { value: "Para maceta", label: "Suelo para maceta" },
    { value: "Para huerto", label: "Suelo para huerto" },
    { value: "Para jardín", label: "Suelo para jardín" },
    { value: "Para césped", label: "Suelo para césped" },
  ],
  booleanValues: [
    { value: "No", label: "No" },
    { value: "Si", label: "Si" },
  ],
};
