import prisma from "@/app/libs/prismadb";

interface IParams {
  name: string;
}

export default async function getViveroByName(params: IParams) {
  try {
    let { name } = params;
    name = decodeURIComponent(name);
    const vivero = await prisma.nursery.findMany({
      include: {
        speciesAvailable: {
          select: {
            speciesAmount: true,
            speciesHeight: true,
            species: {
              select: {
                name: true,
              },
            },
          },
        },
      },
      where: {
        name,
      },
    });
    if (vivero == null) return null;
    return {
      ...vivero,
    };
  } catch (error: any) {
    return null;
  } finally {
    await prisma.$disconnect();
  }
}
