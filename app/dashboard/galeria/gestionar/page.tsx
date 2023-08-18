/* eslint-disable @typescript-eslint/no-unused-vars */
import getEspeciesForTable, {
  type ISpeciesParams,
} from "@/app/actions/getSpeciesForTable";
import { DataTable } from "../../../components/data-table";
import { columns, type GallerySpecie } from "./columns";

export default async function GalleryPage() {
  const searchParams: ISpeciesParams = {
    name: "",
    family: "",
    conservationStatus: "",
    author: "",
    growthHabit: "",
  };
  const data = await getEspeciesForTable(searchParams);
  const cleanedData: GallerySpecie[] = data.map((item) => ({
    id: item.id,
    name: item.name,
    family: item.taxonomy.family.family,
    isInGallery: item.isInGallery,
    conservationStatus: item.conservationStatus,
  }));
  return (
    <div className="flex flex-col w-full mx-4 !my-2 items-start h-full">
      <div className="mx-4 mt-10 w-full pr-10">
        <h2 className="scroll-m-20  pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0">
          Especies( {data.length} )
        </h2>
        <p className="text-sm border-b pb-2 text-muted-foreground">
          Administra a todas las especies registrados en el sistema.
        </p>
      </div>
      <div className="container mx-auto py-10">
        <DataTable searchKey="name" columns={columns} data={cleanedData} />
      </div>
    </div>
  );
}
