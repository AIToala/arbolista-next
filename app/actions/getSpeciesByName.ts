import prisma from "@/app/libs/prismadb";

interface IParams{
    name: string;
}

export default async function getSpeciesByName( params: IParams ){
    try{
        let { name } = params;
        name = decodeURIComponent(name);
        console.log(name);
        const species = await prisma.species.findUnique({
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
            },
            where: {
                name: name,
            },
        });
        if(!species) return null;
        return {
            ...species,
        };
    } catch(err){
        console.log(err);
        return null;
    } finally {
        await prisma.$disconnect();
    }
}