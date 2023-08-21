import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import DashboardNurseryPage from "./nurserySpecieForm";
import getSpecies, { type ISpeciesParams } from "@/app/actions/getSpecies";

const NurseryPage = async () => {
  const searchParams: ISpeciesParams = {
    name: "",
    family: "",
    commonNames: "",
  };
  const data = await getSpecies(searchParams);
  const cleanedData = data.map((item) => ({
    id: item.id,
    name: item.name,
    commonNames: item.taxonomy?.common_names,
  }));
  console.log(cleanedData);
  if (cleanedData == null || cleanedData.length === 0) {
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
      <DashboardNurseryPage nurserySpecieData={cleanedData} />
    </div>
  );
};

export default NurseryPage;
