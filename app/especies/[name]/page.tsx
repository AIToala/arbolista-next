import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import getSpeciesByName from "@/app/actions/getSpeciesByName";
import TabEspeciesInfo from "./TabEspeciesInfo";
interface IParams{
    name: string;
}

const EspeciePage = async ({params}: {params: IParams}) => {
    const species = await getSpeciesByName(params);
    if (!species || species.length === 0) {
        return (
            <ClientOnly>
                <EmptyState title="Lo sentimos. Esta especie aun no existe." subtitle="=.=" showReset />
            </ClientOnly>
        );
    }
    
    return (
        <div className="flex flex-col relative items-center w-full min-h-screen">
            <div className="text-left bg-green-400 font-semibold w-full p-4">
                <h1>{species[0].name}</h1>
            </div>
            <TabEspeciesInfo data={species} />
        </div>
    );
}
export default EspeciePage;