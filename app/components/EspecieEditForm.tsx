/* eslint-disable @typescript-eslint/restrict-plus-operands */
"use client";
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { speciesEnums, type FormSpeciesData } from "@/app/types/index";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";
import Select from "react-select";
import { Switch } from "./ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Textarea } from "./ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface EspecieEditFormProps {
  speciesData: any;
}

const EspecieEditForm: React.FC<EspecieEditFormProps> = ({ speciesData }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<FormSpeciesData>({
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
        bibliography: speciesData.taxonomy.bibliography
          .map((bibliography: any) => {
            const parts = [
              bibliography.authors,
              bibliography.publication_year,
              bibliography.title,
              bibliography.journal_name,
              bibliography.DOI_URL,
            ];
            return parts.join(",");
          })
          .join(";"),
        author: speciesData.taxonomy.author,
        etymology: speciesData.taxonomy.etymology,
        common_names: speciesData.taxonomy.common_names,
        growth_habit: speciesData.taxonomy.growth_habit,
        synonyms: speciesData.taxonomy.synonyms.synonym_name,
      },
      images: {
        presentation_url: "",
        fruit_url: "",
        flower_url: "",
        detailFlower_url: "",
        leaf_url: "",
        seed_url: "",
        bark_url: "",
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

  const checkFileSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    const size = 1000000;
    let err = "";

    if (files != null) {
      for (let x = 0; x < files.length; x++) {
        if (files[x].size > size) {
          err += files[x].type + " is too large, please pick a smaller file\n";
        }
      }
    }

    if (err !== "") {
      event.target.value = "";
      toast.error("Tu archivo excede el maximo de tamaño del archivo");
      return false;
    }

    return true;
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
    try {
      for (const key in data) {
        if (data[key] === "" || data[key] === undefined || data[key] === null) {
          data[key] = null;
        }
      }
      const images = [
        ["presentacion", data.images.presentation_url[0]],
        ["fruta", data.images.fruit_url[0]],
        ["flor", data.images.flower_url[0]],
        ["detalleflor", data.images.detailFlower_url[0]],
        ["hoja", data.images.leaf_url[0]],
        ["corteza", data.images.bark_url[0]],
        ["semilla", data.images.seed_url[0]],
      ];
      const results: any[] = [];
      images.forEach(async (image) => {
        if (image[1] !== undefined) {
          const newformData = new FormData();
          newformData.append("file", image[1]);
          newformData.append("upload_preset", "my-uploads");
          const response = await fetch(
            "https://api.cloudinary.com/v1_1/floraguayaquil/image/upload",
            {
              method: "POST",
              body: newformData,
            }
          ).catch((e) => {
            throw new Error("Error al subir imagen");
          });
          const imgdata = await response.json();
          const imageUrl = imgdata.url;
          results[image[0]] = imageUrl;
        } else {
          results[image[0]] = null;
        }
      });
      const modifiedData: FormSpeciesData = {
        id: speciesData.id,
        name: speciesData.name,
        availableStatus:
          data.availableStatus !== speciesData.availables_status
            ? data.availableStatus
            : speciesData.availables_status,
        taxonomy: {
          id: speciesData.taxonomy.id,
          synonymsId: speciesData.taxonomy.id,
          familyId:
            data.taxonomy.family === null ||
            data.taxonomy.family === speciesData.taxonomy.family.family
              ? speciesData.taxonomy.family.id
              : null,
          bibliographyIds: speciesData.taxonomy.bibliography
            .map((bibliography: any) => {
              return bibliography.id;
            })
            .join(","),
          family:
            data.taxonomy.family !== null &&
            data.taxonomy.family !== speciesData.taxonomy.family.family
              ? data.taxonomy.family
              : null,
          familyDescription:
            data.taxonomy.familyDescription !== null &&
            data.taxonomy.familyDescription !==
              speciesData.taxonomy.family.description
              ? data.taxonomy.familyDescription
              : null,
          genus:
            data.taxonomy.genus !== null &&
            data.taxonomy.genus !== speciesData.taxonomy.genus
              ? data.taxonomy.genus
              : null,
          tSpecies:
            data.taxonomy.tSpecies !== null &&
            data.taxonomy.tSpecies !== speciesData.taxonomy.tSpecies
              ? data.taxonomy.tSpecies
              : null,
          subspecies:
            data.taxonomy.subspecies !== null &&
            data.taxonomy.subspecies !== speciesData.taxonomy.subspecies
              ? data.taxonomy.subspecies
              : null,
          variety:
            data.taxonomy.variety !== null &&
            data.taxonomy.variety !== speciesData.taxonomy.variety
              ? data.taxonomy.variety
              : null,
          bibliography:
            data.taxonomy.bibliography !== null &&
            data.taxonomy.bibliography !==
              speciesData.taxonomy.bibliography
                .map((bibliography: any) => {
                  const parts = [
                    bibliography.authors,
                    bibliography.publication_year,
                    bibliography.title,
                    bibliography.journal_name,
                    bibliography.DOI_URL,
                  ];
                  return parts.join(",");
                })
                .join(";")
              ? data.taxonomy.bibliography
              : null,
          author:
            data.taxonomy.author !== null &&
            data.taxonomy.author !== speciesData.taxonomy.author
              ? data.taxonomy.author
              : null,
          etymology:
            data.taxonomy.etymology !== null &&
            data.taxonomy.etymology !== speciesData.taxonomy.etymology
              ? data.taxonomy.etymology
              : null,
          common_names:
            data.taxonomy.common_names !== null &&
            data.taxonomy.common_names !== speciesData.taxonomy.common_names
              ? data.taxonomy.common_names
              : null,
          growth_habit:
            data.taxonomy.growth_habit !== null &&
            data.taxonomy.growth_habit !== speciesData.taxonomy.growth_habit
              ? data.taxonomy.growth_habit
              : null,
          synonyms:
            data.taxonomy.synonyms !== null &&
            data.taxonomy.synonyms !==
              speciesData.taxonomy.synonyms.synonym_name
              ? data.taxonomy.synonyms
              : null,
        },
        images: {
          presentation_url: results[0] !== null ? results[0] : "No determinado",
          fruit_url: results[1] !== null ? results[1] : "No determinado",
          flower_url: results[2] !== null ? results[2] : "No determinado",
          detailFlower_url: results[3] !== null ? results[3] : "No determinado",
          leaf_url: results[4] !== null ? results[4] : "No determinado",
          bark_url: results[5] !== null ? results[5] : "No determinado",
          seed_url: results[6] !== null ? results[6] : "No determinado",
        },
        arboriculture: {
          public_spaceUse:
            data.arboriculture.public_spaceUse !== null &&
            data.arboriculture.public_spaceUse !==
              speciesData.arboriculture.public_spaceUse
              ? data.arboriculture.public_spaceUse
              : null,
          flower_limitations:
            data.arboriculture.flower_limitations !== null &&
            data.arboriculture.flower_limitations !==
              speciesData.arboriculture.flower_limitations
              ? data.arboriculture.flower_limitations
              : null,
          fruit_limitations:
            data.arboriculture.fruit_limitations !== null &&
            data.arboriculture.fruit_limitations !==
              speciesData.arboriculture.fruit_limitations
              ? data.arboriculture.fruit_limitations
              : null,
          longevity:
            data.arboriculture.longevity !== null &&
            data.arboriculture.longevity !== speciesData.arboriculture.longevity
              ? data.arboriculture.longevity
              : null,
          pests_diseases:
            data.arboriculture.pests_diseases !== null &&
            data.arboriculture.pests_diseases !==
              speciesData.arboriculture.pests_diseases
              ? data.arboriculture.pests_diseases
              : null,
          growth_rate:
            data.arboriculture.growth_rate !== null &&
            data.arboriculture.growth_rate !==
              speciesData.arboriculture.growth_rate
              ? data.arboriculture.growth_rate
              : null,
          light_requirements:
            data.arboriculture.light_requirements !== null &&
            data.arboriculture.light_requirements !==
              speciesData.arboriculture.light_requirements
              ? data.arboriculture.light_requirements
              : null,
          maximum_height:
            data.arboriculture.maximum_height !== null &&
            data.arboriculture.maximum_height !==
              speciesData.arboriculture.maximum_height
              ? data.arboriculture.maximum_height
              : null,
          crown_width:
            data.arboriculture.crown_width !== null &&
            data.arboriculture.crown_width !==
              speciesData.arboriculture.crown_width
              ? data.arboriculture.crown_width
              : null,
          DAP:
            data.arboriculture.DAP !== null &&
            data.arboriculture.DAP !== speciesData.arboriculture.DAP
              ? data.arboriculture.DAP
              : null,
          crown_shape:
            data.arboriculture.crown_shape !== null &&
            data.arboriculture.crown_shape !==
              speciesData.arboriculture.crown_shape
              ? data.arboriculture.crown_shape
              : null,
          foliage_density:
            data.arboriculture.foliage_density !== null &&
            data.arboriculture.foliage_density !==
              speciesData.arboriculture.foliage_density
              ? data.arboriculture.foliage_density
              : null,
          soil_type:
            data.arboriculture.soil_type !== null &&
            data.arboriculture.soil_type !== speciesData.arboriculture.soil_type
              ? data.arboriculture.soil_type
              : null,
          humidity_zone:
            data.arboriculture.humidity_zone !== null &&
            data.arboriculture.humidity_zone !==
              speciesData.arboriculture.humidity_zone
              ? data.arboriculture.humidity_zone
              : null,
        },
        ecology: {
          associatedFaunaId: speciesData.id,
          altitudinal_range:
            data.ecology.altitudinal_range !== null &&
            data.ecology.altitudinal_range !==
              speciesData.ecology.altitudinal_range
              ? data.ecology.altitudinal_range
              : null,
          geo_distribution:
            data.ecology.geo_distribution !== null &&
            data.ecology.geo_distribution !==
              speciesData.ecology.geo_distribution
              ? data.ecology.geo_distribution
              : null,
          origin:
            data.ecology.origin !== null &&
            data.ecology.origin !== speciesData.ecology.origin
              ? data.ecology.origin
              : null,
          conservation_status:
            data.ecology.conservation_status !== null &&
            data.ecology.conservation_status !==
              speciesData.ecology.conservation_status
              ? data.ecology.conservation_status
              : null,
          fauna_attraction:
            data.ecology.fauna_attraction !== null &&
            data.ecology.fauna_attraction !==
              speciesData.ecology.fauna_attraction
              ? data.ecology.fauna_attraction
              : null,
          associated_fauna:
            data.ecology.associated_fauna !== null &&
            data.ecology.associated_fauna !==
              speciesData.ecology.associated_fauna.fauna_name
              ? data.ecology.associated_fauna
              : null,
        },
        ethnobotany: {
          category:
            data.ethnobotany.category !== null &&
            data.ethnobotany.category !== speciesData.ethnobotany.category
              ? data.ethnobotany.category
              : null,
          use_detail:
            data.ethnobotany.use_detail !== null &&
            data.ethnobotany.use_detail !== speciesData.ethnobotany.use_detail
              ? data.ethnobotany.use_detail
              : null,
        },
        flower: {
          floral_attributes:
            data.flower.floral_attributes !== null &&
            data.flower.floral_attributes !==
              speciesData.flower.floral_attributes
              ? data.flower.floral_attributes
              : null,
          flower_color:
            data.flower.flower_color !== null &&
            data.flower.flower_color !== speciesData.flower.flower_color
              ? data.flower.flower_color
              : null,
          flower_arrangement:
            data.flower.flower_arrangement !== null &&
            data.flower.flower_arrangement !==
              speciesData.flower.flower_arrangement
              ? data.flower.flower_arrangement
              : null,
          pollination_system:
            data.flower.pollination_system !== null &&
            data.flower.pollination_system !==
              speciesData.flower.pollination_system
              ? data.flower.pollination_system
              : null,
          flowering_season:
            data.flower.flowering_season !== null &&
            data.flower.flowering_season !== speciesData.flower.flowering_season
              ? data.flower.flowering_season
              : null,
          flowering_months:
            data.flower.flowering_months !== null &&
            data.flower.flowering_months !== speciesData.flower.flowering_months
              ? data.flower.flowering_months
              : null,
        },
        leaf: {
          leaf_attributes:
            data.leaf.leaf_attributes !== null &&
            data.leaf.leaf_attributes !== speciesData.leaf.leaf_attributes
              ? data.leaf.leaf_attributes
              : null,
          leaf_persistence:
            data.leaf.leaf_persistence !== null &&
            data.leaf.leaf_persistence !== speciesData.leaf.leaf_persistence
              ? data.leaf.leaf_persistence
              : null,
          stemLeaf_position:
            data.leaf.stemLeaf_position !== null &&
            data.leaf.stemLeaf_position !== speciesData.leaf.stemLeaf_position
              ? data.leaf.stemLeaf_position
              : null,
          leaf_composition:
            data.leaf.leaf_composition !== null &&
            data.leaf.leaf_composition !== speciesData.leaf.leaf_composition
              ? data.leaf.leaf_composition
              : null,
        },
        root: {
          reproduction_form:
            data.root.reproduction_form !== null &&
            data.root.reproduction_form !== speciesData.root.reproduction_form
              ? data.root.reproduction_form
              : null,
          root_attributes:
            data.root.root_attributes !== null &&
            data.root.root_attributes !== speciesData.root.root_attributes
              ? data.root.root_attributes
              : null,
          rooting_type:
            data.root.rooting_type !== null &&
            data.root.rooting_type !== speciesData.root.rooting_type
              ? data.root.rooting_type
              : null,
        },
        seeds: {
          fruitType:
            data.seeds.fruitType !== null &&
            data.seeds.fruitType !== speciesData.seeds.fruitType
              ? data.seeds.fruitType
              : null,
          dispersal_system:
            data.seeds.dispersal_system !== null &&
            data.seeds.dispersal_system !== speciesData.seeds.dispersal_system
              ? data.seeds.dispersal_system
              : null,
          fruit_attributes:
            data.seeds.fruit_attributes !== null &&
            data.seeds.fruit_attributes !== speciesData.seeds.fruit_attributes
              ? data.seeds.fruit_attributes
              : null,
          seed_attributes:
            data.seeds.seed_attributes !== null &&
            data.seeds.seed_attributes !== speciesData.seeds.seed_attributes
              ? data.seeds.seed_attributes
              : null,
          fruiting_months:
            data.seeds.fruiting_months !== null &&
            data.seeds.fruiting_months !== speciesData.seeds.fruiting_months
              ? data.seeds.fruiting_months
              : null,
        },
        stalk: {
          bark_attributes:
            data.stalk.bark_attributes !== null &&
            data.stalk.bark_attributes !== speciesData.stalk.bark_attributes
              ? data.stalk.bark_attributes
              : null,
          barkColor:
            data.stalk.barkColor !== null &&
            data.stalk.barkColor !== speciesData.stalk.barkColor
              ? data.stalk.barkColor
              : null,
        },
      };
      await axios.put(`/api/species`, modifiedData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
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
      <div className="flex flex-row w-full justify-between">
        <h1 className="scroll-m-20  pb-2 text-3xl font-bold tracking-tight transition-colors mt-5">
          {speciesData.name}
        </h1>
      </div>
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
              value={speciesEnums.growth_habit.find(
                (option) => option.value === getValues("taxonomy.growth_habit")
              )}
            />
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Label>Bibliografia</Label>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-gray-600 text-sm p-2">
                    Ingrese varias bibliografias separandolos usando
                    &quot;;&quot; y siguiendo el formato{" "}
                    <span>Autor,Año,Titulo,Nombre Editorial,DOI</span>
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
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
              value={speciesEnums.reproductionForm.find(
                (option) => option.value === getValues("root.reproduction_form")
              )}
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
              value={speciesEnums.rootingTypes.find(
                (option) => option.value === getValues("root.rooting_type")
              )}
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
              value={speciesEnums.flowerArrangement.find(
                (option) =>
                  option.value === getValues("flower.flower_arrangement")
              )}
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
              value={speciesEnums.polinizationValues.find(
                (option) =>
                  option.value === getValues("flower.pollination_system")
              )}
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
              value={speciesEnums.floweringSeason.find(
                (option) =>
                  option.value === getValues("flower.flowering_season")
              )}
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
              value={speciesEnums.leafPersistence.find(
                (option) => option.value === getValues("leaf.leaf_persistence")
              )}
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
              value={speciesEnums.stemLeafPosition.find(
                (option) => option.value === getValues("leaf.stemLeaf_position")
              )}
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
              value={speciesEnums.leafComposition.find(
                (option) => option.value === getValues("leaf.leaf_composition")
              )}
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
              value={speciesEnums.fruitType.find(
                (option) => option.value === getValues("seeds.fruitType")
              )}
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
              value={speciesEnums.dispersalValues.find(
                (option) => option.value === getValues("seeds.dispersal_system")
              )}
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
              value={speciesEnums.altitudeRange.find(
                (option) =>
                  option.value === getValues("ecology.altitudinal_range")
              )}
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
              value={speciesEnums.origin.find(
                (option) => option.value === getValues("ecology.origin")
              )}
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
              value={speciesEnums.conservationStatus.find(
                (option) =>
                  option.value === getValues("ecology.conservation_status")
              )}
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
              value={speciesEnums.faunaAtraction.find(
                (option) =>
                  option.value === getValues("ecology.fauna_attraction")
              )}
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
              value={speciesEnums.useCategoryValues.filter((option) => {
                return getValues("ethnobotany.category").includes(option.value);
              })}
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
              value={speciesEnums.publicUseValues.filter((option) => {
                return getValues("arboriculture.public_spaceUse").includes(
                  option.value
                );
              })}
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
              value={speciesEnums.limitFloralValues.filter((option) => {
                return getValues("arboriculture.flower_limitations").includes(
                  option.value
                );
              })}
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
              value={speciesEnums.limitFrutoValues.filter((option) => {
                return getValues("arboriculture.fruit_limitations").includes(
                  option.value
                );
              })}
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
              value={speciesEnums.longevity.find(
                (option) =>
                  option.value === getValues("arboriculture.longevity")
              )}
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
              value={speciesEnums.growthRate.find(
                (option) =>
                  option.value === getValues("arboriculture.growth_rate")
              )}
              isClearable={false}
              isSearchable={false}
            />
            <Label>Requerimientos de luz</Label>
            <Select
              id="light_requirement"
              options={speciesEnums.lightRequirement}
              value={speciesEnums.lightRequirement.find(
                (option) =>
                  option.value === getValues("arboriculture.light_requirements")
              )}
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
              value={speciesEnums.crownShapeValues.find(
                (option) =>
                  option.value === getValues("arboriculture.crown_shape")
              )}
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
              value={speciesEnums.priorityLevel.find(
                (option) =>
                  option.value === getValues("arboriculture.foliage_density")
              )}
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
              value={speciesEnums.soilTypes.find(
                (option) =>
                  option.value === getValues("arboriculture.soil_type")
              )}
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
              value={speciesEnums.humidityValues.find(
                (option) =>
                  option.value === getValues("arboriculture.humidity_zone")
              )}
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
              accept="image/jpeg"
              onChange={(e) => {
                if (checkFileSize(e) && e.target.files != null) {
                  void register("images.presentation_url").onChange(e);
                  checkFileSize(e);
                }
              }}
              placeholder="Ingrese imagen de presentación de la especie"
            />
            {errors?.images?.presentation_url != null && (
              <p className="text-red-500 text-sm">
                {errors.images.presentation_url.message?.toString()}
              </p>
            )}
            <Label>Fruto</Label>
            <Input
              id="fruit_url"
              type="file"
              {...register("images.fruit_url")}
              accept="image/jpeg"
              onChange={(e) => {
                if (checkFileSize(e) && e.target.files != null) {
                  void register("images.fruit_url").onChange(e);
                  checkFileSize(e);
                }
              }}
              placeholder="Ingrese imagen de fruto de la especie"
            />
            {errors?.images?.fruit_url != null && (
              <p className="text-red-500 text-sm">
                {errors.images.fruit_url.message?.toString()}
              </p>
            )}
            <Label>Flor</Label>
            <Input
              id="flower_url"
              type="file"
              accept="image/jpeg"
              {...register("images.flower_url")}
              onChange={(e) => {
                if (checkFileSize(e) && e.target.files != null) {
                  void register("images.flower_url").onChange(e);
                  checkFileSize(e);
                }
              }}
              placeholder="Ingrese imagen de flor de la especie"
            />
            {errors?.images?.flower_url != null && (
              <p className="text-red-500 text-sm">
                {errors.images.flower_url.message?.toString()}
              </p>
            )}
            <Label>Detalle de flor</Label>
            <Input
              id="detailFlower_url"
              type="file"
              accept="image/jpeg"
              {...register("images.detailFlower_url")}
              onChange={(e) => {
                if (checkFileSize(e) && e.target.files != null) {
                  void register("images.detailFlower_url").onChange(e);
                  checkFileSize(e);
                }
              }}
              placeholder="Ingrese imagen de detalle de flor de la especie"
            />
            {errors?.images?.detailFlower_url != null && (
              <p className="text-red-500 text-sm">
                {errors.images.detailFlower_url.message?.toString()}
              </p>
            )}
            <Label>Hoja</Label>
            <Input
              id="leaf_url"
              type="file"
              {...register("images.leaf_url")}
              placeholder="Ingrese imagen de hoja de la especie"
              accept="image/jpeg"
              onChange={(e) => {
                if (checkFileSize(e) && e.target.files != null) {
                  void register("images.leaf_url").onChange(e);
                  checkFileSize(e);
                }
              }}
            />
            {errors?.images?.leaf_url != null && (
              <p className="text-red-500 text-sm">
                {errors.images.leaf_url.message?.toString()}
              </p>
            )}
            <Label>Corteza</Label>
            <Input
              id="bark_url"
              type="file"
              {...register("images.bark_url")}
              placeholder="Ingrese imagen de corteza de la especie"
              accept="image/jpeg"
              onChange={(e) => {
                if (checkFileSize(e) && e.target.files != null) {
                  void register("images.bark_url").onChange(e);
                  checkFileSize(e);
                }
              }}
            />
            {errors?.images?.bark_url != null && (
              <p className="text-red-500 text-sm">
                {errors.images.bark_url.message?.toString()}
              </p>
            )}
            <Label>Semilla</Label>
            <Input
              id="seed_url"
              type="file"
              {...register("images.seed_url")}
              accept="image/jpeg"
              onChange={(e) => {
                if (checkFileSize(e) && e.target.files != null) {
                  void register("images.seed_url").onChange(e);
                  checkFileSize(e);
                }
              }}
              placeholder="Ingrese imagen de semilla de la especie"
            />
            {errors?.images?.seed_url != null && (
              <p className="text-red-500 text-sm">
                {errors.images.seed_url.message?.toString()}
              </p>
            )}
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
