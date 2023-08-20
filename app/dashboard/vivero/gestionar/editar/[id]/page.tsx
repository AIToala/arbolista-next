/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import getNurseryById from "@/app/actions/getNurseryById";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import NurseryEditForm from "@/app/components/NurseryEditForm";

interface IParams {
  id: string;
}

const NurseryEditPage = async ({ params }: { params: IParams }) => {
  const data = await getNurseryById(params);
  if (data == null) {
    return (
      <ClientOnly>
        <EmptyState
          showReset
          title="Usuario no existe"
          subtitle="Retorna al dashboard."
          urlAction="/dashboard/vivero/gestionar"
        />
      </ClientOnly>
    );
  }
  return (
    <div className="flex flex-col w-full mx-4 !my-2 items-start h-full !mt-50 mr-10">
      <h1 className="scroll-m-20  pb-2 text-3xl font-bold tracking-tight transition-colors mt-5">
        Editar Vivero
      </h1>
      <NurseryEditForm userData={data} />
    </div>
  );
};

export default NurseryEditPage;
