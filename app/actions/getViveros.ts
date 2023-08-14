import prisma from "@/app/libs/prismadb";

export default async function getViveros() {
  try {
    const viveros = await prisma.nursery.findMany({
      include: {
        speciesAvailable: {
          select: {
            speciesId: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    const safeViveros = viveros.map(
      (vivero: {
        createdAt: { toISOString: () => any };
        updatedAt: { toISOString: () => any };
      }) => ({
        ...vivero,
        createdAt: vivero.createdAt.toISOString(),
        updatedAt: vivero.updatedAt.toISOString(),
      })
    );
    return safeViveros;
  } catch (error: any) {
    throw new Error(error);
  }
}
