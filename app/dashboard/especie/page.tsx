"use client";
import {
  FileInput,
  Label,
  Select,
  Tabs,
  TextInput,
  Textarea,
} from "flowbite-react";

const DashboardIndexPage = () => {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          flex: 1,
          marginLeft: "20px",
          marginTop: "100px",
          marginRight: "50px",
          marginBottom: "100px",
        }}
      >
        <Tabs.Group
          aria-label="Tabs with icons"
          style="underline"
          className="bg-red"
        >
          <Tabs.Item active title="Taxonomia">
            <div className="flex max-w-md flex-col gap-4">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="familia" value="Familia" />
                </div>
                <TextInput
                  id="familia"
                  sizing="md"
                  type="text"
                  placeholder="Ingrese la familia de la especie"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="genero" value="Genero" />
                </div>
                <TextInput
                  id="genero"
                  sizing="md"
                  type="text"
                  placeholder="Ingrese el genero de la especie"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="especie" value="Especie" />
                </div>
                <TextInput
                  id="especie"
                  sizing="md"
                  type="text"
                  placeholder="Ingrese la especie"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="subespecie" value="Subespecie" />
                </div>
                <TextInput
                  id="subespecie"
                  sizing="md"
                  type="text"
                  placeholder="Ingrese la subespecie"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="variedad" value="Variedad" />
                </div>
                <TextInput
                  id="variedad"
                  sizing="md"
                  type="text"
                  placeholder="Ingrese la variedad"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="autor" value="Autor" />
                </div>
                <TextInput
                  id="autor"
                  sizing="md"
                  type="text"
                  placeholder="Ingrese el autor de la especie"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="sinonimos" value="Sinonimos" />
                </div>
                <TextInput
                  id="sinonimos"
                  sizing="md"
                  type="text"
                  placeholder="Ingrese los sinonimos de la especie"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="etimologia" value="Etimologia" />
                </div>
                <Textarea
                  id="etimologia"
                  placeholder="Ingrese aqui la etimologia de la especie"
                  required
                  rows={1}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="nombrescomunes" value="Nombres Comunes" />
                </div>
                <TextInput
                  id="nombrescomunes"
                  placeholder="Ingrese aqui los nombres comunes de la especie"
                  required
                />
              </div>
              <div className="max-w-md" id="select">
                <div className="mb-2 block">
                  <Label
                    htmlFor="habitoscrecimiento"
                    value="Selecciona el habito de crecimiento"
                  />
                </div>
                <Select id="habitoscrecimiento" required>
                  <option>No determinado</option>
                  <option>Arborea</option>
                  <option>Arbustiva</option>
                  <option>Palmera</option>
                  <option>Cactácea</option>
                </Select>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="bibliografia" value="Bibliografia" />
                </div>
                <Textarea
                  id="bibliografia"
                  placeholder="Ingrese aqui la bibliografia de la especie"
                  required
                  rows={1}
                />
              </div>
            </div>
          </Tabs.Item>

          <Tabs.Item title="Tallo">
            <div className="flex max-w-md flex-col gap-4">
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="atributoscorteza"
                    value="Atributos de corteza"
                  />
                </div>
                <TextInput
                  id="atributoscorteza"
                  sizing="md"
                  type="text"
                  placeholder="Ingrese los atributos de la corteza"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="colorcorteza" value="Color Corteza" />
                </div>
                <TextInput
                  id="colorcorteza"
                  sizing="md"
                  type="text"
                  placeholder="Ingrese los colores de la especie"
                />
              </div>
              <div className="max-w-md" id="fileUpload">
                <div className="mb-2 block">
                  <Label htmlFor="tallofoto" value="Upload file" />
                </div>
                <FileInput
                  helperText="Selecciona una foto del tallo de la especie"
                  id="tallofoto"
                />
              </div>
            </div>
          </Tabs.Item>

          <Tabs.Item title="Raiz">
            <div className="flex max-w-md flex-col gap-4">
              <div className="max-w-md" id="select">
                <div className="mb-2 block">
                  <Label
                    htmlFor="formareproduccion"
                    value="Selecciona la forma de reproduccion"
                  />
                </div>
                <Select id="formareproduccion" required>
                  <option>No determinado</option>
                  <option>Por semilla</option>
                  <option>Por estaca</option>
                  <option>Por bulbo</option>
                  <option>Por tubérculo</option>
                  <option>Por rizoma</option>
                  <option>Por estolón</option>
                  <option>Por acodo</option>
                  <option>División de pie</option>
                </Select>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="atributosradiculares"
                    value="Atributos Radiculares"
                  />
                </div>
                <Textarea
                  id="atributosradiculares"
                  placeholder="Ingrese aqui los atributos radiculares de la especie"
                  required
                  rows={1}
                />
              </div>
              <div className="max-w-md" id="select">
                <div className="mb-2 block">
                  <Label
                    htmlFor="tiposenraizamiento"
                    value="Selecciona el tipo de enraizamiento"
                  />
                </div>
                <Select id="tiposenraizamiento" required>
                  <option>No determinado</option>
                  <option>Superficial</option>
                  <option>Medio</option>
                  <option>Profundo</option>
                </Select>
              </div>
            </div>
          </Tabs.Item>

          <Tabs.Item title="Flor">
            <div className="flex max-w-md flex-col gap-4">
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="atributosflorales"
                    value="Atributos Florales"
                  />
                </div>
                <Textarea
                  id="atributosflorales"
                  placeholder="Ingrese aqui los atributos florales de la especie"
                  required
                  rows={1}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="flowercolor" value="Color de la flor" />
                </div>
                <TextInput
                  id="flowercolor"
                  sizing="md"
                  type="text"
                  placeholder="Ingrese el color de la flor"
                />
              </div>
              <div className="max-w-md" id="select">
                <div className="mb-2 block">
                  <Label
                    htmlFor="flower_arrangement"
                    value="Selecciona la disposición de las flores"
                  />
                </div>
                <Select id="flower_arrangement" required>
                  <option>No determinado</option>
                  <option>Solitaria</option>
                  <option>Racimo</option>
                  <option>Panícula</option>
                  <option>Corimbo</option>
                  <option>Espiga</option>
                  <option>Amento</option>
                  <option>Espádice</option>
                  <option>Cima</option>
                  <option>Cabezuela</option>
                  <option>Umbela</option>
                  <option>No aplica</option>
                </Select>
              </div>
              <div className="max-w-md" id="select">
                <div className="mb-2 block">
                  <Label
                    htmlFor="pollination_system"
                    value="Selecciona el sistema de polinizacion"
                  />
                </div>
                <Select id="pollination_system" required>
                  <option>No determinado</option>
                  <option>Anemófila (viento)</option>
                  <option>Hidrófila (agua)</option>
                  <option>Zoófila (animales)</option>
                  <option>Aves</option>
                  <option>Mamíferos</option>
                  <option>Insectos</option>
                  <option>Aves nectarívoras</option>
                </Select>
              </div>
              <div className="max-w-md" id="select">
                <div className="mb-2 block">
                  <Label
                    htmlFor="flowering_season"
                    value="Selecciona la estación de floración"
                  />
                </div>
                <Select id="flowering_season" required>
                  <option>No determinado</option>
                  <option>Permanente</option>
                  <option>Estacional</option>
                  <option>Estación seca</option>
                  <option>Estación lluviosa</option>
                  <option>No aplica</option>
                </Select>
              </div>
              <div className="max-w-md" id="fileUpload">
                <div className="mb-2 block">
                  <Label htmlFor="flower_url" value="Upload file" />
                </div>
                <FileInput
                  helperText="Selecciona una foto de la flor"
                  id="flower_url"
                />
              </div>
              <div className="max-w-md" id="fileUpload">
                <div className="mb-2 block">
                  <Label htmlFor="detailFlower_url" value="Upload file" />
                </div>
                <FileInput
                  helperText="Selecciona una foto del detalle de la flor"
                  id="detailFlower_url"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="flowering_months"
                    value="Meses de floración"
                  />
                </div>
                <TextInput
                  id="flowering_months"
                  sizing="md"
                  type="text"
                  placeholder="Ingrese los meses de floración"
                />
              </div>
            </div>
          </Tabs.Item>

          <Tabs.Item title="Hoja">
            <div className="flex max-w-md flex-col gap-4">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="leaf_attributes" value="Atributos Foliares" />
                </div>
                <Textarea
                  id="leaf_attributes"
                  placeholder="Ingrese aqui los atributos foliares de la especie"
                  required
                  rows={1}
                />
              </div>
              <div className="max-w-md" id="select">
                <div className="mb-2 block">
                  <Label
                    htmlFor="leaf_persistence"
                    value="Selecciona la persistencia de la hoja"
                  />
                </div>
                <Select id="leaf_persistence" required>
                  <option>No determinado</option>
                  <option>Caducifolia</option>
                  <option>Semicaducifolia</option>
                  <option>Perenne</option>
                  <option>No aplica</option>
                </Select>
              </div>
              <div className="max-w-md" id="select">
                <div className="mb-2 block">
                  <Label
                    htmlFor="stemLeaf_position"
                    value="Selecciona la posicion de la hoja en el tallo"
                  />
                </div>
                <Select id="stemLeaf_position" required>
                  <option>No determinado</option>
                  <option>Alterna</option>
                  <option>Opuesta</option>
                  <option>Fasciculada</option>
                  <option>Roseta</option>
                  <option>Verticilada</option>
                </Select>
              </div>
              <div className="max-w-md" id="select">
                <div className="mb-2 block">
                  <Label
                    htmlFor="leaf_composition"
                    value="Selecciona la posicion de la hoja"
                  />
                </div>
                <Select id="leaf_composition" required>
                  <option>No determinado</option>
                  <option>Simple</option>
                  <option>Digitado compuesta</option>
                  <option>Compuesta paripinnada</option>
                  <option>Compuesta imparipinnada</option>
                  <option>Compuesta unifoliada</option>
                  <option>Compuesta bifoliada</option>
                  <option>Compuesta trifoliada</option>
                  <option>Compuesta bipinnada</option>
                  <option>Compuesta</option>
                </Select>
              </div>
              <div className="max-w-md" id="fileUpload">
                <div className="mb-2 block">
                  <Label htmlFor="leaf_url" value="Upload file" />
                </div>
                <FileInput
                  helperText="Selecciona una foto de la hoja"
                  id="leaf_url"
                />
              </div>
            </div>
          </Tabs.Item>

          <Tabs.Item title="Fruto/Semilla">
            <div className="flex max-w-md flex-col gap-4">
              <div className="max-w-md" id="select">
                <div className="mb-2 block">
                  <Label
                    htmlFor="fruitType"
                    value="Selecciona el tipo de fruto"
                  />
                </div>
                <Select id="fruitType" required>
                  <option>No determinado</option>
                  <option>Legumbre</option>
                  <option>Legumbre plana</option>
                  <option>CLegumbre cilíndrica</option>
                  <option>Folículo</option>
                  <option>Silicua</option>
                  <option>Cápsula</option>
                  <option>Pixidio</option>
                  <option>Aquenio</option>
                  <option>Cariopse</option>
                  <option>Sámara</option>
                  <option>Baya</option>
                  <option>Drupa</option>
                  <option>Estróbilo</option>
                  <option>Nuez</option>
                  <option>Poma</option>
                  <option>Sícono</option>
                  <option>No aplica</option>
                </Select>
              </div>
              <div className="max-w-md" id="select">
                <div className="mb-2 block">
                  <Label
                    htmlFor="dispersal_system"
                    value="Selecciona el sistema de dispersión de los frutos"
                  />
                </div>
                <Select id="dispersal_system" required>
                  <option>No determinado</option>
                  <option>Anemocoria (viento)</option>
                  <option>Hidrocoria (agua)</option>
                  <option>Baricoria (gravedad)</option>
                  <option>Zoocoria (animales)</option>
                  <option>Aves</option>
                  <option>Mamíferos</option>
                  <option>Insectos</option>
                  <option>Aves semilleras</option>
                  <option>Aves frugívoras</option>
                </Select>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="fruit_attributes"
                    value="Atributos de fruto"
                  />
                </div>
                <TextInput
                  id="fruit_attributes"
                  sizing="md"
                  type="text"
                  placeholder="Ingrese los atributos del fruto"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="seed_attributes"
                    value="Atributos de la semilla"
                  />
                </div>
                <TextInput
                  id="seed_attributes"
                  sizing="md"
                  type="text"
                  placeholder="Ingrese los atributos de la semilla"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="fruiting_months"
                    value="Meses de fructificación"
                  />
                </div>
                <TextInput
                  id="fruiting_months"
                  sizing="md"
                  type="text"
                  placeholder="Ingrese los meses de fructificación"
                />
              </div>
            </div>
          </Tabs.Item>

          <Tabs.Item title="Ecologia">
            <div className="flex max-w-md flex-col gap-4">
              <div className="max-w-md" id="select">
                <div className="mb-2 block">
                  <Label
                    htmlFor="altitudinal_range"
                    value="Selecciona el rango altitudinal de la especie"
                  />
                </div>
                <Select id="altitudinal_range" required>
                  <option>No determinado</option>
                  <option>0-500</option>
                  <option>500-1000</option>
                  <option>1000-1500</option>
                  <option>1500-2000</option>
                  <option>2000-2500</option>
                  <option>2500-3000</option>
                  <option>mayor a 3000</option>
                </Select>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="geo_distribution"
                    value="Distribución geográfica"
                  />
                </div>
                <TextInput
                  id="geo_distribution"
                  sizing="md"
                  type="text"
                  placeholder="Ingrese la distribucion geográfica de la especie"
                />
              </div>
              <div className="max-w-md" id="select">
                <div className="mb-2 block">
                  <Label
                    htmlFor="origin "
                    value="Selecciona el origen de la especie"
                  />
                </div>
                <Select id="origin " required>
                  <option>Nativa</option>
                  <option>Endémica</option>
                </Select>
              </div>
              <div className="max-w-md" id="select">
                <div className="mb-2 block">
                  <Label
                    htmlFor="conservation_status"
                    value="Selecciona el estado de conservacion de la especie"
                  />
                </div>
                <Select id="conservation_status" required>
                  <option>Extinta (EX)</option>
                  <option>Extinta en estado salvaje (EW)</option>
                  <option>En peligro crítico (CR)</option>
                  <option>En peligro (EN)</option>
                  <option>Vulnerable (VU)</option>
                  <option>Casi Amenazada (NT)</option>
                  <option>Preocupación menor (LC)</option>
                  <option>Datos Insuficientes (DD)</option>
                  <option>No evaluada (NE)</option>
                </Select>
              </div>
              <div className="max-w-md" id="select">
                <div className="mb-2 block">
                  <Label
                    htmlFor="fauna_attraction"
                    value="Selecciona la atraccion de la fauna"
                  />
                </div>
                <Select id="fauna_attraction" required>
                  <option>No determinado</option>
                  <option>Baja</option>
                  <option>Media</option>
                  <option>Alta</option>
                </Select>
              </div>
            </div>
          </Tabs.Item>

          <Tabs.Item title="Etnobotánica">
            <div className="flex max-w-md flex-col gap-4">
              <div className="max-w-md" id="select">
                <div className="mb-2 block">
                  <Label
                    htmlFor="category"
                    value="Selecciona la categoria de uso de la especie"
                  />
                </div>
                <Select id="category" required>
                  <option>No determinado</option>
                  <option>Alimenticio</option>
                  <option>Aditivo de los alimentos</option>
                  <option>Alimento de animales vertebrados</option>
                  <option>Alimento de animales invertebrados</option>
                  <option>Apícola</option>
                  <option>Combustibles</option>
                  <option>Materiales</option>
                  <option>Social</option>
                  <option>Tóxico</option>
                  <option>Medicinal</option>
                  <option>Medioambiental</option>
                </Select>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="use_detail" value="Detelle de uso" />
                </div>
                <TextInput
                  id="use_detail"
                  sizing="md"
                  type="text"
                  placeholder="Describa el detalle de uso"
                />
              </div>
            </div>
          </Tabs.Item>

          <Tabs.Item title="Arbolicultura">
            <div className="flex max-w-md flex-col gap-4">
              <div className="max-w-md" id="select">
                <div className="mb-2 block">
                  <Label
                    htmlFor="public_spaceUse"
                    value="Selecciona El uso en espacio publico"
                  />
                </div>
                <Select id="public_spaceUse" required>
                  <option>No determinado</option>
                  <option>Andenes vía de servicio</option>
                  <option>Cerros</option>
                  <option>Glorietas</option>
                  <option>Orejas de puente</option>
                  <option>Parques</option>
                  <option>Plazas/Plazoletas</option>
                  <option>Retiros de quebrada</option>
                  <option>Separador de autopistas</option>
                  <option>Edificios institucionales</option>
                  <option>Antejardines</option>
                  <option>Separador de arterias principales</option>
                  <option>Vías peatonales</option>
                  <option>Separadores</option>
                </Select>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="flower_limitations"
                    value="Limitacion flores"
                  />
                </div>
                <TextInput
                  id="flower_limitations"
                  sizing="md"
                  type="text"
                  placeholder="Ingrese las Limitaciones florales de la especie"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="fruit_limitations" value="Limitacion fruto" />
                </div>
                <TextInput
                  id="fruit_limitations"
                  sizing="md"
                  type="text"
                  placeholder="Ingrese las Limitaciones frutales de la especie"
                />
              </div>
              <div className="max-w-md" id="select">
                <div className="mb-2 block">
                  <Label
                    htmlFor="longevity"
                    value="Seleccione el rango de logevidad de la especie"
                  />
                </div>
                <Select id="longevity" required>
                  <option>No determinado</option>
                  <option>Baja (0 - 35 años)</option>
                  <option>Media (36-60 años)</option>
                  <option>Alta (mayor a 60 años)</option>
                  <option>Alimento de animales invertebrados</option>
                  <option>Anual</option>
                  <option>Perenne</option>
                </Select>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="pests_diseases" value="Limitacion fruto" />
                </div>
                <TextInput
                  id="pests_diseases"
                  sizing="md"
                  type="text"
                  placeholder="Ingrese las plagas y enfermedades de la especie"
                />
              </div>
              <div className="max-w-md" id="select">
                <div className="mb-2 block">
                  <Label
                    htmlFor="light_requirements"
                    value="Seleccione el requerimiento de luminosidad que requeire especie"
                  />
                </div>
                <Select id="light_requirements" required>
                  <option>No determinado</option>
                  <option>Baja</option>
                  <option>Media</option>
                  <option>Alta</option>
                  <option>Sombra en estado juvenil</option>
                </Select>
              </div>
              <div className="max-w-md" id="select">
                <div className="mb-2 block">
                  <Label
                    htmlFor="growth_rate"
                    value="Selecciona la tasa de crecimiento de la especie"
                  />
                </div>
                <Select id="growth_rate" required>
                  <option>No determinado</option>
                  <option>Lenta</option>
                  <option>Media</option>
                  <option>Rápida</option>
                  <option>Lenta a Media</option>
                  <option>Media a Rápida</option>
                </Select>
              </div>
              <div className="max-w-md" id="select">
                <div className="mb-2 block">
                  <Label
                    htmlFor="maximum_height"
                    value="Selecciona el rango de la altura maxima de la especie (m)"
                  />
                </div>
                <Select id="maximum_height" required>
                  <option>menor que 7m</option>
                  <option>entre 7 y 15 m</option>
                  <option>mayor que 15 m</option>
                </Select>
              </div>
              <div className="max-w-md" id="select">
                <div className="mb-2 block">
                  <Label
                    htmlFor="crown_width"
                    value="Selecciona el rango de la amplitud de copa de la especie (m)"
                  />
                </div>
                <Select id="crown_width" required>
                  <option>Estrecha (menor a 7m)</option>
                  <option>Media (7-14m)</option>
                  <option>Amplia (mayor a 14m)</option>
                </Select>
              </div>
              <div className="max-w-md" id="select">
                <div className="mb-2 block">
                  <Label
                    htmlFor="crown_shape"
                    value="Selecciona la forma de copa de la especie (m)"
                  />
                </div>
                <Select id="crown_shape" required>
                  <option>No determinada</option>
                  <option>Aparasolada</option>
                  <option>Columnar</option>
                  <option>Estratificada</option>
                  <option>Globosa</option>
                  <option>Irregular</option>
                  <option>Oval</option>
                  <option>Péndula</option>
                  <option>Piramidal</option>
                  <option>Semiglobosa</option>
                </Select>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="DAP" value="DAP" />
                </div>
                <TextInput
                  id="DAP"
                  sizing="md"
                  type="text"
                  placeholder="Ingrese el DAP de la especie"
                />
              </div>
              <div className="max-w-md" id="select">
                <div className="mb-2 block">
                  <Label
                    htmlFor="foliage_density"
                    value="Selecciona la densidad de follaje de la especie"
                  />
                </div>
                <Select id="foliage_density" required>
                  <option>No determinada</option>
                  <option>Alta</option>
                  <option>Media</option>
                  <option>Baja</option>
                </Select>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="soil_type" value="Tipo de suelo" />
                </div>
                <TextInput
                  id="soil_type"
                  sizing="md"
                  type="text"
                  placeholder="Ingrese el tipo de suelo"
                />
              </div>
              <div className="max-w-md" id="select">
                <div className="mb-2 block">
                  <Label
                    htmlFor="humidity_zone"
                    value="Selecciona la zona de humedad"
                  />
                </div>
                <Select id="humidity_zone" required>
                  <option>No determinada</option>
                  <option>Seca</option>
                  <option>Húmeda</option>
                  <option>Muy húmeda</option>
                </Select>
              </div>
            </div>
          </Tabs.Item>
        </Tabs.Group>
      </div>
    </div>
  );
};

export default DashboardIndexPage;
