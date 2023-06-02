import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import getSpeciesByName from "@/app/actions/getSpeciesByName";

interface IParams{
    speciesName: string;
}

const EspeciePage = async ({params}: {params: IParams}) => {
    const species = await getSpeciesByName(params);
    console.log(species);
    if (!species) {
        return (
            <ClientOnly>
                <EmptyState showReset />
            </ClientOnly>
        );
    }
    return (
        <div>
            <h1>{species.name}</h1>
        </div>
    );
}
export default EspeciePage;