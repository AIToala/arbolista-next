/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-misused-promises */
"use client";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs";

import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";
import { speciesEnums, type FormSpeciesData } from "@/app/types/index";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import Select from "react-select";

const DashboardSpeciePage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormSpeciesData>();

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

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      let formData = {
        ...data,
        images: {
          presentation_url: "No determinado",
          fruit_url: "No determinado",
          flower_url: "No determinado",
          detailFlower_url: "No determinado",
          leaf_url: "No determinado",
          bark_url: "No determinado",
          seed_url: "No determinado",
        },
      };
      const keys = Object.keys(data.images);
      for (const key of keys) {
        if (data.images[key] !== undefined && data.images[key].length > 0) {
          const image = data.images[key][0];
          const newFormData = new FormData();
          newFormData.append("file", image);
          newFormData.append("upload_preset", "my-uploads");

          const response = await fetch(
            "https://api.cloudinary.com/v1_1/floraguayaquil/image/upload",
            {
              method: "POST",
              body: newFormData,
            }
          );

          const imgData = await response.json();
          const imageUrl = imgData.url;
          formData = {
            ...formData,
            images: { ...formData.images, [key]: imageUrl },
          };
        }
      }

      axios
        .post("/api/species", formData)
        .then(() => {
          toast.success("Especie creada con exito");
          router.push("/dashboard");
        })
        .catch((error) => {
          console.error(error);
          toast.error("Hubo un error al momento de crear la especie");
        });
    } catch (error) {
      console.error(error);
      toast.error("Hubo un error al momento de crear la especie");
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div className="w-full mt-[20px]  flex justify-end mr-[100px] p-10">
        <Button type="submit" onClick={handleSubmit(onSubmit)}>
          Agregar especie
        </Button>
      </div>
      <Tabs
        defaultValue="taxonomy"
        className=" grid gap-4 w-full mt-[40px] mb-[100px] p-0"
      >
        <TabsList className="w-full flex flex-row flex-wrap h-fit">
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

        <TabsContent value="taxonomy" className="w-full mx-auto px-8">
          <div className="input-fields-container">
            <Label>Familia</Label>
            <Input
              {...register("taxonomy.family", {
                required: "Campo obligatorio",
              })}
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
              {...register("taxonomy.genus", { required: "Campo obligatorio" })}
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
              {...register("taxonomy.tSpecies", {
                required: "Campo obligatorio",
              })}
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
              accept="image/jpeg"
              {...register("images.presentation_url", {
                required: "Campo obligatorio",
              })}
              onChange={(e) => {
                void register("images.presentation_url", {
                  required: "Campo obligatorio",
                }).onChange(e);
                checkFileSize(e);
              }}
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
              accept="image/jpeg"
              {...register("images.fruit_url")}
              onChange={(e) => {
                void register("images.fruit_url", {}).onChange(e);
                checkFileSize(e);
              }}
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
                void register("images.flower_url", {}).onChange(e);
                checkFileSize(e);
              }}
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
                void register("images.detailFlower_url", {}).onChange(e);
                checkFileSize(e);
              }}
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
              accept="image/jpeg"
              {...register("images.leaf_url")}
              onChange={(e) => {
                void register("images.leaf_url", {}).onChange(e);
                checkFileSize(e);
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
              accept="image/jpeg"
              {...register("images.bark_url")}
              onChange={(e) => {
                void register("images.bark_url", {}).onChange(e);
                checkFileSize(e);
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
              accept="image/jpeg"
              {...register("images.seed_url")}
              onChange={(e) => {
                void register("images.seed_url", {}).onChange(e);
                checkFileSize(e);
              }}
            />
            {errors?.images?.seed_url != null && (
              <p className="text-red-500 text-sm">
                {errors.images.seed_url.message?.toString()}
              </p>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
export default DashboardSpeciePage;
