import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import getSpeciesByName from "@/app/actions/getSpeciesByName";

interface IParams{
    name: string;
}

const EspeciePage = async ({params}: {params: IParams}) => {
    const species = await getSpeciesByName(params);
    if (!species) {
        return (
            <ClientOnly>
                <EmptyState title="Lo sentimos. Hubo un error." subtitle="Recarga la pagina. Si persiste el error, informanos." />
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