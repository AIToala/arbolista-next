import getSpeciesById from "@/app/actions/getSpeciesById";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import EspecieEditForm from "@/app/components/EspecieEditForm";

interface IParams {
  id: string;
}

const EspecieEditPage = async ({ params }: { params: IParams }) => {
  console.log(params);
  const data = await getSpeciesById(params);
  if (data == null) {
    return (
      <ClientOnly>
        <EmptyState
          showReset
          title="Especie no existe"
          subtitle="Retorna al dashboard."
          urlAction="/dashboard/especie/gestionar"
        />
      </ClientOnly>
    );
  }
  return (
    <div className="flex flex-col w-full mx-4 !my-2 items-start h-full !mt-50 mr-10">
      <h1 className="scroll-m-20  pb-2 text-3xl font-bold tracking-tight transition-colors mt-5">
        Editar Especie
      </h1>
      <EspecieEditForm speciesData={data} />
    </div>
  );
};

export default EspecieEditPage;
