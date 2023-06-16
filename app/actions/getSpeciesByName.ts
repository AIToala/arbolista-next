import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";
interface IParams{
    name: string;
}

export default async function getSpeciesByName( params: IParams ){
    try{
        const currentUser = await getCurrentUser();
        let { name } = params;
        name = decodeURIComponent(name);
        const species = await prisma.species.findMany({
            select: {
                id: true,
                name: true,
                taxonomy: true,
                images: true,
                arboriculture: true,
                ecology: true,
                ethnobotany: true,
                flower: true,
                leaf: true,
                root: true,
                seeds: true,
                stalk: true,
                createdAt: true,
                updatedAt: true,
            },
            where: {
                name: name,
            },
        });
        if (!species) return null;
        const safeSpecies = species.map((specie) => ({
            ...specie,
            createdAt: specie.createdAt.toISOString(),
            updatedAt: specie.updatedAt.toISOString(),
        }));
        if (currentUser?.userRole === "ADMIN" || currentUser?.userRole === "SPECIES_ADMIN") return safeSpecies;
        else return {
            ...species,
        };
    } catch(err){
        return null;
    }
}