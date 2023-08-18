/* eslint-disable @typescript-eslint/no-unused-vars */
import { columns } from "./columns";
import { DataTable } from "../../../components/data-table";
import getViveros from "@/app/actions/getViveros";

export default async function NurseryUserPage() {
  const data = await getViveros();

  return (
    <div className="flex flex-col w-full mx-4 !my-2 items-start h-full">
      <div className="mx-4 mt-10 w-full pr-10">
        <h2 className="scroll-m-20  pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0">
          Viveros( {data.length} )
        </h2>
        <p className="text-sm border-b pb-2 text-muted-foreground">
          Administra a todos los viveros registrados en el sistema.
        </p>
      </div>
      <div className="container mx-auto py-10">
        <DataTable searchKey="name" columns={columns} data={data} />
      </div>
    </div>
  );
}
