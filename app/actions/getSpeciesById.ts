import prisma from "@/app/libs/prismadb";

interface IParams {
  id?: string;
}

export default async function getSpeciesById(params: IParams) {
  try {
    const { id } = params;
    const query: any = {};
    if (id != null) query.id = id;

    const species = await prisma.species.findUnique({
      select: {
        id: true,
        name: true,
        taxonomy: {
          include: {
            synonyms: true,
            family: true,
            bibliography: true,
          },
        },
        images: true,
        arboriculture: true,
        ecology: {
          include: {
            associated_fauna: true,
          },
        },
        ethnobotany: true,
        flower: true,
        leaf: true,
        root: true,
        seeds: true,
        stalk: true,
        availables_status: true,
      },
      where: query,
    });
    if (species == null) return null;
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
