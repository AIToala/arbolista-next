import getViveroByName from "@/app/actions/getViveroByName";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import ViveroInfo from "./ViveroInfo";

interface IParams {
  name: string;
}

const ViveroPage = async ({ params }: { params: IParams }) => {
  const vivero = await getViveroByName(params);
  if (vivero == null) {
    return (
      <ClientOnly>
        <EmptyState
          title="Lo sentimos. Este vivero aun no existe."
          subtitle="=.="
          showReset
        />
      </ClientOnly>
    );
  }

  return (
    <div className="flex flex-col relative items-center w-full min-h-screen mb-[10rem]">
      <ViveroInfo data={vivero} />
    </div>
  );
};
export default ViveroPage;
