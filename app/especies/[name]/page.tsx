import getSpeciesByName from "@/app/actions/getSpeciesByName";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import TabEspeciesInfo from "./TabEspeciesInfo";

interface IParams {
  name: string;
}

const EspeciePage = async ({ params }: { params: IParams }) => {
  const species = await getSpeciesByName(params);
  if (species == null) {
    return (
      <ClientOnly>
        <EmptyState
          title="Lo sentimos. Esta especie aun no existe."
          subtitle="=.="
          showReset
        />
      </ClientOnly>
    );
  }

  return (
    <div className="flex flex-col relative items-center w-full min-h-screen mb-[10rem]">
      <TabEspeciesInfo data={species} />
    </div>
  );
};
export default EspeciePage;
