/* eslint-disable @typescript-eslint/no-unused-vars */
import getCurrentUser from "@/app/actions/getCurrentUser";
import getViveros from "@/app/actions/getViveros";
import EmptyState from "@/app/components/EmptyState";
import { DataTable } from "../../../components/data-table";
import { columns } from "./columns";

export default async function NurseryUserPage() {
  const currentUser = await getCurrentUser();
  let data = await getViveros();
  if (
    currentUser?.userRole === "NURSERY_ADMIN" &&
    data !== null &&
    data.length > 0
  ) {
    data = data.filter((vivero) => vivero.ownerId === currentUser?.id);
  }
  if (data === null || data.length === 0) {
    return (
      <EmptyState
        title="No hay viveros registrados"
        subtitle="Empieza creando un nuevo vivero"
        showReset
        actionLabel="Crear vivero"
        urlAction="/dashboard/vivero-especies/gestionar/crear"
      />
    );
  }
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
