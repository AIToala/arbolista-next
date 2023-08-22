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
    return viveros;
  } catch (error: any) {
    throw new Error(error);
  } finally {
    await prisma.$disconnect();
  }
}
