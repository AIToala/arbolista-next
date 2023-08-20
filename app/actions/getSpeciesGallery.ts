import prisma from "@/app/libs/prismadb";

export default async function getSpeciesGallery() {
  try {
    const species = await prisma.species.findMany({
      select: {
        id: true,
        name: true,
        taxonomy: true,
        images: true,
        ecology: true,
        createdAt: true,
        updatedAt: true,
      },
      where: {
        isInGallery: true,
      },
    });
    const safeSpecies = species.map((specie) => ({
      ...specie,
      createdAt: specie.createdAt.toISOString(),
      updatedAt: specie.updatedAt.toISOString(),
    }));
    return safeSpecies;
  } catch (err) {
    return [];
  } finally {
    await prisma.$disconnect();
  }
}
