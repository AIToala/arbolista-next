import { User, Species } from "@prisma/client";
import {
  ConservationStatus,
  RootingTypes,
  FlowerArrangement,
  FloweringSeason,
  LeafPersistence,
  StemLeafPosition,
  LeafComposition,
  FruitType,
  Origin,
  LightRequirement,
  GrowthRate,
  PriorityLevel,
  CrownWidth,
} from "@prisma/client";

export type SafeUser = Omit<User, "createdAt" | "updatedAt" | "email"> & {
  createdAt: string;
  updatedAt: string;
  email: string | null;
};

export type SafeSpecies = Omit<Species, "createdAt" | "updatedAt"> & {
  taxonomy: true;
  images: {
    presentation_url: true;
    fruit_url: true;
    leaf_url: true;
    flower_url: true;
    detailFlower_url: true;
    bark_url: true;
    seed_url: true;
  }[];
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
  conservationStatus: Object.values(ConservationStatus).map((value) => ({
    value,
    label: value.replace("_", " "),
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
  crownWidth: Object.values(CrownWidth).map((value) => ({
    value,
    label: value.replace("_", " "),
  })),
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
  ],
  originValues: [
    { value: "Nativa", label: "Nativo" },
    { value: "Endemico", label: "Endemico" },
  ],
  useCategoryValues: [
    { value: "Alimenticio", label: "Alimenticio" },
    { value: "Aditivo de los alimentos", label: "Aditivo de los alimentos" },
    { vvalue: "Alimento de animales vertebrados", label: "Alimento de animales vertebrados"},
    { value: "Alimento de animales invertebrados", label: "Alimento de animales invertebrados"},
    { value: "Apícola", label: "Apícola" },
    { value: "Combustibles", label: "Combustibles" },
    { value: "Materiales", label: "Materiales" },
    { value: "Social", label: "Social" },
    { value: "Tóxico", label: "Tóxico" },
    { value: "Medicinal", label: "Medicinal" },
    { value: "Medioambiental", label: "Medioambiental" },
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
    { value: "No determinada", label: "No determinada" },
  ],
  humidityValues: [
    { value: "Seca", label: "Seca" },
    { value: "Humeda", label: "Humeda" },
    { value: "Muy humeda", label: "Muy humeda" },
    { value: "No determinada", label: "No determinada" },
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
};
