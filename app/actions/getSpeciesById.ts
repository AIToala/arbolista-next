import prisma from "@/app/libs/prismadb";

interface IParams {
  speciesId: string;
}

export default async function getSpeciesById(params: IParams) {
  try {
    const { speciesId } = params;
    console.log(speciesId);
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
        id: speciesId,
      },
    });
    if (species == null) return [];
    return {
      ...species,
    };
  } catch (err) {
    console.log(err);
    return [];
  } finally {
    await prisma.$disconnect();
  }
}
