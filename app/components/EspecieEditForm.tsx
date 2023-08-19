/* eslint-disable @typescript-eslint/restrict-plus-operands */
"use client";
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { speciesEnums, type FormData } from "@/app/types/index";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";
import Select from "react-select";
import { Switch } from "./ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Textarea } from "./ui/textarea";

interface EspecieEditFormProps {
  speciesData: any;
}

const EspecieEditForm: React.FC<EspecieEditFormProps> = ({ speciesData }) => {
  const router = useRouter();
  console.log(speciesData);
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      id: speciesData.id,
      name: speciesData.name,
      availableStatus: speciesData.availables_status,
      taxonomy: {
        id: speciesData.taxonomy.id,
        family: speciesData.taxonomy.family.family,
        familyDescription: speciesData.taxonomy.family.description,
        genus: speciesData.taxonomy.genus,
        tSpecies: speciesData.taxonomy.tSpecies,
        subspecies: speciesData.taxonomy.subspecies,
        variety: speciesData.taxonomy.variety,
        bibliography: speciesData.taxonomy.bibliography.join(";"),
        author: speciesData.taxonomy.author,
        etymology: speciesData.taxonomy.etymology,
        common_names: speciesData.taxonomy.common_names,
        growth_habit: speciesData.taxonomy.growth_habit,
        synonyms: speciesData.taxonomy.synonyms.synonyms_name,
      },
      images: {
        presentation_url: speciesData.images.presentation_url,
        fruit_url: speciesData.images.fruit_url,
        flower_url: speciesData.images.flower_url,
        detailFlower_url: speciesData.images.detailFlower_url,
        leaf_url: speciesData.images.leaf_url,
        seed_url: speciesData.images.seed_url,
        bark_url: speciesData.images.bark_url,
      },
      arboriculture: {
        public_spaceUse: speciesData.arboriculture.public_spaceUse,
        flower_limitations: speciesData.arboriculture.flower_limitations,
        fruit_limitations: speciesData.arboriculture.fruit_limitations,
        longevity: speciesData.arboriculture.longevity,
        pests_diseases: speciesData.arboriculture.pests_diseases,
        growth_rate: speciesData.arboriculture.growth_rate,
        light_requirements: speciesData.arboriculture.light_requirements,
        maximum_height: speciesData.arboriculture.maximum_height,
        crown_width: speciesData.arboriculture.crown_width,
        DAP: speciesData.arboriculture.DAP,
        crown_shape: speciesData.arboriculture.crown_shape,
        foliage_density: speciesData.arboriculture.foliage_density,
        soil_type: speciesData.arboriculture.soil_type,
        humidity_zone: speciesData.arboriculture.humidity_zone,
      },
      ecology: {
        altitudinal_range: speciesData.ecology.altitudinal_range,
        geo_distribution: speciesData.ecology.geo_distribution,
        origin: speciesData.ecology.origin,
        conservation_status: speciesData.ecology.conservation_status,
        fauna_attraction: speciesData.ecology.fauna_attraction,
        associated_fauna: speciesData.ecology.associated_fauna.fauna_name,
      },
      ethnobotany: {
        category: speciesData.ethnobotany.category,
        use_detail: speciesData.ethnobotany.use_detail,
      },
      flower: {
        floral_attributes: speciesData.flower.floral_attributes,
        flower_color: speciesData.flower.flower_color,
        flower_arrangement: speciesData.flower.flower_arrangement,
        pollination_system: speciesData.flower.pollination_system,
        flowering_season: speciesData.flower.flowering_season,
        flowering_months: speciesData.flower.flowering_months,
      },
      leaf: {
        leaf_attributes: speciesData.leaf.leaf_attributes,
        leaf_persistence: speciesData.leaf.leaf_persistence,
        stemLeaf_position: speciesData.leaf.stemLeaf_position,
        leaf_composition: speciesData.leaf.leaf_composition,
      },
      root: {
        reproduction_form: speciesData.root.reproduction_form,
        root_attributes: speciesData.root.root_attributes,
        rooting_type: speciesData.root.rooting_type,
      },
      seeds: {
        fruitType: speciesData.seeds.fruitType,
        dispersal_system: speciesData.seeds.dispersal_system,
        fruit_attributes: speciesData.seeds.fruit_attributes,
        seed_attributes: speciesData.seeds.seed_attributes,
        fruiting_months: speciesData.seeds.fruiting_months,
      },
      stalk: {
        bark_attributes: speciesData.stalk.bark_attributes,
        barkColor: speciesData.stalk.barkColor,
      },
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
    try {
      data.taxonomy.synonymsId = speciesData.taxonomy.id;
      data.taxonomy.bibliographyId = speciesData.taxonomy.id;
      await axios.put(
        `/api/species`,
        {
          id: data.id,
          name: data.name,
          taxonomy: data.taxonomy,
          images: data.images,
          availables_status: data.availables_status,
          arboriculture: data.arboriculture,
          ecology: data.ecology,
          ethnobotany: data.ethnobotany,
          flower: data.flower,
          leaf: data.leaf,
          root: data.root,
          seeds: data.seeds,
          stalk: data.stalk,
          associated_fauna: data.associated_fauna,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("Usuario actualizado con éxito");
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Hubo un error al momento de actualizar el usuario");
    }
  };
  return (
    <form
      className="flex flex-col w-full mx-4 !my-2 items-start h-full mr-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Tabs
        defaultValue="taxonomy"
        className=" grid gap-4 w-full mt-[40px] mb-[100px] p-0"
      >
        <TabsList className="w-full flex flex-row flex-wrap h-fit">
          <TabsTrigger value="species">Especie</TabsTrigger>
          <TabsTrigger value="taxonomy">Taxonomia</TabsTrigger>
          <TabsTrigger value="stalk">Tallo</TabsTrigger>
          <TabsTrigger value="root">Raíz</TabsTrigger>
          <TabsTrigger value="flower">Flor</TabsTrigger>
          <TabsTrigger value="leaf">Hoja</TabsTrigger>
          <TabsTrigger value="fruit">Fruto/Semilla</TabsTrigger>
          <TabsTrigger value="ecology">Ecologia</TabsTrigger>
          <TabsTrigger value="etnobotanic">Etnobotánica</TabsTrigger>
          <TabsTrigger value="arboliculture">Arboricultura</TabsTrigger>
          <TabsTrigger value="images">Imagenes</TabsTrigger>
        </TabsList>
        <TabsContent value="species" className="w-full mx-auto px-8">
          <div className="input-fields-container">
            <Label>¿Esta habilitado?</Label>
            <Switch
              defaultChecked={getValues("availableStatus")}
              onCheckedChange={() => {
                setValue("availableStatus", !speciesData.availables_status);
              }}
            />
          </div>
        </TabsContent>
        <TabsContent value="taxonomy" className="w-full mx-auto px-8">
          <div className="input-fields-container">
            <Label>Familia</Label>
            <Input
              {...register("taxonomy.family")}
              id="family"
              placeholder="Ingrese familia de la especie"
            />
            {errors?.taxonomy?.family != null && (
              <p className="text-red-500 text-sm">
                {errors.taxonomy.family.message?.toString()}
              </p>
            )}
            <Label>Descripcion de Familia</Label>
            <Textarea
              id="familyDescription"
              {...register("taxonomy.familyDescription")}
              placeholder="Ingrese descripcion de la familia"
            />
            <Label>Género</Label>
            <Input
              id="genus"
              placeholder="Ingrese genero de la especie"
              {...register("taxonomy.genus")}
            />
            {errors?.taxonomy?.genus != null && (
              <p className="text-red-500 text-sm">
                {errors.taxonomy.genus.message?.toString()}
              </p>
            )}
            <Label>Especie</Label>
            <Input
              id="tSpecies"
              placeholder="Ingrese nombre de la especie"
              {...register("taxonomy.tSpecies")}
            />
            {errors?.taxonomy?.tSpecies != null && (
              <p className="text-red-500 text-sm">
                {errors.taxonomy.tSpecies.message?.toString()}
              </p>
            )}
            <Label>Subespecie</Label>
            <Input
              id="subspecie"
              placeholder="Ingrese la subespecie"
              {...register("taxonomy.subspecies")}
            />
            <Label>Variedad</Label>
            <Input
              id="variety"
              {...register("taxonomy.variety")}
              placeholder="Ingrese la variedad de la especie"
            />
            <Label>Autor</Label>
            <Input
              id="author"
              {...register("taxonomy.author")}
              placeholder="Ingrese el autor de la especie"
            />
            <Label>Sinonimo</Label>
            <Textarea
              id="synonyms"
              {...register("taxonomy.synonyms")}
              placeholder="Ingrese el sinonimo de la especie"
            />
            <Label>Etimologia</Label>
            <Textarea
              id="etimology"
              {...register("taxonomy.etymology")}
              placeholder="Ingrese la etimologia de la especie"
            />
            <Label>Nombres comunes</Label>
            <Input
              id="commonName"
              {...register("taxonomy.common_names")}
              placeholder="Ingrese el nombre comun de la especie"
            />
            <Label>Habito de crecimiento</Label>
            <Select
              id="growth_habit"
              placeholder="Seleccione el habito de crecimiento de la especie"
              isClearable={false}
              isSearchable={false}
              options={speciesEnums.growth_habit}
              onChange={(value) => {
                if (value !== null)
                  setValue("taxonomy.growth_habit", value.value);
              }}
            />
            <Label>Bibliografia</Label>
            <Textarea
              id="bibliography"
              {...register("taxonomy.bibliography")}
              placeholder="Ej: Autor,Año de publicación,Titulo,Nombre Editorial,DOI"
            />
          </div>
        </TabsContent>
        <TabsContent value="stalk" className="w-full mx-auto px-8">
          <div className="input-fields-container">
            <Label>Atributos de corteza</Label>
            <Input
              id="stalkAtributes"
              {...register("stalk.bark_attributes")}
              placeholder="Ingrese los Atributos de corteza de la especie"
            />
            <Label>Color de corteza</Label>
            <Input
              id="stalkColor"
              {...register("stalk.barkColor")}
              placeholder="Ingrese el color de corteza de la especie"
            />
          </div>
        </TabsContent>
        <TabsContent value="root" className="w-full mx-auto px-8">
          <div className="input-fields-container">
            <Label>Forma de reproduccion</Label>
            <Select
              id="reproduction_form"
              className="text-mds"
              placeholder="Seleccione forma de reproduccion de la especie"
              isClearable={false}
              isSearchable={false}
              onChange={(value) => {
                if (value !== null) {
                  setValue("root.reproduction_form", value.value);
                }
              }}
              options={speciesEnums.reproductionForm}
            />
            <Label>Atributos de raiz</Label>
            <Textarea
              id="root_attributes"
              {...register("root.root_attributes")}
              placeholder="Ingrese los atributos radiculares de la especie"
            />
            <Label>Tipos de enraizamiento</Label>
            <Select
              id="rooting_type"
              className="text-mds"
              placeholder="Seleccione el tipo de enraizamiento de la especie"
              isClearable={false}
              isSearchable={false}
              onChange={(value) => {
                if (value !== null) setValue("root.rooting_type", value.value);
              }}
              options={speciesEnums.rootingTypes}
            />
          </div>
        </TabsContent>
        <TabsContent value="flower" className="w-full mx-auto px-8">
          <div className="input-fields-container">
            <Label>Atributos florales</Label>
            <Textarea
              {...register("flower.floral_attributes")}
              id="floral_attributes"
              placeholder="Ingrese los atributos florales de la especie"
            />
            <Label>Color de flor</Label>
            <Input
              id="flower_color"
              {...register("flower.flower_color")}
              placeholder="Ingrese el color de flor de la especie"
            />
            <Label>Disposicion de las flores</Label>
            <Select
              id="flower_arrangement"
              className="text-mds"
              placeholder="Seleccione el tipo de arreglo de la flor de la especie"
              isClearable={false}
              isSearchable={false}
              onChange={(value) => {
                if (value !== null)
                  setValue("flower.flower_arrangement", value.value);
              }}
              options={speciesEnums.flowerArrangement}
            />
            <Label>Sistema de polinizacion</Label>
            <Select
              id="pollination_system"
              className="text-mds"
              placeholder="Seleccione el sistema de polinizacion de la especie"
              isClearable={false}
              isSearchable={false}
              onChange={(value) => {
                if (value !== null)
                  setValue("flower.pollination_system", value.value);
              }}
              options={speciesEnums.polinizationValues}
            />
            <Label>Estacion de floración</Label>
            <Select
              id="flowering_season"
              className="text-mds"
              placeholder="Seleccione la estacion de floracion"
              isClearable={false}
              isSearchable={false}
              onChange={(value) => {
                if (value !== null)
                  setValue("flower.flowering_season", value.value);
              }}
              options={speciesEnums.floweringSeason}
            />
            <Label>Meses de floración</Label>
            <Input
              id="flowering_months"
              placeholder="Ej: Enero,Febrero,Diciembre"
              {...register("flower.flowering_months")}
            />
          </div>
        </TabsContent>
        <TabsContent value="leaf" className="w-full mx-auto px-8">
          <div className="input-fields-container">
            <Label>Atributos foliares</Label>
            <Textarea
              id="leaf_attributes"
              {...register("leaf.leaf_attributes")}
              placeholder="Ingrese los atributos foliares de la especie"
            />
            <Label>Persistencia de la hoja</Label>
            <Select
              id="leaf_persistence"
              className="text-mds"
              placeholder="Seleccione la persistencia de la hoja de la especie"
              isSearchable={false}
              onChange={(value) => {
                if (value !== null)
                  setValue("leaf.leaf_persistence", value.value);
              }}
              options={speciesEnums.leafPersistence}
            />
            <Label>Posicion de la hoja en el tallo</Label>
            <Select
              id="stemLeaf_position"
              className="text-mds"
              placeholder="No determinado"
              isClearable={false}
              isSearchable={false}
              onChange={(value) => {
                if (value !== null)
                  setValue("leaf.stemLeaf_position", value.value);
              }}
              options={speciesEnums.stemLeafPosition}
            />
            <Label>Composicion de la hoja</Label>
            <Select
              id="leaf_composition"
              className="text-mds"
              placeholder="Seleccione composicion de la hoja"
              isClearable={false}
              isSearchable={false}
              onChange={(value) => {
                if (value !== null)
                  setValue("leaf.leaf_composition", value.value);
              }}
              options={speciesEnums.leafComposition}
            />
          </div>
        </TabsContent>
        <TabsContent value="fruit" className="w-full mx-auto px-8">
          <div className="input-fields-container">
            <Label>Tipo de fruto</Label>
            <Select
              id="fruitType"
              className="text-mds"
              placeholder="No determinado"
              isClearable={false}
              isSearchable={false}
              options={speciesEnums.fruitType}
              onChange={(value) => {
                if (value !== null) setValue("seeds.fruitType", value.value);
              }}
            />
            <Label>Sistema de dispercion de frutos</Label>
            <Select
              id="dispersal_system"
              className="text-mds"
              placeholder="No determinado"
              isClearable={false}
              isSearchable={false}
              options={speciesEnums.dispersalValues}
              onChange={(value) => {
                if (value !== null)
                  setValue("seeds.dispersal_system", value.value);
              }}
            />
            <Label>Atributos de fruto</Label>
            <Input
              id="fruit_attributes"
              placeholder="Ingrese los atributos de fruto de la especie"
              {...register("seeds.fruit_attributes")}
            />
            <Label>Atributos de semilla</Label>
            <Input
              id="seed_attributes"
              {...register("seeds.seed_attributes")}
              placeholder="Ingrese los atributos de la semilla de la especie"
            />
            <Label>Meses de fructificación</Label>
            <Input
              {...register("seeds.fruiting_months")}
              id="fruiting_months"
              placeholder="Ingrese los meses de fructificación de la especie"
            />
          </div>
        </TabsContent>
        <TabsContent value="ecology" className="w-full mx-auto px-8">
          <div className="input-fields-container">
            <Label>Rango altitudinal</Label>
            <Select
              id="altitudinal_range"
              className="text-mds"
              placeholder="Seleccione el rango altitudinal de la especie"
              onChange={(value) => {
                if (value !== null)
                  setValue("ecology.altitudinal_range", value.value);
              }}
              isClearable={false}
              isSearchable={false}
              options={speciesEnums.altitudeRange}
            />
            <Label>Distribucion geografica</Label>
            <Input
              id="geo_distribution"
              {...register("ecology.geo_distribution")}
              placeholder="Ingrese la distribución geografica de la especie"
            />
            <Label>Origen</Label>
            <Select
              id="origin"
              className="text-mds"
              placeholder="Seleccione el origen de la especie"
              onChange={(value) => {
                if (value !== null) setValue("ecology.origin", value.value);
              }}
              isClearable={false}
              isSearchable={false}
              options={speciesEnums.origin}
            />
            <Label>Estado de conservación</Label>
            <Select
              id="conservation_status"
              className="text-mds"
              placeholder="Seleccione el estado de conservacion de la especie"
              isClearable={false}
              isSearchable={false}
              onChange={(value) => {
                if (value !== null)
                  setValue("ecology.conservation_status", value.value);
              }}
              options={speciesEnums.conservationStatus}
            />
            <Label>Atraccion de fauna</Label>
            <Select
              id="fauna_attraction"
              className="text-mds"
              placeholder="Seleccione nivel de atraccion de fauna"
              isClearable={false}
              isSearchable={false}
              options={speciesEnums.faunaAtraction}
              onChange={(value) => {
                if (value !== null)
                  setValue("ecology.fauna_attraction", value.value);
              }}
            />
            <Label>Fauna asociada</Label>
            <Input
              id="associated_fauna"
              {...register("ecology.associated_fauna")}
              placeholder="Ej: Perro,Gato,Pajaro,etc"
            />
          </div>
        </TabsContent>
        <TabsContent value="etnobotanic" className="w-full mx-auto px-8">
          <div className="input-fields-container">
            <Label>Categoria de uso</Label>
            <Select
              isMulti
              id="category"
              options={speciesEnums.useCategoryValues}
              isClearable={false}
              isSearchable={false}
              classNamePrefix="select"
              className="basic-multi-select text-mds"
              onChange={(valueArr) => {
                if (valueArr !== null && valueArr.length > 0) {
                  const values: string[] = [];
                  valueArr.forEach((value) => {
                    values.push(value.value);
                  });
                  setValue("ethnobotany.category", values.join(","));
                }
              }}
              placeholder="Ingrese la categoria de la especie"
            />
            <Label>Detalle de uso</Label>
            <Input
              id="use_detail"
              {...register("ethnobotany.use_detail")}
              placeholder="Ingrese el detalle de uso de la especie"
            />
          </div>
        </TabsContent>
        <TabsContent value="arboliculture" className="w-full mx-auto px-8">
          <div className="input-fields-container">
            <Label>Uso en espacio publico</Label>
            <Select
              isMulti
              id="publicUse"
              classNamePrefix="select"
              className="basic-multi-select text-mds"
              options={speciesEnums.publicUseValues}
              isClearable={false}
              isSearchable={false}
              onChange={(valueArr) => {
                if (valueArr !== null && valueArr.length > 0) {
                  const values: string[] = [];
                  valueArr.forEach((value) => {
                    values.push(value.value);
                  });
                  setValue("arboriculture.public_spaceUse", values.join(","));
                }
              }}
              placeholder="Escoga categorias de uso de la especie"
            />
            <Label>Limitaciones florales</Label>
            <Select
              isMulti
              id="flower_limitations"
              className="text-mds"
              options={speciesEnums.limitFloralValues}
              placeholder="Selecciona limitaciones florales de la especie"
              isClearable={false}
              isSearchable={false}
              onChange={(valueArr) => {
                if (valueArr !== null && valueArr.length > 0) {
                  const values: string[] = [];
                  valueArr.forEach((value) => {
                    values.push(value.value);
                  });
                  setValue(
                    "arboriculture.flower_limitations",
                    values.join(",")
                  );
                }
              }}
            />
            <Label>Limitaciones frutales</Label>
            <Select
              isMulti
              id="frutal_limitations"
              className="text-mds"
              options={speciesEnums.limitFrutoValues}
              placeholder="Selecciona limitaciones florales de la especie"
              onChange={(valueArr) => {
                if (valueArr !== null && valueArr.length > 0) {
                  const values: string[] = [];
                  valueArr.forEach((value) => {
                    values.push(value.value);
                  });
                  setValue("arboriculture.fruit_limitations", values.join(","));
                }
              }}
              isClearable={false}
              isSearchable={false}
            />
            <Label>Longevidad</Label>
            <Select
              id="longevity"
              options={speciesEnums.longevity}
              className="text-mds"
              placeholder="Seleccione la longevidad de la especie"
              isClearable={false}
              isSearchable={false}
              onChange={(value) => {
                if (value !== null)
                  setValue("arboriculture.longevity", value.value);
              }}
            />
            <Label>Plagas y enfermedades</Label>
            <Input
              id="name"
              placeholder="Ingrese las plagas y enfermedades de la especie"
              {...register("arboriculture.pests_diseases")}
            />

            <Label>Tasa Crecimiento</Label>
            <Select
              id="growth_rate"
              options={speciesEnums.growthRate}
              className="text-mds"
              placeholder="Seleccione tasa de crecimiento de la especie"
              onChange={(value) => {
                if (value !== null)
                  setValue("arboriculture.growth_rate", value.value);
              }}
              isClearable={false}
              isSearchable={false}
            />
            <Label>Requerimientos de luz</Label>
            <Select
              id="light_requirement"
              options={speciesEnums.lightRequirement}
              className="text-mds"
              placeholder="Seleccione requerimientos luminosos de la especie"
              onChange={(value) => {
                if (value !== null)
                  setValue("arboriculture.light_requirements", value.value);
              }}
              isClearable={false}
              isSearchable={false}
            />
            <Label>Altura maxima</Label>
            <Input
              id="maximum_height"
              type="number"
              step={0.01}
              defaultValue={0}
              min={0}
              className="text-mds"
              placeholder="Ingrese la altura maxima de la especie"
              {...register("arboriculture.maximum_height")}
            />
            <Label>Ancho de amplitud de la copa</Label>
            <Input
              id="crown_width"
              type="number"
              step={0.01}
              defaultValue={0}
              min={0}
              className="text-mds"
              placeholder="Ingrese el ancho de la amplitud de copa de la especie"
              {...register("arboriculture.crown_width")}
            />
            <Label>DAP</Label>
            <Input
              id="dap"
              type="number"
              step={0.01}
              defaultValue={0}
              min={0}
              className="text-mds"
              placeholder="Ingrese el DAP de la especie"
              {...register("arboriculture.DAP")}
            />
            <Label>Forma de copa</Label>
            <Select
              id="crown_shape"
              options={speciesEnums.crownShapeValues}
              className="text-mds"
              placeholder="Seleccione la forma de la copa de la especie"
              onChange={(value) => {
                if (value !== null)
                  setValue("arboriculture.crown_shape", value.value);
              }}
              isClearable={false}
              isSearchable={false}
            />

            <Label>Densidad de follaje</Label>
            <Select
              id="foliage_density"
              options={speciesEnums.priorityLevel}
              className="text-mds"
              placeholder="Indique el nivel de foleaje"
              onChange={(value) => {
                if (value != null)
                  setValue("arboriculture.foliage_density", value.value);
              }}
              isClearable={false}
              isSearchable={false}
            />
            <Label>Tipo de suelo</Label>
            <Select
              options={speciesEnums.soilTypes}
              className="text-mds"
              placeholder="Indique el tipo de suelo para la especie"
              onChange={(value) => {
                if (value != null)
                  setValue("arboriculture.soil_type", value.value);
              }}
              isClearable={false}
              isSearchable={false}
            />
            <Label>Humedad de la zona</Label>
            <Select
              id="humidity_zone"
              options={speciesEnums.humidityValues}
              className="text-mds"
              placeholder="Indique la humedad requerida para la especie"
              isClearable={false}
              isSearchable={false}
              onChange={(value) => {
                if (value != null)
                  setValue("arboriculture.humidity_zone", value.value);
              }}
            />
          </div>
        </TabsContent>
        <TabsContent value="images" className="w-full mx-auto px-8">
          <div className="input-fields-container">
            <Label>Presentacion</Label>
            <Input
              id="presentation_url"
              type="file"
              {...register("images.presentation_url")}
              placeholder="Ingrese imagen de presentación de la especie"
            />
            <Label>Fruto</Label>
            <Input
              id="fruit_url"
              type="file"
              {...register("images.fruit_url")}
              placeholder="Ingrese imagen de fruto de la especie"
            />
            <Label>Flor</Label>
            <Input
              id="flower_url"
              type="file"
              {...register("images.flower_url")}
              placeholder="Ingrese imagen de flor de la especie"
            />
            <Label>Detalle de flor</Label>
            <Input
              id="detailFlower_url"
              type="file"
              {...register("images.detailFlower_url")}
              placeholder="Ingrese imagen de detalle de flor de la especie"
            />
            <Label>Hoja</Label>
            <Input
              id="leaf_url"
              type="file"
              {...register("images.leaf_url")}
              placeholder="Ingrese imagen de hoja de la especie"
            />
            <Label>Corteza</Label>
            <Input
              id="bark_url"
              type="file"
              {...register("images.bark_url")}
              placeholder="Ingrese imagen de corteza de la especie"
            />
            <Label>Semilla</Label>
            <Input
              id="seed_url"
              type="file"
              {...register("images.seed_url")}
              placeholder="Ingrese imagen de semilla de la especie"
            />
          </div>
        </TabsContent>
      </Tabs>
      <div className="flex w-full mt-7 mb-12 justify-end">
        <Button type="submit">Guardar cambios</Button>
      </div>
    </form>
  );
};

export default EspecieEditForm;
