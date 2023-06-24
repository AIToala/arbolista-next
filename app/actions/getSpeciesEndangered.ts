import prisma from "@/app/libs/prismadb";

export default async function getSpeciesByName() {
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
        ecology: {
          NOT: [
            {
              conservation_status: "NE",
            },
            {
              conservation_status: "DD",
            },
            {
              conservation_status: "LC",
            },
            {
              conservation_status: "NT",
            },
          ],
        },
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
  }
}
