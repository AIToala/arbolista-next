/* eslint-disable @typescript-eslint/no-unused-vars */
import { columns } from "./columns";
import { DataTable } from "../../../components/data-table";
import getUser from "@/app/actions/getUser";

export default async function UserPage() {
  const data = await getUser({});

  return (
    <div className="flex flex-col w-full mx-4 !my-2 items-start h-full">
      <div className="mx-4 mt-10 w-full pr-10">
        <h2 className="scroll-m-20  pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0">
          Usuarios( {data.length} )
        </h2>
        <p className="text-sm border-b pb-2 text-muted-foreground">
          Administra a todos los usuarios registrados en el sistema.
        </p>
      </div>
      <div className="container mx-auto py-10">
        <DataTable searchKey="name" columns={columns} data={data} />
      </div>
    </div>
  );
}
