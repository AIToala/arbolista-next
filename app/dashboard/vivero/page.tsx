import getNurseryUser from "@/app/actions/getNurseryUsers";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import DashboardNurseryPage from "./nurseryForm";

const NurseryPage = async () => {
  const data = await getNurseryUser();
  if (data == null || data.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          showReset
          title="No hay viveristas registrados en el sistema"
          subtitle="Retorna al dashboard."
          urlAction="/dashboard/vivero"
        />
      </ClientOnly>
    );
  }
  return (
    <div className="flex flex-col w-full mx-4 !my-2 items-start h-full !mt-50 mr-10">
      <h1 className="scroll-m-20  pb-2 text-3xl font-bold tracking-tight transition-colors mt-5">
        Editar Usuario
      </h1>
      <DashboardNurseryPage userData={data} />
    </div>
  );
};

export default NurseryPage;
